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

export const mobileLarge = (props) => {
  return css`
    @media only screen and (max-width: 550px) {
      ${props}
    }
  `
}

export const tabletSmall = (props) => {
  return css`
    @media only screen and (max-width: 820px) {
      ${props}
    }
  `
}


export const tablet = (props) => {
  return css`
    @media only screen and (max-width: 1300px) {
      ${props}
    }
  `
}


export const screenLarge = (props) => {
  return css`
    @media only screen and (min-width: 1540px) {
      ${props}
    }
  `
}
