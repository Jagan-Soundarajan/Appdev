import React, { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import { Button, TextField, Stack, Alert } from '@mui/material';
import axios from "axios";
import './Login.css';
import Appbar from "./Appbar";
import Footer from "./Footer";

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission

    try {
      const response = await axios.get(`http://localhost:8080/user/login/${email}/${password}`);
      console.log(response.data);
      

      if (response.data) {
        alert("Login success");
        navigate('/'); // Redirect to homepage on successful login
        setError(false);
      } else {
        setError(true);
      }
    } catch (error) {
      console.error('Error during login:', error);
      setError(true);
    }
  };

  return (
    <div className='bodyl'>
      <div className='bodybox'>
        <div className='dom'>
          <h1><span>LOGIN</span></h1>
          <br />
          <form className='f1' onSubmit={handleSubmit}>
            <TextField
              className='textfield'
              id="outlined-basic"
              label="EMAIL"
              variant="outlined"
              onChange={(e) => setEmail(e.target.value)}
            />
            <br />
            <TextField
              className='textfield'
              type="password"
              id="outlined-basic"
              label="PASSWORD"
              variant="outlined"
              onChange={(e) => setPassword(e.target.value)}
            />
            <br />
            <div className='box2'>Forgot Password?</div>
            <br />
            <Stack sx={{ width: '100%' }} spacing={2}>
              {error && <Alert severity="warning">Wrong email or password!</Alert>}
            </Stack>
            <br />
            <Button className='rel' variant="contained" type="submit">LogIn</Button>
            <br />
            <h4><small><span>OR</span></small></h4>
            <br />
            <div className='box1'>
              <span>Don't have an account?</span>
              <Link to='/register'>
                <Button>REGISTER</Button>
              </Link>
            </div>
            <br />
          </form>
        </div>
      </div>
    </div>
  );
}
