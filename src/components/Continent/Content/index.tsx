import {
  SimpleGrid,
  Box,
  Stack,
  Flex,
  Tooltip,
  Icon,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react"
import { FiAlertCircle } from "react-icons/fi"

interface ContentProps {
  continent: {
    description: string
    quantity_countries: number
    quantity_languages: number
  }
}

export const Content = ({ continent }: ContentProps) => {
  const size = useBreakpointValue({
    base: true,
    md: false,
  })

  return (
    <Flex
      flex="1"
      mt={["6", "20"]}
      wrap="wrap"
      alignItems="center"
      maxW={1200}
      px={5}
      as="main"
    >
      <Box flex="1">
        <Text fontSize={["sm", "2xl"]} textAlign="justify">
          {continent.description}
        </Text>
      </Box>

      <Stack
        flex="1"
        direction="row"
        spacing="10"
        align="center"
        justify={size ? "space-between" : "center"}
        mt={size ? "4" : ""}
      >
        <Flex
          align={size ? "flex-start" : "center"}
          justify="center"
          direction="column"
        >
          <Text
            as="strong"
            fontWeight="semibold"
            color="brand.500"
            fontSize={["2xl", "5xl"]}
          >
            {continent.quantity_countries}
          </Text>
          <Text fontWeight="semibold" fontSize={["lg", "2xl"]}>
            países
          </Text>
        </Flex>

        <Flex
          align={size ? "flex-start" : "center"}
          justify="center"
          direction="column"
        >
          <Text
            as="strong"
            fontWeight="semibold"
            color="brand.500"
            fontSize={["2xl", "5xl"]}
          >
            {continent.quantity_languages}
          </Text>
          <Text fontWeight="semibold" fontSize={["lg", "2xl"]}>
            línguas
          </Text>
        </Flex>

        <Flex
          align={size ? "flex-start" : "center"}
          justify="center"
          direction="column"
        >
          <Text
            as="strong"
            fontWeight="semibold"
            color="brand.500"
            fontSize={["2xl", "5xl"]}
          >
            27
          </Text>
          <Text fontWeight="semibold" fontSize={["lg", "2xl"]}>
            cidades +100{" "}
            <Tooltip
              hasArrow
              label="Cidades mais visitadas!"
              aria-label="informação"
            >
              <span>
                <Icon
                  cursor="pointer"
                  as={FiAlertCircle}
                  fontSize="md"
                  color="brand.700"
                />
              </span>
            </Tooltip>
          </Text>
        </Flex>
      </Stack>
    </Flex>
  )
}
