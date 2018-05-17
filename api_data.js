define({ "api": [
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
          "content": "{\n     \"status\":1\n}",
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
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Purpose id.</p>"
          },
          {
            "group": "Success 200",
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
    "url": "/api/base/cities/search_parameters",
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
    "title": "Create video and image to event",
    "name": "Create_demand",
    "group": "Event",
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
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n  \"money\":\n     [\n         1 :\n             [\n                 'summ' : 10000,\n                 'payment_frequency' : 2\n                 'account' : '12345678932174'\n             ]\n     ],\n   \"volunteers\":\n     [\n         1 :\n             [\n                 'name' : 'Same name',\n                 'count' : 10\n             ]\n         2 :\n             [\n                 name' : 'Same name',\n                 'count' : 15\n             ]\n         ........\n     ],\n   \"supplies\":\n     [\n         1 :\n             [\n                 'name' : 'Same name',\n                 'count' : 10\n             ]\n         2 :\n             [\n                 name' : 'Same name',\n                 'count' : 15\n             ]\n         ........\n     ]\n   \"_token\" : \"Gnknh68NbfXCay7GZUIouJQtEO67BPgQ9QckOXCD\"\n}",
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
          "content": "HTTP/1.1 400 Bad Request\n{\n     \"supplies\":\n         [\n             \"The videos field is required.\"\n         ]\n }",
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
            "description": "<p>URL of image</p>"
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
    "type": "put",
    "url": "/api/event/:event_id/chat/create",
    "title": "Create new message to event chat",
    "name": "Create_messate",
    "group": "Event",
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
    "groupTitle": "Event"
  },
  {
    "type": "delete",
    "url": "/api/event/:id",
    "title": "Delete  event",
    "name": "Delete_event",
    "group": "Event",
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
            "type": "array[]",
            "optional": false,
            "field": "data",
            "description": "<p>Array Event Data.</p>"
          },
          {
            "group": "200",
            "type": "array[]",
            "optional": false,
            "field": "data.event",
            "description": "<p>Event Data</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "data.event.id",
            "description": "<p>Event id</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "data.event.title",
            "description": "<p>Event title</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "data.event.story",
            "description": "<p>Event story</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "data.event.short_story",
            "description": "<p>Event short story</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "data.event.address",
            "description": "<p>Event address</p>"
          },
          {
            "group": "200",
            "type": "Bool",
            "optional": false,
            "field": "data.event.is_approved",
            "description": "<p>Event approved status(true - is approved)</p>"
          },
          {
            "group": "200",
            "type": "Bool",
            "optional": false,
            "field": "data.event.is_submit",
            "description": "<p>Event submit status(true - is submit)</p>"
          },
          {
            "group": "200",
            "type": "Array[]",
            "optional": false,
            "field": "data.event.user",
            "description": "<p>Event Author data</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "data.event.user.id",
            "description": "<p>Author user id</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "data.event.user.name",
            "description": "<p>Author name</p>"
          },
          {
            "group": "200",
            "type": "Boot",
            "optional": false,
            "field": "data.event.user.is_admin",
            "description": "<p>Author it is user-admin(true - is admin)</p>"
          },
          {
            "group": "200",
            "type": "Array[]",
            "optional": false,
            "field": "data.event.images",
            "description": "<p>Array Event image data</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "data.event.images.id",
            "description": "<p>Event image id</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "data.event.images.image_id",
            "description": "<p>Event image file id</p>"
          },
          {
            "group": "200",
            "type": "Array[]",
            "optional": false,
            "field": "data.event.images.image",
            "description": "<p>Array Event image file data</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "data.event.images.image.id",
            "description": "<p>Event image file id</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "data.event.images.image.title",
            "description": "<p>Event image file title</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "data.event.images.image.url",
            "description": "<p>Event image file url</p>"
          },
          {
            "group": "200",
            "type": "Array[]",
            "optional": false,
            "field": "data.event.videos",
            "description": "<p>Array Event video data</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "data.event.videos.id",
            "description": "<p>Event video id</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "data.event.videos.video_id",
            "description": "<p>Event video file id</p>"
          },
          {
            "group": "200",
            "type": "Array[]",
            "optional": false,
            "field": "data.event.videos.video",
            "description": "<p>Array Event video file data</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "data.event.videos.video.id",
            "description": "<p>Event video file id</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "data.event.videos.video.title",
            "description": "<p>Event video file title</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "data.event.videos.video.url",
            "description": "<p>Event video file url</p>"
          },
          {
            "group": "200",
            "type": "Array[]",
            "optional": false,
            "field": "data.event.status",
            "description": "<p>Array Event status data</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "data.event.status.id",
            "description": "<p>Event status id</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "data.event.status.title",
            "description": "<p>Event status title</p>"
          },
          {
            "group": "200",
            "type": "Array[]",
            "optional": false,
            "field": "data.event.purpose",
            "description": "<p>Array Event purpose data</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "data.event.purpose.id",
            "description": "<p>Event purpose id</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "data.event.purpose.title",
            "description": "<p>Event purpose title</p>"
          },
          {
            "group": "200",
            "type": "Array[]",
            "optional": false,
            "field": "data.event.religion",
            "description": "<p>Array Event religion data</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "data.event.religion.id",
            "description": "<p>Event religion id</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "data.event.religion.title",
            "description": "<p>Event religion title</p>"
          },
          {
            "group": "200",
            "type": "Array[]",
            "optional": false,
            "field": "data.event.type_destination",
            "description": "<p>Array Event type destination data</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "data.event.type_destination.id",
            "description": "<p>Event type destination id</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "data.event.type_destination.title",
            "description": "<p>Event type destination title</p>"
          },
          {
            "group": "200",
            "type": "Array[]",
            "optional": false,
            "field": "data.event.country",
            "description": "<p>Array Event country data</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "data.event.country.id",
            "description": "<p>Event country id</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "data.event.country.name",
            "description": "<p>Event country name</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "data.event.country.sortname",
            "description": "<p>Event country sortname</p>"
          },
          {
            "group": "200",
            "type": "Array[]",
            "optional": false,
            "field": "data.event.state",
            "description": "<p>Array Event state data</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "data.event.state.id",
            "description": "<p>Event state id</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "data.event.state.name",
            "description": "<p>Event state name</p>"
          },
          {
            "group": "200",
            "type": "Array[]",
            "optional": false,
            "field": "data.event.city",
            "description": "<p>Array Event city data</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "data.event.city.id",
            "description": "<p>Event city id</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "data.event.city.name",
            "description": "<p>Event city name</p>"
          },
          {
            "group": "200",
            "type": "Array[]",
            "optional": false,
            "field": "data.event.demand",
            "description": "<p>Array Event demand data</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "data.event.demand.id",
            "description": "<p>Event demand data id</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "data.event.demand.demand_type_id",
            "description": "<p>Event demand data demand type id</p>"
          },
          {
            "group": "200",
            "type": "Array[]",
            "optional": false,
            "field": "data.event.demand.demand_type",
            "description": "<p>Array Event demand data demand type data</p>"
          },
          {
            "group": "200",
            "type": "Array[]",
            "optional": false,
            "field": "data.event.demand.demand_type.money",
            "description": "<p>Array Event demand data demand type array money data</p>"
          },
          {
            "group": "200",
            "type": "Array[]",
            "optional": false,
            "field": "data.event.demand.demand_type.money.array",
            "description": "<p>Event demand data demand type array money data</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "data.event.demand.demand_type.money.array.id",
            "description": "<p>Array Event demand data demand type money id</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "data.event.demand.demand_type.money.array.event_demand_id",
            "description": "<p>Array Event demand data demand type money event demand id</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "data.event.demand.demand_type.money.array.account",
            "description": "<p>Array Event demand data demand type money account</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "data.event.demand.demand_type.money.array.summ",
            "description": "<p>Array Event demand data demand type money summ</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "data.event.demand.demand_type.money.array.payment_frequency_id",
            "description": "<p>Array Event demand data demand type money payment frequency id</p>"
          },
          {
            "group": "200",
            "type": "Array[]",
            "optional": false,
            "field": "data.event.demand.demand_type.volunteers",
            "description": "<p>Array Event demand data demand type array volunteers data</p>"
          },
          {
            "group": "200",
            "type": "Array[]",
            "optional": false,
            "field": "data.event.demand.demand_type.volunteers.array",
            "description": "<p>Event demand data demand type array volunteers data</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "data.event.demand.demand_type.volunteers.array.id",
            "description": "<p>Array Event demand data demand type volunteers id</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "data.event.demand.demand_type.volunteers.array.event_demand_id",
            "description": "<p>Array Event demand data demand type volunteers event demand id</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "data.event.demand.demand_type.volunteers.array.name",
            "description": "<p>Array Event demand data demand type volunteers name</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "data.event.demand.demand_type.volunteers.array.count",
            "description": "<p>Array Event demand data demand type volunteers count</p>"
          },
          {
            "group": "200",
            "type": "Array[]",
            "optional": false,
            "field": "data.event.demand.demand_type.supplies",
            "description": "<p>Array Event demand data demand type array supplies data</p>"
          },
          {
            "group": "200",
            "type": "Array[]",
            "optional": false,
            "field": "data.event.demand.demand_type.supplies.array",
            "description": "<p>Event demand data demand type array supplies data</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "data.event.demand.demand_type.supplies.array.id",
            "description": "<p>Array Event demand data demand type supplies id</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "data.event.demand.demand_type.supplies.array.event_demand_id",
            "description": "<p>Array Event demand data demand type supplies event demand id</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "data.event.demand.demand_type.supplies.array.name",
            "description": "<p>Array Event demand data demand type supplies name</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "data.event.demand.demand_type.supplies.array.count",
            "description": "<p>Array Event demand data demand type supplies count</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "   HTTP/1.1 200 OK\n[\n    {\n        \"id\":1,\n        \"title\":\"testing\",\n        \"story\":\"testing story\",\n        \"short_story\":\"short_story\",\n        \"address\":\"lalalala\",\n        \"is_approved\":0,\n        \"is_submit\":1,\n        \"user\":\n            {\n                \"id\":1,\n                \"name\":\"Test User\",\n                \"is_admin\":0\n            },\n        \"image\":\n            [\n                {\n                    \"id\":1,\n                    \"image_id\":1,\n                    \"image\":\n                        {\n                            \"id\":1,\n                            \"title\":\"test\",\n                            \"url\":\"storage\\/images\\/Ur4qM78zhHholK9Y5ylcxoUYlwdx29efD9bBCNG2.jpeg\"\n                        }\n                },\n                {\n                    \"id\":2,\n                    \"image_id\":2,\n                    \"image\":\n                        {\n                            \"id\":2,\n                            \"title\":\"test2\",\n                            \"url\":\"storage\\/images\\/YuJPIpEwRN19wQoPctCVDVs1CkZ1mLFuHeDc7tfp.jpeg\"\n                        }\n                },\n            ..........\n            ],\n        \"video\":\n            [\n                {\n                    \"id\":1,\n                    \"video_id\":13,\n                    \"video\":\n                        {\n                            \"id\":13,\n                            \"title\":\"test1\",\n                            \"url\":\"http:\\/\\/apidocjs.com\\/\"\n                        }\n                },\n                {\n                    \"id\":2,\n                    \"video_id\":14,\n                    \"video\":\n                        {\n                            \"id\":14,\n                            \"title\":\"test2\",\n                            \"url\":\"http:\\/\\/php.net\\/manual-lookup.php?pattern=sfghfdh&scope=quickref\"\n                        }\n                },\n                .......\n            ],\n        \"status\":\n            {\n                \"id\":12,\n                \"title\":\"Trending\"\n            },\n        \"purpose\":\n            {\n                \"id\":20,\n                \"title\":\"Human Rights\"\n            },\n        \"religion\":\n            {\n                \"id\":11,\n                \"title\":\"Christianity\"\n            },\n        \"type_destination\":\n            {\n                \"id\":10,\n                \"title\":\"Charity\"\n            },\n        \"demand\":\n            [\n                {\n                    \"id\":1,\n                    \"demand_type_id\":2,\n                    \"demand_type\":\n                        {\n                            \"id\":1,\n                            \"title\":\"Many\",\n                        },\n                    \"volunteers\":[],\n                    \"supplies\":[],\n                    \"money\":\n                        [\n                            {\n                                \"id\":2,\n                                \"event_demand_id\":1,\n                                \"account\":\"635168132101651\",\n                                \"summ\":1230000,\n                                \"payment_frequency_id\":5\n                            }\n                        ]\n                },\n                {\n                    \"id\":1,\n                    \"demand_type_id\":2,\n                    \"demand_type\":\n                        {\n                            \"id\":2,\n                            \"title\":\"Volunteers\",\n                        },\n                    \"volunteers\":\n                        [\n                            {\n                                \"id\":1,\n                                \"event_demand_id\":1,\n                                \"name\":\"test 1\",\n                                \"count\":10,\n                            },\n                            {\n                                \"id\":2,\n                                \"event_demand_id\":1,\n                                \"name\":\"test 2\",\n                                \"count\":22,\n                            },\n                        .......\n                        ],\n                    \"supplies\":[],\n                    \"money\":[]\n                },\n                {\n                    \"id\":1,\n                    \"demand_type_id\":2,\n                    \"demand_type\":\n                        {\n                            \"id\":3,\n                            \"title\":\"Supplies\",\n                        },\n                    \"volunteers\":[],\n                    \"supplies\":\n                        [\n                            {\n                                \"id\":1,\n                                \"event_demand_id\":1,\n                                \"name\":\"test 1\",\n                                \"count\":10,\n                            },\n                            {\n                                \"id\":2,\n                                \"event_demand_id\":1,\n                                \"name\":\"test 2\",\n                                \"count\":22,\n                            },\n                        .......\n                        ],\n                    \"money\":[]\n                },\n            ],\n        \"country\":\n            {\n                \"id\":1,\n                \"sortname\":\"AF\",\n                \"name\":\"Afghanistan\"\n            },\n        \"state\":\n            {\n                \"id\":1,\n                \"name\":\"Andaman and Nicobar Islands\"\n            },\n        \"city\":\n            {\n                \"id\":1,\n                \"name\":\"Bombuflat\"\n            }\n     }\n]",
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
          "content": "HTTP/1.1 201 OK\n {\n     \"id\":1,\n     \"title\":\"testing\",\n     \"story\":\"testing story\",\n     \"short_story\":\"short_story\",\n     \"address\":\"lalalala\",\n     \"type_destination_id\":5,\n     \"purpose_id\":10,\n     \"religion_id\":6,\n     \"country_id\":1,\n     \"state_id\":1,\n     \"city_id\":1,\n     \"user_id\":1,\n     \"status_id\":0,\n     \"is_approved\":0,\n     \"is_submit\":true,\n     \"created_at\":\"2018-05-15 12:26:13\",\n     \"updated_at\":\"2018-05-15 12:30:12\"\n }",
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
    "filename": "./app/Http/Controllers/Event/EventController.php",
    "groupTitle": "Event"
  },
  {
    "type": "put",
    "url": "/api/event/:id/update",
    "title": "Update new Event",
    "name": "Update_Event",
    "group": "Event",
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
    "url": "/api/event/media/:id/update_image",
    "title": "Update image of event",
    "name": "Update_Image",
    "group": "Event",
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
    "title": "Create video and image to event",
    "name": "Update_demand",
    "group": "Event",
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
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n  \"money\":\n     [\n         \"remove\":\n             [\n                 1\n             ]\n         \"add\":\n             [\n                 1 :\n                     [\n                         'summ' : 10000,\n                         'payment_frequency' : 2\n                         'account' : '12345678932174'\n                     ]\n             ]\n         \"update\":\n             [\n                 1 :\n                     [\n                         'id' : 1,\n                         'summ' : 10000,\n                         'payment_frequency' : 2\n                     ]\n     ],\n \"volunteers\":\n     [\n         \"remove\":\n             [\n                 1,\n                 2,\n                 .....\n             ]\n         \"add\":\n             [\n                 1 :\n                     [\n                         'name' : 'Same name',\n                         'count' : 10\n                     ]\n                 2 :\n                     [\n                         name' : 'Same name',\n                         'count' : 15\n                     ]\n                 ........\n             ]\n         \"update\":\n             [\n                 1 :\n                     [\n                         'id' : 1,\n                         'name' : 'Same name',\n                         'count' : 10\n                     ]\n                 2 :\n                     [\n                         'id' : 2,\n                         'name' : 'Same name',\n                         'count' : 15\n                     ]\n                 ........\n             ]\n     ],\n \"supplies\":\n     [\n         \"remove\":\n             [\n                 1,\n                 2,\n                 .....\n             ]\n         \"add\":\n             [\n                 1 :\n                     [\n                         'name' : 'Same name',\n                         'count' : 10\n                     ]\n                 2 :\n                     [\n                         name' : 'Same name',\n                         'count' : 15\n                     ]\n                 ........\n             ]\n         \"update\":\n             [\n                 1 :\n                     [\n                         'id' : 1,\n                         'name' : 'Same name',\n                         'count' : 10\n                     ]\n                 2 :\n                     [\n                         'id' : 2,\n                         'name' : 'Same name',\n                         'count' : 15\n                     ]\n                 ........\n             ]\n     ]\n   \"_token\" : \"Gnknh68NbfXCay7GZUIouJQtEO67BPgQ9QckOXCD\"\n}",
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
          "content": "HTTP/1.1 400 Bad Request\n{\n     \"supplies\":\n         [\n             \"The videos field is required.\"\n         ]\n }",
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
  }
] });
