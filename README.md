# Tibber app

React Coding Challenge

Designs: https://www.figma.com/file/3K8HYooIBPoJjf8CQWpKgY/Webdeveloper-Task?node-id=0%3A1

Requirements: [PDF Document](./docs/Full-stack_challenge.pdf)

## Used Technologies

- React
- Node.js
- Express
- Graphql
- Apollo

## Run the App Locally

- Install all dependencies from server/ and client/. Use npm install

- In the server/ create .env using required data (I sent you via email). To run server use npm run dev

- To run client at http://localhost:3000/ use npm start

## Directory structure

```
README.md
docs/
-- challenge requirements
client/
    public/
        images/
        -- pictures for cards
    src/
        assets/
        -- all the assets that we use in the app
            /СSS
            /logo
            /shared
            /textContent
        components/
        -- component structure
            Article/
            ChartBar/
                components/
                ChartBar.js
            Footer/
            ImgCards/
            Navbar/
        query/
        -- graphql query that we get from server
        App.js
        index.js
server/
    .env
    -- passwords and links that are used
    fake_data.js
    -- the data that was used when the api was not working
    index.js
    -- the main document of the server where we get the token, get the data and send it to the client
    schema.js
    -- schema of qraphql api
```

## Client side: styles, UI, UX

### UI:

- built responsively for mobile version (425 px), for tablet and laptop
- I tried to repeat the figma design as much as possible in static content

### CSS:

- the app used regular CSS for styling and the charts.js for charts

### UX:

- I deviated from the requirements and built the dynamic content(charts) the way I see it as a user
- In laptop and tablet versions, you can click on the chart items and view the specific temperature at a specific time
- In the mobile version, we have a chart wheel, where we can also scroll through the time with our finger during the day and view the temperature
- For the buttons, I made a switch to fahrenheit temperature and added unit indicators

## Client side: REACT

- for the state management of the application and for implementation of the app I used modern React, I also connected an additional library of beautiful-react-hooks
- I tried to distribute the code between different components as much as possible to make it easier to write unit tests

## Server side

- Initially, when your api did not work, I created my own api similar to yours

### Later, when everything worked, I had to rebuild the server side as follows:

- since we do not have authentication on the client, we carry it out on the server side
- subsequently, authentication and we get a token
- then, with the presence of a token, we send a request to the "database" to get a specific user (me) using an existing ID
- we send the received data from the servet to the client side

## Optimization:

### Styles, UI, UX

- In a real project, it is better to use style libraries at the level of the entire project. I prefer Styled-components, @emotio

- It is better to create all HTML elements on the project level and then customize them directly in a separate component

- For the content part, it is better to use a content management system. I worked with Strapi, Contentful, WordPress

### Client/React

- In real projects, we use a well-thought-out state management structure. Therefore, it is always better to understand in advance how we share data between different components, and how we pass props. In this application, I used simple react hooks

- Also, it is good practice to write unit tests

### Server

- Since this is the first time I'm doing just such a server-side implementation, please don't judge too harshly. Usually, we have a slightly different client-server-database interaction scheme. It all depends on the architecture and design of our application. In this particular case, I implemented authorization and got data from the database on the server side using Node.js, Express, Graphql
