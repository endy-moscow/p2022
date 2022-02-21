import * as THREE from "three"
import { Sphere, Image, Scroll, ScrollControls, useScroll, MeshWobbleMaterial, useTexture, PresentationControls, Html, Torus } from '@react-three/drei'
import { useFrame, useThree } from '@react-three/fiber'
import { useRef, Suspense } from 'react'
import data from "@/components/canvas/data"
import CustomImage from '@/components/canvas/customImage'


const Grid = () => {
  const { width: w, height: h } = useThree((state) => state.viewport)
  const group = useRef()
  const ref = useRef()
  const mesh = useRef()
  const texture = useTexture(data[0])
  console.log(w,h,group,ref,texture)

  useFrame((state) => {

  })
  return (
    <group ref={group}>
      <CustomImage />
      <Image url={data[1]} scale={[w/2, h/2, 1]} alt="" />
      <Image url={data[2]} scale={[w, h, 1]} position={[-w / 4, 0,  -h * 1]} alt=""/>
      <Image url={data[3]} scale={[w / 5, w / 5, 1]} position={[w / 4, -h * 1.2, 0]} alt="" />
      <Image url={data[4]} scale={[w / 5, w / 5, 1]} position={[w / 10, -h * 1.75, 0]} alt=""/>
      <Image url={data[5]} scale={[w / 3, w / 3, 1]} position={[-w / 4, -h * 2, 0]} alt=""/>
      <Image url={data[6]} scale={[w / 3, w / 5, 1]} position={[-w / 4, -h * 2.6, 0]} alt=""/>
      <Image url={data[7]} scale={[w / 2, w / 2, 1]} position={[w / 4, -h * 3.1, 0]} alt=""/>
      <Image url={data[8]} scale={[w / 2.5, w / 2, 1]} position={[-w / 6, -h * 4.1, 0]} alt=""/>
    </group>
  )
}
export default Grid
