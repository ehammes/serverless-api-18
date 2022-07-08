const dynamoose = require('dynamoose');

// Schema 
const personSchema = new dynamoose.Schema({
  id: String,
  name: String,
  age: String,
  location: String,
});

// create model
const personModel = dynamoose.model('serverless-api-18', personSchema);

exports.handler = async (event) => {
  console.log(event.queryStringParameters);

  let {id, name, age, location} = event.queryStringParameters;
  let person = {id, name, age, location}

  let response = { statusCode: null, body: null};
  
  try {
    let updatePersonRecord = await personModel.update(person);
    response.statusCode = 200;
    response.body = JSON.stringify(updatePersonRecord);
    
  } catch(e) {
    console.error(e);
    response.statusCode = 500;
    response.body = JSON.stringify(e.message);
  }
  return response;
};
