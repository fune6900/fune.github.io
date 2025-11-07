import ScrollComponent from './ui-component/ScrollComponent/ScrollComponent';
import fune from './assets/fune.png'; 

function App() {

  return (
    <div>
      {/* Hero Section */}
      <ScrollComponent />
      <section className="py-16 text-center border-neon-b border-neon-green">
        {/* pulic/assets配下*/}
        <img src="/assets/fune.png" 
          alt="Riku Funagayama Icon"
          className="mx-auto w-32 h-32 rounded-full mb-4 border-4 border-neon-pink"
        />
        {/* src/assets配下*/}
        <img src={fune} 
          alt="Riku Funagayama Icon"
          className="mx-auto w-32 h-32 rounded-full mb-4 border-4 border-neon-pink"
        />
        <h1 className="text-4xl font-bold text-neon-white neon-glow-soft">
          Riku Funagayama
        </h1>
        <p className="mt-4 yexy-lg text-neon-white">
          ただ手を動かすエンジニアではなく、現場と技術の橋渡し役として、課題解決のために自ら考え、行動するエンジニアを目指しています。
        </p>
      </section>
    </div>
  )
}

export default App
