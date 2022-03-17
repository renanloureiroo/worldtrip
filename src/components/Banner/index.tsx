import { Flex, Box, Heading, Text } from "@chakra-ui/react"

import Image from "next/image"
import { Header } from "./Header"
import { Illustration } from "./Illustration"
const Banner = () => {
  return (
    <Flex
      h="80"
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
