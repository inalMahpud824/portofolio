import { useState } from "react";
import CardProduct from "./CardProduct";
import BackdropProduct from "./ProjectDialog";
import { Button } from "@mui/material";

const ProjectSection = () => {
  const [openFormDialog, setOpenFormDialog] = useState(false);
  const [typeProject, setTypeProject] = useState(null)
  const handleFormDialog = (type) => {
    setTypeProject(type)
    setOpenFormDialog(!openFormDialog);
  };
  return (
    <>
      <div className="w-full min-h-screen bg-[#2f2d2d] p-4">
        <h1 className="text-4xl font-bold my-5">My Project</h1>
        <Button onClick={() => handleFormDialog('career')}>
          <div className="flex justify-center items-center mt-10 ">
            <CardProduct title={'CareerConnect'} img={'careerConect-ss-home.png'} />
          </div>
        </Button>
        <Button onClick={() => handleFormDialog('todo')}>
          <div className="flex justify-center items-center mt-10 ">
            <CardProduct title={'Todo List APP'} img={'todo_home.png'}/>
          </div>
        </Button>
      </div>
      {openFormDialog && <BackdropProduct onClose={handleFormDialog} type={typeProject}/>}
    </>
  );
};

export default ProjectSection;
