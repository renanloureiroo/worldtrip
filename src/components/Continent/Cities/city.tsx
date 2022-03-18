import { Box, Flex, Text } from "@chakra-ui/react"
import Image from "next/image"

interface CityProps {
  city: {
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
}

export const City = ({ city }: CityProps) => {
  return (
    <Box bg="white" width={256}>
      <Box
        w="256px"
        height="173px"
        borderRadius="4px 4px 0px 0px"
        overflow="hidden"
      >
        <Image
          src={city.photo.url}
          width={256}
          height={173}
          alt={city.photo.alt}
        />
      </Box>
      <Flex
        borderWidth="0px 1px 1px 1px"
        borderColor="brand.500"
        align="center"
        justify="space-between"
        px="6"
        py="4"
        borderRadius="0px 0px 4px 4px"
      >
        <Box>
          <Text fontSize="xl" fontWeight="semibold" lineHeight="25px">
            {city.name}
          </Text>
          <Text
            mt="3"
            fontSize="md"
            color="brand.700"
            fontWeight="medium"
            lineHeight="26px"
          >
            {city.country}
          </Text>
        </Box>
        <Box width="30px" height="30px" borderRadius="15px" overflow="hidden">
          <Image
            src={city.flag.url}
            alt={city.flag.alt}
            width={30}
            height={30}
          />
        </Box>
      </Flex>
    </Box>
  )
}
