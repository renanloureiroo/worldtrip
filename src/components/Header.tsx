import { Flex, Text, Box, useBreakpointValue } from "@chakra-ui/react"
import Image from "next/image"
import { BackButton } from "./backbutton"

export const Header = () => {
  const size = useBreakpointValue({
    base: false,
    md: true,
  })
  return (
    <Box as="header" w={"100%"}>
      <Flex
        w="100%"
        align="center"
        justify="center"
        maxWidth={1440}
        h={["12", "24"]}
        mx="auto"
        px="6"
        position="relative"
      >
        {!size && (
          <BackButton
            aria-label="Voltar para home"
            position="absolute"
            left="4"
            size={"xs"}
          />
        )}

        <Image
          src="/images/Logo.svg"
          width={size ? 180 : 82}
          height={size ? 45 : 20}
          alt="Logo"
        />
      </Flex>
    </Box>
  )
}
