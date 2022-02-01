import dynamic from 'next/dynamic'
import * as THREE from "three"
import { Flex, Box, useReflow} from '@react-three/flex'
import { Image, Scroll, useIntersect } from '@react-three/drei'
import { LayoutCamera, motion as motion3d } from 'framer-motion-3d'
import { useFrame, useThree, useLoader } from '@react-three/fiber'
import { useMotionValue } from 'framer-motion'
import { useRef, useEffect, useMemo, useState } from 'react'
import data from "@/components/canvas/imageData"


function Item({ i = 0, r = 0, url, scale, ...props }) {
  const visible = useRef(false)
  const ref = useIntersect((isVisible) => (visible.current = isVisible))
  const { height } = useThree((state) => state.viewport)
  r = useMemo(() => r || Math.round(Math.random() * 100), [])
  const texture = useLoader(THREE.TextureLoader, url)
  const vec = new THREE.Vector3()
  const groupRef = useRef()
  const reflow = useReflow()
  useFrame((clock, delta, state) => {
    if (i > 0 && i % 10 === 0) {
      groupRef.current.scale.x = 1 + Math.sin(clock.getElapsedTime()) * 0.8
      groupRef.current.position.lerp(vec.set(0, state.top, 0), 0.1)
      console.log(state.top)
      // Inform flexbox
      reflow()
    }
    // ref.current.position.y = THREE.MathUtils.damp(ref.current.position.y, visible.current ? 0 : -height / 2 + 1, 4, delta)
    // ref.current.material.zoom = THREE.MathUtils.damp(ref.current.material.zoom, visible.current ? 1 : 1.5, 4, delta)
  })
  return (
    <group ref={groupRef} {...props}>
        <Image ref={ref} scale={scale} url={url}c/>
    </group>
  )
}

export default function Images() {
  console.log(data[0])
  const { width: w, height: h } = useThree((state) => state.viewport)
  return (
    <Scroll damping={6} pages={5}> 
      <Item url={data[0]} scale={[w / 3, w / 3, 1]} position={[-w / 6, 0, 0]} />
      <Item url={data[0]} scale={[2, w / 3, 1]} position={[w / 30, -h, 0]} />
      <Item url={data[0]} scale={[w / 3, w / 5, 1]} position={[-w / 4, -h * 1, 0]} />
      <Item url={data[0]} scale={[w / 5, w / 5, 1]} position={[w / 4, -h * 1.2, 0]} />
      <Item url={data[0]} scale={[w / 5, w / 5, 1]} position={[w / 10, -h * 1.75, 0]} />
      <Item url={data[0]} scale={[w / 3, w / 3, 1]} position={[-w / 4, -h * 2, 0]} />
      <Item url={data[0]} scale={[w / 3, w / 5, 1]} position={[-w / 4, -h * 2.6, 0]} />
      <Item url={data[0]} scale={[w / 2, w / 2, 1]} position={[w / 4, -h * 3.1, 0]} />
      <Item url={data[0]} scale={[w / 2.5, w / 2, 1]} position={[-w / 6, -h * 4.1, 0]} />
    </Scroll>
  )
}
// function Images() {
//   return data.map((url, i) => (
//     <Box centerAnchor key={url} margin={10}>
//       <Image i={i} url={url} />
//     </Box>
//   ))
// }
