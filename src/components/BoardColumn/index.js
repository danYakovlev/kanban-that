import React, { Component } from 'react';
import CSSModules from 'react-css-modules';

import styles from './styles.scss';


class BoardColumn extends Component {
    render() {
        const { title } = this.props;

        return (
            <div ref={this.props.refProp} styleName="BoardColumn">
                <div styleName="title">
                    { title || '' }
                </div>
                <div>
                    {this.props.children}
                </div>
            </div>
        );
    }
}

export default CSSModules(styles)(BoardColumn);
