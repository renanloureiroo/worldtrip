import { Box, Heading, Text } from "@chakra-ui/react"

export const Header = () => {
  return (
    <Box px={["4", "36"]} flex="1">
      <Heading color="brand.50" fontSize={["xl", "4xl"]} fontWeight="medium">
        5 Continentes,
        <br />
        infinitas possibilidades.
      </Heading>

      <Text fontSize={["sm", "lg"]} color="brand.50" mt={["2", "6"]}>
        Chegou a hora de turara do papel a viagem que você
        <br />
        sempre sonhou
      </Text>
    </Box>
  )
}
