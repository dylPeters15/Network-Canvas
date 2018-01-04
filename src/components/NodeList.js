import React, { Component } from 'react';
import { compose } from 'redux';
import PropTypes from 'prop-types';
import { find, get } from 'lodash';
import cx from 'classnames';
import { Node, animation } from 'network-canvas-ui';
import { TransitionGroup } from 'react-transition-group';
import { NodeTransition } from './Transition';
import { scrollable, selectable } from '../behaviours';
import {
  DragSource,
  DropTarget,
  MonitorDropTarget,
  MonitorDragSource,
} from '../behaviours/DragAndDrop';

const EnhancedNode = DragSource(selectable(Node));

/**
  * Renders a list of Node.
  */
class NodeList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      nodes: props.nodes,
    };

    this.refreshTimer = null;
  }

  componentWillReceiveProps(newProps) {
    if (newProps.id === this.props.id) {
      this.setState({ nodes: newProps.nodes });
      return;
    }

    this.setState(
      { nodes: [] },
      () => {
        if (this.refreshTimer) { clearTimeout(this.refreshTimer); }
        this.refreshTimer = setTimeout(() => this.setState({ nodes: newProps.nodes }), animation.duration.slow);
      },
    );
  }

  render() {
    const {
      nodeColor,
      label,
      selected,
      onSelect,
      itemType,
      isOver,
      willAccept,
      meta,
    } = this.props;

    const nodes = this.state.nodes;

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
        {
          nodes.map(node => (
            <NodeTransition key={node.uid}>
              <EnhancedNode
                color={nodeColor}
                label={label(node)}
                selected={selected(node)}
                onSelected={() => onSelect(node)}
                meta={() => ({ ...node, itemType })}
                {...node}
              />
            </NodeTransition>
          ))
        }
        { isOver && willAccept &&
          <Node key="placeholder" placeholder />
        }
      </TransitionGroup>
    );
  }
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
