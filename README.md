# Objective
This project was created to better understand the usage of Single SPA helper when architecting microfrontends.

# Architecture Overview
Having the orchestration files at the root of our project, we demand that our `packages` inner folder have a `index.js` file exposign `bootstrap`, `mount` and `unmount` methods. 

On this example, I have created two very simple application on two different stacks only for demostration purpose when accessing the proper routes.

# Routing & Running
Once you have runned through `npm start`, a white page will be promped.

After that, you are able to access `.../route` and `.../todo-list` in the Browsers Url to check the different projects.

# Webpack Work
Since webpacks does the transpilation job for us, we need:
- to explicitely tell to it what kind of `loader` it demands according to the `file type`,

That is why we have the `webpack.config.js` file.

# Registering the Micro Frontend
Using the `SingleSpa` router for messing with microfrontend, you need to:
- register the applications
- tell to SSPA, where it is located
- and what kind of threatment it has on a specific clause 
  - on our case, wheneaver we reach a certain URL, we point to what we want.
  
And for that, the `single-spa.config.js` does this job for you.
