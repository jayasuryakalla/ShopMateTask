<<<<<<< HEAD
const { MongoClient } = require("mongodb");
require("dotenv").config();

const uri = process.env.MONGO_URI || "mongodb://localhost:27017";
const dbName = "shopmate";

const products = [
  // Electronics
  {
    name: "Sony WH-1000XM5 Wireless Headphones",
    description:
      "Industry-leading noise cancellation, crystal clear hands-free calling, and 30-hour battery life. Perfect for travel and work.",
    price: 348.0,
    category: "Electronics",
    stock: 50,
    image:
      "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?w=800&q=80",
  },
  {
    name: "Apple iPad Air 5th Gen",
    description:
      "Supercharged by the Apple M1 chip. 10.9-inch Liquid Retina display, 12MP Ultra Wide front camera, and 5G capability.",
    price: 559.0,
    category: "Electronics",
    stock: 30,
    image:
      "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=800&q=80",
  },
  {
    name: "Logitech MX Master 3S Mouse",
    description:
      "Performance wireless mouse with 8K DPI tracking, quiet clicks, and MagSpeed electromagnetic scrolling.",
    price: 99.99,
    category: "Electronics",
    stock: 100,
    image:
      "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=800&q=80",
  },
  {
    name: "Mechanical Gaming Keyboard RGB",
    description:
      "Tenkeyless mechanical keyboard with customizable RGB lighting and hot-swappable switches for gaming enthusiasts.",
    price: 129.99,
    category: "Electronics",
    stock: 45,
    image:
      "https://images.unsplash.com/photo-1595225476474-87563907a212?w=800&q=80",
  },
  {
    name: "4K Ultra HD Monitor 27-inch",
    description:
      "Stunning 4K resolution with IPS panel, 99% sRGB color gamut, and extensive connectivity options for professionals.",
    price: 399.0,
    category: "Electronics",
    stock: 20,
    image:
      "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=800&q=80",
  },
  {
    name: "Portable Bluetooth Speaker Water-Resistant",
    description:
      "360-degree sound, waterproof IPX7 rating, and 12-hour playtime. The ultimate outdoor companion.",
    price: 79.95,
    category: "Electronics",
    stock: 60,
    image:
      "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=800&q=80",
  },
  {
    name: "Smart Home Security Camera",
    description:
      "1080p HD video, night vision, and two-way audio. Works with Alexa and Google Assistant.",
    price: 49.99,
    category: "Electronics",
    stock: 80,
    image:
      "https://images.unsplash.com/photo-1558002038-1091a97928b1?w=800&q=80",
  },
  {
    name: "Canon EOS R50 Mirrorless Camera",
    description:
      "Compact and lightweight 4K camera for content creators. Includes 18-45mm lens kit.",
    price: 799.0,
    category: "Electronics",
    stock: 15,
    image:
      "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=800&q=80",
  },

  // Fashion & Clothing
  {
    name: "Classic Denim Jacket",
    description:
      "Timeless denim jacket made from 100% organic cotton. Features button-flap chest pockets and adjustable waistband.",
    price: 89.5,
    category: "Clothing",
    stock: 40,
    image:
      "https://images.unsplash.com/photo-1576871337632-b9aef4c17ab9?w=800&q=80",
  },
  {
    name: "Men's Slim Fit Chino Pants",
    description:
      "Versatile chinos made with stretch fabric for comfort. Perfect for office or casual wear.",
    price: 45.0,
    category: "Clothing",
    stock: 55,
    image:
      "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=800&q=80",
  },
  {
    name: "Running Sneakers",
    description:
      "Lightweight, breathable mesh upper with cushioned midsole for high-impact running sessions.",
    price: 110.0,
    category: "Clothing",
    stock: 35,
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&q=80",
  },
  {
    name: "Cotton Crew Neck T-Shirt Pack",
    description:
      "3-pack of premium soft cotton t-shirts. Tag-free collar for irritation-free comfort.",
    price: 29.99,
    category: "Clothing",
    stock: 120,
    image:
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=800&q=80",
  },
  {
    name: "Oversized Wool Scarf",
    description:
      "Soft and warm oversized scarf, perfect for layering in winter. 100% Merino wool.",
    price: 55.0,
    category: "Clothing",
    stock: 25,
    image:
      "https://images.unsplash.com/photo-1485968579580-b6d095142e6e?w=800&q=80",
  },
  {
    name: "Aviator Sunglasses Gold Frame",
    description:
      "Classic pilot style sunglasses with gold metal frame and green lenses. 100% UV protection.",
    price: 145.0,
    category: "Accessories",
    stock: 50,
    image:
      "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=800&q=80",
  },
  {
    name: "Leather Bi-fold Wallet",
    description:
      "Genuine leather wallet with RFID blocking technology. Holds up to 10 cards and cash.",
    price: 39.95,
    category: "Accessories",
    stock: 70,
    image:
      "https://images.unsplash.com/photo-1627123424574-18bd75f3194c?w=800&q=80",
  },
  {
    name: "Travel Laptop Backpack",
    description:
      "Water-repellent backpack with USB charging port and anti-theft pocket. Fits 15.6 inch laptops.",
    price: 65.0,
    category: "Accessories",
    stock: 45,
    image:
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=800&q=80",
  },

  // Home & Kitchen
  {
    name: "Office Chair",
    description: "back chair made of wood and sit with soft padding.",
    price: 229.0,
    category: "Furniture",
    stock: 15,
    image:
      "https://images.unsplash.com/photo-1592078615290-033ee584e267?w=800&q=80",
  },
  {
    name: "Ceramic Minimalist Mug Set",
    description:
      "Set of 4 matte finish ceramic mugs. Dishwasher and microwave safe. Modern Scandinavian design.",
    price: 34.99,
    category: "Home",
    stock: 60,
    image:
      "https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?w=800&q=80",
  },
  {
    name: "Bamboo Cutting Board Set",
    description:
      "3-piece organic bamboo cutting board set. Durable, knife-friendly, and easy to clean.",
    price: 24.99,
    category: "Home",
    stock: 80,
    image:
      "https://images.unsplash.com/photo-1626202384357-415848521c7d?w=800&q=80",
  },
  {
    name: "Smart LED Desk Lamp",
    description:
      "Dimmable LED lamp with wireless charger base and auto-timer. Adjustable color temperature.",
    price: 49.0,
    category: "Home",
    stock: 40,
    image:
      "https://images.unsplash.com/photo-1533090161767-e6ffed986c88?w=800&q=80",
  },
  {
    name: "Velvet Throw Pillow Covers",
    description:
      "Pack of 2 soft velvet decorative pillow covers. 18x18 inches, available in multiple colors.",
    price: 18.99,
    category: "Home",
    stock: 90,
    image:
      "https://images.unsplash.com/photo-1584100936595-c0654b55a2e6?w=800&q=80",
  },
  {
    name: "Cast Iron Skillet",
    description:
      "Pre-seasoned 10.25-inch cast iron skillet. Unparalleled heat retention and even heating.",
    price: 29.9,
    category: "Home",
    stock: 35,
    image:
      "https://images.unsplash.com/photo-1584947937402-23f03887af48?w=800&q=80",
  },
  {
    name: "Large Indoor Potted Plant",
    description:
      "Artificial Ficus tree, 5ft tall. Realistic design, no maintenance required. Includes woven pot.",
    price: 85.0,
    category: "Home",
    stock: 20,
    image:
      "https://images.unsplash.com/photo-1485955900006-10f4d324d411?w=800&q=80",
  },

  // Sports & Fitness
  {
    name: "Non-Slip Yoga Mat",
    description:
      "Eco-friendly TPE yoga mat with alignment lines. 6mm thick for optimal cushioning and grip.",
    price: 32.0,
    category: "Sports",
    stock: 50,
    image:
      "https://images.unsplash.com/photo-1592432678010-faec9f546645?w=800&q=80",
  },
  {
    name: "Adjustable Dumbbell Set",
    description:
      "Pair of adjustable weights ranging from 5 to 52.5 lbs. Space-saving design for home gyms.",
    price: 299.0,
    category: "Sports",
    stock: 10,
    image:
      "https://images.unsplash.com/photo-1638536532686-d610adfc8e5c?w=800&q=80",
  },
  {
    name: "Insulated Stainless Steel Water Bottle",
    description:
      "32oz vacuum insulated bottle keeps drinks cold for 24 hours or hot for 12 hours. Leak-proof lid.",
    price: 24.95,
    category: "Sports",
    stock: 75,
    image:
      "https://images.unsplash.com/photo-1602143407151-11115cdbf69c?w=800&q=80",
  },
  {
    name: "Fitness Tracker Band",
    description:
      "Slim fitness tracker with heart rate monitor, step counter, and sleep tracking. 7-day battery life.",
    price: 45.99,
    category: "Electronics",
    stock: 65,
    image:
      "https://images.unsplash.com/photo-1575311373937-040b8e1fd5b6?w=800&q=80",
  },
  {
    name: "Tennis Racket Pro",
    description:
      "Graphite composite tennis racket for intermediate players. Lightweight with excellent control and spin.",
    price: 89.0,
    category: "Sports",
    stock: 30,
    image:
      "https://images.unsplash.com/photo-1617083934555-ac7d4fee8909?w=800&q=80",
  },
  {
    name: "Camping Tent 4-Person",
    description:
      "Easy setup dome tent for 4 people. Waterproof rainfly and durable fiberglass poles.",
    price: 120.0,
    category: "Sports",
    stock: 15,
    image:
      "https://images.unsplash.com/photo-1478131143081-80f7f84ca84d?w=800&q=80",
  },
  {
    name: "Electric Coffee Grinder",
    description:
      "Burr coffee grinder with 15 grind settings. Uniform grinding for optimal extraction.",
    price: 59.99,
    category: "Home",
    stock: 25,
    image:
      "https://images.unsplash.com/photo-1510443906669-bf0a2c5a0928?w=800&q=80",
  },
];

