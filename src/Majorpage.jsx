import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';


function MajorPage() {
  const [food, setFood] = useState("");
  const navigate = useNavigate();
  const nextpage = async () => {
    try {
      const response = await fetch('/data');
      const data = await response.json();
      console.log('Data from /data endpoint:', data);
       
    } 
    catch (error) {
      console.log('Error fetching recipes', error);
    }};
  const handleClick = async () => {
    try {
      const response = await fetch("http://localhost:3000/user/majorpage", {
        method: "POST",
        body: JSON.stringify({
          food: food,
        }),
        headers: {
          "Content-type": "application/json",
          "Authorization": "Bearer " + localStorage.getItem("token")
        },
      });
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      const data = await response.json();
      localStorage.setItem("token", data.token);
      console.log(data.token);
       await nextpage();
       navigate("/nextpage", { state: { data: data } });
    } catch (error) {
      console.log("Error:", error);
    } };
  return (
    <div>
     <TextField
        onChange={(e) => setFood(e.target.value)}
        fullWidth
        id="food"
        label="Recipe"
        variant="outlined"  />
      <Button variant="standard" onClick={handleClick}>
        Click </Button>
    </div>
  );
}

export default MajorPage;
