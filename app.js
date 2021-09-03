const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const path = require('path')

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/views/index.html")
});

app.use('/public', express.static(path.join(__dirname, 'public')));

app.listen(PORT, () => {
    console.log(`App listening at http://localhost:${PORT}`);
})