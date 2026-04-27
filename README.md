# card validator api 

this is a sinple api that i created which it core function is to mainly validate card number using the luhn algorithm 

it provide and endpoint that you send a post request which validate the card number and give you accurate response 

# how to use the api and validate card

send a POST request to /api/card/validate with the json body data 
{
    cardNumber: "string of the card digit"
}

here are the response you will expect and the status code 
notice that the api is a standard one so you already know what are the field containing details

success: boolean, this means the server doesnt encounter an error while processing 
validated: boolean, this means that it has passed through the validation phase 
isValid: a boolean representing whether the card is valid or not it is nested inside the data object 
data: {
    isValid: true
}


if successfully processed 

status 200

{
    success: true,
    message: "Card number is valid",
    validated: true,
    data: {
      isValid: false
    }
}


if we dont provide valid cardNumber field on request 

status 400

{
    success: true,
    message: "Please provide a valid card number",
    validated: false,
    data: {
      isValid: false
    }
}

if something went wrong on the server while processing 


status 500

{
    success: false,
    message: "Internal server error",
    validated: false,
    data: {
      isValid: false
    }
}


# how to setup the sever
this server uses the modern express js framework for javascript together with typescript 

to set this server up you need to follow this steps

- installing modules 
 run this on terminal 
  npm i -D typescript ts-node-dev @typescipt/express @typescript/node express colors

- understand the file structure for ease usage and running code 
server 
  controllers - cardController.ts
  routers - cardValidator.ts
  utilities - cardValidator.ts
  middlewares - error.ts logger.ts
  server.ts
.env
package.json
.gitgnore 
README.md
tsconfig.json
vercel.json
dist

after that adjust your env to your desired need, make sure to install all modules using npm install,
then finally navigate to the server directory and start it 
cd server
npm start
this will build your dist and start the server 

