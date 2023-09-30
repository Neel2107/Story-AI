import DataTable, { createTheme } from "react-data-table-component";
import data from "../../Data"
import "../Leaderboard/led.css"
const Leaderboard = () => {


const caseInsensitiveSort = (rowA, rowB) => {
        const a = rowA.upvote
        const b = rowB.upvote

        if (b > a) {
            return 1;
        }
    
        if (a > b) {
            return -1;
        }
    
        return 0;
};

 
  const columns = [
    
    {
      name: "Upvote",
      selector: (row) => row.upvote,
      sortable: true,
      sortFunction: caseInsensitiveSort


    },

    {
      name: "Name",
      selector: (row) => row.name, 
    },
    {
      name: "Prompt",
      selector: (row) => row.prompt,
    },
    {
      name: "Story",
      selector: (row) => row.story,
    },
    {
        name: "id",
        selector: (row) => row.id,
        // sortable: true,
      },
   
  ];

 

  createTheme(
    "solarized",
    {
      text: {
        primary: "#ffffff",
        secondary: "#d6d6d6",
      },
      background: {
        default:"rgb(31 41 55)",
      },
      context: {
        background: "#cb4b16",
        text: "#FFFFFF",
      },
      divider: {
        default: "#9999999b",
      },
      action: {
        button: "rgba(0,0,0,.54)",
        hover: "rgba(0,0,0,.08)",
        disabled: "rgba(0,0,0,.12)",
      },
    },
    "dark"
  );
 
  return (
    <div className="dataTableBox">
      <h1 className="leadTitle">Story Leaderboard</h1>

      <div className="dataTable ">
        <DataTable
          className="mainTable"
          direction="auto"
          expandableRows
          expandableRowsHideExpander
          fixedHeaderScrollHeight="300px"
          highlightOnHover
          pagination
          pointerOnHover
          responsive
          //   selectableRows
          selectableRowsHighlight
          //   title="Arnold Movies"
          subHeaderAlign="right"
          subHeaderWrap
          columns={columns}
          data={data}
          theme="solarized"
          defaultSortFieldId={1}
  
      
        />
      </div>
    </div>
  );
};

export default Leaderboard;
