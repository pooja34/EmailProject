import axios from 'axios'
import config from '../config'
function prepareTokenHeader() {
  const token = sessionStorage.getItem('token')

  if (!token || token.length === 0) {
    return {}
  }

  return {
    headers: {
      'x-token': token,
    },
  }
}
export function userLogin(email, password, callback) {
  const url = config.server + '/user/signin'
  axios.post(url, { email, password }).then((response) => {
    const result = response.data
    callback(result)
  })
}

export function userSignup( firstName,
  lastName,
  email,
  password,callback){
  axios
  .post(config.server + '/user/signup', {
    firstName,
    lastName,
    email,
    password
   
  })
  .then((response) => {
    // get the data returned by server
    const result = response.data

    // check if user's authentication is successfull
    callback(result)
  })

}

export function getProfile(callback) {
  const url = config.server +'/user'
   axios.get(url,prepareTokenHeader())
    .then((response) => {
      const result = response.data;
     
     console.log(result);
    callback(result)
  })
}

export function updateUserProfile(firstName,lastName,email,address,phoneNo,callback) {
  
  const url = config.server +'/user/updateprofile'
   axios.put(url,{firstName,lastName,email,address,phoneNo},prepareTokenHeader())
  .then((response) => {
    const result = response.data;
      
     console.log(result);
    callback(result)
  })
}
