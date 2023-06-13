import { css } from "styled-components"

export const mobileSmall = (props) => {
  return css`
    @media only screen and (max-width: 300px) {
      ${props}
    }
  `
}

export const mobile = (props) => {
  return css`
    @media only screen and (max-width: 420px) {
      ${props}
    }
  `
}

export const tabletSmall = (props) => {
  return css`
    @media only screen and (max-width: 800px) {
      ${props}
    }
  `
}
