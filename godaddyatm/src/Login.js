import React from 'react';
import fire from './config/fire';

class Login extends React.Component {

    login() {


    }




    render() {
        return (
            <div style={{ textAlign: 'center' }}>
                <div>
                    <div>Account Number</div>
                    <input id="accountnumber" placeholder="Account Number" type="text" />
                </div>
                <button style={{ magin: '10px' }} onClick={this.login}>Login</button>
            </div>
        )
    }

}

export default Login;