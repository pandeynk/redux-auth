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
                            <div className="panel panel-default">
                                <div className="panel-heading">{!isEmpty(this.props.login.email)?this.props.login.email:"mepandeyn@gmail.com"}</div>
                                <div className="panel-body">
                                    <div className="form-group">
                                        <label forName="email">Email</label>
                                        <input type="text" id="email" className="form-control" placeholder="Email" />
                                    </div>
                                    <div className="form-group">
                                        <label forName="password">Password</label>
                                        <input type="text" id="password" className="form-control" placeholder="Password" />
                                    </div>
                                </div>
                                <div className="panel-footer">
                                    <button className="btn btn-sm btn-primary">Login</button>
                                </div>
                            </div>
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
