const app = require('express').Router()

// GET /places
app.get('/', (req, res) => {
    let places = [{
        name: 'H-Thai-ML',
        city: 'Seattle',
        state: 'WA',
        cuisines: 'Thai, Pan-Asian',
        pic: '/images/in-n-out-burger.jpg' 
      }, {
        name: 'Coding Cat Cafe',
        city: 'Phoenix',
        state: 'AZ',
        cuisines: 'Coffee, Bakery',
        pic: '/images/mcdonalds-sign.jpg'
        
      }]
// router.get('/new', (req, res) => {
//         res.render('places/new')
//       })
      
      
      res.render('places/index', { places })
      
  })
  

module.exports = app

// let places = [{
//   name: 'H-Thai-ML',
//   city: 'Seattle',
//   state: 'WA',
//   cuisines: 'Thai, Pan-Asian',
//   pic: '/images/in-n-out-burger.jpeg'
// }, {
//     name: 'Coding Cat Cafe',
//     city: 'Phoenix',
//     state: 'AZ',
//     cuisines: 'Coffee, Bakery',
//     pic: '/images/mcdonalds-sign.jpeg'
// }];