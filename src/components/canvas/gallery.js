import { Scroll, Image, useTexture, Torus, ScrollControls, useIntersect, useAspect, Plane } from '@react-three/drei'
import { useFrame, useThree } from '@react-three/fiber'
import { useRef } from 'react'
import data from '@/components/canvas/data'
import CameraControls from './cameraControls'
import { motion as motion3d } from 'framer-motion'
import Lights from '@/components/canvas/lights'
import { Flex, Box } from '@react-three/flex'
const Grid = () => {
  const { width: w, height: h } = useThree((state) => state.viewport)
  const group = useRef()
  useFrame((state) => {
  })
  return (
    <group ref={group}>
      <Flex margin={0} flexWrap='wrap' flexDirection='column' size={[w, h, 1]} justifyContent='center' align='center' centerAnchor>
          <Box size={[w/5.2*2, h/3.2*3, 1]} centerAnchor >
            <Plane scale={[w/5.2*2, h/3.2*3, 1]}/>
          </Box>
          <Box size={[w/5*3, h/3.2*3, 1]} flexWrap='wrap' flexDirection='column' justifyContent='center' alignItems='center'>
            <Box centerAnchor>
              <Image url={data[0]} scale={[w/5.2, h/3.2, 1]} alt='' />
            </Box>
            <Box centerAnchor>
              <Image url={data[1]} scale={[w/5.2, h/3.2, 1]} alt='' />
            </Box>
            <Box centerAnchor>
              <Image url={data[2]} scale={[w/5.2, h/3.2, 1]} alt='' />
            </Box>
            <Box centerAnchor>
              <Image url={data[0]} scale={[w/5.2, h/3.2, 1]} alt='' />
            </Box>
            <Box centerAnchor>
              <Image url={data[1]} scale={[w/5.2, h/3.2, 1]} alt='' />
            </Box>
            <Box centerAnchor>
              <Image url={data[2]} scale={[w/5.2, h/3.2, 1]} alt='' />
            </Box>
            <Box centerAnchor>
              <Image url={data[0]} scale={[w/5.2, h/3.2, 1]} alt='' />
            </Box>
            <Box centerAnchor>
              <Image url={data[1]} scale={[w/5.2, h/3.2, 1]} alt='' />
            </Box>
            <Box centerAnchor>
              <Image url={data[2]} scale={[w/5.2, h/3.2, 1]} alt='' />
            </Box>
            {/* {new Array(24).fill(0).map((k, i) => (
              <Box key={i} centerAnchor>
              <Image url={data[ i-1<9 ? i : 0 ]} scale={[w/10.4, h/6.4, 1]} alt='' />
              </Box>
            ))} */}
          </Box>
          
      </Flex>
     
      {/* 
      <Image url={data[0]} scale={[w/2, h/2, 1]} position={[-w / 4, 0,  -h * 1]} alt='' />
      <Image url={data[1]} scale={[w/2, h/2, 1]} alt='' />
      <Image url={data[2]} scale={[w, h, 1]} position={[-w / 4, 0,  -h * 1]} alt=''/>
      <Image url={data[3]} scale={[w / 5, w / 5, 1]} position={[w / 4, -h * 1.2, 0]} alt='' />
      <Image url={data[4]} scale={[w / 5, w / 5, 1]} position={[w / 10, -h * 1.75, 0]} alt=''/>
      <Image url={data[5]} scale={[w / 3, w / 3, 1]} position={[-w / 4, -h * 2, 0]} alt=''/>
      <Image url={data[6]} scale={[w / 3, w / 5, 1]} position={[-w / 4, -h * 2.6, 0]} alt=''/>
      <Image url={data[7]} scale={[w / 2, w / 2, 1]} position={[w / 4, -h * 3.1, 0]} alt=''/>
      <Image url={data[8]} scale={[w / 2.5, w / 2, 1]} position={[-w / 6, -h * 4.1, 0]} alt=''/> 
      */}

    </group>
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

{/*         
        <Box>
          <Image url={data[0]} scale={[w/2, h/2, 1]} alt='' centerAnchor />
        </Box>
        
        <Box>
          <Image url={data[0]} scale={[w/2, h/2, 1]} alt='' />
        </Box>
        
        <Box>
          <Image url={data[0]} scale={[w/2, h/2, 1]} alt='' />
        </Box> 
*/}
