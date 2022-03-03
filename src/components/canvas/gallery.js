import { Html, Image, Text, TrackballControls } from '@react-three/drei'
import { useFrame, useThree } from '@react-three/fiber'
import { useRef } from 'react'
import data from '@/components/canvas/data'
import CameraControls from './cameraControls'
import { motion as motion3d } from 'framer-motion'
import Lights from '@/components/canvas/lights'
import { Flex, Box, useReflow } from '@react-three/flex'
import Cloud from './wordCloud'

const Grid = () => {
  const { width: w, height: h } = useThree((state) => state.viewport)
  const group = useRef()
  const ref = useRef()
  // const reflow = useReflow()
  useFrame(({ clock }) => {
    // ref.current.rotation.x = 1 + Math.sin(clock.elapsedTime) / 20
    // reflow()
  })
  return (
    <>
      <fog attach="fog" args={['#202025', 0, 80]} />
      <Cloud count={8} radius={10} />
      <TrackballControls />
    </>
  )
}

const Gallery = () => { 
  const three = useThree()
  useFrame(() => {})
  return(
    <>
      <Grid/>
      
    </>
  )
}
export default Gallery

       
      // <Box>
      //   <Image url={data[0]} scale={[w/2, h/2, 1]} alt='' centerAnchor />
      // </Box>
      
      // <Box>
      //   <Image url={data[0]} scale={[w/2, h/2, 1]} alt='' />
      // </Box>
      
      // <Box>
      //   <Image url={data[0]} scale={[w/2, h/2, 1]} alt='' />
      // </Box> 

      // <Image url={data[0]} scale={[w/2, h/2, 1]} position={[-w / 4, 0,  -h * 1]} alt='' />
      // <Image url={data[1]} scale={[w/2, h/2, 1]} alt='' />
      // <Image url={data[2]} scale={[w, h, 1]} position={[-w / 4, 0,  -h * 1]} alt=''/>
      // <Image url={data[3]} scale={[w / 5, w / 5, 1]} position={[w / 4, -h * 1.2, 0]} alt='' />
      // <Image url={data[4]} scale={[w / 5, w / 5, 1]} position={[w / 10, -h * 1.75, 0]} alt=''/>
      // <Image url={data[5]} scale={[w / 3, w / 3, 1]} position={[-w / 4, -h * 2, 0]} alt=''/>
      // <Image url={data[6]} scale={[w / 3, w / 5, 1]} position={[-w / 4, -h * 2.6, 0]} alt=''/>
      // <Image url={data[7]} scale={[w / 2, w / 2, 1]} position={[w / 4, -h * 3.1, 0]} alt=''/>
      // <Image url={data[8]} scale={[w / 2.5, w / 2, 1]} position={[-w / 6, -h * 4.1, 0]} alt=''/> 
