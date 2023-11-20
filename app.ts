const express = require('express');
const usuarioRoutes = require('./routes/usuarioRoutes');
const lanceRoutes = require('./routes/lanceRoutes');
const leilaoRoutes = require('./routes/leilaoRoutes');

const app = express();

app.use(express.json());
app.use('/api', usuarioRoutes);
app.use('/api', lanceRoutes);
app.use('/api', leilaoRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});