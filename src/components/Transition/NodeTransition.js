import React from 'react';
import PropTypes from 'prop-types';
import { Transition } from 'react-transition-group';
import { animation } from 'network-canvas-ui';
import anime from 'animejs';

const appear = {
  opacity: [0, 1],
  translateY: ['100%', 0],
  duration: animation.duration.standard,
};

const disappear = {
  opacity: [1, 0],
  scale: [1, 0],
  duration: animation.duration.slow,
};

const NodeTransition = ({ children, ...props }) => (
  <Transition
    timeout={{
      enter: animation.duration.standard,
      exit: animation.duration.slow,
    }}
    onEntering={
      (el) => {
        anime({
          targets: el,
          elasticity: 0,
          easing: 'easeOutElastic',
          ...appear,
        });
      }
    }
    onExiting={
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

NodeTransition.propTypes = {
  children: PropTypes.any.isRequired,
};

NodeTransition.defaultProps = {
  children: null,
};

export default NodeTransition;
