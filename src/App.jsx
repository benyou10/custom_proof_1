import { Canvas } from "@react-three/fiber";
import { Experience } from "./components/Experience";
import { OrbitControls, Scroll, ScrollControls } from "@react-three/drei";
import Interface from "./components/interface";
import { useRef, useState } from "react";
import ImageSlider from "./components/ImageSlider";
import './index.css'; // Import the CSS file

function App() {
  const sceneGroupRef = useRef();
  const [rightBurst, setrightBurst] = useState(false);
  const [leftBurst, setleftBurst] = useState(false);

  return (
    <div className="app-container">
      

      <div className="image-slider-container">
       
        <ImageSlider 
            leftBurst={leftBurst}
            setleftBurst={setleftBurst}
            setrightBurst={setrightBurst}
            rightBurst={rightBurst}
        />
      </div>
    </div>
  );
}

export default App;
