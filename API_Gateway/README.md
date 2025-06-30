# API_Gateway:
FRONTEND   -     MIDDLEE-ND         - BACKEND

- We need an intermediate layer between the client side and the microservices
- Using this middle end, when client sends request we will be able to make decision that which microservice should actually respond to this request
- We can do message validation, response transformation, rate limiting
- We try to prepare an API Gateway that acts as this middle end.


# Npm install morgan
- https://www.npmjs.com/package/morgan


# http-proxy-middleware:
- https://www.npmjs.com/package/http-proxy-middleware
-   npm i http-proxy-middleware

# express-rate-limit - npm
- npm i express-rate-limit

# how to set headers in axios
- https://stackoverflow.com/questions/45578844/how-to-set-header-and-options-in-axios

# H/W
- Rubyonrails - rake routes  
- try to create the routes in root dir

# npx routelister

# list all routes in an Express.js app
- 🔧 1. Use express-list-endpoints (Recommended Alternative)
```

    npm install express-list-endpoints

    const express = require('express');
    const listEndpoints = require('express-list-endpoints');

    const app = express();

    // define routes
    app.get('/test', (req, res) => res.send('Hello'));
    app.post('/user', (req, res) => res.send('User added'));

    console.log(listEndpoints(app));

```
### ✅ Output:
```
    [
        { path: '/test', methods: ['GET'] },
        { path: '/user', methods: ['POST'] }
    ]

```

# rails scafolding:
- https://www.rubyguides.com/2020/03/rails-scaffolding