import './style.css'
import { getPeople } from './people'
import { renderList } from './peopleList'


export class Person {
  name: string
  age: number
  occupation: string
  private private_salary: number

  constructor(name: string, age: number, occupation: string, private_salary = 0)
  {
    this.name = name
    this.age = age
    this.occupation = occupation
    this.private_salary = private_salary
  }

  introduce(): string
  {
   return `Hello my name is ${this.name} and my age is ${this.age}, my occupation is ${this.occupation} and my salary is ${this.private_salary}!`
  }

  incrementAge() 
  {
    this.age += 1
  }

  setSalary(newSalary: number)
  {
    this.private_salary = newSalary
  }

  getSalary(): number
  {
    return this.private_salary
  }
}

async function retrievePeople(): Promise<void> {
  let people: Person[];
  let div = document.getElementById("person")
  people = await getPeople()
  console.log(people)
  
  renderList(div as HTMLDivElement, people)
}

retrievePeople()
