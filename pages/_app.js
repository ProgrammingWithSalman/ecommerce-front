
import { createGlobalStyle } from 'styled-components';
import '../styles/globals.css';
import { CartContextProvider } from '@/components/CartContext';

const GlobalStyles = createGlobalStyle`
 @import url('https://fonts.googleapis.com/css?family=Poppins:wght@400;500;700&display=swap');

body {
  background-color: #f0f0f0;
  padding: 0;
  margin: 0;
  font-family: 'Poppins', sans-serif
}`



export default function App({ Component, pageProps }) {
  return (
    <>
        <GlobalStyles />
        <CartContextProvider>
          <Component   {...pageProps} />
        </CartContextProvider>
    </>
  )
}
