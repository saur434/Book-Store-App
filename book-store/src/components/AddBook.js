import { Button, Checkbox, FormControlLabel, FormLabel, TextField } from "@mui/material";
import React, { useState } from "react";
import { Box } from "@mui/system";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddBook = () => {
    const history = useNavigate();
    const [input, setInputs] = useState({
        name: '',
        description: '',
        price: '',
        author: '',
       
        image: ''
    });
    const [Checked,setChecked] = useState(false);

    const handleChange = (event) =>{
      setInputs((prevState) => ({
        ...prevState,
        [event.target.name]:event.target.value
      }))
    }
    const sendRequest = async()=>{
       await axios.post('http://localhost:5000/books',{
            name:String(input.name),
            author:String(input.author),
            description:String(input.description),
            price:Number(input.price),
            image:String(input.image),
            available:Boolean(Checked)
        }).then(res=>res.data);
    }
    const handleSubmit = (event) =>{
        event.preventDefault();
        console.log(input,Checked)
        sendRequest().then(()=>history('/books'));
    }
    return (
        <>

            <form onSubmit={handleSubmit}>
                <Box
                    display="flex"
                    flexDirection="column"
                    justifyContent={'center'}
                    maxWidth={700}
                    alignItems={'center'}
                    alignSelf={'center'}
                    marginLeft={'auto'}
                    marginRight={'auto'}
                    marginTop={5}>

                    <FormLabel>Name</FormLabel>
                    <TextField
                        margin="normal"
                        value={input.name}
                        onChange = {handleChange}
                        fullwidth variant="outlined" name="name" />

                    <FormLabel>Author</FormLabel>
                    <TextField
                        margin="normal"
                        value={input.author}
                        onChange = {handleChange}
                        fullwidth variant="outlined" name="author" />

                    <FormLabel>Description</FormLabel>
                    <TextField
                        margin="normal"
                        value={input.description}
                        onChange = {handleChange}
                        fullwidth variant="outlined" name="description" />

                    <FormLabel>Price</FormLabel>
                    <TextField
                        margin="normal"
                        value={input.price}
                        type="number"
                        onChange = {handleChange}
                        fullwidth variant="outlined" name="price" />

                    <FormLabel>Image</FormLabel>
                    <TextField
                        margin="normal"
                        value={input.image}
                        onChange = {handleChange}
                        fullwidth variant="outlined" name="image" />

                    <FormControlLabel control={<Checkbox Checked = {Checked} onChange = {()=>setChecked(!Checked)} />} label="Avaliable"  />

                    <Button variant="contained" type="submit" onSubmit={handleSubmit}>Add Book</Button>
                </Box>
            </form>

        </>
    )
}
export default AddBook;