import dynamic from 'next/dynamic'
import { Nav } from '@/components/dom/nav'
import { Suspense } from 'react'

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
    <Suspense fallback={console.log(1)}>
      <DOM />
      {/* @ts-ignore */}
      <R3F r3f />
    </Suspense>
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
