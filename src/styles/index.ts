import { createStyled } from '@stitches/react'
import { reset } from '@/styles/reset'

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

const { styled, css } = createStyled({
  tokens: theme,
  breakpoints: {
    sm: (rule) => `@media (min-width: 640px) { ${rule} }`,
    md: (rule) => `@media (min-width: 768px) { ${rule} }`,
    lg: (rule) => `@media (min-width: 1024px) { ${rule} }`,
    xl: (rule) => `@media (min-width: 1280px) { ${rule} }`,
  },
  utils: {
    m: () => (value: keyof typeof theme['space'] | (string & {})) => ({
      marginTop: theme.space[value],
      marginBottom: theme.space[value],
      marginLeft: theme.space[value],
      marginRight: theme.space[value],
    }),
    mt: () => (value: keyof typeof theme['space'] | (string & {})) => ({
      marginTop: theme.space[value],
    }),
    mr: () => (value: keyof typeof theme['space'] | (string & {})) => ({
      marginRight: theme.space[value],
    }),
    mb: () => (value: keyof typeof theme['space'] | (string & {})) => ({
      marginBottom: theme.space[value],
    }),
    ml: () => (value: keyof typeof theme['space'] | (string & {})) => ({
      marginLeft: theme.space[value],
    }),
    mx: () => (value: keyof typeof theme['space'] | (string & {})) => ({
      marginLeft: theme.space[value],
      marginRight: theme.space[value],
    }),
    my: () => (value: keyof typeof theme['space'] | (string & {})) => ({
      marginTop: theme.space[value],
      marginBottom: theme.space[value],
    }),
    size: () => (value: keyof typeof theme['space'] | (string & {})) => ({
      width: theme.space[value],
      height: theme.space[value],
    }),
  },
})

css.global(reset)

export { css, styled }
