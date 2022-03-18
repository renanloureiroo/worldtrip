import { Stack, Text } from "@chakra-ui/react"
import Image, { ImageProps } from "next/image"

interface CuriosityCardProps extends ImageProps {
  title: string
}

export const CuriosityCard = ({
  alt,
  src,
  title,
  ...rest
}: CuriosityCardProps) => {
  return (
    <Stack align="center" justify="center">
      <Image src={src} alt={alt} width={85} height={85} {...rest} />
      <Text>{title}</Text>
    </Stack>
  )
}
