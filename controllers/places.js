const router = require('express').Router()
const places = require('../models/places.js')
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

  router.get('/:id', (req, res) => {
    let id = Number(req.params.id)
    if (isNaN(id)) {
        res.render('error404')
    }
    else if (!places[id]) {
        res.render('error404')
    }
    else {
      res.render('places/show', { place: places[id], id })
    }
  })

  router.get (`/:id/edit`, (req, res) => {
    let id = Number(req.params.id)
    res.render('places/edit' , { place: places[id], id })
  })
  
  router.put('/:id', (req,res) =>{ 
    let id = Number(req.params.id)
    if (isNaN(id)) {
      res.render('Error404')
    } else if (!places[id]) {
      res.render('Error404')
    } else {
      if (!req.body.pic) {
        req.body.pic = 'http://placekitten.com/400/400'
      }
    
      if (!req.body.city) {
        req.body.city = 'Anytown'
      }
      if (!req.body.state) {
        req.body.state = 'USA'
      }
      //save new data into places[id]
      places[id] = req.body
      res.redirect(`/places/${id}`)
    }
    })

  router.delete('/:id', (req,res) => {
    let id = Number(req.params.id)
    if (isNaN(id)) {
      res.render('Error404')
    } else if (!places[id]) {
      res.render('Error404')
    } else {
      places.splice(id,1)
      res.redirect('/places') 
    }
    })

  router.post('/', (req, res) => {
    console.log(req.body)
    if (!req.body.pic) {
      // Default image if one is not provided
      req.body.pic = 'http://placekitten.com/400/400'
    }
    if (!req.body.city) {
      req.body.city = 'Anytown'
    }
    if (!req.body.state) {
      req.body.state = 'USA'
    }
    places.push(req.body)
    res.redirect('/places')
  });
  
module.exports = router




