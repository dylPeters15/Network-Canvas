import { throttle, filter, isMatch } from 'lodash';

const maxFramesPerSecond = 60;

function isTouch(event) {
  if (typeof TouchEvent !== 'undefined' && event instanceof TouchEvent) {
    return true;
  }
  return false;
}

function getCoords(event) {
  if (isTouch(event)) {
    const touch = event.changedTouches.item(0);
    return {
      x: touch.clientX,
      y: touch.clientY,
    };
  }

  return {
    x: event.clientX,
    y: event.clientY,
  };
}

function moveDelta(start, end) {
  return {
    dy: end.y - start.y,
    dx: end.x - start.x,
  };
}

function moveDistance({ dx, dy }) {
  return ((dx ** 2) + (dy ** 2)) ** 0.5;
}

function moveAngle({ dx, dy }) {
  return Math.atan(dy / dx);
}

function axisProximityFromAngle(angle) {
  return Math.abs(Math.cos(2 * angle)) ** 2;
}

function determineMoveType(movement) {
  if (movement.velocity * movement.axisProximity > 0.1) {
    return 'SWIPE';
  }
  return 'DRAG';
}

const initalState = {
  moveStart: false,
  dragStart: false,
  type: null,
};

class dragManager {
  constructor({ el, onDragStart, onDragMove, onDragEnd }) {
    this.state = { ...initalState };
    this.el = el;
    this.onDragStart = onDragStart;
    this.onDragMove = onDragMove;
    this.onDragEnd = onDragEnd;
    this.el.addEventListener('touchstart', this.onMoveStart, { passive: true });
    this.el.addEventListener('touchmove', this.onMove);
    this.el.addEventListener('touchend', this.onMoveEnd, { passive: true });
    this.el.addEventListener('mousedown', this.onMoveStart, { passive: true });
  }

  unmount() {
    this.removeMouseTracking();
    if (this.el) {
      this.el.removeEventListener('touchstart', this.onMoveStart);
      this.el.removeEventListener('touchmove', this.onMove);
      this.el.removeEventListener('touchend', this.onMoveEnd);
      this.el.removeEventListener('mousedown', this.onMoveStart);
    }
  }

  trackMouse = () => {
    window.addEventListener('mousemove', this.onMove);
    window.addEventListener('mouseup', this.onMoveEnd, { passive: true });
  }

  removeMouseTracking = () => {
    window.removeEventListener('mousemove', this.onMove);
    window.removeEventListener('mouseup', this.onMoveEnd);
  }

  movementFromEvent = (e) => {
    const state = this.state;
    const { x, y } = getCoords(e);
    const { dy, dx } = moveDelta(state, { x, y });
    const t = new Date().getTime();
    const dt = t - state.t;
    const distance = moveDistance({ dy, dx });
    const angle = moveAngle({ dy, dx });
    const axisProximity = axisProximityFromAngle(angle);
    return {
      x,
      y,
      dy,
      dx,
      dt,
      velocity: distance / dt,
      distance,
      axisProximity,
      angle,
    };
  }

  detectMoveType = (e, movement) => {
    const moveType = this.state.type || determineMoveType(movement);

    if (moveType === 'DRAG') {
      e.preventDefault();
    }

    if (!this.state.type) {
      this.state.type = moveType;
    }
  }

  detectDragStart = (movement) => {
    if (this.state.type === 'DRAG' && this.state.dragStart === false && movement.distance > 4) {
      this.state.dragStart = true;
      this.onDragStart(movement);
    }
  }

  onMoveStart = (e) => {
    this.trackMouse();
    const { x, y } = getCoords(e);
    this.state = {
      ...this.state,
      moveStart: true,
      dragStart: false,
      type: isTouch(e) ? null : 'DRAG', // if mouse, assume drag
      start: { x, y },
      t: new Date().getTime(),
      x,
      y,
    };
  }

  onMove = (e) => {
    if (this.state.moveStart === true) {
      const movement = this.movementFromEvent(e);
      const { x, y, t } = movement;

      // Determine move type
      this.detectMoveType(e, movement);

      // Detect drag start
      this.detectDragStart(movement);

      if (this.state.dragStart === true) {
        this.onDragMove(movement);
      }

      this.state = { ...this.state, x, y, t };
    }
  }

  onMoveEnd = (e) => {
    this.removeMouseTracking();

    if (this.state.dragStart === true) {
      const movement = this.movementFromEvent(e);

      this.onDragEnd(movement);
    } else {
      this.state = { ...initalState };
    }
  }

  isDragging = () => this.state.dragStart === true;
}

export default dragManager;
