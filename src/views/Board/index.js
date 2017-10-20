import React, { Component } from 'react';
import CSSModules from 'react-css-modules';
import { inject } from 'mobx-react';

import Button from 'material-ui/Button';
import Tooltip from 'material-ui/Tooltip';
import AddIcon from 'material-ui-icons/Add';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import BoardColumn from '../../components/BoardColumn';
import TicketCard from '../../components/TicketCard';

import styles from './styles.scss';

// @FIXME remove next lines
const getItems = (count, prefix) =>
    Array.from({ length: count }, (v, k) => k).map(k => ({
        id: `${prefix}-item-${k}`,
        content: `${prefix}-item ${k}`,
    }));
// -------------

@inject('BoardStore')
class Board extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: getItems(10, 'items'),
            boards: getItems(2, 'board'),
        };
        console.log(props);
    }

    onDragEnd = result => {
        // dropped outside the list
        if (!result.destination) {
            return;
        }

        console.log('daragEnd');
    }

    onClick = () => {
        console.log('add column');
    }

    render() {
        return (
            <div styleName="Board">
                <Tooltip placement="top" title="Add column">
                    <Button onClick={this.onClick} styleName="control" fab color="primary" aria-label="add">
                        <AddIcon />
                    </Button>
                </Tooltip>
                <DragDropContext onDragEnd={this.onDragEnd}>
                    <div styleName="board-columns">
                        {this.state.boards.map(board => (
                            <Droppable key={board.id} droppableId={board.id}>
                                {(provided, snapshot) => (
                                    <div ref={provided.innerRef}>
                                        <BoardColumn>
                                            {this.state.items.map(item => (
                                                <Draggable key={item.id + board.id} draggableId={item.id + board.id}>
                                                    {(provided, snapshot) => (
                                                        <div>
                                                            <div
                                                                ref={provided.innerRef}
                                                                style={provided.draggableStyle}
                                                                {...provided.dragHandleProps}
                                                            >
                                                                <TicketCard>
                                                                    {item.content}
                                                                </TicketCard>
                                                            </div>
                                                            {provided.placeholder}
                                                        </div>
                                                    )}
                                                </Draggable>
                                            ))}
                                            {provided.placeholder}
                                        </BoardColumn>
                                    </div>
                                )}
                            </Droppable>
                        ))}
                    </div>
                </DragDropContext>
            </div>
        );
    }
}

export default CSSModules(styles)(Board);
