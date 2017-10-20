import AppStore from './AppStore';
import BoardStore from './BoardStore';

const stores = {
    AppStore: new AppStore('KanbanThat'),
    BoardStore: new BoardStore(),
};

export default stores;
