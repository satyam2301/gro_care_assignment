import React, { useState } from 'react';
import { Box, Stack } from '@mui/material';
import VideoCard from './VideoCard';

const Videos = ({ videos }) => {
  const [activeVideoId, setActiveVideoId] = useState(null);

  const handleVideoPlayer = (videoId) => {
    setActiveVideoId(videoId);
  };

  const handleVideoEnd = () => {
    setActiveVideoId(null);
  };

  return (
    <>
      <Stack direction="row" flexWrap="wrap" justifyContent="center" gap={2}>
        {videos.map((item, id) => {
          return (
            <Box key={id}>
              <VideoCard
                video={item}
                isActive={item.postId === activeVideoId}
                onVideoPlayer={handleVideoPlayer}
                onVideoEnd={handleVideoEnd}
              />
            </Box>
          );
        })}
      </Stack>
    </>
  );
};

export default Videos;
