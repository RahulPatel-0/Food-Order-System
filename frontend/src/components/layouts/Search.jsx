import React from 'react'
import { FaSearchengin } from "react-icons/fa";

export default function Search() {
  return (
   <form >
    <div className="input-group">
        <input type="text" 
        placeholder="Search your favorite Restraunt" 
        id="search_field" 
        className="form-control" />
        <div className="input-group-append">
            <button id="search_btn" className="btn"><FaSearchengin className='fa fa-search'/></button>
        </div>
    </div>
   </form>
  );
}
