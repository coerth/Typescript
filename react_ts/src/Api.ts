import { Person } from "./Types";

export async function postApi(person:Person) {
  
  
  let options: RequestInit = {
    method: "POST",
    body: JSON.stringify(person),
    headers: {
      Accept: "application/json, text/plain",
      "Content-Type": "application/json;charset=UTF-8"
    }
  };
  
  const res = await  fetch("http://localhost:3008/person", options)
  const data = await res.json()
  console.log(data)
}

export async function deleteApi(person:Person) {
  
  
  let options: RequestInit = {
    method: "DELETE",
    body: JSON.stringify(person),
    headers: {
      Accept: "application/json, text/plain",
      "Content-Type": "application/json;charset=UTF-8"
    }
  };
  
  const data = await  fetch("http://localhost:3008/person/"+person.id, options)
  console.log(data)
}

export async function putApi(person:Person) {
  
  let options: RequestInit = {
    method: "PUT",
    body: JSON.stringify(person),
    headers: {
      Accept: "application/json, text/plain",
      "Content-Type": "application/json;charset=UTF-8"
    }
  };
  
  const data = await  fetch("http://localhost:3008/person/"+ person.id, options)
  console.log(data)
}




