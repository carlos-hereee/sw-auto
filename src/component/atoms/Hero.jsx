const Hero = ({ data }) => {
  return (
    <img
      className="hero"
      src={data.link}
      alt={data.name}
      crossOrigin="anonymous"
    />
  );
};

export default Hero;
