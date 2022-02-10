import dynamic from 'next/dynamic'



const Torus = dynamic(() => import('@/components/canvas/Torus'), {
  ssr: false,
})

const DOM = () => {
  return (
    <h1>I am pure HTML</h1>
  )
}

const R3F = () => {
  return (
    <>
      <Torus route='/' />
      <mesh receiveShadow castShadow>
        <boxBufferGeometry attach="geometry" args={[4, 1, 1]} />
        <meshStandardMaterial attach="material" />
      </mesh>
      <ambientLight intensity={0.4} />
      <directionalLight
        castShadow
        position={[2.5, 8, 5]}
        intensity={1.5}
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
        shadow-camera-far={50}
        shadow-camera-left={-10}
        shadow-camera-right={10}
        shadow-camera-top={10}
        shadow-camera-bottom={-10}
      />
      <pointLight position={[-10, 0, -20]} color="red" intensity={2.5} />
      <pointLight position={[0, -10, 0]} intensity={1.5} />
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
      title: 'Foo Title',
    },
  }
}
