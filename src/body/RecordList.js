// import React, { useState, useEffect } from 'react';

// const RecordsList = () => {
//   const [records, setRecords] = useState([]);

//   useEffect(() => {
//     // Fetch records from your Node.js server
//     fetch('http://localhost:3001/api/records') // Update the URL accordingly
//       .then(response => response.json())
//       .then(data => {
//         setRecords(data);
//         console.log('Fetched records:', response);
//       })
//       .catch(error => console.error('Error fetching records:', error));
//   }, []);

//   return (
//     <div>
//       <h1>Records List</h1>
//       {console.log(records)}
//       <ul>
//         {records.map(record => (
//           <li key={record.id}>
//             {record.product_id} - {record.product_name} {/* Replace with actual field names */}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default RecordsList;
