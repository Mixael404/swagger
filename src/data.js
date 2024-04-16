export const data = {
    jsonplaceholder:{
        title: "jsonplaceholder",
        requests: [
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
                        disabled: false,
                        defaultValue: 1
                    },
                    {
                        name: 'something',
                        inputType: 'query',
                        description: "Something to test",
                        type: "changeQuery",
                        disabled: false,
                    },
                    {
                        name: 'content-type',
                        inputType: "header",
                        description: "Select type of content",
                        type: "changeHeader",
                        defaultValue: 'application/json',
                        disabled: true,
                    },
                    {
                        name: 'content-type2',
                        inputType: "header",
                        description: "Select type of content",
                        type: "changeHeader",
                        disabled: false,
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
                        disabled: false
                    },
                    {
                        name: 'body',
                        inputType: "body",
                        description: "Body of added post",
                        type: "changeBody",
                        disabled: false
                    },
                    {
                        name: 'userId',
                        inputType: "body",
                        description: "Id of user that added post",
                        type: "changeBody",
                        defaultValue: 3,
                        disabled: false
                    },
                    {
                        name: 'content-type',
                        inputType: "header",
                        description: "Select type of content",
                        type: "changeHeader",
                        defaultValue: 'application/json',
                        disabled: false,
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
                        disabled: false
                    },
                    {
                        name: 'title',
                        inputType: "body",
                        description: "Title of updated post",
                        type: "changeBody",
                        disabled: false
                    },
                    {
                        name: 'body',
                        inputType: "body",
                        description: "Body of updated post",
                        type: "changeBody",
                        disabled: false
                    },
                    {
                        name: 'userId',
                        inputType: "body",
                        description: "Id of user that updated post",
                        type: "changeBody",
                        disabled: false
                    },
                    {
                        name: 'content-type',
                        inputType: "header",
                        description: "Select type of content",
                        type: "changeHeader",
                        defaultValue: 'application/json',
                        disabled: true
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
    fortniteapi: {
        title: 'fortniteapi',
        requests: [
            {
                id: 12,
                base_url: 'https://fortniteapi.io/v2/shop',
                title: "Get daily products",
                method: 'GET',
                params: [
                    {
                        name: 'lang',
                        inputType: 'query',
                        description: "Select language of returned data",
                        type: "changeQuery",
                        defaultValue: "en",
                        disabled: false,
                        options: [
                            { value: 'en', label: 'English' },
                            { value: 'ru', label: 'Русский' },
                            { value: 'de', label: 'Deutch' }
                          ]
                    },
                    {
                        name: 'Authorization',
                        inputType: 'header',
                        description: "Auth key to API",
                        type: 'changeHeader',
                        defaultValue: '582965de-97ea6794-3b2e92e1-64e39fef',
                        disabled: true
                    }
                ]
            },
            {
                id: 13,
                base_url: 'https://fortniteapi.io/v2/items/get',
                title: "Get item details",
                method: 'GET',
                params: [
                    {
                        name: "id",
                        inputType: 'query',
                        description: 'Select id of necessary item',
                        type: 'changeQuery',
                        disabled: false,
                        options: [
                            {value: 'JBSID_BR_PavilionSm_01', label: 'LEGO® Kit'},
                            {value: 'CID_267_Athena_Commando_M_RobotRed', label: 'A.I.M'},
                            {value: 'JBSID_BR_StoreMed_01', label: "Swimmin' Shop"},
                            {value: 'JBSID_BR_HouseLg_01', label: "Beach House"},
                        ]
                    },
                    {
                        name: 'lang',
                        inputType: 'query',
                        description: "Select language of returned data",
                        type: "changeQuery",
                        defaultValue: "en",
                        disabled: false,
                        options: [
                            { value: 'en', label: 'English' },
                            { value: 'ru', label: 'Русский' },
                            { value: 'de', label: 'Deutch' }
                          ]
                    },
                    {
                        name: 'Authorization',
                        inputType: 'header',
                        description: "Auth key to API",
                        type: 'changeHeader',
                        defaultValue: '582965de-97ea6794-3b2e92e1-64e39fef',
                        disabled: true
                    }
                ]
            },
        ]
    }
}