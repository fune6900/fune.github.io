import { RiUserStarFill } from "react-icons/ri";
import animeguru from "../assets/animeguru.png";
import fune from "../assets/fune.png";

export const Prof = () => {
  return (
    <section className="py-16 text-center max-w-[1400px] mx-auto">
      {/* タイトル */}
      <div className="sticky flex items-center justify-between border-neon-b border-neon-green px-1 py-4">
        <h2 className="flex items-center justify-center gap-2 text-2xl font-bold tracking-wider uppercase italic neon-glow-soft">
          Profile
          <RiUserStarFill className="text-3xl drop-shadow-[0_0_10px_rgba(16,255,110,0.8)]" />
        </h2>
      </div>

      {/* コンテンツ */}
      <div className="flex flex-col items-center justify-center gap-16 mt-10">
        {/* --- 上段（ステータス・趣味・資格など） --- */}
        <div className="bg-cyber-black w-full max-w-[800px] p-6 border-neon border-neon-green rounded-lg transition-all duration-300">
          <div className="flex items-center justify-between gap-6">
            {/* 左：画像 */}
            <div className="w-1/3 flex justify-center">
              <img
                src={fune}
                alt="プロフィール画像"
                className="rounded-lg w-40 h-40 object-cover border-2 border-neon-green"
              />
            </div>

            {/* 右：ステータス・趣味・資格 */}
            <div className="w-2/3 text-left">
              <h4 className="text-2xl font-bold text-neon-white">ステータス</h4>
              <p className="mt-2 text-neon-white leading-relaxed">
                2003年生まれ、宮崎県出身。<br />
                現在は都内でエンジニアとして活動中。<br />
                <br />
                📧 riku.riku1019@icloud.com
              </p>
              <h4 className="mt-8 text-2xl font-bold text-neon-white">趣味</h4>
              <p className="mt-2 text-neon-white leading-relaxed">
                古着屋巡り、レコード集め、ガジェット、インテリア、<br />
                ゲーム、アニメ、プログラミング、etc...<br />
              </p>
            </div>
          </div>
        </div>

        {/* --- 下段（経歴） --- */}
        <div className="bg-cyber-black w-full max-w-[800px] p-6 rounded-lg transition-all duration-300">
          <h3 className="mb-4 text-3xl text-neon-white font-bold">経歴</h3>

          <div className="flex flex-col gap-5">
            <div className="border border-neon border-neon-green rounded-md p-3 text-neon-white">
              <span className="font-bold">2022年3月：</span> 宮崎県立佐土原高等学校 卒業
            </div>
            <div className="border border-neon border-neon-green rounded-md p-3 text-neon-white">
              <span className="font-bold">2022年4月：</span> 株式会社アドヴィックスに入社し、自動車用ブレーキの製造業務に従事しながらVBAなどを用いて業務効率化を推進
            </div>
            <div className="border border-neon border-neon-green rounded-md p-3 text-neon-white">
              <span className="font-bold">2024年6月：</span> プログラミングスクールRUNTEQに入学して、Ruby on Railsを中心にWeb開発を学習
            </div>
            <div className="border border-neon border-neon-green rounded-md p-3 text-neon-white">
              <span className="font-bold">2025年3月：</span> RUNTEQ 卒業!!
            </div>
            <div className="border border-neon border-neon-green rounded-md p-3 text-neon-white">
              <span className="font-bold">2026年1月：</span> 株式会社帆風（クレアテック）に入社
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
