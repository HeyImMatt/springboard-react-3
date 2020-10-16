import React from 'react';
import { Link } from "react-router-dom";

// Simple sublist component that can be reused for rendering sublists where needed
function Sublist({title, items}) {
  return (
    <>
      <h3>{ title }</h3>
      <ul>
        {items.map(item =>
          <li key={item.id}><Link to={item.url}>{item.display}</Link></li>
        )}
      </ul>
    </>
  );
}

export default Sublist;