
import React, { useState } from 'react';
import Button from "@mui/material/Button";
import TextField from '@mui/material/TextField';
import Card from '@mui/material/Card';
import backgroundImage from './images/FINAL.png'

function Signup() {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      width: '100vw',
      height: '100vh',
      padding: 0
    }}>
      <div style={{
        backgroundImage: `url(${backgroundImage})`,
        width: "100vw",
        height: "100vh",
        backgroundSize: 'cover',
      }}></div>

      <Card
        style={{
           position: 'absolute',
            bottom: 30,
             right: 20,
      
            backgroundColor: 'grey',
            width: 300,
            padding: 20,
            color: 'white',
        }}
      >
        <TextField  style={{
          color: 'white',
          marginBottom: 20,

        }}
          onChange={(e) => setemail(e.target.value)}
          fullWidth
          id="username"
          label="Email"
          variant="outlined"
          
        />
        <TextField
          onChange={(e) => setpassword(e.target.value)}
          fullWidth
          id="password"
          label="Password"
          variant="outlined"
          style={{ marginBottom: 10 }} 
        />
     <Button 
  variant="standard"
   onClick={() => {
    function callback2(data){
      localStorage.setItem("token", data.token);
      console.log("token: ", data.token);
    }
    function callback1(res){
      res.json().then(callback2)
    }

    fetch("http://localhost:3000/user/signup", {
      method: "POST",
      body: JSON.stringify({
        username: email,
        password: password,
      }),
      headers: {
        "Content-type": "application/json",
      }
    }).then(callback1);
  }}
>
 Sign Up
</Button>

      </Card>
    </div>
  );
}

export default Signup;
