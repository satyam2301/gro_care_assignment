import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Box } from '@mui/material';
import { Navbar, Feed } from './components';

function App() {
  return (
    <BrowserRouter>
      <Box sx={{ backgroundColor: '#000000' }}>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Feed />} />
        </Routes>
      </Box>
    </BrowserRouter>
  );
}

export default App;
