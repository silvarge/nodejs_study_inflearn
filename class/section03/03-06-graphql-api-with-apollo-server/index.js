import { ApolloServer } from '@apollo/server';  // express와 비슷한 개념
import { startStandaloneServer } from '@apollo/server/standalone' // listen() 과 비슷

const typeDefs = `#graphql
    type Query{
        qqq: String
    }
`

const resolvers = {
    Query:{
        qqq: ()=>{
            return "Hello work.."
        }
    }
}

const server = new ApolloServer({
    typeDefs: typeDefs,          // swagger 부분
    resolvers: resolvers          // api 부분
})

startStandaloneServer(server)
