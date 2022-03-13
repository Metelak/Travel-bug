# **Travel-bug**     [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
* https://travelbug-project.herokuapp.com/ 

## Table of Contents

  * [User-Story](#user-story)
  * [Description](#description)
  * [Preview](#preview)
  * [Installation](#installation)
  * [Usage](#usage)
  * [Packages](#packages)
  * [Contributions](#contributions)
  * [Tests](#tests)
  * [License](#license)
  * [Questions](#questions)

  ---

  ## **User-Story**
  As a user I want to be able to look at travel locations and see comments, photos and ratings to plan my next trip. 

  ## **Description**
  To collab with teammates to develop a full-stack web application. Travel Bug is a webpage that hosts travel locations posted by users that allows individual users to browse for travel information and like locations to save to their personal login page. It also, lets the user create new location posts for other users to see in the homepage and lets them rate 1-5 stars on their trip/experience going to that location. 

  ## **Preview**
![travelbug-preview](https://user-images.githubusercontent.com/94068596/157773143-4e26809c-d6e7-428f-9ae7-0de7cf5b188a.jpg)
  ## **Installation**
  Step 1. Download [Travel-bug repo](https://github.com/Metelak/Travel-bug) to local file and open files in VS Code

  Step 2. Type "npm install" or "npm i" in command line to install all the dependencies

  Step 3. create a .env file and add code below with your MySql credintals
  ```
   DB_NAME='travelbug_db'
   DB_USER='your-mysql-username'
   DB_PASSWORD='your-mysql-password'
  ```
  Step 4. Source the schema
  * Login in to MySql shell - ```mysql -u <username> -p ```
  * Run command to source schema - ``` source db/schema.sql ```

  Step 5. Seed the tables 
  ```
  npm run seed
  ```
  ## **Usage**
  * To run the server locally after installation Run
      ```
      npm start
     ```
  * Or visit our webpage [Travel Bug](https://travelbug-project.herokuapp.com/ )
## **Packages**
* [Express](http://expressjs.com/)
* [MySQL2](https://www.npmjs.com/package/mysql2)
* [Sequelize](https://www.npmjs.com/package/sequelize)
* [dotenv](https://www.npmjs.com/package/dotenv)
* [Node JS](https://nodejs.org/en/)
* [eslint](https://eslint.org/)
* [Handlebars](https://handlebarsjs.com/)
* [Bootstrap](https://getbootstrap.com/)
* [Heroku](https://id.heroku.com/)
 

## **Contributions**
Group collaborators:
* [Metelak](https://github.com/Metelak)
* [mimi5930](https://github.com/mimi5930)
* [robel-codes](https://github.com/robel-codes)
* [austinslatey](https://github.com/austinslatey)

## **Tests**
* If you'd like to test the routes, run the server using [Insomnia](https://insomnia.rest/plugins/insomnia-plugin-xml-json-response)

## **License** 
The MIT License (MIT)
Copyright © 2022 <copyright holders>

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the “Software”), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
  

## **Questions**

If any questions arise..

* Visit my Github at: [https://github.com/Metelak](https://github.com/Metelak) or contact any of the app collaboraters, GitHub accounts listed above.
