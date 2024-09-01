import { useState } from "react";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import BackdropProduct from "./ProjectDialog";
import LanguageIcon from "@mui/icons-material/Language";
import GitHubIcon from "@mui/icons-material/GitHub";

const ProjectSectionSecond = () => {
  return (
    <>
      <div className="min-h-screen w-full">
        <h2 className="text-4xl font-bold my-5">Projects</h2>

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

const ProjectContainer = ({
  title,
  children,
  imgurl,
  linkGithub,
  linkWebsite,
  dialogType,
}) => {
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
        className="flex flex-col md:flex-row px-10 mb-[7rem]"
        ref={ref}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={variants}
        transition={{ duration: 0.7, delay: 0.2 }}
      >
        <img
          src={imgurl}
          alt=""
          className="w-[30rem] h-[17rem] rounded-xl hover:opacity-70 cursor-pointer"
          onClick={() => handleFormDialog(dialogType)}
          loading="la"
        />
        <div className="text-left px-7 py-4">
          <h3 className="text-4xl font-semibold">{title}</h3>
          <p className="pb-4 pt-2">{children}</p>
          <a href={linkWebsite} target="_blank">
            <LanguageIcon
              className="hover:opacity-70 mx-4"
              sx={{ fontSize: "3.2rem" }}
            />
          </a>
          <a href={linkGithub} target="_blank">
            <GitHubIcon
              className="hover:opacity-70"
              sx={{ fontSize: "3rem" }}
            />
          </a>
        </div>
      </motion.div>
      {openFormDialog && (
        <BackdropProduct onClose={handleFormDialog} type={typeProject} />
      )}
    </>
  );
};

export default ProjectSectionSecond;
