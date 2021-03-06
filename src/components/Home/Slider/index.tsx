import { Box, Flex, Heading, Text } from "@chakra-ui/react"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Pagination, Autoplay } from "swiper"
import Link from "next/link"
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

interface SliderProps {
  continents: ContinentType[]
}

export const Slider = ({ continents }: SliderProps) => {
  return (
    <Flex
      borderBottomWidth={2}
      w="100%"
      h={["250px", "450px"]}
      maxW={1240}
      mx="auto"
      my={["5", "14"]}
    >
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        loop
        scrollbar={{ draggable: true }}
        slidesPerView={1}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 3000,
        }}
      >
        {continents.map((continent) => (
          <SwiperSlide key={continent.id}>
            <Flex
              w="100%"
              h="100%"
              align="center"
              justify="center"
              direction="column"
              bgImage={`url('${continent.data.photo.url}')`}
              bgRepeat="no-repeat"
              bgSize="cover"
              textAlign="center"
            >
              <Link href={`/continents/${continent.id}`} passHref>
                <Box cursor="pointer">
                  <Heading
                    fontSize={["xl", "5xl"]}
                    fontWeight="bold"
                    color="brand.50"
                  >
                    {continent.data.name}
                  </Heading>

                  <Text
                    fontSize={["sm", "2xl"]}
                    fontWeight="bold"
                    color="brand.50"
                  >
                    {continent.data.curiosity}
                  </Text>
                </Box>
              </Link>
            </Flex>
          </SwiperSlide>
        ))}
      </Swiper>
    </Flex>
  )
}
