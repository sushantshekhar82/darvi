import { Box, Grid, GridItem, Image, Text } from '@chakra-ui/react';
import React, { useRef, useState } from 'react'
import { BsStar, BsStarFill, BsStarHalf } from 'react-icons/bs';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Link } from 'react-router-dom';
const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  function Star({ rating }) {
    return (
      <Box display="flex" alignItems="center">
        {Array(5)
          .fill("")
          .map((_, i) => {
            const roundedRating = Math.round(rating * 2) / 2;
            if (roundedRating - i >= 1) {
              return (
                <BsStarFill
                  key={i}
                  style={{ marginLeft: "1" }}
                  color={i < rating ? "#e4c72b" : "gray.300"}
                />
              );
            }
            if (roundedRating - i === 0.5) {
              return <BsStarHalf  key={i} style={{ marginLeft: "1" }} />;
            }
            return <BsStar  key={i} style={{ marginLeft: "1", }} />;
          })}
      </Box>
    );
  }
const CardCarousel = () => {
    const images = [
        {
            image:"./curntainnew.jpg",
            text:'carpet',
            href:"/carpets"

        },
        {
            image:"./blends.jpg",
            text:'Blends collection',
            href:"/blinds"
        },
        {
          image:"./flooring4.jpg",
          text:'Wooden Flooring',
          href:"/flooring"
      },
      {
        image:"./carpets1.jpg",
        text:'Carpet Colections',
        href:"/carpets"
    },
        ,
        {
            image:"./curtainimg.jpg",
            text:'Curtains',
            href:"/curtains"
        }, {
          image:"./wallpaper3.jpg",
          text:'3D wallpaper',
          href:"/wallpapers"

      },
        {
            image:"./carpet.jpg",
            text:'carpet',
            href:"/carpets"
        }, {
          image:"./flooring3.jpg",
          text:'Wooden Flooring',
          href:"/flooring"
      },
      {
        image:"https://github.com/sushantshekhar82/maayaImages/raw/main/blinds.jpg",
        text:'Blinds',
        href:"/blinds"
    },
        {
          image:"./kidswallpaper.jpg",
          text:'Kids Collection Wallpaper',
          href:"/wallpapers"
      },
      {
          image:"./sofa.jpg",
          text:'Sofa',
          href:"/sofa"
      }
           
      ];
      const review = [
        {
            
            desc:"Very good product, please use it for 3 months and after that stop taking it for few months then it works better",
            user:"Kishor kumar",
            star:5,

        },
        {
            
            desc:"Very good product, please use it for 3 months and after that stop taking it for few months then it works better",
            user:"Kishor kumar",
            star:5,

        },
        {
            
            desc:"Very good product, please use it for 3 months and after that stop taking it for few months then it works better",
            user:"Kishor kumar",
            star:5,

        },
        {
            
            desc:"Very good product, please use it for 3 months and after that stop taking it for few months then it works better",
            user:"Kishor kumar",
            star:5,

        },
        {
            
            desc:"Very good product, please use it for 3 months and after that stop taking it for few months then it works better",
            user:"Kishor kumar",
            star:5,

        }
      ]
      const [isHovered, setIsHovered] = useState(false);

      const handleHover = () => {
        setIsHovered(true);
      };
    
      const handleMouseLeave = () => {
        setIsHovered(false);
      };
      const carouselRef = useRef(null);
  return (
    <Box marginTop={'5px'} >
        <Carousel responsive={responsive}
       infinite={true}
       ref={carouselRef}
       autoPlay 
       autoPlaySpeed={2000}
       arrows={false}
        >
       
  {review.map((el, index) => (
    <Box>
     
    <Box
    display="inline-block"
    position="relative"
    borderRadius={'5px'}
    overflow="hidden"
   
    width={{base:'97%',lg:'97%'}}
   height={{base:'auto',lg:'auto'}}
    transition="transform 0.3s"
    onMouseEnter={handleHover}
    onMouseLeave={handleMouseLeave}
    _hover={{
      transform: "scale(1.02)",
    }}
    marginBottom={'10px'}
  >
    <Grid gridTemplateColumns={'20% 80%'} gap={2} padding={5} justifyContent={'center'} alignItems={'center'}>
        <GridItem><Image src="https://daarvipharmaceuticals.vercel.app/darvi.png" alt="Darvi"  width={'100%'}  transform="rotate(90deg)"/></GridItem>
        <GridItem>
        <Star rating={el.star} />
        {el.desc}
 <Text fontWeight={'bold'}>{el.user}</Text>
 
        </GridItem>
    </Grid>
 
  </Box>
  
  </Box>
  ))}


 
 
</Carousel>
    </Box>
  )
}

export default CardCarousel