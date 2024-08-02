import InstagramIcon from "@/assets/icons/instagram.svg";
import LinkedInLogoIcon from "@/assets/icons/linkedIn.svg";
import DribbbleIcon from "@/assets/icons/dribbble.svg";
import GithubIcon from "@/assets/icons/github.svg";
import photo from "@/assets/image.jpg";
import Particles from "./components/magicui/Particles";
import Scene from "./components/Scene";
import { VelocityScroll } from "./components/magicui/ScrollText";

function App() {
  return (
    // <div className="w-full h-screen bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#3B1559] via-80% via-[#212226] to-[#212226]">
    <div className="w-full h-auto   bg-[#212226]  flex flex-col items-center">
      <Particles
        quantity={300}
        className="w-full h-full absolute top-0 left-0 z-0"
      />
      <Scene />
      <div className="w-full mt-10">
        <VelocityScroll
          default_velocity={0.5}
          className="text-stone-300 text-9xl font-bold opacity-20"
          text="HTML/CSS, JavaScript, TypeScript, React JS, React router Dom, Redux, React query, Storybook, Vite, Vitest, Jest, Playwright, React Testing Library, React UI libraries, Next JS"
        />
      </div>
      <div className="w-full h-screen flex flex-col items-center justify-center gap-5">
        <div className="flex flew-row gap-5 items-center">
          <div className="w-52 h-52 rounded-full overflow-hidden flex items-center justify-center">
            <img src={photo} alt="" />
          </div>
          <div className="flex flex-col font-bold  w-[1024px] text-slate-200 gap-5">
            <p className="text-xl">
              A seasoned frontend engineer with over six years of experience in
              creating dynamic, pixel perfect, and user-centric web
              applications. My journey in web development began with co-founding
              Zoodfood, and since then, I've continued to refine my skills at
              startups and well-established companies, contributing to the
              development of scalable codebases and collaborating closely with
              cross-functional teams. I'm passionate about leveraging my
              expertise in technologies like React and TypeScript to deliver
              seamless user experiences.
            </p>
          </div>
        </div>
        <p className="text-2xl  text-slate-200 mt-20 font-bold">
          I'm excited about the opportunity to bring my skills to create
          something extra ordinary.
        </p>
      </div>
      <div className="w-full ">
        <VelocityScroll
          default_velocity={0.5}
          className="text-stone-300 text-9xl font-bold opacity-20"
          text="Fast learner - Critical thinking - Problem solving - Communication skills - Teamwork - Ability to work under pressure - Ability to handle tight deadlines - Adaptability -
Decision making - Interpersonal skills - Extremely passionate about coding and clean code"
        />
      </div>
      <div className="w-full h-screen flex flex-col items-center justify-center">
        <h2 className="font-[800] text-slate-200 text-8xl">Let's talk...</h2>
        <div className="flex flex-row gap-7 mt-20">
          <a
            target="_blank"
            href="https://www.linkedin.com/in/soheyl-delshadnamini-16b20564/"
          >
            <img src={LinkedInLogoIcon} alt="" />
          </a>
          <a target="_blank" href="https://github.com/sdn1364">
            <img src={GithubIcon} alt="" />
          </a>
          <a target="_blank" href="https://dribbble.com/sdn1364">
            <img src={DribbbleIcon} alt="" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;
