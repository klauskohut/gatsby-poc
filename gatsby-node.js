/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const fs = require('fs')
const path = require('path')

exports.createPages = async ({ actions, reporter }) => {
  const { createPage } = actions

  let pageData = {}

  try {
    const data = await fs.promises.readFile(path.join(__dirname, `./data/pages.json`))
    pageData = JSON.parse(data)
  } catch (e) {
    reporter.panicOnBuild(`Error while loading pages.json:`, e)
    return
  }

  const template = path.join(__dirname, `./src/templates/index.js`)

  pageData.data.forEach((page, i) => {
    const {
      path,
      ...rest
    } = page

    createPage({
      path: rest.id,
      component: template,
      context: {
        page: rest
      },
    })
  })

}
