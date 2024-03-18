import videoBackground from "../assets/video/video.mp4";

const VideoBackground = () => {
  return (
    <div>
      <video autoPlay muted loop id="background-video">
        <source src={videoBackground} type="video/mp4" />
      </video>
    </div>
  );
};

export default VideoBackground;
