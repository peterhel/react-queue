import isEqual from './isEqual';
import React from 'react';

class WithQueue extends React.Component {
    state = {
        props: this.props.props
    };

    entities = [];
    lastPushed = null;
    looping = false;

    loop = () => {
        this.looping = true;
        const entity = this.entities.pop();

        if (entity) {
            this.setState({ props: { ...this.state.props, entity } });
            setTimeout(this.loop, this.props.duration);
        } else {
            this.looping = false;
            this.setState({ props: {} });
        }
    };

    componentWillReceiveProps = nextProps => {
        const { entity } = nextProps;
        if (entity && !isEqual(this.lastPushed, entity)) {
            this.lastPushed = entity;
            this.entities.unshift(entity);

            if (!this.looping) {
                setImmediate(this.loop);
            }
        }
    };

    render = () => {
        return React.createElement(this.props.component, this.state.props);
    };
}

WithQueue.defaultProps = {
    duration: 7000
};

const withQueue = function(initFn) {
    return WrappedComponent => {
        console.log(WrappedComponent);
        return _props => {
            const props = initFn(_props);
            return <WithQueue {...props} component={WrappedComponent} />;
        };
    };
};

export { withQueue };

export default {
    withQueue
};
