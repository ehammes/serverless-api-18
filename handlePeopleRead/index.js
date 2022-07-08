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

  let response = { statusCode: null, body: null};

  try {
    let personRecord = await personModel.scan().exec();
    response.statusCode = 200;
    response.body = JSON.stringify(personRecord);
    
  } catch(e) {
    console.error(e);
    response.statusCode = 500;
    response.body = JSON.stringify(e.message);
  }
  return response;
};
