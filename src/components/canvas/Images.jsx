import * as THREE from "three"
import { Image, useScroll, MeshWobbleMaterial, useTexture, PresentationControls } from '@react-three/drei'
import { useFrame, useThree } from '@react-three/fiber'
import { useRef, useState, useEffect } from 'react'
import data from "@/components/canvas/imageData"
import { Camera } from "three"

export default function Images() {
  const { width: w, height: h } = useThree((state) => state.viewport)
  const [hovered, hover] = useState(false)
  const scrldata = useScroll()

  const group = useRef()
  const ref = useRef()
  const mesh = useRef()

  const texture = useTexture(data[0])
  const texture1 = useTexture(data[1])

  useFrame((state) => {
    const t = state.clock.getElapsedTime()
    group.current.children[0].rotation.x = -Math.PI / 1.75 + Math.cos(t / 4) / 8
    group.current.children[0].rotation.y = Math.sin(t / 4) / 8
    group.current.children[0].rotation.z = (1 + Math.sin(t / 1.5)) / 20
    group.current.children[0].position.y = (1 + Math.sin(t / 1.5)) / 10
    group.current.children[0].position.set( 0,0,0)
    group.current.children[1].material.zoom = 1 + scrldata.range(0, 1 / 3) / 3
    group.current.children[2].material.zoom = 1 + scrldata.range(1.15 / 3, 1 / 3) / 3
    group.current.children[3].material.zoom = 1 + scrldata.range(1.15 / 3, 1 / 3) / 2
    group.current.children[4].material.zoom = 1 + scrldata.range(1.25 / 3, 1 / 3) / 1
    group.current.children[5].material.zoom = 1 + scrldata.range(1.8 / 3, 1 / 3) / 3
    group.current.children[5].material.grayscale = 1 - scrldata.range(1.6 / 3, 1 / 3)
    group.current.children[6].material.zoom = 1 + (1 - scrldata.range(2 / 3, 1 / 3)) / 3
    // ref.current.distort = THREE.MathUtils.lerp(ref.current.distort, hovered ? 0.2 : 0, hovered ? 0.05 : 0.01)
  })

  return (
    <group ref={group}>
      <PresentationControls
        global
        config={{ mass: 2, tension: 500 }}
        snap={{ mass: 4, tension: 1500 }}
        rotation={[0, 0.3, 0]}
        polar={[-Math.PI / 3, Math.PI / 3]}
        azimuth={[-Math.PI / 1.4, Math.PI / 2]}>
        <mesh
          onPointerOver={() => {hover(true), console.log('onPointerOver')}} 
          onPointerOut={() => {hover(false), console.log('onPointerOut')}}
          position={[0, 0, 0]} 
          scale={[w, h , 1]}>
          
          <planeGeometry args={[1, 1, 16, 16]} />
          <MeshWobbleMaterial map={texture}  ref={ref} speed={0.1}/>
        </mesh>
      </PresentationControls>
      <Image url={data[1]} scale={[w/2, h/2, 1]} />
      <Image url={data[2]} scale={[w, h, 1]} position={[-w / 4, 0,  -h * 1]} />
      <Image url={data[3]} scale={[w / 5, w / 5, 1]} position={[w / 4, -h * 1.2, 0]} />
      <Image url={data[4]} scale={[w / 5, w / 5, 1]} position={[w / 10, -h * 1.75, 0]} />
      <Image url={data[5]} scale={[w / 3, w / 3, 1]} position={[-w / 4, -h * 2, 0]} />
      <Image url={data[6]} scale={[w / 3, w / 5, 1]} position={[-w / 4, -h * 2.6, 0]} />
      <Image url={data[7]} scale={[w / 2, w / 2, 1]} position={[w / 4, -h * 3.1, 0]} />
      <Image url={data[8]} scale={[w / 2.5, w / 2, 1]} position={[-w / 6, -h * 4.1, 0]} />
    </group>
  )
}
