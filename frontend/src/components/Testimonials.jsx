import { Box, Text } from "@chakra-ui/react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const TestimonialCarousel = () => {
  return (
    <Box maxWidth={{base:'95%',lg:'50%'}} height={{base:'auto',lg:'auto'}} paddingTop={'70px'} margin="auto">
       <Text textAlign={'center'} fontSize={{base:'30px',lg:'40px'}}  fontWeight={'bold'}>Our Patients Says</Text>
      <Carousel
        showArrows={false}
        showStatus={false}
        showThumbs={false}
        autoPlay
        interval={5000}
        infiniteLoop
        swipeable
      >
        <Box p={4}  rounded="md" fontStyle={'italic'}>
          <Text fontSize="lg">"Looking for a place to have some waffles?Wall of waffles would be right choice.ambiance is just too as much as the food is. Went there to check out the waffles for my kiddo.. started with  one waffles and now this has become one of our fvrt place for food. Customer service is good, very neat and clean. Yummy items they have.Parking is available.😊"<b>-Joyis Jose</b></Text>
        </Box>
        <Box p={4}  rounded="md" fontStyle={'italic'}>
          <Text fontSize="lg">"I recently visited Wall of Waffles and had an amazing experience! The shop has welcoming atmosphere, and the smell of fresh waffles was irresistible.
I ordered waffles and sandwiches, and it was absolutely delicious. The waffle was perfectly crispy on the outside and fluffy on the inside, and the toppings were fresh and flavourful.😊" <b>-Joel Joy</b></Text>
        </Box>
        <Box p={4}  rounded="md" fontStyle={'italic'}>
          <Text fontSize="lg">"Excellent waffles. The fresh fruit compote is especially crisp and refreshing.
Nutella Bubble Classic was just perfect! Smooth & rich
The cold coffee is well balanced and not too overpowering.😊”<b>-Nishant Manoj</b></Text>
        </Box>
        <Box p={4}  rounded="md" fontStyle={'italic'}>
          <Text fontSize="lg">
          Had an amazing experience here.
Interior looks so good with nice ambience.
Liked their waffles and Nachos.
Overall good service.😊"<b>-shijil v.p</b>
            </Text>
          </Box>
          <Box p={4}  rounded="md" fontStyle={'italic'}>
          <Text fontSize="lg">
          "Not just Waffles. They have variety of options both sweet and savoury. Must try Cheesy Chicken Mushroom Crepe! Kunafa is good too...😊"<b>-ALPH PLSY</b>
            </Text>
          </Box>
          <Box p={4}  rounded="md" fontStyle={'italic'}>
          <Text fontSize="lg">
          "I was surprised at the freshness of the ingredients and the taste was really good. Really recommend this if you wanna have some tasty waffles.😊"<b>-gskeiyu 029</b>
            </Text>
          </Box>
          
      </Carousel>
    </Box>
  );
};

export default TestimonialCarousel;