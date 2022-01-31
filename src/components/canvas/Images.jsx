import dynamic from 'next/dynamic'
import * as THREE from "three"
import { Flex, Box, useReflow} from '@react-three/flex'
import { Plane } from '@react-three/drei'
import { LayoutCamera, motion as motion3d } from 'framer-motion-3d'
import { useFrame, useThree, useLoader } from '@react-three/fiber'
import { useMotionValue } from 'framer-motion'
import { useRef, useEffect, useMemo, useState } from 'react'
import data from "@/components/canvas/imageData"



function Image({ i = 0, r = 0, url, ...rest }) {
  r = useMemo(() => r || Math.round(Math.random() * 100), [])
  const texture = useLoader(THREE.TextureLoader, url)

  const vec = new THREE.Vector3()

  const groupRef = useRef()
  const reflow = useReflow()

  useFrame(({ clock }) => {
    if (i > 0 && i % 10 === 0) {
      groupRef.current.scale.x = 1 + Math.sin(clock.getElapsedTime()) * 0.8
      groupRef.current.position.lerp(vec.set(0, state.top, 0), 0.1)
      console.log(state.top)
      // Inform flexbox
      reflow()
    }
  })
  return (
    <group ref={groupRef} {...rest}>
      <mesh position={[0, 0, 10]} castShadow receiveShadow>
        <boxBufferGeometry args={[50 + r, 50, 50]} />
        <meshStandardMaterial map={texture} roughness={0.5} />
      </mesh>
    </group>
  )
}

function Images() {
  return data.map((url, i) => (
    <Box centerAnchor key={url} margin={10}>
      <Image i={i} url={url} />
    </Box>
  ))
}
