export const data = {
    jsonplaceholder:{
        title: "jsonplaceholder",
        requiests: [
            {
                id: 1,
                title: "Get users",
                method: "GET",
                base_url: 'https://jsonplaceholder.typicode.com/users',
                queries:[
                    {
                        name: 'id',
                        inputType: 'string',
                        description: "Select one user by id",
                        type: "changeUrl",
                    }
                ]
            },
            {
                id: 2,
                title: "Create posts",
                method: "POST"
            },
            {
                id: 3,
                title: "Get comments",
                method: "GET"
            },
            {
                id: 4,
                title: "Delete images",
                method: "DELETE"
            },
        ]
    },
    fortnite: {
        title: "fortnite",
        requiests: [
            {
                id: 5,
                title: "games",
                method: "GET"
            },
            {
                id: 6,
                title: "movies",
                method: "GET"
            },
            {
                id: 7,
                title: "toys",
                method: "GET"
            }
        ]
    }
}