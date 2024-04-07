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
                title: "Create post",
                method: "POST",
                base_url: 'https://jsonplaceholder.typicode.com/posts',
                params:[
                    {
                        name: 'title',
                        inputType: "body",
                        description: "Title of added post",
                        type: "changeBody"
                    },
                    {
                        name: 'body',
                        inputType: "body",
                        description: "Body of added post",
                        type: "changeBody"
                    },
                    {
                        name: 'userId',
                        inputType: "body",
                        description: "Id of user that added post",
                        type: "changeBody"
                    },
                    {
                        name: 'content-type',
                        inputType: "header",
                        description: "Select type of content",
                        type: "changeHeader",
                        defaultHeader: 'application/json'
                    },
                ]
            },
            {
                id: 8,
                title: "Update post",
                method: "PUT",
                base_url: 'https://jsonplaceholder.typicode.com/posts',
                params:[
                    {
                        name: 'id',
                        inputType: "body",
                        description: "Id of updated post",
                        type: "changeUrl"
                    },
                    {
                        name: 'title',
                        inputType: "body",
                        description: "Title of updated post",
                        type: "changeBody"
                    },
                    {
                        name: 'body',
                        inputType: "body",
                        description: "Body of updated post",
                        type: "changeBody"
                    },
                    {
                        name: 'userId',
                        inputType: "body",
                        description: "Id of user that updated post",
                        type: "changeBody"
                    },
                    {
                        name: 'content-type',
                        inputType: "header",
                        description: "Select type of content",
                        type: "changeHeader",
                        defaultHeader: 'application/json'
                    },
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
    cheese: {
        title: "cheese",
        requiests: [
            {
                id: 9,
                base_url: 'https://cheese-api.onrender.com/cheeses',
                title: "Get all cheeses",
                method: "GET",
                params:[
                    
                ]
            },
            {
                id: 10,
                base_url: 'https://cheese-api.onrender.com/cheese',
                title: "Get one cheese by name",
                method: "GET",
                params:[
                    {
                        name: 'name',
                        inputType: 'url',
                        description: "Select one cheese by name",
                        type: "changeUrl",
                    },
                ]
            },
            {
                id: 11,
                base_url: 'https://cheese-api.onrender.com/random',
                title: "Get one random cheese",
                method: "GET",
                params:[

                ]
            },
        ]
    }
}