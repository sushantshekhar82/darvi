
import { Box, Image } from '@chakra-ui/react';
import '../App.css';
import WithSubnavigation from '../components/Navbar';

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
       <Image   src="./alergyremovaldarvi.webp" width={'300px'} height={'305px'} className='image' alt="Wall of Waffels"/>
       <Box className='box'  >
       <h1 className='h1'>Best Food Franchisee Business in India</h1>
       </Box>
      
      </Box>
      <Box  marginTop={'-220px'}>
      <Image className='img2' src="./darviweb.webp" width={'100%'} height={'300px'} alt="darvi web vector image"/>
      </Box>
      

     
    </div>
  )
}

export default Home