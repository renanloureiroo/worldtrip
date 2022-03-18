import { Flex, Box, Heading, Text, useBreakpointValue } from "@chakra-ui/react"

import Image from "next/image"
import { Header } from "./Header"
import { Illustration } from "./Illustration"
const Banner = () => {
  const hiddenIllustration = useBreakpointValue({
    base: false,
    md: true,
  })
  return (
    <Flex
      w="100%"
      maxW={1440}
      h={["40", "335px"]}
      mx="auto"
      align="center"
      bgImage="/images/Background.png"
      backgroundSize="cover"
      backgroundRepeat="no-repeat"
    >
      <Header />

      {hiddenIllustration && <Illustration />}
    </Flex>
  )
}

export { Banner }
