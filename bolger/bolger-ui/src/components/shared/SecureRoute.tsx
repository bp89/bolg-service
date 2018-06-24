import React  from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { Route, Redirect, RouteComponentProps, RouteProps }  from 'react-router';

import { RootState } from '../../reducers';
import { State as UserState } from '../../reducers/user';
import { isAuthenticated } from '../../util/auth';
import { routes } from '../../util/constants';

// tslint:disable-next-line:no-any
type RouteComponent = React.StatelessComponent<RouteComponentProps<{}>> | React.ComponentClass<any>;

interface Props {
    user: UserState;
    component: RouteComponent;
    path: string;
}

class SecureRoute extends React.Component<Props> {

    renderFn = (ChildComponent?: RouteComponent) => (props: RouteProps) => {
        if (!ChildComponent) {
            return null;
        }

        if (isAuthenticated()) {
            return <ChildComponent {...props} />;
        }

        const redirectProps = {
            to: {
                pathname: routes.blogs,
                state: {from: props.location},
            },
        };

        return <Redirect {...redirectProps} />;
    }

    render() {
        const { component, children, ...rest } = this.props;

        return (
            <Route
                {...rest}
                render={this.renderFn(component)}
            />
        );
    }
}

export default connect(createStructuredSelector({
    user: (state: RootState) => state.user
}))(SecureRoute);