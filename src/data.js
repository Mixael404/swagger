export const data = {
    jsonplaceholder:{
        title: "jsonplaceholder",
        requiests: [
            {
                id: 1,
                title: "Get posts",
                method: "GET",
                base_url: 'https://jsonplaceholder.typicode.com/posts',
                params:[
                    {
                        name: 'id',
                        inputType: 'query',
                        description: "Select one post by id",
                        type: "changeQuery",
                    },
                    {
                        name: 'content-type',
                        inputType: "header",
                        description: "Select type of content",
                        type: "changeHeader",
                        defaultHeader: 'application/json'
                    },
                    {
                        name: 'content-type2',
                        inputType: "header",
                        description: "Select type of content",
                        type: "changeHeader",
                    },
                ]
            },
            {
                id: 2,
                title: "Create posts",
                method: "POST",
                params:[

                ]
            },
            {
                id: 3,
                title: "Get comments",
                method: "GET",
                params:[
                    
                ]
            },
            {
                id: 4,
                title: "Delete images",
                method: "DELETE",
                params:[
                    
                ]
            },
        ]
    },
    fortnite: {
        title: "fortnite",
        requiests: [
            {
                id: 5,
                title: "games",
                method: "GET",
                params:[
                    
                ]
            },
            {
                id: 6,
                title: "movies",
                method: "GET",
                params:[
                    
                ]
            },
            {
                id: 7,
                title: "toys",
                method: "GET",
                params:[
                    
                ]
            }
        ]
    }
}