/// <reference types="next" />
/// <reference types="next/types/global" />

declare module '*.md'

declare module '*.json' {
  const value: any
  export default value
}

declare module '*.yml' {
  const value: any
  export default value
}

declare global {
  interface Window {
    netlifyIdentity?: any
  }
}
