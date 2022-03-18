import React from "react"
import {
  Box,
  Flex,
  Grid,
  Heading,
  Icon,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverHeader,
  PopoverTrigger,
  SimpleGrid,
  Stack,
  Text,
  Tooltip,
} from "@chakra-ui/react"
import { GetServerSideProps } from "next"
import Head from "next/head"
import { Banner } from "../../components/Continent/Banner"
import { prismicClient } from "../../services/prismic"

import Image from "next/image"

import { FiAlertCircle } from "react-icons/fi"
import { Content } from "../../components/Continent/Content"
import { Cities } from "../../components/Continent/Cities"

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

      <Content continent={continent} />

      <Cities citiesTop={continent.cities_top} />
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
