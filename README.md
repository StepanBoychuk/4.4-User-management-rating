This is my REST API for User managment. It have several endpoints:

On
>GET api/users

will return list of all users.This endpoint has two query parameters such as **page**(by default is set to 0) and **amount**(by default is set to 3)

>GET api/users/:id

will return profile of user with this id.

>POST /api/users/signup

will signup user with data from request body. Request body should have

**nickname** (required), **firstName**, **lastName** and **password**(required) fields.

>POST /api/users/signin

will set authorisation header with JWT token. Require **username** and **password** in request body

>PUT /api/users/:id

will change fields of registered user. Require JWT token in authorisation header. Change the passing fields from request body.

>DEL /api/users/:id

will soft delete user with this id. Require JWT token in authorisation header.

>POST /api/user/:id/vote

will vote for user with :id. Require JWT token in authorisation header and "voteType" field in request body. "voteType" can be only "1" or "-1"