
import sysnatik from "./SysContext";
import { useState } from "react";

const SysState = (props) => {

  const sysnatikInitial = [];
  const [items, setItems] = useState(sysnatikInitial);

  // const getItem= async () => {
  //   const response = await fetch(`http://localhost:1000/api/item/fetchallItems`, {
  //     method: 'GET',
  //     headers: {
  //       'Content-Type': 'application/json',
  //       "auth-token": localStorage.getItem('token')
  //     }
  //   });
  //   const json = await response.json() 
  //   setItems(json)
  // }
  // const getEmployee= async () => {
  //   const response = await fetch(`http://localhost:1000/api/auth/getuser`, {
  //     method: 'GET',
  //     headers: {
  //       'Content-Type': 'application/json',
  //       "auth-token": localStorage.getItem('token')
  //     }
  //   });
  //   const json = await response.json() 
  //   setItems(json)
  // }
  // const getIssuedItem= async () => {
  //   const response = await fetch(`http://localhost:1000/api/item/fetchissuedItems`, {
  //     method: 'GET',
  //     headers: {
  //       'Content-Type': 'application/json',
  //       "auth-token": localStorage.getItem('token')
  //     }
  //   });
  //   const json = await response.json() 
  //   console.log(json)
  //   setItems(json)
  // }
  // const getDefaultItem= async () => {
  //   const response = await fetch(`http://localhost:1000/api/item/fetchDefaultItems`, {
  //     method: 'GET',
  //     headers: {
  //       'Content-Type': 'application/json',
  //       "auth-token": localStorage.getItem('token')
  //     }
  //   });
  //   const json = await response.json() 
  //   console.log(json)
  //   setItems(json)
  // }
  //////////////////////////////////////
//   const addItem = async (partNumber, itemName, serialNumber, dateOfArrival, location, tag, image, pdf, remarks,quantity,ERRC) => {
//     try {
//         const formData = new FormData();
//         formData.append('partNumber', partNumber);
//         formData.append('itemName', itemName);
//         formData.append('serialNumber', serialNumber);
//         formData.append('dateOfArrival', dateOfArrival);
//         formData.append('location', location);
//         formData.append('tag', tag);
//         formData.append('image', image); 
//         formData.append('pdf', pdf);     
//         formData.append('remarks', remarks);     
//         formData.append('quantity', quantity);     
//         formData.append('ERRC', ERRC);     
//         const response = await fetch(`http://localhost:1000/api/item/addItem`, {
//             method: 'POST',
//             headers: {
//                 "auth-token": localStorage.getItem('token')
//             },
//             body: formData
//         });

//         const data = await response.json();
//         if (!data.success) {
//             alert("Item Already Exists");
//         } else {
//             alert("Item added Successfully");
//             setItems(items.concat(data));
//         }
//     } catch (error) {
//         console.error('Error adding item:', error.message);
//         // Handle error, show alert or any other notification
//         alert('Failed to add item. Please try again later.');
//     }
// };
  /////////////////////////////////// ///

//   const addItem = async (partNumber, itemName, serialNumber, dateOfArrival,location, tag, image) => {
//     try {
//         const formData = new FormData();
//         formData.append('partNumber', partNumber);
//         formData.append('itemName', itemName);
//         formData.append('serialNumber', serialNumber);
//         formData.append('dateOfArrival', dateOfArrival);
//         formData.append('location', location);
//         formData.append('tag', tag);
//         formData.append('image', image); // Append image file to FormData

//         const response = await fetch(`http://localhost:1000/api/item/addItem`, {
//             method: 'POST',
//             headers: {
//                 // No 'Content-Type' needed for FormData
//                 "auth-token": localStorage.getItem('token')
//             },
//             body: formData
//         });

//         const data = await response.json();
//         if (!data.success) {
//             alert("Item Already Exists");
//         } else {
//             alert("Item added Successfully");
//             setItems(items.concat(data));
//         }
//     } catch (error) {
//         console.error('Error adding item:', error.message);
//         // Handle error, show alert or any other notification
//         alert('Failed to add item. Please try again later.');
//     }
// };



  // const addItem = async (partNumber, itemName, serialNumber, dateOfArrival, tag, image) => {

  //   const response = await fetch(`http://localhost:1000/api/item/addItem`, {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json',
  //       "auth-token": localStorage.getItem('token')
  //     },
  //     body: JSON.stringify({partNumber, itemName, serialNumber, dateOfArrival, tag, image})
  //   });
    
  //   const item = await response.json();
  //   if (!item.success){
  //     alert("Item Already Exist ")}
  //     else{
  //       alert("Item added Sucessfully")
  //       setItems(items.concat(item))
  // }
  // }

// Multiple Images and pdf
// const addItem = async (formData) => {
//   try {
//       const response = await fetch(`http://localhost:1000/api/item/addItem`, {
//           method: 'POST',
//           headers: {
//               "auth-token": localStorage.getItem('token')
//           },
//           body: formData
//       });

//       const data = await response.json();
//       if (!data.success) {
//           alert("Item Already Exists");
//       } else {
//           alert("Item added Successfully");
//           // Assuming setItems is a state setter function to update items after successful addition
//           setItems(items.concat(data.item)); // Assuming data.item contains the added item details
//       }
//   } catch (error) {
//       console.error('Error adding item:', error.message);
//       alert('Failed to add item. Please try again later.');
//   }
// };
// ////////////////////////////////////
//   const addEmployee = async (pakNumber, name,email,password, rank,role) => {
    
//     const response = await fetch(`http://localhost:1000/api/auth/register`, {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//         "auth-token": localStorage.getItem('token')
//       },
//       body: JSON.stringify({pakNumber, name,email,password, rank,role})
//     });
    
//     const item = await response.json();
//     if (!item.success){
//       alert("Employee Already Exist ")}
//       else{
//         alert("Employee Data Added Sucessfully")
//         setItems(items.concat(item))
//   }
//   }
//   const itemrefer = async (pakNumber, partNumber, dateOfIssued,quantity) => {
    
//     const response = await fetch(`http://localhost:1000/api/item/itemrefer`, {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//         "auth-token": localStorage.getItem('token')
//       },
//       body: JSON.stringify({pakNumber, partNumber, dateOfIssued, quantity})
//     });
    
//     const item = await response.json();
//     if (!item.success){
//       alert("Employee is Not available Or Item is not available")}
//       else{ 
//         alert("Item Issued Sucessfully")
//         setItems(items.concat(item))
//   }
//   }
//   const defaultItem = async (partNumber,serialNumber, dateOfDefault) => {
    
//     const response = await fetch(`http://localhost:1000/api/item/addDefaultItem`, {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//         "auth-token": localStorage.getItem('token')
//       },
//       body: JSON.stringify({ partNumber,serialNumber, dateOfDefault})
//     });
    
//     const item = await response.json();
//     if (!item.success){  
//       alert("Item  Does not Exist In inventory List ")}
//       else{
//         alert("Item Default Added")
//         setItems(items.concat(item))
//   }
//   }
//   const deleteItem = async (id) => {
//     try {
//       // API Call
//       const response = await fetch(`http://localhost:1000/api/item/deleteitem/${id}`, {
//         method: 'DELETE',
//         headers: {
//           'Content-Type': 'application/json',
//           "auth-token": localStorage.getItem('token')
//         }
//       });
  
//       if (!response.ok) {
//         throw new Error(`HTTP error! Status: ${response.status}`);
//       }
  
//       const json = await response.json();
//       console.log(json);
  
//       // Update the state after successful deletion
//       const newItems = items.filter((item) => item._id !== id);
//       setItems(newItems);
//     } catch (error) {
//       console.error('Error deleting Item:', error);
//     }
//   }
//   const ReturnItem = async (id) => {
//     try {
//       // API Call
//       const response = await fetch(`http://localhost:1000/api/item/itemReturn/${id}`, {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//           "auth-token": localStorage.getItem('token')
//         }
//       });
  
//       if (!response.ok) {
//         throw new Error(`HTTP error! Status: ${response.status}`);
//       }
  
//       const json = await response.json();
//       console.log(json);

//       const newItems = items.filter((item) => item._id !== id);
//       setItems(newItems);
//     } catch (error) {
//       console.error('Error returning:', error);
//     }
//   }
//   const deleteDefaultItem = async (id) => {
//     try {
//       // API Call
//       const response = await fetch(`http://localhost:1000/api/item/deleteDefaultItem/${id}`, {
//         method: 'DELETE',
//         headers: {
//           'Content-Type': 'application/json',
//           "auth-token": localStorage.getItem('token')
//         }
//       });
  
//       if (!response.ok) {
//         throw new Error(`HTTP error! Status: ${response.status}`);
//       }
  
//       const json = await response.json();
//       console.log(json);
  
//       // Update the state after successful deletion
//       const newItems = items.filter((item) => item._id !== id);
//       setItems(newItems);
//     } catch (error) {
//       console.error('Error deleting blog:', error);
//     }
//   }
//   const deleteIssuedItem = async (id) => {
//     try {
//       // API Call
//       const response = await fetch(`http://localhost:1000/api/item/deleteIssuedItem/${id}`, {
//         method: 'DELETE',
//         headers: {
//           'Content-Type': 'application/json',
//           "auth-token": localStorage.getItem('token')
//         }
//       });
  
//       if (!response.ok) {
//         throw new Error(`HTTP error! Status: ${response.status}`);
//       }
  
//       const json = await response.json();
//       console.log(json);
  
//       // Update the state after successful deletion
//       const newItems = items.filter((item) => item._id !== id);
//       setItems(newItems);
//     } catch (error) {
//       console.error('Error deleting blog:', error);
//     }
//   }
//   const deleteUser = async (id) => {
//     try {
//       // API Call
//       const response = await fetch(`http://localhost:1000/api/auth/deleteUser/${id}`, {
//         method: 'DELETE',
//         headers: {
//           'Content-Type': 'application/json',
//           "auth-token": localStorage.getItem('token')
//         }
//       });
  
//       if (!response.ok) {
//         throw new Error(`HTTP error! Status: ${response.status}`);
//       }
  
//       const json = await response.json();
//       console.log(json);
  
//       // Update the state after successful deletion
//       const newItems = items.filter((item) => item._id !== id);
//       setItems(newItems);
//     } catch (error) {
//       console.error('Error deleting blog:', error);
//     }
//   }
//   const editItem = async (id, partNumber, itemName, serialNumber, dateOfArrival, location, tag, remarks) => {
//     // API Call 
//     const response = await fetch(`http://localhost:1000/api/item/updateitem/${id}`, {
//       method: 'PUT',
//       headers: {
//         'Content-Type': 'application/json',
//         "auth-token": localStorage.getItem('token')
//       },
//       body: JSON.stringify({partNumber, itemName, serialNumber, dateOfArrival, location, tag, remarks})
//     });
//     // const json = await response.json(); 

//      let newItems = JSON.parse(JSON.stringify(items))
//     // Logic to edit in client
//     for (let index = 0; index < newItems.length; index++) {
//       const element = newItems[index];
//       if (element._id === id) {
//         newItems[index].partNumber = partNumber;
//         newItems[index].itemName = itemName;
//         newItems[index].serialNumber = serialNumber;
//         newItems[index].dateOfArrival = dateOfArrival;
//         newItems[index].location = location;
//         newItems[index].tag = tag; 
//         newItems[index].remarks = remarks; 
//         break; 
//       }
//     }  
//     setItems(newItems );
//   }
//   const editIssuedItem = async (id, partNumber,personName,pakNumber, itemName,location, dateOfIssued,) => {
//     // API Call 
//     const response = await fetch(`http://localhost:1000/api/item/updateIssuedItem/${id}`, {
//       method: 'PUT',
//       headers: {
//         'Content-Type': 'application/json',
//         "auth-token": localStorage.getItem('token')
//       },
//       body: JSON.stringify({partNumber,personName,pakNumber, itemName,location, dateOfIssued})
//     });
//     // const json = await response.json(); 

//      let newItems = JSON.parse(JSON.stringify(items))
//     // Logic to edit in client
//     for (let index = 0; index < newItems.length; index++) {
//       const element = newItems[index];
//       if (element._id === id) {
//         newItems[index].partNumber = partNumber;
//         newItems[index].itemName = itemName;
//         newItems[index].pakNumber = pakNumber;
//         newItems[index].dateOfIssued = dateOfIssued;
//         newItems[index].location = location;
//         newItems[index].personName = personName; 
//         break; 
//       }
//     }  
//     setItems(newItems );
//   }
//   const updateDefaultItem = async (id, partNumber , itemName , serialNumber , dateOfArrival ,dateOfDefault, tag, location, remarks, ERRC ) => {
//     // API Call 
//     const response = await fetch(`http://localhost:1000/api/item/updateDefaultItem/${id}`, {
//       method: 'PUT',
//       headers: {
//         'Content-Type': 'application/json',
//         "auth-token": localStorage.getItem('token')
//       },
//       body: JSON.stringify({partNumber , itemName , serialNumber , dateOfArrival ,dateOfDefault, tag, location, remarks, ERRC})
//     });
//     // const json = await response.json(); 

//      let newItems = JSON.parse(JSON.stringify(items))
//     // Logic to edit in client
//     for (let index = 0; index < newItems.length; index++) {
//       const element = newItems[index];
//       if (element._id === id) {
//         newItems[index].partNumber = partNumber;
//         newItems[index].itemName = itemName;
//         newItems[index].serialNumber = serialNumber;
//         newItems[index].dateOfDefault = dateOfDefault;
//         newItems[index].dateOfArrival = dateOfArrival;
//         newItems[index].tag = tag; 
//         newItems[index].remarks = remarks; 
//         newItems[index].ERRC = ERRC; 
//         break; 
//       }
//     }  
//     setItems(newItems );
//   }
//   const updateUser = async (id, pakNumber , name , rank , email ,password, role) => {
//     // API Call 
//     const response = await fetch(`http://localhost:1000/api/auth/updateUser/${id}`, {
//       method: 'PUT',
//       headers: {
//         'Content-Type': 'application/json',
//         "auth-token": localStorage.getItem('token')
//       },
//       body: JSON.stringify({ pakNumber , name , rank , email ,password, role})
//     });
//     // const json = await response.json(); 

//     let newItems = JSON.parse(JSON.stringify(items))
//     for (let index = 0; index < newItems.length; index++) {
//       const element = newItems[index];
//       if (element._id === id) {
//         newItems[index].pakNumber = pakNumber;
//         newItems[index].name = name;
//         newItems[index].rank = rank;
//         newItems[index].email = email;
//         newItems[index].password = password;
//         newItems[index].role = role; 
//         break; 
//       }
//     }  
//     setItems(newItems );
//   }

  return (
    <sysnatik.Provider 
    // value={{ items, addItem,  deleteItem, editItem, editIssuedItem, getIssuedItem, getItem,  deleteIssuedItem, addEmployee, itemrefer, defaultItem, getDefaultItem, getEmployee, ReturnItem, deleteDefaultItem,updateDefaultItem, deleteUser,updateUser }}
    >
      {props.children}
    </sysnatik.Provider>
  )

}
export default SysState;