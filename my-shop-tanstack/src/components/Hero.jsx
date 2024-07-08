import hero from "../assets/hero.svg";

const Hero = () => {
  return (
    <div className="w-full flex items-center justify-center">
      <img className="p-4" src={hero} alt="Hero Image" />
    </div>
  );
};

export default Hero;
