import axios from 'axios'

export default axios.create({
  baseURL: 'https://COMBlog28032022.curtiswang1.repl.co/api/v1/',
 // https://BScCOM-Blog-API-example.wongazta.repl.co/api/v1/'
  headers: {
    'Content-type': 'application/json'
//    'Content-type': 'applications/json'
    //'Authorization':  
    }
})
