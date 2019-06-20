const express = require('express');
const router = express.Router();
const Post = require('../models/post.model')

/* GET home page */


router.post('/newPost', (req, res) => {
  console.log(req.body)
  const { help, description } = req.body

  Post.create({ help, description })
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
      let ratio = trues / (trues + falses)
      // console.log(trues, falses)
      const result = {
        post: data[data.length - 2],
        ratio: ratio
      }
      console.log("data", data)
      console.log("data.post", data.post)
      return res.json(result)
    })
    .catch(err => console.log('Error in GETTING lastOne:', err))
})





module.exports = router;
