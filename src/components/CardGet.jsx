import React, { useState } from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import axios from 'axios';
import Grid from '@mui/material/Grid';


const CardGet = () => {
    var[pro,setPro]=useState([])
  axios.get("https://fakestoreapi.com/products")
  .then((res)=>{
    setPro(res.data)
    console.log(pro)
  })
  return (
    <div>
        <Grid container spacing={2}>

        {pro.map((val)=>{
            return(
                
           
     <Card sx={{ maxWidth: 345 }}> <br /><br />
         
      <CardMedia
        sx={{ height: 140 }}
        image={val.image}
        title={val.title}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
            {val.title}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          {val.description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
            
    </Card>
     )
         })}
         </Grid>
    </div>
  );

}

export default CardGet
