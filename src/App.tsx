import ScrollComponent from './ui-component/ScrollComponent/ScrollComponent';
import {Helo} from './components/helo';
import { Skill } from './components/skill';
import './index.css';

function App() {

  return (
    <div className="dotgothic16">
      <ScrollComponent />
      <Helo />
      <Skill />
    </div>
  )
}

export default App
