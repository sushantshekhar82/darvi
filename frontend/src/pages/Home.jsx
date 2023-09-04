
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
       <Image   src="./sick-young-man-suffering.webp"  className='image' alt="darvi boy"/>
       <Box className='box'  >
       <h1 className='h1'>Digestive Health</h1>
       <Image src="./Frame23.png" width={{base:'90%',lg:'50%'}} className='h11'/>
       </Box>
      
      </Box>
      <Box  marginTop={{base:'-300px',lg:'-200px'}} marginLeft={'-5px'}>
      <Image className='img2' src="./darviweb.webp" width={'110%'} height={{base:'250px',lg:'300px'}} alt="darvi web vector image"/>
      </Box>
      

     
    </div>
  )
}

export default Home