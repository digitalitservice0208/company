const path = require('path')

module.exports = {
    output: "export",
    basePath: "/new-company",
    assetPrefix: "/new-company",
    sassOptions: {
        includePaths: [path.join(__dirname, 'styles')],
    },
    trailingSlash: true,
}