const seedDB = async () => {
  const client = new MongoClient(uri);

  try {
    await client.connect();
    console.log("Connected to MongoDB for seeding...");
    const db = client.db(dbName);
    const collection = db.collection("products");

    await collection.deleteMany({}); // Clear existing data
    console.log("Cleared existing products.");

    const result = await collection.insertMany(products);
    console.log(`${result.insertedCount} products added successfully.`);
  } catch (error) {
    console.error("Error seeding database:", error);
  } finally {
    await client.close();
    console.log("Database connection closed.");
    process.exit();
  }
=======
const { MongoClient } = require('mongodb');
require('dotenv').config();

const uri = process.env.MONGO_URI || 'mongodb://localhost:27017';
const dbName = 'shopmate';

const products = [
    {
        name: "Wireless Noise Cancelling Headphones",
        description: "Experience world-class silence and superior sound with these premium headphones. Features 30-hour battery life and plush ear cushions for all-day comfort.",
        price: 299.99,
        category: "Electronics",
        stock: 50,
        image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&q=80"
    },
    {
        name: "Ergonomic Office Chair",
        description: "Designed for comfort and productivity. Adjustable lumbar support, breathable mesh back, and smooth-rolling casters.",
        price: 199.99,
        category: "Furniture",
        stock: 20,
        image: "https://images.unsplash.com/photo-1592078615290-033ee584e267?w=800&q=80"
    },
    {
        name: "Smart Fitness Watch",
        description: "Track your health metrics, workouts, and sleep patterns. Water-resistant and features a vibrant AMOLED display.",
        price: 149.50,
        category: "Electronics",
        stock: 100,
        image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&q=80"
    },
    {
        name: "Minimalist Backpack",
        description: "Sleek and durable backpack perfect for daily commute or travel. Features a padded laptop compartment and water-resistant fabric.",
        price: 79.00,
        category: "Accessories",
        stock: 45,
        image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=800&q=80"
    },
    {
        name: "Mechanical Keyboard",
        description: "Tactile and responsive mechanical switches for the ultimate typing experience. RGB backlighting and compact design.",
        price: 120.00,
        category: "Electronics",
        stock: 30,
        image: "https://images.unsplash.com/photo-1587829741301-dc798b91a603?w=800&q=80"
    },
    {
        name: "Ceramic Coffee Mug Set",
        description: "Handcrafted ceramic mugs with a modern matte finish. Microwave and dishwasher safe.",
        price: 35.00,
        category: "Home",
        stock: 60,
        image: "https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?w=800&q=80"
    },
    {
        name: "Running Shoes",
        description: "Lightweight and breathable running shoes with superior cushioning for impact protection.",
        price: 89.99,
        category: "Clothing",
        stock: 25,
        image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&q=80"
    },
    {
        name: "Bamboo Cutting Board",
        description: "Eco-friendly bamboo cutting board. Durable, knife-friendly, and easy to clean.",
        price: 24.99,
        category: "Home",
        stock: 75,
        image: "https://images.unsplash.com/photo-1626202384357-415848521c7d?w=800&q=80"
    },
    {
        name: "Polarized Sunglasses",
        description: "Classic aviator style sunglasses with polarized lenses to reduce glare and protect your eyes.",
        price: 55.00,
        category: "Accessories",
        stock: 40,
        image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=800&q=80"
    },
    {
        name: "Bluetooth Speaker",
        description: "Portable speaker with powerful bass and 360-degree sound. Waterproof design for outdoor adventures.",
        price: 65.00,
        category: "Electronics",
        stock: 55,
        image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=800&q=80"
    }
];

const seedDB = async () => {
    const client = new MongoClient(uri);

    try {
        await client.connect();
        console.log('Connected to MongoDB for seeding...');
        const db = client.db(dbName);
        const collection = db.collection('products');

        await collection.deleteMany({}); // Clear existing data
        console.log('Cleared existing products.');

        const result = await collection.insertMany(products);
        console.log(`${result.insertedCount} products added successfully.`);

    } catch (error) {
        console.error('Error seeding database:', error);
    } finally {
        await client.close();
        console.log('Database connection closed.');
        process.exit();
    }
>>>>>>> 8f2c80dec57338e578dbe92e8ce8f266c78eabb5
};

seedDB();
