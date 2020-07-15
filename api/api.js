const express = require('express')
const apiRouter = express.Router()
const artistRouter = require('./artists')
const seriesRouter = require('./series')
const issuesRouter = require('./issues')

apiRouter.use('/artists', artistRouter)
apiRouter.use('/series', seriesRouter)
apiRouter.use('./issues', issuesRouter)

module.exports = apiRouter;