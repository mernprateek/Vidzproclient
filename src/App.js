import React, { useState, useEffect } from 'react';
import axios from 'axios';
import FormComponent from './FormComponent';
import ListComponent from './ListComponent';
import './App.css';
import EditModal from "./EditModal";

const App = () => {
  // State to hold the list of items
  const [items, setItems] = useState([]);
  
  // State to track the item being edited in the modal
  const [editingItem, setEditingItem] = useState(null);

  // Fetch items data when the component mounts
  useEffect(() => {
    fetchItemsData();
  }, []);

  // Function to fetch all items
  const fetchItemsData = async () => {
    try {
      const response = await axios.get('https://vast-windbreaker-duck.cyclic.app/api/items');
      setItems(response.data);
    } catch (error) {
      console.error('Failed to fetch items:', error);
    }
  };

  // Function to add a new item
  const addItem = async (itemData) => {
    try {
      await axios.post('http://localhost:5000/api/items', itemData);
      fetchItemsData();
    } catch (error) {
      console.error('Failed to add item:', error);
    }
  };

  // Function to update an existing item
  const updateItem = async (itemId, itemData) => {
    try {
      await axios.put(`https://vast-windbreaker-duck.cyclic.app/api/items/${itemId}`, itemData);
      setEditingItem(null);
      fetchItemsData();
    } catch (error) {
      console.error('Failed to update item:', error);
    }
  };

  // Function to delete an item
  const deleteItem = async (itemId) => {
    try {
      await axios.delete(`https://vast-windbreaker-duck.cyclic.app/api/items/${itemId}`);
      fetchItemsData();
    } catch (error) {
      console.error('Failed to delete item:', error);
    }
  };

  // Function to open the edit form (modal) with the selected item
  const openEditForm = (item) => {
    setEditingItem(item);
  };

  // Function to close the edit form (modal)
  const closeEditForm = () => {
    setEditingItem(null);
  };

  return (
    <div className="app-container">
      {/* Display the form component to add new items */}
      <FormComponent addItem={addItem} />

      {/* Display the list of items */}
      <ListComponent
        items={items}
        updateItem={updateItem}
        deleteItem={deleteItem}
        openEditForm={openEditForm}
      />

      {/* Display the edit modal when an item is being edited */}
      {editingItem && (
        <EditModal item={editingItem} updateItem={updateItem} closeModal={closeEditForm} />
      )}
    </div>
  );
};

export default App;
