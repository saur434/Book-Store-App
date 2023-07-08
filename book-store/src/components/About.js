import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const About = () => {
  return (
    <>
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        padding={2}
        backgroundColor="#f7f7f7"
      >
        <Typography variant="h2" sx={{ fontFamily: "fantasy", marginBottom: 2 }}>
          BookVault App
        </Typography>
       
        <Typography variant="body1" sx={{ textAlign: "center" }}>
          Welcome to BookVault! At BookVault, we are passionate about
          books and are dedicated to providing book lovers with a wide range of captivating reads.
          Our goal is to create a haven for book enthusiasts, where they can explore and discover
          their next literary adventure.
         
          In addition to our diverse selection of books, we pride ourselves on providing exceptional customer service. Our knowledgeable staff is always ready to assist you in finding the perfect book or offer recommendations based on your interests. We believe in fostering a love for reading and creating an engaging experience for our customers.
          <br/>
          Not only do we offer physical books, but we also have an online platform that allows you to browse and purchase books from the comfort of your own home. With our user-friendly website, you can explore our catalog, read book descriptions and reviews, and conveniently place orders online.

We are committed to promoting literacy and supporting the local community. Through various initiatives, such as book clubs, author events, and partnerships with schools and libraries, we aim to foster a love for reading and contribute to the growth of literacy in our community.
<br/>
Thank you for choosing BookVault as your go-to destination for all things books. We look forward to serving you and helping you embark on countless literary adventures.
<br/>
Happy reading!
        </Typography>

        {/* Rest of the paragraph and page content */}
      </Box>
    </>
  );
};

export default About;
