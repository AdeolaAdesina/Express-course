# Get Request

Means you're trying to retrieve a resource on a server.

The req parameter gives you all the information about the client that's making the request.

You can get info such as cookies, ip address, headers.

The response object is responsible for sending response back to the client.

```
const express = require('express');

const app = express();
const PORT = 3001;

app.listen(PORT, () => console.log(`Running express server on Port ${PORT}!`))

//But we don't have any route defined, we cannot visit any route currently.

app.get('/groceries', (req, res) => {
    res.send([
        {
        item: 'milk',
        quantity: 2,
        },
        {
        item: 'cereal',
        quantity: 4,
        },
    ]);
});
```

![Alt text](Screenshot_150.png)
