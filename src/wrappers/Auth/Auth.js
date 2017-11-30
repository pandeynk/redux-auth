import React, {Component} from 'react';
import 'isEmpty' from 'lodash/isEmpty';

const withAuth = (WrappedComponent)=>{
    return class AuthComponent extends Component{
        render(){
            let isAuthenticated = false;
            if(!isEmpty(this.props.auth.username)){
                isAuthenticated = true;
            }
            return (<WrappedComponent {...this.props} login={{email: "nandan@gmail.com", password: "nandan"}}/>);
        }
    };
};

export default withAuth;
