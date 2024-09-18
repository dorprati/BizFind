const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect('mongodb://localhost:27017/businessDirectory', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const restaurantSchema = new mongoose.Schema({
  name: { type: String, required: true },
  category: { type: String, required: true },
  priceRange: { type: String, required: true },
  rating: { type: Number, required: true },
});

const shopSchema = new mongoose.Schema({
  name: { type: String, required: true },
  category: { type: String, required: true },
  priceRange: { type: String, required: true },
  rating: { type: Number, required: true },
});

const serviceSchema = new mongoose.Schema({
  name: { type: String, required: true },
  category: { type: String, required: true },
  rating: { type: Number, required: true },
});

const contactSchema = new mongoose.Schema({
  name: String,
  email: String,
  subject: String,
  message: String
});

const Restaurant = mongoose.model('Restaurant', restaurantSchema);
const Shop = mongoose.model('Shop', shopSchema);
const Service = mongoose.model('Service', serviceSchema);

const Contact = mongoose.model('Contact', contactSchema);

// Get all restaurants with optional filters
app.get('/api/restaurants', async (req, res) => {
  try {
      const { category = 'All', priceRange = 'All', rating = 'All' } = req.query;

      const query = {};
      if (category !== 'All') query.category = category;
      if (priceRange !== 'All') query.priceRange = priceRange;
      if (rating !== 'All') {
          const parsedRating = parseFloat(rating);
          if (!isNaN(parsedRating)) {
              query.rating = { $gte: parsedRating };
          }
      }

      const restaurants = await Restaurant.find(query);
      res.json(restaurants);
  } catch (error) {
      res.status(500).json({ message: error.message });
  }
});

// Get all shops with optional filters
app.get('/api/shops', async (req, res) => {
  try {
      const { category = 'All', priceRange = 'All', rating = 'All' } = req.query;

      const query = {};
      if (category !== 'All') query.category = category;
      if (priceRange !== 'All') query.priceRange = priceRange;
      if (rating !== 'All') {
          const parsedRating = parseFloat(rating);
          if (!isNaN(parsedRating)) {
              query.rating = { $gte: parsedRating };
          }
      }

      const shops = await Shop.find(query);
      res.json(shops);
  } catch (error) {
      res.status(500).json({ message: error.message });
  }
});

// Get all services with optional filters
app.get('/api/services', async (req, res) => {
  try {
      const { category = 'All', price = 'All', rating = 'All' } = req.query;

      const query = {};
      if (category !== 'All') query.category = category;
      if (rating !== 'All') {
          const parsedRating = parseFloat(rating);
          if (!isNaN(parsedRating)) {
              query.rating = { $gte: parsedRating };
          }
      }

      const services = await Service.find(query);
      res.json(services);
  } catch (error) {
      res.status(500).json({ message: error.message });
  }
});


// Update this route to accept a query parameter instead of a URL param
app.get('/api/business', async (req, res) => {
  try {
      const { name } = req.query; // Use req.query to access the name

      console.log('Fetching business with name:', name);

      // Use regex to match business name, making the search case-insensitive
      const business = await Service.findOne({ name: { $regex: new RegExp(`^${name}$`, 'i') } });

      if (!business) {
          return res.status(404).json({ message: 'Business not found' });
      }

      res.json(business);
  } catch (error) {
      res.status(500).json({ message: error.message });
  }
});

app.get('/api/search', async (req, res) => {
  try {
      const { query } = req.query;
      const regex = new RegExp(query, 'i'); // Case-insensitive search

      // Find in restaurants, shops, and services
      const [restaurants, shops, services] = await Promise.all([
          Restaurant.find({ name: { $regex: regex } }),
          Shop.find({ name: { $regex: regex } }),
          Service.find({ name: { $regex: regex } })
      ]);

      res.json({ restaurants, shops, services });
  } catch (error) {
      res.status(500).json({ message: error.message });
  }
});

app.post('/api/contact', async (req, res) => {
  try {
    const contact = new Contact(req.body);
    await contact.save();
    res.status(200).json({ message: 'Contact form submitted successfully!' });
  } catch (error) {
    res.status(500).json({ message: 'Error saving contact form data.' });
  }
});


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
