const express = require('express');
const axios = require('axios');


const app = express();
const port = 3000; // Укажите необходимый порт

// Запускаем сервер
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
