import { Flex, Text, Box } from "@chakra-ui/react"
import Image from "next/image"

export const Header = () => {
  return (
    <Box as="header" w={"100%"}>
      <Flex
        w="100%"
        align="center"
        justify="center"
        maxWidth={1440}
        h="24"
        mx="auto"
        px="6"
      >
        <Image src="/images/Logo.svg" width={180} height={45} alt="Logo" />
      </Flex>
    </Box>
  )
}
