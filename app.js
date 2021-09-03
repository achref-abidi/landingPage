const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/views/index.html")
});

app.use(express.static(__dirname + "/public/style"));

app.listen(PORT, () => {
    console.log(`App listening at http://localhost:${PORT}`);
})