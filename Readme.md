# HTTP Server vs Express

1. Routing

- HTTP Module, we check the routes manually. We define the endpoint by checking "req.url" within the conditions. Although it is useful in small projects, developing a medium and large-scale project with this method leads to code complexity and repetition.
- Express: with "app.get" or "app.post(/todos)" methods, writing and handling the code gets easier.

2. Middleware

- We need to manually create the HTTP module middleware-like functionality ourselves.
- Express also has an integrated middleware system. In this way, it is easier to compile and manipulate the written codes.

# EndPoints

- GET `/api/v1/cars` -> Get all car data
- POST `/api/v1/cars` -> Add new car data

- GET `/api/v1/cars/id` -> Ge the car data by ID
- PATCH `/api/v1/cars/id` -> Update the car data by ID
- DELETE `/api/v1/cars/id` -> Delete the car data by ID
#   N o d e J S . C a r D a t a  
 