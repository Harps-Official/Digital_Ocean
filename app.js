const express = require('express');
const app = express();
const port = process.env.PORT || 8080;

app.get('/', (req, res) => {
  res.send('<h1>Website Berhasil Live!</h1><p>Aplikasi shark-app Anda sudah berjalan.</p>');
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
