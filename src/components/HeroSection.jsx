const HeroSection = () => {
  return (
    <div className="flex justify-between px-[9rem] py-4 items-center w-full min-h-screen">
      <div className="w-[50%] text-left">
        <h1 className="text-5xl font-bold">Hi, I am Inal Mahpud</h1>
        <h2 className="text-2xl font-semibold">
          I am a FullStack Web Developer
        </h2>
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
