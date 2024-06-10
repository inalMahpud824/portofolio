import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";
const ContactSection = () => {
  return (
    <section className="w-full h-14" id="contact">
      <h1 className="text-4xl font-semibold text-white my-6">Contact Me</h1>
      <div className="flex justify-center gap-20 items-center">
        <a href="https://www.linkedin.com/in/inal-mahpud-80828228b/" className="hover:scale-110">
          <LinkedInIcon sx={{ fontSize: "60px" }} />
        </a>
        <a href="https://www.instagram.com/inalmah76/" className="hover:scale-110">
          <InstagramIcon sx={{ fontSize: "60px" }} />
        </a>
        <a href="https://github.com/inalMahpud824" className="hover:scale-110">
          <GitHubIcon sx={{ fontSize: "60px" }} />
        </a>
      </div>
      <p className="py-9 mb-10">Designed and built by Inal Mahpud.</p>
    </section>
  );
};

export default ContactSection;
