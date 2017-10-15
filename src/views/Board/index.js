import React, { Component } from 'react';
import CSSModules from 'react-css-modules';

import styles from './styles.scss';


class Board extends Component {
    render() {
        return (
            <div styleName="Board">
              Board
            </div>
        );
    }
}

export default CSSModules(styles)(Board);
