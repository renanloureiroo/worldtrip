import * as Prismic from "@prismicio/client"

const endpoint = process.env.PRISMIC_ENDPOINT

const accessToken = process.env.PRISMIC_ACCESS_TOKEN

const prismicClient = Prismic.createClient(endpoint as string, {
  accessToken,
})

export { prismicClient }
