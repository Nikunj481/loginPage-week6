import React from "react";

const ReadOnlyRow = ({ contact, handleEditClick, handleDeleteClick,handleView }) => {
  return (
    <tr>
      <td>{contact.fullName}</td>
      <td>{contact.address}</td>
      <td>{contact.phoneNumber}</td>
      <td>{contact.email}</td>
      <td>{contact.salary}</td>
      <td>
        <button
          type="button"
          onClick={(event) => handleEditClick(event, contact)}
        >
          Edit
        </button>
        <button type="button" onClick={() => handleDeleteClick(contact.id)}>
          Delete
        </button>
        <button type="button" onClick={() => handleView(contact.id)}>
          View
        </button>
      </td>
    </tr>
  );
};

export default ReadOnlyRow;