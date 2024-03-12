// VideoBackground.jsx
import { Box, CardMedia, Container } from '@mui/material';

const VideoBackground = () => {
  return (
    <Container maxWidth="false" sx={{ position: 'relative', overflow: 'hidden' }}>
      <Box>
        <CardMedia
          component="video"
          src="/src/assets/blockchain.mp4"
          title="Local Video"
          autoPlay
          loop
          muted
          style={{ height: '100vh' }} // Adjust height as needed
        />
      </Box>
    </Container>
  );
};

export default VideoBackground;
