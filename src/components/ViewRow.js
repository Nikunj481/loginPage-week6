import React  from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom';
function ViewRow( {contacts,userId}) {
 
    const newArr = contacts.filter((contact)=> contact.id === userId)
    const [Data, setData] = useState({
        fullName: "",
        address: "",
        phoneNumber: "",
        email: "",
        salary:0
      });
     // setData(contacts.userId);

     console.log(userId);
     return (
        <>
        
        <div style={{background: "red"}}>
            {newArr.map((contact) => (
                <div  style={{color: "white"}} key={contact.id}>
                    <p >Full Name: {contact.fullName}</p>
                    <p>Address: {contact.address}</p>
                    <p>Phone Number: {contact.phoneNumber}</p>
                    <p>Email: {contact.email}</p>
                    <p>Salary: {contact.salary}</p>
                </div>
            ))}
        </div>
       
        <Link to={"/"}>Redirect to Home</Link>
        </>
        
    );
}
//export { handleView }
export default ViewRow;