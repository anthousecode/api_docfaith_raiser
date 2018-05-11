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
    "url": "/api/tocken",
    "title": "X-CSRF-TOKEN",
    "name": "X_CSRF_TOKEN",
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
    "filename": "./routes/web.php",
    "groupTitle": "Base"
  }
] });
