import * as THREE from "three"
import { Sphere, Image, Scroll, ScrollControls, useScroll, MeshWobbleMaterial, useTexture, PresentationControls, Html, Torus } from '@react-three/drei'
import { useFrame, useThree } from '@react-three/fiber'
import { useRef, useState, useEffect } from 'react'
import data from "@/components/canvas/imageData"

export default function CustomImage() {
  const { width: w, height: h } = useThree((state) => state.viewport)
  const [ cameraPos, update ] = useState(0) // camera state 
  const [ hovered, hover ] = useState(false)
  const group = useRef()
  const ref = useRef()
  const mesh = useRef()
  const texture = useTexture(data[0])
  console.log(w,h,group,ref,texture)
  
  function handleClick() {
    console.log('this is:');
  }
  
  return (
    
    <mesh
      // onPointerOver={() => {hover(true), console.log('onPointerOver')}} 
      // onPointerOut={() => {hover(false), console.log('onPointerOut')}}
      onClick={() => handleClick()}
      position={[0, 0, 0]} 
      scale={[w, h , 1]}
    >
      <planeGeometry args={[1, 1, 16, 16]} />
      <meshStandardMaterial map={texture}  ref={ref}/>
    </mesh>
  )
}
