const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const productRoutes = require('./productroute.js');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// MongoDB connection
const uri = 'mongodb+srv://baggahimal5:saiywIEgzMyHW85B@product.i17lt3m.mongodb.net/?retryWrites=true&w=majority&appName=Product';
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

app.use('/api/products', productRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
