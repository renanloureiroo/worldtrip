import { Box, Heading, Text } from "@chakra-ui/react"

export const Header = () => {
  return (
    <Box px="36" flex="1">
      <Heading color="brand.50" fontSize="4xl" fontWeight="medium">
        5 Continentes,
        <br />
        infinitas possibilidades.
      </Heading>

      <Text color="brand.50" mt="6">
        Chegou a hora de turara do papel a viagem que você
        <br />
        sempre sonhou
      </Text>
    </Box>
  )
}
