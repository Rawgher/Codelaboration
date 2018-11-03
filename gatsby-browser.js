/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

import stateWrapper from "./src/state/gatsby-state-wrapper"
export const wrapRootElement = stateWrapper

// export const replaceDOMRenderer = ({ routes, defaultShouldUpdateScroll, onUpdate }) => (
//   ReactDOM.render(
//     <Router
//       history={hashHistory}
//       routes={routes}
//       render={applyRouterMiddleware(useScroll(defaultShouldUpdateScroll))}
//       onUpdate={onUpdate}
//     />,
//     typeof window !== 'undefined' ? document.getElementById('react-mount') : void 0)
// )
