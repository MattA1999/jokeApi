const express = require('express');
const path = require('path');
const root = path.join(__dirname, 'public');
const app = express();
const port = 3000;


// joke array
const jokes = [
    {
        id: 1,
        joke: "Why did the scarecrow win an award?",
        punchline: "Because he was outstanding in his field."
    },
    {
        id: 2,
        joke: "Why did the bicycle fall over?",
        punchline: "Because it was two-tired."
    },
    {
        id: 3,
        joke: "Why don’t skeletons fight each other?",
        punchline: "They don’t have the guts."
    }
];

// allows response with stat
app.use(express.static(root));

// root route to serve an html file
app.get('/', (request, response) => {
    response.sendFile(path.join(root, 'index.html'));
});

//joke API
app.get('/api/v1/random-joke', (request, response) => {
    const randomIndex = Math.floor(Math.random() * jokes.length);
    const joke = jokes[randomIndex];
    response.json(joke);
});


app.listen(port, () => {
    console.log(`http://localhost:${port}/`);
});

