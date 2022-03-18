import { extendTheme } from "@chakra-ui/react"

export const theme = extendTheme({
  colors: {
    brand: {
      50: "#F5F8FA",
      100: "#DADADA",
      500: "#FFBA08",
      700: "#999999",
      900: "#47585B",
    },
  },
  fonts: {
    body: "Poppins",
    heading: "Poppins",
  },

  styles: {
    global: {
      body: {
        color: "brand.900",
        bg: "brand.50",
      },
    },
  },
})
