import { HiCpuChip } from "react-icons/hi2";
import { DiRuby } from "react-icons/di";
import { SiTypescript } from "react-icons/si";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { SiRubyonrails } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { TbBrandNextjs } from "react-icons/tb";
import { RiSupabaseFill } from "react-icons/ri";
import { FaPhp } from "react-icons/fa";
import { FaLaravel } from "react-icons/fa";
import { FaDocker } from "react-icons/fa";
import { BiLogoPostgresql } from "react-icons/bi";

export const Skill = () => {
  return (
    <section className="pt-16 py-32 text-center border-neon-b border-neon-green max-w-[1400px] mx-auto">
      <div className="sticky flex items-center justify-between border-neon-b border-neon-green max-w-[1400px] mx-auto px-1 py-4">
        <h2 className="flex items-center justify-center gap-2 text-2xl font-bold tracking-wider uppercase italic neon-glow-soft ">
          SKILL
          <HiCpuChip className="text-3xl drop-shadow-[0_0_10px_rgba(16,255,110,0.8)]" />
        </h2>
      </div>
      <div className="mx-auto px-30 text-left mt-10">
        <h3 className=" mb-2 text-3xl text-neon-white">
          言語
        </h3>
        <div className="flex items-center gap-3 p-4 border-4 border-neon border-neon-green rounded-lg">
          <div className="flex items-center gap-3 p-4">
            <DiRuby className="text-4xl drop-shadow-[0_0_10px_rgba(16,255,110,0.8)]" />
            <p className="text-xl">
              Ruby
            </p>
          </div>
          <div className="flex items-center gap-3 p-4">
            <FaPhp className="text-4xl drop-shadow-[0_0_10px_rgba(16,255,110,0.8)]" />
            <p className="text-xl">
              PHP
            </p>
          </div>
          <div className="flex items-center gap-3 p-4">
            <SiTypescript className="text-4xl drop-shadow-[0_0_10px_rgba(16,255,110,0.8)]" />
            <p className="text-xl">
              TypeScript
            </p>
          </div>
          <div className="flex items-center gap-3 p-4">
            <FaHtml5 className="text-4xl drop-shadow-[0_0_10px_rgba(16,255,110,0.8)]" />
            <p className="text-xl">
              HTML
            </p>
          </div>
          <div className="flex items-center gap-3 p-4">
            <FaCss3Alt className="text-4xl drop-shadow-[0_0_10px_rgba(16,255,110,0.8)]" />
            <p className="text-xl">
              CSS
            </p>
          </div>
        </div>
      </div>
      <div className="mx-auto px-30 text-left mt-10">
        <h3 className=" mb-2 text-3xl text-neon-white">
          フレームワーク・ライブラリ
        </h3>
        <div className="flex items-center gap-3 p-4 border-4 border-neon border-neon-green rounded-lg">
          <div className="flex items-center gap-3 p-4">
            <SiRubyonrails className="text-4xl drop-shadow-[0_0_10px_rgba(16,255,110,0.8)]" />
            <p className="text-xl">
              Ruby on Rails
            </p>
          </div>
          <div className="flex items-center gap-3 p-4">
            <FaLaravel className="text-4xl drop-shadow-[0_0_10px_rgba(16,255,110,0.8)]" />
            <p className="text-xl">
              laravel
            </p>
          </div>
          <div className="flex items-center gap-3 p-4">
            <FaReact className="text-4xl drop-shadow-[0_0_10px_rgba(16,255,110,0.8)]" />
            <p className="text-xl">
              React
            </p>
          </div>
          <div className="flex items-center gap-3 p-4">
            <TbBrandNextjs className="text-4xl drop-shadow-[0_0_10px_rgba(16,255,110,0.8)]" />
            <p className="text-xl">
              Next.js
            </p>
          </div>
          <div className="flex items-center gap-3 p-4">
            <RiSupabaseFill className="text-4xl drop-shadow-[0_0_10px_rgba(16,255,110,0.8)]" />
            <p className="text-xl">
              Supabase
            </p>
          </div>
        </div>
      </div>
      <div className="mx-auto px-30 text-left mt-10 mb-16">
        <h3 className=" mb-2 text-3xl text-neon-white">
          その他
        </h3>
        <div className="flex items-center gap-3 p-4 border-4 border-neon border-neon-green rounded-lg">
          <div className="flex items-center gap-3 p-4">
            <FaDocker className="text-4xl drop-shadow-[0_0_10px_rgba(16,255,110,0.8)]" />
            <p className="text-xl">
              Docker
            </p>
          </div>
          <div className="flex items-center gap-3 p-4">
            <BiLogoPostgresql className="text-4xl drop-shadow-[0_0_10px_rgba(16,255,110,0.8)]" />
            <p className="text-xl">
              PostgreSQL
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
