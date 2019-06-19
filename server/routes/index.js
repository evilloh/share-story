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

        el.help ? trues++ : falses++

      })

      console.log(trues, falses)
      const result = {
        post: data[data.length - 1],
        ratio: trues / falses
      }
      return res.json(result)
    })
    .catch(err => console.log('Error:', err))
})





module.exports = router;
