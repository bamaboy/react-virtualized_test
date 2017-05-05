import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';

const dragDropContext = DragDropContext(HTML5Backend);
const type = 'dnd';

export { dragDropContext, type };