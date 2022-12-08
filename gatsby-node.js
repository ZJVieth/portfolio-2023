const { createFilePath } = require(`gatsby-source-filesystem`)
const path = require(`path`)

exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
    if (stage === 'build-html') {
        actions.setWebpackConfig({
            module: {
                rules: [
                    {
                        test: /p5/,
                        use: loaders.null()
                    }
                ]
            }
        })
    }
}