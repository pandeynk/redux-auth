import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import isEmpty from 'lodash/isEmpty';

class Login extends Component{
    render(){
        return (
                <div className="container" style={{"marginTop": "200px"}}>
                    <div className="row">
                        <div className="col-md-4"></div>
                        <div className="col-md-4">
                            <h1>You are logged in.</h1>
                        </div>
                        <div className="col-md-4"></div>
                    </div>
                </div>
            )
    }
}

const mapStateToProps = (state)=>{
    return {
        auth: state.auth
    };
};

const mapDispatchToProps = (dispatch)=>{
    return {
        actions: bindActionCreators({}, dispatch)
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
