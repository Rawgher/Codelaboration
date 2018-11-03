/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */

import stateWrapper from "./src/state/gatsby-state-wrapper"
export const wrapRootElement = stateWrapper
