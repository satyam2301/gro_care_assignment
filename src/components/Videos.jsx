import React from 'react';
import { Box, Stack } from '@mui/material';
import VideoCard from './VideoCard';

const Videos = ({ videos }) => {
  return (
    <>
      <Stack direction="row" flexWrap="wrap" justifyContent="center" gap={2}>
        {videos.map((item, id) => {
          return (
            <Box key={id}>
              <VideoCard video={item} />
            </Box>
          );
        })}
      </Stack>
    </>
  );
};

export default Videos;
