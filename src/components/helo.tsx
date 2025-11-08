import { SocialLinks } from "../ui-component/SocialLinks/SocialLinks";
import fune from "../assets/fune.png";

export const Helo = () => {
  return (
    <section className="pt-16 pb-8 text-center justify-center border-neon-b border-neon-green border-neon-green max-w-[1400px] mx-auto">
        <img src={fune} 
          alt="Riku Funagayama Icon"
          className="mx-auto w-32 h-32 rounded-full mb-4 border-4 border-neon-pink"
        />
        <h1 className="text-4xl font-bold text-neon-white neon-glow-soft">
          Riku Funagayama
        </h1>
        <h1 className="text-3xl mt-4 text-neon-green">
          Stand Out Fit In !!
        </h1>
        <SocialLinks />
      </section>
  );
};
