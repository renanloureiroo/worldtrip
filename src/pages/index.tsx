import {
  Box,
  calc,
  Divider,
  Flex,
  Heading,
  Text,
  useTheme,
} from "@chakra-ui/react"
import type { GetStaticProps } from "next"
import Head from "next/head"

import * as Prismic from "@prismicio/client"

import { Navigation, Pagination, Autoplay } from "swiper"
import { Swiper, SwiperSlide } from "swiper/react"
import { prismicClient } from "../services/prismic"
import { Banner } from "../components/Banner"
import { Curiosities } from "../components/Curiosities"
import { Subtitle } from "../components/Subtitle"
import { Slider } from "../components/Slider"

type ContinentType = {
  id: string
  data: {
    name: string
    curiosity: string
    photo: {
      url: string
      alt: string
    }
  }
}

interface Props {
  continents: ContinentType[]
}

const Home = ({ continents }: Props) => {
  const theme = useTheme()

  return (
    <Flex
      direction="column"
      as="main"
      w="100%"
      align="center"
      minHeight="calc(100vh - 24)"
      maxW={1440}
      mx="auto"
    >
      <Head>
        <title>Worldtrip | Home </title>
      </Head>

      <Banner />

      <Curiosities />

      <Divider w="24" mt="20" borderColor="brand.900" />

      <Subtitle />

      <Slider continents={continents} />
    </Flex>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const response = await prismicClient.get({
    predicates: [Prismic.predicate.at("document.type", "continents")],
    fetch: [
      "continents.continent_name",
      "continents.curiosity",
      "continents.slider_image",
    ],
  })
  const continents = response.results.map((continent) => {
    return {
      id: continent.uid,
      data: {
        name: continent.data.continent_name[0].text,
        curiosity: continent.data.curiosity,
        photo: {
          url: continent.data.slider_image.url,
          alt: continent.data.slider_image.alt,
        },
      },
    }
  })

  return {
    props: {
      continents,
    },

    revalidate: 60 * 60 * 24 * 7, // 7 days
  }
}

export default Home
