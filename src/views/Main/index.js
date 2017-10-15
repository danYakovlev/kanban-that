import React from 'react';
import CSSModules from 'react-css-modules';
import { Link } from 'react-router-dom';
import Button from 'material-ui/Button';

import styles from './styles.scss';

const Main = () => (
    <div styleName="Main">
        <div styleName="logo" />
        <Link to="/board">
            <Button color="contrast">
                Try
            </Button>
        </Link>
    </div>
);

export default CSSModules(styles)(Main);
