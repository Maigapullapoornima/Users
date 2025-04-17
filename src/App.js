import axios from 'axios';
import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography'
import { Grid } from '@mui/material';
import './App.css';


function App() {
  const [users, setUsers] = React.useState([]);
  const getDetails = async() => {
    const data = await axios.get("https://635122e5dfe45bbd55b79589.mockapi.io/api/v1/users").then(dat => dat.data);
    // const data = await  fetch("https://635122e5dfe45bbd55b79589.mockapi.io/api/v1/users").then(res =>  res.json()).then(dat => dat)
      console.log(data,"data");
      setUsers(data)
    
  }
  React.useEffect(() => {
    getDetails()
  }, [])
  return (
    <div className="App">
      
      {users.map((row, index) => 
        <Card sx={{ maxWidth: 230, margin:"20px" }} key={index}>
        <CardMedia
          sx={{ height: 140 }}
          image={row.avatar}
          title="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Name: {row.name}
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            
          </Typography>
        </CardContent>
        
      </Card>)}
    </div>
  );
}

export default App;
