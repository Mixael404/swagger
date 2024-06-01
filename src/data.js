export const data = {
  jsonplaceholder: {
    title: "jsonplaceholder",
    requests: [
      {
        id: 1,
        title: "Get posts",
        method: "GET",
        base_url: "https://jsonplaceholder.typicode.com/posts",
        tooltipContent: `Returns list of all posts or one post with selected id`,
        params: [
          {
            name: "id",
            paramGroup: "query",
            description: "Select one post by id",
            type: "changeQuery",
            disabled: false,
            defaultValue: 1,
            inputType: "number",
          },
          {
            name: "something",
            paramGroup: "query",
            description: "Something to test",
            type: "changeQuery",
            disabled: false,
            inputType: "string",
            required: true,
          },
          {
            name: "content-type",
            paramGroup: "header",
            description: "Select type of content",
            type: "changeHeader",
            defaultValue: "application/json",
            disabled: true,
            inputType: "string",
            required: false,
          },
          {
            name: "some-type2",
            paramGroup: "header",
            description: "Select type of content",
            type: "changeHeader",
            disabled: false,
            inputType: "string",
            required: false,
          },
        ],
      },
      {
        id: 2,
        title: "Create post",
        method: "POST",
        base_url: "https://jsonplaceholder.typicode.com/posts",
        tooltipContent:
          "Important: resource will not be really updated on the server but it will be faked as if.",
        params: [
          {
            name: "title",
            paramGroup: "body",
            description: "Title of added post",
            type: "changeBody",
            disabled: false,
            inputType: "string",
            required: true,
          },
          {
            name: "body",
            paramGroup: "body",
            description: "Body of added post",
            type: "changeBody",
            disabled: false,
            inputType: "string",
            required: true,
          },
          {
            name: "userId",
            paramGroup: "body",
            description: "Id of user that added post",
            type: "changeBody",
            defaultValue: 3,
            disabled: false,
            inputType: "string",
          },
          {
            name: "content-type",
            paramGroup: "header",
            description: "Select type of content",
            type: "changeHeader",
            defaultValue: "application/json",
            disabled: false,
            inputType: "string",
          },
        ],
      },
      {
        id: 8,
        title: "Update post",
        method: "PUT",
        base_url: "https://jsonplaceholder.typicode.com/posts",
        tooltipContent:
          "Important: resource will not be really updated on the server but it will be faked as if.",
        params: [
          {
            name: "id",
            paramGroup: "body",
            description: "Id of updated post",
            type: "changeUrl",
            disabled: false,
          },
          {
            name: "title",
            paramGroup: "body",
            description: "Title of updated post",
            type: "changeBody",
            disabled: false,
          },
          {
            name: "body",
            paramGroup: "body",
            description: "Body of updated post",
            type: "changeBody",
            disabled: false,
          },
          {
            name: "userId",
            paramGroup: "body",
            description: "Id of user that updated post",
            type: "changeBody",
            disabled: false,
          },
          {
            name: "content-type",
            paramGroup: "header",
            description: "Select type of content",
            type: "changeHeader",
            defaultValue: "application/json",
            disabled: true,
          },
        ],
      },
      {
        id: 4,
        title: "Delete post",
        method: "DELETE",
        base_url: "https://jsonplaceholder.typicode.com/posts",
        tooltipContent:
          "Important: resource will not be really updated on the server but it will be faked as if.",
        params: [
          {
            name: "id",
            paramGroup: "query",
            description: "Id of deleted post",
            type: "changeUrl",
            disabled: false,
            required: true,
          },
          {
            name: "content-type",
            paramGroup: "header",
            description: "Id of deleted post",
            type: "changeHeader",
            disabled: false,
            inputType: "string",
            required: false,
          }
        ],
      },
    ],
  },
  fortniteapi: {
    title: "fortniteapi",
    requests: [
      {
        id: 12,
        base_url: "https://fortniteapi.io/v2/shop",
        title: "Get daily products",
        method: "GET",
        tooltipContent: "List all items currently in the shop",
        params: [
          {
            name: "lang",
            paramGroup: "query",
            description: "Select language of returned data",
            type: "changeQuery",
            defaultValue: "en",
            disabled: false,
            options: [
              { value: "en", label: "English" },
              { value: "ru", label: "Русский" },
              { value: "de", label: "Deutch" },
            ],
          },
          {
            name: "Authorization",
            paramGroup: "header",
            description: "Auth key to API",
            type: "changeHeader",
            defaultValue: "582965de-97ea6794-3b2e92e1-64e39fef",
            disabled: true,
          },
        ],
      },
      {
        id: 13,
        base_url: "https://fortniteapi.io/v2/items/get",
        title: "Get item details",
        method: "GET",
        tooltipContent: "Get all available details about an item.",
        params: [
          {
            name: "id",
            paramGroup: "query",
            description: "Select id of necessary item",
            type: "changeQuery",
            disabled: false,
            required: true,
            options: [
              { value: "", label: "" },
              { value: "JBSID_BR_PavilionSm_01", label: "LEGO® Kit" },
              { value: "CID_267_Athena_Commando_M_RobotRed", label: "A.I.M" },
              { value: "JBSID_BR_StoreMed_01", label: "Swimmin' Shop" },
              { value: "JBSID_BR_HouseLg_01", label: "Beach House" },
            ],
          },
          {
            name: "lang",
            paramGroup: "query",
            description: "Select language of returned data",
            type: "changeQuery",
            defaultValue: "en",
            disabled: false,
            options: [
              { value: "en", label: "English" },
              { value: "ru", label: "Русский" },
              { value: "de", label: "Deutch" },
            ],
          },
          {
            name: "Authorization",
            paramGroup: "header",
            description: "Auth key to API",
            type: "changeHeader",
            defaultValue: "582965de-97ea6794-3b2e92e1-64e39fef",
            disabled: true,
          },
        ],
      },
    ],
  },
  cat_api: {
    title: 'cat_api',
    requests: [
      {
        id: 15,
        base_url: 'https://api.thecatapi.com/v1/images/search',
        title: "Get image about cats",
        method: 'GET',
        tooltipContent: "Get link on photo of cats. Without query params you will receive information about one random cat",
        params: [
          {
            name: 'limit',
            paramGroup: "query",
            description: "Number of images to return",
            type: "changeQuery",
            disabled: false,
            inputType: "number",
            minValue: 1,
            maxValue: 100,
          },
          {
            name: 'page',
            paramGroup: "query",
            description: "The page number to use when Paginating through the images",
            type: "changeQuery",
            disabled: false,
            inputType: "number",
            minValue: 0,
          },
          {
            name: "order",
            paramGroup: "query",
            description: "The Order to return the images in by their upload date.",
            type: "changeQuery",
            defaultValue: "",
            disabled: false,
            options: [
              { value: "ASC", label: "ASC" },
              { value: "DESC", label: "DESC" },
              { value: "RAND", label: "RAND" },
            ],
            inputType: "select"
          },
          {
            name: "breed_ids",
            paramGroup: "query",
            description: "Ids of breeds through coma",
            type: "changeQuery",
            defaultValue: "",
            disabled: false,
            inputType: "string"
          },
          {
            name: "category_ids",
            paramGroup: "query",
            description: "Ids of categories through coma",
            type: "changeQuery",
            defaultValue: "",
            disabled: false,
            inputType: "sequence of numbers",
            minValue: 1,
          },

          {
            name: "x-api-key",
            paramGroup: "header",
            description: "Auth key to API",
            type: "changeHeader",
            defaultValue: "live_RcJxzXotjLxyxCOVNYTpkVIs3CGxPL6wmv2KmIo8M9Qmc3pDANIAnW3jJKLsgIkG",
            disabled: true,
          },
        ]
      },
      {
        id: 16,
        base_url: 'https://api.thecatapi.com/v1/votes',
        title: "Add your vote to any image",
        method: 'POST',
        tooltipContent: "You can add vote-up or vote-down for any image by id",
        params: [
          {
            name: "image_id",
            paramGroup: 'body',
            description: "Id of image (quotes required)",
            type: "changeBody",
            required: true,
            disabled: false,
            inputType: "string",
          },
          {
            name: "sub_id",
            paramGroup: 'body',
            description: "Optional unique id of your user (quotes required)",
            type: "changeBody",
            required: false,
            disabled: false,
            inputType: "string",
          },
          {
            name: "value",
            paramGroup: 'body',
            description: "Type of your reaction",
            type: "changeBody",
            required: true,
            disabled: false,
            options: [
              { value: "1", label: "Like" },
              { value: "-1", label: "Dislike" },
            ]
          },
          {
            name: "x-api-key",
            paramGroup: "header",
            description: "Auth key to API",
            type: "changeHeader",
            defaultValue: "live_RcJxzXotjLxyxCOVNYTpkVIs3CGxPL6wmv2KmIo8M9Qmc3pDANIAnW3jJKLsgIkG",
            disabled: true,
          },
        ]
      }
    ]
  }
};















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
