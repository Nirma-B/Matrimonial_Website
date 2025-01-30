const express = require('express');
const db = require('../db');

const router = express.Router();

const staticStories = [
  {
    id: 1,
    image: './Story1.png',
    name: 'Mehnaz Fatima & Syed Rizwan Hashmi',
    description: 'We were able to find our soulmate with the help of the brilliant and understanding team!'
  },
  {
    id: 2,
    image: './Story2.png',
    name: 'Anshuman & Bhavana',
    description: 'I will always be thankful to the team for helping me find my life partner!'
  },
  {
    id: 3,
    image: './Story3.png',
    name: 'Sandesh & Koyal',
    description: 'We will always be grateful to the team for providing such great services and helping us through our journey of love!'
  },
  {
    id: 4,
    image: './Story1.png',
    name: 'Amit & Roshni',
    description: 'We were able to find our soulmate with the help of the brilliant and understanding team!'
  },
  {
    id: 5,
    image: './Story2.png',
    name: 'Rahul & Sneha',
    description: 'I will always be thankful to the team for helping me find my life partner!'
  },
  {
    id: 6,
    image: './Story3.png',
    name: 'Varun & Priya',
    description: 'We will always be grateful to the team for providing such great services and helping us through our journey of love.'
  }
];

router.get('/api/stories', (req, res) => {
  res.json(staticStories);
});

module.exports = router;
