import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min';





const Login = () => {
    return (
        <>
        <div className='container p-5'>
            <div className='row'>
                <div className='col-md-6 offset-md-3'>
                    <h4>Login</h4>
                    <form>
                        <div className="form-group mb-3">
                            <input type="email" className='form-control' placeholder='Your email'/>
                        </div>
                        <div className='form-group mb-3'>
                            <input type="password" className='form-control' placeholder='Your password'/>
                        </div><br/>
                        <button disabled type='button' className="ant-btn ant-btn-primary ant-btn-round ant-btn-lg ant-btn-block mb-3">Login with Email/Password</button>
                        <button  type='button' className="ant-btn ant-btn-danger ant-btn-round ant-btn-lg ant-btn-block mb-3"><span></span>Login with Google</button>
                    </form>
                </div>
            </div>
        </div>

        </>
    )
}

export default Login;