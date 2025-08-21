import { useState } from "react";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import BackdropProduct from "./ProjectDialog";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import miniDispatchVehicle from "../assets/img/project/mini-dispatch/vehicle.png";
import lacakMobile from "../assets/img/project/lacak-mobile/map-device.png";
const ProjectSectionSecond = () => {
  return (
    <>
      <div className="min-h-screen w-full">
        <h2 className="text-4xl font-bold my-5">Projects</h2>

        <ProjectContainer
          title={"Lacak Mobile"}
          imgurl={lacakMobile}
          dialogType="lacak-mobile"
        >
          Lacak Mobile is a commercial mobile application developed to provide
          real-time vehicle tracking and monitoring, similar to the open-source
          Traccar platform but designed for broader usability. The app allows
          users to track vehicles live, replay historical routes, monitor
          driving speed, and view detailed movement data directly from their
          smartphones. With its planned release on the Play Store and App Store,
          Lacak Mobile aims to deliver an accessible and efficient solution for
          fleet management and individual vehicle monitoring needs.
        </ProjectContainer>

        <ProjectContainer
          title={"Mini Dispatch"}
          imgurl={miniDispatchVehicle}
          dialogType="mini-dispatch"
        >
          Mini Dispatch is a web-based monitoring system designed to track
          vehicle activities in mining operations, covering operational cycles
          such as load, haul, dump, and return. The system also enables
          real-time monitoring of driver statuses, such as whether they are
          actively working, taking a break, or temporarily unavailable. By
          providing better visibility into fleet and driver activities, the
          system helps improve operational efficiency, safety, and
          decision-making in mining logistics.
        </ProjectContainer>
        <ProjectContainer
          title={"Maqdis Academy"}
          imgurl={"/maqdis/herosection.png"}
          linkGithub={"https://github.com/CareerConnect-Rakamin"}
          linkWebsite={"https://careerconnect-rakamin.vercel.app/"}
          dialogType="maqdis"
        >
          Maqdis Academy is a company profile website showcasing products,
          available internship positions, and an online application feature. It
          also includes a CMS dashboard that simplifies application and
          applicant data management. With a responsive design, Maqdis Academy
          ensures a seamless user experience across various devices.
        </ProjectContainer>
        <ProjectContainer
          title={"CareerConnect"}
          imgurl={"/careerConect-ss-home.png"}
          linkGithub={"https://github.com/CareerConnect-Rakamin"}
          linkWebsite={"https://careerconnect-rakamin.vercel.app/"}
          dialogType="career"
        >
          CareerConnect is a web platform that connects companies with job
          seekers, allowing companies to post vacancies and search for
          candidates, while job seekers can browse and apply to suitable jobs.
          Built with Next.js as well as Express.js technology, the site offers
          an intuitive user experience and effective application management.
        </ProjectContainer>

        <ProjectContainer
          title={"To do List App"}
          imgurl={"/todo_home.png"}
          linkGithub={"https://github.com/inalMahpud824/todolist"}
          linkWebsite={"https://todolist-red-gamma.vercel.app/"}
          dialogType="todo"
        >
          This project was made in as a way to participate Gethired Devcode
          Front-end Challenge. I also used it to learn how to implement an UI
          design to Front-end Code and integration from Back-end using API. It
          shows To Do App for managing tasks. I made using Javascript and
          ReactJS with Tailwind and MUI as a CSS Framework.
        </ProjectContainer>

        <ProjectContainer
          title={"Simple Calculator App"}
          imgurl={"/kalku-ss.png"}
          linkGithub={"https://github.com/inalMahpud824/my-simple-calculator"}
          linkWebsite={"https://my-simple-calculator-ten.vercel.app/"}
          dialogType="kalkulator"
        >
          Project My Simple Calculator is a straightforward yet functional
          web-based calculator application designed to perform basic arithmetic
          operations. Developed using modern web technologies, this project
          showcases a clean and intuitive user interface, ensuring ease of use
          for performing addition, subtraction, multiplication, and division
          tasks.
        </ProjectContainer>
      </div>
    </>
  );
};

const ProjectContainer = ({ title, children, imgurl, dialogType }) => {
  const [openFormDialog, setOpenFormDialog] = useState(false);
  const [typeProject, setTypeProject] = useState(null);

  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const handleFormDialog = (type) => {
    setTypeProject(type);
    setOpenFormDialog(!openFormDialog);
  };
  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };
  return (
    <>
      <motion.div
        className="flex flex-col md:flex-row px-10 mb-[2rem]"
        id="project"
        ref={ref}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={variants}
        transition={{ duration: 0.7, delay: 0.2 }}
      >
        <img
          src={imgurl}
          alt=""
          className="md:min-w-[30rem] md:max-w-[30rem] h-[17rem] rounded-xl hover:opacity-70 cursor-pointer w-full"
          onClick={() => handleFormDialog(dialogType)}
          loading="la"
        />
        <div className="text-left md:px-7 px-2 py-4">
          <h3 className="text-4xl font-semibold">{title}</h3>
          <p className="pb-4 pt-2">{children}</p>
          <ArrowForwardIcon
            className="hover:opacity-70 mx-4 cursor-pointer"
            sx={{ fontSize: "3.2rem" }}
            onClick={() => handleFormDialog(dialogType)}
          />
        </div>
      </motion.div>
      {openFormDialog && (
        <BackdropProduct onClose={handleFormDialog} type={typeProject} />
      )}
    </>
  );
};

export default ProjectSectionSecond;
