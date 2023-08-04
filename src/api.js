// api.js

import axios from 'axios';

// Function to fetch all items
export const fetchItems = async () => {
  try {
    const response = await axios.get('https://vast-windbreaker-duck.cyclic.app/api/items');
    return response.data;
  } catch (error) {
    console.error('Failed to fetch items:', error);
    return [];
  }
};
