Get Sample - Client and Server

## Features
- Search words by Language and Category in YouTube video scripts (Google youtube Data API)
- Start a video from a scene including a searched word
- Highlight a searched word
- Move video play time to clicked text time
- Sync scripts to video scenes with highlighting (YouTube iFrame Player API)
- Search word definitions, synonyms, parts of speech in dictionary (Words API)
- Save and delete words in user's own word lists
- Login with Google (Google Oauth, Passport.js)

## Installation
```
...
```

## Tech
### 1. Client Side
- JavaScript (ES6)
- React for component-based-architechture
- Redux for state management
- HTTP request using Axios
- Google YouTube Data Api
- Google OAuth
- Passport.js, authentication middleware from node.js

- Sass, stylesheet

### 2. Server Side
- Node.js
- Express, Node.js web-application framework
- Mongo DB Atlas
- Mongoose, object data modeling library for Mongo DB Atlas
- Proxy, for client-server integration

### 3. Test
- Jest and Enzyme for Unit test
- Cypress, JavaScript End-to-End testing framework

## Version Control
- Git, Github
- Trello for managing scheluled tasks

## Challenges
- Task Time Schedule Management
2 weeks, a short time for completing this project got me under pressure. I separated this project into a small task unit according to my deadline. However, sometimes a small task took a longer time than I expected because I was faced with unexpected situations. For instance, before starting this project, I could not get YouTube subscription Infomation which got successfully when I tested YouTube Data API because my website domain is not verified. Verifying takes 2 - 3 weeks. I ended up consumed much time searching for solutions. I learned how important precious testing before starting a project is and practiced to decide what is a priority.
- Slow Search Speed : quota limit, local,
- Search Logic Implememt
- Open Module Error Handling : try catch, flow continously
- Video Timed transcript Sync Implement
- Different Unit data management
- Same State, not change : +0.001, -0.001, life cycle, Video On Specific Time

## Things To do
- Practice scheduling task
- Improving Search speed
- Improving Search logic
- Changing local data to fetching youtube requesting data
- Improving Reactive design for component reusability
- Refactoring for code reusability