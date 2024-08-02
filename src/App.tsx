import Particles from "./components/magicui/Particles";
import Scene from "./components/Scene";
import { VelocityScroll } from "./components/magicui/ScrollText";
import InstagramIcon from "@/assets/icons/instagram.svg";
import LinkedInLogoIcon from "@/assets/icons/linkedIn.svg";
import DribbbleIcon from "@/assets/icons/dribbble.svg";
import GithubIcon from "@/assets/icons/github.svg";

function App() {
  return (
    // <div className="w-full h-screen bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#3B1559] via-80% via-[#212226] to-[#212226]">
    <div className="w-full h-auto   bg-[#212226]  flex flex-col items-center">
      <div className="w-full fixed top-0 left-0 px-5 flex flex-row justify-between py-5">
        <div></div>
        <div className="flex flex-row gap-5">
          <img src={LinkedInLogoIcon} alt="" />
          <img src={GithubIcon} alt="" />
          <img src={DribbbleIcon} alt="" />
          <img src={InstagramIcon} alt="" />
        </div>
      </div>
      <Particles
        quantity={300}
        className="w-full h-full absolute top-0 left-0 z-0"
      />
      <Scene />
      <VelocityScroll
        default_velocity={0.5}
        className="text-stone-300 text-5xl font-bold"
        text="HTML/CSS, JavaScript, TypeScript, React JS, React router Dom, Redux, React query, Storybook, Vite, Vitest, Jest, Playwright, React Testing Library, React UI libraries, Next JS"
      />
    </div>
  );
}

export default App;
