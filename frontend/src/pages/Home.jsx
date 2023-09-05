
import { Box, Button, Image } from '@chakra-ui/react';
import '../App.css';
import WithSubnavigation from '../components/Navbar';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="App">
     <Box style={{position:'relative'}} height={'100vh'}>
      <Box className='navbar' style={{ position: 'absolute', top: 0, left: 0, right: 0, zIndex: 2 }}>
      <WithSubnavigation/>
      </Box>
      <Box className='vector' >
      <Image src="./p2.webp" />
       </Box>
       <Image   src="./sick-young-man-suffering1.webp"  className='image' alt="darvi boy"/>
       <Box className='box'  >
       <h1 className='h1'>Digestive Health</h1>
       <Image src="./Frame23.png" width={{base:'90%',lg:'50%'}} className='h11'/>
       <Link to="/products_page"><Button backgroundColor={'#8dc896'} color={'black'} fontWeight={'bold'} borderRadius={'10px'} className='h12'>Shop Now</Button></Link>
       </Box>
      
      </Box>
      <Box
  marginTop={{ base: '-300px', md: '-200px', lg: '-220px' }}
  marginLeft={{ base: '-5px', lg: '-10px' }}
>
  <Image
   display={{base:'block',lg:'none'}}
    className='img2'
    
    src="./darviweb.webp"
    width='110%'
    height={{ base: '250px', md: '250px', lg: '300px' }}
    alt="darvi web vector image"
  />
  
   <Image
   display={{base:'none',lg:'block'}}
    className='img2'
    
    src="./group.webp"
    width='110%'
    height={{ base: '270px', md: '250px', lg: 'auto' }}
    alt="darvi web vector image"
  />
</Box>
<Box marginTop={'555px'} display={{base:'none',lg:'block'}}>
<Image
  
    src="./features1.webp"
    margin={'auto'}
    
    alt="darvi web vector image"
  />
</Box>
<Image
   display={{base:'block',lg:'none'}}
   src="./component1.webp"
   marginTop={'235px'}
    alt="darvi web vector image"
  />
  <Image
   display={{base:'block',lg:'none'}}
   src="./group108.png"
   marginTop={'10px'}
    alt="darvi web vector image"
  />
  <Image
   display={{base:'block',lg:'none'}}
   src="./features2.png"
   marginTop={'25px'}
    alt="darvi web vector image"
  />
  

  
      

     
    </div>
  )
}

export default Home