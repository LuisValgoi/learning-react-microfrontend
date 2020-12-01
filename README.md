# Objective
This project was created to better understand the usage of Single SPA helper when architecting microfrontends.

# Architecture Overview
Having the orchestration files at the root of our project, we demand that our `packages` inner folder have a `index.js` file exposign `bootstrap`, `mount` and `unmount` methods. 
On this example, I have created two very simple application on two different stacks only for demostration purpose when accessing the correct routes

# Routing & Running
Once you have runned through `npm start`, a white page will be promped.

After that, you are able to access `.../route` and `.../todo-list` in the Browsers Url to check the different projects.
