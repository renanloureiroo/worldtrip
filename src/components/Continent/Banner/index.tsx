import { Box, Flex, Heading } from "@chakra-ui/react"

interface BannerProps {
  title: string
  url: string
}

export const Banner = ({ url, title }: BannerProps) => {
  return (
    <Box bgImage={`url(${url})`} w="100%" height="450px" maxW={1440}>
      <Flex
        align="end"
        w="100%"
        height="100%"
        backdropFilter="blur(5px) brightness(70%)"
      >
        <Heading
          ml="28"
          mb="12"
          fontSize="5xl"
          fontWeight="semibold"
          color="brand.50"
        >
          {title}
        </Heading>
      </Flex>
    </Box>
  )
}
