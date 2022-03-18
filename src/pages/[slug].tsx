import { Box, Flex, Heading, SimpleGrid, Stack, Text } from "@chakra-ui/react"
import { GetServerSideProps } from "next"
import Head from "next/head"
import { Banner } from "../components/Continent/Banner"
import { prismicClient } from "../services/prismic"

import Image from "next/image"
import { url } from "inspector"

type ImageType = {
  alt: string
  url: string
}

type CityType = {
  name: string
  country: string
  photo: ImageType
  flag: ImageType
}

type ContinentType = {
  name: string
  description: string
  quantity_countries: number
  quantity_languages: number
  banner: ImageType
  cities_top: CityType[]
}

interface ContinentProps {
  continent: ContinentType
}

const Continent = ({ continent }: ContinentProps) => {
  return (
    <Flex align="center" direction="column">
      <Banner url={continent.banner.url} title={continent.name} />

      <SimpleGrid
        flex="1"
        mt="20"
        minChildWidth="320px"
        alignItems="center"
        maxW={1200}
        px={5}
        as="main"
      >
        <Box>
          <Text fontSize="2xl" textAlign="justify">
            {continent.description}
          </Text>
        </Box>

        <Stack direction="row" spacing="10" align="center" justify="center">
          <Flex align="center" justify="center" direction="column">
            <Text
              as="strong"
              fontWeight="semibold"
              color="brand.500"
              fontSize="5xl"
            >
              {continent.quantity_countries}
            </Text>
            <Text fontWeight="semibold" fontSize="2xl">
              países
            </Text>
          </Flex>

          <Flex align="center" justify="center" direction="column">
            <Text
              as="strong"
              fontWeight="semibold"
              color="brand.500"
              fontSize="5xl"
            >
              {continent.quantity_languages}
            </Text>
            <Text fontWeight="semibold" fontSize="2xl">
              línguas
            </Text>
          </Flex>

          <Flex align="center" justify="center" direction="column">
            <Text
              as="strong"
              fontWeight="semibold"
              color="brand.500"
              fontSize="5xl"
            >
              27
            </Text>
            <Text fontWeight="semibold" fontSize="2xl">
              línguas
            </Text>
          </Flex>
        </Stack>
      </SimpleGrid>

      <Box my="20" w="100%" maxW={1200} px={5}>
        <Heading fontWeight="medium" fontSize="4xl">
          cidades +100
        </Heading>
        <Flex wrap="wrap" alignItems="flex-start" gap="46px" flex="1" mt="10">
          {continent.cities_top.map((city) => (
            <Box bg="white" width={256} zIndex={1} key={city.name}>
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
                <Box
                  width="30px"
                  height="30px"
                  borderRadius="15px"
                  overflow="hidden"
                >
                  <Image
                    src={city.flag.url}
                    alt={city.flag.alt}
                    width={30}
                    height={30}
                  />
                </Box>
              </Flex>
            </Box>
          ))}
        </Flex>
      </Box>
    </Flex>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const slug = params!.slug

  const { data } = await prismicClient.getByUID("continents", String(slug), {})

  const cities = data.cities_top.map(
    (city: {
      city_name: string
      country_city: string
      image_city: { alt: string; url: string }
      flag: { alt: string; url: string }
    }) => {
      return {
        name: city.city_name,
        country: city.country_city,
        photo: {
          alt: city.image_city.alt,
          url: city.image_city.url,
        },
        flag: {
          alt: city.flag.alt,
          url: city.flag.url,
        },
      }
    }
  )

  const continent = {
    name: data.continent_name[0].text,
    description: data.description,
    quantity_countries: data.quantity_countries,
    quantity_languages: data.quantity_languages,
    banner: {
      alt: data.banner.alt,
      url: data.banner.url,
    },
    cities_top: [...cities],
  }

  return {
    props: { continent },
  }
}

export default Continent
