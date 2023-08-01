const router = require('express').Router()

// GET /places
router.get('/', (req, res) => {
      
    const places = [{
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
      }];
      res.render('places/index', { places })
      
      
  })
        router.get('/new', (req, res) => {
        res.render('places/new')
  });

module.exports = router

