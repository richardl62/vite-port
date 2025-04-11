/* eslint-disable quotes */
import express from 'express';
import path from 'path';

const app = express();
const port = process.env.PORT || 8000; 

// Serve static files from the React app build directory
app.use(express.static(path.join(__dirname, '..', 'build')));

// API routes (if any)
// Example:
app.get('/api/data', (req, res) => {
    res.json({ message: 'Hello from the API!' });
});

// The "catchall" handler: for any request that doesn't
// match one above, send back React's index.html file.
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});