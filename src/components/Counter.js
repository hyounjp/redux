import React, { Component } from 'react'
import PropTypes from 'prop-types'

import Value from './Value.js'
import Control from './Control.js'

const propTypes = {
};
const defaultProps = {
};
class Counter extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return(
          <div>
            <Value />
            <Control />
          </div>
        );
    }
}
Counter.propTypes = propTypes;
Counter.defaultProps = defaultProps;
export default Counter;
