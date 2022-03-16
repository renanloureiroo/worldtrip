import {
  Box,
  Divider,
  Flex,
  Heading,
  Icon,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react"
import type { NextPage } from "next"
import Head from "next/head"
import Image from "next/image"

const Home: NextPage = () => {
  return (
    <Flex
      direction="column"
      as="main"
      w="100%"
      align="center"
      minHeight="100vh"
      maxW={1440}
      mx="auto"
    >
      <Head>
        <title>Worldtrip | Home </title>
      </Head>

      {/* banner */}
      <Flex
        h="80"
        align="center"
        bgImage="/images/Background.png"
        backgroundSize="cover"
        backgroundRepeat="no-repeat"
      >
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

        <Box flex="1" alignSelf="flex-end" mb="-10">
          <Image
            src="/images/Airplane.png"
            width={417}
            height={270}
            alt="avião"
          />
        </Box>
      </Flex>
      {/* fim do banner */}

      <Stack direction="row" mt="28" spacing="24" px="6">
        <Stack align="center" justify="center">
          <Image
            src="/images/cocktail.svg"
            width={85}
            height={85}
            alt="Terra"
          />
          <Text>vida noturna</Text>
        </Stack>
        <Stack align="center" justify="center">
          <Image src="/images/surf.svg" width={85} height={85} alt="Terra" />
          <Text>Praia</Text>
        </Stack>
        <Stack align="center" justify="center">
          <Image
            src="/images/building.svg"
            width={85}
            height={85}
            alt="Terra"
          />
          <Text>moderno</Text>
        </Stack>
        <Stack align="center" justify="center">
          <Image src="/images/museum.svg" width={85} height={85} alt="Terra" />
          <Text>clássico</Text>
        </Stack>
        <Stack align="center" justify="center">
          <Image src="/images/earth.svg" width={85} height={85} alt="Terra" />
          <Text>e mais...</Text>
        </Stack>
      </Stack>

      <Divider w="24" mt="20" borderColor="brand.900" />
    </Flex>
  )
}

export default Home
