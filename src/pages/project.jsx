import { Nav } from '@/components/dom/nav'
import dynamic from 'next/dynamic'
import { Sphere } from '@react-three/drei'
import useRouterStore from '@/helpers/store'
import Torus from '@/components/canvas/torus'

const Project = dynamic(() => import('@/components/canvas/project'), {
  ssr: false,
})

const DOM = (state) => {
  return (
    <></>
  )
}

const R3F = () => {
  return (
    <>
      <Project/>
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
