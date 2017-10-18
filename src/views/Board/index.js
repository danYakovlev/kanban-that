import React, { Component } from 'react';
import CSSModules from 'react-css-modules';

import Button from 'material-ui/Button';
import Tooltip from 'material-ui/Tooltip';
import AddIcon from 'material-ui-icons/Add';
import Menu, { MenuItem } from 'material-ui/Menu';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import BoardColumn from '../../components/BoardColumn';
import TicketCard from '../../components/TicketCard';

import styles from './styles.scss';

// @FIXME remove next lines
const getItems = count =>
    Array.from({ length: count }, (v, k) => k).map(k => ({
        id: `item-${k}`,
        content: `item ${k}`,
    }));

const reorder = (list, startIndex, endIndex) => {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);

    return result;
};
// -------------

class Board extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: getItems(10),
        };
    }

    onDragEnd = result => {
        // dropped outside the list
        if (!result.destination) {
            return;
        }

        const items = reorder(
            this.state.items,
            result.source.index,
            result.destination.index,
        );

        this.setState({
            items,
        });
    }

    onClick = () => {
        console.log('add column');
    }

    renderMenu = () => (
        <Menu>
            <MenuItem>Add column</MenuItem>
        </Menu>
    )

    render() {
        return (
            <div styleName="Board">
                <Tooltip placement="top" title="Add column">
                    <Button onClick={this.onClick} styleName="control" fab color="primary" aria-label="add">
                        <AddIcon />
                    </Button>
                </Tooltip>
                <DragDropContext onDragEnd={this.onDragEnd}>
                    <Droppable droppableId="droppable">
                        {(provided, snapshot) => (
                            <BoardColumn
                                ref={provided.innerRef}
                                active={snapshot.isDraggingOver}
                            >
                                {this.state.items.map(item => (
                                    <Draggable key={item.id} draggableId={item.id}>
                                        {(provided, snapshot) => (
                                            <div>
                                                <TicketCard
                                                    ref={provided.innerRef}
                                                    active={snapshot.isDragging}
                                                    {...provided.dragHandleProps}
                                                >
                                                    {item.content}
                                                </TicketCard>
                                                {provided.placeholder}
                                            </div>
                                        )}
                                    </Draggable>
                                ))}
                                {provided.placeholder}
                            </BoardColumn>
                        )}
                    </Droppable>
                </DragDropContext>
            </div>
        );
    }
}

export default CSSModules(styles)(Board);
