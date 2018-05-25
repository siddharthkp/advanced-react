import React from 'react'
import ReactDOM from 'react-dom/server'
import express from 'express'
import { ServerStyleSheet } from 'styled-components'
import App from '../src/1/app.js'
import axios from 'axios'

const server = express()

server.get('/', (req, res) => {
  axios
    .get(`https://github-user.now.sh/?username=siddharthkp`)
    .then(response => {
      const sheet = new ServerStyleSheet()
      const html = ReactDOM.renderToString(
        sheet.collectStyles(<App initialData={response.data} />)
      )
      const styleTags = sheet.getStyleTags()
      res.end(`
        <html>
        <head>
        <script>
          window.INITIAL_DATA = ${JSON.stringify(response.data)}
        </script>
        <style>${styleTags}</style>
        </head>
        <body>
        <div id="root">
          ${html}
        </div>
        <script src="main.js"></script>
        </body>
        </html>
      `)
    })
})

server.use('/', express.static('public'))

server.listen(3001, () => 'Listening on 3001')
