import { ReactTyped } from "react-typed";
import inal from "../assets/img/face/inal.png";
const HeroSection = () => {
  return (
    <div
      className="flex justify-center flex-col-reverse md:flex-row px-6 mt-20 py-4 items-center w-full min-h-screen md:px-[9rem] md:justify-between md:mt-0"
      id="about"
    >
      <div className="text-left md:w-[50%]">
        <h2 className="text-4xl font-bold pb-1">Hi, I am Inal Mahpud</h2>
        <div className="inline">
          <span className="text-2xl font-semibold">I am a </span>
          <ReactTyped
            strings={[
              "Front-end Web Developer",
              "Back-end Developer",
              "FullStack Web Developer",
            ]}
            className="text-2xl font-semibold"
            typeSpeed={70}
            backSpeed={50}
            loop
          />
        </div>

        <p className="text-lg py-2">
          I am an Informatics Engineering graduate with experience as a Software
          Engineer, covering both frontend and backend development. During my
          internship, I worked as a Frontend Developer using React.js, while in
          my professional role I focused on backend development with Java Spring
          Boot. I enjoy building scalable APIs, designing
          efficient databases, and collaborating across teams to deliver
          reliable web applications.
        </p>
      </div>
      {/* <img src="inal.jpg" alt="" className="rounded-full w-[320px] h-[300px] mb-4 md:mb-0" /> */}
      <img
        src={inal}
        alt=""
        className="rounded-full w-[320px] h-[300px] mb-4 md:mb-0"
      />
    </div>
  );
};

export default HeroSection;
