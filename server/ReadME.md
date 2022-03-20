# _**BACKEND**_

# a.) MicroServices
## **crud.js** : 
This microservice is used to create reusable CRUD functions throughout the project.
- **createOne(request,model)**: this takes in the request and the data model which then creates a new data and stores it in a database.
- **readAll(response,model)**: this takes in the response and the data model which responds toa the request with all the data.
- **readOne(request,response,model)**: this takes in the request, response, the data model and responds with the data based on the id.
- **updateOne(request,response,model,key,value)**: this takes in the request, response, the data model, the data you will like to edit and the data you will to update the data to.
- **deleteOne(request,response,model)**: this takes in the request, response, the data model, the data you will like to edit and the data you will to update the data to.

## **response.js** :
This microservice is used to create a reusable response function.
- **response(response,status,message)**: this method takes in the response object, status to structure the response message and message to defin the task done
## Features

- Light/dark mode toggle
- Live previews
- Fullscreen mode
- Cross platform


## Route API Reference
## Users route

#### Post new User

```http
  POST /api/user/
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `none`      | `none` | none |

#### Get all Users

```http
  GET /api/users
```
| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `none`      | `none` | none |

#### Get single User

```http
  GET /api/user/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of user to fetch |

#### Add new follower

```http
  GET /api/user/${id}/follow?username=${username}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of the current user |
| `username`  | `query string` | **Required**. username of the user the current user wants to follow |

#### Update single User

```http
  PUT /api/user/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of user to update |

#### Delete single User

```http
  Delete /api/user/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of user to delete |



## Badges

[![MIT License](https://img.shields.io/apm/l/atomic-design-ui.svg?)](https://github.com/tterb/atomic-design-ui/blob/master/LICENSEs)

- Authors

- [@Stephen Ehiabhi](https://www.github.com/stephen-ehiabhi)

