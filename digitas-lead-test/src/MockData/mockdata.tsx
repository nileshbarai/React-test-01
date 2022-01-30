import React from "react";
export const columns = [
     {
          name: 'Name',
          selector: (row: { name: any; }) => row.name,
          cell: (row: any) => (
               <div id={"name"+row.name.split(' ')[0]} onMouseOver={(e) => handleMouseIn(e, "name"+row.name.split(' ')[0])} onMouseOut={() => handleMouseOut()}>
               {row.name}
               </div>
          )
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
          cell: (row: any) => <img key={row.name} src={row.image} alt={row.name} width={75} height={75} />
     }
];

export const lessons = [
     {
          "name": "React - basics",
          "description": "This course is going to take you through basics of React.",
          "author": "James White",
          "publishDate": "12/03/2019",
          "duration": "00:03:56",
          "image": "https://cdn.auth0.com/blog/react-js/react.png"
     },
     {
          "name": "Vue - learn vue in an hour",
          "description": "This course teaches you how to build a vue application in an hour.",
          "author": "Michael Brown",
          "publishDate": "17/10/2019",
          "duration": "00:00:59",
          "image": "https://vuejs.org/images/logo.png"
     },
     {
          "name": "CSS Animations",
          "description": "Learn how to animate anything in CSS",
          "author": "Alan Smith",
          "publishDate": "04/12/2018",
          "duration": "00:02:11",
          "image": "https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582747_960_720.png"
     },
     {
          "name": "JS - Zero to hero",
          "description": "Everything you need to know in JS",
          "author": "Sarah Parker",
          "publishDate": "12/03/2019",
          "duration": "01:01:35",
          "image": "https://cdn.pixabay.com/photo/2015/04/23/17/41/javascript-736400_960_720.png"
     }
];
const handleMouseIn = (evt: any, id: any) => {
     evt.preventDefault();
     var button = document.createElement('button');
     button.type = 'button';
     button.innerHTML = 'Press me';
     button.onclick = function() {
        alert('abc');
     };
     console.log(id);
     window.document.getElementById(id)?.appendChild(button);
     // if (container === null) {
     //      container.appendChild(button);
     // } else {
          
     // }
};
const handleMouseOut = () => {
     //alert(val);
};