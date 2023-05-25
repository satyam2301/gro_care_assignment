import { Stack } from '@mui/material';
import { Link } from 'react-router-dom';
import logo from '../assets/youtube_logo.png';
import SearchBar from './SearchBar';

const Navbar = () => {
  return (
    <>
      <Stack
        direction="row"
        alignItems="center"
        p={2}
        sx={{
          position: 'sticky',
          top: 0,
          background: '#000000',
          justifyContent: 'space-between',
          zIndex: 50,
        }}
      >
        <Link to="/" style={{ display: 'flex', alignItems: 'center' }}>
          <img src={logo} alt="logo" height={50} />
        </Link>
        <SearchBar />
      </Stack>
    </>
  );
};

export default Navbar;
