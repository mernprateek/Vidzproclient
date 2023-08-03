import React from 'react';

const ListComponent = ({ items, updateItem, deleteItem, openEditForm }) => {
  return (
    <div className="list-container">
      <h2>List of Items</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Description</th>
            <th>Price</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {/* Loop through the list of items and render each item in a row */}
          {items.map((item) => (
            <tr key={item._id}>
              <td>{item.name}</td>
              <td>{item.description}</td>
              <td>${item.price}</td>
              <td>
                {/* Call the openEditForm function with the selected item as an argument */}
                <button onClick={() => openEditForm(item)} className="edit-btn">
                  Edit
                </button>
                {/* Call the deleteItem function with the item's ID as an argument */}
                <button onClick={() => deleteItem(item._id)} className="delete-btn">
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListComponent;
