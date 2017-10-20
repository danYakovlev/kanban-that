import React, { Component } from 'react';
import CSSModules from 'react-css-modules';

import styles from './styles.scss';


class TicketCard extends Component {
    render() {
        return (
            <div styleName="TicketCard">
                { this.props.children }
            </div>
        );
    }
}

export default CSSModules(styles)(TicketCard);
