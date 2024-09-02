import { Environment, OrbitControls } from "@react-three/drei";
import { Model } from "./buidling";
import { useEffect } from "react";

export const Experience = (props) => {
  const {sceneGroupRef,leftBurst,rightBurst} =props;
  useEffect(() => {
    sceneGroupRef.current.rotation.y += 0.3

  }, [leftBurst]);
  useEffect(() => {
    sceneGroupRef.current.rotation.y -= 0.3

  }, [rightBurst]);
  return (
    <>
      <OrbitControls />
      <group ref={sceneGroupRef}>
      <Model/>
      </group>
      <ambientLight intensity={0.05}/>
      {<Environment/> && <Environment preset='city' resolution={1}  /> }
      
      
    </>
  );
};
