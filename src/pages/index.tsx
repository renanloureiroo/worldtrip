import { Divider, Flex, Heading } from "@chakra-ui/react"
import type { GetStaticProps } from "next"
import Head from "next/head"
import Image from "next/image"

import * as Prismic from "@prismicio/client"

import { Swiper, SwiperSlide } from "swiper/react"
import { prismicClient } from "../services/prismic"
import { Banner } from "../components/Banner"
import { Curiosities } from "../components/Curiosities"

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

      <Banner />

      <Curiosities />

      <Divider w="24" mt="20" borderColor="brand.900" />
      <Heading textAlign="center" fontWeight="medium" fontSize="4xl" mt="12">
        Vamos nessa?
        <br />
        Então escolha seu continente
      </Heading>
    </Flex>
  )
}

// export const getStaticProps: GetStaticProps = async () => {
//   const response = await prismicClient.get({
//     predicates: [Prismic.predicate.at("document.type", "continents")],
//     fetch: [
//       "continents.continent_name",
//       "continents.curiosity",
//       "continents.slider_image",
//     ],
//   })
//   const continents = response.results.map((continent) => {
//     return {
//       id: continent.uid,
//       data: {
//         name: continent.data.continent_name.text,
//         curiosity: continent.data.curiosity,
//         photo: {
//           url: continent.data.slider_image.url,
//           alt: continent.data.slider_image.alt,
//         },
//       },
//     }
//   })
//   // console.log(JSON.stringify(response.results, null, 2))

//   return {
//     props: {
//       continents,
//     },

//     revalidate: 60 * 60 * 24 * 7, // 7 days
//   }
// }

export default Home
