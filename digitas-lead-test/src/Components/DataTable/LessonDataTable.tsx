import React from 'react';
import DataTable from 'react-data-table-component';
import lessons from '../../MockData/mockdata.json';

const columns = [
     {
       name: 'Name',
       selector: (row: { name: any; }) => row.name,
     },
     {
       name: 'Description',
       selector: (row: { description: any; }) => row.description,
     },
     {
       name: 'Author',
       selector: (row: { author: any; }) => row.author,
     },
     {
       name: 'Publish Date',
       selector: (row: { publishDate: any; }) => row.publishDate,
       sortable: true,
     },
     {
       name: 'Duration',
       selector: (row: { duration: any; }) => row.duration,
       sortable: true,
     },
     {
     name: 'Image',
     //   selector: (row: { image: any; }) => row.image,
     // image: true,
     cell: (row: any) => <img key={row.name} src={row.image} alt={row.name} width={100} height={100} />
     },
   ];

export default function LessonDataTable() {
  return <div>
       <DataTable
        columns={columns}
        data={lessons}
        pagination
        highlightOnHover
      />
  </div>;
}
