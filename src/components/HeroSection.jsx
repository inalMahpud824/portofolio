import { ReactTyped } from "react-typed";
const HeroSection = () => {
  return (
    <div
      className="flex justify-center flex-wrap px-6 mt-20 py-4 items-center w-full min-h-screen lg:px-[9rem] lg:justify-between lg:mt-0"
      id="about"
    >
      <div className="text-left lg:w-[50%]">
        <h2 className="text-4xl font-bold">Hi, I am Inal Mahpud</h2>
        <div className="inline">
          <span className="text-2xl font-semibold">I am a </span>
          <ReactTyped
            strings={["Front-end Web Developer", "Back-end Developer", "FullStack Web Developer"]}
            className="text-2xl font-semibold"
            typeSpeed={70}
            backSpeed={50}
            loop
          />
        </div>

        <p className="text-xl py-2 font-light">
          I am currently an Informatics Engineering student at Universitas Islam
          Nusantara. I have a strong passion for becoming a Software Engineer,
          particularly as a Fullstack Developer. I have experience in designing
          user interfaces, developing web applications, and working with various
          technologies such as React.js, Express.js, and Node.js.
        </p>
      </div>
      <img src="inal.jpg" alt="" className="rounded-full w-[320px] h-[300px]" />
    </div>
  );
};

export default HeroSection;
