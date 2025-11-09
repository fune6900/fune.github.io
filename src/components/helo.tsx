import { SocialLinks } from "../ui-component/SocialLinks/SocialLinks";
import fune from "../assets/fune.png";
import { FaChevronDown } from "react-icons/fa";

export const Helo = () => {
  return (
    <section className="flex flex-col items-center justify-center h-screen text-center bg-cyber-black border-neon-b border-neon-green max-w-[1400px] mx-auto">
      <img
        src={fune}
        alt="Riku Funagayama Icon"
        className="mx-auto w-32 h-32 rounded-full mb-4 border-4 border-neon border-neon-green"
      />
      <h1 className="text-4xl font-bold text-neon-white neon-glow-soft">
        Riku Funagayama
      </h1>
      <h2 className="text-3xl mt-4 text-neon-green">Stand Out Fit In !!</h2>
      <div className="mt-6">
        <SocialLinks />
      </div>

      {/* 下スクロールアイコン */}
      <p className="mt-50 text-neon-white">Scroll Down</p>
      <button
        className="absolute bottom-10 animate-bounce text-neon-green hover:text-neon-white transition duration-300"
        aria-label="Scroll to next section"
      >
        <FaChevronDown className="text-4xl drop-shadow-[0_0_10px_rgba(16,255,110,0.8)]" />
      </button>
    </section>
  );
};
