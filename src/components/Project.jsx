import { useState } from "react";
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import CardProduct from "./CardProduct";
import BackdropProduct from "./ProjectDialog";
import { Button } from "@mui/material";

const ProjectSection = () => {
  const [openFormDialog, setOpenFormDialog] = useState(false);
  const [typeProject, setTypeProject] = useState(null);
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  const handleFormDialog = (type) => {
    setTypeProject(type);
    setOpenFormDialog(!openFormDialog);
  };

  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <>
      <div className="w-full min-h-screen bg-[#2f2d2d] p-4" id="project">
        <h1 className="text-4xl font-bold my-5">My Project</h1>
        <Button onClick={() => handleFormDialog("career")}>
          <motion.div
            className="flex justify-center items-center mt-10"
            ref={ref}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={variants}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <CardProduct
              title={"CareerConnect"}
              img={"careerConect-ss-home.png"}
            />
          </motion.div>
        </Button>
        <Button onClick={() => handleFormDialog("todo")}>
          <motion.div
            className="flex justify-center items-center mt-10"
            ref={ref}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={variants}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <CardProduct title={"Todo List APP"} img={"todo_home.png"} />
          </motion.div>
        </Button>
        <Button onClick={() => handleFormDialog("kalkulator")}>
          <motion.div
            className="flex justify-center items-center mt-10"
            ref={ref}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={variants}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <CardProduct title={"Simple Calculator APP"} img={"kalkulator.png"} />
          </motion.div>
        </Button>
      </div>
      {openFormDialog && (
        <BackdropProduct onClose={handleFormDialog} type={typeProject} />
      )}
    </>
  );
};

export default ProjectSection;
