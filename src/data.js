export const data = {
    jsonplaceholder:{
        title: "jsonplaceholder",
        requests: [
            {
                id: 1,
                title: "Get posts",
                method: "GET",
                base_url: 'https://jsonplaceholder.typicode.com/posts',
                tooltipContent: `Returns list of all posts or one post with selected id`,
                params:[
                    {
                        name: 'id',
                        paramGroup: 'query',
                        description: "Select one post by id",
                        type: "changeQuery",
                        disabled: false,
                        defaultValue: 1,
                        inputType: 'number',
                        /*
                        Сначала собираю все эндпоинты, собираю их в блок с радио кнопкой. Если не выбран - показываю этот массив. Если выбран скрываю предыдущий массив. Вместо него блок этого эндпоинта. Если нужно задать значение - инпут ввода, если не надо - без него. И также массив эндпоинтов уже выбранного эндпоинта. 
                        Прим: Эндпоинт будет активироваться радио кнопкой. Если активен хотя бы один радио инпут - все остальные параметры родителького запроса обнуляются и вместо них должны появиться параметры текущего эндпоинта.
                        name: id,
                        paramGroup: endpoint,
                        description: Select one post by id,
                        type: changeUrl -- нужно реализовать по новому,
                        value: null -- потому что нужно ввести,
                        defaultValue -- по идее, работать должно также, как и сейчас,
                        params: [
                            ...
                        ]
                        */
                    },
                    {
                        name: 'something',
                        paramGroup: 'query',
                        description: "Something to test",
                        type: "changeQuery",
                        disabled: false,
                        inputType: 'string',
                        required: true
                    },
                    {
                        name: 'content-type',
                        paramGroup: "header",
                        description: "Select type of content",
                        type: "changeHeader",
                        defaultValue: 'application/json',
                        disabled: true,
                        inputType: 'string',
                    },
                    {
                        name: 'content-type2',
                        paramGroup: "header",
                        description: "Select type of content",
                        type: "changeHeader",
                        disabled: false,
                        inputType: 'string',
                    },
                ]
            },
            {
                id: 2,
                title: "Create post",
                method: "POST",
                base_url: 'https://jsonplaceholder.typicode.com/posts',
                tooltipContent: 'Important: resource will not be really updated on the server but it will be faked as if.',
                params:[
                    {
                        name: 'title',
                        paramGroup: "body",
                        description: "Title of added post",
                        type: "changeBody",
                        disabled: false,
                        inputType: 'string',
                    },
                    {
                        name: 'body',
                        paramGroup: "body",
                        description: "Body of added post",
                        type: "changeBody",
                        disabled: false,
                        inputType: 'string',
                    },
                    {
                        name: 'userId',
                        paramGroup: "body",
                        description: "Id of user that added post",
                        type: "changeBody",
                        defaultValue: 3,
                        disabled: false,
                        inputType: 'string',
                    },
                    {
                        name: 'content-type',
                        paramGroup: "header",
                        description: "Select type of content",
                        type: "changeHeader",
                        defaultValue: 'application/json',
                        disabled: false,
                        inputType: 'string',
                    },
                ]
            },
            {
                id: 8,
                title: "Update post",
                method: "PUT",
                base_url: 'https://jsonplaceholder.typicode.com/posts',
                tooltipContent: 'Important: resource will not be really updated on the server but it will be faked as if.',
                params:[
                    {
                        name: 'id',
                        paramGroup: "body",
                        description: "Id of updated post",
                        type: "changeUrl",
                        disabled: false
                    },
                    {
                        name: 'title',
                        paramGroup: "body",
                        description: "Title of updated post",
                        type: "changeBody",
                        disabled: false
                    },
                    {
                        name: 'body',
                        paramGroup: "body",
                        description: "Body of updated post",
                        type: "changeBody",
                        disabled: false
                    },
                    {
                        name: 'userId',
                        paramGroup: "body",
                        description: "Id of user that updated post",
                        type: "changeBody",
                        disabled: false
                    },
                    {
                        name: 'content-type',
                        paramGroup: "header",
                        description: "Select type of content",
                        type: "changeHeader",
                        defaultValue: 'application/json',
                        disabled: true
                    },
                ]
            },
            {
                id: 4,
                title: "Delete post",
                method: "DELETE",
                base_url: 'https://jsonplaceholder.typicode.com/posts',
                tooltipContent: 'Important: resource will not be really updated on the server but it will be faked as if.',
                params:[
                    {
                        name: 'id',
                        paramGroup: "query",
                        description: "Id of deleted post",
                        type: "changeUrl",
                        disabled: false
                    },
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
                tooltipContent: 'List all items currently in the shop',
                params: [
                    {
                        name: 'lang',
                        paramGroup: 'query',
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
                        paramGroup: 'header',
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
                tooltipContent: 'Get all available details about an item.',
                params: [
                    {
                        name: "id",
                        paramGroup: 'query',
                        description: 'Select id of necessary item',
                        type: 'changeQuery',
                        disabled: false,
                        required: true,
                        options: [
                            {value: '', label: ''},
                            {value: 'JBSID_BR_PavilionSm_01', label: 'LEGO® Kit'},
                            {value: 'CID_267_Athena_Commando_M_RobotRed', label: 'A.I.M'},
                            {value: 'JBSID_BR_StoreMed_01', label: "Swimmin' Shop"},
                            {value: 'JBSID_BR_HouseLg_01', label: "Beach House"},
                        ]
                    },
                    {
                        name: 'lang',
                        paramGroup: 'query',
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
                        paramGroup: 'header',
                        description: "Auth key to API",
                        type: 'changeHeader',
                        defaultValue: '582965de-97ea6794-3b2e92e1-64e39fef',
                        disabled: true
                    }
                ]
            },
        ]
    },
}