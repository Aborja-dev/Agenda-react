import axios from 'axios'

const url = 'http://localhost:3001'

const getList = ()=>{
    const request = axios.get(`${url}/persons`)
    return request.then(res => res.data)
}

const addPerson = (body)=>{
  const request = axios.post(`${url}/persons`, body)
  return request.then( res => res.data)
}

const deletePerson = (id)=>{
  const deleteUrl = `http://localhost:3001/persons/${id}`
  const request = axios.delete( deleteUrl )
}

const updatePerson = (body)=>{
console.log("🚀 ~ file: phonebook.js ~ line 22 ~ updatePerson ~ body", body)
  const updateURL = `http://localhost:3001/persons/${body.id}`
  console.log("🚀 ~ file: phonebook.js ~ line 24 ~ updatePerson ~ updateURL", updateURL)
  const request = axios.put(updateURL, body)
  return request.then(res => res.data)
}

export default { getList, addPerson, deletePerson, updatePerson }