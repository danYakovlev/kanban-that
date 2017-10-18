import React, { Component } from 'react';
import CSSModules from 'react-css-modules';

import styles from './styles.scss';


class TicketCard extends Component {
    render() {
        return (
            <div styleName="TicketCard">
                Ticket card
            </div>
        );
    }
}

export default CSSModules(styles)(TicketCard);
