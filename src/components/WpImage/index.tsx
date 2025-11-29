import Image, { type ImageProps } from "next/image"

const WpImage = (props: ImageProps) => {
  const sourceUrl = (props.src as string).replace("https://v-player1.co.uk/wp-content", "")

  return <Image {...props} alt={props.alt} src={sourceUrl} />
}

export default WpImage
