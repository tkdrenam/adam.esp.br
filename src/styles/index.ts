import { createStyled } from '@stitches/react'

const theme = {
  radii: {
    none: '0',
    sm: '.125rem',
    default: '.25rem',
    lg: '.5rem',
    full: '9999px',
  },
  space: {
    $0: '0',
    $1: '0.25rem',
    $2: '0.5rem',
    $3: '0.75rem',
    $4: '1rem',
    $5: '1.25rem',
    $6: '1.5rem',
    $8: '2rem',
    $10: '2.5rem',
    $12: '3rem',
    $16: '4rem',
    $20: '5rem',
    $24: '6rem',
    $32: '8rem',
    $40: '10rem',
    $48: '12rem',
    $56: '14rem',
    $64: '16rem',
  },
}

export const { styled, css } = createStyled({
  tokens: theme,
  breakpoints: {
    sm: (rule) => `@media (min-width: 640px) { ${rule} }`,
    md: (rule) => `@media (min-width: 768px) { ${rule} }`,
    lg: (rule) => `@media (min-width: 1024px) { ${rule} }`,
    xl: (rule) => `@media (min-width: 1280px) { ${rule} }`,
  },
  utils: {
    m: (config) => (value: keyof typeof theme['space'] | (string & {})) => ({
      marginTop: value,
      marginBottom: value,
      marginLeft: value,
      marginRight: value,
    }),
    mt: (config) => (value: keyof typeof theme['space'] | (string & {})) => ({
      marginTop: value,
    }),
    mr: (config) => (value: keyof typeof theme['space'] | (string & {})) => ({
      marginRight: value,
    }),
    mb: (config) => (value: keyof typeof theme['space'] | (string & {})) => ({
      marginBottom: value,
    }),
    ml: (config) => (value: keyof typeof theme['space'] | (string & {})) => ({
      marginLeft: value,
    }),
    mx: (config) => (value: keyof typeof theme['space'] | (string & {})) => ({
      marginLeft: value,
      marginRight: value,
    }),
    my: (config) => (value: keyof typeof theme['space'] | (string & {})) => ({
      marginTop: value,
      marginBottom: value,
    }),
    size: (config) => (value: keyof typeof theme['space'] | (string & {})) => ({
      width: value,
      height: value,
    }),
  },
})
