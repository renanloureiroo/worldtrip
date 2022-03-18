import { Stack, Text } from "@chakra-ui/react"

import Image from "next/image"
import { CuriosityCard } from "./CuriosityCard"

const curiositiesData = [
  {
    id: "cocktail",
    title: "vida noturna",
    src: "/images/cocktail.svg",
    alt: "Bebida ilustração",
  },
  {
    id: "surf",
    title: "praia",
    src: "/images/surf.svg",
    alt: "Praia ilustração",
  },
  {
    id: "predio",
    title: "moderno",
    src: "/images/building.svg",
    alt: "Prédio ilustração",
  },
  {
    id: "museu",
    title: "clássico",
    src: "/images/museum.svg",
    alt: "Museu ilustração",
  },
  {
    id: "planeta",
    title: "e mais...",
    src: "/images/earth.svg",
    alt: "Planeta Terra ilustração",
  },
]
export const Curiosities = () => {
  return (
    <Stack
      direction="row"
      justify="center"
      align="center"
      wrap="wrap"
      mt={["9", "28"]}
      spacing={["12", "24"]}
      px={["4", "6"]}
      mx="auto"
    >
      {curiositiesData.map((data) => (
        <CuriosityCard
          key={data.id}
          alt={data.alt}
          title={data.title}
          src={data.src}
        />
      ))}
    </Stack>
  )
}
