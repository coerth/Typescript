
import { Person } from "./main";

export function renderList(container: HTMLDivElement, people: Person[]): void {

    people.forEach(person => {
        let div = document.createElement("div")
        div.className="person"

       let h2 = document.createElement("h2")
       h2.className ="person_name"
       h2.innerText = person.name

       let p1 = document.createElement("p")
       p1.className = "person_occupation"
       p1.innerText = person.occupation

       let p2 = document.createElement("p")
       p2.className = "person_age"
       p2.innerText = person.age.toLocaleString()

       let p3 = document.createElement("p")
       p3.className = "person_salary"
       p3.innerText = `${person.getSalary()}`

       div.appendChild(h2)
       div.appendChild(p1)
       div.appendChild(p2)
       div.appendChild(p3)

       container.appendChild(div)

    })
}