import { Person } from "./main"
import data from "./people.json"

export function getPeople(): Promise<Person[]> 
{
    return new Promise((resolve ) => {
        let peopleArray: Person[] = new Array
        data.forEach(person => {
            peopleArray.push(new Person(person.name, person.age, person.occupation, person.salary))
        })
        resolve(peopleArray)
    })
}