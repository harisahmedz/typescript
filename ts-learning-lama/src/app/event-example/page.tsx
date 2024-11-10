'use client';

import React from "react";

export default function Page() {
    const handleClick=(e:React.MouseEvent<HTMLButtonElement>)=>{
        e.preventDefault();
        console.log('search')
    }
    const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        console.log('e', e.target.value)
    };
    const handleDelete = (e: React.MouseEvent<HTMLButtonElement>, num:number) => {
       e.preventDefault();
        console.log("handleDelete", num);
    };
  return (
     <div className="eventExample">
      <form>
        <input
          type="text"
          placeholder="Search for anything..."
          onChange={handleChange}
        />
        <button onClick={handleClick}>Search</button>
      </form>
      <form className="post">
        <h1>Lorem ipsum dolor sit amet consectetur 1</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi ullam
          voluptate quisquam voluptatibus magni voluptatum quasi eveniet totam
          harum neque itaque, eum reprehenderit non repellendus? Assumenda
          necessitatibus distinctio veniam eveniet.
        </p>
        <button onClick={(e) => handleDelete(e, 1)}>Delete</button>
      </form>
      <form className="post">
        <h1>Lorem ipsum dolor sit amet consectetur 2</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi ullam
          voluptate quisquam voluptatibus magni voluptatum quasi eveniet totam
          harum neque itaque, eum reprehenderit non repellendus? Assumenda
          necessitatibus distinctio veniam eveniet.
        </p>
        <button onClick={(e) => handleDelete(e, 2)}>Delete</button>
      </form>
    </div>
  );
}
