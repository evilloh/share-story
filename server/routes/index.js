const express = require('express');
const router = express.Router();
const Post = require('../models/post.model')

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

router.post('/newPost', (req, res) => {
  Post.create(req.body)
    .then(data => res.json(data))
    .catch(err => console.log('Error:', err))
})

// router.get('/lastOne', (req, res) => {
//   Post.find()
//     .then(data => {
//       return res.json(data)
//     })
//     .catch(err => console.log('Error:', err))
// })

router.get('/lastOne', (req, res) => {
  Post.find()
    .then(data => {

      let trues = 0
      let falses = 0
      let value = data.forEach((el) => {
        console.log("pota proviamo", el.help)
        console.log("e se non funziona vediamo", el)
        el.help ? trues++ : falses++

      })

      // console.log(trues, falses)
      const result = {
        post: data[data.length - 1],
        ratio: trues / falses
      }
      console.log("data", data)
      console.log("data.post", data.post)
      return res.json(data)
    })


    .catch(err => console.log('Error in GETTING lastOne:', err))
})





module.exports = router;
