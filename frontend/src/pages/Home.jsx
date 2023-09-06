import { Box, Button, Grid, GridItem, Image, Text } from "@chakra-ui/react";
import "../App.css";
import WithSubnavigation from "../components/Navbar";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import TestimonialCarousel from "../components/Testimonials";
import Footer from "../components/Footer";

const Home = () => {
  // const [products,setProducts]=useState([]);
  // const [loading,setLoading]=useState(false)

  // useEffect(()=>{

  //   setLoading(true)

  //   axios.get("http://localhost:8080/api/product/allproducts").then((res)=>{

  //     setProducts(res.data)

  //   }).finally((res)=>{
  //     setLoading(false)
  //   })
  // },[])
  // console.log(products[0])
  return (
    <div className="App">
      <Box style={{ position: "relative" }} height={"100vh"}>
        <Box
          className="navbar"
          style={{ position: "absolute", top: 0, left: 0, right: 0, zIndex: 2 }}
        >
          <WithSubnavigation />
        </Box>
        <Box className="vector">
          <Image src="./p2.webp" />
        </Box>
        <Image
          src="./sick-young-man-suffering1.webp"
          className="image"
          alt="darvi boy"
        />
        <Box className="box">
          <h1 className="h1">Digestive Health</h1>
          <Image
            src="./Frame23.png"
            width={{ base: "90%", lg: "50%" }}
            className="h11"
          />
          <Link to="/products_page">
            <Button
              backgroundColor={"#345b22"}
              color={"white"}
              fontWeight={"bold"}
              borderRadius={"10px"}
              className="h12"
            >
              Shop Now
            </Button>
          </Link>
        </Box>
      </Box>
      <Box
        marginTop={{ base: "-300px", md: "-200px", lg: "-200px" }}
        marginLeft={{ base: "-5px", lg: "-10px" }}
      >
        <Image
          display={{ base: "block", lg: "none" }}
          className="img2"
          src="./darviweb.webp"
          width="110%"
          height={{ base: "250px", md: "250px", lg: "300px" }}
          alt="darvi web vector image"
        />

        <Image
          display={{ base: "none", lg: "block" }}
          className="img2"
          src="./group.webp"
          width="110%"
          height={{ base: "270px", md: "250px", lg: "auto" }}
          alt="darvi web vector image"
        />
      </Box>

      <Image
        display={{ base: "block", lg: "none" }}
        src="./component1.webp"
        marginTop={"235px"}
        alt="darvi web vector image"
      />
      <Image
        display={{ base: "block", lg: "none" }}
        src="./group108.png"
        marginTop={"10px"}
        alt="darvi web vector image"
      />
      <Text
        textAlign={"center"}
        fontSize={{ base: "30px", lg: "40px" }}
        marginTop={{ base: "10px", lg: "540px" }}
        fontWeight={"bold"}
      >
        Our Products
      </Text>
      <Grid
        gridTemplateColumns={{ base: "1fr", lg: "1fr 1fr" }}
        justifyContent={"center"}
        alignItems={"center"}
        gap={{ base: "5px", lg: "10px" }}
      >
        <GridItem width={"80%"} borderRadius={"10px"}>
          <Grid
            gridTemplateColumns={"1fr 1fr"}
            justifyContent={"center"}
            alignItems={"center"}
            className="gradient-bg"
            borderRadius={"10px"}
          >
            <GridItem>
              <Image
                src="./gasodigi5.webp"
                alt="gas o digi"
                width={"80%"}
                transform="rotate(-1.5deg)"
              />
            </GridItem>
            <GridItem>
              <Text
                as={"h1"}
                fontSize={{ base: "2xl", lg: "4xl" }}
                fontWeight={"bold"}
                paddingLeft={"10px"}
              >
                Gas O Digi
              </Text>
              <Text
                marginTop={"-5px"}
                as={"h4"}
                fontSize={"md"}
                fontWeight={"bold"}
                paddingLeft={"10px"}
              >
                Syrup
              </Text>
              <Text
                as={"h2"}
                fontSize={"2xl"}
                fontWeight={"bold"}
                paddingLeft={"10px"}
              >
                ₹145
              </Text>

              <Box marginTop={"10px"} paddingLeft={"10px"}>
                <Button
                  backgroundColor={"#345b22"}
                  fontSize={"xl"}
                  color={"white"}
                  fontWeight={"bold"}
                  width={"100%"}
                  height={"40px"}
                  borderRadius={"10px"}
                >
                  Check Now
                </Button>
              </Box>
            </GridItem>
          </Grid>
        </GridItem>
        <GridItem width={"80%"}>
          <Grid
            gridTemplateColumns={"1fr 1fr"}
            justifyContent={"center"}
            alignItems={"center"}
            className="gradient-bg"
            borderRadius={"10px"}
          >
            <GridItem>
              <Image
                src="./nithya5.webp"
                alt="Nithya"
                width={"80%"}
                transform="rotate(-1.5deg)"
              />
            </GridItem>
            <GridItem>
              <Text
                as={"h1"}
                fontSize={{ base: "2xl", lg: "4xl" }}
                fontWeight={"bold"}
                paddingLeft={"10px"}
              >
                Nithya Amruth
              </Text>
              <Text
                marginTop={"-5px"}
                as={"h4"}
                fontSize={"md"}
                fontWeight={"bold"}
                paddingLeft={"10px"}
              >
                Syrup
              </Text>
              <Text
                as={"h2"}
                fontSize={"2xl"}
                fontWeight={"bold"}
                paddingLeft={"10px"}
              >
                ₹145
              </Text>

              <Box marginTop={"10px"} paddingLeft={"10px"}>
                <Button
                  backgroundColor={"#345b22"}
                  fontSize={"xl"}
                  color={"white"}
                  fontWeight={"bold"}
                  width={"100%"}
                  height={"40px"}
                  borderRadius={"10px"}
                >
                  Check Now
                </Button>
              </Box>
            </GridItem>
          </Grid>
        </GridItem>
      </Grid>
      <TestimonialCarousel />
      <Box display={{ base: "none", lg: "block" }} marginTop={"25px"}>
        <Image
          src="./features1.webp"
          margin={"auto"}
          alt="darvi web vector image"
        />
      </Box>
      <Box
        display={{ base: "block", lg: "none" }}
        marginTop={"25px"}
        backgroundColor={"d9d9d9"}
      >
        <Image src="./features2.png" alt="darvi web vector image" />
      </Box>
      <Footer />
    </div>
  );
};

export default Home;
