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
- **response(response,status,message)**: this methos takes in the response object, status to structure the response message and message to defin the task done