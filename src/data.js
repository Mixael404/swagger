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
                        defaultValue: 1,
                        editable: true
                    },
                    {
                        name: 'something',
                        inputType: 'query',
                        description: "Something to test",
                        type: "changeQuery",
                        editable: true
                    },
                    {
                        name: 'content-type',
                        inputType: "header",
                        description: "Select type of content",
                        type: "changeHeader",
                        defaultValue: 'application/json',
                        editable: false
                    },
                    {
                        name: 'content-type2',
                        inputType: "header",
                        description: "Select type of content",
                        type: "changeHeader",
                        editable: true
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
                        type: "changeBody",
                        editable: true
                    },
                    {
                        name: 'body',
                        inputType: "body",
                        description: "Body of added post",
                        type: "changeBody",
                        editable: true
                    },
                    {
                        name: 'userId',
                        inputType: "body",
                        description: "Id of user that added post",
                        type: "changeBody",
                        defaultValue: 3,
                        editable: true
                    },
                    {
                        name: 'content-type',
                        inputType: "header",
                        description: "Select type of content",
                        type: "changeHeader",
                        defaultValue: 'application/json',
                        editable: true
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
                        type: "changeUrl",
                        editable: true
                    },
                    {
                        name: 'title',
                        inputType: "body",
                        description: "Title of updated post",
                        type: "changeBody",
                        editable: true
                    },
                    {
                        name: 'body',
                        inputType: "body",
                        description: "Body of updated post",
                        type: "changeBody",
                        editable: true
                    },
                    {
                        name: 'userId',
                        inputType: "body",
                        description: "Id of user that updated post",
                        type: "changeBody",
                        editable: true
                    },
                    {
                        name: 'content-type',
                        inputType: "header",
                        description: "Select type of content",
                        type: "changeHeader",
                        defaultHeader: 'application/json',
                        editable: false
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
                        editable: true
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