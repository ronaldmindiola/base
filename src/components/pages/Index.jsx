import {  Grid, Typography } from '@mui/material'
import React from 'react'

const Index = () => {
  return (
    <>
      <Grid
        container
        spacing={2}
        direction="column"
        alignItems='center'
        justifyContent='center'
        style={{ minHeight: '100vh' }}
      >

        <Typography variant="h1" color="inherit">Index</Typography>


      </Grid>
      
    </>
  )
}

export default Index