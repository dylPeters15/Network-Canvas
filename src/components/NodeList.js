import React from 'react';
import { compose } from 'redux';
import PropTypes from 'prop-types';
import { find, get } from 'lodash';
import cx from 'classnames';
import { Node, animation } from 'network-canvas-ui';
import { Transition, TransitionGroup } from 'react-transition-group';
import anime from 'animejs';
import { scrollable, selectable } from '../behaviours';
import {
  DragSource,
  DropTarget,
  MonitorDropTarget,
  MonitorDragSource,
} from '../behaviours/DragAndDrop';

const EnhancedNode = DragSource(selectable(Node));

const appear = {
  opacity: [0, 1],
  translateY: ['100%', 0],
  duration: animation.duration.standard,
};

const disappear = {
  opacity: [1, 1],
  scale: [3, 0],
  duration: animation.duration.standard,
};

const AppearTransition = ({ children, ...props }) => (
  <Transition
    timeout={animation.duration.standard}
    onEnter={
      (el) => {
        anime({
          targets: el,
          elasticity: 0,
          easing: 'easeOutElastic',
          ...appear,
        });
      }
    }
    onExit={
      (el) => {
        anime({
          targets: el,
          elasticity: 0,
          easing: 'easeOutElastic',
          ...disappear,
        });
      }
    }
    {...props}
  >
    { children }
  </Transition>
);

AppearTransition.propTypes = {
  children: PropTypes.any.isRequired,
};

AppearTransition.defaultProps = {
  children: null,
};

/**
  * Renders a list of Node.
  */
const NodeList = ({
  nodes,
  nodeColor,
  label,
  selected,
  onSelect,
  itemType,
  isOver,
  willAccept,
  meta,
}) => {
  const isSource = !!find(nodes, ['uid', get(meta, 'uid', null)]);

  const classNames = cx(
    'node-list',
    { 'node-list--hover': !isSource && willAccept && isOver },
    { 'node-list--drag': !isSource && willAccept }, // TODO: rename class
  );

  return (
    <TransitionGroup
      className={classNames}
    >
      { isOver && willAccept &&
        <Node key="placeholder" placeholder />
      }
      {
        nodes.map(node => (
          <AppearTransition key={node.uid}>
            <EnhancedNode
              color={nodeColor}
              label={label(node)}
              selected={selected(node)}
              onSelected={() => onSelect(node)}
              meta={() => ({ ...node, itemType })}
              {...node}
            />
          </AppearTransition>
        ))
      }
    </TransitionGroup>
  );
};

NodeList.propTypes = {
  nodes: PropTypes.array.isRequired,
  nodeColor: PropTypes.string,
  onSelect: PropTypes.func,
  itemType: PropTypes.string,
  label: PropTypes.func,
  selected: PropTypes.func,
  isOver: PropTypes.bool,
  willAccept: PropTypes.bool,
  meta: PropTypes.object,
};

NodeList.defaultProps = {
  nodes: [],
  nodeColor: '',
  label: () => (''),
  selected: () => false,
  onSelect: () => {},
  onDrop: () => {},
  itemType: 'NODE',
  isOver: false,
  willAccept: false,
  isDragging: false,
  meta: {},
};

export default compose(
  DropTarget,
  MonitorDropTarget(['isOver', 'willAccept']),
  MonitorDragSource(['meta', 'isDragging']),
  scrollable,
)(NodeList);
