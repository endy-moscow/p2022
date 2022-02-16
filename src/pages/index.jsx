import dynamic from 'next/dynamic'
import { Nav } from '@/components/dom/nav'

const Project = dynamic(() => import('@/components/canvas/project'), {
  ssr: false,
})

const Shader = dynamic(() => import('@/components/canvas/Shader/Shader'), {
  ssr: false,
})

const DOM = (state) => {
  return (
    <Nav/>
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
      title: 'Index',
    },
  }
}
