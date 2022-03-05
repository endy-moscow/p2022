import dynamic from 'next/dynamic'
import { Sphere } from '@react-three/drei'

const WordCloud = dynamic(() => import('@/components/canvas/wordCloud'), {
  ssr: false,
})

const DOM = (state) => {
  return (
    <div>test</div>
  )
}

const R3F = () => {
  return (
    <>
      <WordCloud/>
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
