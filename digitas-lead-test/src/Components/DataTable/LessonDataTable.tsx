import React, { useState } from 'react';
import DataTable from "react-data-table-component";
import { columns, lessons } from '../../MockData/mockdata';
import "react-data-table-component-extensions/dist/index.css";

export default function LessonTable() {
     const [searchDetail, setSearchDetail] = useState({
          search: ''
     });
     const updateSearch = (e: any) => {
          setSearchDetail({ ...searchDetail, [e.target.name]: e.target.value });
     };
     const handleKeyDown = (e: any) => {
          if (e.key === "Enter") {
               //console.log(searchDetail);
               //lessons.filter(item => item.name("'"+searchDetail+"'")); 
               //lessons.filter(item => console.log(item.name)); 
          }
     }

     return <section>
          <div className='search-cntr'>
               <input
               type="text"
               name="search"
               value={searchDetail.search}
               onChange={(e) => updateSearch(e)}
               onKeyDown={(e) => handleKeyDown(e)}
               placeholder="Search for names.."
               autoComplete='off' />
          </div>
          <div>
          {/* <DataTableExtensions {...tableData}> */}
               <DataTable
               columns={columns}
               data={lessons}
               noHeader
               defaultSortAsc={false}
               highlightOnHover
               />
          {/* </DataTableExtensions> */}
          </div>
     </section>;
}
