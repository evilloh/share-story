import axios from 'axios'

export default class services {

  constructor() {

    this.service = axios.create({
      baseURL: 'https://share-story.herokuapp.com/api/'
    })
  }

  postAnswer = posterino => {

    return this.service.post('newPost', posterino, { withCredentials: true })
      .then(theChoice => theChoice.data)
      .catch(err => console.log("You couldn't make a choice!", err))
  }

}