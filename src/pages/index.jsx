import dynamic from 'next/dynamic'
import { Flex, Box } from '@react-three/flex'
import { Torus } from '@react-three/drei'
import { motion } from 'framer-motion-3d'

const Shader = dynamic(() => import('@/components/canvas/Shader/Shader'), {
  ssr: false,
})

// dom components goes here
const DOM = () => {
  return (
    <h1>Hello world! I am pure HTML :)</h1>
  )
}

// canvas components goes here
const R3F = () => {
  return (
    <>
      <motion.mesh
        whileHover={{
          scale: 1.2,
          transition: { duration: 1},
        }}
        onHoverStart={e => console.log('onHoverStart!')}
        onHoverEnd={e => console.log('onHoverEnd!')}
        receiveShadow
        castShadow
        rotation-x={-Math.PI / 2}
        position-y={2}
        scale={[1, 1, 1]}
        animate={{ opacity:0 }}
        >
        <boxBufferGeometry />
        <meshStandardMaterial color="#e4be00" />
      </motion.mesh> 
      <Flex>
      
        <Box>
          <Torus/>
        </Box>
        <Box>
         
        </Box>
        <Box>
          <Shader /> 
        </Box>
      </Flex>
    </>
  )
}

const Page = () => {
  return (
    <>
      <DOM />
      {/* @ts-ignore */}
      <R3F r3f />
    </>
  )
}

export default Page

export async function getStaticProps() {
  return {
    props: {
      title: 'Index',
    },
  }
}
