import React, { useState } from "react";
import JsonData from "../assets/usedata.json"; // Importing sample data from a JSON file
import ReactPaginate from "react-paginate";
import "../assets/style.css";

/**
 * Pagination Component for displaying a list of users with pagination.
 * Uses ReactPaginate for page navigation.
 */
function Pagination() {
  // State for the list of users and current page number
  const [users, setUsers] = useState(JsonData.slice(0, 50)); // Initial user data, sliced to limit the number of displayed users
  const [pageNumber, setPageNumber] = useState(0);
  

  // Number of users to display per page and calculation for the range of users to display
  const usersPerPage = 10; // Number of users to display on each page
  const pagesVisited = pageNumber * usersPerPage; // Index of the first user on the current page

  // Map and display the users for the current page
  
   const displayUsers= users.slice(pagesVisited, pagesVisited + usersPerPage);
   return (
        <div>
      <table>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
           
       {  
        displayUsers &&
        displayUsers.map((user) => (
            
                  <tr>
                    <td>{user.firstName}</td>
                    <td>{user.lastname}</td>
                    <td>{user.email}</td>
                  </tr> 
          ))}
        </tbody>
      </table>
    </div>
   )
        
  
  // Calculate the total number of pages based on the user data
  const pageCount = Math.ceil(users.length / usersPerPage);

  // Function to change the current page when a pagination button is clicked
  const changePage = ({ selected }) => {
    setPageNumber(selected);
    console.log(pageNumber);
  }

  return (
    <div  className="justify-between ">
      {displayUsers}
      {/* ReactPaginate component for page navigation */}
      <ReactPaginate
        previousLabel={"Previous"}
        nextLabel={"Next"}
        pageRangeDisplayed={5}
        pageCount={pageCount} // Total number of pages
        onPageChange={changePage} // Function to handle page changes
        containerClassName={"paginationBttns"} // CSS class for the pagination container
        previousLinkClassName={"previousBttn"} // CSS class for the "Previous" button
        nextLinkClassName={"nextBttn"} // CSS class for the "Next" button
        className='justify-center  flex space-x-2'  />
    </div> 
  );
}

export default Pagination;