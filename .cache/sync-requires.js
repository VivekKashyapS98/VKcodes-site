const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("/home/vivek/Documents/Projects/Showcase Projects/Portfolio/.cache/dev-404-page.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/home/vivek/Documents/Projects/Showcase Projects/Portfolio/src/pages/index.js"))),
  "component---src-pages-project-1-js": hot(preferDefault(require("/home/vivek/Documents/Projects/Showcase Projects/Portfolio/src/pages/project1.js"))),
  "component---src-pages-project-2-js": hot(preferDefault(require("/home/vivek/Documents/Projects/Showcase Projects/Portfolio/src/pages/project2.js")))
}

