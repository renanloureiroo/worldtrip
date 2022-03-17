import { Flex, Box, Heading, Text } from "@chakra-ui/react"

import Image from "next/image"
import { Header } from "./Header"
import { Illustration } from "./Illustration"
const Banner = () => {
  return (
    <Flex
      w="100%"
      maxW={1440}
      h={335}
      mx="auto"
      align="center"
      bgImage="/images/Background.png"
      backgroundSize="cover"
      backgroundRepeat="no-repeat"
    >
      <Header />

      <Illustration />
    </Flex>
  )
}

export { Banner }
