import { observable, computed, map, toJS } from 'mobx';

class BoardStore {
    @observable columns = map({});
    @observable tickets = map({});

    constructor() {
        // firebase.database().ref('column').on('value', snapshot => {
        //     this.columns = snapshot.val();
        // });
    }

    @computed get json() {
        return toJS(this.columns);
    }
}

export default BoardStore;

