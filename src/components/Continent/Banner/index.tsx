import { Box, Flex, Heading, useBreakpointValue } from "@chakra-ui/react"

interface BannerProps {
  title: string
  url: string
}

export const Banner = ({ url, title }: BannerProps) => {
  const size = useBreakpointValue({
    base: false,
    md: true,
  })
  return (
    <Box
      bgImage={`url(${url})`}
      w="100%"
      height={["150px", "450px"]}
      maxW={1440}
      bgRepeat="no-repeat"
      bgSize="cover"
      bgPosition="center"
    >
      {size ? (
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
      ) : (
        <Flex
          align="center"
          justify="center"
          w="100%"
          height="100%"
          backdropFilter="blur(5px) brightness(70%)"
        >
          <Heading
            fontSize={["3xl", "5xl"]}
            fontWeight="semibold"
            color="brand.50"
          >
            {title}
          </Heading>
        </Flex>
      )}
    </Box>
  )
}
