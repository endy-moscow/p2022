import { Scroll, Image, useTexture, Torus, ScrollControls, useIntersect, useAspect } from '@react-three/drei'
import { useFrame, useThree } from '@react-three/fiber'
import { useRef } from 'react'
import data from '@/components/canvas/data'
import CameraControls from './cameraControls'
import { motion as motion3d } from 'framer-motion'
import Lights from '@/components/canvas/lights'

const Grid = () => {
  const { width: w, height: h } = useThree((state) => state.viewport)
  const group = useRef()
  return (
    <group ref={group}>
      <Image url={data[0]} scale={[w/2, h/2, 1]} alt='' />
      <Image url={data[1]} scale={[w/2, h/2, 1]} alt='' />
      <Image url={data[2]} scale={[w, h, 1]} position={[-w / 4, 0,  -h * 1]} alt=''/>
      <Image url={data[3]} scale={[w / 5, w / 5, 1]} position={[w / 4, -h * 1.2, 0]} alt='' />
      <Image url={data[4]} scale={[w / 5, w / 5, 1]} position={[w / 10, -h * 1.75, 0]} alt=''/>
      <Image url={data[5]} scale={[w / 3, w / 3, 1]} position={[-w / 4, -h * 2, 0]} alt=''/>
      <Image url={data[6]} scale={[w / 3, w / 5, 1]} position={[-w / 4, -h * 2.6, 0]} alt=''/>
      <Image url={data[7]} scale={[w / 2, w / 2, 1]} position={[w / 4, -h * 3.1, 0]} alt=''/>
      <Image url={data[8]} scale={[w / 2.5, w / 2, 1]} position={[-w / 6, -h * 4.1, 0]} alt=''/>
    </group>
  )
}

const Project = () => { 
  const three = useThree()
  return(
    <>
      <CameraControls/>
      <Lights/>
      <ScrollControls
        pages={6} // Each page takes 100% of the height of the canvas
        distance={1} // A factor that increases scroll bar travel (default: 1)
        damping={1} // Friction, higher is faster (default: 4)
        >
        <Scroll>
          <Grid/>
        </Scroll>
      </ScrollControls>
    </>
  )
}
export default Project
