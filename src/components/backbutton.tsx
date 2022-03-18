import { IconButton, IconButtonProps } from "@chakra-ui/react"
import Link from "next/link"
import { FiChevronLeft } from "react-icons/fi"

interface BackButtonProps extends IconButtonProps {}

export const BackButton = ({ ...rest }: BackButtonProps) => {
  return (
    <Link href="/" passHref>
      <IconButton as={FiChevronLeft} bg="brand.50" {...rest} />
    </Link>
  )
}
