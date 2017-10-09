import React from 'react';
import CSSModules from 'react-css-modules';
import Button from 'material-ui/Button';

import styles from './styles.scss';

const Main = () => (
    <div styleName="Main">
        {/*Coming soon...*/}
        <Button color="contrast">
            Try it
        </Button>
    </div>
);

export default CSSModules(styles)(Main);
