import React, { Component } from 'react';
import { dragDropContext } from './utils/dnd';
import Grid from './components/Grid';
import Bucket from './components/Bucket';

class App extends Component {
  render() {
    return (
      <div>
        <p>
          <i>Совмещение react-dnd и react-virtualized</i>
        </p>
        <div>
          <Grid />
          <Bucket />
        </div>
      </div>
    );
  }
}

export default dragDropContext(App);