document.getElementById('get-joke').addEventListener('click', async () => {
    const response = await fetch('/api/v1/random-joke');
    const data = await response.json();
    document.getElementById('joke-text').textContent = data.joke;
    document.getElementById('joke-punchline').textContent = data.punchline;
});
