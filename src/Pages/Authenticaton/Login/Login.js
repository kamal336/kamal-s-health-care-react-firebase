import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useHistory, useLocation } from 'react-router-dom';
import useAuth from '../../../contexts/useAuth';


const Login = () => {
    const {githubLogin,signingGoogle,error} = useAuth();
      const location = useLocation();
      const history = useHistory();
      const redirect_uri = location.state?.from || "/home";
      const handleGoogleLogin = () =>{
        signingGoogle()
        .then(result=>{
           history.push(redirect_uri)
        })
      }
    return (
        <div className="w-50 mx-auto mt-4 login">
        <h1 className="text-center text-primary">Please Login</h1>
        <Form >
          <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control  type="email" placeholder="Enter email" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control  type="password" placeholder="Password" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
          </Form.Group>
          <Button className="mb-4 me-3" variant="primary" type="submit">
           Login
          </Button>
          <Button className="mb-4 " variant="primary" type="submit">
           Reset
          </Button>
        
        </Form>
        <div className="my-3 mb-3 text-danger">{error}</div>
        <span onClick={handleGoogleLogin}  className="bg-light p-2 rounded me-3"><img src="" alt="" /> Google</span>

        <span onClick={githubLogin}  className="bg-light p-2 me-3 rounded"><img width="20px" src="https://cdn-icons-png.flaticon.com/512/270/270798.png" alt="" /> Github</span>

        <span  className="bg-light p-2 me-3 rounded"><img width="20px" src="https://cdn-icons.flaticon.com/png/512/176/premium/176686.png?token=exp=1633932701~hmac=3a4cf9f1f59ac6c1fd16c29d2b61f16c" alt="" /> Facebook</span>
        
        <p></p>
        <Link to="/register">New User?</Link>
    </div>
    );
};

export default Login;