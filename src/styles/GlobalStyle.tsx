import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
  }
  .swiper-button-next, .swiper-button-prev {
    color: white !important; /* Set arrow icon color */
    opacity: 1 !important; /* Make sure it's fully visible */
}

/* Optionally, adjust the position slightly if needed */
.swiper-button-next {
    right: 10px !important;
}

.swiper-button-prev {
    left: 10px !important;
}
`

export default GlobalStyle
