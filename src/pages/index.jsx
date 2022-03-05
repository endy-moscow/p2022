import dynamic from 'next/dynamic'
import { Nav } from '@/components/dom/nav'
import { Suspense } from 'react'
import * as THREE from 'three'

const WordCloud = dynamic(() => import('@/components/canvas/wordCloud'), {
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
      <WordCloud r3f/>
    </>
  )
}

const Page = () => {
  return (
    <Suspense fallback={null}>
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
