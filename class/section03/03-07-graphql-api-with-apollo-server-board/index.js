import { ApolloServer } from '@apollo/server';  // express와 비슷한 개념
import { startStandaloneServer } from '@apollo/server/standalone' // listen() 과 비슷

const typeDefs = `#graphql

    #  type이 아님! input으로 해야 함!
    input CreateBoardInput {
        writer: String
        title: String
        contents: String
    }

    type MyResult {
        number: Int
        writer: String
        title: String
        content: String
    }

    type Query {
        # fetchBoards: MyResult    # 객체 1개를 의미
        fetchBoards: [MyResult]  # 배열 안에 객체 한 개 이상을 의미
    }

    type Mutation {
        # createBoard(writer: String, title: String, contents: String): String # 그룹으로 묶기 (아래)
        createBoard(createBoardInput: CreateBoardInput!): String
    }
`

const resolvers = {
    Query:{
        fetchBoards: (parent, args, context, info)=>{
            // args -> 실제 데이터가 담겨옴 (브라우처 -> 백엔드 요청)
            // context -> req, res
            // info -> graphql의 정보
            // parent -> (백엔드 -> 백엔드 요청)
            
            const result = [
                {number: 1, writer: "철수", title: "제목", content: "내용"},
                {number: 2, writer: "철수2", title: "제목2", content: "내용2"},
                {number: 3, writer: "철수3", title: "제목3", content: "내용3"}
            ]        
            
            return result
        }
    },
    Mutation: {
        createBoard: (_, args)=>{
            // 사용하지 않으면 _(언더바)

            // fetchBoards("01012345678")

            // 1. 브라우저에서 보내준 데이터 확인하기
            console.log(args.createBoardInput.writer)
            console.log(args.createBoardInput.title)
            console.log(args.createBoardInput.contents)

            // 2. DB에 접속 후, 데이터를 저장 => 데이터를 저장했다고 가정

            // 3. DB에 저장한 결과를 브라우저에 응답(res)으로 줌

            return "게시물 등록에 성공하였습니다."
        }
    }
}

const server = new ApolloServer({
    // key와 value가 같을 때 생략 가능 (shorthane-property)
    typeDefs,          // swagger 부분
    resolvers,          // api 부분
    cors: true,     // 모든 사이트 허용하고 싶을 때
    // cors: {origin: ["https://naver.com", "https://daum.net"]}    // 특정 사이트만 지정하고 싶을 때
})

startStandaloneServer(server)   //4000
