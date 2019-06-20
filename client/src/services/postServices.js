import axios from 'axios'

export default class services {

  constructor() {

    this.service = axios.create({
      baseURL: 'https://share-story.herokuapp.com/api/'
      // baseURL: 'http://localhost:5000/api/'
    })
  }

  postAnswer = posterino => {

    return this.service.post('newPost', posterino)
      .then(theChoice => theChoice.data)
      .catch(err => console.log("You couldn't make a choice!", err))
  }

  getAnswer = () => {

    return this.service.get('lastOne')
      .then(theChoice => theChoice.data)
      .catch(err => console.log("You couldn't make a choice!", err))
  }

}