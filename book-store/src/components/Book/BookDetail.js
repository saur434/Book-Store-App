import React, { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Button, Checkbox, FormControlLabel, FormLabel, TextField } from "@mui/material";
import { Box } from "@mui/system";


const BookDetail = () => {
    const history = useNavigate();
    const [input, setInputs] = useState({});

    const id = useParams().id;

    const [Checked, setChecked] = useState(false);

    useEffect(() => {
  
        const fetchHandler = async () => {
            await axios
                .get(`http://localhost:5000/books/${id}`)
                .then((res) => res.data).then(data => setInputs(data.book))
        }
        fetchHandler()
    }, [id]);

  
  const sendRequest = async() =>{
    await axios.put(`http://localhost:5000/books/${id}`,{
            name:String(input.name),
            author:String(input.author),
            description:String(input.description),
            price:Number(input.price),
            image:String(input.image),
            available:Boolean(Checked)
        }).then(res=>res.data);
  };

    const handleSubmit = (event) => {
        event.preventDefault();
       sendRequest().then(()=>history("/books"))
    }
   

    const handleChange = (event) => {
        setInputs((prevState) => ({
            ...prevState,
            [event.target.name]: event.target.value
        }))
    }



    return (
        <>
            {input && (
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
                            onChange={handleChange}
                            fullwidth variant="outlined" name="name" />

                        <FormLabel>Author</FormLabel>
                        <TextField
                            margin="normal"
                            value={input.author}
                            onChange={handleChange}
                            fullwidth variant="outlined" name="author" />

                        <FormLabel>Description</FormLabel>
                        <TextField
                            margin="normal"
                            value={input.description}
                            onChange={handleChange}
                            fullwidth variant="outlined" name="description" />

                        <FormLabel>Price</FormLabel>
                        <TextField
                            margin="normal"
                            value={input.price}
                            type="number"
                            onChange={handleChange}
                            fullwidth variant="outlined" name="price" />

                        <FormLabel>Image</FormLabel>
                        <TextField
                            margin="normal"
                            value={input.image}
                            onChange={handleChange}
                            fullwidth variant="outlined" name="image" />

                        <FormControlLabel control={<Checkbox Checked={Checked} onChange={() => setChecked(!Checked)} />} label="Avaliable" />

                        <Button variant="contained" type="submit" onSubmit={handleSubmit}>Update Book</Button>
                    </Box>
                </form>
            )}

        </>
    )
}
export default BookDetail;