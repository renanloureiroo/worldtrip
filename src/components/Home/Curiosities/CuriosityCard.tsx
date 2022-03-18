import { Box, Stack, Text, useBreakpointValue } from "@chakra-ui/react"
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
  const visibilityImage = useBreakpointValue({
    base: false,
    md: true,
  })
  return (
    <Stack
      direction={visibilityImage ? "column" : "row"}
      align="center"
      justify="center"
    >
      {visibilityImage ? (
        <Image src={src} alt={alt} width={85} height={85} {...rest} />
      ) : (
        <Box w={2} h={2} bg="brand.500" borderRadius="4px" />
      )}
      <Text>{title}</Text>
    </Stack>
  )
}
