import Head from "@/components/Head"
import Footer from "@/components/Footer"
import Header from "@/components/Header"
import IntroAnimation from "@/components/IntroAnimation"
import type { TBlock } from "@/types"
import BlockRenderer from "@/sections/BlockRenderer"

export type TDynamicProps = {
  className?: string
  title?: string
  header?: boolean
  pageFields?: {
    description?: string
  }
  blocks?: TBlock[]
}

const Component = ({ className, blocks, title, pageFields, header }: TDynamicProps) => {
  const description = pageFields?.description

  return (
    <>
      <Head title={title} description={description} />
      <IntroAnimation />
      {header && <Header />}
      <main className={className}>
        {blocks && blocks.map((block, index) => <BlockRenderer block={block} key={index} />)}
      </main>
      <Footer />
    </>
  )
}

export default Component
