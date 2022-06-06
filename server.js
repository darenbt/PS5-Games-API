const express = require('express');
const app = express()
const cors = require('cors');
const PORT = 8000

app.use(cors())

const games = {
  'elden ring':{
    'score': 96,
    'release year': 2022,
    'developer': 'FromSoftware',
    'length': '51 hrs',
    'genre': 'action role-playing',
    'rating': 'M'
  },
  'hades':{
    'score': 93,
    'release year': 2021,
    'developer': 'Supergiant Games',
    'length': '21.5 hrs',
    'genre': 'action-adventure',
    'rating': 'T'
  },
  'demon\'s souls':{
    'score': 92,
    'release year': 2020,
    'developer': 'Bluepoint Games',
    'length': '24 hrs',
    'genre': 'action role-playing',
    'rating': 'M'
  },
  'unknown':{
    'score': 0,
    'release year': 'unknown',
    'developer': 'unknown',
    'length': '0',
    'genre': 'unknown',
    'rating': 'unknown'
  }
}

app.get('/', (request,response) => {
  response.sendFile(__dirname + '/index.html')
})

app.get('/api/:game', (request,response)=>{
  const gameName = request.params.game.toLowerCase()
  if ( games[gameName] ) {
    response.json(games[gameName])
  } else {
    response.json(games['unknown'])
  }
})

app.listen(process.env.PORT || PORT, () => {
  console.log(`The server is running on port ${PORT}!`)
})
