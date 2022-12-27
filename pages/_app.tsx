import type { AppProps } from 'next/app'
import { ChakraProvider, extendTheme } from '@chakra-ui/react'

const colors = {
  brand: {
    background: "#fffffe",
    headling: "#094067",
    paragraph: "#5f6c7b",
    button: "#3da9fc",
    buttonText: "#fffffe",
    stroke: "#094067",
    main: "#fffffe",
    highlight: "#3da9fc",
    secondary: "#90b4ce",
    teriary: "#ef4565"
  },
}

const theme = extendTheme({ colors })

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}
