import { Box } from "@chakra-ui/react"
import Image from "next/image"

export const Illustration = () => {
  return (
    <Box flex="1" alignSelf="flex-end" mb="-10">
      <Image src="/images/Airplane.png" width={417} height={270} alt="avião" />
    </Box>
  )
}
