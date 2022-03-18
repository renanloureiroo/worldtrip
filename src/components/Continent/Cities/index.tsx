import { Flex, Box, Heading, useBreakpointValue } from "@chakra-ui/react"
import { City } from "./city"

type CityType = {
  name: string
  country: string
  photo: {
    url: string
    alt: string
  }
  flag: {
    url: string
    alt: string
  }
}

interface CitiesProps {
  citiesTop: CityType[]
}

export const Cities = ({ citiesTop }: CitiesProps) => {
  const size = useBreakpointValue({
    base: false,
    md: true,
  })

  return (
    <Box my={["8", "20"]} w="100%" maxW={1200} px={5}>
      <Heading fontWeight="medium" fontSize={["2xl", "4xl"]}>
        Cidades +100
      </Heading>
      <Flex
        wrap="wrap"
        alignItems="flex-start"
        justify={size ? "start" : "center"}
        gap={["20px", "40px"]}
        flex="1"
        mt={["5", "10"]}
      >
        {citiesTop.map((city) => (
          <City city={city} key={city.name} />
        ))}
      </Flex>
    </Box>
  )
}
