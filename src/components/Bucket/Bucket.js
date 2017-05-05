import React, { Component } from 'react';
import { DropTarget } from 'react-dnd';
import { type } from '../../utils/dnd';
import './styles.css';

const target = {
  drop(props, monitor) {
    console.log(monitor.getItem());
  },
  canDrop(props, monitor) {
    return monitor.getItem().id % 2 !== 0;
  }
};

function collect(connect, monitor) {
  return {
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver(),
    canDrop: monitor.canDrop()
  }
}

class Bucket extends Component {

  render() {
    const { isOver, connectDropTarget, canDrop } = this.props;
    return connectDropTarget(
      <div className="bucket">
        { isOver && canDrop && "Бросай"}
        { isOver && !canDrop && "STOP!!!!"}
        { !isOver && "Я ведро"}
      </div>
    )
  }
}

export default DropTarget(type, target, collect)(Bucket);