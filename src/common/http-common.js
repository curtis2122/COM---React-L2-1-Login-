import axios from 'axios'

export default axios.create({
  baseURL: 'https://COMBlog28032022.curtiswang1.repl.co/api/v1/',

//  Final-CW2Backend
  headers: {
    'Content-type': 'application/json'

    }
})
