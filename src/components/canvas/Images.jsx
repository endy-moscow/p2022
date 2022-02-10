import * as THREE from "three"
import { Image, useScroll, MeshWobbleMaterial, useTexture, Plane } from '@react-three/drei'
import { useFrame, useThree } from '@react-three/fiber'
import { useRef, useState, useEffect } from 'react'
import data from "@/components/canvas/imageData"
import { motion as motion3d } from 'framer-motion-3d'
import { Flex, Box } from '@react-three/flex'

export default function Images() {
  const { width: w, height: h } = useThree((state) => state.viewport)
  const [hovered, hover] = useState(false)
  const scrldata = useScroll()
  const group = useRef()
  const ref = useRef()
  const texture = useTexture(data[0])
  

  useFrame(() => {
    group.current.children[0].material.zoom = 1 + scrldata.range(0, 1 / 3) / 3
    // group.current.children[1].material.zoom = 1 + scrldata.range(0, 1 / 3) / 3
    // group.current.children[2].material.zoom = 1 + scrldata.range(1.15 / 3, 1 / 3) / 3
    group.current.children[3].material.zoom = 1 + scrldata.range(1.15 / 3, 1 / 3) / 2
    group.current.children[4].material.zoom = 1 + scrldata.range(1.25 / 3, 1 / 3) / 1
    group.current.children[5].material.zoom = 1 + scrldata.range(1.8 / 3, 1 / 3) / 3
    group.current.children[5].material.grayscale = 1 - scrldata.range(1.6 / 3, 1 / 3)
    group.current.children[6].material.zoom = 1 + (1 - scrldata.range(2 / 3, 1 / 3)) / 3
    // ref.current.distort = THREE.MathUtils.lerp(ref.current.distort, hovered ? 0.2 : 0, hovered ? 0.05 : 0.01)
  })
  useEffect(() => {
    document.title = `useEffect worked here`;
    console.log(scrldata.delta)
  })
  return (
    <group ref={group}>
      <motion3d.mesh
        onPointerOver={() => {hover(true), console.log('onPointerOver')}} 
        onPointerOut={() => {hover(false), console.log('onPointerOut')}}
        whileHover={{ }}
        animate={{ scale: 2, x: 3 }}
        transition={{
          times: [0, 0.5, 1],
          easeIn: [0, 0.5, 1],
          duration: 2,
        }}
        position={[0, 0, 0]} 
        scale={[w, h , 1]}>
        <planeGeometry args={[1, 1, 16, 16]} />
        <motion3d.meshStandardMaterial map={texture} ref={ref} />
      </motion3d.mesh>
      <Flex width={w} justifyContent="center" alignItems="center" flexDirection="row">
        <Box width="auto" centerAnchor>
          <Plane/>
        </Box>
        <Box width="auto"centerAnchor>
          <Plane/>
        </Box>
      </Flex>     
      <Image url={data[0]} scale={[w/2, h/2, 1]} position={[w, -h * 1, 0]} />
      <Image url={data[1]} scale={[w, h, 1]} position={[-w / 4, -h * 1, 0]} />
      <Image url={data[2]} scale={[w / 5, w / 5, 1]} position={[w / 4, -h * 1.2, 0]} />
      <Image url={data[3]} scale={[w / 5, w / 5, 1]} position={[w / 10, -h * 1.75, 0]} />
      <Image url={data[4]} scale={[w / 3, w / 3, 1]} position={[-w / 4, -h * 2, 0]} />
      <Image url={data[5]} scale={[w / 3, w / 5, 1]} position={[-w / 4, -h * 2.6, 0]} />
      <Image url={data[6]} scale={[w / 2, w / 2, 1]} position={[w / 4, -h * 3.1, 0]} />
      <Image url={data[7]} scale={[w / 2.5, w / 2, 1]} position={[-w / 6, -h * 4.1, 0]} />
    </group>
  )
}
