import { Button, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <>
            <Box display='flex' flexDirection='column' alignItems='center'>
            
                <Button LinkComponent={Link} to='/books'  sx = {{marginTop:15, background:'orange'}} variant="contained">
                    <Typography variant="h3">View All Products</Typography>
                </Button>
            </Box>
        </>
    )
}
export default Home;