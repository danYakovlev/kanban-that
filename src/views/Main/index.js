import React from 'react';
import CSSModules from 'react-css-modules';
import Button from 'material-ui/Button';

import styles from './styles.scss';

const Main = () => (
    <div styleName="Main">
        <Button raised color="primary">
            Main
        </Button>
    </div>
);

export default CSSModules(styles)(Main);
