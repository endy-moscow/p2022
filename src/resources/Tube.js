import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model({ ...props }) {
  const copyArray = new Array(100).fill()
  console.log(copyArray);
  const group = useRef()
  const { nodes, materials } = useGLTF('/tube.glb')
  return (
    <group ref={group} {...props} dispose={null}>
      {copyArray.map((j, i) => {
        console.log('yo', i)
        return <mesh 
        key={i} 
        scale={20,20,20}
        geometry={nodes.Cylinder.geometry} 
        material={materials.Material} 
        rotation={[0, 0, 0]} />
      })}
       
    </group>
  )
}

useGLTF.preload('/tube.glb')
