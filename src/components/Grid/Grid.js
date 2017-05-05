import React, { Component } from 'react';
import { Table, Column } from 'react-virtualized'
import { DragSource } from 'react-dnd';
import 'react-virtualized/styles.css';
import RowRenderer from './RowRenderer';
import { type } from '../../utils/dnd';
import './styles.css';

const source = {
  beginDrag(props) {
    console.log(props.rowData);
    return props.rowData;
  }
};

function collect(connect, monitor) {
  return {
    connectDragSource: connect.dragSource(),
    connectDragPreview: connect.dragPreview(),
    isDragging: monitor.isDragging()
  };
}

const DraggableRowRenderer = DragSource(type, source, collect)(RowRenderer);

export default class Grid extends Component {

  constructor(props) {
    super(props);
    this.state = {
      list: [
        {id: 1, name: 'Ivan', age: 18},
        {id: 2, name: 'John', age: 20},
        {id: 3, name: 'Oleg', age: 17},
        {id: 4, name: 'Bob', age: 30},
        {id: 5, name: 'Kenny', age: 19},
        {id: 6, name: 'Brian', age: 41},
        {id: 7, name: 'Brad', age: 35}
      ]
    };
  }

  render() {
    const { list } = this.state;

    return (
      <div>
        <Table
          width={500}
          height={300}
          headerHeight={50}
          rowHeight={50}
          rowCount={list.length}
          rowGetter={({index}) => list[index]}
          rowRenderer={props => <DraggableRowRenderer {...props} />}
        >
          <Column
            label="ID"
            dataKey="id"
            width={50}
          />
          <Column
            label="Name"
            dataKey="name"
            width={350}
          />
          <Column
            label="Age"
            dataKey="age"
            width={100}
          />
        </Table>
      </div>
    );
  }
}