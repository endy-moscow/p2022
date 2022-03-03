import dynamic from 'next/dynamic'
import { Nav } from '@/components/dom/nav'
import { Suspense } from 'react'

const Gallery = dynamic(() => import('@/components/canvas/gallery'), {
  ssr: false,
})

const Shader = dynamic(() => import('@/components/canvas/Shader/Shader'), {
  ssr: false,
})

const DOM = (state) => {
  return (
    <h1></h1>
  )
}

const R3F = () => {
  return (
    <>
      <Gallery/>
    </>
  )
}

const Page = () => {
  return (
    <Suspense fallback={console.log('Loading...')}>
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
