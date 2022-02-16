import * as THREE from "three"
import { Sphere, Image, Scroll, ScrollControls, useScroll, MeshWobbleMaterial, useTexture, PresentationControls, Html, Torus } from '@react-three/drei'
import { useFrame, useThree } from '@react-three/fiber'
import { useRef, useState, useEffect } from 'react'
import data from "@/components/canvas/imageData"
import CustomImage from '@/components/canvas/customImage'

const Grid = () => {
  const { width: w, height: h } = useThree((state) => state.viewport)
  const group = useRef()
  const ref = useRef()
  const mesh = useRef()
  const texture = useTexture(data[0])
  console.log(w,h,group,ref,texture)


  useFrame((state) => {
    // state.camera.position.z = cameraPos + scrldata.offset*100
    // update(scrldata.scroll.current*100+10)
    // const t = state.clock.getElapsedTime()
    // group.current.children[0].rotation.z = (1 + Math.sin(t / 1.5)) / 50
    // group.current.children[0].position.z = -2
    // group.current.children[1].material.zoom = 1 + scrldata.range(0, 1 / 3) / 3
    // group.current.children[2].material.zoom = 1 + scrldata.range(1.15 / 3, 1 / 3) / 3
    // group.current.children[3].material.zoom = 1 + scrldata.range(1.15 / 3, 1 / 3) / 2
    // group.current.children[4].material.zoom = 1 + scrldata.range(1.25 / 3, 1 / 3) / 1
    // group.current.children[5].material.zoom = 1 + scrldata.range(1.8 / 3, 1 / 3) / 3
    // group.current.children[5].material.grayscale = 1 - scrldata.range(1.6 / 3, 1 / 3)
    // group.current.children[6].material.zoom = 1 + (1 - scrldata.range(2 / 3, 1 / 3)) / 3
    // ref.current.distort = THREE.MathUtils.lerp(ref.current.distort, hovered ? 1 : 0, hovered ? 0.05 : 0.01)
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
