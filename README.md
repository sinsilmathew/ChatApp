What is Middleware?

Middleware is a function that receives the request and response objects of an HTTP request/response cycle. It may modify (transform) these objects before passing them to the next middleware function in the chain. It may decide to write to the response; it may also end the response without continuing the chain.

A very simple middleware function looks like this:
	
function logger(req,res,next){
  console.log(new Date(), req.method, req.url);
  next();
}

This is middleware at its simplest: a function with a signature of (req, res, next). In this particular example, a simple logger prints some information about these requests to the server console, and then continues the chain by calling next().

The job of Express is to manage your chain of middleware functions. All middleware should achieve three things:

    1.It should be a function that does something awesome
    2.It’s well-documented
    3.It can be easily mixed into your existing Express application


Async Hooks In Nodejs 
Async_hooks makes it easier to trace resources easily. It is an experimental API came with node version 8. Async_hooks module provides an API to register its callbacks tracking the lifetime of resources which was created inside any Node.js application.

 
The advantage of Async_hooks:

Async_hooks API has all the information of the life of all handle objects. So that you know about all the objects and what all the changes its going through in its lifetime.

const async_hooks = require('async_hooks');

For every async operation, create hooks function registers function to be called for a different lifetime. 

init(), before(), after(), destroy() these callbacks are optional and called for different lifetime events of each async operation.

const hooks = {
 init: init 
 before: before, 
 after: after,
 destroy: destroy
}
const asyncHook = asyncHooks.createHook(hooks)
