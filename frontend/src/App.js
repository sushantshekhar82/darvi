

import { Box } from '@chakra-ui/react';
import './App.css';
import AllRoutes from './components/AllRoutes';
import WithSubnavigation from './components/Navbar';



function App() {
  return (
    <div className="App">
     
      <Box marginTop={'25px'}>
     
    <AllRoutes/>
    </Box>

     
    </div>
  );
}

export default App;