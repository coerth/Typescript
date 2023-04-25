/* import PersonModel from '../../models/personModel';
import paginateResults from "../../utility/Pagination"



const peopleQuery = async (_:never, {pageSize = 20, after }: {pageSize: number, after: string}) => {
    const allPeople = await PersonModel.find()

    allPeople.reverse()
    const people = paginateResults({
        after,
        pageSize,
        results: allPeople
    })
    return {
        people,
        cursor: people.length ? people[people.length -1].cursor : null,
        hasMore: people.length ? people[people.length -1].cursor !== allPeople[allPeople.length -1].createdAt : false
    }
}

export default peopleQuery 



GRAPHQL SCHEMA:


  type People {
    cursor: String!
    hasMore: Boolean!
    [Person]!
  }


*/