import {
  Box,
  Pagination,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Videos } from './';

const Feed = () => {
  const [videos, setVideos] = useState([]);
  const [activePage, setActivePage] = useState(1);
  const theme = useTheme();
  const isScreenSmall = useMediaQuery(theme.breakpoints.down('sm'));

  const handleChange = (event, page) => {
    setActivePage(page);
    scrollToTop();
  };
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://internship-service.onrender.com/videos?page=${
            activePage - 1
          }`
        );
        const tempData = await response.data;
        const { posts } = await tempData.data;
        setVideos(posts);
      } catch (error) {
        console.log('Error fetching data:', error);
      }
    };
    fetchData();
  }, [activePage]);

  return (
    <>
      <Stack sx={{ flexDirection: { sx: 'column', md: 'row' } }}>
        <Box
          p={2}
          sx={{
            overflowY: 'auto',
            height: '90vh',
            flex: 2,
          }}
        >
          <Typography
            variant="h4"
            fontWeight="bold"
            mb={2}
            sx={{ color: 'white' }}
          >
            New <span style={{ color: '#f31503' }}> videos</span>
          </Typography>
          <Videos videos={videos} />
          <Stack
            spacing={2}
            direction="row"
            justifyContent="center"
            alignItems="center"
            margin="16px"
          >
            <Pagination
              count={10}
              page={activePage}
              onChange={handleChange}
              variant="outlined"
              shape="rounded"
              size={isScreenSmall ? 'small' : 'large'}
              sx={{
                '& button': {
                  color: 'white',
                  backgroundColor: 'transparent',
                  '&.Mui-selected': {
                    backgroundColor: '#C0DBEA',
                    color: 'black',
                  },
                  '&.Mui-selected:hover': {
                    backgroundColor: '#C0DBEA',
                  },
                  '&:hover': {
                    backgroundColor: '#B0DAFF',
                    color: 'black',
                  },
                },
                '@media (max-width: 600px)': {
                  '& .MuiPagination-ul': {
                    '& li': {
                      fontSize: '0.75rem',
                      minWidth: 'auto',
                    },
                  },
                },
                p: '8px',
              }}
            />
          </Stack>
        </Box>
      </Stack>
    </>
  );
};

export default Feed;
