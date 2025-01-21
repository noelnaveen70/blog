import { Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import Grid from '@mui/material/Grid2';

import { useNavigate } from 'react-router-dom';
import axiosInstance from '../axiosinterceptor';

const Home = () => {
   const[cardData,setData]=useState([]);
   const navigate=useNavigate();
   useEffect(()=>{
      axiosInstance.get('http://localhost:7000/blog').then((res)=>{
        setData(res.data);
      }).catch((error)=>{
        console.log(error)
      }
    ),[]})

    function update_data(val){
        navigate('/addblogs',{state:{val}}) //state is a key word and we are using state to pass the props to the function update_data
    }  //passing props with the navigate function

    const deleteblog = (id) => {
      // Delete a blog
      axiosInstance.delete(`/blog/deleteblog/${id}`)
        .then(() => {
          setData(cardData.filter((item) => item._id !== id)); // Remove deleted item from UI
          alert("Blog deleted successfully");
          navigate('/blogs'); // Redirect to blogs list after deletion
        })
        .catch((err) => {
          console.log(err);
          alert("Failed to delete blog. Please try again.");
        });
    };
      
  
  return (
    <div style={{margin:'5%'}}>
        <Grid container spacing={2}>
            {/* in this below arrow function instead of curly braces we are using simple brackets */}
            {cardData.map((item)=>(  /*item is a variable we can change it according to our needs*/
        <Grid size={4}>
        <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={item.image}/*here curly braces is used because we are using data binding technic,in this from the carddata array that we have created we are calling the fields inside the object  */
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {item.title}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          {item.description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" color="warning" variant='contained'onClick={()=>{
          update_data(item);  /*item is the variablr used in the cardata.map((item)) */
        }}>UPDATE</Button>
       <Button 
                  size="small" 
                  color="error" 
                  variant='contained' 
                  onClick={() => deleteblog(item._id)}
                >
                  DELETE
                </Button>
      </CardActions>
      
    </Card>
          
    </Grid>
    ))}
    </Grid>

         
 </div>
  )
}

export default Home