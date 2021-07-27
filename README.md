# JavaScript Frontend/Rails API - CRUD Functionality

## **Config Object**
 * Without a second argument, `.fetch()` defaults to a GET request.
 * The optional second argument allows us to specify which type of request we'd like to make. 
 * The second argument is an object with information about that request.

**Example:**
  ```
  const configObj = {
    method: "POST", // or "PATCH" or "DELETE"
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    }, 
    body: JSON.stringify() // the argument for JSON.stringify is the information we want to send back to the server -- we only use this with POST or PATCH requests.
  }
  ```
* `method` is where we specify the type of request we'd like to make.
* `headers` allow us to specify the type of information we'd like to send and recieve.
* `body` is the information we want to send to the server to create or update an object.

## **POST Requests**
* Used to create a new object/instance on our server.
* Does not require an id.
```
const configObj = {
  method: 'POST',
  headers: {
    "Content-Type": "application/json",
    "Accept": "application/json"
  },
  body: JSON.stringify(formData)
};

fetch('http://localhost:3000/route-we-want-post-to', configObj)
.then(resp => resp.json())
.then(data => {
  // whatever we want to do with the data, usually render it to the DOM.
})
```

## **DELETE Requests**
* Used to delete an object/instance from our server.
* Requires an id.
```
const configObj = {
  method: 'DELETE',
  headers: {
    "Content-Type": "application/json",
    "Accept": "application/json"
  }
};

fetch('http://localhost:3000/route-we-want-to-access/id', configObj)
.then(resp => resp.json())
.then(data => {
  // we can console.log or alert() the message we wrote in our controller as the json rendered with a DELETE request
  console.log(data.message)
});

// we also want to remove this element from the DOM.
```

## **PATCH Requests**
* Used to update an object/instance on our server.
* Require an id.