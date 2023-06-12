# QU-Beyond coding challenge.
Hi There! This project was created as a answer for the QU-Beyond coding challenge.

## Objective:

The objective of this challenge is not necessarily just to solve the problem - but to
evaluate your software development skills, code quality, creativity, and resourcefulness as a
potential future colleague. Please share the necessary artifacts you would provide to your
colleagues in a real-world professional setting.

## Problem to solve:

We have a simple API that returns a JSON array. We would like you to use HTML, CSS and
Javascript to read the API and display it in an organized way. In addition, you should add in
some sort of sorting mechanic to the front-end. Use preferably Vue.js as base and feel free to
add any other framework or library you would consider necessary to achieve the task.
`https://swapi.dev/documentation`
Feel free to use any data - but perhaps you can use the “planet” resource here.
There is no right answer - just looking for an understanding of how you interpret the assignment
and what decisions you make to build a simple project.
After finishing your code answer the following questions:
1. What's a closure? Where in the code is there a closure?
2. Which are the potential side-effects in any function? Could you point out any of these cases in
your code? Are they expected? Can they be avoided?


## About the project
This Vue.js project was created using `npm init vue@latest`.

### Follow this steps to run the project:

1. Position yourself in the root directory of the project `../qu-beyond-project`.
1. Run `npm install` to install all dependencies.
1. Run `npm run dev` to run the application in dev mode or `npm run build && npm run preview` to launch the application in production mode.

### Tests:

### Answers:
1. What's a closure ?
1. Closures JavaScript are a javascript feature that used to create private variables in JavaScript, encapsulating data within a function
and providing controlled access to that data, this also gives functions the ability to maintain state across multiple uses. Currently the code generated in this app doesn't have a closure.

2. Which are the potential side-effects in any function? Could you point out any of these cases in
your code? Are they expected? Can they be avoided?
2. Side effects of a function are changes or modifications that a function makes to variables or states outside of its scope. An example of this can be found in the `planetsStore.ts` file
inside the `getPlanets` function where it set the isFetching part of the state before and after fetching.
