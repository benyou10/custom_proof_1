/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.5.0 public/model/building1.glb 
*/

import React from 'react'
import { useGLTF } from '@react-three/drei'

export function Model(props) {
  const { nodes, materials } = useGLTF('/building1.glb')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Cube001.geometry} material={materials['Material.001']} position={[-0.014, -0.305, -0.008]} rotation={[-Math.PI, 0, 0]} scale={[-1.359, -0.349, -2.016]} />
      <mesh geometry={nodes.Cube002.geometry} material={materials['Material.002']} position={[-0.014, 0.373, -0.008]} rotation={[-Math.PI, 0, 0]} scale={[-1.359, -0.349, -2.016]} />
      <mesh geometry={nodes.Cube003.geometry} material={materials['Material.002']} position={[-0.016, 1.046, -0.019]} rotation={[-Math.PI, 0, 0]} scale={[-1.359, -0.349, -2.016]} />
      <mesh geometry={nodes.Cube004.geometry} material={materials['Material.002']} position={[-0.031, 1.749, -0.019]} rotation={[-Math.PI, 0, 0]} scale={[-1.359, -0.349, -2.016]} />
      <mesh geometry={nodes.Cube005.geometry} material={materials['Material.002']} position={[-0.046, 2.469, -0.012]} rotation={[-Math.PI, 0, 0]} scale={[-1.359, -0.349, -2.016]} />
    </group>
  )
}

useGLTF.preload('/building1.glb')
