import React, { useRef } from 'react';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import {
  Card,
  CardContent,
  CardMedia,
  Stack,
  Typography,
  Avatar,
  CardActionArea,
} from '@mui/material';

const VideoCard = ({ video, isActive, onVideoPlayer, onVideoEnd }) => {
  const videoRef = useRef(null);

  const handleVideoPlayer = () => {
    if (isActive) {
      return;
    }
    onVideoPlayer(video.postId);
  };

  const handleVideoEnd = () => {
    if (isActive) {
      onVideoEnd();
    }
  };
  return (
    <>
      <Card
        sx={{
          width: { md: '320px', sm: '320px', xs: '100%' },
          height: { xs: '600px', sm: 'auto' },
          borderRadius: '10px 10px',
        }}
      >
        <CardActionArea>
          {isActive ? (
            <CardMedia
              sx={{
                width: {
                  md: '320px',
                  xs: '100%',
                },
                height: 460,
              }}
            >
              <video
                width="100%"
                height="100%"
                src={video?.submission?.mediaUrl}
                controls
                autoPlay
                onClick={handleVideoPlayer}
                onEnded={handleVideoEnd}
                ref={videoRef}
              />
            </CardMedia>
          ) : (
            <CardMedia
              image={video?.submission?.thumbnail}
              alt={video?.submission?.title}
              onClick={handleVideoPlayer}
              sx={{
                width: {
                  md: '320px',
                  xs: '100%',
                },
                height: 460,
              }}
            />
          )}
        </CardActionArea>
        <CardContent
          sx={{
            backgroundColor: '#1e1e1e',
            p: '8px',
          }}
        >
          <Stack direction="row">
            <Avatar
              alt={video.creator.name ? video.creator.name : 'Profile Picture'}
              src={
                video?.creator?.pic.endsWith('.bin') ? (
                  <AccountCircleIcon />
                ) : (
                  video?.creator?.pic
                )
              }
              sx={{ marginRight: '6px' }}
            />
            <Stack>
              <Typography variant="subtitle1" fontWeight="bold" color="white">
                {video?.submission?.title}
              </Typography>
              <Typography variant="subtitle2" color="#e5e4e2">
                @{video?.creator?.handle}
              </Typography>
              <Typography variant="subtitle2" color="#aaaaaa">
                {video?.submission?.description.slice(0, 90)}
              </Typography>
            </Stack>
          </Stack>
        </CardContent>
      </Card>
    </>
  );
};

export default VideoCard;
