import React, { useState } from "react";
import "../../initial"
import initial from "../../initial";
const NewLead = () => {
  
const initialTableData= initial

 // State for the original data
 const [tableData, setTableData] = useState(initialTableData);

 // State for sorted data
 const [sortedData, setSortedData] = useState(initialTableData);

 // Pagination state
 const [currentPage, setCurrentPage] = useState(1);
 const itemsPerPage = 10;

 const [isNextDisabled, setIsNextDisabled] = useState(false);
 const [sortDirection, setSortDirection] = useState("asc");

  // Sorting functions
  const sortByUser = () => {
    const sortedDataByColor = [...tableData].sort((a, b) =>
      sortDirection === "asc" ? a.color.localeCompare(b.color) : b.color.localeCompare(a.color)
    );
    setSortedData(sortedDataByColor);
    setCurrentPage(1); // Reset to first page after sorting
    // Toggle sort direction
    setSortDirection(sortDirection === "asc" ? "desc" : "asc");
  };

  const sortByCategory = () => {
    const sortedDataByCategory = [...tableData].sort((a, b) =>
      sortDirection === "asc" ? a.category.localeCompare(b.category) : b.category.localeCompare(a.category)
    );
    setSortedData(sortedDataByCategory);
    setCurrentPage(1); // Reset to first page after sorting
    // Toggle sort direction
    setSortDirection(sortDirection === "asc" ? "desc" : "asc");
  };

  const sortByPrice = () => {
    const sortedDataByPrice = [...tableData].sort((a, b) =>
      sortDirection === "asc" ? a.price - b.price : b.price - a.price
    );
    setSortedData(sortedDataByPrice);
    setCurrentPage(1); // Reset to first page after sorting
    // Toggle sort direction
    setSortDirection(sortDirection === "asc" ? "desc" : "asc");
  };


 // Calculate the index range for the current page
 const indexOfLastItem = currentPage * itemsPerPage;
 const indexOfFirstItem = indexOfLastItem - itemsPerPage;
 const currentItems = sortedData.slice(indexOfFirstItem, indexOfLastItem);

 // Function to change the current page
 const paginate = (pageNumber) => {
   // Check if there's a next page
   if (pageNumber > 0 && pageNumber <= Math.ceil(tableData.length / itemsPerPage)) {
     setCurrentPage(pageNumber);
     setIsNextDisabled(false);
   } else {
     setIsNextDisabled(true);
   }
 };



  return (
    <>
    <h1 className="text-4xl text-center mt-5 font-semiboldbold">LeaderBoard 2</h1>
    <div className=" flex  place-content-center mt-9">
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full w-[900px] text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Story title
              </th>
              <th scope="col" onClick={sortByPrice} className="px-6 py-3 cursor-pointer">
                <div className="flex items-center">
                  Upvotes
                  <a href="#">
                    <svg
                      className="w-3 h-3 ml-1.5"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M8.574 11.024h6.852a2.075 2.075 0 0 0 1.847-1.086 1.9 1.9 0 0 0-.11-1.986L13.736 2.9a2.122 2.122 0 0 0-3.472 0L6.837 7.952a1.9 1.9 0 0 0-.11 1.986 2.074 2.074 0 0 0 1.847 1.086Zm6.852 1.952H8.574a2.072 2.072 0 0 0-1.847 1.087 1.9 1.9 0 0 0 .11 1.985l3.426 5.05a2.123 2.123 0 0 0 3.472 0l3.427-5.05a1.9 1.9 0 0 0 .11-1.985 2.074 2.074 0 0 0-1.846-1.087Z" />
                    </svg>
                  </a>
                </div>
              </th>
              <th scope="col" onClick={sortByUser} className="px-6 py-3 cursor-pointer">
                <div className="flex items-center">
                  user
                  <a href="#">
                    <svg
                      className="w-3 h-3 ml-1.5"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M8.574 11.024h6.852a2.075 2.075 0 0 0 1.847-1.086 1.9 1.9 0 0 0-.11-1.986L13.736 2.9a2.122 2.122 0 0 0-3.472 0L6.837 7.952a1.9 1.9 0 0 0-.11 1.986 2.074 2.074 0 0 0 1.847 1.086Zm6.852 1.952H8.574a2.072 2.072 0 0 0-1.847 1.087 1.9 1.9 0 0 0 .11 1.985l3.426 5.05a2.123 2.123 0 0 0 3.472 0l3.427-5.05a1.9 1.9 0 0 0 .11-1.985 2.074 2.074 0 0 0-1.846-1.087Z" />
                    </svg>
                  </a>
                </div>
              </th>
              <th scope="col" onClick={sortByCategory} className="px-6 py-3 cursor-pointer">
                <div className="flex items-center">
                  Category
                  <a href="#">
                    <svg
                      className="w-3 h-3 ml-1.5"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M8.574 11.024h6.852a2.075 2.075 0 0 0 1.847-1.086 1.9 1.9 0 0 0-.11-1.986L13.736 2.9a2.122 2.122 0 0 0-3.472 0L6.837 7.952a1.9 1.9 0 0 0-.11 1.986 2.074 2.074 0 0 0 1.847 1.086Zm6.852 1.952H8.574a2.072 2.072 0 0 0-1.847 1.087 1.9 1.9 0 0 0 .11 1.985l3.426 5.05a2.123 2.123 0 0 0 3.472 0l3.427-5.05a1.9 1.9 0 0 0 .11-1.985 2.074 2.074 0 0 0-1.846-1.087Z" />
                    </svg>
                  </a>
                </div>
              </th>
            
              <th scope="col" className="px-6 py-3">
                <span className="sr-only">Edit</span>
              </th>
            </tr>
          </thead>
          <tbody>
            {currentItems.map((item, index) => (
              <tr
                key={index}
                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
              >
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  {item.productName}
                </th>
                <td className="px-6 py-4">${item.price}</td>
                <td className="px-6 py-4">{item.color}</td>
                <td className="px-6 py-4">{item.category}</td>
              
                <td className="px-6 py-4 text-right">
                  <a
                    href="#"
                    className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                  >
                    Edit
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <nav
        className="flex items-center bg-gray-800 justify-between pt-4 pb-4 px-5 items-center"
        aria-label="Table navigation"
      >
        <span className="text-sm font-normal text-gray-500 dark:text-gray-400">
          Showing{" "}
          <span className="font-semibold text-gray-900 dark:text-white">
            {indexOfFirstItem + 1}-{Math.min(indexOfLastItem, tableData.length)}
          </span>{" "}
          of{" "}
          <span className="font-semibold text-gray-900 dark:text-white">
            {tableData.length}
          </span>
        </span>
        <ul className="inline-flex -space-x-px text-sm h-8">
          <li>
            <a
              href="#"
              onClick={() => paginate(currentPage - 1)}
              className={`flex items-center justify-center px-3 h-8 ml-0 leading-tight ${
                "text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              } rounded-l-lg`}
              disabled={currentPage === 1}
            >
              Previous
            </a>
          </li>
          {Array.from({ length: Math.ceil(tableData.length / itemsPerPage) }).map(
            (page, index) => (
              <li key={index}>
                <a
                  href="#"
                  onClick={() => paginate(index + 1)}
                  className={`flex items-center justify-center px-3 h-8 leading-tight ${
                    currentPage === index + 1
                      ? "text-white-600 bg-gray-600"
                      : "text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                  }`}
                >
                  {index + 1}
                </a>
              </li>
            )
          )}
          <li>
            <a
              href="#"
              onClick={() => paginate(currentPage + 1)}
              className={`flex items-center justify-center px-3 h-8 leading-tight ${
                "text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              } rounded-r-lg`}
              disabled={isNextDisabled}
            >
              Next
            </a>
          </li>
        </ul>
      </nav>
      </div>
    </div>
    </>
  );
};

export default NewLead;
