import { Canvas } from "@react-three/fiber";
import { Experience } from "./components/Experience";
import { OrbitControls, Scroll, ScrollControls } from "@react-three/drei";
import Interface from "./components/interface";
import { useRef, useState } from "react";

function App() {
  const sceneGroupRef = useRef();
  const [rightBurst, setrightBurst] = useState(false);
  const [leftBurst, setleftBurst] = useState(false);
  return (
    <Canvas shadows camera={{ position: [5, 20, 40], fov: 90 }}>
      <color attach="background" args={["#808080"]} />
      <OrbitControls enableRotate={true}  maxPolarAngle={Math.PI / 2}  />
      <ScrollControls pages={1}  >
      
      <Experience sceneGroupRef={sceneGroupRef}leftBurst={leftBurst} rightBurst={rightBurst}/>
      <Scroll html>
<Interface leftBurst={leftBurst} setleftBurst={setleftBurst} setrightBurst={setrightBurst} rightBurst={rightBurst}/>
      </Scroll>

     </ScrollControls> 
    </Canvas>
    
  );
}

export default App;
