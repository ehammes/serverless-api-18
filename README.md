# LAB 18

## Project: serverless-api-18

### Author: Elizabeth Hammes

### Problem Domain  

Create a serverless REST API - a single resource REST API using a domain model, constructed using AWS Cloud Services

### Links and Resources

- [ci/cd](https://github.com/ehammes/serverless-api-18/actions) (GitHub Actions)

### Documentation

1. **What is the root URL to your API?** https://80jxvvtf2f.execute-api.us-east-1.amazonaws.com/alpha/people
2. **What are the routes? What are the inputs/outputs?**
    - POST : `/person` - inserts a record into the database, returns a record object by id
    - GET (all): `/person` - returns an array of objects representing the records from the db
    - GET (by id): `/person/id` - returns a specific object record by id
    - PUT : `/person/id` - updates a record in the database by id
    - DELETE : `/person/id` - deletes record by id, returns an empty object
3. **Testing**: verified the routes meet the expected inputs and outputs using AWS API Gateway, Lambda functions, and DynamoDB

**UML**
![UML_18](/public/img/uml_Lab18.png)
