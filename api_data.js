define({ "api": [
  {
    "type": "get",
    "url": "/api/admin/delivery_options/create",
    "title": "Create new delivery options",
    "name": "Create_Delivery_Options",
    "group": "Admin_Delivery_Options",
    "permission": [
      {
        "name": "Admin",
        "title": "Admin access",
        "description": "<p>Access only for users with admin rights</p>"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>Name of new Delivery Options.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n  \"title\": 'new name'\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "201": [
          {
            "group": "201",
            "type": "Object[]",
            "optional": false,
            "field": "object.",
            "description": ""
          },
          {
            "group": "201",
            "type": "Number",
            "optional": false,
            "field": "object.id",
            "description": "<p>Delivery Options id.</p>"
          },
          {
            "group": "201",
            "type": "String",
            "optional": false,
            "field": "object.title",
            "description": "<p>Delivery Options title.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 201 Created\n{\n     \"id\":1,\n     \"title\":\"new title\",\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "400": [
          {
            "group": "400",
            "optional": false,
            "field": "Title",
            "description": "<p>Title validation iv failed.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"title\":\n         [\n             \"The title field is required.\",\n         ]\n}",
          "type": "json"
        }
      ]
    },
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "X-CSRF-TOKEN",
            "description": "<p>X-CSRF-TOKEN.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"X-CSRF-TOKEN\": \"Gnknh68NbfXCay7GZUIouJQtEO67BPgQ9QckOXCD\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./app/Http/Controllers/Admin/DeliveryOptionsController.php",
    "groupTitle": "Admin_Delivery_Options"
  },
  {
    "type": "delete",
    "url": "/api/admin/delivery_options/:id",
    "title": "Delete delivery options from id",
    "name": "Delete_Delivery_Optionss",
    "group": "Admin_Delivery_Options",
    "permission": [
      {
        "name": "Admin",
        "title": "Admin access",
        "description": "<p>Access only for users with admin rights</p>"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": ":id",
            "description": "<p>Delivery Options unique ID.</p>"
          }
        ]
      }
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not found",
          "type": "json"
        }
      ]
    },
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "X-CSRF-TOKEN",
            "description": "<p>X-CSRF-TOKEN.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"X-CSRF-TOKEN\": \"Gnknh68NbfXCay7GZUIouJQtEO67BPgQ9QckOXCD\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "205": [
          {
            "group": "205",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>Status of deleting. 1 - is delete.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "205 Reset Content:",
          "content": "{\n     \"status\":1\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./app/Http/Controllers/Admin/DeliveryOptionsController.php",
    "groupTitle": "Admin_Delivery_Options"
  },
  {
    "type": "get",
    "url": "/api/admin/delivery_options/:id",
    "title": "Get delivery options from id",
    "name": "Get_Delivery_Options",
    "group": "Admin_Delivery_Options",
    "permission": [
      {
        "name": "Admin",
        "title": "Admin access",
        "description": "<p>Access only for users with admin rights</p>"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": ":id",
            "description": "<p>Delivery Options unique ID.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Delivery Options id.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>Delivery Options title.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n     \"id\":1,\n     \"title\":\"Name\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "404": [
          {
            "group": "404",
            "optional": false,
            "field": "Not",
            "description": "<p>found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not found",
          "type": "json"
        }
      ]
    },
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "X-CSRF-TOKEN",
            "description": "<p>X-CSRF-TOKEN.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"X-CSRF-TOKEN\": \"Gnknh68NbfXCay7GZUIouJQtEO67BPgQ9QckOXCD\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./app/Http/Controllers/Admin/DeliveryOptionsController.php",
    "groupTitle": "Admin_Delivery_Options"
  },
  {
    "type": "get",
    "url": "/api/admin/delivery_options",
    "title": "Get all delivery options",
    "name": "Get_Delivery_Optionss",
    "group": "Admin_Delivery_Options",
    "permission": [
      {
        "name": "Admin",
        "title": "Admin access",
        "description": "<p>Access only for users with admin rights</p>"
      }
    ],
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "array[]",
            "optional": false,
            "field": "array.",
            "description": ""
          },
          {
            "group": "200",
            "type": "Object[]",
            "optional": false,
            "field": "array.object",
            "description": ""
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "array.object.id",
            "description": "<p>Delivery Options id.</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "array.object.title",
            "description": "<p>Delivery Options title.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n[\n     {\n         \"id\":1,\n         \"title\":\"Money\"\n     },\n     {\n         \"id\":2,\n         \"title\":\"Volunteers\"\n     }\n     ....\n ]",
          "type": "json"
        }
      ]
    },
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "X-CSRF-TOKEN",
            "description": "<p>X-CSRF-TOKEN.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"X-CSRF-TOKEN\": \"Gnknh68NbfXCay7GZUIouJQtEO67BPgQ9QckOXCD\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./app/Http/Controllers/Admin/DeliveryOptionsController.php",
    "groupTitle": "Admin_Delivery_Options"
  },
  {
    "type": "put/patch",
    "url": "/api/admin/delivery_options/:id",
    "title": "Update delivery options from id",
    "name": "Update_Delivery_Optionss",
    "group": "Admin_Delivery_Options",
    "permission": [
      {
        "name": "Admin",
        "title": "Admin access",
        "description": "<p>Access only for users with admin rights</p>"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": ":id",
            "description": "<p>Delivery Options unique ID.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>Name of new Delivery Options.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n  \"title\": 'new name'\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "201": [
          {
            "group": "201",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Delivery Options id.</p>"
          },
          {
            "group": "201",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>Delivery Options title.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n     \"id\":1,\n     \"title\":\"Name\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "400": [
          {
            "group": "400",
            "optional": false,
            "field": "Title",
            "description": "<p>Title validation iv failed.</p>"
          }
        ],
        "404": [
          {
            "group": "404",
            "optional": false,
            "field": "Title",
            "description": "<p>Delivery Options not found</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"title\":\n         [\n             \"The title field is required.\"\n         ]\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not found",
          "type": "json"
        }
      ]
    },
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "X-CSRF-TOKEN",
            "description": "<p>X-CSRF-TOKEN.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"X-CSRF-TOKEN\": \"Gnknh68NbfXCay7GZUIouJQtEO67BPgQ9QckOXCD\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./app/Http/Controllers/Admin/DeliveryOptionsController.php",
    "groupTitle": "Admin_Delivery_Options"
  },
  {
    "type": "get",
    "url": "/api/admin/saerch/demand_type/create",
    "title": "Create new demand type",
    "name": "Create_Demand_Type",
    "group": "Admin_Demand_Type",
    "permission": [
      {
        "name": "Admin",
        "title": "Admin access",
        "description": "<p>Access only for users with admin rights</p>"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>Name of new Demand Type.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n  \"title\": 'new name'\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "201": [
          {
            "group": "201",
            "type": "Object[]",
            "optional": false,
            "field": "object.",
            "description": ""
          },
          {
            "group": "201",
            "type": "Number",
            "optional": false,
            "field": "object.id",
            "description": "<p>Demand Type id.</p>"
          },
          {
            "group": "201",
            "type": "String",
            "optional": false,
            "field": "object.title",
            "description": "<p>Demand Type title.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 201 Created\n{\n     \"id\":1,\n     \"title\":\"new title\",\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "400": [
          {
            "group": "400",
            "optional": false,
            "field": "Title",
            "description": "<p>Title validation iv failed.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"title\":\n         [\n             \"The title field is required.\",\n         ]\n}",
          "type": "json"
        }
      ]
    },
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "X-CSRF-TOKEN",
            "description": "<p>X-CSRF-TOKEN.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"X-CSRF-TOKEN\": \"Gnknh68NbfXCay7GZUIouJQtEO67BPgQ9QckOXCD\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./app/Http/Controllers/Admin/DemandTypeController.php",
    "groupTitle": "Admin_Demand_Type"
  },
  {
    "type": "delete",
    "url": "/api/admin/saerch/demand_type/:id",
    "title": "Delete demand type from id",
    "name": "Delete_Demand_Types",
    "group": "Admin_Demand_Type",
    "permission": [
      {
        "name": "Admin",
        "title": "Admin access",
        "description": "<p>Access only for users with admin rights</p>"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": ":id",
            "description": "<p>Demand Type unique ID.</p>"
          }
        ]
      }
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not found",
          "type": "json"
        }
      ]
    },
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "X-CSRF-TOKEN",
            "description": "<p>X-CSRF-TOKEN.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"X-CSRF-TOKEN\": \"Gnknh68NbfXCay7GZUIouJQtEO67BPgQ9QckOXCD\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "205": [
          {
            "group": "205",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>Status of deleting. 1 - is delete.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "205 Reset Content:",
          "content": "{\n     \"status\":1\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./app/Http/Controllers/Admin/DemandTypeController.php",
    "groupTitle": "Admin_Demand_Type"
  },
  {
    "type": "get",
    "url": "/api/admin/saerch/demand_type/:id",
    "title": "Get demand type from id",
    "name": "Get_Demand_Type",
    "group": "Admin_Demand_Type",
    "permission": [
      {
        "name": "Admin",
        "title": "Admin access",
        "description": "<p>Access only for users with admin rights</p>"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": ":id",
            "description": "<p>Demand Type unique ID.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Demand Type id.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>Demand Type title.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n     \"id\":1,\n     \"title\":\"Name\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "404": [
          {
            "group": "404",
            "optional": false,
            "field": "Not",
            "description": "<p>found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not found",
          "type": "json"
        }
      ]
    },
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "X-CSRF-TOKEN",
            "description": "<p>X-CSRF-TOKEN.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"X-CSRF-TOKEN\": \"Gnknh68NbfXCay7GZUIouJQtEO67BPgQ9QckOXCD\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./app/Http/Controllers/Admin/DemandTypeController.php",
    "groupTitle": "Admin_Demand_Type"
  },
  {
    "type": "get",
    "url": "/api/admin/saerch/demand_type",
    "title": "Get all demand types",
    "name": "Get_Demand_Types",
    "group": "Admin_Demand_Type",
    "permission": [
      {
        "name": "Admin",
        "title": "Admin access",
        "description": "<p>Access only for users with admin rights</p>"
      }
    ],
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "array[]",
            "optional": false,
            "field": "array.",
            "description": ""
          },
          {
            "group": "200",
            "type": "Object[]",
            "optional": false,
            "field": "array.object",
            "description": ""
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "array.object.id",
            "description": "<p>Demand Type id.</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "array.object.title",
            "description": "<p>Demand Type title.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n[\n     {\n         \"id\":1,\n         \"title\":\"Money\"\n     },\n     {\n         \"id\":2,\n         \"title\":\"Volunteers\"\n     }\n     ....\n ]",
          "type": "json"
        }
      ]
    },
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "X-CSRF-TOKEN",
            "description": "<p>X-CSRF-TOKEN.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"X-CSRF-TOKEN\": \"Gnknh68NbfXCay7GZUIouJQtEO67BPgQ9QckOXCD\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./app/Http/Controllers/Admin/DemandTypeController.php",
    "groupTitle": "Admin_Demand_Type"
  },
  {
    "type": "put/patch",
    "url": "/api/admin/saerch/demand_type/:id",
    "title": "Update demand type from id",
    "name": "Update_Demand_Types",
    "group": "Admin_Demand_Type",
    "permission": [
      {
        "name": "Admin",
        "title": "Admin access",
        "description": "<p>Access only for users with admin rights</p>"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": ":id",
            "description": "<p>Demand Type unique ID.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>Name of new Demand Type.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n  \"title\": 'new name'\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "201": [
          {
            "group": "201",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Demand Type id.</p>"
          },
          {
            "group": "201",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>Demand Type title.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n     \"id\":1,\n     \"title\":\"Name\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "400": [
          {
            "group": "400",
            "optional": false,
            "field": "Title",
            "description": "<p>Title validation iv failed.</p>"
          }
        ],
        "404": [
          {
            "group": "404",
            "optional": false,
            "field": "Title",
            "description": "<p>Demand Type not found</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"title\":\n         [\n             \"The title field is required.\"\n         ]\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not found",
          "type": "json"
        }
      ]
    },
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "X-CSRF-TOKEN",
            "description": "<p>X-CSRF-TOKEN.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"X-CSRF-TOKEN\": \"Gnknh68NbfXCay7GZUIouJQtEO67BPgQ9QckOXCD\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./app/Http/Controllers/Admin/DemandTypeController.php",
    "groupTitle": "Admin_Demand_Type"
  },
  {
    "type": "put",
    "url": "/api/admin/event/:event_id/approve",
    "title": "Approved Event",
    "name": "Approved_Event",
    "group": "Admin_Event",
    "permission": [
      {
        "name": "Admin",
        "title": "Admin access",
        "description": "<p>Access only for users with admin rights</p>"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": ":event_id",
            "description": "<p>Id of Event</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "percent_profit",
            "description": "<p>Percent profit of Event many</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n  \"percent_profit\": 10   // it is a 10%\n}",
          "type": "json"
        }
      ]
    },
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "X-CSRF-TOKEN",
            "description": "<p>X-CSRF-TOKEN.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"X-CSRF-TOKEN\": \"Gnknh68NbfXCay7GZUIouJQtEO67BPgQ9QckOXCD\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "201": [
          {
            "group": "201",
            "type": "Bool",
            "optional": false,
            "field": "status",
            "description": "<p>Status operation.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 201 OK\n [\n     'status'=>true\n ]",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "400": [
          {
            "group": "400",
            "optional": false,
            "field": "array",
            "description": "<p>Array validation errors</p>"
          },
          {
            "group": "400",
            "optional": false,
            "field": "array.parameter",
            "description": "<p>parameter (key) and value of validation error</p>"
          }
        ],
        "404": [
          {
            "group": "404",
            "optional": false,
            "field": "event",
            "description": "<p>Not found</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n     Event not found",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Bad Request\n{\n     \"city\":\n         [\n             \"The city field is required.\",\n             ......\n         ],\n     \"short_story\":\n         [\n             \"The short story field is required.\",\n             .....\n         ],\n     .....\n }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./app/Http/Controllers/Admin/AdminEventController.php",
    "groupTitle": "Admin_Event"
  },
  {
    "type": "post",
    "url": "/api/admin/event/all",
    "title": "Get All Event",
    "name": "Get_All_Event",
    "group": "Admin_Event",
    "permission": [
      {
        "name": "Admin",
        "title": "Admin access",
        "description": "<p>Access only for users with admin rights</p>"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "page",
            "description": "<p>Number of page. Default 1</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n     \"page\":2\n}",
          "type": "json"
        }
      ]
    },
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "X-CSRF-TOKEN",
            "description": "<p>X-CSRF-TOKEN.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"X-CSRF-TOKEN\": \"Gnknh68NbfXCay7GZUIouJQtEO67BPgQ9QckOXCD\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "current_page",
            "description": "<p>Number of the page.</p>"
          },
          {
            "group": "200",
            "type": "Array[]",
            "optional": false,
            "field": "data",
            "description": "<p>Page data of events.</p>"
          },
          {
            "group": "200",
            "type": "Array[]",
            "optional": false,
            "field": "data.array",
            "description": "<p>Data array of event.</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "data.array.event.id",
            "description": "<p>Event id</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "data.array.event.title",
            "description": "<p>Event title</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "data.array.event.story",
            "description": "<p>Event story</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "data.array.event.short_story",
            "description": "<p>Event short story</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "data.array.event.address",
            "description": "<p>Event address</p>"
          },
          {
            "group": "200",
            "type": "Bool",
            "optional": false,
            "field": "data.array.event.is_approved",
            "description": "<p>Event approved status(true - is approved)</p>"
          },
          {
            "group": "200",
            "type": "Bool",
            "optional": false,
            "field": "data.array.event.is_submit",
            "description": "<p>Event submit status(true - is submit)</p>"
          },
          {
            "group": "200",
            "type": "Array[]",
            "optional": false,
            "field": "data.array.event.user",
            "description": "<p>Event Author data</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "data.array.event.user.id",
            "description": "<p>Author user id</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "data.array.event.user.name",
            "description": "<p>Author name</p>"
          },
          {
            "group": "200",
            "type": "Array[]",
            "optional": false,
            "field": "data.array.event.images",
            "description": "<p>Array Event preview</p>"
          },
          {
            "group": "200",
            "type": "Array[]",
            "optional": false,
            "field": "data.array.event.images.array",
            "description": "<p>Array image data</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "data.array.event.images.array.id",
            "description": "<p>Event image id</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "data.array.event.images.array.image_id",
            "description": "<p>Event image file id</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "data.array.event.images.array.is_preview",
            "description": "<p>Preview status of image</p>"
          },
          {
            "group": "200",
            "type": "Array[]",
            "optional": false,
            "field": "data.array.event.images.array.image",
            "description": "<p>Array Event image file data</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "data.array.event.images.array.image.title",
            "description": "<p>Event image file title</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "data.array.event.images.array.image.url",
            "description": "<p>Event image file url</p>"
          },
          {
            "group": "200",
            "type": "Array[]",
            "optional": false,
            "field": "data.array.event.event_status",
            "description": "<p>Array Event status data</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "data.array.event.event_status.id",
            "description": "<p>Event status id</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "data.array.event.event_status.title",
            "description": "<p>Event status title</p>"
          },
          {
            "group": "200",
            "type": "Array[]",
            "optional": false,
            "field": "data.array.event.purpose",
            "description": "<p>Array Event purpose data</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "data.array.event.purpose.id",
            "description": "<p>Event purpose id</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "data.array.event.purpose.title",
            "description": "<p>Event purpose title</p>"
          },
          {
            "group": "200",
            "type": "Array[]",
            "optional": false,
            "field": "data.array.event.religion",
            "description": "<p>Array Event religion data</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "data.array.event.religion.id",
            "description": "<p>Event religion id</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "data.array.event.religion.title",
            "description": "<p>Event religion title</p>"
          },
          {
            "group": "200",
            "type": "Array[]",
            "optional": false,
            "field": "data.array.event.type_destination",
            "description": "<p>Array Event type destination data</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "data.array.event.type_destination.id",
            "description": "<p>Event type destination id</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "data.array.event.type_destination.title",
            "description": "<p>Event type destination title</p>"
          },
          {
            "group": "200",
            "type": "Array[]",
            "optional": false,
            "field": "data.array.event.country",
            "description": "<p>Array Event country data</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "data.array.event.country.id",
            "description": "<p>Event country id</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "data.array.event.country.name",
            "description": "<p>Event country name</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "data.array.event.country.sortname",
            "description": "<p>Event country sortname</p>"
          },
          {
            "group": "200",
            "type": "Array[]",
            "optional": false,
            "field": "data.array.event.state",
            "description": "<p>Array Event state data</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "data.array.event.state.id",
            "description": "<p>Event state id</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "data.array.event.state.name",
            "description": "<p>Event state name</p>"
          },
          {
            "group": "200",
            "type": "Array[]",
            "optional": false,
            "field": "data.array.event.city",
            "description": "<p>Array Event city data</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "data.array.event.city.id",
            "description": "<p>Event city id</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "data.array.event.city.name",
            "description": "<p>Event city name</p>"
          },
          {
            "group": "200",
            "type": "Array[]",
            "optional": false,
            "field": "data.array.event.demand",
            "description": "<p>Array Event demand data</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "data.array.event.demand.id",
            "description": "<p>Event demand data id</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "data.array.event.demand.demand_type_id",
            "description": "<p>Event demand data demand type id</p>"
          },
          {
            "group": "200",
            "type": "Array[]",
            "optional": false,
            "field": "data.array.event.demand.demand_type",
            "description": "<p>Array Event demand data demand type data</p>"
          },
          {
            "group": "200",
            "type": "Array[]",
            "optional": false,
            "field": "data.array.event.demand.demand_type.id",
            "description": "<p>Id of demand type</p>"
          },
          {
            "group": "200",
            "type": "Array[]",
            "optional": false,
            "field": "data.array.event.demand.demand_type.title",
            "description": "<p>Name of demand type</p>"
          },
          {
            "group": "200",
            "type": "Array[]",
            "optional": false,
            "field": "data.array.event.demand.money",
            "description": "<p>Array Event demand data demand type array money data</p>"
          },
          {
            "group": "200",
            "type": "Array[]",
            "optional": false,
            "field": "data.array.event.demand.money.array",
            "description": "<p>Event demand data demand type array money data</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "data.array.event.demand.money.array.id",
            "description": "<p>Array Event demand data demand type money id</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "data.array.event.demand.money.array.event_demand_id",
            "description": "<p>Array Event demand data demand type money event demand id</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "data.array.event.demand.money.array.account",
            "description": "<p>Array Event demand data demand type money account</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "data.array.event.demand.money.array.summ",
            "description": "<p>Array Event demand data demand type money summ</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "data.array.event.demand.money.array.payment_frequency_id",
            "description": "<p>Array Event demand data demand type money payment frequency id</p>"
          },
          {
            "group": "200",
            "type": "Array[]",
            "optional": false,
            "field": "data.array.event.demand.volunteers",
            "description": "<p>Array  array volunteers data</p>"
          },
          {
            "group": "200",
            "type": "Array[]",
            "optional": false,
            "field": "data.array.event.demand.volunteers.array",
            "description": "<p>array volunteers data</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "data.array.event.demand.volunteers.array.id",
            "description": "<p>volunteers id</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "data.array.event.demand.volunteers.array.event_demand_id",
            "description": "<p>volunteers event demand id</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "data.array.event.demand.volunteers.array.name",
            "description": "<p>volunteers name</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "data.array.event.demand.volunteers.array.count",
            "description": "<p>volunteers count</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "data.array.event.demand.volunteers.array.event_volunteer_response_count",
            "description": "<p>volunteers response count</p>"
          },
          {
            "group": "200",
            "type": "Array[]",
            "optional": false,
            "field": "data.array.event.demand.supplies",
            "description": "<p>array supplies data</p>"
          },
          {
            "group": "200",
            "type": "Array[]",
            "optional": false,
            "field": "data.array.event.demand.supplies.a",
            "description": "<p>array supplies data</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "data.array.event.demand.supplies.array.id",
            "description": "<p>supplies id</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "data.array.event.demand.supplies.array.event_demand_id",
            "description": "<p>supplies event demand id</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "data.array.event.demand.supplies.array.name",
            "description": "<p>supplies name</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "data.array.event.demand.supplies.array.count",
            "description": "<p>supplies count</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "data.array.event.demand.supplies.array.event_supply_response_sum",
            "description": "<p>supplies response count</p>"
          },
          {
            "group": "200",
            "type": "Array[]",
            "optional": false,
            "field": "data.array.event.demand.supplies.array.event_supply_response",
            "description": "<p>supplies response array data</p>"
          },
          {
            "group": "200",
            "type": "Array[]",
            "optional": false,
            "field": "data.array.event.demand.supplies.array.event_supply_response.array",
            "description": "<p>supplies response array data</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "data.array.event.demand.supplies.array.event_supply_response.array.id",
            "description": "<p>supplies response id</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "data.array.event.demand.supplies.array.event_supply_response.array.event_supply_id",
            "description": "<p>supplies response event supply id</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "data.array.event.demand.supplies.array.event_supply_response.array.user_id",
            "description": "<p>supplies response user id</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "data.array.event.demand.supplies.array.event_supply_response.array.count",
            "description": "<p>supplies response count</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "data.array.event.demand.supplies.array.event_supply_response.array.parcel_status",
            "description": "<p>supplies response parcel status</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "first_page_url",
            "description": "<p>Url of the first page.</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "last_page_url",
            "description": "<p>Url of the last page.</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "next_page_url",
            "description": "<p>Url of the next page.</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "path",
            "description": "<p>Base URL of request.</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "from",
            "description": "<p>Number of start element.</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "to",
            "description": "<p>Number of end element.</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "total",
            "description": "<p>Count of all elements.</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "per_page",
            "description": "<p>Elements on page.</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "last_page",
            "description": "<p>Number of the last page.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "   HTTP/1.1 200 OK\n {\n    \"current_page\":1,\n    \"data\":\n        [\n            {\n                \"id\":4,\n                \"title\":\"testing\",\n                \"story\":\"testing story\",\n                \"short_story\":\"short_story\",\n                \"address\":\"lalalala\",\n                \"type_destination_id\":10,\n                \"purpose_id\":18,\n                \"religion_id\":11,\n                \"country_id\":1,\n                \"state_id\":1,\n                \"city_id\":1,\n                \"user_id\":1,\n                \"event_status_id\":0,\n                \"is_approved\":1,\n                \"is_submit\":1,\n                \"created_at\":\"2018-05-17 11:39:00\",\n                \"updated_at\":\"2018-05-17 11:39:00\",\n                \"finish_date\":\"2018-05-17\",\n                \"comments_count\":0,\n                \"user\":\n                    {\n                        \"id\":1,\n                        \"name\":\"Test User\"\n                    },\n                \"images\":\n                    [\n                        {\n                            \"id\":3,\n                            \"event_id\":4,\n                            \"image_id\":5,\n                            \"created_at\":null,\n                            \"updated_at\":null,\n                            \"is_preview\":1,\n                            \"image\":\n                                {\n                                    \"title\":\"test2\",\n                                    \"url\":\"storage\\/images\\/YuJPIpEwRN19wQoPctCVDVs1CkZ1mLFuHeDc7tfp.jpeg\",\n                                }\n                        }\n                    ]\n                \"event_status\":\n                    {\n                        \"id\":12,\n                        \"title\":\"Trending\"\n                    }\n                \"purpose\":\n                    {\n                        \"id\":18,\n                        \"title\":\"Children & Education\"\n                    },\n                \"religion\":\n                    {\n                        \"id\":11,\n                        \"title\":\"Christianity\"\n                    },\n                \"type_destination\":\n                    {\n                        \"id\":10,\n                        \"title\":\"Charity\"\n                    },\n                \"country\":\n                    {\n                        \"id\":1,\n                        \"name\":\"Afghanistan\",\n                        \"sortname\":\"AF\"\n                    },\n                \"state\":\n                    {\n                        \"id\":1,\n                        \"name\":\"Andaman and Nicobar Islands\"\n                    },\n                \"city\":\n                    {\n                        \"id\":1,\n                        \"name\":\"Bombuflat\"\n                    },\n                \"demand\":\n                    [\n                        {\n                            \"id\":1,\n                            \"demand_type_id\":1,\n                            \"demand_type\":\n                                {\n                                    \"id\":1,\n                                    \"title\":\"Many\",\n                                },\n                            \"volunteers\":[],\n                            \"supplies\":[],\n                            \"money\":\n                                [\n                                    {\n                                        \"id\":2,\n                                        \"event_demand_id\":1,\n                                        \"account\":\"635168132101651\",\n                                        \"summ\":1230000,\n                                        \"payment_frequency_id\":5\n                                    }\n                                ]\n                        },\n                    ],\n                    [\n                        {\n                            \"id\":1,\n                            \"demand_type_id\":2,\n                            \"demand_type\":\n                                {\n                                    \"id\":2,\n                                    \"title\":\"Volunteers\",\n                                },\n                            \"volunteers\":\n                                [\n                                    {\n                                        \"id\":2,\n                                        \"event_demand_id\":2,\n                                        \"name\":\"test 2\",\n                                        \"count\":22,\n                                        \"special_skills\":0,\n                                        \"description\":null,\n                                        \"event_volunteer_response_count\":1\n                                    },\n                                    .......\n                                ],\n                            \"supplies\":[],\n                            \"money\":[]\n                        },\n                    ],\n                    [\n                        {\n                            \"id\":1,\n                            \"demand_type_id\":3,\n                            \"demand_type\":\n                                {\n                                    \"id\":3,\n                                    \"title\":\"Supplies\",\n                                },\n                            \"volunteers\":[],\n                            \"supplies\":\n                                [\n                                    {\n                                        \"id\":1,\n                                        \"event_demand_id\":2,\n                                        \"name\":\"Test 1\",\n                                        \"count\":2,\n                                        \"delivery\":0,\n                                        \"description\":null,\n                                        \"event_supply_response_sum\":4,\n                                        \"event_supply_response\":\n                                            [\n                                                {\n                                                    \"id\":1,\n                                                    \"event_supply_id\":1,\n                                                    \"user_id\":2,\n                                                    \"count\":2,\n                                                    \"user_approved\":1,\n                                                    \"parcel_status\":\"pending\",\n                                                },\n                                                .....\n                                            ]\n                                    },\n                                    .......\n                                ],\n                            \"money\":[]\n                        },\n                    ]\n            },\n        ],\n    \"first_page_url\":\"http:\\/\\/charity.test\\/api\\/event\\/search?page=1\",\n    \"from\":1,\n    \"last_page\":1,\n    \"last_page_url\":\"http:\\/\\/charity.test\\/api\\/event\\/search?page=1\",\n    \"next_page_url\":null,\n    \"path\":\"http:\\/\\/charity.test\\/api\\/event\\/search\",\n    \"per_page\":16,\n    \"prev_page_url\":null,\n    \"to\":4,\n    \"total\":4\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./app/Http/Controllers/Admin/AdminEventController.php",
    "groupTitle": "Admin_Event"
  },
  {
    "type": "post",
    "url": "/api/admin/event/approved",
    "title": "Get Approved Event",
    "name": "Get_Approved_Event",
    "group": "Admin_Event",
    "permission": [
      {
        "name": "Admin",
        "title": "Admin access",
        "description": "<p>Access only for users with admin rights</p>"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "page",
            "description": "<p>Number of page. Default 1</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n     \"page\":2\n}",
          "type": "json"
        }
      ]
    },
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "X-CSRF-TOKEN",
            "description": "<p>X-CSRF-TOKEN.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"X-CSRF-TOKEN\": \"Gnknh68NbfXCay7GZUIouJQtEO67BPgQ9QckOXCD\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "current_page",
            "description": "<p>Number of the page.</p>"
          },
          {
            "group": "200",
            "type": "Array[]",
            "optional": false,
            "field": "data",
            "description": "<p>Page data of events.</p>"
          },
          {
            "group": "200",
            "type": "Array[]",
            "optional": false,
            "field": "data.array",
            "description": "<p>Data array of event.</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "data.array.event.id",
            "description": "<p>Event id</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "data.array.event.title",
            "description": "<p>Event title</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "data.array.event.story",
            "description": "<p>Event story</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "data.array.event.short_story",
            "description": "<p>Event short story</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "data.array.event.address",
            "description": "<p>Event address</p>"
          },
          {
            "group": "200",
            "type": "Bool",
            "optional": false,
            "field": "data.array.event.is_approved",
            "description": "<p>Event approved status(true - is approved)</p>"
          },
          {
            "group": "200",
            "type": "Bool",
            "optional": false,
            "field": "data.array.event.is_submit",
            "description": "<p>Event submit status(true - is submit)</p>"
          },
          {
            "group": "200",
            "type": "Array[]",
            "optional": false,
            "field": "data.array.event.user",
            "description": "<p>Event Author data</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "data.array.event.user.id",
            "description": "<p>Author user id</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "data.array.event.user.name",
            "description": "<p>Author name</p>"
          },
          {
            "group": "200",
            "type": "Array[]",
            "optional": false,
            "field": "data.array.event.images",
            "description": "<p>Array Event preview</p>"
          },
          {
            "group": "200",
            "type": "Array[]",
            "optional": false,
            "field": "data.array.event.images.array",
            "description": "<p>Array image data</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "data.array.event.images.array.id",
            "description": "<p>Event image id</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "data.array.event.images.array.image_id",
            "description": "<p>Event image file id</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "data.array.event.images.array.is_preview",
            "description": "<p>Preview status of image</p>"
          },
          {
            "group": "200",
            "type": "Array[]",
            "optional": false,
            "field": "data.array.event.images.array.image",
            "description": "<p>Array Event image file data</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "data.array.event.images.array.image.title",
            "description": "<p>Event image file title</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "data.array.event.images.array.image.url",
            "description": "<p>Event image file url</p>"
          },
          {
            "group": "200",
            "type": "Array[]",
            "optional": false,
            "field": "data.array.event.event_status",
            "description": "<p>Array Event status data</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "data.array.event.event_status.id",
            "description": "<p>Event status id</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "data.array.event.event_status.title",
            "description": "<p>Event status title</p>"
          },
          {
            "group": "200",
            "type": "Array[]",
            "optional": false,
            "field": "data.array.event.purpose",
            "description": "<p>Array Event purpose data</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "data.array.event.purpose.id",
            "description": "<p>Event purpose id</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "data.array.event.purpose.title",
            "description": "<p>Event purpose title</p>"
          },
          {
            "group": "200",
            "type": "Array[]",
            "optional": false,
            "field": "data.array.event.religion",
            "description": "<p>Array Event religion data</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "data.array.event.religion.id",
            "description": "<p>Event religion id</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "data.array.event.religion.title",
            "description": "<p>Event religion title</p>"
          },
          {
            "group": "200",
            "type": "Array[]",
            "optional": false,
            "field": "data.array.event.type_destination",
            "description": "<p>Array Event type destination data</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "data.array.event.type_destination.id",
            "description": "<p>Event type destination id</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "data.array.event.type_destination.title",
            "description": "<p>Event type destination title</p>"
          },
          {
            "group": "200",
            "type": "Array[]",
            "optional": false,
            "field": "data.array.event.country",
            "description": "<p>Array Event country data</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "data.array.event.country.id",
            "description": "<p>Event country id</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "data.array.event.country.name",
            "description": "<p>Event country name</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "data.array.event.country.sortname",
            "description": "<p>Event country sortname</p>"
          },
          {
            "group": "200",
            "type": "Array[]",
            "optional": false,
            "field": "data.array.event.state",
            "description": "<p>Array Event state data</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "data.array.event.state.id",
            "description": "<p>Event state id</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "data.array.event.state.name",
            "description": "<p>Event state name</p>"
          },
          {
            "group": "200",
            "type": "Array[]",
            "optional": false,
            "field": "data.array.event.city",
            "description": "<p>Array Event city data</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "data.array.event.city.id",
            "description": "<p>Event city id</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "data.array.event.city.name",
            "description": "<p>Event city name</p>"
          },
          {
            "group": "200",
            "type": "Array[]",
            "optional": false,
            "field": "data.array.event.demand",
            "description": "<p>Array Event demand data</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "data.array.event.demand.id",
            "description": "<p>Event demand data id</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "data.array.event.demand.demand_type_id",
            "description": "<p>Event demand data demand type id</p>"
          },
          {
            "group": "200",
            "type": "Array[]",
            "optional": false,
            "field": "data.array.event.demand.demand_type",
            "description": "<p>Array Event demand data demand type data</p>"
          },
          {
            "group": "200",
            "type": "Array[]",
            "optional": false,
            "field": "data.array.event.demand.demand_type.id",
            "description": "<p>Id of demand type</p>"
          },
          {
            "group": "200",
            "type": "Array[]",
            "optional": false,
            "field": "data.array.event.demand.demand_type.title",
            "description": "<p>Name of demand type</p>"
          },
          {
            "group": "200",
            "type": "Array[]",
            "optional": false,
            "field": "data.array.event.demand.money",
            "description": "<p>Array Event demand data demand type array money data</p>"
          },
          {
            "group": "200",
            "type": "Array[]",
            "optional": false,
            "field": "data.array.event.demand.money.array",
            "description": "<p>Event demand data demand type array money data</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "data.array.event.demand.money.array.id",
            "description": "<p>Array Event demand data demand type money id</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "data.array.event.demand.money.array.event_demand_id",
            "description": "<p>Array Event demand data demand type money event demand id</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "data.array.event.demand.money.array.account",
            "description": "<p>Array Event demand data demand type money account</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "data.array.event.demand.money.array.summ",
            "description": "<p>Array Event demand data demand type money summ</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "data.array.event.demand.money.array.payment_frequency_id",
            "description": "<p>Array Event demand data demand type money payment frequency id</p>"
          },
          {
            "group": "200",
            "type": "Array[]",
            "optional": false,
            "field": "data.array.event.demand.volunteers",
            "description": "<p>Array Event demand data demand type array volunteers data</p>"
          },
          {
            "group": "200",
            "type": "Array[]",
            "optional": false,
            "field": "data.array.event.demand.volunteers.array",
            "description": "<p>Event demand data demand type array volunteers data</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "data.array.event.demand.volunteers.array.id",
            "description": "<p>Array Event demand data demand type volunteers id</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "data.array.event.demand.volunteers.array.event_demand_id",
            "description": "<p>Array Event demand data demand type volunteers event demand id</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "data.array.event.demand.volunteers.array.name",
            "description": "<p>Array Event demand data demand type volunteers name</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "data.array.event.demand.volunteers.array.count",
            "description": "<p>Array Event demand data demand type volunteers count</p>"
          },
          {
            "group": "200",
            "type": "Array[]",
            "optional": false,
            "field": "data.array.event.demand.supplies",
            "description": "<p>Array Event demand data demand type array supplies data</p>"
          },
          {
            "group": "200",
            "type": "Array[]",
            "optional": false,
            "field": "data.array.event.demand.supplies.array",
            "description": "<p>Event demand data demand type array supplies data</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "data.array.event.demand.supplies.array.id",
            "description": "<p>Array Event demand data demand type supplies id</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "data.array.event.demand.supplies.array.event_demand_id",
            "description": "<p>Array Event demand data demand type supplies event demand id</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "data.array.event.demand.supplies.array.name",
            "description": "<p>Array Event demand data demand type supplies name</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "data.array.event.demand.supplies.array.count",
            "description": "<p>Array Event demand data demand type supplies count</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "first_page_url",
            "description": "<p>Url of the first page.</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "last_page_url",
            "description": "<p>Url of the last page.</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "next_page_url",
            "description": "<p>Url of the next page.</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "path",
            "description": "<p>Base URL of request.</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "from",
            "description": "<p>Number of start element.</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "to",
            "description": "<p>Number of end element.</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "total",
            "description": "<p>Count of all elements.</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "per_page",
            "description": "<p>Elements on page.</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "last_page",
            "description": "<p>Number of the last page.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "   HTTP/1.1 200 OK\n {\n    \"current_page\":1,\n    \"data\":\n        [\n            {\n                \"id\":4,\n                \"title\":\"testing\",\n                \"story\":\"testing story\",\n                \"short_story\":\"short_story\",\n                \"address\":\"lalalala\",\n                \"type_destination_id\":10,\n                \"purpose_id\":18,\n                \"religion_id\":11,\n                \"country_id\":1,\n                \"state_id\":1,\n                \"city_id\":1,\n                \"user_id\":1,\n                \"event_status_id\":0,\n                \"is_approved\":1,\n                \"is_submit\":1,\n                \"created_at\":\"2018-05-17 11:39:00\",\n                \"updated_at\":\"2018-05-17 11:39:00\",\n                \"finish_date\":\"2018-05-17\",\n                \"comments_count\":0,\n                \"user\":\n                    {\n                        \"id\":1,\n                        \"name\":\"Test User\"\n                    },\n                \"images\":\n                    [\n                        {\n                            \"id\":3,\n                            \"event_id\":4,\n                            \"image_id\":5,\n                            \"created_at\":null,\n                            \"updated_at\":null,\n                            \"is_preview\":1,\n                            \"image\":\n                                {\n                                    \"title\":\"test2\",\n                                    \"url\":\"storage\\/images\\/YuJPIpEwRN19wQoPctCVDVs1CkZ1mLFuHeDc7tfp.jpeg\",\n                                }\n                        }\n                    ]\n                \"event_status\":\n                    {\n                        \"id\":12,\n                        \"title\":\"Trending\"\n                    }\n                \"purpose\":\n                    {\n                        \"id\":18,\n                        \"title\":\"Children & Education\"\n                    },\n                \"religion\":\n                    {\n                        \"id\":11,\n                        \"title\":\"Christianity\"\n                    },\n                \"type_destination\":\n                    {\n                        \"id\":10,\n                        \"title\":\"Charity\"\n                    },\n                \"country\":\n                    {\n                        \"id\":1,\n                        \"name\":\"Afghanistan\",\n                        \"sortname\":\"AF\"\n                    },\n                \"state\":\n                    {\n                        \"id\":1,\n                        \"name\":\"Andaman and Nicobar Islands\"\n                    },\n                \"city\":\n                    {\n                        \"id\":1,\n                        \"name\":\"Bombuflat\"\n                    },\n                \"demand\":\n                    [\n                        {\n                            \"id\":1,\n                            \"demand_type_id\":2,\n                            \"demand_type\":\n                                {\n                                    \"id\":1,\n                                    \"title\":\"Many\",\n                                },\n                            \"volunteers\":[],\n                            \"supplies\":[],\n                            \"money\":\n                                [\n                                    {\n                                        \"id\":2,\n                                        \"event_demand_id\":1,\n                                        \"account\":\"635168132101651\",\n                                        \"summ\":1230000,\n                                        \"payment_frequency_id\":5\n                                    }\n                                ]\n                        },\n                    ]\n            },\n        ],\n    \"first_page_url\":\"http:\\/\\/charity.test\\/api\\/event\\/search?page=1\",\n    \"from\":1,\n    \"last_page\":1,\n    \"last_page_url\":\"http:\\/\\/charity.test\\/api\\/event\\/search?page=1\",\n    \"next_page_url\":null,\n    \"path\":\"http:\\/\\/charity.test\\/api\\/event\\/search\",\n    \"per_page\":16,\n    \"prev_page_url\":null,\n    \"to\":4,\n    \"total\":4\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./app/Http/Controllers/Admin/AdminEventController.php",
    "groupTitle": "Admin_Event"
  },
  {
    "type": "post",
    "url": "/api/admin/event/send_back",
    "title": "Get Send Back Event",
    "name": "Get_Send_Back_Event",
    "group": "Admin_Event",
    "permission": [
      {
        "name": "Admin",
        "title": "Admin access",
        "description": "<p>Access only for users with admin rights</p>"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "page",
            "description": "<p>Number of page. Default 1</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n     \"page\":2\n}",
          "type": "json"
        }
      ]
    },
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "X-CSRF-TOKEN",
            "description": "<p>X-CSRF-TOKEN.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"X-CSRF-TOKEN\": \"Gnknh68NbfXCay7GZUIouJQtEO67BPgQ9QckOXCD\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "current_page",
            "description": "<p>Number of the page.</p>"
          },
          {
            "group": "200",
            "type": "Array[]",
            "optional": false,
            "field": "data",
            "description": "<p>Page data of events.</p>"
          },
          {
            "group": "200",
            "type": "Array[]",
            "optional": false,
            "field": "data.array",
            "description": "<p>Data array of event.</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "data.array.event.id",
            "description": "<p>Event id</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "data.array.event.title",
            "description": "<p>Event title</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "data.array.event.story",
            "description": "<p>Event story</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "data.array.event.short_story",
            "description": "<p>Event short story</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "data.array.event.address",
            "description": "<p>Event address</p>"
          },
          {
            "group": "200",
            "type": "Bool",
            "optional": false,
            "field": "data.array.event.is_approved",
            "description": "<p>Event approved status(true - is approved)</p>"
          },
          {
            "group": "200",
            "type": "Bool",
            "optional": false,
            "field": "data.array.event.is_submit",
            "description": "<p>Event submit status(true - is submit)</p>"
          },
          {
            "group": "200",
            "type": "Array[]",
            "optional": false,
            "field": "data.array.event.user",
            "description": "<p>Event Author data</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "data.array.event.user.id",
            "description": "<p>Author user id</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "data.array.event.user.name",
            "description": "<p>Author name</p>"
          },
          {
            "group": "200",
            "type": "Array[]",
            "optional": false,
            "field": "data.array.event.images",
            "description": "<p>Array Event preview</p>"
          },
          {
            "group": "200",
            "type": "Array[]",
            "optional": false,
            "field": "data.array.event.images.array",
            "description": "<p>Array image data</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "data.array.event.images.array.id",
            "description": "<p>Event image id</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "data.array.event.images.array.image_id",
            "description": "<p>Event image file id</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "data.array.event.images.array.is_preview",
            "description": "<p>Preview status of image</p>"
          },
          {
            "group": "200",
            "type": "Array[]",
            "optional": false,
            "field": "data.array.event.images.array.image",
            "description": "<p>Array Event image file data</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "data.array.event.images.array.image.title",
            "description": "<p>Event image file title</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "data.array.event.images.array.image.url",
            "description": "<p>Event image file url</p>"
          },
          {
            "group": "200",
            "type": "Array[]",
            "optional": false,
            "field": "data.array.event.event_status",
            "description": "<p>Array Event status data</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "data.array.event.event_status.id",
            "description": "<p>Event status id</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "data.array.event.event_status.title",
            "description": "<p>Event status title</p>"
          },
          {
            "group": "200",
            "type": "Array[]",
            "optional": false,
            "field": "data.array.event.purpose",
            "description": "<p>Array Event purpose data</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "data.array.event.purpose.id",
            "description": "<p>Event purpose id</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "data.array.event.purpose.title",
            "description": "<p>Event purpose title</p>"
          },
          {
            "group": "200",
            "type": "Array[]",
            "optional": false,
            "field": "data.array.event.religion",
            "description": "<p>Array Event religion data</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "data.array.event.religion.id",
            "description": "<p>Event religion id</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "data.array.event.religion.title",
            "description": "<p>Event religion title</p>"
          },
          {
            "group": "200",
            "type": "Array[]",
            "optional": false,
            "field": "data.array.event.type_destination",
            "description": "<p>Array Event type destination data</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "data.array.event.type_destination.id",
            "description": "<p>Event type destination id</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "data.array.event.type_destination.title",
            "description": "<p>Event type destination title</p>"
          },
          {
            "group": "200",
            "type": "Array[]",
            "optional": false,
            "field": "data.array.event.country",
            "description": "<p>Array Event country data</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "data.array.event.country.id",
            "description": "<p>Event country id</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "data.array.event.country.name",
            "description": "<p>Event country name</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "data.array.event.country.sortname",
            "description": "<p>Event country sortname</p>"
          },
          {
            "group": "200",
            "type": "Array[]",
            "optional": false,
            "field": "data.array.event.state",
            "description": "<p>Array Event state data</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "data.array.event.state.id",
            "description": "<p>Event state id</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "data.array.event.state.name",
            "description": "<p>Event state name</p>"
          },
          {
            "group": "200",
            "type": "Array[]",
            "optional": false,
            "field": "data.array.event.city",
            "description": "<p>Array Event city data</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "data.array.event.city.id",
            "description": "<p>Event city id</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "data.array.event.city.name",
            "description": "<p>Event city name</p>"
          },
          {
            "group": "200",
            "type": "Array[]",
            "optional": false,
            "field": "data.array.event.demand",
            "description": "<p>Array Event demand data</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "data.array.event.demand.id",
            "description": "<p>Event demand data id</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "data.array.event.demand.demand_type_id",
            "description": "<p>Event demand data demand type id</p>"
          },
          {
            "group": "200",
            "type": "Array[]",
            "optional": false,
            "field": "data.array.event.demand.demand_type",
            "description": "<p>Array Event demand data demand type data</p>"
          },
          {
            "group": "200",
            "type": "Array[]",
            "optional": false,
            "field": "data.array.event.demand.demand_type.id",
            "description": "<p>Id of demand type</p>"
          },
          {
            "group": "200",
            "type": "Array[]",
            "optional": false,
            "field": "data.array.event.demand.demand_type.title",
            "description": "<p>Name of demand type</p>"
          },
          {
            "group": "200",
            "type": "Array[]",
            "optional": false,
            "field": "data.array.event.demand.money",
            "description": "<p>Array Event demand data demand type array money data</p>"
          },
          {
            "group": "200",
            "type": "Array[]",
            "optional": false,
            "field": "data.array.event.demand.money.array",
            "description": "<p>Event demand data demand type array money data</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "data.array.event.demand.money.array.id",
            "description": "<p>Array Event demand data demand type money id</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "data.array.event.demand.money.array.event_demand_id",
            "description": "<p>Array Event demand data demand type money event demand id</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "data.array.event.demand.money.array.account",
            "description": "<p>Array Event demand data demand type money account</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "data.array.event.demand.money.array.summ",
            "description": "<p>Array Event demand data demand type money summ</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "data.array.event.demand.money.array.payment_frequency_id",
            "description": "<p>Array Event demand data demand type money payment frequency id</p>"
          },
          {
            "group": "200",
            "type": "Array[]",
            "optional": false,
            "field": "data.array.event.demand.volunteers",
            "description": "<p>Array Event demand data demand type array volunteers data</p>"
          },
          {
            "group": "200",
            "type": "Array[]",
            "optional": false,
            "field": "data.array.event.demand.volunteers.array",
            "description": "<p>Event demand data demand type array volunteers data</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "data.array.event.demand.volunteers.array.id",
            "description": "<p>Array Event demand data demand type volunteers id</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "data.array.event.demand.volunteers.array.event_demand_id",
            "description": "<p>Array Event demand data demand type volunteers event demand id</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "data.array.event.demand.volunteers.array.name",
            "description": "<p>Array Event demand data demand type volunteers name</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "data.array.event.demand.volunteers.array.count",
            "description": "<p>Array Event demand data demand type volunteers count</p>"
          },
          {
            "group": "200",
            "type": "Array[]",
            "optional": false,
            "field": "data.array.event.demand.supplies",
            "description": "<p>Array Event demand data demand type array supplies data</p>"
          },
          {
            "group": "200",
            "type": "Array[]",
            "optional": false,
            "field": "data.array.event.demand.supplies.array",
            "description": "<p>Event demand data demand type array supplies data</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "data.array.event.demand.supplies.array.id",
            "description": "<p>Array Event demand data demand type supplies id</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "data.array.event.demand.supplies.array.event_demand_id",
            "description": "<p>Array Event demand data demand type supplies event demand id</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "data.array.event.demand.supplies.array.name",
            "description": "<p>Array Event demand data demand type supplies name</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "data.array.event.demand.supplies.array.count",
            "description": "<p>Array Event demand data demand type supplies count</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "first_page_url",
            "description": "<p>Url of the first page.</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "last_page_url",
            "description": "<p>Url of the last page.</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "next_page_url",
            "description": "<p>Url of the next page.</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "path",
            "description": "<p>Base URL of request.</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "from",
            "description": "<p>Number of start element.</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "to",
            "description": "<p>Number of end element.</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "total",
            "description": "<p>Count of all elements.</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "per_page",
            "description": "<p>Elements on page.</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "last_page",
            "description": "<p>Number of the last page.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "   HTTP/1.1 200 OK\n {\n    \"current_page\":1,\n    \"data\":\n        [\n            {\n                \"id\":4,\n                \"title\":\"testing\",\n                \"story\":\"testing story\",\n                \"short_story\":\"short_story\",\n                \"address\":\"lalalala\",\n                \"type_destination_id\":10,\n                \"purpose_id\":18,\n                \"religion_id\":11,\n                \"country_id\":1,\n                \"state_id\":1,\n                \"city_id\":1,\n                \"user_id\":1,\n                \"event_status_id\":0,\n                \"is_approved\":1,\n                \"is_submit\":1,\n                \"created_at\":\"2018-05-17 11:39:00\",\n                \"updated_at\":\"2018-05-17 11:39:00\",\n                \"finish_date\":\"2018-05-17\",\n                \"comments_count\":0,\n                \"user\":\n                    {\n                        \"id\":1,\n                        \"name\":\"Test User\"\n                    },\n                \"images\":\n                    [\n                        {\n                            \"id\":3,\n                            \"event_id\":4,\n                            \"image_id\":5,\n                            \"created_at\":null,\n                            \"updated_at\":null,\n                            \"is_preview\":1,\n                            \"image\":\n                                {\n                                    \"title\":\"test2\",\n                                    \"url\":\"storage\\/images\\/YuJPIpEwRN19wQoPctCVDVs1CkZ1mLFuHeDc7tfp.jpeg\",\n                                }\n                        }\n                    ]\n                \"event_status\":\n                    {\n                        \"id\":12,\n                        \"title\":\"Trending\"\n                    }\n                \"purpose\":\n                    {\n                        \"id\":18,\n                        \"title\":\"Children & Education\"\n                    },\n                \"religion\":\n                    {\n                        \"id\":11,\n                        \"title\":\"Christianity\"\n                    },\n                \"type_destination\":\n                    {\n                        \"id\":10,\n                        \"title\":\"Charity\"\n                    },\n                \"country\":\n                    {\n                        \"id\":1,\n                        \"name\":\"Afghanistan\",\n                        \"sortname\":\"AF\"\n                    },\n                \"state\":\n                    {\n                        \"id\":1,\n                        \"name\":\"Andaman and Nicobar Islands\"\n                    },\n                \"city\":\n                    {\n                        \"id\":1,\n                        \"name\":\"Bombuflat\"\n                    },\n                \"demand\":\n                    [\n                        {\n                            \"id\":1,\n                            \"demand_type_id\":2,\n                            \"demand_type\":\n                                {\n                                    \"id\":1,\n                                    \"title\":\"Many\",\n                                },\n                            \"volunteers\":[],\n                            \"supplies\":[],\n                            \"money\":\n                                [\n                                    {\n                                        \"id\":2,\n                                        \"event_demand_id\":1,\n                                        \"account\":\"635168132101651\",\n                                        \"summ\":1230000,\n                                        \"payment_frequency_id\":5\n                                    }\n                                ]\n                        },\n                    ]\n            },\n        ],\n    \"first_page_url\":\"http:\\/\\/charity.test\\/api\\/event\\/search?page=1\",\n    \"from\":1,\n    \"last_page\":1,\n    \"last_page_url\":\"http:\\/\\/charity.test\\/api\\/event\\/search?page=1\",\n    \"next_page_url\":null,\n    \"path\":\"http:\\/\\/charity.test\\/api\\/event\\/search\",\n    \"per_page\":16,\n    \"prev_page_url\":null,\n    \"to\":4,\n    \"total\":4\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./app/Http/Controllers/Admin/AdminEventController.php",
    "groupTitle": "Admin_Event"
  },
  {
    "type": "post",
    "url": "/api/admin/event/un_approved",
    "title": "Get UnApproved Event",
    "name": "Get_UnApproved_Event",
    "group": "Admin_Event",
    "permission": [
      {
        "name": "Admin",
        "title": "Admin access",
        "description": "<p>Access only for users with admin rights</p>"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "page",
            "description": "<p>Number of page. Default 1</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n     \"page\":2\n}",
          "type": "json"
        }
      ]
    },
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "X-CSRF-TOKEN",
            "description": "<p>X-CSRF-TOKEN.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"X-CSRF-TOKEN\": \"Gnknh68NbfXCay7GZUIouJQtEO67BPgQ9QckOXCD\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "current_page",
            "description": "<p>Number of the page.</p>"
          },
          {
            "group": "200",
            "type": "Array[]",
            "optional": false,
            "field": "data",
            "description": "<p>Page data of events.</p>"
          },
          {
            "group": "200",
            "type": "Array[]",
            "optional": false,
            "field": "data.array",
            "description": "<p>Data array of event.</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "data.array.event.id",
            "description": "<p>Event id</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "data.array.event.title",
            "description": "<p>Event title</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "data.array.event.story",
            "description": "<p>Event story</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "data.array.event.short_story",
            "description": "<p>Event short story</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "data.array.event.address",
            "description": "<p>Event address</p>"
          },
          {
            "group": "200",
            "type": "Bool",
            "optional": false,
            "field": "data.array.event.is_approved",
            "description": "<p>Event approved status(true - is approved)</p>"
          },
          {
            "group": "200",
            "type": "Bool",
            "optional": false,
            "field": "data.array.event.is_submit",
            "description": "<p>Event submit status(true - is submit)</p>"
          },
          {
            "group": "200",
            "type": "Array[]",
            "optional": false,
            "field": "data.array.event.user",
            "description": "<p>Event Author data</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "data.array.event.user.id",
            "description": "<p>Author user id</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "data.array.event.user.name",
            "description": "<p>Author name</p>"
          },
          {
            "group": "200",
            "type": "Array[]",
            "optional": false,
            "field": "data.array.event.images",
            "description": "<p>Array Event preview</p>"
          },
          {
            "group": "200",
            "type": "Array[]",
            "optional": false,
            "field": "data.array.event.images.array",
            "description": "<p>Array image data</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "data.array.event.images.array.id",
            "description": "<p>Event image id</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "data.array.event.images.array.image_id",
            "description": "<p>Event image file id</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "data.array.event.images.array.is_preview",
            "description": "<p>Preview status of image</p>"
          },
          {
            "group": "200",
            "type": "Array[]",
            "optional": false,
            "field": "data.array.event.images.array.image",
            "description": "<p>Array Event image file data</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "data.array.event.images.array.image.title",
            "description": "<p>Event image file title</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "data.array.event.images.array.image.url",
            "description": "<p>Event image file url</p>"
          },
          {
            "group": "200",
            "type": "Array[]",
            "optional": false,
            "field": "data.array.event.event_status",
            "description": "<p>Array Event status data</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "data.array.event.event_status.id",
            "description": "<p>Event status id</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "data.array.event.event_status.title",
            "description": "<p>Event status title</p>"
          },
          {
            "group": "200",
            "type": "Array[]",
            "optional": false,
            "field": "data.array.event.purpose",
            "description": "<p>Array Event purpose data</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "data.array.event.purpose.id",
            "description": "<p>Event purpose id</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "data.array.event.purpose.title",
            "description": "<p>Event purpose title</p>"
          },
          {
            "group": "200",
            "type": "Array[]",
            "optional": false,
            "field": "data.array.event.religion",
            "description": "<p>Array Event religion data</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "data.array.event.religion.id",
            "description": "<p>Event religion id</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "data.array.event.religion.title",
            "description": "<p>Event religion title</p>"
          },
          {
            "group": "200",
            "type": "Array[]",
            "optional": false,
            "field": "data.array.event.type_destination",
            "description": "<p>Array Event type destination data</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "data.array.event.type_destination.id",
            "description": "<p>Event type destination id</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "data.array.event.type_destination.title",
            "description": "<p>Event type destination title</p>"
          },
          {
            "group": "200",
            "type": "Array[]",
            "optional": false,
            "field": "data.array.event.country",
            "description": "<p>Array Event country data</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "data.array.event.country.id",
            "description": "<p>Event country id</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "data.array.event.country.name",
            "description": "<p>Event country name</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "data.array.event.country.sortname",
            "description": "<p>Event country sortname</p>"
          },
          {
            "group": "200",
            "type": "Array[]",
            "optional": false,
            "field": "data.array.event.state",
            "description": "<p>Array Event state data</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "data.array.event.state.id",
            "description": "<p>Event state id</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "data.array.event.state.name",
            "description": "<p>Event state name</p>"
          },
          {
            "group": "200",
            "type": "Array[]",
            "optional": false,
            "field": "data.array.event.city",
            "description": "<p>Array Event city data</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "data.array.event.city.id",
            "description": "<p>Event city id</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "data.array.event.city.name",
            "description": "<p>Event city name</p>"
          },
          {
            "group": "200",
            "type": "Array[]",
            "optional": false,
            "field": "data.array.event.demand",
            "description": "<p>Array Event demand data</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "data.array.event.demand.id",
            "description": "<p>Event demand data id</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "data.array.event.demand.demand_type_id",
            "description": "<p>Event demand data demand type id</p>"
          },
          {
            "group": "200",
            "type": "Array[]",
            "optional": false,
            "field": "data.array.event.demand.demand_type",
            "description": "<p>Array Event demand data demand type data</p>"
          },
          {
            "group": "200",
            "type": "Array[]",
            "optional": false,
            "field": "data.array.event.demand.demand_type.id",
            "description": "<p>Id of demand type</p>"
          },
          {
            "group": "200",
            "type": "Array[]",
            "optional": false,
            "field": "data.array.event.demand.demand_type.title",
            "description": "<p>Name of demand type</p>"
          },
          {
            "group": "200",
            "type": "Array[]",
            "optional": false,
            "field": "data.array.event.demand.money",
            "description": "<p>Array Event demand data demand type array money data</p>"
          },
          {
            "group": "200",
            "type": "Array[]",
            "optional": false,
            "field": "data.array.event.demand.money.array",
            "description": "<p>Event demand data demand type array money data</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "data.array.event.demand.money.array.id",
            "description": "<p>Array Event demand data demand type money id</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "data.array.event.demand.money.array.event_demand_id",
            "description": "<p>Array Event demand data demand type money event demand id</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "data.array.event.demand.money.array.account",
            "description": "<p>Array Event demand data demand type money account</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "data.array.event.demand.money.array.summ",
            "description": "<p>Array Event demand data demand type money summ</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "data.array.event.demand.money.array.payment_frequency_id",
            "description": "<p>Array Event demand data demand type money payment frequency id</p>"
          },
          {
            "group": "200",
            "type": "Array[]",
            "optional": false,
            "field": "data.array.event.demand.volunteers",
            "description": "<p>Array Event demand data demand type array volunteers data</p>"
          },
          {
            "group": "200",
            "type": "Array[]",
            "optional": false,
            "field": "data.array.event.demand.volunteers.array",
            "description": "<p>Event demand data demand type array volunteers data</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "data.array.event.demand.volunteers.array.id",
            "description": "<p>Array Event demand data demand type volunteers id</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "data.array.event.demand.volunteers.array.event_demand_id",
            "description": "<p>Array Event demand data demand type volunteers event demand id</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "data.array.event.demand.volunteers.array.name",
            "description": "<p>Array Event demand data demand type volunteers name</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "data.array.event.demand.volunteers.array.count",
            "description": "<p>Array Event demand data demand type volunteers count</p>"
          },
          {
            "group": "200",
            "type": "Array[]",
            "optional": false,
            "field": "data.array.event.demand.supplies",
            "description": "<p>Array Event demand data demand type array supplies data</p>"
          },
          {
            "group": "200",
            "type": "Array[]",
            "optional": false,
            "field": "data.array.event.demand.supplies.array",
            "description": "<p>Event demand data demand type array supplies data</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "data.array.event.demand.supplies.array.id",
            "description": "<p>Array Event demand data demand type supplies id</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "data.array.event.demand.supplies.array.event_demand_id",
            "description": "<p>Array Event demand data demand type supplies event demand id</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "data.array.event.demand.supplies.array.name",
            "description": "<p>Array Event demand data demand type supplies name</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "data.array.event.demand.supplies.array.count",
            "description": "<p>Array Event demand data demand type supplies count</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "first_page_url",
            "description": "<p>Url of the first page.</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "last_page_url",
            "description": "<p>Url of the last page.</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "next_page_url",
            "description": "<p>Url of the next page.</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "path",
            "description": "<p>Base URL of request.</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "from",
            "description": "<p>Number of start element.</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "to",
            "description": "<p>Number of end element.</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "total",
            "description": "<p>Count of all elements.</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "per_page",
            "description": "<p>Elements on page.</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "last_page",
            "description": "<p>Number of the last page.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "   HTTP/1.1 200 OK\n {\n    \"current_page\":1,\n    \"data\":\n        [\n            {\n                \"id\":4,\n                \"title\":\"testing\",\n                \"story\":\"testing story\",\n                \"short_story\":\"short_story\",\n                \"address\":\"lalalala\",\n                \"type_destination_id\":10,\n                \"purpose_id\":18,\n                \"religion_id\":11,\n                \"country_id\":1,\n                \"state_id\":1,\n                \"city_id\":1,\n                \"user_id\":1,\n                \"event_status_id\":0,\n                \"is_approved\":1,\n                \"is_submit\":1,\n                \"created_at\":\"2018-05-17 11:39:00\",\n                \"updated_at\":\"2018-05-17 11:39:00\",\n                \"finish_date\":\"2018-05-17\",\n                \"comments_count\":0,\n                \"user\":\n                    {\n                        \"id\":1,\n                        \"name\":\"Test User\"\n                    },\n                \"images\":\n                    [\n                        {\n                            \"id\":3,\n                            \"event_id\":4,\n                            \"image_id\":5,\n                            \"created_at\":null,\n                            \"updated_at\":null,\n                            \"is_preview\":1,\n                            \"image\":\n                                {\n                                    \"title\":\"test2\",\n                                    \"url\":\"storage\\/images\\/YuJPIpEwRN19wQoPctCVDVs1CkZ1mLFuHeDc7tfp.jpeg\",\n                                }\n                        }\n                    ]\n                \"event_status\":\n                    {\n                        \"id\":12,\n                        \"title\":\"Trending\"\n                    }\n                \"purpose\":\n                    {\n                        \"id\":18,\n                        \"title\":\"Children & Education\"\n                    },\n                \"religion\":\n                    {\n                        \"id\":11,\n                        \"title\":\"Christianity\"\n                    },\n                \"type_destination\":\n                    {\n                        \"id\":10,\n                        \"title\":\"Charity\"\n                    },\n                \"country\":\n                    {\n                        \"id\":1,\n                        \"name\":\"Afghanistan\",\n                        \"sortname\":\"AF\"\n                    },\n                \"state\":\n                    {\n                        \"id\":1,\n                        \"name\":\"Andaman and Nicobar Islands\"\n                    },\n                \"city\":\n                    {\n                        \"id\":1,\n                        \"name\":\"Bombuflat\"\n                    },\n                \"demand\":\n                    [\n                        {\n                            \"id\":1,\n                            \"demand_type_id\":2,\n                            \"demand_type\":\n                                {\n                                    \"id\":1,\n                                    \"title\":\"Many\",\n                                },\n                            \"volunteers\":[],\n                            \"supplies\":[],\n                            \"money\":\n                                [\n                                    {\n                                        \"id\":2,\n                                        \"event_demand_id\":1,\n                                        \"account\":\"635168132101651\",\n                                        \"summ\":1230000,\n                                        \"payment_frequency_id\":5\n                                    }\n                                ]\n                        },\n                    ]\n            },\n        ],\n    \"first_page_url\":\"http:\\/\\/charity.test\\/api\\/event\\/search?page=1\",\n    \"from\":1,\n    \"last_page\":1,\n    \"last_page_url\":\"http:\\/\\/charity.test\\/api\\/event\\/search?page=1\",\n    \"next_page_url\":null,\n    \"path\":\"http:\\/\\/charity.test\\/api\\/event\\/search\",\n    \"per_page\":16,\n    \"prev_page_url\":null,\n    \"to\":4,\n    \"total\":4\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./app/Http/Controllers/Admin/AdminEventController.php",
    "groupTitle": "Admin_Event"
  },
  {
    "type": "post",
    "url": "/api/admin/event/user/{id}/list",
    "title": "Get Users Events for Admin",
    "name": "Get_Users_Events_for_Admin",
    "group": "Admin_Event",
    "permission": [
      {
        "name": "Admin",
        "title": "Admin access",
        "description": "<p>Access only for users with admin rights</p>"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": ":id",
            "description": "<p>User Id</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "page",
            "description": "<p>Number of page. Default 1</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n     \"page\":2\n}",
          "type": "json"
        }
      ]
    },
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "X-CSRF-TOKEN",
            "description": "<p>X-CSRF-TOKEN.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"X-CSRF-TOKEN\": \"Gnknh68NbfXCay7GZUIouJQtEO67BPgQ9QckOXCD\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "current_page",
            "description": "<p>Number of the page.</p>"
          },
          {
            "group": "200",
            "type": "Array[]",
            "optional": false,
            "field": "data",
            "description": "<p>Page data of events.</p>"
          },
          {
            "group": "200",
            "type": "Array[]",
            "optional": false,
            "field": "data.array",
            "description": "<p>Data array of event.</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "data.array.event.id",
            "description": "<p>Event id</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "data.array.event.title",
            "description": "<p>Event title</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "data.array.event.story",
            "description": "<p>Event story</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "data.array.event.short_story",
            "description": "<p>Event short story</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "data.array.event.address",
            "description": "<p>Event address</p>"
          },
          {
            "group": "200",
            "type": "Bool",
            "optional": false,
            "field": "data.array.event.is_approved",
            "description": "<p>Event approved status(true - is approved)</p>"
          },
          {
            "group": "200",
            "type": "Bool",
            "optional": false,
            "field": "data.array.event.is_submit",
            "description": "<p>Event submit status(true - is submit)</p>"
          },
          {
            "group": "200",
            "type": "Array[]",
            "optional": false,
            "field": "data.array.event.user",
            "description": "<p>Event Author data</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "data.array.event.user.id",
            "description": "<p>Author user id</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "data.array.event.user.name",
            "description": "<p>Author name</p>"
          },
          {
            "group": "200",
            "type": "Array[]",
            "optional": false,
            "field": "data.array.event.images",
            "description": "<p>Array Event preview</p>"
          },
          {
            "group": "200",
            "type": "Array[]",
            "optional": false,
            "field": "data.array.event.images.array",
            "description": "<p>Array image data</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "data.array.event.images.array.id",
            "description": "<p>Event image id</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "data.array.event.images.array.image_id",
            "description": "<p>Event image file id</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "data.array.event.images.array.is_preview",
            "description": "<p>Preview status of image</p>"
          },
          {
            "group": "200",
            "type": "Array[]",
            "optional": false,
            "field": "data.array.event.images.array.image",
            "description": "<p>Array Event image file data</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "data.array.event.images.array.image.title",
            "description": "<p>Event image file title</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "data.array.event.images.array.image.url",
            "description": "<p>Event image file url</p>"
          },
          {
            "group": "200",
            "type": "Array[]",
            "optional": false,
            "field": "data.array.event.event_status",
            "description": "<p>Array Event status data</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "data.array.event.event_status.id",
            "description": "<p>Event status id</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "data.array.event.event_status.title",
            "description": "<p>Event status title</p>"
          },
          {
            "group": "200",
            "type": "Array[]",
            "optional": false,
            "field": "data.array.event.purpose",
            "description": "<p>Array Event purpose data</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "data.array.event.purpose.id",
            "description": "<p>Event purpose id</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "data.array.event.purpose.title",
            "description": "<p>Event purpose title</p>"
          },
          {
            "group": "200",
            "type": "Array[]",
            "optional": false,
            "field": "data.array.event.religion",
            "description": "<p>Array Event religion data</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "data.array.event.religion.id",
            "description": "<p>Event religion id</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "data.array.event.religion.title",
            "description": "<p>Event religion title</p>"
          },
          {
            "group": "200",
            "type": "Array[]",
            "optional": false,
            "field": "data.array.event.type_destination",
            "description": "<p>Array Event type destination data</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "data.array.event.type_destination.id",
            "description": "<p>Event type destination id</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "data.array.event.type_destination.title",
            "description": "<p>Event type destination title</p>"
          },
          {
            "group": "200",
            "type": "Array[]",
            "optional": false,
            "field": "data.array.event.country",
            "description": "<p>Array Event country data</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "data.array.event.country.id",
            "description": "<p>Event country id</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "data.array.event.country.name",
            "description": "<p>Event country name</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "data.array.event.country.sortname",
            "description": "<p>Event country sortname</p>"
          },
          {
            "group": "200",
            "type": "Array[]",
            "optional": false,
            "field": "data.array.event.state",
            "description": "<p>Array Event state data</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "data.array.event.state.id",
            "description": "<p>Event state id</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "data.array.event.state.name",
            "description": "<p>Event state name</p>"
          },
          {
            "group": "200",
            "type": "Array[]",
            "optional": false,
            "field": "data.array.event.city",
            "description": "<p>Array Event city data</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "data.array.event.city.id",
            "description": "<p>Event city id</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "data.array.event.city.name",
            "description": "<p>Event city name</p>"
          },
          {
            "group": "200",
            "type": "Array[]",
            "optional": false,
            "field": "data.array.event.demand",
            "description": "<p>Array Event demand data</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "data.array.event.demand.id",
            "description": "<p>Event demand data id</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "data.array.event.demand.demand_type_id",
            "description": "<p>Event demand data demand type id</p>"
          },
          {
            "group": "200",
            "type": "Array[]",
            "optional": false,
            "field": "data.array.event.demand.demand_type",
            "description": "<p>Array Event demand data demand type data</p>"
          },
          {
            "group": "200",
            "type": "Array[]",
            "optional": false,
            "field": "data.array.event.demand.demand_type.id",
            "description": "<p>Id of demand type</p>"
          },
          {
            "group": "200",
            "type": "Array[]",
            "optional": false,
            "field": "data.array.event.demand.demand_type.title",
            "description": "<p>Name of demand type</p>"
          },
          {
            "group": "200",
            "type": "Array[]",
            "optional": false,
            "field": "data.array.event.demand.money",
            "description": "<p>Array Event demand data demand type array money data</p>"
          },
          {
            "group": "200",
            "type": "Array[]",
            "optional": false,
            "field": "data.array.event.demand.money.array",
            "description": "<p>Event demand data demand type array money data</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "data.array.event.demand.money.array.id",
            "description": "<p>Array Event demand data demand type money id</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "data.array.event.demand.money.array.event_demand_id",
            "description": "<p>Array Event demand data demand type money event demand id</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "data.array.event.demand.money.array.account",
            "description": "<p>Array Event demand data demand type money account</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "data.array.event.demand.money.array.summ",
            "description": "<p>Array Event demand data demand type money summ</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "data.array.event.demand.money.array.payment_frequency_id",
            "description": "<p>Array Event demand data demand type money payment frequency id</p>"
          },
          {
            "group": "200",
            "type": "Array[]",
            "optional": false,
            "field": "data.array.event.demand.volunteers",
            "description": "<p>Array Event demand data demand type array volunteers data</p>"
          },
          {
            "group": "200",
            "type": "Array[]",
            "optional": false,
            "field": "data.array.event.demand.volunteers.array",
            "description": "<p>Event demand data demand type array volunteers data</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "data.array.event.demand.volunteers.array.id",
            "description": "<p>Array Event demand data demand type volunteers id</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "data.array.event.demand.volunteers.array.event_demand_id",
            "description": "<p>Array Event demand data demand type volunteers event demand id</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "data.array.event.demand.volunteers.array.name",
            "description": "<p>Array Event demand data demand type volunteers name</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "data.array.event.demand.volunteers.array.count",
            "description": "<p>Array Event demand data demand type volunteers count</p>"
          },
          {
            "group": "200",
            "type": "Array[]",
            "optional": false,
            "field": "data.array.event.demand.supplies",
            "description": "<p>Array Event demand data demand type array supplies data</p>"
          },
          {
            "group": "200",
            "type": "Array[]",
            "optional": false,
            "field": "data.array.event.demand.supplies.array",
            "description": "<p>Event demand data demand type array supplies data</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "data.array.event.demand.supplies.array.id",
            "description": "<p>Array Event demand data demand type supplies id</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "data.array.event.demand.supplies.array.event_demand_id",
            "description": "<p>Array Event demand data demand type supplies event demand id</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "data.array.event.demand.supplies.array.name",
            "description": "<p>Array Event demand data demand type supplies name</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "data.array.event.demand.supplies.array.count",
            "description": "<p>Array Event demand data demand type supplies count</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "first_page_url",
            "description": "<p>Url of the first page.</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "last_page_url",
            "description": "<p>Url of the last page.</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "next_page_url",
            "description": "<p>Url of the next page.</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "path",
            "description": "<p>Base URL of request.</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "from",
            "description": "<p>Number of start element.</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "to",
            "description": "<p>Number of end element.</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "total",
            "description": "<p>Count of all elements.</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "per_page",
            "description": "<p>Elements on page.</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "last_page",
            "description": "<p>Number of the last page.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "   HTTP/1.1 200 OK\n {\n    \"current_page\":1,\n    \"data\":\n        [\n            {\n                \"id\":4,\n                \"title\":\"testing\",\n                \"story\":\"testing story\",\n                \"short_story\":\"short_story\",\n                \"address\":\"lalalala\",\n                \"type_destination_id\":10,\n                \"purpose_id\":18,\n                \"religion_id\":11,\n                \"country_id\":1,\n                \"state_id\":1,\n                \"city_id\":1,\n                \"user_id\":1,\n                \"event_status_id\":0,\n                \"is_approved\":1,\n                \"is_submit\":1,\n                \"created_at\":\"2018-05-17 11:39:00\",\n                \"updated_at\":\"2018-05-17 11:39:00\",\n                \"finish_date\":\"2018-05-17\",\n                \"comments_count\":0,\n                \"user\":\n                    {\n                        \"id\":1,\n                        \"name\":\"Test User\"\n                    },\n                \"images\":\n                    [\n                        {\n                            \"id\":3,\n                            \"event_id\":4,\n                            \"image_id\":5,\n                            \"created_at\":null,\n                            \"updated_at\":null,\n                            \"is_preview\":1,\n                            \"image\":\n                                {\n                                    \"title\":\"test2\",\n                                    \"url\":\"storage\\/images\\/YuJPIpEwRN19wQoPctCVDVs1CkZ1mLFuHeDc7tfp.jpeg\",\n                                }\n                        }\n                    ]\n                \"event_status\":\n                    {\n                        \"id\":12,\n                        \"title\":\"Trending\"\n                    }\n                \"purpose\":\n                    {\n                        \"id\":18,\n                        \"title\":\"Children & Education\"\n                    },\n                \"religion\":\n                    {\n                        \"id\":11,\n                        \"title\":\"Christianity\"\n                    },\n                \"type_destination\":\n                    {\n                        \"id\":10,\n                        \"title\":\"Charity\"\n                    },\n                \"country\":\n                    {\n                        \"id\":1,\n                        \"name\":\"Afghanistan\",\n                        \"sortname\":\"AF\"\n                    },\n                \"state\":\n                    {\n                        \"id\":1,\n                        \"name\":\"Andaman and Nicobar Islands\"\n                    },\n                \"city\":\n                    {\n                        \"id\":1,\n                        \"name\":\"Bombuflat\"\n                    },\n                \"demand\":\n                    [\n                        {\n                            \"id\":1,\n                            \"demand_type_id\":2,\n                            \"demand_type\":\n                                {\n                                    \"id\":1,\n                                    \"title\":\"Many\",\n                                },\n                            \"volunteers\":[],\n                            \"supplies\":[],\n                            \"money\":\n                                [\n                                    {\n                                        \"id\":2,\n                                        \"event_demand_id\":1,\n                                        \"account\":\"635168132101651\",\n                                        \"summ\":1230000,\n                                        \"payment_frequency_id\":5\n                                    }\n                                ]\n                        },\n                    ]\n            },\n        ],\n    \"first_page_url\":\"http:\\/\\/charity.test\\/api\\/event\\/search?page=1\",\n    \"from\":1,\n    \"last_page\":1,\n    \"last_page_url\":\"http:\\/\\/charity.test\\/api\\/event\\/search?page=1\",\n    \"next_page_url\":null,\n    \"path\":\"http:\\/\\/charity.test\\/api\\/event\\/search\",\n    \"per_page\":16,\n    \"prev_page_url\":null,\n    \"to\":4,\n    \"total\":4\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./app/Http/Controllers/Admin/AdminEventController.php",
    "groupTitle": "Admin_Event"
  },
  {
    "type": "put",
    "url": "/api/admin/event/:event_id/send_back",
    "title": "Send Back Event",
    "name": "Send_Back_Event",
    "group": "Admin_Event",
    "permission": [
      {
        "name": "Admin",
        "title": "Admin access",
        "description": "<p>Access only for users with admin rights</p>"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "event_id",
            "description": "<p>Id of Event</p>"
          }
        ]
      }
    },
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "X-CSRF-TOKEN",
            "description": "<p>X-CSRF-TOKEN.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"X-CSRF-TOKEN\": \"Gnknh68NbfXCay7GZUIouJQtEO67BPgQ9QckOXCD\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "201": [
          {
            "group": "201",
            "type": "Bool",
            "optional": false,
            "field": "status",
            "description": "<p>Status operation.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 201 OK\n [\n     'status'=>true\n ]",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "404": [
          {
            "group": "404",
            "optional": false,
            "field": "event",
            "description": "<p>Not found</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n     Event not found",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./app/Http/Controllers/Admin/AdminEventController.php",
    "groupTitle": "Admin_Event"
  },
  {
    "type": "post",
    "url": "/api/admin/faq",
    "title": "Create FAQ for admin",
    "name": "Create_FAQ",
    "group": "Admin_FAQ",
    "permission": [
      {
        "name": "Admin",
        "title": "Admin access",
        "description": "<p>Access only for users with admin rights</p>"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>FAQ title. Required, max:255</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "content",
            "description": "<p>FAQ content. Required, max:1500</p>"
          },
          {
            "group": "Parameter",
            "type": "bool",
            "optional": false,
            "field": "active",
            "description": "<p>FAQ active.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n     \"title\":\"Test1\",\n     \"content\":\"Testing content\",\n     \"active\":0,\n}",
          "type": "json"
        }
      ]
    },
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "X-CSRF-TOKEN",
            "description": "<p>X-CSRF-TOKEN.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"X-CSRF-TOKEN\": \"Gnknh68NbfXCay7GZUIouJQtEO67BPgQ9QckOXCD\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "201": [
          {
            "group": "201",
            "type": "Number",
            "optional": false,
            "field": "current_page",
            "description": "<p>Number of the page.</p>"
          },
          {
            "group": "201",
            "type": "String",
            "optional": false,
            "field": "first_page_url",
            "description": "<p>Url of the first page.</p>"
          },
          {
            "group": "201",
            "type": "String",
            "optional": false,
            "field": "last_page_url",
            "description": "<p>Url of the last page.</p>"
          },
          {
            "group": "201",
            "type": "String",
            "optional": false,
            "field": "next_page_url",
            "description": "<p>Url of the next page.</p>"
          },
          {
            "group": "201",
            "type": "String",
            "optional": false,
            "field": "path",
            "description": "<p>Base URL of request.</p>"
          },
          {
            "group": "201",
            "type": "Number",
            "optional": false,
            "field": "from",
            "description": "<p>Number of start element.</p>"
          },
          {
            "group": "201",
            "type": "Number",
            "optional": false,
            "field": "to",
            "description": "<p>Number of end element.</p>"
          },
          {
            "group": "201",
            "type": "Number",
            "optional": false,
            "field": "total",
            "description": "<p>Count of all elements.</p>"
          },
          {
            "group": "201",
            "type": "Number",
            "optional": false,
            "field": "per_page",
            "description": "<p>Elements on page.</p>"
          },
          {
            "group": "201",
            "type": "Number",
            "optional": false,
            "field": "last_page",
            "description": "<p>Number of the last page.</p>"
          },
          {
            "group": "201",
            "type": "Array[]",
            "optional": false,
            "field": "data",
            "description": "<p>Page data of FAQs.</p>"
          },
          {
            "group": "201",
            "type": "Array[]",
            "optional": false,
            "field": "data.array",
            "description": "<p>Array data of FAQ.</p>"
          },
          {
            "group": "201",
            "type": "Number",
            "optional": false,
            "field": "data.array.id",
            "description": "<p>Faq id</p>"
          },
          {
            "group": "201",
            "type": "String",
            "optional": false,
            "field": "data.array.title",
            "description": "<p>Faq title</p>"
          },
          {
            "group": "201",
            "type": "String",
            "optional": false,
            "field": "data.array.content",
            "description": "<p>Faq content</p>"
          },
          {
            "group": "201",
            "type": "String",
            "optional": false,
            "field": "data.array.active",
            "description": "<p>Faq active status</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "   HTTP/1.1 201 OK\n{\n    \"current_page\":1,\n    \"first_page_url\":\"http:\\/\\/charity.test\\/api\\/event\\/search?page=1\",\n    \"from\":1,\n    \"last_page\":1,\n    \"last_page_url\":\"http:\\/\\/charity.test\\/api\\/event\\/search?page=1\",\n    \"next_page_url\":null,\n    \"path\":\"http:\\/\\/charity.test\\/api\\/event\\/search\",\n    \"per_page\":10,\n    \"prev_page_url\":null,\n    \"to\":4,\n    \"total\":4\n    \"data\":\n            [\n                 {\n                     \"id\":1,\n                     \"title\":\"Test1\",\n                     \"content\":\"Testing content\",\n                     \"active\":0,\n                 },\n                 ......\n            ]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "400": [
          {
            "group": "400",
            "optional": false,
            "field": "array",
            "description": "<p>Array validation errors</p>"
          },
          {
            "group": "400",
            "optional": false,
            "field": "array.parameter",
            "description": "<p>parameter (key) and value of validation error</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Bad Request\n{\n     \"content\":\n         [\n             \"The city field is required.\",\n             ......\n         ],\n     .....\n }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./app/Http/Controllers/Admin/FAQController.php",
    "groupTitle": "Admin_FAQ"
  },
  {
    "type": "delete",
    "url": "/api/admin/faq/:id",
    "title": "Delete FAQ",
    "name": "Delete_FAQ",
    "group": "Admin_FAQ",
    "permission": [
      {
        "name": "Admin",
        "title": "Admin access",
        "description": "<p>Access only for users with admin rights</p>"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "X-CSRF-TOKEN",
            "description": "<p>X-CSRF-TOKEN.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"X-CSRF-TOKEN\": \"Gnknh68NbfXCay7GZUIouJQtEO67BPgQ9QckOXCD\"\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": ":id",
            "description": "<p>FAQ id.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "205": [
          {
            "group": "205",
            "type": "Bool",
            "optional": false,
            "field": "status",
            "description": "<p>Delete status</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "   HTTP/1.1 205\n[\n    'status'=>true\n]",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "404": [
          {
            "group": "404",
            "optional": false,
            "field": "faq",
            "description": "<p>Not found</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not found\n FAQ Not found",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./app/Http/Controllers/Admin/FAQController.php",
    "groupTitle": "Admin_FAQ"
  },
  {
    "type": "get",
    "url": "/api/admin/faq/:id",
    "title": "Get FAQ from id for Admin",
    "name": "Get_FAQ",
    "group": "Admin_FAQ",
    "permission": [
      {
        "name": "Admin",
        "title": "Admin access",
        "description": "<p>Access only for users with admin rights</p>"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "X-CSRF-TOKEN",
            "description": "<p>X-CSRF-TOKEN.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"X-CSRF-TOKEN\": \"Gnknh68NbfXCay7GZUIouJQtEO67BPgQ9QckOXCD\"\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": ":id",
            "description": "<p>FAQ id.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Faq id</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>Faq title</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "content",
            "description": "<p>Faq content</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "active",
            "description": "<p>Faq active status</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "   HTTP/1.1 200 OK\n{\n    \"id\":1,\n    \"title\":\"Test1\",\n    \"content\":\"Testing content\",\n    \"active\":0,\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "404": [
          {
            "group": "404",
            "optional": false,
            "field": "faq",
            "description": "<p>Not found</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not found\n FAQ Not found",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./app/Http/Controllers/Admin/FAQController.php",
    "groupTitle": "Admin_FAQ"
  },
  {
    "type": "get",
    "url": "/api/admin/faq",
    "title": "Get FAQ for admin",
    "name": "Get_FAQ",
    "group": "Admin_FAQ",
    "permission": [
      {
        "name": "Admin",
        "title": "Admin access",
        "description": "<p>Access only for users with admin rights</p>"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "X-CSRF-TOKEN",
            "description": "<p>X-CSRF-TOKEN.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"X-CSRF-TOKEN\": \"Gnknh68NbfXCay7GZUIouJQtEO67BPgQ9QckOXCD\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "current_page",
            "description": "<p>Number of the page.</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "first_page_url",
            "description": "<p>Url of the first page.</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "last_page_url",
            "description": "<p>Url of the last page.</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "next_page_url",
            "description": "<p>Url of the next page.</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "path",
            "description": "<p>Base URL of request.</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "from",
            "description": "<p>Number of start element.</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "to",
            "description": "<p>Number of end element.</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "total",
            "description": "<p>Count of all elements.</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "per_page",
            "description": "<p>Elements on page.</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "last_page",
            "description": "<p>Number of the last page.</p>"
          },
          {
            "group": "200",
            "type": "Array[]",
            "optional": false,
            "field": "data",
            "description": "<p>Page data of FAQs.</p>"
          },
          {
            "group": "200",
            "type": "Array[]",
            "optional": false,
            "field": "data.array",
            "description": "<p>Array data of FAQ.</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "data.array.id",
            "description": "<p>Faq id</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "data.array.title",
            "description": "<p>Faq title</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "data.array.content",
            "description": "<p>Faq content</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "data.array.active",
            "description": "<p>Faq active status</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "   HTTP/1.1 200 OK\n{\n    \"current_page\":1,\n    \"first_page_url\":\"http:\\/\\/charity.test\\/api\\/event\\/search?page=1\",\n    \"from\":1,\n    \"last_page\":1,\n    \"last_page_url\":\"http:\\/\\/charity.test\\/api\\/event\\/search?page=1\",\n    \"next_page_url\":null,\n    \"path\":\"http:\\/\\/charity.test\\/api\\/event\\/search\",\n    \"per_page\":10,\n    \"prev_page_url\":null,\n    \"to\":4,\n    \"total\":4\n    \"data\":\n            [\n                 {\n                     \"id\":1,\n                     \"title\":\"Test1\",\n                     \"content\":\"Testing content\",\n                     \"active\":0,\n                 },\n                 ......\n            ]\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./app/Http/Controllers/Admin/FAQController.php",
    "groupTitle": "Admin_FAQ"
  },
  {
    "type": "put",
    "url": "/api/admin/faq/:id",
    "title": "Update FAQ",
    "name": "Update_FAQ",
    "group": "Admin_FAQ",
    "permission": [
      {
        "name": "Admin",
        "title": "Admin access",
        "description": "<p>Access only for users with admin rights</p>"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "X-CSRF-TOKEN",
            "description": "<p>X-CSRF-TOKEN.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"X-CSRF-TOKEN\": \"Gnknh68NbfXCay7GZUIouJQtEO67BPgQ9QckOXCD\"\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": ":id",
            "description": "<p>FAQ id.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>FAQ title. Required, max:255</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "content",
            "description": "<p>FAQ content. Required, max:1500</p>"
          },
          {
            "group": "Parameter",
            "type": "bool",
            "optional": false,
            "field": "active",
            "description": "<p>FAQ active.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n     \"title\":\"Test1\",\n     \"content\":\"Testing content\",\n     \"active\":0,\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "201": [
          {
            "group": "201",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Faq id</p>"
          },
          {
            "group": "201",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>Faq title</p>"
          },
          {
            "group": "201",
            "type": "String",
            "optional": false,
            "field": "content",
            "description": "<p>Faq content</p>"
          },
          {
            "group": "201",
            "type": "String",
            "optional": false,
            "field": "active",
            "description": "<p>Faq active status</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "   HTTP/1.1 201 OK\n{\n    \"id\":1,\n    \"title\":\"Test1\",\n    \"content\":\"Testing content\",\n    \"active\":0,\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "400": [
          {
            "group": "400",
            "optional": false,
            "field": "array",
            "description": "<p>Array validation errors</p>"
          },
          {
            "group": "400",
            "optional": false,
            "field": "array.parameter",
            "description": "<p>parameter (key) and value of validation error</p>"
          }
        ],
        "404": [
          {
            "group": "404",
            "optional": false,
            "field": "faq",
            "description": "<p>Not found</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not found\n FAQ Not found",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Bad Request\n{\n     \"content\":\n         [\n             \"The city field is required.\",\n             ......\n         ],\n     .....\n }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./app/Http/Controllers/Admin/FAQController.php",
    "groupTitle": "Admin_FAQ"
  },
  {
    "type": "get",
    "url": "/api/admin/saerch/purpose/create",
    "title": "Create new purpose",
    "name": "Create_Purpose",
    "group": "Admin_Purpose",
    "permission": [
      {
        "name": "Admin",
        "title": "Admin access",
        "description": "<p>Access only for users with admin rights</p>"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>Name of new Purpose.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n  \"title\": 'new name'\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "201": [
          {
            "group": "201",
            "type": "Object[]",
            "optional": false,
            "field": "object.",
            "description": ""
          },
          {
            "group": "201",
            "type": "Number",
            "optional": false,
            "field": "object.id",
            "description": "<p>Purpose id.</p>"
          },
          {
            "group": "201",
            "type": "String",
            "optional": false,
            "field": "object.title",
            "description": "<p>Purpose title.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 201 Created\n{\n     \"id\":1,\n     \"title\":\"new title\",\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "400": [
          {
            "group": "400",
            "optional": false,
            "field": "Title",
            "description": "<p>Title validation iv failed.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"title\":\n         [\n             \"The title field is required.\",\n         ]\n}",
          "type": "json"
        }
      ]
    },
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "X-CSRF-TOKEN",
            "description": "<p>X-CSRF-TOKEN.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"X-CSRF-TOKEN\": \"Gnknh68NbfXCay7GZUIouJQtEO67BPgQ9QckOXCD\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./app/Http/Controllers/Admin/PurposeController.php",
    "groupTitle": "Admin_Purpose"
  },
  {
    "type": "delete",
    "url": "/api/admin/saerch/purpose/:id",
    "title": "Delete purpose from id",
    "name": "Delete_Purposes",
    "group": "Admin_Purpose",
    "permission": [
      {
        "name": "Admin",
        "title": "Admin access",
        "description": "<p>Access only for users with admin rights</p>"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": ":id",
            "description": "<p>Purpose unique ID.</p>"
          }
        ]
      }
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not found",
          "type": "json"
        }
      ]
    },
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "X-CSRF-TOKEN",
            "description": "<p>X-CSRF-TOKEN.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"X-CSRF-TOKEN\": \"Gnknh68NbfXCay7GZUIouJQtEO67BPgQ9QckOXCD\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "205": [
          {
            "group": "205",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>Status of deleting. 1 - is delete.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "205 Reset Content:",
          "content": " HTTP/1.1 205\n{\n     \"status\":1\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./app/Http/Controllers/Admin/PurposeController.php",
    "groupTitle": "Admin_Purpose"
  },
  {
    "type": "get",
    "url": "/api/admin/saerch/purpose/:id",
    "title": "Get purpose from id",
    "name": "Get_Purpose",
    "group": "Admin_Purpose",
    "permission": [
      {
        "name": "Admin",
        "title": "Admin access",
        "description": "<p>Access only for users with admin rights</p>"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": ":id",
            "description": "<p>Purpose unique ID.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Purpose id.</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>Purpose title.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "  HTTP/1.1 200 OK\n{\n     \"id\":1,\n     \"title\":\"Name\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "404": [
          {
            "group": "404",
            "optional": false,
            "field": "Not",
            "description": "<p>found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not found",
          "type": "json"
        }
      ]
    },
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "X-CSRF-TOKEN",
            "description": "<p>X-CSRF-TOKEN.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"X-CSRF-TOKEN\": \"Gnknh68NbfXCay7GZUIouJQtEO67BPgQ9QckOXCD\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./app/Http/Controllers/Admin/PurposeController.php",
    "groupTitle": "Admin_Purpose"
  },
  {
    "type": "get",
    "url": "/api/admin/saerch/purpose",
    "title": "Get all purposes",
    "name": "Get_Purposes",
    "group": "Admin_Purpose",
    "permission": [
      {
        "name": "Admin",
        "title": "Admin access",
        "description": "<p>Access only for users with admin rights</p>"
      }
    ],
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "array[]",
            "optional": false,
            "field": "array.",
            "description": ""
          },
          {
            "group": "200",
            "type": "Object[]",
            "optional": false,
            "field": "array.object",
            "description": ""
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "array.object.id",
            "description": "<p>Purpose id.</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "array.object.title",
            "description": "<p>Purpose title.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n[\n     {\n         \"id\":1,\n         \"title\":\"Money\"\n     },\n     {\n         \"id\":2,\n         \"title\":\"Volunteers\"\n     }\n     ....\n ]",
          "type": "json"
        }
      ]
    },
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "X-CSRF-TOKEN",
            "description": "<p>X-CSRF-TOKEN.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"X-CSRF-TOKEN\": \"Gnknh68NbfXCay7GZUIouJQtEO67BPgQ9QckOXCD\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./app/Http/Controllers/Admin/PurposeController.php",
    "groupTitle": "Admin_Purpose"
  },
  {
    "type": "put/patch",
    "url": "/api/admin/saerch/purpose/:id",
    "title": "Update purpose from id",
    "name": "Update_Purposes",
    "group": "Admin_Purpose",
    "permission": [
      {
        "name": "Admin",
        "title": "Admin access",
        "description": "<p>Access only for users with admin rights</p>"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": ":id",
            "description": "<p>Purpose unique ID.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>Name of new Purpose.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "(200) {json} Request-Example:",
          "content": " HTTP/1.1 200 OK\n{\n  \"title\": 'new name'\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "201": [
          {
            "group": "201",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Purpose id.</p>"
          },
          {
            "group": "201",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>Purpose title.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 201\n   {\n         \"id\":1,\n         \"title\":\"Name\"\n    }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "400": [
          {
            "group": "400",
            "optional": false,
            "field": "Title",
            "description": "<p>Title validation iv failed.</p>"
          }
        ],
        "404": [
          {
            "group": "404",
            "optional": false,
            "field": "Title",
            "description": "<p>Purpose not found</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"title\":\n         [\n             \"The title field is required.\"\n         ]\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not found",
          "type": "json"
        }
      ]
    },
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "X-CSRF-TOKEN",
            "description": "<p>X-CSRF-TOKEN.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"X-CSRF-TOKEN\": \"Gnknh68NbfXCay7GZUIouJQtEO67BPgQ9QckOXCD\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./app/Http/Controllers/Admin/PurposeController.php",
    "groupTitle": "Admin_Purpose"
  },
  {
    "type": "get",
    "url": "/api/admin/saerch/religion/create",
    "title": "Create new religion",
    "name": "Create_Religion",
    "group": "Admin_Religion",
    "permission": [
      {
        "name": "Admin",
        "title": "Admin access",
        "description": "<p>Access only for users with admin rights</p>"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>Name of new Religion.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n  \"title\": 'new name'\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "201": [
          {
            "group": "201",
            "type": "Object[]",
            "optional": false,
            "field": "object.",
            "description": ""
          },
          {
            "group": "201",
            "type": "Number",
            "optional": false,
            "field": "object.id",
            "description": "<p>Religion id.</p>"
          },
          {
            "group": "201",
            "type": "String",
            "optional": false,
            "field": "object.title",
            "description": "<p>Religion title.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 201 Created\n{\n     \"id\":1,\n     \"title\":\"new title\",\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "400": [
          {
            "group": "400",
            "optional": false,
            "field": "Title",
            "description": "<p>Title validation iv failed.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"title\":\n         [\n             \"The title field is required.\",\n         ]\n}",
          "type": "json"
        }
      ]
    },
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "X-CSRF-TOKEN",
            "description": "<p>X-CSRF-TOKEN.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"X-CSRF-TOKEN\": \"Gnknh68NbfXCay7GZUIouJQtEO67BPgQ9QckOXCD\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./app/Http/Controllers/Admin/ReligionController.php",
    "groupTitle": "Admin_Religion"
  },
  {
    "type": "delete",
    "url": "/api/admin/saerch/religion/:id",
    "title": "Delete religion from id",
    "name": "Delete_Religions",
    "group": "Admin_Religion",
    "permission": [
      {
        "name": "Admin",
        "title": "Admin access",
        "description": "<p>Access only for users with admin rights</p>"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": ":id",
            "description": "<p>Religion unique ID.</p>"
          }
        ]
      }
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not found",
          "type": "json"
        }
      ]
    },
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "X-CSRF-TOKEN",
            "description": "<p>X-CSRF-TOKEN.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"X-CSRF-TOKEN\": \"Gnknh68NbfXCay7GZUIouJQtEO67BPgQ9QckOXCD\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "205": [
          {
            "group": "205",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>Status of deleting. 1 - is delete.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "205 Reset Content:",
          "content": "{\n     \"status\":1\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./app/Http/Controllers/Admin/ReligionController.php",
    "groupTitle": "Admin_Religion"
  },
  {
    "type": "get",
    "url": "/api/admin/saerch/religion/:id",
    "title": "Get religion from id",
    "name": "Get_Religion",
    "group": "Admin_Religion",
    "permission": [
      {
        "name": "Admin",
        "title": "Admin access",
        "description": "<p>Access only for users with admin rights</p>"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": ":id",
            "description": "<p>Religion unique ID.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Religion id.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>Religion title.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n     \"id\":1,\n     \"title\":\"Name\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "404": [
          {
            "group": "404",
            "optional": false,
            "field": "Not",
            "description": "<p>found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not found",
          "type": "json"
        }
      ]
    },
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "X-CSRF-TOKEN",
            "description": "<p>X-CSRF-TOKEN.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"X-CSRF-TOKEN\": \"Gnknh68NbfXCay7GZUIouJQtEO67BPgQ9QckOXCD\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./app/Http/Controllers/Admin/ReligionController.php",
    "groupTitle": "Admin_Religion"
  },
  {
    "type": "get",
    "url": "/api/admin/saerch/religion",
    "title": "Get all religions",
    "name": "Get_Religions",
    "group": "Admin_Religion",
    "permission": [
      {
        "name": "Admin",
        "title": "Admin access",
        "description": "<p>Access only for users with admin rights</p>"
      }
    ],
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "array[]",
            "optional": false,
            "field": "array.",
            "description": ""
          },
          {
            "group": "200",
            "type": "Object[]",
            "optional": false,
            "field": "array.object",
            "description": ""
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "array.object.id",
            "description": "<p>Religion id.</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "array.object.title",
            "description": "<p>Religion title.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n[\n     {\n         \"id\":1,\n         \"title\":\"Money\"\n     },\n     {\n         \"id\":2,\n         \"title\":\"Volunteers\"\n     }\n     ....\n ]",
          "type": "json"
        }
      ]
    },
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "X-CSRF-TOKEN",
            "description": "<p>X-CSRF-TOKEN.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"X-CSRF-TOKEN\": \"Gnknh68NbfXCay7GZUIouJQtEO67BPgQ9QckOXCD\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./app/Http/Controllers/Admin/ReligionController.php",
    "groupTitle": "Admin_Religion"
  },
  {
    "type": "put/patch",
    "url": "/api/admin/saerch/religion/:id",
    "title": "Update religion from id",
    "name": "Update_Religions",
    "group": "Admin_Religion",
    "permission": [
      {
        "name": "Admin",
        "title": "Admin access",
        "description": "<p>Access only for users with admin rights</p>"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": ":id",
            "description": "<p>Religion unique ID.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>Name of new Religion.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n  \"title\": 'new name'\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "201": [
          {
            "group": "201",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Religion id.</p>"
          },
          {
            "group": "201",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>Religion title.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n     \"id\":1,\n     \"title\":\"Name\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "400": [
          {
            "group": "400",
            "optional": false,
            "field": "Title",
            "description": "<p>Title validation iv failed.</p>"
          }
        ],
        "404": [
          {
            "group": "404",
            "optional": false,
            "field": "Title",
            "description": "<p>Religion not found</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"title\":\n         [\n             \"The title field is required.\"\n         ]\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not found",
          "type": "json"
        }
      ]
    },
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "X-CSRF-TOKEN",
            "description": "<p>X-CSRF-TOKEN.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"X-CSRF-TOKEN\": \"Gnknh68NbfXCay7GZUIouJQtEO67BPgQ9QckOXCD\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./app/Http/Controllers/Admin/ReligionController.php",
    "groupTitle": "Admin_Religion"
  },
  {
    "type": "post",
    "url": "/api/admin/statinf/create",
    "title": "Create Static Inform",
    "name": "Create_Static_Inform",
    "group": "Admin_Static_Inform",
    "permission": [
      {
        "name": "Admin",
        "title": "Admin access",
        "description": "<p>Access only for users with admin rights</p>"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "X-CSRF-TOKEN",
            "description": "<p>X-CSRF-TOKEN.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"X-CSRF-TOKEN\": \"Gnknh68NbfXCay7GZUIouJQtEO67BPgQ9QckOXCD\"\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "key",
            "description": "<p>Key of value. required|string|min:1|max:255</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "value",
            "description": "<p>Value. required|string</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n     \"key\":\"same_key\",\n     \"value\":\"value Content\",\n }",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "201": [
          {
            "group": "201",
            "type": "String",
            "optional": false,
            "field": "key",
            "description": "<p>Key of value.</p>"
          },
          {
            "group": "201",
            "type": "String",
            "optional": false,
            "field": "value",
            "description": "<p>Value.</p>"
          },
          {
            "group": "201",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>static inform id</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "   HTTP/1.1 201 OK\n{\n    \"key\":\"same_key\",\n    \"value\":\"value Content\",\n    \"id\":1\",\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "400": [
          {
            "group": "400",
            "optional": false,
            "field": "array",
            "description": "<p>Array validation errors</p>"
          },
          {
            "group": "400",
            "optional": false,
            "field": "array.parameter",
            "description": "<p>parameter (key) and value of validation error</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Bad Request\n{\n     \"email\":\n         [\n             \"The email has already been taken.\",\n             ........\n         ],\n       ......\n }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./app/Http/Controllers/Admin/StaticInformController.php",
    "groupTitle": "Admin_Static_Inform"
  },
  {
    "type": "delete",
    "url": "/api/admin/statinf/:id",
    "title": "Remove Static Inform from id",
    "name": "Delete_Static_Inform",
    "group": "Admin_Static_Inform",
    "permission": [
      {
        "name": "Admin",
        "title": "Admin access",
        "description": "<p>Access only for users with admin rights</p>"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "X-CSRF-TOKEN",
            "description": "<p>X-CSRF-TOKEN.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"X-CSRF-TOKEN\": \"Gnknh68NbfXCay7GZUIouJQtEO67BPgQ9QckOXCD\"\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": ":id",
            "description": "<p>Static Inform id</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "205": [
          {
            "group": "205",
            "type": "Bool",
            "optional": false,
            "field": "status",
            "description": "<p>Delete status</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "   HTTP/1.1 205\n[\n    'status'=>true\n]",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "404": [
          {
            "group": "404",
            "optional": false,
            "field": "image",
            "description": "<p>Not found</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not found\n Not Found",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./app/Http/Controllers/Admin/StaticInformController.php",
    "groupTitle": "Admin_Static_Inform"
  },
  {
    "type": "post",
    "url": "/api/admin/statinf",
    "title": "Get all Static Inform",
    "name": "Get_All_Static_Inform",
    "group": "Admin_Static_Inform",
    "permission": [
      {
        "name": "Admin",
        "title": "Admin access",
        "description": "<p>Access only for users with admin rights</p>"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "X-CSRF-TOKEN",
            "description": "<p>X-CSRF-TOKEN.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"X-CSRF-TOKEN\": \"Gnknh68NbfXCay7GZUIouJQtEO67BPgQ9QckOXCD\"\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": ":key",
            "description": "<p>Static Inform key</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "201": [
          {
            "group": "201",
            "type": "Array[]",
            "optional": false,
            "field": "data",
            "description": "<p>Array data informs arrays.</p>"
          },
          {
            "group": "201",
            "type": "Array[]",
            "optional": false,
            "field": "data.array",
            "description": "<p>Array data inform array.</p>"
          },
          {
            "group": "201",
            "type": "String",
            "optional": false,
            "field": "data.array.key",
            "description": "<p>Key of value.</p>"
          },
          {
            "group": "201",
            "type": "String",
            "optional": false,
            "field": "data.array.value",
            "description": "<p>Value.</p>"
          },
          {
            "group": "201",
            "type": "Number",
            "optional": false,
            "field": "data.array.id",
            "description": "<p>static inform id</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "   HTTP/1.1 201 OK\n{\n    {\n        \"key\":\"same_key\",\n        \"value\":\"value Content\",\n        \"id\":1\",\n    },\n    ...\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "404": [
          {
            "group": "404",
            "optional": false,
            "field": "data",
            "description": "<p>Not found</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not found\n Not Found",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./app/Http/Controllers/Admin/StaticInformController.php",
    "groupTitle": "Admin_Static_Inform"
  },
  {
    "type": "get",
    "url": "/api/admin/statinf/:id",
    "title": "Get Static Inform from id",
    "name": "Get_Static_Inform__Id_",
    "group": "Admin_Static_Inform",
    "permission": [
      {
        "name": "Admin",
        "title": "Admin access",
        "description": "<p>Access only for users with admin rights</p>"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "X-CSRF-TOKEN",
            "description": "<p>X-CSRF-TOKEN.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"X-CSRF-TOKEN\": \"Gnknh68NbfXCay7GZUIouJQtEO67BPgQ9QckOXCD\"\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": ":id",
            "description": "<p>Static Inform id</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "201": [
          {
            "group": "201",
            "type": "String",
            "optional": false,
            "field": "key",
            "description": "<p>Key of value.</p>"
          },
          {
            "group": "201",
            "type": "String",
            "optional": false,
            "field": "value",
            "description": "<p>Value.</p>"
          },
          {
            "group": "201",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>static inform id</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "   HTTP/1.1 201 OK\n{\n    \"key\":\"same_key\",\n    \"value\":\"value Content\",\n    \"id\":1\",\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "404": [
          {
            "group": "404",
            "optional": false,
            "field": "data",
            "description": "<p>Not found</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not found\n Not Found",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./app/Http/Controllers/Admin/StaticInformController.php",
    "groupTitle": "Admin_Static_Inform"
  },
  {
    "type": "post",
    "url": "/api/admin/statinf/:key",
    "title": "Get Static Inform from key",
    "name": "Get_Static_Inform__key_",
    "group": "Admin_Static_Inform",
    "permission": [
      {
        "name": "Admin",
        "title": "Admin access",
        "description": "<p>Access only for users with admin rights</p>"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "X-CSRF-TOKEN",
            "description": "<p>X-CSRF-TOKEN.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"X-CSRF-TOKEN\": \"Gnknh68NbfXCay7GZUIouJQtEO67BPgQ9QckOXCD\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "201": [
          {
            "group": "201",
            "type": "String",
            "optional": false,
            "field": "key",
            "description": "<p>Key of value.</p>"
          },
          {
            "group": "201",
            "type": "String",
            "optional": false,
            "field": "value",
            "description": "<p>Value.</p>"
          },
          {
            "group": "201",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>static inform id</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "   HTTP/1.1 201 OK\n{\n    \"key\":\"same_key\",\n    \"value\":\"value Content\",\n    \"id\":1\",\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "404": [
          {
            "group": "404",
            "optional": false,
            "field": "data",
            "description": "<p>Not found</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not found\n Not Found",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./app/Http/Controllers/Admin/StaticInformController.php",
    "groupTitle": "Admin_Static_Inform"
  },
  {
    "type": "put",
    "url": "/api/admin/statinf/:id",
    "title": "Update Static Inform",
    "name": "Update_Static_Inform",
    "group": "Admin_Static_Inform",
    "permission": [
      {
        "name": "Admin",
        "title": "Admin access",
        "description": "<p>Access only for users with admin rights</p>"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "X-CSRF-TOKEN",
            "description": "<p>X-CSRF-TOKEN.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"X-CSRF-TOKEN\": \"Gnknh68NbfXCay7GZUIouJQtEO67BPgQ9QckOXCD\"\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": ":id",
            "description": "<p>Static Inform id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "key",
            "description": "<p>Key of value. string|min:1|max:255</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "value",
            "description": "<p>Value. string</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n     \"key\":\"same_key\",\n     \"value\":\"value Content\",\n }",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "201": [
          {
            "group": "201",
            "type": "String",
            "optional": false,
            "field": "key",
            "description": "<p>Key of value.</p>"
          },
          {
            "group": "201",
            "type": "String",
            "optional": false,
            "field": "value",
            "description": "<p>Value.</p>"
          },
          {
            "group": "201",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>static inform id</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "   HTTP/1.1 201 OK\n{\n    \"key\":\"same_key\",\n    \"value\":\"value Content\",\n    \"id\":1\",\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "400": [
          {
            "group": "400",
            "optional": false,
            "field": "array",
            "description": "<p>Array validation errors</p>"
          },
          {
            "group": "400",
            "optional": false,
            "field": "array.parameter",
            "description": "<p>parameter (key) and value of validation error</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Bad Request\n{\n     \"email\":\n         [\n             \"The email has already been taken.\",\n             ........\n         ],\n       ......\n }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./app/Http/Controllers/Admin/StaticInformController.php",
    "groupTitle": "Admin_Static_Inform"
  },
  {
    "type": "get",
    "url": "/api/admin/saerch/type_destination/create",
    "title": "Create new Type Destination",
    "name": "Create_Type_Destination",
    "group": "Admin_Type_Destination",
    "permission": [
      {
        "name": "Admin",
        "title": "Admin access",
        "description": "<p>Access only for users with admin rights</p>"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>Name of new Type Destination.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n  \"title\": 'new name'\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "201": [
          {
            "group": "201",
            "type": "Object[]",
            "optional": false,
            "field": "object.",
            "description": ""
          },
          {
            "group": "201",
            "type": "Number",
            "optional": false,
            "field": "object.id",
            "description": "<p>Type Destination id.</p>"
          },
          {
            "group": "201",
            "type": "String",
            "optional": false,
            "field": "object.title",
            "description": "<p>Type Destination title.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 201 Created\n{\n     \"id\":1,\n     \"title\":\"new title\",\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "400": [
          {
            "group": "400",
            "optional": false,
            "field": "Title",
            "description": "<p>Title validation iv failed.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"title\":\n         [\n             \"The title field is required.\",\n         ]\n}",
          "type": "json"
        }
      ]
    },
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "X-CSRF-TOKEN",
            "description": "<p>X-CSRF-TOKEN.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"X-CSRF-TOKEN\": \"Gnknh68NbfXCay7GZUIouJQtEO67BPgQ9QckOXCD\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./app/Http/Controllers/Admin/TypeDestinationsController.php",
    "groupTitle": "Admin_Type_Destination"
  },
  {
    "type": "delete",
    "url": "/api/admin/saerch/type_destination/:id",
    "title": "Delete Type Destination from id",
    "name": "Delete_Type_Destinations",
    "group": "Admin_Type_Destination",
    "permission": [
      {
        "name": "Admin",
        "title": "Admin access",
        "description": "<p>Access only for users with admin rights</p>"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": ":id",
            "description": "<p>Type Destination unique ID.</p>"
          }
        ]
      }
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not found",
          "type": "json"
        }
      ]
    },
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "X-CSRF-TOKEN",
            "description": "<p>X-CSRF-TOKEN.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"X-CSRF-TOKEN\": \"Gnknh68NbfXCay7GZUIouJQtEO67BPgQ9QckOXCD\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "205": [
          {
            "group": "205",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>Status of deleting. 1 - is delete.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "205 Reset Content:",
          "content": "{\n     \"status\":1\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./app/Http/Controllers/Admin/TypeDestinationsController.php",
    "groupTitle": "Admin_Type_Destination"
  },
  {
    "type": "get",
    "url": "/api/admin/saerch/type_destination/:id",
    "title": "Get Type Destination from id",
    "name": "Get_Type_Destination",
    "group": "Admin_Type_Destination",
    "permission": [
      {
        "name": "Admin",
        "title": "Admin access",
        "description": "<p>Access only for users with admin rights</p>"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": ":id",
            "description": "<p>Type Destination unique ID.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Type Destination id.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>Type Destination title.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n     \"id\":1,\n     \"title\":\"Name\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "404": [
          {
            "group": "404",
            "optional": false,
            "field": "Not",
            "description": "<p>found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not found",
          "type": "json"
        }
      ]
    },
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "X-CSRF-TOKEN",
            "description": "<p>X-CSRF-TOKEN.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"X-CSRF-TOKEN\": \"Gnknh68NbfXCay7GZUIouJQtEO67BPgQ9QckOXCD\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./app/Http/Controllers/Admin/TypeDestinationsController.php",
    "groupTitle": "Admin_Type_Destination"
  },
  {
    "type": "get",
    "url": "/api/admin/saerch/type_destination",
    "title": "Get all Type Destinations",
    "name": "Get_Type_Destinations",
    "group": "Admin_Type_Destination",
    "permission": [
      {
        "name": "Admin",
        "title": "Admin access",
        "description": "<p>Access only for users with admin rights</p>"
      }
    ],
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "array[]",
            "optional": false,
            "field": "array.",
            "description": ""
          },
          {
            "group": "200",
            "type": "Object[]",
            "optional": false,
            "field": "array.object",
            "description": ""
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "array.object.id",
            "description": "<p>Type Destination id.</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "array.object.title",
            "description": "<p>Type Destination title.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n[\n     {\n         \"id\":1,\n         \"title\":\"Money\"\n     },\n     {\n         \"id\":2,\n         \"title\":\"Volunteers\"\n     }\n     ....\n ]",
          "type": "json"
        }
      ]
    },
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "X-CSRF-TOKEN",
            "description": "<p>X-CSRF-TOKEN.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"X-CSRF-TOKEN\": \"Gnknh68NbfXCay7GZUIouJQtEO67BPgQ9QckOXCD\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./app/Http/Controllers/Admin/TypeDestinationsController.php",
    "groupTitle": "Admin_Type_Destination"
  },
  {
    "type": "put/patch",
    "url": "/api/admin/saerch/type_destination/:id",
    "title": "Update Type Destination from id",
    "name": "Update_Type_Destinations",
    "group": "Admin_Type_Destination",
    "permission": [
      {
        "name": "Admin",
        "title": "Admin access",
        "description": "<p>Access only for users with admin rights</p>"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": ":id",
            "description": "<p>Type Destination unique ID.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>Name of new Type Destination.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n  \"title\": 'new name'\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "201": [
          {
            "group": "201",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Type Destination id.</p>"
          },
          {
            "group": "201",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>Type Destination title.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n     \"id\":1,\n     \"title\":\"Name\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "400": [
          {
            "group": "400",
            "optional": false,
            "field": "Title",
            "description": "<p>Title validation iv failed.</p>"
          }
        ],
        "404": [
          {
            "group": "404",
            "optional": false,
            "field": "Title",
            "description": "<p>Type Destination not found</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"title\":\n         [\n             \"The title field is required.\"\n         ]\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not found",
          "type": "json"
        }
      ]
    },
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "X-CSRF-TOKEN",
            "description": "<p>X-CSRF-TOKEN.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"X-CSRF-TOKEN\": \"Gnknh68NbfXCay7GZUIouJQtEO67BPgQ9QckOXCD\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./app/Http/Controllers/Admin/TypeDestinationsController.php",
    "groupTitle": "Admin_Type_Destination"
  },
  {
    "type": "get",
    "url": "/api/password/forgot/:key",
    "title": "New password from mail linc",
    "name": "Change_Password_Forgot_",
    "group": "Authentication",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": ":key",
            "description": "<p>Key from url</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>New user password</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password_confirmation",
            "description": "<p>New user password confirmation</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n     \"password\":\"qqqqqqqq\",\n     \"password_confirmation\":\"qqqqqqqq\",\n}",
          "type": "json"
        }
      ]
    },
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "X-CSRF-TOKEN",
            "description": "<p>X-CSRF-TOKEN.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"X-CSRF-TOKEN\": \"Gnknh68NbfXCay7GZUIouJQtEO67BPgQ9QckOXCD\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "Bool",
            "optional": false,
            "field": "status",
            "description": "<p>Mail is send.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "   HTTP/1.1 200 OK\n{\n    \"status\":true,\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "400": [
          {
            "group": "400",
            "optional": false,
            "field": "array",
            "description": "<p>Array validation errors</p>"
          },
          {
            "group": "400",
            "optional": false,
            "field": "array.parameter",
            "description": "<p>parameter (key) and value of validation error</p>"
          },
          {
            "group": "400",
            "optional": false,
            "field": "key",
            "description": "<p>Key data validation</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Bad Request\n{\n     \"password\":\n         [\n             \"The password has already been taken.\",\n             ........\n         ],\n       ......\n }",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Bad Request\n[\n     'key':'invalid key or expiration date has expired'\n ]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./app/Http/Controllers/Auth/PasswordController.php",
    "groupTitle": "Authentication"
  },
  {
    "type": "post",
    "url": "/api/password/change",
    "title": "New user password(for using in profile)",
    "name": "Change_Password_Profile_",
    "group": "Authentication",
    "permission": [
      {
        "name": "User",
        "title": "User access",
        "description": "<p>Access only for authentication users</p>"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>New user password</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password_confirmation",
            "description": "<p>New user password confirmation</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n     \"password\":\"qqqqqqqq\",\n     \"password_confirmation\":\"qqqqqqqq\",\n}",
          "type": "json"
        }
      ]
    },
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "X-CSRF-TOKEN",
            "description": "<p>X-CSRF-TOKEN.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"X-CSRF-TOKEN\": \"Gnknh68NbfXCay7GZUIouJQtEO67BPgQ9QckOXCD\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "Bool",
            "optional": false,
            "field": "status",
            "description": "<p>Mail is send.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "   HTTP/1.1 200 OK\n{\n    \"status\":true,\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "400": [
          {
            "group": "400",
            "optional": false,
            "field": "array",
            "description": "<p>Array validation errors</p>"
          },
          {
            "group": "400",
            "optional": false,
            "field": "array.parameter",
            "description": "<p>parameter (key) and value of validation error</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Bad Request\n{\n     \"password\":\n         [\n             \"The password has already been taken.\",\n             ........\n         ],\n       ......\n }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./app/Http/Controllers/Auth/PasswordController.php",
    "groupTitle": "Authentication"
  },
  {
    "type": "get",
    "url": "/api/confirmation/registration/:key",
    "title": "Confirmation Users registration",
    "name": "Confirmation_Users_registration",
    "group": "Authentication",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": ":key",
            "description": "<p>User confirmation key</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "201": [
          {
            "group": "201",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>User token.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 201 OK\n {\n     \"token\":\"Gnknh68NbfXCay7GZUIouJQtEO67BPgQ9QckOXCD\",\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "404": [
          {
            "group": "404",
            "optional": false,
            "field": "user",
            "description": "<p>Not found</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n Not Found",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./app/Http/Controllers/Auth/RegisterController.php",
    "groupTitle": "Authentication"
  },
  {
    "type": "get",
    "url": "/api/password/forgot",
    "title": "When user forgot password. Send linc for change password to mail",
    "name": "Forgot_password",
    "group": "Authentication",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>User email. Required, email, max:255</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n     \"email\":\"test@test.tt\",\n}",
          "type": "json"
        }
      ]
    },
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "X-CSRF-TOKEN",
            "description": "<p>X-CSRF-TOKEN.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"X-CSRF-TOKEN\": \"Gnknh68NbfXCay7GZUIouJQtEO67BPgQ9QckOXCD\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "Bool",
            "optional": false,
            "field": "status",
            "description": "<p>Mail is send.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "   HTTP/1.1 200 OK\n{\n    \"status\":true,\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "400": [
          {
            "group": "400",
            "optional": false,
            "field": "array",
            "description": "<p>Array validation errors</p>"
          },
          {
            "group": "400",
            "optional": false,
            "field": "array.parameter",
            "description": "<p>parameter (key) and value of validation error</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Bad Request\n{\n     \"email\":\n         [\n             \"The email has already been taken.\",\n             ........\n         ],\n       ......\n }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./app/Http/Controllers/Auth/PasswordController.php",
    "groupTitle": "Authentication"
  },
  {
    "type": "get",
    "url": "/api/login",
    "title": "Login User",
    "name": "Login_User",
    "group": "Authentication",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>User email. Required, email, max:255</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>User password. Required, min:6</p>"
          },
          {
            "group": "Parameter",
            "type": "Bool",
            "optional": false,
            "field": "remember",
            "description": "<p>Remember User</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n     \"email\":\"test@test.tt\",\n     \"password\":\"qqqqqqqqq\",\n     \"remember\":1,\n}",
          "type": "json"
        }
      ]
    },
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "X-CSRF-TOKEN",
            "description": "<p>X-CSRF-TOKEN.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"X-CSRF-TOKEN\": \"Gnknh68NbfXCay7GZUIouJQtEO67BPgQ9QckOXCD\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "string",
            "optional": false,
            "field": "token",
            "description": "<p>If user login data is failed? return token</p>"
          }
        ],
        "201": [
          {
            "group": "201",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>User token.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 201 OK\n {\n     \"token\":\"Gnknh68NbfXCay7GZUIouJQtEO67BPgQ9QckOXCD\",\n}",
          "type": "json"
        },
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n     Ofa4aNDurJ5ihWDWhWxbkkCV04XZ4d8ej2E5I48L",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "400": [
          {
            "group": "400",
            "optional": false,
            "field": "array",
            "description": "<p>Array validation errors</p>"
          },
          {
            "group": "400",
            "optional": false,
            "field": "array.parameter",
            "description": "<p>parameter (key) and value of validation error</p>"
          }
        ],
        "403": [
          {
            "group": "403",
            "optional": false,
            "field": "error",
            "description": "<p>Error message</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Bad Request\n{\n     \"email\":\n         [\n             \"The email has already been taken.\",\n             ........\n         ],\n       ......\n }",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 403 Forbidden\n{\n     \"error\":\"The user is blocked\"\n }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./app/Http/Controllers/Auth/LoginController.php",
    "groupTitle": "Authentication"
  },
  {
    "type": "post",
    "url": "/api/logout",
    "title": "Logout User. After Logout user redirected to homepage (\"/\")",
    "name": "Logout_User",
    "permission": [
      {
        "name": "User",
        "title": "User access",
        "description": "<p>Access only for authentication users</p>"
      }
    ],
    "group": "Authentication",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "X-CSRF-TOKEN",
            "description": "<p>X-CSRF-TOKEN.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"X-CSRF-TOKEN\": \"Gnknh68NbfXCay7GZUIouJQtEO67BPgQ9QckOXCD\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Message.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n     Ok",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./app/Http/Controllers/Auth/LoginController.php",
    "groupTitle": "Authentication"
  },
  {
    "type": "get",
    "url": "/api/register",
    "title": "Register User",
    "name": "Register_User",
    "group": "Authentication",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>User nickname. Required, max:255</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>User email. Required, email, max:255</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>User password. Required, min:6</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password_confirmation",
            "description": "<p>User password_confirmation. Required, min:6</p>"
          },
          {
            "group": "Parameter",
            "type": "Bool",
            "optional": false,
            "field": "newsletter",
            "description": "<p>User receive newsletter. Required</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n     \"name\":\"Test New\",\n     \"email\":\"test@test.tt\",\n     \"password\":\"qqqqqqqqq\",\n     \"password_confirmation\":\"qqqqqqqqq\",\n     \"newsletter\":1,\n}",
          "type": "json"
        }
      ]
    },
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "X-CSRF-TOKEN",
            "description": "<p>X-CSRF-TOKEN.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"X-CSRF-TOKEN\": \"Gnknh68NbfXCay7GZUIouJQtEO67BPgQ9QckOXCD\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "201": [
          {
            "group": "201",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>User token.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 201 OK\n {\n     \"token\":\"Gnknh68NbfXCay7GZUIouJQtEO67BPgQ9QckOXCD\",\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "400": [
          {
            "group": "400",
            "optional": false,
            "field": "array",
            "description": "<p>Array validation errors</p>"
          },
          {
            "group": "400",
            "optional": false,
            "field": "array.parameter",
            "description": "<p>parameter (key) and value of validation error</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Bad Request\n{\n     \"email\":\n         [\n             \"The email has already been taken.\",\n             ........\n         ],\n       ......\n }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./app/Http/Controllers/Auth/RegisterController.php",
    "groupTitle": "Authentication"
  },
  {
    "type": "get",
    "url": "/api/base/token",
    "title": "X-CSRF-TOKEN",
    "name": "Get_X_CSRF_TOKEN",
    "group": "Base",
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "X-CSRF-TOKEN",
            "description": "<p>X-CSRF-TOKEN value.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "\"Gnknh68NbfXCay7GZUIouJQtEO67BPgQ9QckOXCD\"",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./app/Http/Controllers/BaseDataController.php",
    "groupTitle": "Base"
  },
  {
    "type": "get",
    "url": "/api/base/parameters",
    "title": "Get all selected parameters for search and create event",
    "name": "Search_Parameters",
    "group": "Base",
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "array[]",
            "optional": false,
            "field": "array.",
            "description": ""
          },
          {
            "group": "200",
            "type": "array[]",
            "optional": false,
            "field": "array.DemandType",
            "description": "<p>Demand Type parameters (&quot;Need&quot; from specification)</p>"
          },
          {
            "group": "200",
            "type": "array[]",
            "optional": false,
            "field": "array.DemandType.array",
            "description": ""
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "array.DemandType.array.id",
            "description": "<p>Demand Type id.</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "array.DemandType.array.title",
            "description": "<p>Demand Type title.</p>"
          },
          {
            "group": "200",
            "type": "array[]",
            "optional": false,
            "field": "array.TypeDestination",
            "description": "<p>Type Destination parameters (&quot;Type&quot; from specification)</p>"
          },
          {
            "group": "200",
            "type": "array[]",
            "optional": false,
            "field": "array.TypeDestination.array",
            "description": ""
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "array.TypeDestination.array.id",
            "description": "<p>Type Destination id.</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "array.TypeDestination.array.title",
            "description": "<p>Type Destination title.</p>"
          },
          {
            "group": "200",
            "type": "array[]",
            "optional": false,
            "field": "array.Purpose",
            "description": "<p>Purpose parameters</p>"
          },
          {
            "group": "200",
            "type": "array[]",
            "optional": false,
            "field": "array.Purpose.array",
            "description": ""
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "array.Purpose.array.id",
            "description": "<p>Purpose id.</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "array.Purpose.array.title",
            "description": "<p>Purpose title.</p>"
          },
          {
            "group": "200",
            "type": "array[]",
            "optional": false,
            "field": "array.Religion",
            "description": "<p>Religion parameters</p>"
          },
          {
            "group": "200",
            "type": "array[]",
            "optional": false,
            "field": "array.Religion.array",
            "description": ""
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "array.Religion.array.id",
            "description": "<p>Religion id.</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "array.Religion.array.title",
            "description": "<p>Religion title.</p>"
          },
          {
            "group": "200",
            "type": "array[]",
            "optional": false,
            "field": "array.PaymentFrequency",
            "description": "<p>Payment Frequency parameters</p>"
          },
          {
            "group": "200",
            "type": "array[]",
            "optional": false,
            "field": "array.PaymentFrequency.array",
            "description": ""
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "array.PaymentFrequency.array.id",
            "description": "<p>Payment Frequency id.</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "array.PaymentFrequency.array.title",
            "description": "<p>Payment Frequency title.</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "array.PaymentFrequency.array.name",
            "description": "<p>Payment Frequency name.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n     \"DemandType\":\n         [\n             {\n                 \"id\":7,\n                 \"title\":\"Money\",\n             },\n             {\n                 \"id\":8,\n                 \"title\":\"Volunteers\",\n             },\n             ..........\n         ],\n     \"TypeDestination\":\n         [\n             {\n                 \"id\":5,\n                 \"title\":\"Church\",\n             },\n             {\n                 \"id\":6,\n                 \"title\":\"Charity\",\n             },\n             .........\n         ],\n     \"Purpose\":\n         [\n             {\n                 \"id\":1,\n                 \"title\":\"Disaster Relief\",\n             },\n             {\n                 \"id\":2,\n                 \"title\":\"Children & Education\",\n             },\n             ......\n         ],\n     \"Religion\":\n         [\n             {\n                 \"id\":11,\n                 \"title\":\"Christianity\",\n             },\n             {\n                 \"id\":12,\n                 \"title\":\"Judiasm\",\n             },\n             .........\n         ],\n     \"PaymentFrequency\":\n         [\n              {\n                 \"id\":1,\n                 \"title\":\"Per\\/Week\",\n                 \"name\":\"per_week\",\n             },\n             {\n                 \"id\":2,\n                 \"title\":\"Per\\/Month\",\n                 \"name\":\"per_month\",\n             },\n             ..........\n         ]\n }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./app/Http/Controllers/BaseDataController.php",
    "groupTitle": "Base"
  },
  {
    "type": "put",
    "url": "/api/event/:event_id/media/:image_id/preview",
    "title": "Change preview of event",
    "name": "Change_preview_of_event",
    "group": "Event",
    "permission": [
      {
        "name": "User",
        "title": "User access",
        "description": "<p>Access only for authentication users</p>"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": ":image_id",
            "description": "<p>Id of image for new preview</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": ":event_id",
            "description": "<p>Id of event</p>"
          }
        ]
      }
    },
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "X-CSRF-TOKEN",
            "description": "<p>X-CSRF-TOKEN.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"X-CSRF-TOKEN\": \"Gnknh68NbfXCay7GZUIouJQtEO67BPgQ9QckOXCD\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "201": [
          {
            "group": "201",
            "type": "Bool",
            "optional": false,
            "field": "status",
            "description": "<p>Status of change preview of event (true - ok).</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "403": [
          {
            "group": "403",
            "optional": false,
            "field": "mess",
            "description": "<p>Access is denied. If the object does not belong to the user</p>"
          }
        ],
        "404": [
          {
            "group": "404",
            "optional": false,
            "field": "video",
            "description": "<p>Not found</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not found\n Image not foun",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not found\n Event not found",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 403 Forbidden\n     Forbidden",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./app/Http/Controllers/Event/MediaController.php",
    "groupTitle": "Event"
  },
  {
    "type": "put",
    "url": "/api/event/create",
    "title": "Create new Event",
    "name": "Create_Event",
    "group": "Event",
    "permission": [
      {
        "name": "User",
        "title": "User access",
        "description": "<p>Access only for authentication users</p>"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "type_destination",
            "description": "<p>Id of type destination (&quot;Type&quot; from specification). Required</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "purpose",
            "description": "<p>Id of purpose. Required</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "religion",
            "description": "<p>Id of religion. Required</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "country",
            "description": "<p>Id of country. Required</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "state",
            "description": "<p>Id of state. Required</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "city",
            "description": "<p>Id of city. Required</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "address",
            "description": "<p>Contact address for even. Required, min length 3, max length 255</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>Title of even. Required, min length 3, max length 255</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "short_story",
            "description": "<p>Short description of event. Required, min length 3, max length 255</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "story",
            "description": "<p>Description of event. Required, min length 10.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "finish_date",
            "description": "<p>Finish Date of event. Required.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n  \"type_destination\": 1\n  \"purpose\": 2\n  \"religion\": 0\n  \"country\": 2\n  \"state\": 0\n  \"city\": 1\n  \"title\": 'somme title'\n  \"address\": 'somme address'\n  \"short_story\": 'some text'\n  \"story\": 'some text'\n  \"finish_date\":\"2018-07-17\"\n}",
          "type": "json"
        }
      ]
    },
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "X-CSRF-TOKEN",
            "description": "<p>X-CSRF-TOKEN.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"X-CSRF-TOKEN\": \"Gnknh68NbfXCay7GZUIouJQtEO67BPgQ9QckOXCD\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "201": [
          {
            "group": "201",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>Payment Frequency name.</p>"
          },
          {
            "group": "201",
            "type": "String",
            "optional": false,
            "field": "story",
            "description": "<p>Payment Frequency name.</p>"
          },
          {
            "group": "201",
            "type": "String",
            "optional": false,
            "field": "short_story",
            "description": "<p>Payment Frequency name.</p>"
          },
          {
            "group": "201",
            "type": "String",
            "optional": false,
            "field": "address",
            "description": "<p>Payment Frequency name.</p>"
          },
          {
            "group": "201",
            "type": "Number",
            "optional": false,
            "field": "type_destination_id",
            "description": "<p>Payment Frequency name.</p>"
          },
          {
            "group": "201",
            "type": "Number",
            "optional": false,
            "field": "purpose_id",
            "description": "<p>Payment Frequency name.</p>"
          },
          {
            "group": "201",
            "type": "Number",
            "optional": false,
            "field": "religion_id",
            "description": "<p>Payment Frequency name.</p>"
          },
          {
            "group": "201",
            "type": "Number",
            "optional": false,
            "field": "country_id",
            "description": "<p>Payment Frequency name.</p>"
          },
          {
            "group": "201",
            "type": "Number",
            "optional": false,
            "field": "state_id",
            "description": "<p>Payment Frequency name.</p>"
          },
          {
            "group": "201",
            "type": "Number",
            "optional": false,
            "field": "city_id",
            "description": "<p>Payment Frequency name.</p>"
          },
          {
            "group": "201",
            "type": "Number",
            "optional": false,
            "field": "user_id",
            "description": "<p>Payment Frequency name.</p>"
          },
          {
            "group": "201",
            "type": "Date",
            "optional": false,
            "field": "updated_at",
            "description": "<p>Payment Frequency name.</p>"
          },
          {
            "group": "201",
            "type": "Date",
            "optional": false,
            "field": "created_at",
            "description": "<p>Payment Frequency name.</p>"
          },
          {
            "group": "201",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Payment Frequency name.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 201 OK\n {\n     \"title\":\"testing\",\n     \"story\":\"testing story\",\n     \"short_story\":\"short_story\",\n     \"address\":\"lalalala\",\n     \"type_destination_id\":\"1\",\n     \"purpose_id\":\"1\",\n     \"religion_id\":\"1\",\n     \"country_id\":\"1\",\n     \"state_id\":\"1\",\n     \"city_id\":\"1\",\n     \"user_id\":1,\n     \"finish_date\":\"2018-07-17\"\n     \"updated_at\":\"2018-05-15 11:41:00\",\n     \"created_at\":\"2018-05-15 11:41:00\",\n     \"id\":1\n }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "400": [
          {
            "group": "400",
            "optional": false,
            "field": "array",
            "description": "<p>Array validation errors</p>"
          },
          {
            "group": "400",
            "optional": false,
            "field": "array.parameter",
            "description": "<p>parameter (key) and value of validation error</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Bad Request\n{\n     \"city\":\n         [\n             \"The city field is required.\",\n             ......\n         ],\n     \"short_story\":\n         [\n             \"The short story field is required.\",\n             .....\n         ],\n     .....\n }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./app/Http/Controllers/Event/EventController.php",
    "groupTitle": "Event"
  },
  {
    "type": "put",
    "url": "/api/event/:event_id/demand/create",
    "title": "Create demand to event",
    "name": "Create_demand",
    "group": "Event",
    "permission": [
      {
        "name": "User",
        "title": "User access",
        "description": "<p>Access only for authentication users</p>"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": ":event_id",
            "description": "<p>Id of event</p>"
          },
          {
            "group": "Parameter",
            "type": "Array[]",
            "optional": false,
            "field": "money",
            "description": "<p>Array of array money data</p>"
          },
          {
            "group": "Parameter",
            "type": "Array[]",
            "optional": false,
            "field": "money.array",
            "description": "<p>Array of money data</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "money.array.summ",
            "description": "<p>Sum of needed many. Required</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "money.array.payment_frequency",
            "description": "<p>Id of payment frequency. Required</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "money.array.account",
            "description": "<p>PayPal account. Required</p>"
          },
          {
            "group": "Parameter",
            "type": "Array[]",
            "optional": false,
            "field": "volunteers",
            "description": "<p>Array of array volunteers data</p>"
          },
          {
            "group": "Parameter",
            "type": "Array[]",
            "optional": false,
            "field": "volunteers.array",
            "description": "<p>Array of volunteer data</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "volunteers.array.name",
            "description": "<p>Name of volunteer. Required</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "volunteers.array.count",
            "description": "<p>Count of volunteer. Required</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "volunteers.array.description",
            "description": "<p>Description of volunteer.</p>"
          },
          {
            "group": "Parameter",
            "type": "Bool",
            "optional": false,
            "field": "volunteers.array.special_skills",
            "description": "<p>Needed Special skills of volunteer.</p>"
          },
          {
            "group": "Parameter",
            "type": "Array[]",
            "optional": false,
            "field": "supplies",
            "description": "<p>Array of array supplies data</p>"
          },
          {
            "group": "Parameter",
            "type": "Array[]",
            "optional": false,
            "field": "supplies.array",
            "description": "<p>Array of supply data</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "supplies.array.name",
            "description": "<p>Name of supply. Required</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "supplies.array.count",
            "description": "<p>Count of supply. Required</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "supplies.array.description",
            "description": "<p>Description of supply details of parcel transfer. Required</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n  \"money\":\n     [\n         1 :\n             [\n                 'summ' : 10000,\n                 'payment_frequency' : 2\n                 'account' : '12345678932174'\n             ]\n     ],\n   \"volunteers\":\n     [\n         1 :\n             [\n                 'name' : 'Same name',\n                 'count' : 10,\n                 'special_skills' : 0\n                 'description' : \"Same description\"\n             ]\n         2 :\n             [\n                 name' : 'Same name',\n                 'count' : 15,\n                 'special_skills' : 1\n                 'description' : \"Same description\"\n             ]\n         ........\n     ],\n   \"supplies\":\n     [\n         1 :\n             [\n                 'name' : 'Same name',\n                 'count' : 10,\n                 'description' : \"Same description\"\n             ]\n         2 :\n             [\n                 name' : 'Same name',\n                 'count' : 15,\n                 'description' : \"Same description\"\n             ]\n         ........\n     ]\n   \"_token\" : \"Gnknh68NbfXCay7GZUIouJQtEO67BPgQ9QckOXCD\"\n}",
          "type": "json"
        }
      ]
    },
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "X-CSRF-TOKEN",
            "description": "<p>X-CSRF-TOKEN.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"X-CSRF-TOKEN\": \"Gnknh68NbfXCay7GZUIouJQtEO67BPgQ9QckOXCD\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "201": [
          {
            "group": "201",
            "type": "Bool",
            "optional": false,
            "field": "status",
            "description": "<p>Status of saving (true - ok).</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "400": [
          {
            "group": "400",
            "optional": false,
            "field": "array",
            "description": "<p>Array validation errors</p>"
          },
          {
            "group": "400",
            "optional": false,
            "field": "array.parameter",
            "description": "<p>parameter(key) and value of validation error</p>"
          }
        ],
        "403": [
          {
            "group": "403",
            "optional": false,
            "field": "mess",
            "description": "<p>Access is denied. If the object does not belong to the user</p>"
          }
        ],
        "404": [
          {
            "group": "404",
            "optional": false,
            "field": "event",
            "description": "<p>Not found</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Event not found",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Bad Request\n{\n     \"supplies\":\n         [\n             \"The videos field is required.\"\n         ]\n }",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 403 Forbidden\n     Forbidden",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./app/Http/Controllers/Event/EventController.php",
    "groupTitle": "Event"
  },
  {
    "type": "post",
    "url": "/api/event/:event_id/media/create",
    "title": "Create video and image to event",
    "name": "Create_media",
    "group": "Event",
    "permission": [
      {
        "name": "User",
        "title": "User access",
        "description": "<p>Access only for authentication users</p>"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": ":event_id",
            "description": "<p>Id of event</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "_token",
            "description": "<p>X-CSRF-TOKEN</p>"
          },
          {
            "group": "Parameter",
            "type": "Array[]",
            "optional": false,
            "field": "videos",
            "description": "<p>Array of array video data</p>"
          },
          {
            "group": "Parameter",
            "type": "Array[]",
            "optional": false,
            "field": "videos.array",
            "description": "<p>Array of video data</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "videos.array.url",
            "description": "<p>URL of video</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "videos.array.title",
            "description": "<p>Title of video</p>"
          },
          {
            "group": "Parameter",
            "type": "Array[]",
            "optional": false,
            "field": "images",
            "description": "<p>Array of array image data</p>"
          },
          {
            "group": "Parameter",
            "type": "Array[]",
            "optional": false,
            "field": "images.array",
            "description": "<p>Array of image data</p>"
          },
          {
            "group": "Parameter",
            "type": "File",
            "optional": false,
            "field": "images.array.file",
            "description": "<p>File of image</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "images.array.title",
            "description": "<p>Title of image</p>"
          },
          {
            "group": "Parameter",
            "type": "Bool",
            "optional": false,
            "field": "images.array.is_preview",
            "description": "<p>This image is preview of event</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n  \"videos\":\n     [\n         1 :\n             [\n                 'title' : 'Same title',\n                 'url' : 'Same URL'\n             ]\n         2 :\n             [\n                 'title' : 'Same title',\n                 'url' : 'Same URL'\n             ]\n         ........\n     ]\n   \"images\":\n     [\n         1 :\n             [\n                 'title' : 'Same title',\n                 'file' : 'file content'\n                 \"is_preview\": 0\n             ]\n         2 :\n             [\n                 'title' : 'Same title',\n                 'file' : 'file content'\n                 \"is_preview\": 1\n             ]\n         ........\n     ]\n   \"_token\" : \"Gnknh68NbfXCay7GZUIouJQtEO67BPgQ9QckOXCD\"\n}",
          "type": "json"
        }
      ]
    },
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "X-CSRF-TOKEN",
            "description": "<p>X-CSRF-TOKEN.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"X-CSRF-TOKEN\": \"Gnknh68NbfXCay7GZUIouJQtEO67BPgQ9QckOXCD\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "201": [
          {
            "group": "201",
            "type": "Bool",
            "optional": false,
            "field": "status",
            "description": "<p>Status of saving (true - ok).</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "400": [
          {
            "group": "400",
            "optional": false,
            "field": "array",
            "description": "<p>Array validation errors</p>"
          },
          {
            "group": "400",
            "optional": false,
            "field": "array.parameter",
            "description": "<p>parameter(key) and value of validation error</p>"
          }
        ],
        "404": [
          {
            "group": "404",
            "optional": false,
            "field": "event",
            "description": "<p>Not found</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Event not found",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Bad Request\n{\n     \"videos\":\n         [\n             \"The videos field is required.\"\n         ]\n }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./app/Http/Controllers/Event/MediaController.php",
    "groupTitle": "Event"
  },
  {
    "type": "delete",
    "url": "/api/event/:id",
    "title": "Delete  event",
    "name": "Delete_event",
    "group": "Event",
    "permission": [
      {
        "name": "User",
        "title": "User access",
        "description": "<p>Access only for authentication users</p>"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": ":id",
            "description": "<p>Id of event</p>"
          }
        ]
      }
    },
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "X-CSRF-TOKEN",
            "description": "<p>X-CSRF-TOKEN.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"X-CSRF-TOKEN\": \"Gnknh68NbfXCay7GZUIouJQtEO67BPgQ9QckOXCD\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "201": [
          {
            "group": "201",
            "type": "Bool",
            "optional": false,
            "field": "status",
            "description": "<p>Status of remove event (true - ok).</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "403": [
          {
            "group": "403",
            "optional": false,
            "field": "mess",
            "description": "<p>Access is denied. If the object does not belong to the user</p>"
          }
        ],
        "404": [
          {
            "group": "404",
            "optional": false,
            "field": "Event",
            "description": "<p>Not found</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Event not found",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 403 Forbidden\n     Forbidden",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./app/Http/Controllers/Event/EventController.php",
    "groupTitle": "Event"
  },
  {
    "type": "delete",
    "url": "/api/event/media/:id/image",
    "title": "Delete image of event",
    "name": "Delete_image",
    "group": "Event",
    "permission": [
      {
        "name": "User",
        "title": "User access",
        "description": "<p>Access only for authentication users</p>"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": ":id",
            "description": "<p>Id of image</p>"
          }
        ]
      }
    },
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "X-CSRF-TOKEN",
            "description": "<p>X-CSRF-TOKEN.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"X-CSRF-TOKEN\": \"Gnknh68NbfXCay7GZUIouJQtEO67BPgQ9QckOXCD\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "201": [
          {
            "group": "201",
            "type": "Bool",
            "optional": false,
            "field": "status",
            "description": "<p>Status of remove image (true - ok).</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "404": [
          {
            "group": "404",
            "optional": false,
            "field": "image",
            "description": "<p>Not found</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Media not found",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./app/Http/Controllers/Event/MediaController.php",
    "groupTitle": "Event"
  },
  {
    "type": "delete",
    "url": "/api/event/media/:id/video",
    "title": "Delete video of event",
    "name": "Delete_video",
    "group": "Event",
    "permission": [
      {
        "name": "User",
        "title": "User access",
        "description": "<p>Access only for authentication users</p>"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": ":id",
            "description": "<p>Id of video</p>"
          }
        ]
      }
    },
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "X-CSRF-TOKEN",
            "description": "<p>X-CSRF-TOKEN.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"X-CSRF-TOKEN\": \"Gnknh68NbfXCay7GZUIouJQtEO67BPgQ9QckOXCD\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "201": [
          {
            "group": "201",
            "type": "Bool",
            "optional": false,
            "field": "status",
            "description": "<p>Status of remove  video (true - ok).</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "404": [
          {
            "group": "404",
            "optional": false,
            "field": "image",
            "description": "<p>Not found</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Media not found",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./app/Http/Controllers/Event/MediaController.php",
    "groupTitle": "Event"
  },
  {
    "type": "get",
    "url": "/api/event/:id",
    "title": "Get Event data",
    "name": "Get_Event",
    "group": "Event",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": ":id",
            "description": "<p>Id event</p>"
          }
        ]
      }
    },
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "X-CSRF-TOKEN",
            "description": "<p>X-CSRF-TOKEN.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"X-CSRF-TOKEN\": \"Gnknh68NbfXCay7GZUIouJQtEO67BPgQ9QckOXCD\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Event id</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>Event title</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "story",
            "description": "<p>Event story</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "short_story",
            "description": "<p>Event short story</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "address",
            "description": "<p>Event address</p>"
          },
          {
            "group": "200",
            "type": "Bool",
            "optional": false,
            "field": "is_approved",
            "description": "<p>Event approved status(true - is approved)</p>"
          },
          {
            "group": "200",
            "type": "Bool",
            "optional": false,
            "field": "is_submit",
            "description": "<p>Event submit status(true - is submit)</p>"
          },
          {
            "group": "200",
            "type": "Bool",
            "optional": false,
            "field": "send_back",
            "description": "<p>Event is send back</p>"
          },
          {
            "group": "200",
            "type": "Date",
            "optional": false,
            "field": "created_at",
            "description": "<p>Event created at</p>"
          },
          {
            "group": "200",
            "type": "Date",
            "optional": false,
            "field": "finish_date",
            "description": "<p>Event finish date</p>"
          },
          {
            "group": "200",
            "type": "Array[]",
            "optional": false,
            "field": "user",
            "description": "<p>Event Author data</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "user.id",
            "description": "<p>Author user id</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "user.name",
            "description": "<p>Author name</p>"
          },
          {
            "group": "200",
            "type": "Boot",
            "optional": false,
            "field": "user.is_admin",
            "description": "<p>Author it is user-admin(true - is admin)</p>"
          },
          {
            "group": "200",
            "type": "Array[]",
            "optional": false,
            "field": "images",
            "description": "<p>Array Event image data</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "images.id",
            "description": "<p>Event image id</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "images.image_id",
            "description": "<p>Event image file id</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "images.is_preview",
            "description": "<p>Preview status of image</p>"
          },
          {
            "group": "200",
            "type": "Array[]",
            "optional": false,
            "field": "images.image",
            "description": "<p>Array Event image file data</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "images.image.id",
            "description": "<p>Event image file id</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "images.image.title",
            "description": "<p>Event image file title</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "images.image.url",
            "description": "<p>Event image file url</p>"
          },
          {
            "group": "200",
            "type": "Array[]",
            "optional": false,
            "field": "videos",
            "description": "<p>Array Event video data</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "videos.id",
            "description": "<p>Event video id</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "videos.video_id",
            "description": "<p>Event video file id</p>"
          },
          {
            "group": "200",
            "type": "Array[]",
            "optional": false,
            "field": "videos.video",
            "description": "<p>Array Event video file data</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "videos.video.id",
            "description": "<p>Event video file id</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "videos.video.title",
            "description": "<p>Event video file title</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "videos.video.url",
            "description": "<p>Event video file url</p>"
          },
          {
            "group": "200",
            "type": "Array[]",
            "optional": false,
            "field": "event_status",
            "description": "<p>Array Event status data</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "event_status.id",
            "description": "<p>Event status id</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "event_status.title",
            "description": "<p>Event status title</p>"
          },
          {
            "group": "200",
            "type": "Array[]",
            "optional": false,
            "field": "purpose",
            "description": "<p>Array Event purpose data</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "purpose.id",
            "description": "<p>Event purpose id</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "purpose.title",
            "description": "<p>Event purpose title</p>"
          },
          {
            "group": "200",
            "type": "Array[]",
            "optional": false,
            "field": "religion",
            "description": "<p>Array Event religion data</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "religion.id",
            "description": "<p>Event religion id</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "religion.title",
            "description": "<p>Event religion title</p>"
          },
          {
            "group": "200",
            "type": "Array[]",
            "optional": false,
            "field": "type_destination",
            "description": "<p>Array Event type destination data</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "type_destination.id",
            "description": "<p>Event type destination id</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "type_destination.title",
            "description": "<p>Event type destination title</p>"
          },
          {
            "group": "200",
            "type": "Array[]",
            "optional": false,
            "field": "country",
            "description": "<p>Array Event country data</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "country.id",
            "description": "<p>Event country id</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "country.name",
            "description": "<p>Event country name</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "country.sortname",
            "description": "<p>Event country sortname</p>"
          },
          {
            "group": "200",
            "type": "Array[]",
            "optional": false,
            "field": "state",
            "description": "<p>Array Event state data</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "state.id",
            "description": "<p>Event state id</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "state.name",
            "description": "<p>Event state name</p>"
          },
          {
            "group": "200",
            "type": "Array[]",
            "optional": false,
            "field": "city",
            "description": "<p>Array Event city data</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "city.id",
            "description": "<p>Event city id</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "city.name",
            "description": "<p>Event city name</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "city.lon",
            "description": "<p>Event city lon</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "city.lat",
            "description": "<p>Event city lat</p>"
          },
          {
            "group": "200",
            "type": "Array[]",
            "optional": false,
            "field": "demand",
            "description": "<p>Array Event demand data</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "demand.id",
            "description": "<p>Demand data id</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "demand.demand_type_id",
            "description": "<p>Demand type id</p>"
          },
          {
            "group": "200",
            "type": "Array[]",
            "optional": false,
            "field": "demand.demand_type",
            "description": "<p>Demand type data</p>"
          },
          {
            "group": "200",
            "type": "Array[]",
            "optional": false,
            "field": "demand.demand_type.id",
            "description": "<p>Id of demand type</p>"
          },
          {
            "group": "200",
            "type": "Array[]",
            "optional": false,
            "field": "demand.demand_type.title",
            "description": "<p>Name of demand type</p>"
          },
          {
            "group": "200",
            "type": "Array[]",
            "optional": false,
            "field": "demand.money",
            "description": "<p>Demand type array money data</p>"
          },
          {
            "group": "200",
            "type": "Array[]",
            "optional": false,
            "field": "demand.money.array",
            "description": "<p>Demand type array money data</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "demand.money.array.id",
            "description": "<p>Demand type money id</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "demand.money.array.event_demand_id",
            "description": "<p>Demand type money event demand id</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "demand.money.array.account",
            "description": "<p>Demand type money account</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "demand.money.array.summ",
            "description": "<p>Demand type money summ</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "demand.money.array.payment_frequency_id",
            "description": "<p>Demand type money payment frequency id</p>"
          },
          {
            "group": "200",
            "type": "Array[]",
            "optional": false,
            "field": "demand.volunteers",
            "description": "<p>Demand type array volunteers data</p>"
          },
          {
            "group": "200",
            "type": "Array[]",
            "optional": false,
            "field": "demand.volunteers.array",
            "description": "<p>Demand type array volunteers data</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "demand.volunteers.array.id",
            "description": "<p>Demand type volunteers id</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "demand.volunteers.array.event_demand_id",
            "description": "<p>Demand type volunteers event demand id</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "demand.volunteers.array.name",
            "description": "<p>Demand type volunteers name</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "demand.volunteers.array.count",
            "description": "<p>Demand type volunteers count</p>"
          },
          {
            "group": "200",
            "type": "Bool",
            "optional": false,
            "field": "demand.volunteers.array.special_skills",
            "description": "<p>Demand type volunteers need special skills</p>"
          },
          {
            "group": "200",
            "type": "Bool",
            "optional": false,
            "field": "demand.volunteers.array.description",
            "description": "<p>Demand type volunteers description</p>"
          },
          {
            "group": "200",
            "type": "Array[]",
            "optional": false,
            "field": "demand.volunteers.array.event_volunteer_response",
            "description": "<p>Demand type volunteers responses data array</p>"
          },
          {
            "group": "200",
            "type": "Array[]",
            "optional": false,
            "field": "demand.volunteers.array.event_volunteer_response.array",
            "description": "<p>Demand type volunteers response data array</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "demand.volunteers.array.event_volunteer_response.array.id",
            "description": "<p>Demand type volunteers response id</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "demand.volunteers.array.event_volunteer_response.array.event_volunteer_id",
            "description": "<p>Id of events volunteer</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "demand.volunteers.array.event_volunteer_response.array.user_id",
            "description": "<p>User Id of response</p>"
          },
          {
            "group": "200",
            "type": "Array[]",
            "optional": false,
            "field": "demand.supplies",
            "description": "<p>Demand type array supplies data</p>"
          },
          {
            "group": "200",
            "type": "Array[]",
            "optional": false,
            "field": "demand.supplies.array",
            "description": "<p>Demand type array supplies data</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "demand.supplies.array.id",
            "description": "<p>Demand type supplies id</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "demand.supplies.array.event_demand_id",
            "description": "<p>Demand type supplies event demand id</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "demand.supplies.array.name",
            "description": "<p>Demand type supplies name</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "demand.supplies.array.count",
            "description": "<p>Demand type supplies count</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "demand.supplies.array.delivery_options_id",
            "description": "<p>Demand type supplies delivery options id</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "demand.supplies.array.description",
            "description": "<p>Demand type supplies description</p>"
          },
          {
            "group": "200",
            "type": "Array[]",
            "optional": false,
            "field": "demand.supplies.array.event_supply_response",
            "description": "<p>Demand type supplies response</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "demand.supplies.array.event_supply_response.id",
            "description": "<p>Demand type supplies response id</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "demand.supplies.array.event_supply_response.event_supply_id",
            "description": "<p>Demand type supplies response supply id</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "demand.supplies.array.event_supply_response.user_id",
            "description": "<p>Demand type supplies response user id</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "demand.supplies.array.event_supply_response.count",
            "description": "<p>Demand type supplies response count</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "demand.supplies.array.event_supply_response.parcel_status",
            "description": "<p>Demand type supplies response parcel status</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "   HTTP/1.1 200 OK\n{\n    \"id\":7,\n    \"title\":\"testing\",\n    \"story\":\"testing story\",\n    \"short_story\":\"short_story\",\n    \"address\":\"lalalala\",\n    \"is_approved\":1,\n    \"is_submit\":1,\n    \"created_at\":\"2018-05-21 06:55:34\",\n    \"finish_date\":null,\n    \"send_back\":0,\n    \"images\":\n        [\n            {\n                \"id\":4,\n                \"image_id\":2,\n                \"is_preview\":1,\n                \"image\":\n                    {\n                        \"id\":2,\n                        \"title\":\"test2\",\n                        \"url\":\"storage\\/images\\/YuJPIpEwRN19wQoPctCVDVs1CkZ1mLFuHeDc7tfp.jpeg\",\n                    },\n                    ......\n            },\n            ......\n        ],\n    \"videos\":\n        [\n            {\n                \"id\":1,\n                \"video_id\":13,\n                \"video\":\n                    {\n                        \"id\":13,\n                        \"title\":\"test1\",\n                        \"url\":\"http:\\/\\/apidocjs.com\\/\",\n                    },\n                    ......\n            },\n            ........\n        ]\n    \"user\":\n        {\n            \"id\":6,\n            \"name\":\"Test_user\",\n            \"is_admin\":0,\n        },\n    \"event_status\":\n        {\n            \"id\":6,\n            \"name\":\"trending\",\n            \"title\":\"Trending\",\n        },\n    \"purpose\":\n        {\n            \"id\":6,\n            \"title\":\"Children & Education\",\n        },\n    \"religion\":\n        {\n            \"id\":6,\n            \"title\":\"Christianity\",\n        },\n    \"type_destination\":\n        {\n            \"id\":6,\n            \"title\":\"Charity\",\n        },\n    \"country\":\n        {\n            \"id\":6,\n            \"sortname\":\"AF\",\n            \"name\":\"Afghanistan\",\n        },\n    \"state\":\n        {\n            \"id\":6,\n            \"name\":\"Andaman and Nicobar Islands\",\n        },\n    \"city\":\n        {\n            \"id\":6,\n            \"name\":\"Kondapalle\",\n            \"lon\":\"82.2719086\",\n            \"lat\":\"17.562337\"\n        },\n    \"demand\":\n        [\n            {\n                \"id\":1,\n                \"demand_type_id\":2,\n                \"demand_type\":\n                    {\n                        \"id\":2\n                        \"title\":\"Volunteers\",\n                    },\n                \"money\":\n                    [\n                        {\n                            \"id\":2,\n                            \"event_demand_id\":1,\n                            \"account\":\"635168132101651\",\n                            \"summ\":1230000,\n                            \"payment_frequency_id\":5\n                        }\n                    ],\n                \"volunteers\":\n                    [\n                        {\n                            \"id\":2,\n                            \"event_demand_id\":1,\n                            \"name\":\"test 2\",\n                            \"count\":22,\n                            \"special_skills\":0,\n                            \"description\":null,\n                            \"event_volunteer_response\":\n                                [\n                                    {\n                                        \"id\":4,\n                                        \"event_volunteer_id\":2,\n                                        \"user_id\":1,\n                                    },\n                                    ......\n                                ]\n                        },\n                        .......\n                     ],\n                \"supplies\":\n                    [\n                        {\n                            \"id\":1,\n                            \"event_demand_id\":2,\n                            \"name\":\"Test 1\",\n                            \"count\":2,\n                            \"delivery_id\":0,\n                            \"description\":null,\n                            \"event_supply_response\":\n                                [\n                                    {\n                                        \"id\":1,\n                                        \"event_supply_id\":1,\n                                        \"user_id\":2,\n                                        \"count\":2,\n                                        \"parcel_status\":\"pending\",\n                                    },\n                                    .........\n                                ]\n                        },\n                        ........\n                    ],\n            }\n        ]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "404": [
          {
            "group": "404",
            "optional": false,
            "field": "event",
            "description": "<p>Not found</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Event Not Found",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./app/Http/Controllers/Event/EventController.php",
    "groupTitle": "Event"
  },
  {
    "type": "put",
    "url": "/api/event/:id/submit",
    "title": "Submit Event to approve admin",
    "name": "Submit_Event",
    "group": "Event",
    "permission": [
      {
        "name": "User",
        "title": "User access",
        "description": "<p>Access only for authentication users</p>"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": ":id",
            "description": "<p>Id of event</p>"
          }
        ]
      }
    },
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "X-CSRF-TOKEN",
            "description": "<p>X-CSRF-TOKEN.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"X-CSRF-TOKEN\": \"Gnknh68NbfXCay7GZUIouJQtEO67BPgQ9QckOXCD\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "201": [
          {
            "group": "201",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Event id.</p>"
          },
          {
            "group": "201",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>Event title</p>"
          },
          {
            "group": "201",
            "type": "String",
            "optional": false,
            "field": "story",
            "description": "<p>Event story</p>"
          },
          {
            "group": "201",
            "type": "String",
            "optional": false,
            "field": "short_story",
            "description": "<p>Event short story</p>"
          },
          {
            "group": "201",
            "type": "String",
            "optional": false,
            "field": "address",
            "description": "<p>Event address</p>"
          },
          {
            "group": "201",
            "type": "Number",
            "optional": false,
            "field": "type_destination_id",
            "description": "<p>Event type description id</p>"
          },
          {
            "group": "201",
            "type": "Number",
            "optional": false,
            "field": "purpose_id",
            "description": "<p>Event purpose id</p>"
          },
          {
            "group": "201",
            "type": "Number",
            "optional": false,
            "field": "religion_id",
            "description": "<p>Event religion id</p>"
          },
          {
            "group": "201",
            "type": "Number",
            "optional": false,
            "field": "country_id",
            "description": "<p>Event country id</p>"
          },
          {
            "group": "201",
            "type": "Number",
            "optional": false,
            "field": "state_id",
            "description": "<p>Event state id</p>"
          },
          {
            "group": "201",
            "type": "Number",
            "optional": false,
            "field": "city_id",
            "description": "<p>Event city id</p>"
          },
          {
            "group": "201",
            "type": "Number",
            "optional": false,
            "field": "user_id",
            "description": "<p>Event user id</p>"
          },
          {
            "group": "201",
            "type": "Number",
            "optional": false,
            "field": "status_id",
            "description": "<p>Event status id</p>"
          },
          {
            "group": "201",
            "type": "bool",
            "optional": false,
            "field": "is_approved",
            "description": "<p>Event status approve</p>"
          },
          {
            "group": "201",
            "type": "bool",
            "optional": false,
            "field": "is_submit",
            "description": "<p>Event status submit</p>"
          },
          {
            "group": "201",
            "type": "Date",
            "optional": false,
            "field": "updated_at",
            "description": "<p>Event updated date</p>"
          },
          {
            "group": "201",
            "type": "Date",
            "optional": false,
            "field": "created_at",
            "description": "<p>Event created date</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 201 OK\n {\n     \"id\":1,\n     \"title\":\"testing\",\n     \"story\":\"testing story\",\n     \"short_story\":\"short_story\",\n     \"address\":\"lalalala\",\n     \"type_destination_id\":5,\n     \"purpose_id\":10,\n     \"religion_id\":6,\n     \"country_id\":1,\n     \"state_id\":1,\n     \"city_id\":1,\n     \"user_id\":1,\n     \"event_status_id\":0,\n     \"is_approved\":0,\n     \"is_submit\":true,\n     \"created_at\":\"2018-05-15 12:26:13\",\n     \"updated_at\":\"2018-05-15 12:30:12\"\n }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "403": [
          {
            "group": "403",
            "optional": false,
            "field": "mess",
            "description": "<p>Access is denied. If the object does not belong to the user</p>"
          }
        ],
        "404": [
          {
            "group": "404",
            "optional": false,
            "field": "event",
            "description": "<p>Not found</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not found",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 403 Forbidden\n     Forbidden",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./app/Http/Controllers/User/EventController.php",
    "groupTitle": "Event"
  },
  {
    "type": "put",
    "url": "/api/event/:id/update",
    "title": "Update new Event",
    "name": "Update_Event",
    "group": "Event",
    "permission": [
      {
        "name": "User",
        "title": "User access",
        "description": "<p>Access only for authentication users</p>"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "type_destination",
            "description": "<p>Id of type destination (&quot;Type&quot; from specification). Required</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "purpose",
            "description": "<p>Id of purpose. Required</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "religion",
            "description": "<p>Id of religion. Required</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "country",
            "description": "<p>Id of country. Required</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "state",
            "description": "<p>Id of state. Required</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "city",
            "description": "<p>Id of city. Required</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "address",
            "description": "<p>Contact address for even. Required, min length 3, max length 255</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>Title of even. Required, min length 3, max length 255</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "short_story",
            "description": "<p>Short description of event. Required, min length 3, max length 255</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "story",
            "description": "<p>Description of event. Required, min length 10.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n  \"type_destination\": 1\n  \"purpose\": 2\n  \"religion\": 0\n  \"country\": 2\n  \"state\": 0\n  \"city\": 1\n  \"title\": 'somme title'\n  \"address\": 'somme address'\n  \"short_story\": 'some text'\n  \"story\": 'some text'\n  \"\n}",
          "type": "json"
        }
      ]
    },
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "X-CSRF-TOKEN",
            "description": "<p>X-CSRF-TOKEN.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"X-CSRF-TOKEN\": \"Gnknh68NbfXCay7GZUIouJQtEO67BPgQ9QckOXCD\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "201": [
          {
            "group": "201",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>Payment Frequency name.</p>"
          },
          {
            "group": "201",
            "type": "String",
            "optional": false,
            "field": "story",
            "description": "<p>Payment Frequency name.</p>"
          },
          {
            "group": "201",
            "type": "String",
            "optional": false,
            "field": "short_story",
            "description": "<p>Payment Frequency name.</p>"
          },
          {
            "group": "201",
            "type": "String",
            "optional": false,
            "field": "address",
            "description": "<p>Payment Frequency name.</p>"
          },
          {
            "group": "201",
            "type": "Number",
            "optional": false,
            "field": "type_destination_id",
            "description": "<p>Payment Frequency name.</p>"
          },
          {
            "group": "201",
            "type": "Number",
            "optional": false,
            "field": "purpose_id",
            "description": "<p>Payment Frequency name.</p>"
          },
          {
            "group": "201",
            "type": "Number",
            "optional": false,
            "field": "religion_id",
            "description": "<p>Payment Frequency name.</p>"
          },
          {
            "group": "201",
            "type": "Number",
            "optional": false,
            "field": "country_id",
            "description": "<p>Payment Frequency name.</p>"
          },
          {
            "group": "201",
            "type": "Number",
            "optional": false,
            "field": "state_id",
            "description": "<p>Payment Frequency name.</p>"
          },
          {
            "group": "201",
            "type": "Number",
            "optional": false,
            "field": "city_id",
            "description": "<p>Payment Frequency name.</p>"
          },
          {
            "group": "201",
            "type": "Number",
            "optional": false,
            "field": "user_id",
            "description": "<p>Payment Frequency name.</p>"
          },
          {
            "group": "201",
            "type": "Date",
            "optional": false,
            "field": "updated_at",
            "description": "<p>Payment Frequency name.</p>"
          },
          {
            "group": "201",
            "type": "Date",
            "optional": false,
            "field": "created_at",
            "description": "<p>Payment Frequency name.</p>"
          },
          {
            "group": "201",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Payment Frequency name.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 201 OK\n {\n     \"title\":\"testing\",\n     \"story\":\"testing story\",\n     \"short_story\":\"short_story\",\n     \"address\":\"lalalala\",\n     \"type_destination_id\":\"1\",\n     \"purpose_id\":\"1\",\n     \"religion_id\":\"1\",\n     \"country_id\":\"1\",\n     \"state_id\":\"1\",\n     \"city_id\":\"1\",\n     \"user_id\":1,\n     \"updated_at\":\"2018-05-15 11:41:00\",\n     \"created_at\":\"2018-05-15 11:41:00\",\n     \"id\":1\n }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "400": [
          {
            "group": "400",
            "optional": false,
            "field": "array",
            "description": "<p>Array validation errors</p>"
          },
          {
            "group": "400",
            "optional": false,
            "field": "array.parameter",
            "description": "<p>parameter (key) and value of validation error</p>"
          }
        ],
        "403": [
          {
            "group": "403",
            "optional": false,
            "field": "mess",
            "description": "<p>Access is denied. If the object does not belong to the user</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Bad Request\n{\n     \"city\":\n         [\n             \"The city field is required.\",\n             ......\n         ],\n     \"short_story\":\n         [\n             \"The short story field is required.\",\n             .....\n         ],\n     .....\n }",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 403 Forbidden\n     Forbidden",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./app/Http/Controllers/Event/EventController.php",
    "groupTitle": "Event"
  },
  {
    "type": "put",
    "url": "/api/event/media/:id/update_image",
    "title": "Update image of event",
    "name": "Update_Image",
    "group": "Event",
    "permission": [
      {
        "name": "User",
        "title": "User access",
        "description": "<p>Access only for authentication users</p>"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": ":id",
            "description": "<p>Id of image</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>New title of image</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n  \"title\": \"New title\"\n}",
          "type": "json"
        }
      ]
    },
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "X-CSRF-TOKEN",
            "description": "<p>X-CSRF-TOKEN.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"X-CSRF-TOKEN\": \"Gnknh68NbfXCay7GZUIouJQtEO67BPgQ9QckOXCD\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "201": [
          {
            "group": "201",
            "type": "Bool",
            "optional": false,
            "field": "status",
            "description": "<p>Status of update title of image (true - ok).</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "400": [
          {
            "group": "400",
            "optional": false,
            "field": "message",
            "description": "<p>No value title</p>"
          }
        ],
        "403": [
          {
            "group": "403",
            "optional": false,
            "field": "mess",
            "description": "<p>Access is denied. If the object does not belong to the user</p>"
          }
        ],
        "404": [
          {
            "group": "404",
            "optional": false,
            "field": "image",
            "description": "<p>Not found</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Media not found",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Bad Request\n Bad Request",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 403 Forbidden\n     Forbidden",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./app/Http/Controllers/Event/MediaController.php",
    "groupTitle": "Event"
  },
  {
    "type": "put",
    "url": "/api/event/media/:id/update_video",
    "title": "Update video of event",
    "name": "Update_Video",
    "group": "Event",
    "permission": [
      {
        "name": "User",
        "title": "User access",
        "description": "<p>Access only for authentication users</p>"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": ":id",
            "description": "<p>Id of video</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>New title of video</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n  \"title\": \"New title\"\n}",
          "type": "json"
        }
      ]
    },
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "X-CSRF-TOKEN",
            "description": "<p>X-CSRF-TOKEN.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"X-CSRF-TOKEN\": \"Gnknh68NbfXCay7GZUIouJQtEO67BPgQ9QckOXCD\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "201": [
          {
            "group": "201",
            "type": "Bool",
            "optional": false,
            "field": "status",
            "description": "<p>Status of update title of video (true - ok).</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "400": [
          {
            "group": "400",
            "optional": false,
            "field": "message",
            "description": "<p>No value title</p>"
          }
        ],
        "403": [
          {
            "group": "403",
            "optional": false,
            "field": "mess",
            "description": "<p>Access is denied. If the object does not belong to the user</p>"
          }
        ],
        "404": [
          {
            "group": "404",
            "optional": false,
            "field": "video",
            "description": "<p>Not found</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Media not found",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Bad Request\n Bad Request",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 403 Forbidden\n     Forbidden",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./app/Http/Controllers/Event/MediaController.php",
    "groupTitle": "Event"
  },
  {
    "type": "put",
    "url": "/api/event/:event_id/demand/update",
    "title": "Update demand of event",
    "name": "Update_demand",
    "group": "Event",
    "permission": [
      {
        "name": "User",
        "title": "User access",
        "description": "<p>Access only for authentication users</p>"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": ":event_id",
            "description": "<p>Id of event</p>"
          },
          {
            "group": "Parameter",
            "type": "Array[]",
            "optional": false,
            "field": "money",
            "description": "<p>Array of array money data</p>"
          },
          {
            "group": "Parameter",
            "type": "Array[]",
            "optional": false,
            "field": "money.remove.arrayArray",
            "description": "<p>of money id for remove</p>"
          },
          {
            "group": "Parameter",
            "type": "Array[]",
            "optional": false,
            "field": "money.add.array",
            "description": "<p>Array of money id for add</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "money.add.array.summ",
            "description": "<p>Sum of need mоney. Required</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "money.add.array.payment_frequency",
            "description": "<p>Id of payment frequency. Required</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "money.add.array.account",
            "description": "<p>PayPal account. Required</p>"
          },
          {
            "group": "Parameter",
            "type": "Array[]",
            "optional": false,
            "field": "money.update.array",
            "description": "<p>Array of money id for update</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "money.update.array.id",
            "description": "<p>Id of updated mоney data. Required</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "money.update.array.summ",
            "description": "<p>Sum of updated mоney. Required</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "money.update.array.payment_frequency",
            "description": "<p>Id of payment frequency. Required</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "money.update.array.account",
            "description": "<p>PayPal account. Required</p>"
          },
          {
            "group": "Parameter",
            "type": "Array[]",
            "optional": false,
            "field": "volunteers",
            "description": "<p>Array of array volunteers data</p>"
          },
          {
            "group": "Parameter",
            "type": "Array[]",
            "optional": false,
            "field": "volunteers.remove.array",
            "description": "<p>Array of volunteer id for remove</p>"
          },
          {
            "group": "Parameter",
            "type": "Array[]",
            "optional": false,
            "field": "volunteers.add.array",
            "description": "<p>Array of volunteer id for add</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "volunteers.add.array.name",
            "description": "<p>Name of volunteer. Required</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "volunteers.add.array.count",
            "description": "<p>Count of volunteer. Required</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "volunteers.add.array.description",
            "description": "<p>Description of volunteer.</p>"
          },
          {
            "group": "Parameter",
            "type": "Bool",
            "optional": false,
            "field": "volunteers.add.array.special_skills",
            "description": "<p>Needed Special skills of volunteer.</p>"
          },
          {
            "group": "Parameter",
            "type": "Array[]",
            "optional": false,
            "field": "volunteers.update.array",
            "description": "<p>Array of volunteer id for update</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "volunteers.update.array.name",
            "description": "<p>Name of volunteer. Required</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "volunteers.update.array.count",
            "description": "<p>Count of volunteer. Required</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "volunteers.update.array.id",
            "description": "<p>Id of volunteer. Required</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "volunteers.update.array.description",
            "description": "<p>Description of volunteer.</p>"
          },
          {
            "group": "Parameter",
            "type": "Bool",
            "optional": false,
            "field": "volunteers.update.array.special_skills",
            "description": "<p>Needed Special skills of volunteer.</p>"
          },
          {
            "group": "Parameter",
            "type": "Array[]",
            "optional": false,
            "field": "supplies",
            "description": "<p>Array of array supplies data</p>"
          },
          {
            "group": "Parameter",
            "type": "Array[]",
            "optional": false,
            "field": "supplies.remove.array",
            "description": "<p>Array of supply id for remove</p>"
          },
          {
            "group": "Parameter",
            "type": "Array[]",
            "optional": false,
            "field": "supplies.add.array",
            "description": "<p>Array of supply id for add</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "supplies.add.array.name",
            "description": "<p>Name of supply. Required</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "supplies.add.array.count",
            "description": "<p>Count of supply. Required</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "supplies.add.array.description",
            "description": "<p>Description of supply details of parcel transfer. Required</p>"
          },
          {
            "group": "Parameter",
            "type": "Array[]",
            "optional": false,
            "field": "supplies.update.array",
            "description": "<p>Array of supply id for update</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "supplies.update.array.name",
            "description": "<p>Name of supply. Required</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "supplies.update.array.count",
            "description": "<p>Count of supply. Required</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "supplies.update.array.id",
            "description": "<p>Id of supply. Required</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "supplies.update.array.description",
            "description": "<p>Description of supply details of parcel transfer. Required</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n  \"money\":\n     [\n         \"remove\":\n             [\n                 1\n             ]\n         \"add\":\n             [\n                 1 :\n                     [\n                         'summ' : 10000,\n                         'payment_frequency' : 2\n                         'account' : '12345678932174'\n                     ]\n             ]\n         \"update\":\n             [\n                 1 :\n                     [\n                         'id' : 1,\n                         'summ' : 10000,\n                         'payment_frequency' : 2\n                     ]\n     ],\n \"volunteers\":\n     [\n         \"remove\":\n             [\n                 1,\n                 2,\n                 .....\n             ]\n         \"add\":\n             [\n                 1 :\n                     [\n                         'name' : 'Same name',\n                         'count' : 10,\n                         'special_skills' : 1\n                         'description' : \"Same description\"\n                     ]\n                 2 :\n                     [\n                         'name' : 'Same name',\n                         'count' : 15,\n                         'special_skills' : 1\n                         'description' : \"Same description\"\n                     ]\n                 ........\n             ]\n         \"update\":\n             [\n                 1 :\n                     [\n                         'id' : 1,\n                         'name' : 'Same name',\n                         'count' : 10\n                     ]\n                 2 :\n                     [\n                         'id' : 2,\n                         'name' : 'Same name',\n                         'count' : 15\n                     ]\n                 ........\n             ]\n     ],\n \"supplies\":\n     [\n         \"remove\":\n             [\n                 1,\n                 2,\n                 .....\n             ]\n         \"add\":\n             [\n                 1 :\n                     [\n                         'name' : 'Same name',\n                         'count' : 10,\n                         'description' : \"Same description\"\n                     ]\n                 2 :\n                     [\n                         name' : 'Same name',\n                         'count' : 15,\n                         'description' : \"Same description\"\n                     ]\n                 ........\n             ]\n         \"update\":\n             [\n                 1 :\n                     [\n                         'id' : 1,\n                         'name' : 'Same name',\n                         'count' : 10\n                         'description' : \"Same description\"\n                     ]\n                 2 :\n                     [\n                         'id' : 2,\n                         'name' : 'Same name',\n                         'count' : 15\n                         'description' : \"Same description\"\n                     ]\n                 ........\n             ]\n     ]\n   \"_token\" : \"Gnknh68NbfXCay7GZUIouJQtEO67BPgQ9QckOXCD\"\n}",
          "type": "json"
        }
      ]
    },
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "X-CSRF-TOKEN",
            "description": "<p>X-CSRF-TOKEN.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"X-CSRF-TOKEN\": \"Gnknh68NbfXCay7GZUIouJQtEO67BPgQ9QckOXCD\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "201": [
          {
            "group": "201",
            "type": "Bool",
            "optional": false,
            "field": "status",
            "description": "<p>Status of saving (true - ok).</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "400": [
          {
            "group": "400",
            "optional": false,
            "field": "array",
            "description": "<p>Array validation errors</p>"
          },
          {
            "group": "400",
            "optional": false,
            "field": "array.parameter",
            "description": "<p>parameter(key) and value of validation error</p>"
          }
        ],
        "403": [
          {
            "group": "403",
            "optional": false,
            "field": "mess",
            "description": "<p>Access is denied. If the object does not belong to the user</p>"
          }
        ],
        "404": [
          {
            "group": "404",
            "optional": false,
            "field": "event",
            "description": "<p>Not found</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Event not found",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Bad Request\n{\n     \"supplies\":\n         [\n             \"The videos field is required.\"\n         ]\n }",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 403 Forbidden\n     Forbidden",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./app/Http/Controllers/Event/EventController.php",
    "groupTitle": "Event"
  },
  {
    "type": "get",
    "url": "/api/admin/user/chat",
    "title": "Get All Admins Chats",
    "name": "Admins_Chats",
    "group": "Event_Chat",
    "permission": [
      {
        "name": "Admin",
        "title": "Admin access",
        "description": "<p>Access only for users with admin rights</p>"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "page",
            "description": "<p>Number of page. Default 1</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n     \"page\":2\n}",
          "type": "json"
        }
      ]
    },
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "X-CSRF-TOKEN",
            "description": "<p>X-CSRF-TOKEN.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"X-CSRF-TOKEN\": \"Gnknh68NbfXCay7GZUIouJQtEO67BPgQ9QckOXCD\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "current_page",
            "description": "<p>Number of the page.</p>"
          },
          {
            "group": "200",
            "type": "Array[]",
            "optional": false,
            "field": "data",
            "description": "<p>Page data of chats.</p>"
          },
          {
            "group": "200",
            "type": "Array[]",
            "optional": false,
            "field": "data.array",
            "description": "<p>Data array of massage (event id for chat).</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "data.array.id",
            "description": "<p>Message id</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "data.array.event_id",
            "description": "<p>Event id</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "data.array.user_id",
            "description": "<p>User id</p>"
          },
          {
            "group": "200",
            "type": "Bool",
            "optional": false,
            "field": "data.array.admin_send",
            "description": "<p>Message sender. If TRUE - is send of Admin, else it is send user</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "data.array.content",
            "description": "<p>Message content</p>"
          },
          {
            "group": "200",
            "type": "Bool",
            "optional": false,
            "field": "data.array.is_read",
            "description": "<p>Reading status</p>"
          },
          {
            "group": "200",
            "type": "Date",
            "optional": false,
            "field": "data.array.created_at",
            "description": "<p>created data and time</p>"
          },
          {
            "group": "200",
            "type": "Array[]",
            "optional": false,
            "field": "data.array.event",
            "description": "<p>Event data array</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "data.array.event.id",
            "description": "<p>Event id</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "data.array.event.name",
            "description": "<p>Event name</p>"
          },
          {
            "group": "200",
            "type": "Array[]",
            "optional": false,
            "field": "data.array.user",
            "description": "<p>User data array</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "data.array.user.id",
            "description": "<p>User id</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "data.array.user.name",
            "description": "<p>User name</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "data.array.count",
            "description": "<p>Count of all message from the chat</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "data.array.unread",
            "description": "<p>Count unread message from the chat</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "first_page_url",
            "description": "<p>Url of the first page.</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "last_page_url",
            "description": "<p>Url of the last page.</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "next_page_url",
            "description": "<p>Url of the next page.</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "path",
            "description": "<p>Base URL of request.</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "from",
            "description": "<p>Number of start element.</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "to",
            "description": "<p>Number of end element.</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "total",
            "description": "<p>Count of all elements.</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "per_page",
            "description": "<p>Elements on page.</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "last_page",
            "description": "<p>Number of the last page.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "  HTTP/1.1 200 OK\n{\n   \"first_page_url\":\"http:\\/\\/charity.test\\/api\\/event\\/user\\/chat?page=1\",\n   \"current_page\":1,\n   \"from\":1,\n   \"last_page\":1,\n   \"last_page_url\":\"http:\\/\\/charity.test\\/api\\/event\\/user\\/chat?page=1\",\n   \"next_page_url\":null,\n   \"path\":\"http:\\/\\/charity.test\\/api\\/event\\/user\\/chat?\",\n   \"per_page\":20,\n   \"prev_page_url\":null,\n   \"to\":2,\n   \"total\":2,\n   \"data\":\n       {\n           \"6\":\n               {\n                   \"id\":7,\n                   \"event_id\":6,\n                   \"user_id\":6,\n                   \"admin_send\":0,\n                   \"content\":\"test\",\n                   \"is_read\":0,\n                   \"created_at\":\"2018-09-15 13:09:15\",\n                   \"updated_at\":\"2018-09-15 13:09:15\",\n                   \"event\":\n                       {\n                           \"id\":6,\n                           \"title\":\"testing\"\n                       },\n                   \"user\":\n                       {\n                           \"id\":6,\n                           \"name\":\"Test_user\"\n                       },\n                   \"count\":3,\n                   \"unread\":2\n               },\n           .......\n        }\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./app/Http/Controllers/Event/ChatController.php",
    "groupTitle": "Event_Chat"
  },
  {
    "type": "get",
    "url": "/api/admin/:event_id/chat/user",
    "title": "Get message of the chat from event for Admin",
    "name": "Admins_Event_Chat",
    "group": "Event_Chat",
    "permission": [
      {
        "name": "Admin",
        "title": "Admin access",
        "description": "<p>Access only for users with admin rights</p>"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "event_id",
            "description": "<p>Event id</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "page",
            "description": "<p>Number of page. Default 1</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n     \"page\":2\n}",
          "type": "json"
        }
      ]
    },
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "X-CSRF-TOKEN",
            "description": "<p>X-CSRF-TOKEN.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"X-CSRF-TOKEN\": \"Gnknh68NbfXCay7GZUIouJQtEO67BPgQ9QckOXCD\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "current_page",
            "description": "<p>Number of the page.</p>"
          },
          {
            "group": "200",
            "type": "Array[]",
            "optional": false,
            "field": "data",
            "description": "<p>Page data of chats.</p>"
          },
          {
            "group": "200",
            "type": "Array[]",
            "optional": false,
            "field": "data.array",
            "description": "<p>Data array of massage.</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "data.array.id",
            "description": "<p>Message id</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "data.array.event_id",
            "description": "<p>Event id</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "data.array.user_id",
            "description": "<p>User id</p>"
          },
          {
            "group": "200",
            "type": "Bool",
            "optional": false,
            "field": "data.array.admin_send",
            "description": "<p>Message sender. If TRUE - is send of Admin, else it is send user</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "data.array.content",
            "description": "<p>Message content</p>"
          },
          {
            "group": "200",
            "type": "Bool",
            "optional": false,
            "field": "data.array.is_read",
            "description": "<p>Reading status</p>"
          },
          {
            "group": "200",
            "type": "Date",
            "optional": false,
            "field": "data.array.created_at",
            "description": "<p>created data and time</p>"
          },
          {
            "group": "200",
            "type": "Array[]",
            "optional": false,
            "field": "data.array.event",
            "description": "<p>Event data array</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "data.array.event.id",
            "description": "<p>Event id</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "data.array.event.name",
            "description": "<p>Event name</p>"
          },
          {
            "group": "200",
            "type": "Array[]",
            "optional": false,
            "field": "data.array.user",
            "description": "<p>User data array</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "data.array.user.id",
            "description": "<p>User id</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "data.array.user.name",
            "description": "<p>User name</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "first_page_url",
            "description": "<p>Url of the first page.</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "last_page_url",
            "description": "<p>Url of the last page.</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "next_page_url",
            "description": "<p>Url of the next page.</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "path",
            "description": "<p>Base URL of request.</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "from",
            "description": "<p>Number of start element.</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "to",
            "description": "<p>Number of end element.</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "total",
            "description": "<p>Count of all elements.</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "per_page",
            "description": "<p>Elements on page.</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "last_page",
            "description": "<p>Number of the last page.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "  HTTP/1.1 200 OK\n{\n   \"first_page_url\":\"http:\\/\\/charity.test\\/api\\/event\\/7\\/chat\\/user?page=1\",\n   \"current_page\":1,\n   \"from\":1,\n   \"last_page\":1,\n   \"last_page_url\":\"http:\\/\\/charity.test\\/api\\/event\\/7\\/chat\\/user?page=1\",\n   \"next_page_url\":null,\n   \"path\":\"http:\\/\\/charity.test\\/api\\/event\\/7\\/chat\\/user?\",\n   \"per_page\":10,\n   \"prev_page_url\":null,\n   \"to\":5,\n   \"total\":5,\n   \"data\":\n       {\n           \"2\":\n               {\n                   \"id\":4,\n                   \"event_id\":7,\n                   \"user_id\":6,\n                   \"admin_send\":0,\n                   \"content\":\"123546\",\n                   \"is_read\":1,\n                   \"created_at\":\"2018-05-16 13:17:25\",\n                   \"updated_at\":\"2018-05-16 13:17:25\",\n                   \"event\":\n                       {\n                           \"id\":7,\n                           \"title\":\"testing\"\n                       },\n                   \"user\":\n                       {\n                           \"id\":6,\n                           \"name\":\"Test_user\"\n                       }\n               },\n               ........\n       }\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./app/Http/Controllers/Event/ChatController.php",
    "groupTitle": "Event_Chat"
  },
  {
    "type": "put",
    "url": "/api/event/:event_id/chat/create",
    "title": "Create new message to event chat",
    "name": "Create_message",
    "group": "Event_Chat",
    "permission": [
      {
        "name": "User",
        "title": "User access",
        "description": "<p>Access only for authentication users</p>"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": ":event_id",
            "description": "<p>Id of event</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Message content</p>"
          }
        ]
      }
    },
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "X-CSRF-TOKEN",
            "description": "<p>X-CSRF-TOKEN.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"X-CSRF-TOKEN\": \"Gnknh68NbfXCay7GZUIouJQtEO67BPgQ9QckOXCD\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "201": [
          {
            "group": "201",
            "type": "array[]",
            "optional": false,
            "field": "messages",
            "description": "<p>Array of all message in chat.</p>"
          },
          {
            "group": "201",
            "type": "Object[]",
            "optional": false,
            "field": "messages.message",
            "description": "<p>Message data</p>"
          },
          {
            "group": "201",
            "type": "String",
            "optional": false,
            "field": "messages.message.id",
            "description": "<p>Message id</p>"
          },
          {
            "group": "201",
            "type": "String",
            "optional": false,
            "field": "messages.message.event_id",
            "description": "<p>Chat from event of id</p>"
          },
          {
            "group": "201",
            "type": "Number",
            "optional": false,
            "field": "messages.message.user_id",
            "description": "<p>User id for messaging</p>"
          },
          {
            "group": "201",
            "type": "bool",
            "optional": false,
            "field": "messages.message.admin_send",
            "description": "<p>Message is from admin</p>"
          },
          {
            "group": "201",
            "type": "String",
            "optional": false,
            "field": "messages.message.content",
            "description": "<p>Messages content</p>"
          },
          {
            "group": "201",
            "type": "bool",
            "optional": false,
            "field": "messages.message.is_read",
            "description": "<p>Messages status of reading</p>"
          },
          {
            "group": "201",
            "type": "Date",
            "optional": false,
            "field": "messages.message.created_at",
            "description": "<p>Message updated date</p>"
          },
          {
            "group": "201",
            "type": "Date",
            "optional": false,
            "field": "messages.message.updated_at",
            "description": "<p>Message created date</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 201 OK\n [\n     {\n         \"id\":1,\n         \"event_id\":1,\n         \"user_id\":1,\n         \"admin_send\":0,         //This message send user\n         \"content\":\"test\",\n         \"is_read\":0,\n         \"created_at\":\"2018-05-15 13:06:52\",\n         \"updated_at\":\"2018-05-15 13:06:52\"\n     },\n     {\n         \"id\":2,\n         \"event_id\":1,\n         \"user_id\":1,\n         \"admin_send\":1,         //This message send admin\n         \"content\":\"test\",\n         \"is_read\":0,\n         \"created_at\":\"2018-05-15 13:07:14\",\n         \"updated_at\":\"2018-05-15 13:07:14\"\n     }\n ]",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "400": [
          {
            "group": "400",
            "optional": false,
            "field": "array",
            "description": "<p>Array validation errors</p>"
          },
          {
            "group": "400",
            "optional": false,
            "field": "array.parameter",
            "description": "<p>parameter(key) and value of validation error</p>"
          }
        ],
        "404": [
          {
            "group": "404",
            "optional": false,
            "field": "event",
            "description": "<p>Not found</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Event not found",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Bad Request\n{\n     \"message\":\n         [\n             \"The message field is required.\"\n         ]\n }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./app/Http/Controllers/Event/ChatController.php",
    "groupTitle": "Event_Chat"
  },
  {
    "type": "get",
    "url": "/api/event/user/chat",
    "title": "Get All Users Chats",
    "name": "Users_Chats",
    "group": "Event_Chat",
    "permission": [
      {
        "name": "User",
        "title": "User access",
        "description": "<p>Access only for authentication users</p>"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "page",
            "description": "<p>Number of page. Default 1</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n     \"page\":2\n}",
          "type": "json"
        }
      ]
    },
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "X-CSRF-TOKEN",
            "description": "<p>X-CSRF-TOKEN.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"X-CSRF-TOKEN\": \"Gnknh68NbfXCay7GZUIouJQtEO67BPgQ9QckOXCD\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "current_page",
            "description": "<p>Number of the page.</p>"
          },
          {
            "group": "200",
            "type": "Array[]",
            "optional": false,
            "field": "data",
            "description": "<p>Page data of chats.</p>"
          },
          {
            "group": "200",
            "type": "Array[]",
            "optional": false,
            "field": "data.array",
            "description": "<p>Data array of massage (event id for chat).</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "data.array.id",
            "description": "<p>Message id</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "data.array.event_id",
            "description": "<p>Event id</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "data.array.user_id",
            "description": "<p>User id</p>"
          },
          {
            "group": "200",
            "type": "Bool",
            "optional": false,
            "field": "data.array.admin_send",
            "description": "<p>Message sender. If TRUE - is send of Admin, else it is send user</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "data.array.content",
            "description": "<p>Message content</p>"
          },
          {
            "group": "200",
            "type": "Bool",
            "optional": false,
            "field": "data.array.is_read",
            "description": "<p>Reading status</p>"
          },
          {
            "group": "200",
            "type": "Date",
            "optional": false,
            "field": "data.array.created_at",
            "description": "<p>created data and time</p>"
          },
          {
            "group": "200",
            "type": "Array[]",
            "optional": false,
            "field": "data.array.event",
            "description": "<p>Event data array</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "data.array.event.id",
            "description": "<p>Event id</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "data.array.event.name",
            "description": "<p>Event name</p>"
          },
          {
            "group": "200",
            "type": "Array[]",
            "optional": false,
            "field": "data.array.user",
            "description": "<p>User data array</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "data.array.user.id",
            "description": "<p>User id</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "data.array.user.name",
            "description": "<p>User name</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "data.array.count",
            "description": "<p>Count of all message from the chat</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "data.array.unread",
            "description": "<p>Count unread message from the chat</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "first_page_url",
            "description": "<p>Url of the first page.</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "last_page_url",
            "description": "<p>Url of the last page.</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "next_page_url",
            "description": "<p>Url of the next page.</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "path",
            "description": "<p>Base URL of request.</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "from",
            "description": "<p>Number of start element.</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "to",
            "description": "<p>Number of end element.</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "total",
            "description": "<p>Count of all elements.</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "per_page",
            "description": "<p>Elements on page.</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "last_page",
            "description": "<p>Number of the last page.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "  HTTP/1.1 200 OK\n{\n   \"first_page_url\":\"http:\\/\\/charity.test\\/api\\/event\\/user\\/chat?page=1\",\n   \"current_page\":1,\n   \"from\":1,\n   \"last_page\":1,\n   \"last_page_url\":\"http:\\/\\/charity.test\\/api\\/event\\/user\\/chat?page=1\",\n   \"next_page_url\":null,\n   \"path\":\"http:\\/\\/charity.test\\/api\\/event\\/user\\/chat?\",\n   \"per_page\":20,\n   \"prev_page_url\":null,\n   \"to\":2,\n   \"total\":2,\n   \"data\":\n       {\n           \"6\":\n               {\n                   \"id\":7,\n                   \"event_id\":6,\n                   \"user_id\":6,\n                   \"admin_send\":0,\n                   \"content\":\"test\",\n                   \"is_read\":0,\n                   \"created_at\":\"2018-09-15 13:09:15\",\n                   \"updated_at\":\"2018-09-15 13:09:15\",\n                   \"event\":\n                       {\n                           \"id\":6,\n                           \"title\":\"testing\"\n                       },\n                   \"user\":\n                       {\n                           \"id\":6,\n                           \"name\":\"Test_user\"\n                       },\n                   \"count\":3,\n                   \"unread\":2\n               },\n           .......\n        }\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./app/Http/Controllers/Event/ChatController.php",
    "groupTitle": "Event_Chat"
  },
  {
    "type": "get",
    "url": "/api/event/:event_id/chat/user",
    "title": "Get message of the chat from event",
    "name": "Users_Event_Chat",
    "group": "Event_Chat",
    "permission": [
      {
        "name": "User",
        "title": "User access",
        "description": "<p>Access only for authentication users</p>"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "event_id",
            "description": "<p>Event id</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "page",
            "description": "<p>Number of page. Default 1</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n     \"page\":2\n}",
          "type": "json"
        }
      ]
    },
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "X-CSRF-TOKEN",
            "description": "<p>X-CSRF-TOKEN.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"X-CSRF-TOKEN\": \"Gnknh68NbfXCay7GZUIouJQtEO67BPgQ9QckOXCD\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "current_page",
            "description": "<p>Number of the page.</p>"
          },
          {
            "group": "200",
            "type": "Array[]",
            "optional": false,
            "field": "data",
            "description": "<p>Page data of chats.</p>"
          },
          {
            "group": "200",
            "type": "Array[]",
            "optional": false,
            "field": "data.array",
            "description": "<p>Data array of massage.</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "data.array.id",
            "description": "<p>Message id</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "data.array.event_id",
            "description": "<p>Event id</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "data.array.user_id",
            "description": "<p>User id</p>"
          },
          {
            "group": "200",
            "type": "Bool",
            "optional": false,
            "field": "data.array.admin_send",
            "description": "<p>Message sender. If TRUE - is send of Admin, else it is send user</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "data.array.content",
            "description": "<p>Message content</p>"
          },
          {
            "group": "200",
            "type": "Bool",
            "optional": false,
            "field": "data.array.is_read",
            "description": "<p>Reading status</p>"
          },
          {
            "group": "200",
            "type": "Date",
            "optional": false,
            "field": "data.array.created_at",
            "description": "<p>created data and time</p>"
          },
          {
            "group": "200",
            "type": "Array[]",
            "optional": false,
            "field": "data.array.event",
            "description": "<p>Event data array</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "data.array.event.id",
            "description": "<p>Event id</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "data.array.event.name",
            "description": "<p>Event name</p>"
          },
          {
            "group": "200",
            "type": "Array[]",
            "optional": false,
            "field": "data.array.user",
            "description": "<p>User data array</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "data.array.user.id",
            "description": "<p>User id</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "data.array.user.name",
            "description": "<p>User name</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "first_page_url",
            "description": "<p>Url of the first page.</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "last_page_url",
            "description": "<p>Url of the last page.</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "next_page_url",
            "description": "<p>Url of the next page.</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "path",
            "description": "<p>Base URL of request.</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "from",
            "description": "<p>Number of start element.</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "to",
            "description": "<p>Number of end element.</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "total",
            "description": "<p>Count of all elements.</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "per_page",
            "description": "<p>Elements on page.</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "last_page",
            "description": "<p>Number of the last page.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "  HTTP/1.1 200 OK\n{\n   \"first_page_url\":\"http:\\/\\/charity.test\\/api\\/event\\/7\\/chat\\/user?page=1\",\n   \"current_page\":1,\n   \"from\":1,\n   \"last_page\":1,\n   \"last_page_url\":\"http:\\/\\/charity.test\\/api\\/event\\/7\\/chat\\/user?page=1\",\n   \"next_page_url\":null,\n   \"path\":\"http:\\/\\/charity.test\\/api\\/event\\/7\\/chat\\/user?\",\n   \"per_page\":10,\n   \"prev_page_url\":null,\n   \"to\":5,\n   \"total\":5,\n   \"data\":\n       {\n           \"2\":\n               {\n                   \"id\":4,\n                   \"event_id\":7,\n                   \"user_id\":6,\n                   \"admin_send\":0,\n                   \"content\":\"123546\",\n                   \"is_read\":1,\n                   \"created_at\":\"2018-05-16 13:17:25\",\n                   \"updated_at\":\"2018-05-16 13:17:25\",\n                   \"event\":\n                       {\n                           \"id\":7,\n                           \"title\":\"testing\"\n                       },\n                   \"user\":\n                       {\n                           \"id\":6,\n                           \"name\":\"Test_user\"\n                       }\n               },\n               ........\n       }\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./app/Http/Controllers/Event/ChatController.php",
    "groupTitle": "Event_Chat"
  },
  {
    "type": "put",
    "url": "/api/event/:event_id/comment",
    "title": "Create new Comment to event",
    "name": "Create_Comment",
    "group": "Event_Comment",
    "permission": [
      {
        "name": "User",
        "title": "User access",
        "description": "<p>Access only for authentication users</p>"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": ":event_id",
            "description": "<p>Id of event for commenting</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "content",
            "description": "<p>Comment content. Required</p>"
          },
          {
            "group": "Parameter",
            "type": "Array[]",
            "optional": false,
            "field": "images",
            "description": "<p>Array of array image data</p>"
          },
          {
            "group": "Parameter",
            "type": "Array[]",
            "optional": false,
            "field": "images.array",
            "description": "<p>Array of image data</p>"
          },
          {
            "group": "Parameter",
            "type": "File",
            "optional": false,
            "field": "images.array.",
            "description": "<p>File of image</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n  \"content\": \"Coment content\"\n  \"images\":\n     [\n         1 :\n             [\n                 'file' : 'file content'\n             ]\n         2 :\n             [\n                 'file' : 'file content'\n             ]\n         ........\n}",
          "type": "json"
        }
      ]
    },
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "X-CSRF-TOKEN",
            "description": "<p>X-CSRF-TOKEN.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"X-CSRF-TOKEN\": \"Gnknh68NbfXCay7GZUIouJQtEO67BPgQ9QckOXCD\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "201": [
          {
            "group": "201",
            "type": "Number",
            "optional": false,
            "field": "current_page",
            "description": "<p>Number of the page.</p>"
          },
          {
            "group": "201",
            "type": "Array[]",
            "optional": false,
            "field": "data",
            "description": "<p>Page data of comments.</p>"
          },
          {
            "group": "201",
            "type": "Array[]",
            "optional": false,
            "field": "data.array",
            "description": "<p>Data array of comment.</p>"
          },
          {
            "group": "201",
            "type": "Number",
            "optional": false,
            "field": "data.array.id",
            "description": "<p>Comment id.</p>"
          },
          {
            "group": "201",
            "type": "Number",
            "optional": false,
            "field": "data.array.event_id",
            "description": "<p>Event id.</p>"
          },
          {
            "group": "201",
            "type": "Number",
            "optional": false,
            "field": "data.array.user_id",
            "description": "<p>User id.</p>"
          },
          {
            "group": "201",
            "type": "Number",
            "optional": false,
            "field": "data.array.content",
            "description": "<p>Content of the comment.</p>"
          },
          {
            "group": "201",
            "type": "Number",
            "optional": false,
            "field": "data.array.created_at",
            "description": "<p>Content create date.</p>"
          },
          {
            "group": "201",
            "type": "Number",
            "optional": false,
            "field": "data.array.like_count",
            "description": "<p>Count of the comments likes.</p>"
          },
          {
            "group": "201",
            "type": "Array[]",
            "optional": false,
            "field": "data.array.like",
            "description": "<p>Array of the likes data.</p>"
          },
          {
            "group": "201",
            "type": "Array[]",
            "optional": false,
            "field": "data.array.like.array",
            "description": "<p>Array of the like data.</p>"
          },
          {
            "group": "201",
            "type": "Number",
            "optional": false,
            "field": "data.array.like.array.id",
            "description": "<p>Id of the like.</p>"
          },
          {
            "group": "201",
            "type": "Number",
            "optional": false,
            "field": "data.array.like.array.user_id",
            "description": "<p>User Id of the like.</p>"
          },
          {
            "group": "201",
            "type": "Number",
            "optional": false,
            "field": "data.array.like.array.event_comment_id",
            "description": "<p>Comment Id of the like.</p>"
          },
          {
            "group": "201",
            "type": "Array[]",
            "optional": false,
            "field": "data.array.like.array.user",
            "description": "<p>User data of the like.</p>"
          },
          {
            "group": "201",
            "type": "Number",
            "optional": false,
            "field": "data.array.like.array.user.id",
            "description": "<p>User id of the like.</p>"
          },
          {
            "group": "201",
            "type": "String",
            "optional": false,
            "field": "data.array.like.array.user.name",
            "description": "<p>User name of the like.</p>"
          },
          {
            "group": "201",
            "type": "Bool",
            "optional": false,
            "field": "data.array.like.array.user.is_admin",
            "description": "<p>User is_admin of the like.</p>"
          },
          {
            "group": "201",
            "type": "Array[]",
            "optional": false,
            "field": "data.array.user",
            "description": "<p>User data of the comment.</p>"
          },
          {
            "group": "201",
            "type": "Number",
            "optional": false,
            "field": "data.array.user.id",
            "description": "<p>User id of the comment.</p>"
          },
          {
            "group": "201",
            "type": "String",
            "optional": false,
            "field": "data.array.user.name",
            "description": "<p>User name of the comment.</p>"
          },
          {
            "group": "201",
            "type": "Bool",
            "optional": false,
            "field": "data.array.user.is_admin",
            "description": "<p>User is_admin of the comment.</p>"
          },
          {
            "group": "201",
            "type": "Array[]",
            "optional": false,
            "field": "data.array.user.image",
            "description": "<p>Array of data images.</p>"
          },
          {
            "group": "201",
            "type": "Array[]",
            "optional": false,
            "field": "data.array.user.image.array",
            "description": "<p>Data array of the image.</p>"
          },
          {
            "group": "201",
            "type": "Number",
            "optional": false,
            "field": "data.array.user.image.array.id",
            "description": "<p>Id of the image.</p>"
          },
          {
            "group": "201",
            "type": "Number",
            "optional": false,
            "field": "data.array.user.image.array.event_comment_id",
            "description": "<p>Comment id of the image.</p>"
          },
          {
            "group": "201",
            "type": "Number",
            "optional": false,
            "field": "data.array.user.image.array.image_id",
            "description": "<p>File id of the image.</p>"
          },
          {
            "group": "201",
            "type": "Array[]",
            "optional": false,
            "field": "data.array.user.image.array.image",
            "description": "<p>Data array of the image file.</p>"
          },
          {
            "group": "201",
            "type": "Number",
            "optional": false,
            "field": "data.array.user.image.array.image.id",
            "description": "<p>Id of the image file.</p>"
          },
          {
            "group": "201",
            "type": "String",
            "optional": false,
            "field": "data.array.user.image.array.image.url",
            "description": "<p>Url of the image file.</p>"
          },
          {
            "group": "201",
            "type": "String",
            "optional": false,
            "field": "first_page_url",
            "description": "<p>Url of the first page.</p>"
          },
          {
            "group": "201",
            "type": "String",
            "optional": false,
            "field": "last_page_url",
            "description": "<p>Url of the last page.</p>"
          },
          {
            "group": "201",
            "type": "String",
            "optional": false,
            "field": "next_page_url",
            "description": "<p>Url of the next page.</p>"
          },
          {
            "group": "201",
            "type": "String",
            "optional": false,
            "field": "path",
            "description": "<p>Base URL of request.</p>"
          },
          {
            "group": "201",
            "type": "Number",
            "optional": false,
            "field": "from",
            "description": "<p>Number of start element.</p>"
          },
          {
            "group": "201",
            "type": "Number",
            "optional": false,
            "field": "to",
            "description": "<p>Number of end element.</p>"
          },
          {
            "group": "201",
            "type": "Number",
            "optional": false,
            "field": "total",
            "description": "<p>Count of all elements.</p>"
          },
          {
            "group": "201",
            "type": "Number",
            "optional": false,
            "field": "per_page",
            "description": "<p>Elements on page.</p>"
          },
          {
            "group": "201",
            "type": "Number",
            "optional": false,
            "field": "last_page",
            "description": "<p>Number of the last page.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "  HTTP/1.1 201 OK\n{\n   \"current_page\":1,\n   \"data\":\n       [\n           {\n               \"id\":12,\n               \"event_id\":7,\n               \"user_id\":6,\n               \"content\":\"Test Comment\",\n               \"created_at\":\"2018-05-21 07:58:07\",\n               \"like_count\":0,\n               \"like\":[],\n               \"user\":\n                   {\n                       \"id\":6,\n                       \"name\":\"Test_user\",\n                       \"is_admin\":0\n                   },\n               \"image\":[]\n           },\n           {\n               \"id\":11,\n               \"event_id\":7,\n               \"user_id\":6,\n               \"content\":\"Test Comment\",\n               \"created_at\":\"2018-05-21 07:55:54\",\n               \"like_count\":3,\n               \"like\":\n                   [\n                       {\n                           \"id\":1,\n                           \"user_id\":6,\n                           \"event_comment_id\":11,\n                           \"user\":\n                               {\n                                   \"id\":6,\n                                   \"name\":\"Test_user\",\n                                   \"is_admin\":0,\n                               }\n                       },\n                       {\n                           \"id\":2,\n                           \"user_id\":1,\n                           \"event_comment_id\":11,\n                           \"user\":\n                               {\n                                   \"id\":1,\n                                   \"name\":\"Test User\",\n                                   \"is_admin\":0,\n                               }\n                       },\n                       ......\n                   ],\n               \"user\":\n                   {\n                       \"id\":6,\n                       \"name\":\"Test_user\",\n                       \"is_admin\":0\n                   },\n               \"image\":\n                   [\n                       {\n                           \"id\":1,\n                           \"event_comment_id\":11,\n                           \"image_id\":2,\n                           \"image\":\n                               {\n                                   \"id\":2,\n                                   \"url\":\"storage\\/images\\/YuJPIpEwRN19wQoPctCVDVs1CkZ1mLFuHeDc7tfp.jpeg\",\n                               }\n                       }\n                   ]\n           },\n           ........\n       ],\n   \"first_page_url\":\"http:\\/\\/charity.test\\/api\\/event\\/7\\/comment?page=1\",\n   \"from\":1,\n   \"last_page\":2,\n   \"last_page_url\":\"http:\\/\\/charity.test\\/api\\/event\\/7\\/comment?page=2\",\n   \"next_page_url\":\"http:\\/\\/charity.test\\/api\\/event\\/7\\/comment?page=2\",\n   \"path\":\"http:\\/\\/charity.test\\/api\\/event\\/7\\/comment\",\n   \"per_page\":10,\n   \"prev_page_url\":null,\n   \"to\":10,\n   \"total\":12\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "400": [
          {
            "group": "400",
            "optional": false,
            "field": "array",
            "description": "<p>Array validation errors</p>"
          },
          {
            "group": "400",
            "optional": false,
            "field": "array.parameter",
            "description": "<p>parameter (key) and value of validation error</p>"
          }
        ],
        "404": [
          {
            "group": "404",
            "optional": false,
            "field": "event",
            "description": "<p>Not found</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Bad Request\n{\n     \"content\":\n         [\n             \"The city field is required.\",\n             ......\n         ],\n     .....\n }",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n     Event not found",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./app/Http/Controllers/Event/CommentController.php",
    "groupTitle": "Event_Comment"
  },
  {
    "type": "delete",
    "url": "/api/like/:like_id/remove",
    "title": "Dislike comment",
    "name": "Dislike",
    "group": "Event_Comment",
    "permission": [
      {
        "name": "User",
        "title": "User access",
        "description": "<p>Access only for authentication users</p>"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": ":like_id",
            "description": "<p>Id of like</p>"
          }
        ]
      }
    },
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "X-CSRF-TOKEN",
            "description": "<p>X-CSRF-TOKEN.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"X-CSRF-TOKEN\": \"Gnknh68NbfXCay7GZUIouJQtEO67BPgQ9QckOXCD\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "201": [
          {
            "group": "201",
            "type": "Number",
            "optional": false,
            "field": "status",
            "description": "<p>Status of remove like.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "  HTTP/1.1 201 OK\n[\n   'status':true\n]",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "404": [
          {
            "group": "404",
            "optional": false,
            "field": "mess",
            "description": "<p>Not found</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n         Like Not Found",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./app/Http/Controllers/Event/CommentLikeController.php",
    "groupTitle": "Event_Comment"
  },
  {
    "type": "post",
    "url": "/api//user/:user_id/likes",
    "title": "Get Event data",
    "name": "Get_Event",
    "group": "Event_Comment",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": ":user_id",
            "description": "<p>Id of user</p>"
          }
        ]
      }
    },
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "X-CSRF-TOKEN",
            "description": "<p>X-CSRF-TOKEN.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"X-CSRF-TOKEN\": \"Gnknh68NbfXCay7GZUIouJQtEO67BPgQ9QckOXCD\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "Array[]",
            "optional": false,
            "field": "data",
            "description": "<p>Array Likes Data.</p>"
          },
          {
            "group": "200",
            "type": "Array[]",
            "optional": false,
            "field": "data.array",
            "description": "<p>Like Data array</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "data.array.id",
            "description": "<p>Like id</p>"
          },
          {
            "group": "200",
            "type": "Array[]",
            "optional": false,
            "field": "data.array.event_comment",
            "description": "<p>Comment data array</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "data.array.event_comment.id",
            "description": "<p>Comment id</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "data.array.event_comment.content",
            "description": "<p>Comment content</p>"
          },
          {
            "group": "200",
            "type": "Date",
            "optional": false,
            "field": "data.array.event_comment.created_at",
            "description": "<p>Comment create date</p>"
          },
          {
            "group": "200",
            "type": "Array[]",
            "optional": false,
            "field": "data.array.event_comment.event",
            "description": "<p>Event data array of Comment</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "data.array.event_comment.event.id",
            "description": "<p>Event id</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "data.array.event_comment.event.title",
            "description": "<p>Event title</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "data.array.event_comment.event.short_story",
            "description": "<p>Event short_story</p>"
          },
          {
            "group": "200",
            "type": "Array[]",
            "optional": false,
            "field": "data.array.event_comment.event.event_status",
            "description": "<p>Event status data array</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "data.array.event_comment.event.event_status.id",
            "description": "<p>Event status id</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "data.array.event_comment.event.event_status.title",
            "description": "<p>Event status title</p>"
          },
          {
            "group": "200",
            "type": "Array[]",
            "optional": false,
            "field": "data.array.event_comment.user",
            "description": "<p>User data array of Comment</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "data.array.event_comment.user.id",
            "description": "<p>User id</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "data.array.event_comment.user.name",
            "description": "<p>User name</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "   HTTP/1.1 200 OK\n[\n    {\n        \"id\":5,\n        \"event_comment\":\n            {\n                \"id\":11,\n                \"content\":\"Test Comment\",\n                \"created_at\":\"2018-05-21 07:55:54\",\n                \"event\":\n                    {\n                        \"id\":7,\n                        \"title\":\"testing\",\n                        \"short_story\":\"short_story\",\n                        \"event_status\":\n                            {\n                                \"id\":12,\n                                \"title\":\"Trending\"\n                            }\n                    },\n                \"user\":\n                    {\n                        \"id\":6,\n                        \"name\":\"Test_user\"\n                    }\n            }\n    },\n    .......\n\n]",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "404": [
          {
            "group": "404",
            "optional": false,
            "field": "mess",
            "description": "<p>User Not found</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n User Not Found",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./app/Http/Controllers/Event/CommentLikeController.php",
    "groupTitle": "Event_Comment"
  },
  {
    "type": "get",
    "url": "/api/event/:event_id/comment/:comment_id",
    "title": "Gel comment data of event from id",
    "name": "Get_comment",
    "group": "Event_Comment",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": ":event_id",
            "description": "<p>Id of event for commenting</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": ":comment_id",
            "description": "<p>Id of comment</p>"
          }
        ]
      }
    },
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "X-CSRF-TOKEN",
            "description": "<p>X-CSRF-TOKEN.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"X-CSRF-TOKEN\": \"Gnknh68NbfXCay7GZUIouJQtEO67BPgQ9QckOXCD\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "201": [
          {
            "group": "201",
            "type": "Array[]",
            "optional": false,
            "field": "array",
            "description": "<p>Data array of comment.</p>"
          },
          {
            "group": "201",
            "type": "Number",
            "optional": false,
            "field": "array.id",
            "description": "<p>Comment id.</p>"
          },
          {
            "group": "201",
            "type": "Number",
            "optional": false,
            "field": "array.event_id",
            "description": "<p>Event id.</p>"
          },
          {
            "group": "201",
            "type": "Number",
            "optional": false,
            "field": "array.user_id",
            "description": "<p>User id.</p>"
          },
          {
            "group": "201",
            "type": "Number",
            "optional": false,
            "field": "array.content",
            "description": "<p>Content of the comment.</p>"
          },
          {
            "group": "201",
            "type": "Number",
            "optional": false,
            "field": "array.created_at",
            "description": "<p>Content create date.</p>"
          },
          {
            "group": "201",
            "type": "Number",
            "optional": false,
            "field": "array.like_count",
            "description": "<p>Count of the comments likes.</p>"
          },
          {
            "group": "201",
            "type": "Array[]",
            "optional": false,
            "field": "array.like",
            "description": "<p>Array of the likes data.</p>"
          },
          {
            "group": "201",
            "type": "Array[]",
            "optional": false,
            "field": "array.like.array",
            "description": "<p>Array of the like data.</p>"
          },
          {
            "group": "201",
            "type": "Number",
            "optional": false,
            "field": "array.like.array.id",
            "description": "<p>Id of the like.</p>"
          },
          {
            "group": "201",
            "type": "Number",
            "optional": false,
            "field": "array.like.array.user_id",
            "description": "<p>User Id of the like.</p>"
          },
          {
            "group": "201",
            "type": "Number",
            "optional": false,
            "field": "array.like.array.event_comment_id",
            "description": "<p>Comment Id of the like.</p>"
          },
          {
            "group": "201",
            "type": "Array[]",
            "optional": false,
            "field": "array.like.array.user",
            "description": "<p>User data of the like.</p>"
          },
          {
            "group": "201",
            "type": "Number",
            "optional": false,
            "field": "array.like.array.user.id",
            "description": "<p>User id of the like.</p>"
          },
          {
            "group": "201",
            "type": "String",
            "optional": false,
            "field": "array.like.array.user.name",
            "description": "<p>User name of the like.</p>"
          },
          {
            "group": "201",
            "type": "Bool",
            "optional": false,
            "field": "array.like.array.user.is_admin",
            "description": "<p>User is_admin of the like.</p>"
          },
          {
            "group": "201",
            "type": "Array[]",
            "optional": false,
            "field": "array.user",
            "description": "<p>User data of the comment.</p>"
          },
          {
            "group": "201",
            "type": "Number",
            "optional": false,
            "field": "array.user.id",
            "description": "<p>User id of the comment.</p>"
          },
          {
            "group": "201",
            "type": "String",
            "optional": false,
            "field": "array.user.name",
            "description": "<p>User name of the comment.</p>"
          },
          {
            "group": "201",
            "type": "Bool",
            "optional": false,
            "field": "array.user.is_admin",
            "description": "<p>User is_admin of the comment.</p>"
          },
          {
            "group": "201",
            "type": "Array[]",
            "optional": false,
            "field": "array.user.image",
            "description": "<p>Array of data images.</p>"
          },
          {
            "group": "201",
            "type": "Array[]",
            "optional": false,
            "field": "array.user.image.array",
            "description": "<p>Data array of the image.</p>"
          },
          {
            "group": "201",
            "type": "Number",
            "optional": false,
            "field": "array.user.image.array.id",
            "description": "<p>Id of the image.</p>"
          },
          {
            "group": "201",
            "type": "Number",
            "optional": false,
            "field": "array.user.image.array.event_comment_id",
            "description": "<p>Comment id of the image.</p>"
          },
          {
            "group": "201",
            "type": "Number",
            "optional": false,
            "field": "array.user.image.array.image_id",
            "description": "<p>File id of the image.</p>"
          },
          {
            "group": "201",
            "type": "Array[]",
            "optional": false,
            "field": "array.user.image.array.image",
            "description": "<p>Data array of the image file.</p>"
          },
          {
            "group": "201",
            "type": "Number",
            "optional": false,
            "field": "array.user.image.array.image.id",
            "description": "<p>Id of the image file.</p>"
          },
          {
            "group": "201",
            "type": "String",
            "optional": false,
            "field": "array.user.image.array.image.url",
            "description": "<p>Url of the image file.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "  HTTP/1.1 201 OK\n[\n    \"id\":11,\n    \"event_id\":7,\n    \"user_id\":6,\n    \"content\":\"Test Comment\",\n    \"created_at\":\"2018-05-21 07:55:54\",\n    \"like_count\":3,\n    \"like\":\n        [\n            {\n                \"id\":1,\n                \"user_id\":6,\n                \"event_comment_id\":11,\n                \"user\":\n                    {\n                        \"id\":6,\n                        \"name\":\"Test_user\",\n                        \"is_admin\":0,\n                    }\n            },\n            {\n                \"id\":2,\n                \"user_id\":1,\n                \"event_comment_id\":11,\n                \"user\":\n                    {\n                        \"id\":1,\n                        \"name\":\"Test User\",\n                        \"is_admin\":0,\n                    }\n            },\n            ......\n        ],\n    \"user\":\n        {\n            \"id\":6,\n            \"name\":\"Test_user\",\n            \"is_admin\":0\n        },\n    \"image\":\n        [\n            {\n                \"id\":1,\n                \"event_comment_id\":11,\n                \"image_id\":2,\n                \"image\":\n                    {\n                        \"id\":2,\n                        \"url\":\"storage\\/images\\/YuJPIpEwRN19wQoPctCVDVs1CkZ1mLFuHeDc7tfp.jpeg\",\n                    }\n            }\n        ]\n]",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "404": [
          {
            "group": "404",
            "optional": false,
            "field": "event",
            "description": "<p>Not found</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n     Event not found",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n     Comment not found",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./app/Http/Controllers/Event/CommentController.php",
    "groupTitle": "Event_Comment"
  },
  {
    "type": "get",
    "url": "/api/event/comment/:comment_id/like",
    "title": "Like or Dislike comment",
    "name": "Like",
    "group": "Event_Comment",
    "permission": [
      {
        "name": "User",
        "title": "User access",
        "description": "<p>Access only for authentication users</p>"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": ":comment_id",
            "description": "<p>Id of comment</p>"
          }
        ]
      }
    },
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "X-CSRF-TOKEN",
            "description": "<p>X-CSRF-TOKEN.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"X-CSRF-TOKEN\": \"Gnknh68NbfXCay7GZUIouJQtEO67BPgQ9QckOXCD\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "count",
            "description": "<p>Count of  likes.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n     10",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "404": [
          {
            "group": "404",
            "optional": false,
            "field": "event",
            "description": "<p>Not found</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n         Comment Not Found",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./app/Http/Controllers/Event/CommentLikeController.php",
    "groupTitle": "Event_Comment"
  },
  {
    "type": "get",
    "url": "/api/event/comment/:comment_id/like/count",
    "title": "Count comments likes",
    "name": "Like_count",
    "group": "Event_Comment",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": ":comment_id",
            "description": "<p>Id of comment</p>"
          }
        ]
      }
    },
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "X-CSRF-TOKEN",
            "description": "<p>X-CSRF-TOKEN.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"X-CSRF-TOKEN\": \"Gnknh68NbfXCay7GZUIouJQtEO67BPgQ9QckOXCD\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "count",
            "description": "<p>Count of  likes.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n     10",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "404": [
          {
            "group": "404",
            "optional": false,
            "field": "event",
            "description": "<p>Not found</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n         Comment Not Found",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./app/Http/Controllers/Event/CommentLikeController.php",
    "groupTitle": "Event_Comment"
  },
  {
    "type": "get",
    "url": "/api/event/comment/:comment_id/likes",
    "title": "Likes comment",
    "name": "Likes_comment",
    "group": "Event_Comment",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": ":comment_id",
            "description": "<p>Id of comment</p>"
          }
        ]
      }
    },
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "X-CSRF-TOKEN",
            "description": "<p>X-CSRF-TOKEN.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"X-CSRF-TOKEN\": \"Gnknh68NbfXCay7GZUIouJQtEO67BPgQ9QckOXCD\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "Array[]",
            "optional": false,
            "field": "likes",
            "description": "<p>Likes data array.</p>"
          },
          {
            "group": "200",
            "type": "Array[]",
            "optional": false,
            "field": "likes.like",
            "description": "<p>Like data array.</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "likes.like.id",
            "description": "<p>Like id.</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "likes.like.user_id",
            "description": "<p>Like user id.</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "likes.like.event_comment_id",
            "description": "<p>Like to comment with id.</p>"
          },
          {
            "group": "200",
            "type": "Array[]",
            "optional": false,
            "field": "likes.like.user",
            "description": "<p>Likes user data array.</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "likes.like.user.id",
            "description": "<p>User id.</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "likes.like.user.name",
            "description": "<p>User name.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "   HTTP/1.1 200 OK\n[\n    {\n        \"id\":1,\n        \"user_id\":1,\n        \"event_comment_id\":1,\n        \"user\":\n            {\n                \"id\":1,\n                \"name\":\"User Name\",\n            }\n    }\n]",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "404": [
          {
            "group": "404",
            "optional": false,
            "field": "event",
            "description": "<p>Not found</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n         Comment Not Found",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./app/Http/Controllers/Event/CommentLikeController.php",
    "groupTitle": "Event_Comment"
  },
  {
    "type": "delete",
    "url": "/api/event/:event_id/comment/:comment_id",
    "title": "Remove comment data of event from id",
    "name": "Remove_comment",
    "group": "Event_Comment",
    "permission": [
      {
        "name": "User",
        "title": "User access",
        "description": "<p>Access only for authentication users</p>"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": ":event_id",
            "description": "<p>Id of event for commenting</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": ":comment_id",
            "description": "<p>Id of comment</p>"
          }
        ]
      }
    },
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "X-CSRF-TOKEN",
            "description": "<p>X-CSRF-TOKEN.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"X-CSRF-TOKEN\": \"Gnknh68NbfXCay7GZUIouJQtEO67BPgQ9QckOXCD\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "201": [
          {
            "group": "201",
            "type": "Bool",
            "optional": false,
            "field": "status",
            "description": "<p>Status of remove comment.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "  HTTP/1.1 201 OK\n[\n   'status'=>true\n]",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "403": [
          {
            "group": "403",
            "optional": false,
            "field": "mess",
            "description": "<p>Access is denied. If the object does not belong to the user</p>"
          }
        ],
        "404": [
          {
            "group": "404",
            "optional": false,
            "field": "mess",
            "description": "<p>Not found</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 403 Forbidden\n     Forbidden",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n     Event not found",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n     Comment not found",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./app/Http/Controllers/Event/CommentController.php",
    "groupTitle": "Event_Comment"
  },
  {
    "type": "post",
    "url": "/api/event/:event_id/comment",
    "title": "Gel comments of event",
    "name": "Shove_comments",
    "group": "Event_Comment",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": ":event_id",
            "description": "<p>Id of event for commenting</p>"
          }
        ]
      }
    },
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "X-CSRF-TOKEN",
            "description": "<p>X-CSRF-TOKEN.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"X-CSRF-TOKEN\": \"Gnknh68NbfXCay7GZUIouJQtEO67BPgQ9QckOXCD\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "201": [
          {
            "group": "201",
            "type": "Number",
            "optional": false,
            "field": "current_page",
            "description": "<p>Number of the page.</p>"
          },
          {
            "group": "201",
            "type": "Array[]",
            "optional": false,
            "field": "data",
            "description": "<p>Page data of comments.</p>"
          },
          {
            "group": "201",
            "type": "Array[]",
            "optional": false,
            "field": "data.array",
            "description": "<p>Data array of comment.</p>"
          },
          {
            "group": "201",
            "type": "Number",
            "optional": false,
            "field": "data.array.id",
            "description": "<p>Comment id.</p>"
          },
          {
            "group": "201",
            "type": "Number",
            "optional": false,
            "field": "data.array.event_id",
            "description": "<p>Event id.</p>"
          },
          {
            "group": "201",
            "type": "Number",
            "optional": false,
            "field": "data.array.user_id",
            "description": "<p>User id.</p>"
          },
          {
            "group": "201",
            "type": "Number",
            "optional": false,
            "field": "data.array.content",
            "description": "<p>Content of the comment.</p>"
          },
          {
            "group": "201",
            "type": "Number",
            "optional": false,
            "field": "data.array.created_at",
            "description": "<p>Content create date.</p>"
          },
          {
            "group": "201",
            "type": "Number",
            "optional": false,
            "field": "data.array.like_count",
            "description": "<p>Count of the comments likes.</p>"
          },
          {
            "group": "201",
            "type": "Array[]",
            "optional": false,
            "field": "data.array.like",
            "description": "<p>Array of the likes data.</p>"
          },
          {
            "group": "201",
            "type": "Array[]",
            "optional": false,
            "field": "data.array.like.array",
            "description": "<p>Array of the like data.</p>"
          },
          {
            "group": "201",
            "type": "Number",
            "optional": false,
            "field": "data.array.like.array.id",
            "description": "<p>Id of the like.</p>"
          },
          {
            "group": "201",
            "type": "Number",
            "optional": false,
            "field": "data.array.like.array.user_id",
            "description": "<p>User Id of the like.</p>"
          },
          {
            "group": "201",
            "type": "Number",
            "optional": false,
            "field": "data.array.like.array.event_comment_id",
            "description": "<p>Comment Id of the like.</p>"
          },
          {
            "group": "201",
            "type": "Array[]",
            "optional": false,
            "field": "data.array.like.array.user",
            "description": "<p>User data of the like.</p>"
          },
          {
            "group": "201",
            "type": "Number",
            "optional": false,
            "field": "data.array.like.array.user.id",
            "description": "<p>User id of the like.</p>"
          },
          {
            "group": "201",
            "type": "String",
            "optional": false,
            "field": "data.array.like.array.user.name",
            "description": "<p>User name of the like.</p>"
          },
          {
            "group": "201",
            "type": "Bool",
            "optional": false,
            "field": "data.array.like.array.user.is_admin",
            "description": "<p>User is_admin of the like.</p>"
          },
          {
            "group": "201",
            "type": "Array[]",
            "optional": false,
            "field": "data.array.user",
            "description": "<p>User data of the comment.</p>"
          },
          {
            "group": "201",
            "type": "Number",
            "optional": false,
            "field": "data.array.user.id",
            "description": "<p>User id of the comment.</p>"
          },
          {
            "group": "201",
            "type": "String",
            "optional": false,
            "field": "data.array.user.name",
            "description": "<p>User name of the comment.</p>"
          },
          {
            "group": "201",
            "type": "Bool",
            "optional": false,
            "field": "data.array.user.is_admin",
            "description": "<p>User is_admin of the comment.</p>"
          },
          {
            "group": "201",
            "type": "Array[]",
            "optional": false,
            "field": "data.array.user.image",
            "description": "<p>Array of data images.</p>"
          },
          {
            "group": "201",
            "type": "Array[]",
            "optional": false,
            "field": "data.array.user.image.array",
            "description": "<p>Data array of the image.</p>"
          },
          {
            "group": "201",
            "type": "Number",
            "optional": false,
            "field": "data.array.user.image.array.id",
            "description": "<p>Id of the image.</p>"
          },
          {
            "group": "201",
            "type": "Number",
            "optional": false,
            "field": "data.array.user.image.array.event_comment_id",
            "description": "<p>Comment id of the image.</p>"
          },
          {
            "group": "201",
            "type": "Number",
            "optional": false,
            "field": "data.array.user.image.array.image_id",
            "description": "<p>File id of the image.</p>"
          },
          {
            "group": "201",
            "type": "Array[]",
            "optional": false,
            "field": "data.array.user.image.array.image",
            "description": "<p>Data array of the image file.</p>"
          },
          {
            "group": "201",
            "type": "Number",
            "optional": false,
            "field": "data.array.user.image.array.image.id",
            "description": "<p>Id of the image file.</p>"
          },
          {
            "group": "201",
            "type": "String",
            "optional": false,
            "field": "data.array.user.image.array.image.url",
            "description": "<p>Url of the image file.</p>"
          },
          {
            "group": "201",
            "type": "String",
            "optional": false,
            "field": "first_page_url",
            "description": "<p>Url of the first page.</p>"
          },
          {
            "group": "201",
            "type": "String",
            "optional": false,
            "field": "last_page_url",
            "description": "<p>Url of the last page.</p>"
          },
          {
            "group": "201",
            "type": "String",
            "optional": false,
            "field": "next_page_url",
            "description": "<p>Url of the next page.</p>"
          },
          {
            "group": "201",
            "type": "String",
            "optional": false,
            "field": "path",
            "description": "<p>Base URL of request.</p>"
          },
          {
            "group": "201",
            "type": "Number",
            "optional": false,
            "field": "from",
            "description": "<p>Number of start element.</p>"
          },
          {
            "group": "201",
            "type": "Number",
            "optional": false,
            "field": "to",
            "description": "<p>Number of end element.</p>"
          },
          {
            "group": "201",
            "type": "Number",
            "optional": false,
            "field": "total",
            "description": "<p>Count of all elements.</p>"
          },
          {
            "group": "201",
            "type": "Number",
            "optional": false,
            "field": "per_page",
            "description": "<p>Elements on page.</p>"
          },
          {
            "group": "201",
            "type": "Number",
            "optional": false,
            "field": "last_page",
            "description": "<p>Number of the last page.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "  HTTP/1.1 201 OK\n{\n   \"current_page\":1,\n   \"data\":\n       [\n           {\n               \"id\":12,\n               \"event_id\":7,\n               \"user_id\":6,\n               \"content\":\"Test Comment\",\n               \"created_at\":\"2018-05-21 07:58:07\",\n               \"like_count\":0,\n               \"like\":[],\n               \"user\":\n                   {\n                       \"id\":6,\n                       \"name\":\"Test_user\",\n                       \"is_admin\":0\n                   },\n               \"image\":[]\n           },\n           {\n               \"id\":11,\n               \"event_id\":7,\n               \"user_id\":6,\n               \"content\":\"Test Comment\",\n               \"created_at\":\"2018-05-21 07:55:54\",\n               \"like_count\":3,\n               \"like\":\n                   [\n                       {\n                           \"id\":1,\n                           \"user_id\":6,\n                           \"event_comment_id\":11,\n                           \"user\":\n                               {\n                                   \"id\":6,\n                                   \"name\":\"Test_user\",\n                                   \"is_admin\":0,\n                               }\n                       },\n                       {\n                           \"id\":2,\n                           \"user_id\":1,\n                           \"event_comment_id\":11,\n                           \"user\":\n                               {\n                                   \"id\":1,\n                                   \"name\":\"Test User\",\n                                   \"is_admin\":0,\n                               }\n                       },\n                       ......\n                   ],\n               \"user\":\n                   {\n                       \"id\":6,\n                       \"name\":\"Test_user\",\n                       \"is_admin\":0\n                   },\n               \"image\":\n                   [\n                       {\n                           \"id\":1,\n                           \"event_comment_id\":11,\n                           \"image_id\":2,\n                           \"image\":\n                               {\n                                   \"id\":2,\n                                   \"url\":\"storage\\/images\\/YuJPIpEwRN19wQoPctCVDVs1CkZ1mLFuHeDc7tfp.jpeg\",\n                               }\n                       }\n                   ]\n           },\n           ........\n       ],\n   \"first_page_url\":\"http:\\/\\/charity.test\\/api\\/event\\/7\\/comment?page=1\",\n   \"from\":1,\n   \"last_page\":2,\n   \"last_page_url\":\"http:\\/\\/charity.test\\/api\\/event\\/7\\/comment?page=2\",\n   \"next_page_url\":\"http:\\/\\/charity.test\\/api\\/event\\/7\\/comment?page=2\",\n   \"path\":\"http:\\/\\/charity.test\\/api\\/event\\/7\\/comment\",\n   \"per_page\":10,\n   \"prev_page_url\":null,\n   \"to\":10,\n   \"total\":12\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "400": [
          {
            "group": "400",
            "optional": false,
            "field": "array",
            "description": "<p>Array validation errors</p>"
          },
          {
            "group": "400",
            "optional": false,
            "field": "array.parameter",
            "description": "<p>parameter (key) and value of validation error</p>"
          }
        ],
        "404": [
          {
            "group": "404",
            "optional": false,
            "field": "event",
            "description": "<p>Not found</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Bad Request\n{\n     \"content\":\n         [\n             \"The city field is required.\",\n             ......\n         ],\n     .....\n }",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n     Event not found",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./app/Http/Controllers/Event/CommentController.php",
    "groupTitle": "Event_Comment"
  },
  {
    "type": "post",
    "url": "/event/user/:user_id/comments",
    "title": "Gel comments of user",
    "name": "Users_comments",
    "group": "Event_Comment",
    "permission": [
      {
        "name": "User",
        "title": "User access",
        "description": "<p>Access only for authentication users</p>"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": ":user_id",
            "description": "<p>Id of user</p>"
          }
        ]
      }
    },
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "X-CSRF-TOKEN",
            "description": "<p>X-CSRF-TOKEN.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"X-CSRF-TOKEN\": \"Gnknh68NbfXCay7GZUIouJQtEO67BPgQ9QckOXCD\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "current_page",
            "description": "<p>Number of the page.</p>"
          },
          {
            "group": "200",
            "type": "Array[]",
            "optional": false,
            "field": "data",
            "description": "<p>Page data of comments.</p>"
          },
          {
            "group": "200",
            "type": "Array[]",
            "optional": false,
            "field": "data.array",
            "description": "<p>Data array of comment.</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "data.array.id",
            "description": "<p>Comment id.</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "data.array.event_id",
            "description": "<p>Event id.</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "data.array.user_id",
            "description": "<p>User id.</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "data.array.content",
            "description": "<p>Content of the comment.</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "data.array.created_at",
            "description": "<p>Content create date.</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "data.array.like_count",
            "description": "<p>Count of the comments likes.</p>"
          },
          {
            "group": "200",
            "type": "Array[]",
            "optional": false,
            "field": "data.array.like",
            "description": "<p>Array of the likes data.</p>"
          },
          {
            "group": "200",
            "type": "Array[]",
            "optional": false,
            "field": "data.array.like.array",
            "description": "<p>Array of the like data.</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "data.array.like.array.id",
            "description": "<p>Id of the like.</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "data.array.like.array.user_id",
            "description": "<p>User Id of the like.</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "data.array.like.array.event_comment_id",
            "description": "<p>Comment Id of the like.</p>"
          },
          {
            "group": "200",
            "type": "Array[]",
            "optional": false,
            "field": "data.array.like.array.user",
            "description": "<p>User data of the like.</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "data.array.like.array.user.id",
            "description": "<p>User id of the like.</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "data.array.like.array.user.name",
            "description": "<p>User name of the like.</p>"
          },
          {
            "group": "200",
            "type": "Bool",
            "optional": false,
            "field": "data.array.like.array.user.is_admin",
            "description": "<p>User is_admin of the like.</p>"
          },
          {
            "group": "200",
            "type": "Array[]",
            "optional": false,
            "field": "data.array.user",
            "description": "<p>User data of the comment.</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "data.array.user.id",
            "description": "<p>User id of the comment.</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "data.array.user.name",
            "description": "<p>User name of the comment.</p>"
          },
          {
            "group": "200",
            "type": "Bool",
            "optional": false,
            "field": "data.array.user.is_admin",
            "description": "<p>User is_admin of the comment.</p>"
          },
          {
            "group": "200",
            "type": "Array[]",
            "optional": false,
            "field": "data.array.user.image",
            "description": "<p>Array of data images.</p>"
          },
          {
            "group": "200",
            "type": "Array[]",
            "optional": false,
            "field": "data.array.user.image.array",
            "description": "<p>Data array of the image.</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "data.array.user.image.array.id",
            "description": "<p>Id of the image.</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "data.array.user.image.array.event_comment_id",
            "description": "<p>Comment id of the image.</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "data.array.user.image.array.image_id",
            "description": "<p>File id of the image.</p>"
          },
          {
            "group": "200",
            "type": "Array[]",
            "optional": false,
            "field": "data.array.user.image.array.image",
            "description": "<p>Data array of the image file.</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "data.array.user.image.array.image.id",
            "description": "<p>Id of the image file.</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "data.array.user.image.array.image.url",
            "description": "<p>Url of the image file.</p>"
          },
          {
            "group": "200",
            "type": "Array[]",
            "optional": false,
            "field": "data.array.event",
            "description": "<p>Data array of the event.</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "data.array.event.id",
            "description": "<p>Event id</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "data.array.event.title",
            "description": "<p>Event title</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "data.array.event.story",
            "description": "<p>Event story</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "data.array.event.short_story",
            "description": "<p>Event short story</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "data.array.event.address",
            "description": "<p>Event address</p>"
          },
          {
            "group": "200",
            "type": "Bool",
            "optional": false,
            "field": "data.array.event.is_approved",
            "description": "<p>Event approved status(true - is approved)</p>"
          },
          {
            "group": "200",
            "type": "Bool",
            "optional": false,
            "field": "data.array.event.is_submit",
            "description": "<p>Event submit status(true - is submit)</p>"
          },
          {
            "group": "200",
            "type": "Array[]",
            "optional": false,
            "field": "data.array.event.user",
            "description": "<p>Event Author data</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "data.array.event.user.id",
            "description": "<p>Author user id</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "data.array.event.user.name",
            "description": "<p>Author name</p>"
          },
          {
            "group": "200",
            "type": "Boot",
            "optional": false,
            "field": "data.array.event.user.is_admin",
            "description": "<p>Author it is user-admin(true - is admin)</p>"
          },
          {
            "group": "200",
            "type": "Array[]",
            "optional": false,
            "field": "data.array.event.event_status",
            "description": "<p>Array Event status data</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "data.array.event.event_status.id",
            "description": "<p>Event status id</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "data.array.event.event_status.title",
            "description": "<p>Event status title</p>"
          },
          {
            "group": "200",
            "type": "Array[]",
            "optional": false,
            "field": "data.array.event.purpose",
            "description": "<p>Array Event purpose data</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "data.array.event.purpose.id",
            "description": "<p>Event purpose id</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "data.array.event.purpose.title",
            "description": "<p>Event purpose title</p>"
          },
          {
            "group": "200",
            "type": "Array[]",
            "optional": false,
            "field": "data.array.event.religion",
            "description": "<p>Array Event religion data</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "data.array.event.religion.id",
            "description": "<p>Event religion id</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "data.array.event.religion.title",
            "description": "<p>Event religion title</p>"
          },
          {
            "group": "200",
            "type": "Array[]",
            "optional": false,
            "field": "data.array.event.type_destination",
            "description": "<p>Array Event type destination data</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "data.array.event.type_destination.id",
            "description": "<p>Event type destination id</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "data.array.event.type_destination.title",
            "description": "<p>Event type destination title</p>"
          },
          {
            "group": "200",
            "type": "Array[]",
            "optional": false,
            "field": "data.array.event.country",
            "description": "<p>Array Event country data</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "data.array.event.country.id",
            "description": "<p>Event country id</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "data.array.event.country.name",
            "description": "<p>Event country name</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "data.array.event.country.sortname",
            "description": "<p>Event country sortname</p>"
          },
          {
            "group": "200",
            "type": "Array[]",
            "optional": false,
            "field": "data.array.event.state",
            "description": "<p>Array Event state data</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "data.array.event.state.id",
            "description": "<p>Event state id</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "data.array.event.state.name",
            "description": "<p>Event state name</p>"
          },
          {
            "group": "200",
            "type": "Array[]",
            "optional": false,
            "field": "data.array.event.city",
            "description": "<p>Array Event city data</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "data.array.event.city.id",
            "description": "<p>Event city id</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "data.array.event.city.name",
            "description": "<p>Event city name</p>"
          },
          {
            "group": "200",
            "type": "Array[]",
            "optional": false,
            "field": "data.array.event.demand",
            "description": "<p>Array Event demand data</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "data.array.event.demand.id",
            "description": "<p>Event demand data id</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "data.array.event.demand.demand_type_id",
            "description": "<p>Event demand data demand type id</p>"
          },
          {
            "group": "200",
            "type": "Array[]",
            "optional": false,
            "field": "data.array.event.demand.demand_type",
            "description": "<p>Array Event demand data demand type data</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "data.array.event.demand.demand_type.id",
            "description": "<p>Id of demand type</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "data.array.event.demand.demand_type.title",
            "description": "<p>Name of demand type</p>"
          },
          {
            "group": "200",
            "type": "Array[]",
            "optional": false,
            "field": "data.array.event.preview",
            "description": "<p>Data Preview of event</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "data.array.event.preview.id",
            "description": "<p>Event image id</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "data.array.event.preview.image_id",
            "description": "<p>Event image file id</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "data.array.event.preview.is_preview",
            "description": "<p>Preview status of image</p>"
          },
          {
            "group": "200",
            "type": "Array[]",
            "optional": false,
            "field": "data.array.event.preview.image",
            "description": "<p>Array Event image file data</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "data.array.event.preview.image.id",
            "description": "<p>Event image file id</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "data.array.event.preview.image.title",
            "description": "<p>Event image file title</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "data.array.event.preview.image.url",
            "description": "<p>Event image file url</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "first_page_url",
            "description": "<p>Url of the first page.</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "last_page_url",
            "description": "<p>Url of the last page.</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "next_page_url",
            "description": "<p>Url of the next page.</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "path",
            "description": "<p>Base URL of request.</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "from",
            "description": "<p>Number of start element.</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "to",
            "description": "<p>Number of end element.</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "total",
            "description": "<p>Count of all elements.</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "per_page",
            "description": "<p>Elements on page.</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "last_page",
            "description": "<p>Number of the last page.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "  HTTP/1.1 200 OK\n{\n   \"current_page\":1,\n   \"data\":\n       [\n           {\n               \"id\":11,\n               \"event_id\":7,\n               \"user_id\":6,\n               \"content\":\"Test Comment\",\n               \"created_at\":\"2018-05-21 07:55:54\",\n               \"like_count\":3,\n               \"like\":\n                   [\n                       {\n                           \"id\":1,\n                           \"user_id\":6,\n                           \"event_comment_id\":11,\n                           \"user\":\n                               {\n                                   \"id\":6,\n                                   \"name\":\"Test_user\",\n                                   \"is_admin\":0,\n                               }\n                       },\n                       {\n                           \"id\":2,\n                           \"user_id\":1,\n                           \"event_comment_id\":11,\n                           \"user\":\n                               {\n                                   \"id\":1,\n                                   \"name\":\"Test User\",\n                                   \"is_admin\":0,\n                               }\n                       },\n                       ......\n                   ],\n               \"user\":\n                   {\n                       \"id\":6,\n                       \"name\":\"Test_user\",\n                       \"is_admin\":0\n                   },\n               \"image\":\n                   [\n                       {\n                           \"id\":1,\n                           \"event_comment_id\":11,\n                           \"image_id\":2,\n                           \"image\":\n                               {\n                                   \"id\":2,\n                                   \"url\":\"storage\\/images\\/YuJPIpEwRN19wQoPctCVDVs1CkZ1mLFuHeDc7tfp.jpeg\",\n                               }\n                       },\n                       ........\n                   ],\n               \"event\":\n                   {\n                       \"id\": 7,\n                       \"title\": \"testing\",\n                       \"story\": \"testing story\",\n                       \"short_story\": \"short_story\",\n                       \"address\": \"lalalala\",\n                       \"type_destination_id\": 10,\n                       \"purpose_id\": 18,\n                       \"religion_id\": 11,\n                       \"country_id\": 1,\n                       \"state_id\": 1,\n                       \"city_id\": 1,\n                       \"user_id\": 6,\n                       \"event_status_id\": 0,\n                       \"is_approved\": 0,\n                       \"is_submit\": 0,\n                       \"created_at\": \"2018-05-21 06:55:34\",\n                       \"updated_at\": \"2018-05-21 06:55:34\",\n                       \"preview\":\n                           [\n                               \"id\":1,\n                               image_id\":1,\n                               image\":\n                                  {\n                                      \"id\":1,\n                                      \"title\":\"test\",\n                                      \"url\":\"storage\\/images\\/Ur4qM78zhHholK9Y5ylcxoUYlwdx29efD9bBCNG2.jpeg\"\n                                  }\n                           ]\n                       \"user\":\n                           {\n                               \"id\": 6,\n                               \"name\": \"Test_user\",\n                               \"is_admin\": 0\n                           },\n                       \"event_status\": null,\n                       \"purpose\":\n                           {\n                               \"id\": 18,\n                               \"title\": \"Children & Education\"\n                           },\n                       \"religion\":\n                           {\n                               \"id\": 11,\n                               \"title\": \"Christianity\"\n                           },\n                       \"type_destination\":\n                           {\n                               \"id\": 10,\n                               \"title\": \"Charity\"\n                           },\n                       \"demand\": [],\n                       \"country\":\n                           {\n                               \"id\": 1,\n                               \"sortname\": \"AF\",\n                               \"name\": \"Afghanistan\"\n                           },\n                       \"state\":\n                           {\n                               \"id\": 1,\n                               \"name\": \"Andaman and Nicobar Islands\"\n                           },\n                       \"city\":\n                           {\n                               \"id\": 1,\n                               \"name\": \"Bombuflat\"\n                           }\n                   }\n           },\n           ........\n       ],\n   \"first_page_url\":\"http:\\/\\/charity.test\\/api\\/event\\/7\\/comment?page=1\",\n   \"from\":1,\n   \"last_page\":2,\n   \"last_page_url\":\"http:\\/\\/charity.test\\/api\\/event\\/7\\/comment?page=2\",\n   \"next_page_url\":\"http:\\/\\/charity.test\\/api\\/event\\/7\\/comment?page=2\",\n   \"path\":\"http:\\/\\/charity.test\\/api\\/event\\/7\\/comment\",\n   \"per_page\":10,\n   \"prev_page_url\":null,\n   \"to\":10,\n   \"total\":12\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "404": [
          {
            "group": "404",
            "optional": false,
            "field": "event",
            "description": "<p>Not found</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n     User not found",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./app/Http/Controllers/Event/CommentController.php",
    "groupTitle": "Event_Comment"
  },
  {
    "type": "get",
    "url": "/api/event/search",
    "title": "Search",
    "name": "Search",
    "group": "Event_Search",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "word",
            "description": "<p>Searching word.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "type_destination",
            "description": "<p>Id of events type destination.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "purpose",
            "description": "<p>Id of events purpose.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "religion",
            "description": "<p>Id of events religion.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "country",
            "description": "<p>Id of events country.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "state",
            "description": "<p>Id of events state.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "city",
            "description": "<p>Id of events city.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "profit",
            "description": "<p>Type of profit(0- all; 1 - with profit; 2- with out profit).</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "sort",
            "description": "<p>Id of sorting parameter.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "page",
            "description": "<p>Number of the page. Default 1.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n     \"word\":\"Many\",\n     \"type_destination\":2,\n     \"purpose\":2,\n     \"religion\":2,\n     \"country\":2,\n     \"state\":2,\n     \"city\":2,\n     \"sort\":2,\n     \"profit\":0,\n     \"page\":2,\n}",
          "type": "json"
        }
      ]
    },
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "X-CSRF-TOKEN",
            "description": "<p>X-CSRF-TOKEN.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"X-CSRF-TOKEN\": \"Gnknh68NbfXCay7GZUIouJQtEO67BPgQ9QckOXCD\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "current_page",
            "description": "<p>Number of the page.</p>"
          },
          {
            "group": "200",
            "type": "Array[]",
            "optional": false,
            "field": "data",
            "description": "<p>Page data of events.</p>"
          },
          {
            "group": "200",
            "type": "Array[]",
            "optional": false,
            "field": "data.array",
            "description": "<p>Data array of event.</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "data.array.event.id",
            "description": "<p>Event id</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "data.array.event.title",
            "description": "<p>Event title</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "data.array.event.story",
            "description": "<p>Event story</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "data.array.event.short_story",
            "description": "<p>Event short story</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "data.array.event.address",
            "description": "<p>Event address</p>"
          },
          {
            "group": "200",
            "type": "Bool",
            "optional": false,
            "field": "data.array.event.is_approved",
            "description": "<p>Event approved status(true - is approved)</p>"
          },
          {
            "group": "200",
            "type": "Bool",
            "optional": false,
            "field": "data.array.event.is_submit",
            "description": "<p>Event submit status(true - is submit)</p>"
          },
          {
            "group": "200",
            "type": "Array[]",
            "optional": false,
            "field": "data.array.event.images",
            "description": "<p>Array Event preview</p>"
          },
          {
            "group": "200",
            "type": "Array[]",
            "optional": false,
            "field": "data.array.event.images.array",
            "description": "<p>Array image data</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "data.array.event.images.array.id",
            "description": "<p>Event image id</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "data.array.event.images.array.image_id",
            "description": "<p>Event image file id</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "data.array.event.images.array.is_preview",
            "description": "<p>Preview status of image</p>"
          },
          {
            "group": "200",
            "type": "Array[]",
            "optional": false,
            "field": "data.array.event.images.array.image",
            "description": "<p>Array Event image file data</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "data.array.event.images.array.image.title",
            "description": "<p>Event image file title</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "data.array.event.images.array.image.url",
            "description": "<p>Event image file url</p>"
          },
          {
            "group": "200",
            "type": "Array[]",
            "optional": false,
            "field": "data.array.event.event_status",
            "description": "<p>Array Event status data</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "data.array.event.event_status.id",
            "description": "<p>Event status id</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "data.array.event.event_status.title",
            "description": "<p>Event status title</p>"
          },
          {
            "group": "200",
            "type": "Array[]",
            "optional": false,
            "field": "data.array.event.purpose",
            "description": "<p>Array Event purpose data</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "data.array.event.purpose.id",
            "description": "<p>Event purpose id</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "data.array.event.purpose.title",
            "description": "<p>Event purpose title</p>"
          },
          {
            "group": "200",
            "type": "Array[]",
            "optional": false,
            "field": "data.array.event.religion",
            "description": "<p>Array Event religion data</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "data.array.event.religion.id",
            "description": "<p>Event religion id</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "data.array.event.religion.title",
            "description": "<p>Event religion title</p>"
          },
          {
            "group": "200",
            "type": "Array[]",
            "optional": false,
            "field": "data.array.event.type_destination",
            "description": "<p>Array Event type destination data</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "data.array.event.type_destination.id",
            "description": "<p>Event type destination id</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "data.array.event.type_destination.title",
            "description": "<p>Event type destination title</p>"
          },
          {
            "group": "200",
            "type": "Array[]",
            "optional": false,
            "field": "data.array.event.country",
            "description": "<p>Array Event country data</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "data.array.event.country.id",
            "description": "<p>Event country id</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "data.array.event.country.name",
            "description": "<p>Event country name</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "data.array.event.country.sortname",
            "description": "<p>Event country sortname</p>"
          },
          {
            "group": "200",
            "type": "Array[]",
            "optional": false,
            "field": "data.array.event.state",
            "description": "<p>Array Event state data</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "data.array.event.state.id",
            "description": "<p>Event state id</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "data.array.event.state.name",
            "description": "<p>Event state name</p>"
          },
          {
            "group": "200",
            "type": "Array[]",
            "optional": false,
            "field": "data.array.event.city",
            "description": "<p>Array Event city data</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "data.array.event.city.id",
            "description": "<p>Event city id</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "data.array.event.city.name",
            "description": "<p>Event city name</p>"
          },
          {
            "group": "200",
            "type": "Array[]",
            "optional": false,
            "field": "data.array.event.demand",
            "description": "<p>Array Event demand data</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "data.array.event.demand.id",
            "description": "<p>Event demand data id</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "data.array.event.demand.demand_type_id",
            "description": "<p>Event demand data demand type id</p>"
          },
          {
            "group": "200",
            "type": "Array[]",
            "optional": false,
            "field": "data.array.event.demand.demand_type",
            "description": "<p>Array Event demand data demand type data</p>"
          },
          {
            "group": "200",
            "type": "Array[]",
            "optional": false,
            "field": "data.array.event.demand.demand_type.id",
            "description": "<p>Id of demand type</p>"
          },
          {
            "group": "200",
            "type": "Array[]",
            "optional": false,
            "field": "data.array.event.demand.demand_type.title",
            "description": "<p>Name of demand type</p>"
          },
          {
            "group": "200",
            "type": "Array[]",
            "optional": false,
            "field": "data.array.event.demand.money",
            "description": "<p>Array Event demand data demand type array money data</p>"
          },
          {
            "group": "200",
            "type": "Array[]",
            "optional": false,
            "field": "data.array.event.demand.money.array",
            "description": "<p>Event demand data demand type array money data</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "data.array.event.demand.money.array.id",
            "description": "<p>Array Event demand data demand type money id</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "data.array.event.demand.money.array.event_demand_id",
            "description": "<p>Array Event demand data demand type money event demand id</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "data.array.event.demand.money.array.account",
            "description": "<p>Array Event demand data demand type money account</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "data.array.event.demand.money.array.summ",
            "description": "<p>Array Event demand data demand type money summ</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "data.array.event.demand.money.array.payment_frequency_id",
            "description": "<p>Array Event demand data demand type money payment frequency id</p>"
          },
          {
            "group": "200",
            "type": "Array[]",
            "optional": false,
            "field": "data.array.event.demand.volunteers",
            "description": "<p>Array Event demand data demand type array volunteers data</p>"
          },
          {
            "group": "200",
            "type": "Array[]",
            "optional": false,
            "field": "data.array.event.demand.volunteers.array",
            "description": "<p>Event demand data demand type array volunteers data</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "data.array.event.demand.volunteers.array.id",
            "description": "<p>Array Event demand data demand type volunteers id</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "data.array.event.demand.volunteers.array.event_demand_id",
            "description": "<p>Array Event demand data demand type volunteers event demand id</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "data.array.event.demand.volunteers.array.name",
            "description": "<p>Array Event demand data demand type volunteers name</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "data.array.event.demand.volunteers.array.count",
            "description": "<p>Array Event demand data demand type volunteers count</p>"
          },
          {
            "group": "200",
            "type": "Array[]",
            "optional": false,
            "field": "data.array.event.demand.supplies",
            "description": "<p>Array Event demand data demand type array supplies data</p>"
          },
          {
            "group": "200",
            "type": "Array[]",
            "optional": false,
            "field": "data.array.event.demand.supplies.array",
            "description": "<p>Event demand data demand type array supplies data</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "data.array.event.demand.supplies.array.id",
            "description": "<p>Array Event demand data demand type supplies id</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "data.array.event.demand.supplies.array.event_demand_id",
            "description": "<p>Array Event demand data demand type supplies event demand id</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "data.array.event.demand.supplies.array.name",
            "description": "<p>Array Event demand data demand type supplies name</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "data.array.event.demand.supplies.array.count",
            "description": "<p>Array Event demand data demand type supplies count</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "first_page_url",
            "description": "<p>Url of the first page.</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "last_page_url",
            "description": "<p>Url of the last page.</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "next_page_url",
            "description": "<p>Url of the next page.</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "path",
            "description": "<p>Base URL of request.</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "from",
            "description": "<p>Number of start element.</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "to",
            "description": "<p>Number of end element.</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "total",
            "description": "<p>Count of all elements.</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "per_page",
            "description": "<p>Elements on page.</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "last_page",
            "description": "<p>Number of the last page.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "   HTTP/1.1 200 OK\n {\n    \"current_page\":1,\n    \"data\":\n        [\n            {\n                \"id\":4,\n                \"title\":\"testing\",\n                \"story\":\"testing story\",\n                \"short_story\":\"short_story\",\n                \"address\":\"lalalala\",\n                \"type_destination_id\":10,\n                \"purpose_id\":18,\n                \"religion_id\":11,\n                \"country_id\":1,\n                \"state_id\":1,\n                \"city_id\":1,\n                \"user_id\":1,\n                \"event_status_id\":0,\n                \"is_approved\":1,\n                \"is_submit\":1,\n                \"created_at\":\"2018-05-17 11:39:00\",\n                \"updated_at\":\"2018-05-17 11:39:00\",\n                \"finish_date\":\"2018-05-17\",\n                \"comments_count\":0,\n                \"event_views_count\":0,\n                \"images\":\n                    [\n                        {\n                            \"id\":3,\n                            \"event_id\":4,\n                            \"image_id\":5,\n                            \"created_at\":null,\n                            \"updated_at\":null,\n                            \"is_preview\":1,\n                            \"image\":\n                                {\n                                    \"title\":\"test2\",\n                                    \"url\":\"storage\\/images\\/YuJPIpEwRN19wQoPctCVDVs1CkZ1mLFuHeDc7tfp.jpeg\",\n                                }\n                        }\n                    ]\n                \"event_status\":\n                    {\n                        \"id\":12,\n                        \"title\":\"Trending\"\n                    }\n                \"purpose\":\n                    {\n                        \"id\":18,\n                        \"title\":\"Children & Education\"\n                    },\n                \"religion\":\n                    {\n                        \"id\":11,\n                        \"title\":\"Christianity\"\n                    },\n                \"type_destination\":\n                    {\n                        \"id\":10,\n                        \"title\":\"Charity\"\n                    },\n                \"country\":\n                    {\n                        \"id\":1,\n                        \"name\":\"Afghanistan\",\n                        \"sortname\":\"AF\"\n                    },\n                \"state\":\n                    {\n                        \"id\":1,\n                        \"name\":\"Andaman and Nicobar Islands\"\n                    },\n                \"city\":\n                    {\n                        \"id\":1,\n                        \"name\":\"Bombuflat\"\n                    },\n                \"demand\":\n                    [\n                        {\n                            \"id\":1,\n                            \"demand_type_id\":2,\n                            \"demand_type\":\n                                {\n                                    \"id\":1,\n                                    \"title\":\"Many\",\n                                },\n                            \"volunteers\":[],\n                            \"supplies\":[],\n                            \"money\":\n                                [\n                                    {\n                                        \"id\":2,\n                                        \"event_demand_id\":1,\n                                        \"account\":\"635168132101651\",\n                                        \"summ\":1230000,\n                                        \"payment_frequency_id\":5\n                                    }\n                                ]\n                        },\n                    ]\n            },\n        ],\n    \"first_page_url\":\"http:\\/\\/charity.test\\/api\\/event\\/search?page=1\",\n    \"from\":1,\n    \"last_page\":1,\n    \"last_page_url\":\"http:\\/\\/charity.test\\/api\\/event\\/search?page=1\",\n    \"next_page_url\":null,\n    \"path\":\"http:\\/\\/charity.test\\/api\\/event\\/search\",\n    \"per_page\":16,\n    \"prev_page_url\":null,\n    \"to\":4,\n    \"total\":4\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "400": [
          {
            "group": "400",
            "optional": false,
            "field": "array",
            "description": "<p>Array validation errors</p>"
          },
          {
            "group": "400",
            "optional": false,
            "field": "array.parameter",
            "description": "<p>parameter (key) and value of validation error</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Bad Request\n{\n     \"content\":\n         [\n             \"The city field is required.\",\n             ......\n         ],\n     .....\n }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./app/Http/Controllers/Event/SearchController.php",
    "groupTitle": "Event_Search"
  },
  {
    "type": "post",
    "url": "/api/event/:event_id/update/",
    "title": "Create update of Event",
    "name": "Create_Event_Update",
    "group": "Event_Update",
    "permission": [
      {
        "name": "User",
        "title": "User access",
        "description": "<p>Access only for authentication users</p>"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "X-CSRF-TOKEN",
            "description": "<p>X-CSRF-TOKEN.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"X-CSRF-TOKEN\": \"Gnknh68NbfXCay7GZUIouJQtEO67BPgQ9QckOXCD\"\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": ":event_id",
            "description": "<p>Event id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>Update title. required|string|min:3|max:255</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "content",
            "description": "<p>Update content. required|string|min:3|max:1500</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "demand_type_id",
            "description": "<p>Update demand type id. If demand type for All Demand used 0 - Do not specify a parameter.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n     \"title\":\"Some title\",\n     \"title\":\"Some content\",\n     \"demand_type_id\":1,\n }",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "current_page",
            "description": "<p>Number of the page.</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "first_page_url",
            "description": "<p>Url of the first page.</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "last_page_url",
            "description": "<p>Url of the last page.</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "next_page_url",
            "description": "<p>Url of the next page.</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "path",
            "description": "<p>Base URL of request.</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "from",
            "description": "<p>Number of start element.</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "to",
            "description": "<p>Number of end element.</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "total",
            "description": "<p>Count of all elements.</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "per_page",
            "description": "<p>Elements on page.</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "last_page",
            "description": "<p>Number of the last page.</p>"
          },
          {
            "group": "200",
            "type": "Array[]",
            "optional": false,
            "field": "data",
            "description": "<p>Array of updates data</p>"
          },
          {
            "group": "200",
            "type": "Array[]",
            "optional": false,
            "field": "data.update",
            "description": "<p>Update data</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "data.update.id",
            "description": "<p>Update id</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "data.update.title",
            "description": "<p>Update title</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "data.update.content",
            "description": "<p>Update content</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "data.update.demand_type_id",
            "description": "<p>Update demand type id</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "data.update.event_id",
            "description": "<p>Update Event id</p>"
          },
          {
            "group": "200",
            "type": "Date",
            "optional": false,
            "field": "data.update.created_at",
            "description": "<p>Update date create</p>"
          },
          {
            "group": "200",
            "type": "Array[]",
            "optional": false,
            "field": "data.update.demand_type",
            "description": "<p>Update demand type data</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "data.update.demand_type.title",
            "description": "<p>Update demand type title</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "   HTTP/1.1 200 OK\n{\n    \"current_page\":1,\n    \"data\":\n        [\n            {\n                \"id\":1,\n                \"title\":\"Test 1\",\n                \"content\":\"Testing\",\n                \"demand_type_id\":2,\n                \"event_id\":4,\n                \"created_at\":null,\n                \"demand_type\":\n                    {\n                        \"title\":\"Volunteers\",\n                    }\n            },\n            ......\n        ],\n    \"first_page_url\":\"http:\\/\\/charity.test\\/api\\/event\\/4\\/update\\/?page=1\",\n    \"from\":1,\n    \"last_page\":1,\n    \"last_page_url\":\"http:\\/\\/charity.test\\/api\\/event\\/4\\/update\\/?page=1\",\n    \"next_page_url\":null,\n    \"path\":\"http:\\/\\/charity.test\\/api\\/event\\/4\\/update\\/\",\n    \"per_page\":20,\n    \"prev_page_url\":null,\n    \"to\":5,\n    \"total\":5\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "400": [
          {
            "group": "400",
            "optional": false,
            "field": "array",
            "description": "<p>Array validation errors</p>"
          },
          {
            "group": "400",
            "optional": false,
            "field": "array.parameter",
            "description": "<p>parameter (key) and value of validation error</p>"
          }
        ],
        "403": [
          {
            "group": "403",
            "optional": false,
            "field": "error",
            "description": "<p>Error message</p>"
          }
        ],
        "404": [
          {
            "group": "404",
            "optional": false,
            "field": "data",
            "description": "<p>Not found</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not found\n Event not found",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Bad Request\n{\n     \"email\":\n         [\n             \"The email has already been taken.\",\n             ........\n         ],\n       ......\n }",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 403 Forbidden\nAccess is denied",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./app/Http/Controllers/Event/EventUpdateController.php",
    "groupTitle": "Event_Update"
  },
  {
    "type": "delete",
    "url": "/api/event/:event_id/update/:update_id",
    "title": "Delete update of Event",
    "name": "Delete_Event_Update",
    "group": "Event_Update",
    "permission": [
      {
        "name": "User",
        "title": "User access",
        "description": "<p>Access only for authentication users</p>"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "X-CSRF-TOKEN",
            "description": "<p>X-CSRF-TOKEN.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"X-CSRF-TOKEN\": \"Gnknh68NbfXCay7GZUIouJQtEO67BPgQ9QckOXCD\"\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": ":event_id",
            "description": "<p>Event id</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": ":update_id",
            "description": "<p>Update id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>Update title. string|min:3|max:255</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "content",
            "description": "<p>Update content. string|min:3|max:1500</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "demand_type_id",
            "description": "<p>Update demand type id. If demand type for All Demand used 0 - Do not specify a parameter.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n     \"title\":\"Some title\",\n     \"title\":\"Some content\",\n     \"demand_type_id\":1,\n }",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "205": [
          {
            "group": "205",
            "type": "Number",
            "optional": false,
            "field": "current_page",
            "description": "<p>Number of the page.</p>"
          },
          {
            "group": "205",
            "type": "String",
            "optional": false,
            "field": "first_page_url",
            "description": "<p>Url of the first page.</p>"
          },
          {
            "group": "205",
            "type": "String",
            "optional": false,
            "field": "last_page_url",
            "description": "<p>Url of the last page.</p>"
          },
          {
            "group": "205",
            "type": "String",
            "optional": false,
            "field": "next_page_url",
            "description": "<p>Url of the next page.</p>"
          },
          {
            "group": "205",
            "type": "String",
            "optional": false,
            "field": "path",
            "description": "<p>Base URL of request.</p>"
          },
          {
            "group": "205",
            "type": "Number",
            "optional": false,
            "field": "from",
            "description": "<p>Number of start element.</p>"
          },
          {
            "group": "205",
            "type": "Number",
            "optional": false,
            "field": "to",
            "description": "<p>Number of end element.</p>"
          },
          {
            "group": "205",
            "type": "Number",
            "optional": false,
            "field": "total",
            "description": "<p>Count of all elements.</p>"
          },
          {
            "group": "205",
            "type": "Number",
            "optional": false,
            "field": "per_page",
            "description": "<p>Elements on page.</p>"
          },
          {
            "group": "205",
            "type": "Number",
            "optional": false,
            "field": "last_page",
            "description": "<p>Number of the last page.</p>"
          },
          {
            "group": "205",
            "type": "Array[]",
            "optional": false,
            "field": "data",
            "description": "<p>Array of updates data</p>"
          },
          {
            "group": "205",
            "type": "Array[]",
            "optional": false,
            "field": "data.update",
            "description": "<p>Update data</p>"
          },
          {
            "group": "205",
            "type": "Number",
            "optional": false,
            "field": "data.update.id",
            "description": "<p>Update id</p>"
          },
          {
            "group": "205",
            "type": "String",
            "optional": false,
            "field": "data.update.title",
            "description": "<p>Update title</p>"
          },
          {
            "group": "205",
            "type": "String",
            "optional": false,
            "field": "data.update.content",
            "description": "<p>Update content</p>"
          },
          {
            "group": "205",
            "type": "Number",
            "optional": false,
            "field": "data.update.demand_type_id",
            "description": "<p>Update demand type id</p>"
          },
          {
            "group": "205",
            "type": "Number",
            "optional": false,
            "field": "data.update.event_id",
            "description": "<p>Update Event id</p>"
          },
          {
            "group": "205",
            "type": "Date",
            "optional": false,
            "field": "data.update.created_at",
            "description": "<p>Update date create</p>"
          },
          {
            "group": "205",
            "type": "Array[]",
            "optional": false,
            "field": "data.update.demand_type",
            "description": "<p>Update demand type data</p>"
          },
          {
            "group": "205",
            "type": "String",
            "optional": false,
            "field": "data.update.demand_type.title",
            "description": "<p>Update demand type title</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "   HTTP/1.1 205 OK\n{\n    \"current_page\":1,\n    \"data\":\n        [\n            {\n                \"id\":1,\n                \"title\":\"Test 1\",\n                \"content\":\"Testing\",\n                \"demand_type_id\":2,\n                \"event_id\":4,\n                \"created_at\":null,\n                \"demand_type\":\n                    {\n                        \"title\":\"Volunteers\",\n                    }\n            },\n            ......\n        ],\n    \"first_page_url\":\"http:\\/\\/charity.test\\/api\\/event\\/4\\/update\\/?page=1\",\n    \"from\":1,\n    \"last_page\":1,\n    \"last_page_url\":\"http:\\/\\/charity.test\\/api\\/event\\/4\\/update\\/?page=1\",\n    \"next_page_url\":null,\n    \"path\":\"http:\\/\\/charity.test\\/api\\/event\\/4\\/update\\/\",\n    \"per_page\":20,\n    \"prev_page_url\":null,\n    \"to\":5,\n    \"total\":5\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "403": [
          {
            "group": "403",
            "optional": false,
            "field": "error",
            "description": "<p>Error message</p>"
          }
        ],
        "404": [
          {
            "group": "404",
            "optional": false,
            "field": "data",
            "description": "<p>Not found</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not found\n Event not found",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 403 Forbidden\nAccess is denied",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./app/Http/Controllers/Event/EventUpdateController.php",
    "groupTitle": "Event_Update"
  },
  {
    "type": "get",
    "url": "/api/event/:event_id/update/",
    "title": "Get All updates of Event",
    "name": "Get_Event_Updates",
    "group": "Event_Update",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "X-CSRF-TOKEN",
            "description": "<p>X-CSRF-TOKEN.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"X-CSRF-TOKEN\": \"Gnknh68NbfXCay7GZUIouJQtEO67BPgQ9QckOXCD\"\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": ":event_id",
            "description": "<p>Event id</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "page",
            "description": "<p>Page number</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n     \"page\":1,\n }",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "current_page",
            "description": "<p>Number of the page.</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "first_page_url",
            "description": "<p>Url of the first page.</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "last_page_url",
            "description": "<p>Url of the last page.</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "next_page_url",
            "description": "<p>Url of the next page.</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "path",
            "description": "<p>Base URL of request.</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "from",
            "description": "<p>Number of start element.</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "to",
            "description": "<p>Number of end element.</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "total",
            "description": "<p>Count of all elements.</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "per_page",
            "description": "<p>Elements on page.</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "last_page",
            "description": "<p>Number of the last page.</p>"
          },
          {
            "group": "200",
            "type": "Array[]",
            "optional": false,
            "field": "data",
            "description": "<p>Array of updates data</p>"
          },
          {
            "group": "200",
            "type": "Array[]",
            "optional": false,
            "field": "data.update",
            "description": "<p>Update data</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "data.update.id",
            "description": "<p>Update id</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "data.update.title",
            "description": "<p>Update title</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "data.update.content",
            "description": "<p>Update content</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "data.update.demand_type_id",
            "description": "<p>Update demand type id</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "data.update.event_id",
            "description": "<p>Update Event id</p>"
          },
          {
            "group": "200",
            "type": "Date",
            "optional": false,
            "field": "data.update.created_at",
            "description": "<p>Update date create</p>"
          },
          {
            "group": "200",
            "type": "Array[]",
            "optional": false,
            "field": "data.update.demand_type",
            "description": "<p>Update demand type data</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "data.update.demand_type.title",
            "description": "<p>Update demand type title</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "   HTTP/1.1 200 OK\n{\n    \"current_page\":1,\n    \"data\":\n        [\n            {\n                \"id\":1,\n                \"title\":\"Test 1\",\n                \"content\":\"Testing\",\n                \"demand_type_id\":2,\n                \"event_id\":4,\n                \"created_at\":null,\n                \"demand_type\":\n                    {\n                        \"title\":\"Volunteers\",\n                    }\n            },\n            ......\n        ],\n    \"first_page_url\":\"http:\\/\\/charity.test\\/api\\/event\\/4\\/update\\/?page=1\",\n    \"from\":1,\n    \"last_page\":1,\n    \"last_page_url\":\"http:\\/\\/charity.test\\/api\\/event\\/4\\/update\\/?page=1\",\n    \"next_page_url\":null,\n    \"path\":\"http:\\/\\/charity.test\\/api\\/event\\/4\\/update\\/\",\n    \"per_page\":20,\n    \"prev_page_url\":null,\n    \"to\":5,\n    \"total\":5\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "404": [
          {
            "group": "404",
            "optional": false,
            "field": "data",
            "description": "<p>Not found</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not found\n Event not found",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./app/Http/Controllers/Event/EventUpdateController.php",
    "groupTitle": "Event_Update"
  },
  {
    "type": "get",
    "url": "/api/event/:event_id/update/:update_id",
    "title": "Get Update",
    "name": "Get_Update",
    "group": "Event_Update",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "X-CSRF-TOKEN",
            "description": "<p>X-CSRF-TOKEN.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"X-CSRF-TOKEN\": \"Gnknh68NbfXCay7GZUIouJQtEO67BPgQ9QckOXCD\"\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": ":event_id",
            "description": "<p>Event id</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": ":update_id",
            "description": "<p>Update id</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Update id</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>Update title</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "content",
            "description": "<p>Update content</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "demand_type_id",
            "description": "<p>Update demand type id</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "event_id",
            "description": "<p>Update Event id</p>"
          },
          {
            "group": "200",
            "type": "Date",
            "optional": false,
            "field": "created_at",
            "description": "<p>Update date create</p>"
          },
          {
            "group": "200",
            "type": "Array[]",
            "optional": false,
            "field": "demand_type",
            "description": "<p>Update demand type data</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "demand_type.title",
            "description": "<p>Update demand type title</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "   HTTP/1.1 200 OK\n{\n    \"id\":1,\n    \"title\":\"Test 1\",\n    \"content\":\"Testing\",\n    \"demand_type_id\":2,\n    \"event_id\":4,\n    \"created_at\":null,\n    \"demand_type\":\n        {\n            \"title\":\"Volunteers\",\n        }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "404": [
          {
            "group": "404",
            "optional": false,
            "field": "data",
            "description": "<p>Not found</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not found\n Event or Update not found",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./app/Http/Controllers/Event/EventUpdateController.php",
    "groupTitle": "Event_Update"
  },
  {
    "type": "put",
    "url": "/api/event/:event_id/update/:update_id",
    "title": "Update update of Event",
    "name": "Update_Event_Update",
    "group": "Event_Update",
    "permission": [
      {
        "name": "User",
        "title": "User access",
        "description": "<p>Access only for authentication users</p>"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "X-CSRF-TOKEN",
            "description": "<p>X-CSRF-TOKEN.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"X-CSRF-TOKEN\": \"Gnknh68NbfXCay7GZUIouJQtEO67BPgQ9QckOXCD\"\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": ":event_id",
            "description": "<p>Event id</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": ":update_id",
            "description": "<p>Update id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>Update title. string|min:3|max:255</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "content",
            "description": "<p>Update content. string|min:3|max:1500</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "demand_type_id",
            "description": "<p>Update demand type id. If demand type for All Demand used 0 - Do not specify a parameter.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n     \"title\":\"Some title\",\n     \"title\":\"Some content\",\n     \"demand_type_id\":1,\n }",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "201": [
          {
            "group": "201",
            "type": "Number",
            "optional": false,
            "field": "current_page",
            "description": "<p>Number of the page.</p>"
          },
          {
            "group": "201",
            "type": "String",
            "optional": false,
            "field": "first_page_url",
            "description": "<p>Url of the first page.</p>"
          },
          {
            "group": "201",
            "type": "String",
            "optional": false,
            "field": "last_page_url",
            "description": "<p>Url of the last page.</p>"
          },
          {
            "group": "201",
            "type": "String",
            "optional": false,
            "field": "next_page_url",
            "description": "<p>Url of the next page.</p>"
          },
          {
            "group": "201",
            "type": "String",
            "optional": false,
            "field": "path",
            "description": "<p>Base URL of request.</p>"
          },
          {
            "group": "201",
            "type": "Number",
            "optional": false,
            "field": "from",
            "description": "<p>Number of start element.</p>"
          },
          {
            "group": "201",
            "type": "Number",
            "optional": false,
            "field": "to",
            "description": "<p>Number of end element.</p>"
          },
          {
            "group": "201",
            "type": "Number",
            "optional": false,
            "field": "total",
            "description": "<p>Count of all elements.</p>"
          },
          {
            "group": "201",
            "type": "Number",
            "optional": false,
            "field": "per_page",
            "description": "<p>Elements on page.</p>"
          },
          {
            "group": "201",
            "type": "Number",
            "optional": false,
            "field": "last_page",
            "description": "<p>Number of the last page.</p>"
          },
          {
            "group": "201",
            "type": "Array[]",
            "optional": false,
            "field": "data",
            "description": "<p>Array of updates data</p>"
          },
          {
            "group": "201",
            "type": "Array[]",
            "optional": false,
            "field": "data.update",
            "description": "<p>Update data</p>"
          },
          {
            "group": "201",
            "type": "Number",
            "optional": false,
            "field": "data.update.id",
            "description": "<p>Update id</p>"
          },
          {
            "group": "201",
            "type": "String",
            "optional": false,
            "field": "data.update.title",
            "description": "<p>Update title</p>"
          },
          {
            "group": "201",
            "type": "String",
            "optional": false,
            "field": "data.update.content",
            "description": "<p>Update content</p>"
          },
          {
            "group": "201",
            "type": "Number",
            "optional": false,
            "field": "data.update.demand_type_id",
            "description": "<p>Update demand type id</p>"
          },
          {
            "group": "201",
            "type": "Number",
            "optional": false,
            "field": "data.update.event_id",
            "description": "<p>Update Event id</p>"
          },
          {
            "group": "201",
            "type": "Date",
            "optional": false,
            "field": "data.update.created_at",
            "description": "<p>Update date create</p>"
          },
          {
            "group": "201",
            "type": "Array[]",
            "optional": false,
            "field": "data.update.demand_type",
            "description": "<p>Update demand type data</p>"
          },
          {
            "group": "201",
            "type": "String",
            "optional": false,
            "field": "data.update.demand_type.title",
            "description": "<p>Update demand type title</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "   HTTP/1.1 201 OK\n{\n    \"current_page\":1,\n    \"data\":\n        [\n            {\n                \"id\":1,\n                \"title\":\"Test 1\",\n                \"content\":\"Testing\",\n                \"demand_type_id\":2,\n                \"event_id\":4,\n                \"created_at\":null,\n                \"demand_type\":\n                    {\n                        \"title\":\"Volunteers\",\n                    }\n            },\n            ......\n        ],\n    \"first_page_url\":\"http:\\/\\/charity.test\\/api\\/event\\/4\\/update\\/?page=1\",\n    \"from\":1,\n    \"last_page\":1,\n    \"last_page_url\":\"http:\\/\\/charity.test\\/api\\/event\\/4\\/update\\/?page=1\",\n    \"next_page_url\":null,\n    \"path\":\"http:\\/\\/charity.test\\/api\\/event\\/4\\/update\\/\",\n    \"per_page\":20,\n    \"prev_page_url\":null,\n    \"to\":5,\n    \"total\":5\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "400": [
          {
            "group": "400",
            "optional": false,
            "field": "array",
            "description": "<p>Array validation errors</p>"
          },
          {
            "group": "400",
            "optional": false,
            "field": "array.parameter",
            "description": "<p>parameter (key) and value of validation error</p>"
          }
        ],
        "403": [
          {
            "group": "403",
            "optional": false,
            "field": "error",
            "description": "<p>Error message</p>"
          }
        ],
        "404": [
          {
            "group": "404",
            "optional": false,
            "field": "data",
            "description": "<p>Not found</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not found\n Event not found",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Bad Request\n{\n     \"email\":\n         [\n             \"The email has already been taken.\",\n             ........\n         ],\n       ......\n }",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 403 Forbidden\nAccess is denied",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./app/Http/Controllers/Event/EventUpdateController.php",
    "groupTitle": "Event_Update"
  },
  {
    "type": "get",
    "url": "/api/faq/:id",
    "title": "Get FAQ from id",
    "name": "Get_FAQ",
    "group": "FAQ",
    "permission": [
      {
        "name": "User",
        "title": "User access",
        "description": "<p>Access only for authentication users</p>"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "X-CSRF-TOKEN",
            "description": "<p>X-CSRF-TOKEN.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"X-CSRF-TOKEN\": \"Gnknh68NbfXCay7GZUIouJQtEO67BPgQ9QckOXCD\"\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": ":id",
            "description": "<p>FAQ id.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Faq id</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>Faq title</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "content",
            "description": "<p>Faq content</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "   HTTP/1.1 200 OK\n{\n    \"id\":1,\n    \"title\":\"Test1\",\n    \"content\":\"Testing content\",\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "404": [
          {
            "group": "404",
            "optional": false,
            "field": "faq",
            "description": "<p>Not found</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not found\n FAQ Not found",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./app/Http/Controllers/User/FAQController.php",
    "groupTitle": "FAQ"
  },
  {
    "type": "get",
    "url": "/api/faq",
    "title": "Get FAQ for user",
    "name": "Get_FAQs",
    "group": "FAQ",
    "permission": [
      {
        "name": "User",
        "title": "User access",
        "description": "<p>Access only for authentication users</p>"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "X-CSRF-TOKEN",
            "description": "<p>X-CSRF-TOKEN.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"X-CSRF-TOKEN\": \"Gnknh68NbfXCay7GZUIouJQtEO67BPgQ9QckOXCD\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "current_page",
            "description": "<p>Number of the page.</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "first_page_url",
            "description": "<p>Url of the first page.</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "last_page_url",
            "description": "<p>Url of the last page.</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "next_page_url",
            "description": "<p>Url of the next page.</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "path",
            "description": "<p>Base URL of request.</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "from",
            "description": "<p>Number of start element.</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "to",
            "description": "<p>Number of end element.</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "total",
            "description": "<p>Count of all elements.</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "per_page",
            "description": "<p>Elements on page.</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "last_page",
            "description": "<p>Number of the last page.</p>"
          },
          {
            "group": "200",
            "type": "Array[]",
            "optional": false,
            "field": "data",
            "description": "<p>Page data of FAQs.</p>"
          },
          {
            "group": "200",
            "type": "Array[]",
            "optional": false,
            "field": "data.array",
            "description": "<p>Array data of FAQ.</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "data.array.id",
            "description": "<p>Faq id</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "data.array.title",
            "description": "<p>Faq title</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "data.array.content",
            "description": "<p>Faq content</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "   HTTP/1.1 200 OK\n{\n    \"current_page\":1,\n    \"first_page_url\":\"http:\\/\\/charity.test\\/api\\/event\\/search?page=1\",\n    \"from\":1,\n    \"last_page\":1,\n    \"last_page_url\":\"http:\\/\\/charity.test\\/api\\/event\\/search?page=1\",\n    \"next_page_url\":null,\n    \"path\":\"http:\\/\\/charity.test\\/api\\/event\\/search\",\n    \"per_page\":10,\n    \"prev_page_url\":null,\n    \"to\":4,\n    \"total\":4\n    \"data\":\n            [\n                 {\n                     \"id\":1,\n                     \"title\":\"Test1\",\n                     \"content\":\"Testing content\",\n                 },\n                 ......\n            ]\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./app/Http/Controllers/User/FAQController.php",
    "groupTitle": "FAQ"
  },
  {
    "type": "get",
    "url": "/api/faq/search",
    "title": "Search FAQ for user",
    "name": "Search_FAQ",
    "group": "FAQ",
    "permission": [
      {
        "name": "User",
        "title": "User access",
        "description": "<p>Access only for authentication users</p>"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "X-CSRF-TOKEN",
            "description": "<p>X-CSRF-TOKEN.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"X-CSRF-TOKEN\": \"Gnknh68NbfXCay7GZUIouJQtEO67BPgQ9QckOXCD\"\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "word",
            "description": "<p>searching word.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n     \"word\":\"Many\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "current_page",
            "description": "<p>Number of the page.</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "first_page_url",
            "description": "<p>Url of the first page.</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "last_page_url",
            "description": "<p>Url of the last page.</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "next_page_url",
            "description": "<p>Url of the next page.</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "path",
            "description": "<p>Base URL of request.</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "from",
            "description": "<p>Number of start element.</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "to",
            "description": "<p>Number of end element.</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "total",
            "description": "<p>Count of all elements.</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "per_page",
            "description": "<p>Elements on page.</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "last_page",
            "description": "<p>Number of the last page.</p>"
          },
          {
            "group": "200",
            "type": "Array[]",
            "optional": false,
            "field": "data",
            "description": "<p>Page data of FAQs.</p>"
          },
          {
            "group": "200",
            "type": "Array[]",
            "optional": false,
            "field": "data.array",
            "description": "<p>Array data of FAQ.</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "data.array.id",
            "description": "<p>Faq id</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "data.array.title",
            "description": "<p>Faq title</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "data.array.content",
            "description": "<p>Faq content</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "   HTTP/1.1 200 OK\n{\n    \"current_page\":1,\n    \"first_page_url\":\"http:\\/\\/charity.test\\/api\\/event\\/search?page=1\",\n    \"from\":1,\n    \"last_page\":1,\n    \"last_page_url\":\"http:\\/\\/charity.test\\/api\\/event\\/search?page=1\",\n    \"next_page_url\":null,\n    \"path\":\"http:\\/\\/charity.test\\/api\\/event\\/search\",\n    \"per_page\":10,\n    \"prev_page_url\":null,\n    \"to\":4,\n    \"total\":4\n    \"data\":\n            [\n                 {\n                     \"id\":1,\n                     \"title\":\"Test1\",\n                     \"content\":\"Testing content\",\n                 },\n                 ......\n            ]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "400": [
          {
            "group": "400",
            "optional": false,
            "field": "array",
            "description": "<p>Array validation errors</p>"
          },
          {
            "group": "400",
            "optional": false,
            "field": "array.parameter",
            "description": "<p>parameter (key) and value of validation error</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Bad Request\n{\n     \"content\":\n         [\n             \"The city field is required.\",\n             ......\n         ],\n     .....\n }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./app/Http/Controllers/User/FAQController.php",
    "groupTitle": "FAQ"
  },
  {
    "type": "get",
    "url": "/api/geo/countries",
    "title": "Get all countries",
    "name": "All_Countries",
    "group": "GeoData",
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "array[]",
            "optional": false,
            "field": "array.",
            "description": ""
          },
          {
            "group": "200",
            "type": "Object[]",
            "optional": false,
            "field": "array.object",
            "description": ""
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "array.object.id",
            "description": "<p>Country id.</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "array.object.sortname",
            "description": "<p>Country sortname.</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "array.object.name",
            "description": "<p>Country name.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n[\n     {\n         \"id\":1,\n         \"sortname\":\"AF\",\n         \"name\":\"Afghanistan\",\n     },\n     {\n         \"id\":2,\n         \"sortname\":\"AL\",\n         \"name\":\"Albania\",\n     },\n     ....\n ]",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "404": [
          {
            "group": "404",
            "optional": false,
            "field": "Not_found",
            "description": "<p>Not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not found",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./app/Http/Controllers/GeodataController.php",
    "groupTitle": "GeoData"
  },
  {
    "type": "get",
    "url": "/api/geo/cities/autoload/:state_id",
    "title": "Get sities for autoloading",
    "name": "Cities_autoloading",
    "group": "GeoData",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": ":state_id",
            "description": "<p>State id for search.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>Part of the name of city for autoloading.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "array[]",
            "optional": false,
            "field": "array.",
            "description": ""
          },
          {
            "group": "200",
            "type": "Object[]",
            "optional": false,
            "field": "array.object",
            "description": ""
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "array.object.id",
            "description": "<p>City id.</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "array.object.name",
            "description": "<p>City name.</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "array.object.state_id",
            "description": "<p>State id of city.</p>"
          },
          {
            "group": "200",
            "type": "array[]",
            "optional": false,
            "field": "array",
            "description": "<p>If data is absent</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n[\n     {\n         \"id\":13,\n         \"name\":\"Haryana\",\n         \"state_id\": 101\n     },\n     ......\n ]",
          "type": "json"
        },
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n[]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./app/Http/Controllers/GeodataController.php",
    "groupTitle": "GeoData"
  },
  {
    "type": "get",
    "url": "/api/geo/cities/:state_id",
    "title": "Get all cities of state",
    "name": "Cities_of_states",
    "group": "GeoData",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": ":state_id",
            "description": "<p>State id.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "array[]",
            "optional": false,
            "field": "array.",
            "description": ""
          },
          {
            "group": "200",
            "type": "Object[]",
            "optional": false,
            "field": "array.object",
            "description": ""
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "array.object.id",
            "description": "<p>City id.</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "array.object.name",
            "description": "<p>City name.</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "array.object.state_id",
            "description": "<p>State id of city.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n[\n     {\n         \"id\":5994,\n         \"name\":\"Charikar\",\n         \"state_id\":65,\n     },\n     {\n         \"id\":5995,\n         \"name\":\"Jabal-os-Saraj\",\n         \"state_id\":65,\n     },\n     ....\n ]",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "404": [
          {
            "group": "404",
            "optional": false,
            "field": "Not_found",
            "description": "<p>Not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not found",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./app/Http/Controllers/GeodataController.php",
    "groupTitle": "GeoData"
  },
  {
    "type": "get",
    "url": "/api/geo/city/:id",
    "title": "Get city data from id",
    "name": "City_data",
    "group": "GeoData",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": ":id",
            "description": "<p>City ID.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>City id.</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>City name.</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "state_id",
            "description": "<p>State id of city.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n[\n     \"id\":5994,\n     \"name\":\"Charikar\",\n     \"state_id\":65,\n ]",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "404": [
          {
            "group": "404",
            "optional": false,
            "field": "Not_found",
            "description": "<p>Not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not found",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./app/Http/Controllers/GeodataController.php",
    "groupTitle": "GeoData"
  },
  {
    "type": "get",
    "url": "/api/geo/city_detail/:id",
    "title": "Get detail information of city from id",
    "name": "City_detail",
    "group": "GeoData",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": ":state_id",
            "description": "<p>City id.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "array[]",
            "optional": false,
            "field": "array.",
            "description": "<p>City data</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "array.id",
            "description": "<p>City id</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "array.name",
            "description": "<p>City name.</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "array.state_id",
            "description": "<p>State id of city.</p>"
          },
          {
            "group": "200",
            "type": "array[]",
            "optional": false,
            "field": "array.state",
            "description": "<p>Data of cities state.</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "array.state.id",
            "description": "<p>States Id.</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "array.state.name",
            "description": "<p>States name.</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "array.state.country_id",
            "description": "<p>States country id.</p>"
          },
          {
            "group": "200",
            "type": "array[]",
            "optional": false,
            "field": "array.state.country",
            "description": "<p>Data of states country.</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "array.state.country.id",
            "description": "<p>Countries Id.</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "array.state.country.sortname",
            "description": "<p>Countries sortname.</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "array.state.country.name",
            "description": "<p>Country name.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n     \"id\":5,\n     \"name\":\"Addanki\",\n     \"state_id\":2,\n     \"state\":\n         {\n             \"id\":2,\n             \"name\":\"Andhra Pradesh\",\n             \"country_id\":101,\n             \"country\":\n                 {\n                     \"id\":101,\n                     \"sortname\":\"IN\",\n                     \"name\":\"India\",\n                 }\n          }\n }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "404": [
          {
            "group": "404",
            "optional": false,
            "field": "Not_found",
            "description": "<p>Not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not found",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./app/Http/Controllers/GeodataController.php",
    "groupTitle": "GeoData"
  },
  {
    "type": "get",
    "url": "/api/geo/countries/autoload",
    "title": "Get countries for autoloading",
    "name": "Countries_autoloading",
    "group": "GeoData",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>Part of the name of country for autoloading.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n  \"title\": \"ukr\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "array[]",
            "optional": false,
            "field": "array.",
            "description": ""
          },
          {
            "group": "200",
            "type": "Object[]",
            "optional": false,
            "field": "array.object",
            "description": ""
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "array.object.id",
            "description": "<p>Country id.</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "array.object.sortname",
            "description": "<p>Country sortname.</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "array.object.name",
            "description": "<p>Country name.</p>"
          },
          {
            "group": "200",
            "type": "array[]",
            "optional": false,
            "field": "array",
            "description": "<p>If data is absent</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n[\n     {\n         \"id\":228,\n         \"sortname\":\"UA\",\n         \"name\":\"Ukraine\",\n     },\n     ......\n ]",
          "type": "json"
        },
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n[]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./app/Http/Controllers/GeodataController.php",
    "groupTitle": "GeoData"
  },
  {
    "type": "get",
    "url": "/api/geo/country_id/:id",
    "title": "Get country data from id",
    "name": "Country_data",
    "group": "GeoData",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": ":id",
            "description": "<p>Country ID.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Country id.</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "sortname",
            "description": "<p>Country sortname.</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Country name.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n[\n   \"id\":1,\n   \"sortname\":\"AF\",\n   \"name\":\"Afghanistan\",\n ]",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "404": [
          {
            "group": "404",
            "optional": false,
            "field": "Not_found",
            "description": "<p>Not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not found",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./app/Http/Controllers/GeodataController.php",
    "groupTitle": "GeoData"
  },
  {
    "type": "get",
    "url": "/api/geo/country_id/:sortname",
    "title": "Get country data from sortname",
    "name": "Country_data",
    "group": "GeoData",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": ":sortname",
            "description": "<p>Country sortname.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Country id.</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "sortname",
            "description": "<p>Country sortname.</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Country name.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n[\n   \"id\":1,\n   \"sortname\":\"AF\",\n   \"name\":\"Afghanistan\",\n ]",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "404": [
          {
            "group": "404",
            "optional": false,
            "field": "Not_found",
            "description": "<p>Not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not found",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./app/Http/Controllers/GeodataController.php",
    "groupTitle": "GeoData"
  },
  {
    "type": "put",
    "url": "/api/admin/geo/city",
    "title": "Create City",
    "name": "Create_City",
    "group": "GeoData",
    "permission": [
      {
        "name": "Admin",
        "title": "Admin access",
        "description": "<p>Access only for users with admin rights</p>"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "country_id",
            "description": "<p>State id for new state.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Name of new state.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n     \"name\":\"New City\",\n     \"state_id\":2,\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "Object[]",
            "optional": false,
            "field": "object",
            "description": ""
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "object.id",
            "description": "<p>City id.</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "object.name",
            "description": "<p>City name.</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "object.state_id",
            "description": "<p>State id of city.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"id\":13,\n    \"name\":\"Haryana\",\n    \"state_id\": 101\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Bad Request\n{\n     \"sortname\":\n         [\n             \"The sortname has already been taken.\",\n             ........\n         ],\n       ......\n }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./app/Http/Controllers/GeodataController.php",
    "groupTitle": "GeoData"
  },
  {
    "type": "put",
    "url": "/api/admin/geo/country",
    "title": "Create Country",
    "name": "Create_Country",
    "group": "GeoData",
    "permission": [
      {
        "name": "Admin",
        "title": "Admin access",
        "description": "<p>Access only for users with admin rights</p>"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Name of new country. Required</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "sortname",
            "description": "<p>Sortname of new country. Required</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n  \"name\": \"New Country\"\n  \"sortname\": \"New sortname\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "Object[]",
            "optional": false,
            "field": "object",
            "description": ""
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "object.id",
            "description": "<p>Country id.</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "object.sortname",
            "description": "<p>Country sortname.</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "object.name",
            "description": "<p>Country name.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"id\":228,\n    \"sortname\":\"UA\",\n    \"name\":\"Ukraine\",\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "400": [
          {
            "group": "400",
            "optional": false,
            "field": "array",
            "description": "<p>Array validation errors</p>"
          },
          {
            "group": "400",
            "optional": false,
            "field": "array.parameter",
            "description": "<p>parameter (key) and value of validation error</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Bad Request\n{\n     \"sortname\":\n         [\n             \"The sortname has already been taken.\",\n             ........\n         ],\n       ......\n }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./app/Http/Controllers/GeodataController.php",
    "groupTitle": "GeoData"
  },
  {
    "type": "put",
    "url": "/api/admin/geo/state",
    "title": "Create State",
    "name": "Create_State",
    "group": "GeoData",
    "permission": [
      {
        "name": "Admin",
        "title": "Admin access",
        "description": "<p>Access only for users with admin rights</p>"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "country_id",
            "description": "<p>Country id for new state.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Name of new state.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n     \"name\":\"New State\",\n     \"country_id\":2,\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "Object[]",
            "optional": false,
            "field": "object",
            "description": ""
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "object.id",
            "description": "<p>State id.</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "object.name",
            "description": "<p>State name.</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "object.country_id",
            "description": "<p>State id of city.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"id\":13,\n    \"name\":\"Haryana\",\n    \"country_id\": 101\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Bad Request\n{\n     \"sortname\":\n         [\n             \"The sortname has already been taken.\",\n             ........\n         ],\n       ......\n }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./app/Http/Controllers/GeodataController.php",
    "groupTitle": "GeoData"
  },
  {
    "type": "delete",
    "url": "/api/admin/geo/city/:id",
    "title": "Remove City",
    "name": "Remove_City",
    "group": "GeoData",
    "permission": [
      {
        "name": "Admin",
        "title": "Admin access",
        "description": "<p>Access only for users with admin rights</p>"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": ":id",
            "description": "<p>City id.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "Bool",
            "optional": false,
            "field": "status",
            "description": "<p>Mail is send.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "   HTTP/1.1 200 OK\n{\n    \"status\":true,\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "404": [
          {
            "group": "404",
            "optional": false,
            "field": "event",
            "description": "<p>Not found</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not found",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./app/Http/Controllers/GeodataController.php",
    "groupTitle": "GeoData"
  },
  {
    "type": "delete",
    "url": "/api/admin/geo/country/:id",
    "title": "Remove Country",
    "name": "Remove_Country",
    "group": "GeoData",
    "permission": [
      {
        "name": "Admin",
        "title": "Admin access",
        "description": "<p>Access only for users with admin rights</p>"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": ":id",
            "description": "<p>Id of country</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "Bool",
            "optional": false,
            "field": "status",
            "description": "<p>Mail is send.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "   HTTP/1.1 200 OK\n{\n    \"status\":true,\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "404": [
          {
            "group": "404",
            "optional": false,
            "field": "event",
            "description": "<p>Not found</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not found",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./app/Http/Controllers/GeodataController.php",
    "groupTitle": "GeoData"
  },
  {
    "type": "delete",
    "url": "/api/admin/geo/state/:id",
    "title": "Remove State",
    "name": "Remove_State",
    "group": "GeoData",
    "permission": [
      {
        "name": "Admin",
        "title": "Admin access",
        "description": "<p>Access only for users with admin rights</p>"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": ":id",
            "description": "<p>State id.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "Bool",
            "optional": false,
            "field": "status",
            "description": "<p>Mail is send.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "   HTTP/1.1 200 OK\n{\n    \"status\":true,\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "404": [
          {
            "group": "404",
            "optional": false,
            "field": "event",
            "description": "<p>Not found</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not found",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./app/Http/Controllers/GeodataController.php",
    "groupTitle": "GeoData"
  },
  {
    "type": "get",
    "url": "/api/geo/state/:id",
    "title": "Get state data from id",
    "name": "State_data",
    "group": "GeoData",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": ":id",
            "description": "<p>State ID.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>State id.</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>State name.</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "country_id",
            "description": "<p>Country id of state.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n[\n     \"id\":176,\n     \"name\":\"Benguela\",\n     \"country_id\":6,\n ]",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "404": [
          {
            "group": "404",
            "optional": false,
            "field": "Not_found",
            "description": "<p>Not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not found",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./app/Http/Controllers/GeodataController.php",
    "groupTitle": "GeoData"
  },
  {
    "type": "get",
    "url": "/api/geo/states/autoload/:country_id",
    "title": "Get states for autoloading",
    "name": "States_autoloading",
    "group": "GeoData",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": ":country_id",
            "description": "<p>Country id for search.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>Part of the name of state for autoloading.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "array[]",
            "optional": false,
            "field": "array.",
            "description": ""
          },
          {
            "group": "200",
            "type": "Object[]",
            "optional": false,
            "field": "array.object",
            "description": ""
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "array.object.id",
            "description": "<p>State id.</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "array.object.name",
            "description": "<p>State name.</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "array.object.country_id",
            "description": "<p>State id of city.</p>"
          },
          {
            "group": "200",
            "type": "array[]",
            "optional": false,
            "field": "array",
            "description": "<p>If data is absent</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n[\n     {\n         \"id\":13,\n         \"name\":\"Haryana\",\n         \"country_id\": 101\n     },\n     ......\n ]",
          "type": "json"
        },
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n[]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./app/Http/Controllers/GeodataController.php",
    "groupTitle": "GeoData"
  },
  {
    "type": "get",
    "url": "/api/geo/states/:country_id",
    "title": "Get all states of country",
    "name": "States_of_country",
    "group": "GeoData",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": ":country_id",
            "description": "<p>Country id.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "array[]",
            "optional": false,
            "field": "array.",
            "description": ""
          },
          {
            "group": "200",
            "type": "Object[]",
            "optional": false,
            "field": "array.object",
            "description": ""
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "array.object.id",
            "description": "<p>State id.</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "array.object.name",
            "description": "<p>State name.</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "array.object.country_id",
            "description": "<p>Country id of state.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n[\n     {\n         \"id\":175,\n         \"name\":\"Bengo\",\n         \"country_id\":6,\n     },\n     {\n         \"id\":176,\n         \"name\":\"Benguela\",\n         \"country_id\":6,\n     },\n     ....\n ]",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "404": [
          {
            "group": "404",
            "optional": false,
            "field": "Not_found",
            "description": "<p>Not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not found",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./app/Http/Controllers/GeodataController.php",
    "groupTitle": "GeoData"
  },
  {
    "type": "put",
    "url": "/api/admin/geo/city/:id",
    "title": "Update City",
    "name": "Update_City",
    "group": "GeoData",
    "permission": [
      {
        "name": "Admin",
        "title": "Admin access",
        "description": "<p>Access only for users with admin rights</p>"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": ":id",
            "description": "<p>City id.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "state_id",
            "description": "<p>State id for new state.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Name of new state.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n     \"name\":\"New City\",\n     \"state_id\":2,\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "Object[]",
            "optional": false,
            "field": "object",
            "description": ""
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "object.id",
            "description": "<p>City id.</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "object.name",
            "description": "<p>City name.</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "object.state_id",
            "description": "<p>State id of city.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"id\":13,\n    \"name\":\"Haryana\",\n    \"state_id\": 101\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./app/Http/Controllers/GeodataController.php",
    "groupTitle": "GeoData"
  },
  {
    "type": "put",
    "url": "/api/admin/geo/country/:id",
    "title": "Update Country",
    "name": "Update_Country",
    "group": "GeoData",
    "permission": [
      {
        "name": "Admin",
        "title": "Admin access",
        "description": "<p>Access only for users with admin rights</p>"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": ":id",
            "description": "<p>Id of country</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>New Name of  country</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "sortname",
            "description": "<p>New Sortname of country</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n  \"name\": \"New Country\"\n  \"sortname\": \"New sortname\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "Object[]",
            "optional": false,
            "field": "object",
            "description": ""
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "object.id",
            "description": "<p>Country id.</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "object.sortname",
            "description": "<p>Country sortname.</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "object.name",
            "description": "<p>Country name.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"id\":228,\n    \"sortname\":\"UA\",\n    \"name\":\"Ukraine\",\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./app/Http/Controllers/GeodataController.php",
    "groupTitle": "GeoData"
  },
  {
    "type": "put",
    "url": "/api/admin/geo/state/:id",
    "title": "Update State",
    "name": "Update_State",
    "group": "GeoData",
    "permission": [
      {
        "name": "Admin",
        "title": "Admin access",
        "description": "<p>Access only for users with admin rights</p>"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": ":id",
            "description": "<p>State id.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "country_id",
            "description": "<p>Country id for new state.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Name of new state.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n     \"name\":\"New State\",\n     \"country_id\":2,\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "Object[]",
            "optional": false,
            "field": "object",
            "description": ""
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "object.id",
            "description": "<p>State id.</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "object.name",
            "description": "<p>State name.</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "object.country_id",
            "description": "<p>State id of city.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"id\":13,\n    \"name\":\"Haryana\",\n    \"country_id\": 101\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./app/Http/Controllers/GeodataController.php",
    "groupTitle": "GeoData"
  },
  {
    "type": "get",
    "url": "/api/news_letter",
    "title": "Add newsletter(for all user: guest and registered user)",
    "name": "Add_newsletter",
    "group": "NewsLetter",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "X-CSRF-TOKEN",
            "description": "<p>X-CSRF-TOKEN.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"X-CSRF-TOKEN\": \"Gnknh68NbfXCay7GZUIouJQtEO67BPgQ9QckOXCD\"\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Email for newsletter.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n     \"email\":\"exampel@gmail.com\",\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "Bool",
            "optional": false,
            "field": "status",
            "description": "<p>Status of adding</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "   HTTP/1.1 200 OK\n{\n    \"status\":true,\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "400": [
          {
            "group": "400",
            "optional": false,
            "field": "array",
            "description": "<p>Array validation errors</p>"
          },
          {
            "group": "400",
            "optional": false,
            "field": "array.parameter",
            "description": "<p>parameter (key) and value of validation error</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Bad Request\n{\n     \"email\":\n         [\n             \"The email field is required.\",\n             ......\n         ],\n     .....\n }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./app/Http/Controllers/NewsLetterSubscriptionController.php",
    "groupTitle": "NewsLetter"
  },
  {
    "type": "post",
    "url": "/api/post/create",
    "title": "Create new Post",
    "name": "Create_Post",
    "group": "Post",
    "permission": [
      {
        "name": "User",
        "title": "User access",
        "description": "<p>Access only for authentication users</p>"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "X-CSRF-TOKEN",
            "description": "<p>X-CSRF-TOKEN.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"X-CSRF-TOKEN\": \"Gnknh68NbfXCay7GZUIouJQtEO67BPgQ9QckOXCD\"\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>Post title.required|string|min:3|max:255</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "content",
            "description": "<p>Post content.required|string|min:3|max:1500</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "_token",
            "description": "<p>X-CSRF-TOKEN</p>"
          },
          {
            "group": "Parameter",
            "type": "Array[]",
            "optional": false,
            "field": "videos",
            "description": "<p>Array of array video data</p>"
          },
          {
            "group": "Parameter",
            "type": "Array[]",
            "optional": false,
            "field": "videos.array",
            "description": "<p>Array of video data</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "videos.array.url",
            "description": "<p>URL of video</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "videos.array.title",
            "description": "<p>Title of video</p>"
          },
          {
            "group": "Parameter",
            "type": "Array[]",
            "optional": false,
            "field": "images",
            "description": "<p>Array of array image data</p>"
          },
          {
            "group": "Parameter",
            "type": "Array[]",
            "optional": false,
            "field": "images.array",
            "description": "<p>Array of image data</p>"
          },
          {
            "group": "Parameter",
            "type": "File",
            "optional": false,
            "field": "images.array.file",
            "description": "<p>File of image</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "images.array.title",
            "description": "<p>Title of image</p>"
          },
          {
            "group": "Parameter",
            "type": "Bool",
            "optional": false,
            "field": "images.array.is_preview",
            "description": "<p>This image is preview of event</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n     \"title\":\"Post Title\",\n     \"content\":\"Post Content\",\n     \"videos\":\n         [\n             1 :\n                 [\n                     'title' : 'Same title',\n                     'url' : 'Same URL'\n                 ]\n             2 :\n                 [\n                     'title' : 'Same title',\n                     'url' : 'Same URL'\n                 ]\n             ........\n         ]\n     \"images\":\n         [\n             1 :\n                 [\n                     'title' : 'Same title',\n                     'file' : 'file content'\n                     \"is_preview\": 0\n                 ]\n             2 :\n                 [\n                     'title' : 'Same title',\n                     'file' : 'file content'\n                     \"is_preview\": 1\n                 ]\n             ........\n         ]\n     \"_token\" : \"Gnknh68NbfXCay7GZUIouJQtEO67BPgQ9QckOXCD\"\n }",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "201": [
          {
            "group": "201",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>Post title.</p>"
          },
          {
            "group": "201",
            "type": "String",
            "optional": false,
            "field": "content",
            "description": "<p>Post content.</p>"
          },
          {
            "group": "201",
            "type": "Number",
            "optional": false,
            "field": "user_id",
            "description": "<p>Author user id</p>"
          },
          {
            "group": "201",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Post id</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "   HTTP/1.1 201 OK\n{\n    \"title\":\"Post Title\",\n    \"content\":\"Post Content\",\n    \"user_id\":1,\n    \"id\":1\",\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "400": [
          {
            "group": "400",
            "optional": false,
            "field": "array",
            "description": "<p>Array validation errors</p>"
          },
          {
            "group": "400",
            "optional": false,
            "field": "array.parameter",
            "description": "<p>parameter (key) and value of validation error</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Bad Request\n{\n     \"email\":\n         [\n             \"The email has already been taken.\",\n             ........\n         ],\n       ......\n }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./app/Http/Controllers/Post/UserController.php",
    "groupTitle": "Post"
  },
  {
    "type": "delete",
    "url": "/api/post/:id",
    "title": "Delete Post",
    "name": "Delete_Post",
    "group": "Post",
    "permission": [
      {
        "name": "User",
        "title": "User access",
        "description": "<p>Access only for authentication users</p>"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "X-CSRF-TOKEN",
            "description": "<p>X-CSRF-TOKEN.</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": ":id",
            "description": "<p>Post id</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "205": [
          {
            "group": "205",
            "type": "Bool",
            "optional": false,
            "field": "status",
            "description": "<p>Delete status</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "   HTTP/1.1 205\n[\n    'status'=>true\n]",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "404": [
          {
            "group": "404",
            "optional": false,
            "field": "image",
            "description": "<p>Not found</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not found\n Post Not Found",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./app/Http/Controllers/Post/UserController.php",
    "groupTitle": "Post"
  },
  {
    "type": "get",
    "url": "/api/post/:id",
    "title": "Get Post from ID",
    "name": "Get_Post",
    "group": "Post",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "X-CSRF-TOKEN",
            "description": "<p>X-CSRF-TOKEN.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"X-CSRF-TOKEN\": \"Gnknh68NbfXCay7GZUIouJQtEO67BPgQ9QckOXCD\"\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": ":id",
            "description": "<p>Post id</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>Post title.</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "content",
            "description": "<p>Post content.</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "user_id",
            "description": "<p>Author user id</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Post id</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n{\n    \"title\":\"Post Title\",\n    \"content\":\"Post Content\",\n    \"user_id\":1,\n    \"id\":1\",\n},",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "404": [
          {
            "group": "404",
            "optional": false,
            "field": "image",
            "description": "<p>Not found</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not found\n Post Not Found",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./app/Http/Controllers/Post/UserController.php",
    "groupTitle": "Post"
  },
  {
    "type": "post",
    "url": "/api/post/:id",
    "title": "Get all active Posts",
    "name": "Get_Posts",
    "group": "Post",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "X-CSRF-TOKEN",
            "description": "<p>X-CSRF-TOKEN.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"X-CSRF-TOKEN\": \"Gnknh68NbfXCay7GZUIouJQtEO67BPgQ9QckOXCD\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "Array[]",
            "optional": false,
            "field": "array",
            "description": "<p>Data array.</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "array.title",
            "description": "<p>Post title.</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "array.content",
            "description": "<p>Post content.</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "array.user_id",
            "description": "<p>Author user id</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "array.id",
            "description": "<p>Post id</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n[\n     {\n         \"title\":\"Post Title\",\n         \"content\":\"Post Content\",\n         \"user_id\":1,\n         \"id\":1\",\n     },\n.....\n]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./app/Http/Controllers/Post/UserController.php",
    "groupTitle": "Post"
  },
  {
    "type": "put",
    "url": "/api/post/:id",
    "title": "Update Post",
    "name": "Update_Post",
    "group": "Post",
    "permission": [
      {
        "name": "User",
        "title": "User access",
        "description": "<p>Access only for authentication users</p>"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "X-CSRF-TOKEN",
            "description": "<p>X-CSRF-TOKEN.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"X-CSRF-TOKEN\": \"Gnknh68NbfXCay7GZUIouJQtEO67BPgQ9QckOXCD\"\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": ":id",
            "description": "<p>Post id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>Post title.string|min:3|max:255</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "content",
            "description": "<p>Post content.string|min:3|max:1500</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n     \"title\":\"Post Title\",\n     \"content\":\"Post Content\",\n }",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "201": [
          {
            "group": "201",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>Post title.</p>"
          },
          {
            "group": "201",
            "type": "String",
            "optional": false,
            "field": "content",
            "description": "<p>Post content.</p>"
          },
          {
            "group": "201",
            "type": "Number",
            "optional": false,
            "field": "user_id",
            "description": "<p>Author user id</p>"
          },
          {
            "group": "201",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Post id</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "   HTTP/1.1 201 OK\n{\n    \"title\":\"Post Title\",\n    \"content\":\"Post Content\",\n    \"user_id\":1,\n    \"id\":1\",\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "400": [
          {
            "group": "400",
            "optional": false,
            "field": "array",
            "description": "<p>Array validation errors</p>"
          },
          {
            "group": "400",
            "optional": false,
            "field": "array.parameter",
            "description": "<p>parameter (key) and value of validation error</p>"
          }
        ],
        "403": [
          {
            "group": "403",
            "optional": false,
            "field": "image",
            "description": "<p>Not found</p>"
          }
        ],
        "404": [
          {
            "group": "404",
            "optional": false,
            "field": "image",
            "description": "<p>Not found</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Bad Request\n{\n     \"email\":\n         [\n             \"The email has already been taken.\",\n             ........\n         ],\n       ......\n }",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not found\n Post Not Found",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 403 Forbidden\n Access is denied. The time for changing the post ended",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./app/Http/Controllers/Post/UserController.php",
    "groupTitle": "Post"
  },
  {
    "type": "post",
    "url": "/api/event/:event_id/supply/response",
    "title": "Create new Response to Events Demand Supply",
    "name": "Create_Response_Supply",
    "group": "Response_Supply",
    "permission": [
      {
        "name": "User",
        "title": "User access",
        "description": "<p>Access only for authentication users</p>"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "X-CSRF-TOKEN",
            "description": "<p>X-CSRF-TOKEN.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"X-CSRF-TOKEN\": \"Gnknh68NbfXCay7GZUIouJQtEO67BPgQ9QckOXCD\"\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": ":event_id",
            "description": "<p>Event id</p>"
          },
          {
            "group": "Parameter",
            "type": "Array[]",
            "optional": false,
            "field": "data",
            "description": "<p>Supply response data array</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "data.obj",
            "description": "<p>Supply response data</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "data.obj.objsupply_id",
            "description": "<p>Supply id</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "data.obj.supply_id",
            "description": "<p>Supply id</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "count",
            "description": "<p>Count to response position. Default 1</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "data:\n   [\n       {\n           \"supply_id\":1,\n           \"count\":1,\n       },\n       .....\n   ]",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "201": [
          {
            "group": "201",
            "type": "Bool",
            "optional": false,
            "field": "status",
            "description": "<p>Status of created response</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "   HTTP/1.1 201 OK\n{\n    'status' : true\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "404": [
          {
            "group": "404",
            "optional": false,
            "field": "data",
            "description": "<p>Not found</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not found\n Event or Supplies demand not found",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./app/Http/Controllers/Event/SupplyController.php",
    "groupTitle": "Response_Supply"
  },
  {
    "type": "put",
    "url": "/api/event/:event_id/supply/:supply_id/:supply_response_id/received",
    "title": "Creator received parcel",
    "name": "Creator_received_parcel",
    "group": "Response_Supply",
    "permission": [
      {
        "name": "User",
        "title": "User access",
        "description": "<p>Access only for authentication users</p>"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "X-CSRF-TOKEN",
            "description": "<p>X-CSRF-TOKEN.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"X-CSRF-TOKEN\": \"Gnknh68NbfXCay7GZUIouJQtEO67BPgQ9QckOXCD\"\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": ":event_id",
            "description": "<p>Event id</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": ":supply_id",
            "description": "<p>Supply id</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": ":supply_response_id",
            "description": "<p>Supply response id</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "201": [
          {
            "group": "201",
            "type": "Bool",
            "optional": false,
            "field": "status",
            "description": "<p>Status of created response</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "   HTTP/1.1 201 OK\n{\n    'status' : true\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "404": [
          {
            "group": "404",
            "optional": false,
            "field": "data",
            "description": "<p>Not found</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not found\n Event or Supplies demand not found",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./app/Http/Controllers/Event/SupplyController.php",
    "groupTitle": "Response_Supply"
  },
  {
    "type": "get",
    "url": "/api/event/:event_id/supply/approve/:key",
    "title": "User approve Response to Events Demand Supply",
    "name": "User_approve_Response_Supply",
    "group": "Response_Supply",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "X-CSRF-TOKEN",
            "description": "<p>X-CSRF-TOKEN.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"X-CSRF-TOKEN\": \"Gnknh68NbfXCay7GZUIouJQtEO67BPgQ9QckOXCD\"\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": ":event_id",
            "description": "<p>Event id</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": ":key",
            "description": "<p>Hash key of approve request</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "Bool",
            "optional": false,
            "field": "status",
            "description": "<p>Status of created response</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "   HTTP/1.1 200 OK\n{\n    'status' : true\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "400": [
          {
            "group": "400",
            "optional": false,
            "field": "message",
            "description": "<p>Bad Request</p>"
          }
        ],
        "404": [
          {
            "group": "404",
            "optional": false,
            "field": "data",
            "description": "<p>Not found</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not found\n Event not found",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Bad Request\n [\n     'message' : 'Event Supply Responses not found'\n ]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./app/Http/Controllers/Event/SupplyController.php",
    "groupTitle": "Response_Supply"
  },
  {
    "type": "put",
    "url": "/api/event/:event_id/supply/:supply_id/:supply_response_id/send",
    "title": "User send parcel",
    "name": "User_send_parcel",
    "group": "Response_Supply",
    "permission": [
      {
        "name": "User",
        "title": "User access",
        "description": "<p>Access only for authentication users</p>"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "X-CSRF-TOKEN",
            "description": "<p>X-CSRF-TOKEN.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"X-CSRF-TOKEN\": \"Gnknh68NbfXCay7GZUIouJQtEO67BPgQ9QckOXCD\"\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": ":event_id",
            "description": "<p>Event id</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": ":supply_id",
            "description": "<p>Supply id</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": ":supply_response_id",
            "description": "<p>Supply response id</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "201": [
          {
            "group": "201",
            "type": "Bool",
            "optional": false,
            "field": "status",
            "description": "<p>Status of created response</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "   HTTP/1.1 201 OK\n{\n    'status' : true\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "404": [
          {
            "group": "404",
            "optional": false,
            "field": "data",
            "description": "<p>Not found</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not found\n Event or Supplies demand not found",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./app/Http/Controllers/Event/SupplyController.php",
    "groupTitle": "Response_Supply"
  },
  {
    "type": "post",
    "url": "/api/event/:event_id/volunteer/:volunteer_id",
    "title": "Create new Response to Events Demand Volunteer",
    "name": "Create_Response_Volunteer",
    "group": "Response_Volunteer",
    "permission": [
      {
        "name": "User",
        "title": "User access",
        "description": "<p>Access only for authentication users</p>"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "X-CSRF-TOKEN",
            "description": "<p>X-CSRF-TOKEN.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"X-CSRF-TOKEN\": \"Gnknh68NbfXCay7GZUIouJQtEO67BPgQ9QckOXCD\"\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": ":event_id",
            "description": "<p>Event id</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": ":volunteer_id",
            "description": "<p>Volunteer id</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "count",
            "description": "<p>Count to response position. Default 1</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n     \"count\":1,\n }",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "201": [
          {
            "group": "201",
            "type": "Bool",
            "optional": false,
            "field": "status",
            "description": "<p>Status of created response</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "   HTTP/1.1 201 OK\n{\n    'status' : true\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "404": [
          {
            "group": "404",
            "optional": false,
            "field": "data",
            "description": "<p>Not found</p>"
          }
        ],
        "422": [
          {
            "group": "422",
            "optional": false,
            "field": "data",
            "description": "<p>Unprocessable Entity</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not found\n Event or Volunteers demand not found",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 422 Unprocessable Entity\n The user has already responded to this event",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 422 Unprocessable Entity\n The required number is already dialed",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./app/Http/Controllers/Event/VolunteerController.php",
    "groupTitle": "Response_Volunteer"
  },
  {
    "type": "put",
    "url": "/api/event/:event_id/volunteer/:volunteer_id/:volunteer_response_id_response_id",
    "title": "Creator approve volunteer response",
    "name": "Creator_approve_volunteer",
    "group": "Response_Volunteer",
    "permission": [
      {
        "name": "User",
        "title": "User access",
        "description": "<p>Access only for authentication users</p>"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "X-CSRF-TOKEN",
            "description": "<p>X-CSRF-TOKEN.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"X-CSRF-TOKEN\": \"Gnknh68NbfXCay7GZUIouJQtEO67BPgQ9QckOXCD\"\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": ":event_id",
            "description": "<p>Event id</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": ":volunteer_id",
            "description": "<p>Volunteer id</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": ":volunteer_response_id_response_id",
            "description": "<p>Volunteer response id</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "201": [
          {
            "group": "201",
            "type": "Bool",
            "optional": false,
            "field": "status",
            "description": "<p>Status of created response</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "   HTTP/1.1 201 OK\n{\n    'status' : true\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "404": [
          {
            "group": "404",
            "optional": false,
            "field": "data",
            "description": "<p>Not found</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not found\nEvent or Volunteers demand not found",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./app/Http/Controllers/Event/VolunteerController.php",
    "groupTitle": "Response_Volunteer"
  },
  {
    "type": "get",
    "url": "/api/event/:event_id/volunteer/approve/:key",
    "title": "User approve Response to Events Demand Volunteer",
    "name": "User_approve_Response_Volunteer",
    "group": "Response_Volunteer",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "X-CSRF-TOKEN",
            "description": "<p>X-CSRF-TOKEN.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"X-CSRF-TOKEN\": \"Gnknh68NbfXCay7GZUIouJQtEO67BPgQ9QckOXCD\"\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": ":event_id",
            "description": "<p>Event id</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": ":key",
            "description": "<p>Hash key of approve request</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "Bool",
            "optional": false,
            "field": "status",
            "description": "<p>Status of created response</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "   HTTP/1.1 200 OK\n{\n    'status' : true\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "400": [
          {
            "group": "400",
            "optional": false,
            "field": "message",
            "description": "<p>Bad Request</p>"
          }
        ],
        "404": [
          {
            "group": "404",
            "optional": false,
            "field": "data",
            "description": "<p>Not found</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not found\n Event not found",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Bad Request\n [\n     'message' : 'Event Volunteer Responses not found'\n ]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./app/Http/Controllers/Event/VolunteerController.php",
    "groupTitle": "Response_Volunteer"
  },
  {
    "type": "post",
    "url": "/api/slide",
    "title": "Get Slide data",
    "name": "Slide",
    "group": "Slide",
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "array[]",
            "optional": false,
            "field": "array",
            "description": "<p>Events data array for slider</p>"
          },
          {
            "group": "200",
            "type": "array[]",
            "optional": false,
            "field": "array.array",
            "description": "<p>Event data for slider</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "array.array.id",
            "description": "<p>Event id</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "array.array.title",
            "description": "<p>Event title</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "array.array.short_story",
            "description": "<p>Event short story</p>"
          },
          {
            "group": "200",
            "type": "array[]",
            "optional": false,
            "field": "array.array.event_image_preview",
            "description": "<p>Event preview data array</p>"
          },
          {
            "group": "200",
            "type": "array[]",
            "optional": false,
            "field": "array.array.event_image_preview.image",
            "description": "<p>Image data array</p>"
          },
          {
            "group": "200",
            "type": "array[]",
            "optional": false,
            "field": "array.array.event_image_preview.image.url",
            "description": "<p>Image url</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "   HTTP/1.1 200 OK\n[\n    {\n        \"id\":4,\n        \"title\":\"testing\",\n        \"short_story\":\"short_story\",\n        \"event_image_preview\":\n            {\n                \"image\":\n                    {\n                        \"url\":\"storage\\/images\\/YuJPIpEwRN19wQoPctCVDVs1CkZ1mLFuHeDc7tfp.jpeg\"\n                    }\n            }\n    },\n    ......\n]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./app/Http/Controllers/SlideController.php",
    "groupTitle": "Slide"
  },
  {
    "type": "post",
    "url": "/api/statinf",
    "title": "Get all Static Inform",
    "name": "Get_All_Static_Inform",
    "group": "Static_Inform",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "X-CSRF-TOKEN",
            "description": "<p>X-CSRF-TOKEN.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"X-CSRF-TOKEN\": \"Gnknh68NbfXCay7GZUIouJQtEO67BPgQ9QckOXCD\"\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": ":key",
            "description": "<p>Static Inform key</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "201": [
          {
            "group": "201",
            "type": "Array[]",
            "optional": false,
            "field": "data",
            "description": "<p>Array data informs arrays.</p>"
          },
          {
            "group": "201",
            "type": "Array[]",
            "optional": false,
            "field": "data.array",
            "description": "<p>Array data inform array.</p>"
          },
          {
            "group": "201",
            "type": "String",
            "optional": false,
            "field": "data.array.key",
            "description": "<p>Key of value.</p>"
          },
          {
            "group": "201",
            "type": "String",
            "optional": false,
            "field": "data.array.value",
            "description": "<p>Value.</p>"
          },
          {
            "group": "201",
            "type": "Number",
            "optional": false,
            "field": "data.array.id",
            "description": "<p>static inform id</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "   HTTP/1.1 201 OK\n{\n    {\n        \"key\":\"same_key\",\n        \"value\":\"value Content\",\n        \"id\":1\",\n    },\n    ...\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "404": [
          {
            "group": "404",
            "optional": false,
            "field": "data",
            "description": "<p>Not found</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not found\n Not Found",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./app/Http/Controllers/StaticInfController.php",
    "groupTitle": "Static_Inform"
  },
  {
    "type": "get",
    "url": "/api/statinf/:id",
    "title": "Get Static Inform from id",
    "name": "Get_Static_Inform__Id_",
    "group": "Static_Inform",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "X-CSRF-TOKEN",
            "description": "<p>X-CSRF-TOKEN.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"X-CSRF-TOKEN\": \"Gnknh68NbfXCay7GZUIouJQtEO67BPgQ9QckOXCD\"\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": ":id",
            "description": "<p>Static Inform id</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "201": [
          {
            "group": "201",
            "type": "String",
            "optional": false,
            "field": "key",
            "description": "<p>Key of value.</p>"
          },
          {
            "group": "201",
            "type": "String",
            "optional": false,
            "field": "value",
            "description": "<p>Value.</p>"
          },
          {
            "group": "201",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>static inform id</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "   HTTP/1.1 201 OK\n{\n    \"key\":\"same_key\",\n    \"value\":\"value Content\",\n    \"id\":1\",\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "404": [
          {
            "group": "404",
            "optional": false,
            "field": "data",
            "description": "<p>Not found</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not found\n Not Found",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./app/Http/Controllers/StaticInfController.php",
    "groupTitle": "Static_Inform"
  },
  {
    "type": "post",
    "url": "/api/statinf/:key",
    "title": "Get Static Inform from key",
    "name": "Get_Static_Inform__key_",
    "group": "Static_Inform",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "X-CSRF-TOKEN",
            "description": "<p>X-CSRF-TOKEN.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"X-CSRF-TOKEN\": \"Gnknh68NbfXCay7GZUIouJQtEO67BPgQ9QckOXCD\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "201": [
          {
            "group": "201",
            "type": "String",
            "optional": false,
            "field": "key",
            "description": "<p>Key of value.</p>"
          },
          {
            "group": "201",
            "type": "String",
            "optional": false,
            "field": "value",
            "description": "<p>Value.</p>"
          },
          {
            "group": "201",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>static inform id</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "   HTTP/1.1 201 OK\n{\n    \"key\":\"same_key\",\n    \"value\":\"value Content\",\n    \"id\":1\",\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "404": [
          {
            "group": "404",
            "optional": false,
            "field": "data",
            "description": "<p>Not found</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not found\n Not Found",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./app/Http/Controllers/StaticInfController.php",
    "groupTitle": "Static_Inform"
  },
  {
    "type": "get",
    "url": "/api/event/delivery_options",
    "title": "Get all delivery options",
    "name": "Delivery_Options",
    "group": "Supply",
    "permission": [
      {
        "name": "User",
        "title": "User access",
        "description": "<p>Access only for authentication users</p>"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "X-CSRF-TOKEN",
            "description": "<p>X-CSRF-TOKEN.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"X-CSRF-TOKEN\": \"Gnknh68NbfXCay7GZUIouJQtEO67BPgQ9QckOXCD\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "Array",
            "optional": false,
            "field": "array",
            "description": "<p>Data Delivery Options data</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "array.id",
            "description": "<p>Delivery Options id</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "array.title",
            "description": "<p>Delivery Options title</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "   HTTP/1.1 200 OK\n[\n    {\n        \"id\":1,\n        \"title\":\"Ship\",\n    },\n    {\n        \"id\":2,\n        \"title\":\"Drop-Off\",\n    },\n    {\n        \"id\":3,\n        \"title\":\"Pickup\",\n    }\n]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./app/Http/Controllers/Event/SupplyController.php",
    "groupTitle": "Supply"
  },
  {
    "type": "post",
    "url": "/api/user/avatar",
    "title": "Create users avatar",
    "name": "Create_avatar",
    "group": "User_Data",
    "permission": [
      {
        "name": "User",
        "title": "User access",
        "description": "<p>Access only for authentication users</p>"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "_token",
            "description": "<p>X-CSRF-TOKEN</p>"
          },
          {
            "group": "Parameter",
            "type": "File",
            "optional": false,
            "field": "image",
            "description": "<p>File of image</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n   \"image\": 'file content\n   \"_token\" : \"Gnknh68NbfXCay7GZUIouJQtEO67BPgQ9QckOXCD\"\n}",
          "type": "json"
        }
      ]
    },
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "X-CSRF-TOKEN",
            "description": "<p>X-CSRF-TOKEN.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"X-CSRF-TOKEN\": \"Gnknh68NbfXCay7GZUIouJQtEO67BPgQ9QckOXCD\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "201": [
          {
            "group": "201",
            "type": "Bool",
            "optional": false,
            "field": "status",
            "description": "<p>Status of saving (true - ok).</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "400": [
          {
            "group": "400",
            "optional": false,
            "field": "message",
            "description": "<p>Message of error</p>"
          }
        ],
        "404": [
          {
            "group": "404",
            "optional": false,
            "field": "event",
            "description": "<p>Not found</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Event not found",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Bad Request\n No file in request",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./app/Http/Controllers/User/UserController.php",
    "groupTitle": "User_Data"
  },
  {
    "type": "delete",
    "url": "/api/user/avatar",
    "title": "Delete users avatar",
    "name": "Delete_avatar",
    "group": "User_Data",
    "permission": [
      {
        "name": "User",
        "title": "User access",
        "description": "<p>Access only for authentication users</p>"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "X-CSRF-TOKEN",
            "description": "<p>X-CSRF-TOKEN.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"X-CSRF-TOKEN\": \"Gnknh68NbfXCay7GZUIouJQtEO67BPgQ9QckOXCD\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "201": [
          {
            "group": "201",
            "type": "Bool",
            "optional": false,
            "field": "status",
            "description": "<p>Status of saving (true - ok).</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "400": [
          {
            "group": "400",
            "optional": false,
            "field": "message",
            "description": "<p>Message of error</p>"
          }
        ],
        "404": [
          {
            "group": "404",
            "optional": false,
            "field": "event",
            "description": "<p>Not found</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Event not found",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Bad Request\n No file in request",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./app/Http/Controllers/User/UserController.php",
    "groupTitle": "User_Data"
  },
  {
    "type": "get",
    "url": "/api/auth_user",
    "title": "Get Auth User",
    "name": "Get_Auth_User",
    "group": "User_Data",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "X-CSRF-TOKEN",
            "description": "<p>X-CSRF-TOKEN.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"X-CSRF-TOKEN\": \"Gnknh68NbfXCay7GZUIouJQtEO67BPgQ9QckOXCD\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "Null",
            "optional": false,
            "field": "data",
            "description": "<p>If User don`t auth.</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>User id</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>User name</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>User email</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "phone",
            "description": "<p>User phone</p>"
          },
          {
            "group": "200",
            "type": "Bool",
            "optional": false,
            "field": "is_admin",
            "description": "<p>User admin status</p>"
          },
          {
            "group": "200",
            "type": "Bool",
            "optional": false,
            "field": "newsletter",
            "description": "<p>User newsletter status</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "religion_id",
            "description": "<p>User religion id</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "country_id",
            "description": "<p>User country id</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "state_id",
            "description": "<p>User state id</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "city_id",
            "description": "<p>User city id</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "image_id",
            "description": "<p>User image id</p>"
          },
          {
            "group": "200",
            "type": "Bool",
            "optional": false,
            "field": "blocked",
            "description": "<p>User blocked status</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n Null",
          "type": "json"
        },
        {
          "title": "Success-Response:",
          "content": "   HTTP/1.1 200 OK\n  [\n     \"id\":1,\n     \"name\":\"Test User\",\n     \"email\":\"test@testing.tt\",\n     \"phone\":\"380991234567\",\n     \"is_admin\":0,\n     \"newsletter\":1,\n     \"religion_id\":13,\n     \"country_id\":5,\n     \"state_id\":6,\n     \"city_id\":7,\n     \"image_id\":2,\n     \"created_at\":\"2018-05-18 08:18:54\",\n     \"updated_at\":\"2018-05-18 08:18:54\",\n     \"blocked\":0,\n]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./app/Http/Controllers/User/UserController.php",
    "groupTitle": "User_Data"
  },
  {
    "type": "post",
    "url": "/api/admin/user/:id/assign/admin",
    "title": "Assign Admin User",
    "name": "Assign_Admin_User",
    "group": "User_Management",
    "permission": [
      {
        "name": "Admin",
        "title": "Admin access",
        "description": "<p>Access only for users with admin rights</p>"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "X-CSRF-TOKEN",
            "description": "<p>X-CSRF-TOKEN.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"X-CSRF-TOKEN\": \"Gnknh68NbfXCay7GZUIouJQtEO67BPgQ9QckOXCD\"\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": ":id",
            "description": "<p>User id</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "201": [
          {
            "group": "201",
            "type": "Bool",
            "optional": false,
            "field": "status",
            "description": "<p>Delete status</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "   HTTP/1.1 201\n[\n    'status'=>true\n]",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "404": [
          {
            "group": "404",
            "optional": false,
            "field": "image",
            "description": "<p>Not found</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not found\n Not Found",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./app/Http/Controllers/Admin/UserManagementController.php",
    "groupTitle": "User_Management"
  },
  {
    "type": "post",
    "url": "/api/admin/user/:id/block",
    "title": "Block User",
    "name": "Block_User",
    "group": "User_Management",
    "permission": [
      {
        "name": "Admin",
        "title": "Admin access",
        "description": "<p>Access only for users with admin rights</p>"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "X-CSRF-TOKEN",
            "description": "<p>X-CSRF-TOKEN.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"X-CSRF-TOKEN\": \"Gnknh68NbfXCay7GZUIouJQtEO67BPgQ9QckOXCD\"\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": ":id",
            "description": "<p>User id</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "202": [
          {
            "group": "202",
            "type": "Bool",
            "optional": false,
            "field": "status",
            "description": "<p>Delete status</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "   HTTP/1.1 202\n[\n    'status'=>true\n]",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "404": [
          {
            "group": "404",
            "optional": false,
            "field": "image",
            "description": "<p>Not found</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not found\n Not Found",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./app/Http/Controllers/Admin/UserManagementController.php",
    "groupTitle": "User_Management"
  },
  {
    "type": "post",
    "url": "/api/admin/user/",
    "title": "Get All Users",
    "name": "Get_All_Users",
    "group": "User_Management",
    "permission": [
      {
        "name": "Admin",
        "title": "Admin access",
        "description": "<p>Access only for users with admin rights</p>"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "X-CSRF-TOKEN",
            "description": "<p>X-CSRF-TOKEN.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"X-CSRF-TOKEN\": \"Gnknh68NbfXCay7GZUIouJQtEO67BPgQ9QckOXCD\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "current_page",
            "description": "<p>Number of the page.</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "first_page_url",
            "description": "<p>Url of the first page.</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "last_page_url",
            "description": "<p>Url of the last page.</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "next_page_url",
            "description": "<p>Url of the next page.</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "path",
            "description": "<p>Base URL of request.</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "from",
            "description": "<p>Number of start element.</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "to",
            "description": "<p>Number of end element.</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "total",
            "description": "<p>Count of all elements.</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "per_page",
            "description": "<p>Elements on page.</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "last_page",
            "description": "<p>Number of the last page.</p>"
          },
          {
            "group": "200",
            "type": "Array[]",
            "optional": false,
            "field": "data",
            "description": "<p>Page data of Users.</p>"
          },
          {
            "group": "200",
            "type": "Array[]",
            "optional": false,
            "field": "data.array",
            "description": "<p>Array data of Users.</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "data.array.id",
            "description": "<p>User id</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "data.array.name",
            "description": "<p>User name</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "data.array.email",
            "description": "<p>User email</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "data.array.phone",
            "description": "<p>User phone</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "data.array.is_admin",
            "description": "<p>User admin status</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "data.array.newsletter",
            "description": "<p>User newsletter status</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "data.array.blocked",
            "description": "<p>User blocked status</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "   HTTP/1.1 200 OK\n{\n    \"current_page\":1,\n    \"first_page_url\":\"http:\\/\\/charity.test\\/api\\/event\\/search?page=1\",\n    \"from\":1,\n    \"last_page\":1,\n    \"last_page_url\":\"http:\\/\\/charity.test\\/api\\/event\\/search?page=1\",\n    \"next_page_url\":null,\n    \"path\":\"http:\\/\\/charity.test\\/api\\/event\\/search\",\n    \"per_page\":10,\n    \"prev_page_url\":null,\n    \"to\":4,\n    \"total\":4\n    \"data\":\n            [\n                 {\n                     \"id\":1,\n                     \"name\":\"Test1\",\n                     \"email\":\"test@test.tt\",\n                     \"phone\":\"1231234567\",\n                     \"is_admin\":0,\n                     \"newsletter\":1,\n                     \"blocked\":0,\n                 },\n                 ......\n            ]\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./app/Http/Controllers/Admin/UserManagementController.php",
    "groupTitle": "User_Management"
  },
  {
    "type": "get",
    "url": "/api/admin/user/:id",
    "title": "Get Users data for admin",
    "name": "Get_Users_data_for_admin",
    "group": "User_Management",
    "permission": [
      {
        "name": "Admin",
        "title": "Admin access",
        "description": "<p>Access only for users with admin rights</p>"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": ":id",
            "description": "<p>Id of user</p>"
          }
        ]
      }
    },
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "X-CSRF-TOKEN",
            "description": "<p>X-CSRF-TOKEN.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"X-CSRF-TOKEN\": \"Gnknh68NbfXCay7GZUIouJQtEO67BPgQ9QckOXCD\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>User id</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>User name</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>User email</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "phone",
            "description": "<p>User phone</p>"
          },
          {
            "group": "200",
            "type": "Bool",
            "optional": false,
            "field": "is_admin",
            "description": "<p>User admin status</p>"
          },
          {
            "group": "200",
            "type": "Bool",
            "optional": false,
            "field": "newsletter",
            "description": "<p>User newsletter status</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "religion_id",
            "description": "<p>User religion id</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "country_id",
            "description": "<p>User country id</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "state_id",
            "description": "<p>User state id</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "city_id",
            "description": "<p>User city id</p>"
          },
          {
            "group": "200",
            "type": "Bool",
            "optional": false,
            "field": "blocked",
            "description": "<p>User blocked status</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "event_count",
            "description": "<p>Users event count</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "event_comment_count",
            "description": "<p>Users event comment count</p>"
          },
          {
            "group": "200",
            "type": "Array[]",
            "optional": false,
            "field": "country",
            "description": "<p>Country array data</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "country.sortname",
            "description": "<p>Country sortname</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "country.name",
            "description": "<p>Country name</p>"
          },
          {
            "group": "200",
            "type": "Array[]",
            "optional": false,
            "field": "state",
            "description": "<p>State array data</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "state.name",
            "description": "<p>State name</p>"
          },
          {
            "group": "200",
            "type": "Array[]",
            "optional": false,
            "field": "city",
            "description": "<p>City array data</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "city.name",
            "description": "<p>City name</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "city.lon",
            "description": "<p>City lat</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "city.lat",
            "description": "<p>City lat</p>"
          },
          {
            "group": "200",
            "type": "Array[]",
            "optional": false,
            "field": "image",
            "description": "<p>image array data</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "image.url",
            "description": "<p>image url</p>"
          },
          {
            "group": "200",
            "type": "Array[]",
            "optional": false,
            "field": "religion",
            "description": "<p>religion array data</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "religion.title",
            "description": "<p>religion title</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "   HTTP/1.1 200 OK\n  [\n    {\n        \"id\":1,\n        \"name\":\"Test User\",\n        \"email\":\"test@testing.tt\",\n        \"phone\":\"380991234567\",\n        \"is_admin\":0,\n        \"newsletter\":1,\n        \"religion_id\":13,\n        \"country_id\":5,\n        \"state_id\":6,\n        \"city_id\":7,\n        \"image_id\":2,\n        \"created_at\":\"2018-05-18 08:18:54\",\n        \"updated_at\":\"2018-05-18 08:18:54\",\n        \"blocked\":0,\n        \"event_count\":3,\n        \"event_comment_count\":0,\n        \"country\":\n            {\n                \"sortname\":\"AD\",\n                \"name\":\"Andorra\",\n            },\n        \"state\":\n            {\n                \"name\":\"Chandigarh\",\n            },\n        \"city\":\n            {\n                \"name\":\"Adoni\",\n                \"lon\":\"77.2728368\",\n                \"lat\":\"15.6322227\"\n            },\n        \"image\":\n            {\n                \"url\":\"storage\\/images\\/YuJPIpEwRN19wQoPctCVDVs1CkZ1mLFuHeDc7tfp.jpeg\",\n            },\n        \"religion\":\n            {\n                \"title\":\"Hinduism\",\n            }\n    },\n    ...........\n]",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "404": [
          {
            "group": "404",
            "optional": false,
            "field": "image",
            "description": "<p>Not found</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not found\n Not Found",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./app/Http/Controllers/Admin/UserManagementController.php",
    "groupTitle": "User_Management"
  },
  {
    "type": "post",
    "url": "/api/admin/user/:id/refuse/admin",
    "title": "Refuse Admin User",
    "name": "Refuse_Admin_User",
    "group": "User_Management",
    "permission": [
      {
        "name": "Admin",
        "title": "Admin access",
        "description": "<p>Access only for users with admin rights</p>"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "X-CSRF-TOKEN",
            "description": "<p>X-CSRF-TOKEN.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"X-CSRF-TOKEN\": \"Gnknh68NbfXCay7GZUIouJQtEO67BPgQ9QckOXCD\"\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": ":id",
            "description": "<p>User id</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "201": [
          {
            "group": "201",
            "type": "Bool",
            "optional": false,
            "field": "status",
            "description": "<p>Delete status</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "   HTTP/1.1 201\n[\n    'status'=>true\n]",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "404": [
          {
            "group": "404",
            "optional": false,
            "field": "image",
            "description": "<p>Not found</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not found\n Not Found",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./app/Http/Controllers/Admin/UserManagementController.php",
    "groupTitle": "User_Management"
  },
  {
    "type": "post",
    "url": "/api/admin/user/:id/unblock",
    "title": "Unblock User",
    "name": "Unblock_User",
    "group": "User_Management",
    "permission": [
      {
        "name": "Admin",
        "title": "Admin access",
        "description": "<p>Access only for users with admin rights</p>"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "X-CSRF-TOKEN",
            "description": "<p>X-CSRF-TOKEN.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"X-CSRF-TOKEN\": \"Gnknh68NbfXCay7GZUIouJQtEO67BPgQ9QckOXCD\"\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": ":id",
            "description": "<p>User id</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "202": [
          {
            "group": "202",
            "type": "Bool",
            "optional": false,
            "field": "status",
            "description": "<p>Delete status</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "   HTTP/1.1 202\n[\n    'status'=>true\n]",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "404": [
          {
            "group": "404",
            "optional": false,
            "field": "image",
            "description": "<p>Not found</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not found\n Not Found",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./app/Http/Controllers/Admin/UserManagementController.php",
    "groupTitle": "User_Management"
  },
  {
    "type": "post",
    "url": "/api/event/approved",
    "title": "Get Approved Event",
    "name": "Get_Users_Approved_Event",
    "group": "Users_Event",
    "permission": [
      {
        "name": "User",
        "title": "User access",
        "description": "<p>Access only for authentication users</p>"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "page",
            "description": "<p>Number of page. Default 1</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n     \"page\":2\n}",
          "type": "json"
        }
      ]
    },
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "X-CSRF-TOKEN",
            "description": "<p>X-CSRF-TOKEN.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"X-CSRF-TOKEN\": \"Gnknh68NbfXCay7GZUIouJQtEO67BPgQ9QckOXCD\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "current_page",
            "description": "<p>Number of the page.</p>"
          },
          {
            "group": "200",
            "type": "Array[]",
            "optional": false,
            "field": "data",
            "description": "<p>Page data of events.</p>"
          },
          {
            "group": "200",
            "type": "Array[]",
            "optional": false,
            "field": "data.array",
            "description": "<p>Data array of event.</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "data.array.event.id",
            "description": "<p>Event id</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "data.array.event.title",
            "description": "<p>Event title</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "data.array.event.story",
            "description": "<p>Event story</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "data.array.event.short_story",
            "description": "<p>Event short story</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "data.array.event.address",
            "description": "<p>Event address</p>"
          },
          {
            "group": "200",
            "type": "Bool",
            "optional": false,
            "field": "data.array.event.is_approved",
            "description": "<p>Event approved status(true - is approved)</p>"
          },
          {
            "group": "200",
            "type": "Bool",
            "optional": false,
            "field": "data.array.event.is_submit",
            "description": "<p>Event submit status(true - is submit)</p>"
          },
          {
            "group": "200",
            "type": "Array[]",
            "optional": false,
            "field": "data.array.event.user",
            "description": "<p>Event Author data</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "data.array.event.user.id",
            "description": "<p>Author user id</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "data.array.event.user.name",
            "description": "<p>Author name</p>"
          },
          {
            "group": "200",
            "type": "Array[]",
            "optional": false,
            "field": "data.array.event.images",
            "description": "<p>Array Event preview</p>"
          },
          {
            "group": "200",
            "type": "Array[]",
            "optional": false,
            "field": "data.array.event.images.array",
            "description": "<p>Array image data</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "data.array.event.images.array.id",
            "description": "<p>Event image id</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "data.array.event.images.array.image_id",
            "description": "<p>Event image file id</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "data.array.event.images.array.is_preview",
            "description": "<p>Preview status of image</p>"
          },
          {
            "group": "200",
            "type": "Array[]",
            "optional": false,
            "field": "data.array.event.images.array.image",
            "description": "<p>Array Event image file data</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "data.array.event.images.array.image.title",
            "description": "<p>Event image file title</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "data.array.event.images.array.image.url",
            "description": "<p>Event image file url</p>"
          },
          {
            "group": "200",
            "type": "Array[]",
            "optional": false,
            "field": "data.array.event.event_status",
            "description": "<p>Array Event status data</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "data.array.event.event_status.id",
            "description": "<p>Event status id</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "data.array.event.event_status.title",
            "description": "<p>Event status title</p>"
          },
          {
            "group": "200",
            "type": "Array[]",
            "optional": false,
            "field": "data.array.event.purpose",
            "description": "<p>Array Event purpose data</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "data.array.event.purpose.id",
            "description": "<p>Event purpose id</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "data.array.event.purpose.title",
            "description": "<p>Event purpose title</p>"
          },
          {
            "group": "200",
            "type": "Array[]",
            "optional": false,
            "field": "data.array.event.religion",
            "description": "<p>Array Event religion data</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "data.array.event.religion.id",
            "description": "<p>Event religion id</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "data.array.event.religion.title",
            "description": "<p>Event religion title</p>"
          },
          {
            "group": "200",
            "type": "Array[]",
            "optional": false,
            "field": "data.array.event.type_destination",
            "description": "<p>Array Event type destination data</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "data.array.event.type_destination.id",
            "description": "<p>Event type destination id</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "data.array.event.type_destination.title",
            "description": "<p>Event type destination title</p>"
          },
          {
            "group": "200",
            "type": "Array[]",
            "optional": false,
            "field": "data.array.event.country",
            "description": "<p>Array Event country data</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "data.array.event.country.id",
            "description": "<p>Event country id</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "data.array.event.country.name",
            "description": "<p>Event country name</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "data.array.event.country.sortname",
            "description": "<p>Event country sortname</p>"
          },
          {
            "group": "200",
            "type": "Array[]",
            "optional": false,
            "field": "data.array.event.state",
            "description": "<p>Array Event state data</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "data.array.event.state.id",
            "description": "<p>Event state id</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "data.array.event.state.name",
            "description": "<p>Event state name</p>"
          },
          {
            "group": "200",
            "type": "Array[]",
            "optional": false,
            "field": "data.array.event.city",
            "description": "<p>Array Event city data</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "data.array.event.city.id",
            "description": "<p>Event city id</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "data.array.event.city.name",
            "description": "<p>Event city name</p>"
          },
          {
            "group": "200",
            "type": "Array[]",
            "optional": false,
            "field": "data.array.event.demand",
            "description": "<p>Array Event demand data</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "data.array.event.demand.id",
            "description": "<p>Event demand data id</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "data.array.event.demand.demand_type_id",
            "description": "<p>Event demand data demand type id</p>"
          },
          {
            "group": "200",
            "type": "Array[]",
            "optional": false,
            "field": "data.array.event.demand.demand_type",
            "description": "<p>Array Event demand data demand type data</p>"
          },
          {
            "group": "200",
            "type": "Array[]",
            "optional": false,
            "field": "data.array.event.demand.demand_type.id",
            "description": "<p>Id of demand type</p>"
          },
          {
            "group": "200",
            "type": "Array[]",
            "optional": false,
            "field": "data.array.event.demand.demand_type.title",
            "description": "<p>Name of demand type</p>"
          },
          {
            "group": "200",
            "type": "Array[]",
            "optional": false,
            "field": "data.array.event.demand.money",
            "description": "<p>Array  array money data</p>"
          },
          {
            "group": "200",
            "type": "Array[]",
            "optional": false,
            "field": "data.array.event.demand.money.array",
            "description": "<p>array money data</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "data.array.event.demand.money.array.id",
            "description": "<p>Array  money id</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "data.array.event.demand.money.array.event_demand_id",
            "description": "<p>Array  money event demand id</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "data.array.event.demand.money.array.account",
            "description": "<p>Array  money account</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "data.array.event.demand.money.array.summ",
            "description": "<p>Array  money summ</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "data.array.event.demand.money.array.payment_frequency_id",
            "description": "<p>Array  money payment frequency id</p>"
          },
          {
            "group": "200",
            "type": "Array[]",
            "optional": false,
            "field": "data.array.event.demand.volunteers",
            "description": "<p>Array  array volunteers data</p>"
          },
          {
            "group": "200",
            "type": "Array[]",
            "optional": false,
            "field": "data.array.event.demand.volunteers.array",
            "description": "<p>array volunteers data</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "data.array.event.demand.volunteers.array.id",
            "description": "<p>volunteers id</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "data.array.event.demand.volunteers.array.event_demand_id",
            "description": "<p>volunteers event demand id</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "data.array.event.demand.volunteers.array.name",
            "description": "<p>volunteers name</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "data.array.event.demand.volunteers.array.count",
            "description": "<p>volunteers count</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "data.array.event.demand.volunteers.array.event_volunteer_response_count",
            "description": "<p>volunteers response count</p>"
          },
          {
            "group": "200",
            "type": "Array[]",
            "optional": false,
            "field": "data.array.event.demand.supplies",
            "description": "<p>array supplies data</p>"
          },
          {
            "group": "200",
            "type": "Array[]",
            "optional": false,
            "field": "data.array.event.demand.supplies.a",
            "description": "<p>array supplies data</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "data.array.event.demand.supplies.array.id",
            "description": "<p>supplies id</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "data.array.event.demand.supplies.array.event_demand_id",
            "description": "<p>supplies event demand id</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "data.array.event.demand.supplies.array.name",
            "description": "<p>supplies name</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "data.array.event.demand.supplies.array.count",
            "description": "<p>supplies count</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "data.array.event.demand.supplies.array.event_supply_response_sum",
            "description": "<p>supplies response count</p>"
          },
          {
            "group": "200",
            "type": "Array[]",
            "optional": false,
            "field": "data.array.event.demand.supplies.array.event_supply_response",
            "description": "<p>supplies response array data</p>"
          },
          {
            "group": "200",
            "type": "Array[]",
            "optional": false,
            "field": "data.array.event.demand.supplies.array.event_supply_response.array",
            "description": "<p>supplies response array data</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "data.array.event.demand.supplies.array.event_supply_response.array.id",
            "description": "<p>supplies response id</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "data.array.event.demand.supplies.array.event_supply_response.array.event_supply_id",
            "description": "<p>supplies response event supply id</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "data.array.event.demand.supplies.array.event_supply_response.array.user_id",
            "description": "<p>supplies response user id</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "data.array.event.demand.supplies.array.event_supply_response.array.count",
            "description": "<p>supplies response count</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "data.array.event.demand.supplies.array.event_supply_response.array.parcel_status",
            "description": "<p>supplies response parcel status</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "first_page_url",
            "description": "<p>Url of the first page.</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "last_page_url",
            "description": "<p>Url of the last page.</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "next_page_url",
            "description": "<p>Url of the next page.</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "path",
            "description": "<p>Base URL of request.</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "from",
            "description": "<p>Number of start element.</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "to",
            "description": "<p>Number of end element.</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "total",
            "description": "<p>Count of all elements.</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "per_page",
            "description": "<p>Elements on page.</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "last_page",
            "description": "<p>Number of the last page.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "   HTTP/1.1 200 OK\n {\n    \"current_page\":1,\n    \"data\":\n        [\n            {\n                \"id\":4,\n                \"title\":\"testing\",\n                \"story\":\"testing story\",\n                \"short_story\":\"short_story\",\n                \"address\":\"lalalala\",\n                \"type_destination_id\":10,\n                \"purpose_id\":18,\n                \"religion_id\":11,\n                \"country_id\":1,\n                \"state_id\":1,\n                \"city_id\":1,\n                \"user_id\":1,\n                \"event_status_id\":0,\n                \"is_approved\":1,\n                \"is_submit\":1,\n                \"created_at\":\"2018-05-17 11:39:00\",\n                \"updated_at\":\"2018-05-17 11:39:00\",\n                \"finish_date\":\"2018-05-17\",\n                \"comments_count\":0,\n                \"user\":\n                    {\n                        \"id\":1,\n                        \"name\":\"Test User\"\n                    },\n                \"images\":\n                    [\n                        {\n                            \"id\":3,\n                            \"event_id\":4,\n                            \"image_id\":5,\n                            \"created_at\":null,\n                            \"updated_at\":null,\n                            \"is_preview\":1,\n                            \"image\":\n                                {\n                                    \"title\":\"test2\",\n                                    \"url\":\"storage\\/images\\/YuJPIpEwRN19wQoPctCVDVs1CkZ1mLFuHeDc7tfp.jpeg\",\n                                }\n                        }\n                    ]\n                \"event_status\":\n                    {\n                        \"id\":12,\n                        \"title\":\"Trending\"\n                    }\n                \"purpose\":\n                    {\n                        \"id\":18,\n                        \"title\":\"Children & Education\"\n                    },\n                \"religion\":\n                    {\n                        \"id\":11,\n                        \"title\":\"Christianity\"\n                    },\n                \"type_destination\":\n                    {\n                        \"id\":10,\n                        \"title\":\"Charity\"\n                    },\n                \"country\":\n                    {\n                        \"id\":1,\n                        \"name\":\"Afghanistan\",\n                        \"sortname\":\"AF\"\n                    },\n                \"state\":\n                    {\n                        \"id\":1,\n                        \"name\":\"Andaman and Nicobar Islands\"\n                    },\n                \"city\":\n                    {\n                        \"id\":1,\n                        \"name\":\"Bombuflat\"\n                    },\n                \"demand\":\n                    [\n                        {\n                            \"id\":1,\n                            \"demand_type_id\":1,\n                            \"demand_type\":\n                                {\n                                    \"id\":1,\n                                    \"title\":\"Many\",\n                                },\n                            \"volunteers\":[],\n                            \"supplies\":[],\n                            \"money\":\n                                [\n                                    {\n                                        \"id\":2,\n                                        \"event_demand_id\":1,\n                                        \"account\":\"635168132101651\",\n                                        \"summ\":1230000,\n                                        \"payment_frequency_id\":5\n                                    }\n                                ]\n                        },\n                    ],\n                    [\n                        {\n                            \"id\":1,\n                            \"demand_type_id\":2,\n                            \"demand_type\":\n                                {\n                                    \"id\":2,\n                                    \"title\":\"Volunteers\",\n                                },\n                            \"volunteers\":\n                                [\n                                    {\n                                        \"id\":2,\n                                        \"event_demand_id\":2,\n                                        \"name\":\"test 2\",\n                                        \"count\":22,\n                                        \"special_skills\":0,\n                                        \"description\":null,\n                                        \"event_volunteer_response_count\":1\n                                    },\n                                    .......\n                                ],\n                            \"supplies\":[],\n                            \"money\":[]\n                        },\n                    ],\n                    [\n                        {\n                            \"id\":1,\n                            \"demand_type_id\":3,\n                            \"demand_type\":\n                                {\n                                    \"id\":3,\n                                    \"title\":\"Supplies\",\n                                },\n                            \"volunteers\":[],\n                            \"supplies\":\n                                [\n                                    {\n                                        \"id\":1,\n                                        \"event_demand_id\":2,\n                                        \"name\":\"Test 1\",\n                                        \"count\":2,\n                                        \"delivery\":0,\n                                        \"description\":null,\n                                        \"event_supply_response_sum\":4,\n                                        \"event_supply_response\":\n                                            [\n                                                {\n                                                    \"id\":1,\n                                                    \"event_supply_id\":1,\n                                                    \"user_id\":2,\n                                                    \"count\":2,\n                                                    \"user_approved\":1,\n                                                    \"parcel_status\":\"pending\",\n                                                },\n                                                .....\n                                            ]\n                                    },\n                                    .......\n                                ],\n                            \"money\":[]\n                        },\n                    ]\n            },\n        ],\n    \"first_page_url\":\"http:\\/\\/charity.test\\/api\\/event\\/search?page=1\",\n    \"from\":1,\n    \"last_page\":1,\n    \"last_page_url\":\"http:\\/\\/charity.test\\/api\\/event\\/search?page=1\",\n    \"next_page_url\":null,\n    \"path\":\"http:\\/\\/charity.test\\/api\\/event\\/search\",\n    \"per_page\":16,\n    \"prev_page_url\":null,\n    \"to\":4,\n    \"total\":4\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./app/Http/Controllers/User/EventController.php",
    "groupTitle": "Users_Event"
  },
  {
    "type": "post",
    "url": "/api/admin/event/draft",
    "title": "Get Draft Event",
    "name": "Get_Users_Draft_Event",
    "group": "Users_Event",
    "permission": [
      {
        "name": "User",
        "title": "User access",
        "description": "<p>Access only for authentication users</p>"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "page",
            "description": "<p>Number of page. Default 1</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n     \"page\":2\n}",
          "type": "json"
        }
      ]
    },
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "X-CSRF-TOKEN",
            "description": "<p>X-CSRF-TOKEN.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"X-CSRF-TOKEN\": \"Gnknh68NbfXCay7GZUIouJQtEO67BPgQ9QckOXCD\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "current_page",
            "description": "<p>Number of the page.</p>"
          },
          {
            "group": "200",
            "type": "Array[]",
            "optional": false,
            "field": "data",
            "description": "<p>Page data of events.</p>"
          },
          {
            "group": "200",
            "type": "Array[]",
            "optional": false,
            "field": "data.array",
            "description": "<p>Data array of event.</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "data.array.event.id",
            "description": "<p>Event id</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "data.array.event.title",
            "description": "<p>Event title</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "data.array.event.story",
            "description": "<p>Event story</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "data.array.event.short_story",
            "description": "<p>Event short story</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "data.array.event.address",
            "description": "<p>Event address</p>"
          },
          {
            "group": "200",
            "type": "Bool",
            "optional": false,
            "field": "data.array.event.is_approved",
            "description": "<p>Event approved status(true - is approved)</p>"
          },
          {
            "group": "200",
            "type": "Bool",
            "optional": false,
            "field": "data.array.event.is_submit",
            "description": "<p>Event submit status(true - is submit)</p>"
          },
          {
            "group": "200",
            "type": "Array[]",
            "optional": false,
            "field": "data.array.event.user",
            "description": "<p>Event Author data</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "data.array.event.user.id",
            "description": "<p>Author user id</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "data.array.event.user.name",
            "description": "<p>Author name</p>"
          },
          {
            "group": "200",
            "type": "Array[]",
            "optional": false,
            "field": "data.array.event.images",
            "description": "<p>Array Event preview</p>"
          },
          {
            "group": "200",
            "type": "Array[]",
            "optional": false,
            "field": "data.array.event.images.array",
            "description": "<p>Array image data</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "data.array.event.images.array.id",
            "description": "<p>Event image id</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "data.array.event.images.array.image_id",
            "description": "<p>Event image file id</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "data.array.event.images.array.is_preview",
            "description": "<p>Preview status of image</p>"
          },
          {
            "group": "200",
            "type": "Array[]",
            "optional": false,
            "field": "data.array.event.images.array.image",
            "description": "<p>Array Event image file data</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "data.array.event.images.array.image.title",
            "description": "<p>Event image file title</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "data.array.event.images.array.image.url",
            "description": "<p>Event image file url</p>"
          },
          {
            "group": "200",
            "type": "Array[]",
            "optional": false,
            "field": "data.array.event.event_status",
            "description": "<p>Array Event status data</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "data.array.event.event_status.id",
            "description": "<p>Event status id</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "data.array.event.event_status.title",
            "description": "<p>Event status title</p>"
          },
          {
            "group": "200",
            "type": "Array[]",
            "optional": false,
            "field": "data.array.event.purpose",
            "description": "<p>Array Event purpose data</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "data.array.event.purpose.id",
            "description": "<p>Event purpose id</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "data.array.event.purpose.title",
            "description": "<p>Event purpose title</p>"
          },
          {
            "group": "200",
            "type": "Array[]",
            "optional": false,
            "field": "data.array.event.religion",
            "description": "<p>Array Event religion data</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "data.array.event.religion.id",
            "description": "<p>Event religion id</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "data.array.event.religion.title",
            "description": "<p>Event religion title</p>"
          },
          {
            "group": "200",
            "type": "Array[]",
            "optional": false,
            "field": "data.array.event.type_destination",
            "description": "<p>Array Event type destination data</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "data.array.event.type_destination.id",
            "description": "<p>Event type destination id</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "data.array.event.type_destination.title",
            "description": "<p>Event type destination title</p>"
          },
          {
            "group": "200",
            "type": "Array[]",
            "optional": false,
            "field": "data.array.event.country",
            "description": "<p>Array Event country data</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "data.array.event.country.id",
            "description": "<p>Event country id</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "data.array.event.country.name",
            "description": "<p>Event country name</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "data.array.event.country.sortname",
            "description": "<p>Event country sortname</p>"
          },
          {
            "group": "200",
            "type": "Array[]",
            "optional": false,
            "field": "data.array.event.state",
            "description": "<p>Array Event state data</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "data.array.event.state.id",
            "description": "<p>Event state id</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "data.array.event.state.name",
            "description": "<p>Event state name</p>"
          },
          {
            "group": "200",
            "type": "Array[]",
            "optional": false,
            "field": "data.array.event.city",
            "description": "<p>Array Event city data</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "data.array.event.city.id",
            "description": "<p>Event city id</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "data.array.event.city.name",
            "description": "<p>Event city name</p>"
          },
          {
            "group": "200",
            "type": "Array[]",
            "optional": false,
            "field": "data.array.event.demand",
            "description": "<p>Array Event demand data</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "data.array.event.demand.id",
            "description": "<p>Event demand data id</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "data.array.event.demand.demand_type_id",
            "description": "<p>Event demand data demand type id</p>"
          },
          {
            "group": "200",
            "type": "Array[]",
            "optional": false,
            "field": "data.array.event.demand.demand_type",
            "description": "<p>Array Event demand data demand type data</p>"
          },
          {
            "group": "200",
            "type": "Array[]",
            "optional": false,
            "field": "data.array.event.demand.demand_type.id",
            "description": "<p>Id of demand type</p>"
          },
          {
            "group": "200",
            "type": "Array[]",
            "optional": false,
            "field": "data.array.event.demand.demand_type.title",
            "description": "<p>Name of demand type</p>"
          },
          {
            "group": "200",
            "type": "Array[]",
            "optional": false,
            "field": "data.array.event.demand.money",
            "description": "<p>Array Event demand data demand type array money data</p>"
          },
          {
            "group": "200",
            "type": "Array[]",
            "optional": false,
            "field": "data.array.event.demand.money.array",
            "description": "<p>Event demand data demand type array money data</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "data.array.event.demand.money.array.id",
            "description": "<p>Array Event demand data demand type money id</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "data.array.event.demand.money.array.event_demand_id",
            "description": "<p>Array Event demand data demand type money event demand id</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "data.array.event.demand.money.array.account",
            "description": "<p>Array Event demand data demand type money account</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "data.array.event.demand.money.array.summ",
            "description": "<p>Array Event demand data demand type money summ</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "data.array.event.demand.money.array.payment_frequency_id",
            "description": "<p>Array Event demand data demand type money payment frequency id</p>"
          },
          {
            "group": "200",
            "type": "Array[]",
            "optional": false,
            "field": "data.array.event.demand.volunteers",
            "description": "<p>Array  array volunteers data</p>"
          },
          {
            "group": "200",
            "type": "Array[]",
            "optional": false,
            "field": "data.array.event.demand.volunteers.array",
            "description": "<p>array volunteers data</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "data.array.event.demand.volunteers.array.id",
            "description": "<p>volunteers id</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "data.array.event.demand.volunteers.array.event_demand_id",
            "description": "<p>volunteers event demand id</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "data.array.event.demand.volunteers.array.name",
            "description": "<p>volunteers name</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "data.array.event.demand.volunteers.array.count",
            "description": "<p>volunteers count</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "data.array.event.demand.volunteers.array.event_volunteer_response_count",
            "description": "<p>volunteers response count</p>"
          },
          {
            "group": "200",
            "type": "Array[]",
            "optional": false,
            "field": "data.array.event.demand.supplies",
            "description": "<p>array supplies data</p>"
          },
          {
            "group": "200",
            "type": "Array[]",
            "optional": false,
            "field": "data.array.event.demand.supplies.a",
            "description": "<p>array supplies data</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "data.array.event.demand.supplies.array.id",
            "description": "<p>supplies id</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "data.array.event.demand.supplies.array.event_demand_id",
            "description": "<p>supplies event demand id</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "data.array.event.demand.supplies.array.name",
            "description": "<p>supplies name</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "data.array.event.demand.supplies.array.count",
            "description": "<p>supplies count</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "data.array.event.demand.supplies.array.event_supply_response_sum",
            "description": "<p>supplies response count</p>"
          },
          {
            "group": "200",
            "type": "Array[]",
            "optional": false,
            "field": "data.array.event.demand.supplies.array.event_supply_response",
            "description": "<p>supplies response array data</p>"
          },
          {
            "group": "200",
            "type": "Array[]",
            "optional": false,
            "field": "data.array.event.demand.supplies.array.event_supply_response.array",
            "description": "<p>supplies response array data</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "data.array.event.demand.supplies.array.event_supply_response.array.id",
            "description": "<p>supplies response id</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "data.array.event.demand.supplies.array.event_supply_response.array.event_supply_id",
            "description": "<p>supplies response event supply id</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "data.array.event.demand.supplies.array.event_supply_response.array.user_id",
            "description": "<p>supplies response user id</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "data.array.event.demand.supplies.array.event_supply_response.array.count",
            "description": "<p>supplies response count</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "data.array.event.demand.supplies.array.event_supply_response.array.parcel_status",
            "description": "<p>supplies response parcel status</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "first_page_url",
            "description": "<p>Url of the first page.</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "last_page_url",
            "description": "<p>Url of the last page.</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "next_page_url",
            "description": "<p>Url of the next page.</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "path",
            "description": "<p>Base URL of request.</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "from",
            "description": "<p>Number of start element.</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "to",
            "description": "<p>Number of end element.</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "total",
            "description": "<p>Count of all elements.</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "per_page",
            "description": "<p>Elements on page.</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "last_page",
            "description": "<p>Number of the last page.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "   HTTP/1.1 200 OK\n {\n    \"current_page\":1,\n    \"data\":\n        [\n            {\n                \"id\":4,\n                \"title\":\"testing\",\n                \"story\":\"testing story\",\n                \"short_story\":\"short_story\",\n                \"address\":\"lalalala\",\n                \"type_destination_id\":10,\n                \"purpose_id\":18,\n                \"religion_id\":11,\n                \"country_id\":1,\n                \"state_id\":1,\n                \"city_id\":1,\n                \"user_id\":1,\n                \"event_status_id\":0,\n                \"is_approved\":1,\n                \"is_submit\":1,\n                \"created_at\":\"2018-05-17 11:39:00\",\n                \"updated_at\":\"2018-05-17 11:39:00\",\n                \"finish_date\":\"2018-05-17\",\n                \"comments_count\":0,\n                \"user\":\n                    {\n                        \"id\":1,\n                        \"name\":\"Test User\"\n                    },\n                \"images\":\n                    [\n                        {\n                            \"id\":3,\n                            \"event_id\":4,\n                            \"image_id\":5,\n                            \"created_at\":null,\n                            \"updated_at\":null,\n                            \"is_preview\":1,\n                            \"image\":\n                                {\n                                    \"title\":\"test2\",\n                                    \"url\":\"storage\\/images\\/YuJPIpEwRN19wQoPctCVDVs1CkZ1mLFuHeDc7tfp.jpeg\",\n                                }\n                        }\n                    ]\n                \"event_status\":\n                    {\n                        \"id\":12,\n                        \"title\":\"Trending\"\n                    }\n                \"purpose\":\n                    {\n                        \"id\":18,\n                        \"title\":\"Children & Education\"\n                    },\n                \"religion\":\n                    {\n                        \"id\":11,\n                        \"title\":\"Christianity\"\n                    },\n                \"type_destination\":\n                    {\n                        \"id\":10,\n                        \"title\":\"Charity\"\n                    },\n                \"country\":\n                    {\n                        \"id\":1,\n                        \"name\":\"Afghanistan\",\n                        \"sortname\":\"AF\"\n                    },\n                \"state\":\n                    {\n                        \"id\":1,\n                        \"name\":\"Andaman and Nicobar Islands\"\n                    },\n                \"city\":\n                    {\n                        \"id\":1,\n                        \"name\":\"Bombuflat\"\n                    },\n                \"demand\":\n                    [\n                        {\n                            \"id\":1,\n                            \"demand_type_id\":1,\n                            \"demand_type\":\n                                {\n                                    \"id\":1,\n                                    \"title\":\"Many\",\n                                },\n                            \"volunteers\":[],\n                            \"supplies\":[],\n                            \"money\":\n                                [\n                                    {\n                                        \"id\":2,\n                                        \"event_demand_id\":1,\n                                        \"account\":\"635168132101651\",\n                                        \"summ\":1230000,\n                                        \"payment_frequency_id\":5\n                                    }\n                                ]\n                        },\n                    ],\n                    [\n                        {\n                            \"id\":1,\n                            \"demand_type_id\":2,\n                            \"demand_type\":\n                                {\n                                    \"id\":2,\n                                    \"title\":\"Volunteers\",\n                                },\n                            \"volunteers\":\n                                [\n                                    {\n                                        \"id\":2,\n                                        \"event_demand_id\":2,\n                                        \"name\":\"test 2\",\n                                        \"count\":22,\n                                        \"special_skills\":0,\n                                        \"description\":null,\n                                        \"event_volunteer_response_count\":1\n                                    },\n                                    .......\n                                ],\n                            \"supplies\":[],\n                            \"money\":[]\n                        },\n                    ],\n                    [\n                        {\n                            \"id\":1,\n                            \"demand_type_id\":3,\n                            \"demand_type\":\n                                {\n                                    \"id\":3,\n                                    \"title\":\"Supplies\",\n                                },\n                            \"volunteers\":[],\n                            \"supplies\":\n                                [\n                                    {\n                                        \"id\":1,\n                                        \"event_demand_id\":2,\n                                        \"name\":\"Test 1\",\n                                        \"count\":2,\n                                        \"delivery\":0,\n                                        \"description\":null,\n                                        \"event_supply_response_sum\":4,\n                                        \"event_supply_response\":\n                                            [\n                                                {\n                                                    \"id\":1,\n                                                    \"event_supply_id\":1,\n                                                    \"user_id\":2,\n                                                    \"count\":2,\n                                                    \"user_approved\":1,\n                                                    \"parcel_status\":\"pending\",\n                                                },\n                                                .....\n                                            ]\n                                    },\n                                    .......\n                                ],\n                            \"money\":[]\n                        },\n                    ]\n            },\n        ],\n    \"first_page_url\":\"http:\\/\\/charity.test\\/api\\/event\\/search?page=1\",\n    \"from\":1,\n    \"last_page\":1,\n    \"last_page_url\":\"http:\\/\\/charity.test\\/api\\/event\\/search?page=1\",\n    \"next_page_url\":null,\n    \"path\":\"http:\\/\\/charity.test\\/api\\/event\\/search\",\n    \"per_page\":16,\n    \"prev_page_url\":null,\n    \"to\":4,\n    \"total\":4\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./app/Http/Controllers/User/EventController.php",
    "groupTitle": "Users_Event"
  },
  {
    "type": "post",
    "url": "/api/event/send_back",
    "title": "Get Send Back Event",
    "name": "Get_Users_Send_Back_Event",
    "group": "Users_Event",
    "permission": [
      {
        "name": "User",
        "title": "User access",
        "description": "<p>Access only for authentication users</p>"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "page",
            "description": "<p>Number of page. Default 1</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n     \"page\":2\n}",
          "type": "json"
        }
      ]
    },
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "X-CSRF-TOKEN",
            "description": "<p>X-CSRF-TOKEN.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"X-CSRF-TOKEN\": \"Gnknh68NbfXCay7GZUIouJQtEO67BPgQ9QckOXCD\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "current_page",
            "description": "<p>Number of the page.</p>"
          },
          {
            "group": "200",
            "type": "Array[]",
            "optional": false,
            "field": "data",
            "description": "<p>Page data of events.</p>"
          },
          {
            "group": "200",
            "type": "Array[]",
            "optional": false,
            "field": "data.array",
            "description": "<p>Data array of event.</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "data.array.event.id",
            "description": "<p>Event id</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "data.array.event.title",
            "description": "<p>Event title</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "data.array.event.story",
            "description": "<p>Event story</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "data.array.event.short_story",
            "description": "<p>Event short story</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "data.array.event.address",
            "description": "<p>Event address</p>"
          },
          {
            "group": "200",
            "type": "Bool",
            "optional": false,
            "field": "data.array.event.is_approved",
            "description": "<p>Event approved status(true - is approved)</p>"
          },
          {
            "group": "200",
            "type": "Bool",
            "optional": false,
            "field": "data.array.event.is_submit",
            "description": "<p>Event submit status(true - is submit)</p>"
          },
          {
            "group": "200",
            "type": "Array[]",
            "optional": false,
            "field": "data.array.event.user",
            "description": "<p>Event Author data</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "data.array.event.user.id",
            "description": "<p>Author user id</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "data.array.event.user.name",
            "description": "<p>Author name</p>"
          },
          {
            "group": "200",
            "type": "Array[]",
            "optional": false,
            "field": "data.array.event.images",
            "description": "<p>Array Event preview</p>"
          },
          {
            "group": "200",
            "type": "Array[]",
            "optional": false,
            "field": "data.array.event.images.array",
            "description": "<p>Array image data</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "data.array.event.images.array.id",
            "description": "<p>Event image id</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "data.array.event.images.array.image_id",
            "description": "<p>Event image file id</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "data.array.event.images.array.is_preview",
            "description": "<p>Preview status of image</p>"
          },
          {
            "group": "200",
            "type": "Array[]",
            "optional": false,
            "field": "data.array.event.images.array.image",
            "description": "<p>Array Event image file data</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "data.array.event.images.array.image.title",
            "description": "<p>Event image file title</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "data.array.event.images.array.image.url",
            "description": "<p>Event image file url</p>"
          },
          {
            "group": "200",
            "type": "Array[]",
            "optional": false,
            "field": "data.array.event.event_status",
            "description": "<p>Array Event status data</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "data.array.event.event_status.id",
            "description": "<p>Event status id</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "data.array.event.event_status.title",
            "description": "<p>Event status title</p>"
          },
          {
            "group": "200",
            "type": "Array[]",
            "optional": false,
            "field": "data.array.event.purpose",
            "description": "<p>Array Event purpose data</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "data.array.event.purpose.id",
            "description": "<p>Event purpose id</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "data.array.event.purpose.title",
            "description": "<p>Event purpose title</p>"
          },
          {
            "group": "200",
            "type": "Array[]",
            "optional": false,
            "field": "data.array.event.religion",
            "description": "<p>Array Event religion data</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "data.array.event.religion.id",
            "description": "<p>Event religion id</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "data.array.event.religion.title",
            "description": "<p>Event religion title</p>"
          },
          {
            "group": "200",
            "type": "Array[]",
            "optional": false,
            "field": "data.array.event.type_destination",
            "description": "<p>Array Event type destination data</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "data.array.event.type_destination.id",
            "description": "<p>Event type destination id</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "data.array.event.type_destination.title",
            "description": "<p>Event type destination title</p>"
          },
          {
            "group": "200",
            "type": "Array[]",
            "optional": false,
            "field": "data.array.event.country",
            "description": "<p>Array Event country data</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "data.array.event.country.id",
            "description": "<p>Event country id</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "data.array.event.country.name",
            "description": "<p>Event country name</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "data.array.event.country.sortname",
            "description": "<p>Event country sortname</p>"
          },
          {
            "group": "200",
            "type": "Array[]",
            "optional": false,
            "field": "data.array.event.state",
            "description": "<p>Array Event state data</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "data.array.event.state.id",
            "description": "<p>Event state id</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "data.array.event.state.name",
            "description": "<p>Event state name</p>"
          },
          {
            "group": "200",
            "type": "Array[]",
            "optional": false,
            "field": "data.array.event.city",
            "description": "<p>Array Event city data</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "data.array.event.city.id",
            "description": "<p>Event city id</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "data.array.event.city.name",
            "description": "<p>Event city name</p>"
          },
          {
            "group": "200",
            "type": "Array[]",
            "optional": false,
            "field": "data.array.event.demand",
            "description": "<p>Array Event demand data</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "data.array.event.demand.id",
            "description": "<p>Event demand data id</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "data.array.event.demand.demand_type_id",
            "description": "<p>Event demand data demand type id</p>"
          },
          {
            "group": "200",
            "type": "Array[]",
            "optional": false,
            "field": "data.array.event.demand.demand_type",
            "description": "<p>Array Event demand data demand type data</p>"
          },
          {
            "group": "200",
            "type": "Array[]",
            "optional": false,
            "field": "data.array.event.demand.demand_type.id",
            "description": "<p>Id of demand type</p>"
          },
          {
            "group": "200",
            "type": "Array[]",
            "optional": false,
            "field": "data.array.event.demand.demand_type.title",
            "description": "<p>Name of demand type</p>"
          },
          {
            "group": "200",
            "type": "Array[]",
            "optional": false,
            "field": "data.array.event.demand.money",
            "description": "<p>Array Event demand data demand type array money data</p>"
          },
          {
            "group": "200",
            "type": "Array[]",
            "optional": false,
            "field": "data.array.event.demand.money.array",
            "description": "<p>Event demand data demand type array money data</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "data.array.event.demand.money.array.id",
            "description": "<p>Array Event demand data demand type money id</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "data.array.event.demand.money.array.event_demand_id",
            "description": "<p>Array Event demand data demand type money event demand id</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "data.array.event.demand.money.array.account",
            "description": "<p>Array Event demand data demand type money account</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "data.array.event.demand.money.array.summ",
            "description": "<p>Array Event demand data demand type money summ</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "data.array.event.demand.money.array.payment_frequency_id",
            "description": "<p>Array Event demand data demand type money payment frequency id</p>"
          },
          {
            "group": "200",
            "type": "Array[]",
            "optional": false,
            "field": "data.array.event.demand.volunteers",
            "description": "<p>Array  array volunteers data</p>"
          },
          {
            "group": "200",
            "type": "Array[]",
            "optional": false,
            "field": "data.array.event.demand.volunteers.array",
            "description": "<p>array volunteers data</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "data.array.event.demand.volunteers.array.id",
            "description": "<p>volunteers id</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "data.array.event.demand.volunteers.array.event_demand_id",
            "description": "<p>volunteers event demand id</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "data.array.event.demand.volunteers.array.name",
            "description": "<p>volunteers name</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "data.array.event.demand.volunteers.array.count",
            "description": "<p>volunteers count</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "data.array.event.demand.volunteers.array.event_volunteer_response_count",
            "description": "<p>volunteers response count</p>"
          },
          {
            "group": "200",
            "type": "Array[]",
            "optional": false,
            "field": "data.array.event.demand.supplies",
            "description": "<p>array supplies data</p>"
          },
          {
            "group": "200",
            "type": "Array[]",
            "optional": false,
            "field": "data.array.event.demand.supplies.a",
            "description": "<p>array supplies data</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "data.array.event.demand.supplies.array.id",
            "description": "<p>supplies id</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "data.array.event.demand.supplies.array.event_demand_id",
            "description": "<p>supplies event demand id</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "data.array.event.demand.supplies.array.name",
            "description": "<p>supplies name</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "data.array.event.demand.supplies.array.count",
            "description": "<p>supplies count</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "data.array.event.demand.supplies.array.event_supply_response_sum",
            "description": "<p>supplies response count</p>"
          },
          {
            "group": "200",
            "type": "Array[]",
            "optional": false,
            "field": "data.array.event.demand.supplies.array.event_supply_response",
            "description": "<p>supplies response array data</p>"
          },
          {
            "group": "200",
            "type": "Array[]",
            "optional": false,
            "field": "data.array.event.demand.supplies.array.event_supply_response.array",
            "description": "<p>supplies response array data</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "data.array.event.demand.supplies.array.event_supply_response.array.id",
            "description": "<p>supplies response id</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "data.array.event.demand.supplies.array.event_supply_response.array.event_supply_id",
            "description": "<p>supplies response event supply id</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "data.array.event.demand.supplies.array.event_supply_response.array.user_id",
            "description": "<p>supplies response user id</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "data.array.event.demand.supplies.array.event_supply_response.array.count",
            "description": "<p>supplies response count</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "data.array.event.demand.supplies.array.event_supply_response.array.parcel_status",
            "description": "<p>supplies response parcel status</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "first_page_url",
            "description": "<p>Url of the first page.</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "last_page_url",
            "description": "<p>Url of the last page.</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "next_page_url",
            "description": "<p>Url of the next page.</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "path",
            "description": "<p>Base URL of request.</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "from",
            "description": "<p>Number of start element.</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "to",
            "description": "<p>Number of end element.</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "total",
            "description": "<p>Count of all elements.</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "per_page",
            "description": "<p>Elements on page.</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "last_page",
            "description": "<p>Number of the last page.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "   HTTP/1.1 200 OK\n {\n    \"current_page\":1,\n    \"data\":\n        [\n            {\n                \"id\":4,\n                \"title\":\"testing\",\n                \"story\":\"testing story\",\n                \"short_story\":\"short_story\",\n                \"address\":\"lalalala\",\n                \"type_destination_id\":10,\n                \"purpose_id\":18,\n                \"religion_id\":11,\n                \"country_id\":1,\n                \"state_id\":1,\n                \"city_id\":1,\n                \"user_id\":1,\n                \"event_status_id\":0,\n                \"is_approved\":1,\n                \"is_submit\":1,\n                \"created_at\":\"2018-05-17 11:39:00\",\n                \"updated_at\":\"2018-05-17 11:39:00\",\n                \"finish_date\":\"2018-05-17\",\n                \"comments_count\":0,\n                \"user\":\n                    {\n                        \"id\":1,\n                        \"name\":\"Test User\"\n                    },\n                \"images\":\n                    [\n                        {\n                            \"id\":3,\n                            \"event_id\":4,\n                            \"image_id\":5,\n                            \"created_at\":null,\n                            \"updated_at\":null,\n                            \"is_preview\":1,\n                            \"image\":\n                                {\n                                    \"title\":\"test2\",\n                                    \"url\":\"storage\\/images\\/YuJPIpEwRN19wQoPctCVDVs1CkZ1mLFuHeDc7tfp.jpeg\",\n                                }\n                        }\n                    ]\n                \"event_status\":\n                    {\n                        \"id\":12,\n                        \"title\":\"Trending\"\n                    }\n                \"purpose\":\n                    {\n                        \"id\":18,\n                        \"title\":\"Children & Education\"\n                    },\n                \"religion\":\n                    {\n                        \"id\":11,\n                        \"title\":\"Christianity\"\n                    },\n                \"type_destination\":\n                    {\n                        \"id\":10,\n                        \"title\":\"Charity\"\n                    },\n                \"country\":\n                    {\n                        \"id\":1,\n                        \"name\":\"Afghanistan\",\n                        \"sortname\":\"AF\"\n                    },\n                \"state\":\n                    {\n                        \"id\":1,\n                        \"name\":\"Andaman and Nicobar Islands\"\n                    },\n                \"city\":\n                    {\n                        \"id\":1,\n                        \"name\":\"Bombuflat\"\n                    },\n                \"demand\":\n                    [\n                        {\n                            \"id\":1,\n                            \"demand_type_id\":1,\n                            \"demand_type\":\n                                {\n                                    \"id\":1,\n                                    \"title\":\"Many\",\n                                },\n                            \"volunteers\":[],\n                            \"supplies\":[],\n                            \"money\":\n                                [\n                                    {\n                                        \"id\":2,\n                                        \"event_demand_id\":1,\n                                        \"account\":\"635168132101651\",\n                                        \"summ\":1230000,\n                                        \"payment_frequency_id\":5\n                                    }\n                                ]\n                        },\n                    ],\n                    [\n                        {\n                            \"id\":1,\n                            \"demand_type_id\":2,\n                            \"demand_type\":\n                                {\n                                    \"id\":2,\n                                    \"title\":\"Volunteers\",\n                                },\n                            \"volunteers\":\n                                [\n                                    {\n                                        \"id\":2,\n                                        \"event_demand_id\":2,\n                                        \"name\":\"test 2\",\n                                        \"count\":22,\n                                        \"special_skills\":0,\n                                        \"description\":null,\n                                        \"event_volunteer_response_count\":1\n                                    },\n                                    .......\n                                ],\n                            \"supplies\":[],\n                            \"money\":[]\n                        },\n                    ],\n                    [\n                        {\n                            \"id\":1,\n                            \"demand_type_id\":3,\n                            \"demand_type\":\n                                {\n                                    \"id\":3,\n                                    \"title\":\"Supplies\",\n                                },\n                            \"volunteers\":[],\n                            \"supplies\":\n                                [\n                                    {\n                                        \"id\":1,\n                                        \"event_demand_id\":2,\n                                        \"name\":\"Test 1\",\n                                        \"count\":2,\n                                        \"delivery\":0,\n                                        \"description\":null,\n                                        \"event_supply_response_sum\":4,\n                                        \"event_supply_response\":\n                                            [\n                                                {\n                                                    \"id\":1,\n                                                    \"event_supply_id\":1,\n                                                    \"user_id\":2,\n                                                    \"count\":2,\n                                                    \"user_approved\":1,\n                                                    \"parcel_status\":\"pending\",\n                                                },\n                                                .....\n                                            ]\n                                    },\n                                    .......\n                                ],\n                            \"money\":[]\n                        },\n                    ]\n            },\n        ],\n    \"first_page_url\":\"http:\\/\\/charity.test\\/api\\/event\\/search?page=1\",\n    \"from\":1,\n    \"last_page\":1,\n    \"last_page_url\":\"http:\\/\\/charity.test\\/api\\/event\\/search?page=1\",\n    \"next_page_url\":null,\n    \"path\":\"http:\\/\\/charity.test\\/api\\/event\\/search\",\n    \"per_page\":16,\n    \"prev_page_url\":null,\n    \"to\":4,\n    \"total\":4\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./app/Http/Controllers/User/EventController.php",
    "groupTitle": "Users_Event"
  },
  {
    "type": "post",
    "url": "/api/event/un_approved",
    "title": "Get UnApproved Event",
    "name": "Get_Users_UnApproved_Event",
    "group": "Users_Event",
    "permission": [
      {
        "name": "User",
        "title": "User access",
        "description": "<p>Access only for authentication users</p>"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "page",
            "description": "<p>Number of page. Default 1</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n     \"page\":2\n}",
          "type": "json"
        }
      ]
    },
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "X-CSRF-TOKEN",
            "description": "<p>X-CSRF-TOKEN.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"X-CSRF-TOKEN\": \"Gnknh68NbfXCay7GZUIouJQtEO67BPgQ9QckOXCD\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "current_page",
            "description": "<p>Number of the page.</p>"
          },
          {
            "group": "200",
            "type": "Array[]",
            "optional": false,
            "field": "data",
            "description": "<p>Page data of events.</p>"
          },
          {
            "group": "200",
            "type": "Array[]",
            "optional": false,
            "field": "data.array",
            "description": "<p>Data array of event.</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "data.array.event.id",
            "description": "<p>Event id</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "data.array.event.title",
            "description": "<p>Event title</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "data.array.event.story",
            "description": "<p>Event story</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "data.array.event.short_story",
            "description": "<p>Event short story</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "data.array.event.address",
            "description": "<p>Event address</p>"
          },
          {
            "group": "200",
            "type": "Bool",
            "optional": false,
            "field": "data.array.event.is_approved",
            "description": "<p>Event approved status(true - is approved)</p>"
          },
          {
            "group": "200",
            "type": "Bool",
            "optional": false,
            "field": "data.array.event.is_submit",
            "description": "<p>Event submit status(true - is submit)</p>"
          },
          {
            "group": "200",
            "type": "Array[]",
            "optional": false,
            "field": "data.array.event.user",
            "description": "<p>Event Author data</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "data.array.event.user.id",
            "description": "<p>Author user id</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "data.array.event.user.name",
            "description": "<p>Author name</p>"
          },
          {
            "group": "200",
            "type": "Array[]",
            "optional": false,
            "field": "data.array.event.images",
            "description": "<p>Array Event preview</p>"
          },
          {
            "group": "200",
            "type": "Array[]",
            "optional": false,
            "field": "data.array.event.images.array",
            "description": "<p>Array image data</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "data.array.event.images.array.id",
            "description": "<p>Event image id</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "data.array.event.images.array.image_id",
            "description": "<p>Event image file id</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "data.array.event.images.array.is_preview",
            "description": "<p>Preview status of image</p>"
          },
          {
            "group": "200",
            "type": "Array[]",
            "optional": false,
            "field": "data.array.event.images.array.image",
            "description": "<p>Array Event image file data</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "data.array.event.images.array.image.title",
            "description": "<p>Event image file title</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "data.array.event.images.array.image.url",
            "description": "<p>Event image file url</p>"
          },
          {
            "group": "200",
            "type": "Array[]",
            "optional": false,
            "field": "data.array.event.event_status",
            "description": "<p>Array Event status data</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "data.array.event.event_status.id",
            "description": "<p>Event status id</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "data.array.event.event_status.title",
            "description": "<p>Event status title</p>"
          },
          {
            "group": "200",
            "type": "Array[]",
            "optional": false,
            "field": "data.array.event.purpose",
            "description": "<p>Array Event purpose data</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "data.array.event.purpose.id",
            "description": "<p>Event purpose id</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "data.array.event.purpose.title",
            "description": "<p>Event purpose title</p>"
          },
          {
            "group": "200",
            "type": "Array[]",
            "optional": false,
            "field": "data.array.event.religion",
            "description": "<p>Array Event religion data</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "data.array.event.religion.id",
            "description": "<p>Event religion id</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "data.array.event.religion.title",
            "description": "<p>Event religion title</p>"
          },
          {
            "group": "200",
            "type": "Array[]",
            "optional": false,
            "field": "data.array.event.type_destination",
            "description": "<p>Array Event type destination data</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "data.array.event.type_destination.id",
            "description": "<p>Event type destination id</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "data.array.event.type_destination.title",
            "description": "<p>Event type destination title</p>"
          },
          {
            "group": "200",
            "type": "Array[]",
            "optional": false,
            "field": "data.array.event.country",
            "description": "<p>Array Event country data</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "data.array.event.country.id",
            "description": "<p>Event country id</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "data.array.event.country.name",
            "description": "<p>Event country name</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "data.array.event.country.sortname",
            "description": "<p>Event country sortname</p>"
          },
          {
            "group": "200",
            "type": "Array[]",
            "optional": false,
            "field": "data.array.event.state",
            "description": "<p>Array Event state data</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "data.array.event.state.id",
            "description": "<p>Event state id</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "data.array.event.state.name",
            "description": "<p>Event state name</p>"
          },
          {
            "group": "200",
            "type": "Array[]",
            "optional": false,
            "field": "data.array.event.city",
            "description": "<p>Array Event city data</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "data.array.event.city.id",
            "description": "<p>Event city id</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "data.array.event.city.name",
            "description": "<p>Event city name</p>"
          },
          {
            "group": "200",
            "type": "Array[]",
            "optional": false,
            "field": "data.array.event.demand",
            "description": "<p>Array Event demand data</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "data.array.event.demand.id",
            "description": "<p>Event demand data id</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "data.array.event.demand.demand_type_id",
            "description": "<p>Event demand data demand type id</p>"
          },
          {
            "group": "200",
            "type": "Array[]",
            "optional": false,
            "field": "data.array.event.demand.demand_type",
            "description": "<p>Array Event demand data demand type data</p>"
          },
          {
            "group": "200",
            "type": "Array[]",
            "optional": false,
            "field": "data.array.event.demand.demand_type.id",
            "description": "<p>Id of demand type</p>"
          },
          {
            "group": "200",
            "type": "Array[]",
            "optional": false,
            "field": "data.array.event.demand.demand_type.title",
            "description": "<p>Name of demand type</p>"
          },
          {
            "group": "200",
            "type": "Array[]",
            "optional": false,
            "field": "data.array.event.demand.money",
            "description": "<p>Array Event demand data demand type array money data</p>"
          },
          {
            "group": "200",
            "type": "Array[]",
            "optional": false,
            "field": "data.array.event.demand.money.array",
            "description": "<p>Event demand data demand type array money data</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "data.array.event.demand.money.array.id",
            "description": "<p>Array Event demand data demand type money id</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "data.array.event.demand.money.array.event_demand_id",
            "description": "<p>Array Event demand data demand type money event demand id</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "data.array.event.demand.money.array.account",
            "description": "<p>Array Event demand data demand type money account</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "data.array.event.demand.money.array.summ",
            "description": "<p>Array Event demand data demand type money summ</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "data.array.event.demand.money.array.payment_frequency_id",
            "description": "<p>Array Event demand data demand type money payment frequency id</p>"
          },
          {
            "group": "200",
            "type": "Array[]",
            "optional": false,
            "field": "data.array.event.demand.volunteers",
            "description": "<p>Array  array volunteers data</p>"
          },
          {
            "group": "200",
            "type": "Array[]",
            "optional": false,
            "field": "data.array.event.demand.volunteers.array",
            "description": "<p>array volunteers data</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "data.array.event.demand.volunteers.array.id",
            "description": "<p>volunteers id</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "data.array.event.demand.volunteers.array.event_demand_id",
            "description": "<p>volunteers event demand id</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "data.array.event.demand.volunteers.array.name",
            "description": "<p>volunteers name</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "data.array.event.demand.volunteers.array.count",
            "description": "<p>volunteers count</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "data.array.event.demand.volunteers.array.event_volunteer_response_count",
            "description": "<p>volunteers response count</p>"
          },
          {
            "group": "200",
            "type": "Array[]",
            "optional": false,
            "field": "data.array.event.demand.supplies",
            "description": "<p>array supplies data</p>"
          },
          {
            "group": "200",
            "type": "Array[]",
            "optional": false,
            "field": "data.array.event.demand.supplies.a",
            "description": "<p>array supplies data</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "data.array.event.demand.supplies.array.id",
            "description": "<p>supplies id</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "data.array.event.demand.supplies.array.event_demand_id",
            "description": "<p>supplies event demand id</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "data.array.event.demand.supplies.array.name",
            "description": "<p>supplies name</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "data.array.event.demand.supplies.array.count",
            "description": "<p>supplies count</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "data.array.event.demand.supplies.array.event_supply_response_sum",
            "description": "<p>supplies response count</p>"
          },
          {
            "group": "200",
            "type": "Array[]",
            "optional": false,
            "field": "data.array.event.demand.supplies.array.event_supply_response",
            "description": "<p>supplies response array data</p>"
          },
          {
            "group": "200",
            "type": "Array[]",
            "optional": false,
            "field": "data.array.event.demand.supplies.array.event_supply_response.array",
            "description": "<p>supplies response array data</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "data.array.event.demand.supplies.array.event_supply_response.array.id",
            "description": "<p>supplies response id</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "data.array.event.demand.supplies.array.event_supply_response.array.event_supply_id",
            "description": "<p>supplies response event supply id</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "data.array.event.demand.supplies.array.event_supply_response.array.user_id",
            "description": "<p>supplies response user id</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "data.array.event.demand.supplies.array.event_supply_response.array.count",
            "description": "<p>supplies response count</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "data.array.event.demand.supplies.array.event_supply_response.array.parcel_status",
            "description": "<p>supplies response parcel status</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "first_page_url",
            "description": "<p>Url of the first page.</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "last_page_url",
            "description": "<p>Url of the last page.</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "next_page_url",
            "description": "<p>Url of the next page.</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "path",
            "description": "<p>Base URL of request.</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "from",
            "description": "<p>Number of start element.</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "to",
            "description": "<p>Number of end element.</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "total",
            "description": "<p>Count of all elements.</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "per_page",
            "description": "<p>Elements on page.</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "last_page",
            "description": "<p>Number of the last page.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "   HTTP/1.1 200 OK\n {\n    \"current_page\":1,\n    \"data\":\n        [\n            {\n                \"id\":4,\n                \"title\":\"testing\",\n                \"story\":\"testing story\",\n                \"short_story\":\"short_story\",\n                \"address\":\"lalalala\",\n                \"type_destination_id\":10,\n                \"purpose_id\":18,\n                \"religion_id\":11,\n                \"country_id\":1,\n                \"state_id\":1,\n                \"city_id\":1,\n                \"user_id\":1,\n                \"event_status_id\":0,\n                \"is_approved\":1,\n                \"is_submit\":1,\n                \"created_at\":\"2018-05-17 11:39:00\",\n                \"updated_at\":\"2018-05-17 11:39:00\",\n                \"finish_date\":\"2018-05-17\",\n                \"comments_count\":0,\n                \"user\":\n                    {\n                        \"id\":1,\n                        \"name\":\"Test User\"\n                    },\n                \"images\":\n                    [\n                        {\n                            \"id\":3,\n                            \"event_id\":4,\n                            \"image_id\":5,\n                            \"created_at\":null,\n                            \"updated_at\":null,\n                            \"is_preview\":1,\n                            \"image\":\n                                {\n                                    \"title\":\"test2\",\n                                    \"url\":\"storage\\/images\\/YuJPIpEwRN19wQoPctCVDVs1CkZ1mLFuHeDc7tfp.jpeg\",\n                                }\n                        }\n                    ]\n                \"event_status\":\n                    {\n                        \"id\":12,\n                        \"title\":\"Trending\"\n                    }\n                \"purpose\":\n                    {\n                        \"id\":18,\n                        \"title\":\"Children & Education\"\n                    },\n                \"religion\":\n                    {\n                        \"id\":11,\n                        \"title\":\"Christianity\"\n                    },\n                \"type_destination\":\n                    {\n                        \"id\":10,\n                        \"title\":\"Charity\"\n                    },\n                \"country\":\n                    {\n                        \"id\":1,\n                        \"name\":\"Afghanistan\",\n                        \"sortname\":\"AF\"\n                    },\n                \"state\":\n                    {\n                        \"id\":1,\n                        \"name\":\"Andaman and Nicobar Islands\"\n                    },\n                \"city\":\n                    {\n                        \"id\":1,\n                        \"name\":\"Bombuflat\"\n                    },\n                \"demand\":\n                    [\n                        {\n                            \"id\":1,\n                            \"demand_type_id\":1,\n                            \"demand_type\":\n                                {\n                                    \"id\":1,\n                                    \"title\":\"Many\",\n                                },\n                            \"volunteers\":[],\n                            \"supplies\":[],\n                            \"money\":\n                                [\n                                    {\n                                        \"id\":2,\n                                        \"event_demand_id\":1,\n                                        \"account\":\"635168132101651\",\n                                        \"summ\":1230000,\n                                        \"payment_frequency_id\":5\n                                    }\n                                ]\n                        },\n                    ],\n                    [\n                        {\n                            \"id\":1,\n                            \"demand_type_id\":2,\n                            \"demand_type\":\n                                {\n                                    \"id\":2,\n                                    \"title\":\"Volunteers\",\n                                },\n                            \"volunteers\":\n                                [\n                                    {\n                                        \"id\":2,\n                                        \"event_demand_id\":2,\n                                        \"name\":\"test 2\",\n                                        \"count\":22,\n                                        \"special_skills\":0,\n                                        \"description\":null,\n                                        \"event_volunteer_response_count\":1\n                                    },\n                                    .......\n                                ],\n                            \"supplies\":[],\n                            \"money\":[]\n                        },\n                    ],\n                    [\n                        {\n                            \"id\":1,\n                            \"demand_type_id\":3,\n                            \"demand_type\":\n                                {\n                                    \"id\":3,\n                                    \"title\":\"Supplies\",\n                                },\n                            \"volunteers\":[],\n                            \"supplies\":\n                                [\n                                    {\n                                        \"id\":1,\n                                        \"event_demand_id\":2,\n                                        \"name\":\"Test 1\",\n                                        \"count\":2,\n                                        \"delivery\":0,\n                                        \"description\":null,\n                                        \"event_supply_response_sum\":4,\n                                        \"event_supply_response\":\n                                            [\n                                                {\n                                                    \"id\":1,\n                                                    \"event_supply_id\":1,\n                                                    \"user_id\":2,\n                                                    \"count\":2,\n                                                    \"user_approved\":1,\n                                                    \"parcel_status\":\"pending\",\n                                                },\n                                                .....\n                                            ]\n                                    },\n                                    .......\n                                ],\n                            \"money\":[]\n                        },\n                    ]\n            },\n        ],\n    \"first_page_url\":\"http:\\/\\/charity.test\\/api\\/event\\/search?page=1\",\n    \"from\":1,\n    \"last_page\":1,\n    \"last_page_url\":\"http:\\/\\/charity.test\\/api\\/event\\/search?page=1\",\n    \"next_page_url\":null,\n    \"path\":\"http:\\/\\/charity.test\\/api\\/event\\/search\",\n    \"per_page\":16,\n    \"prev_page_url\":null,\n    \"to\":4,\n    \"total\":4\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./app/Http/Controllers/User/EventController.php",
    "groupTitle": "Users_Event"
  }
] });
