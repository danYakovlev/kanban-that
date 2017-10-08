import { observable } from 'mobx';

class AppStore {
    @observable appName;

    constructor(appName = '') {
        this.appName = appName;
    }
}

export default AppStore;
