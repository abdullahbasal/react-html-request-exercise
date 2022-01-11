/* eslint-disable array-callback-return */
import React, { useState } from "react";

import "../Styles/List.css";

const List = (props) => {
  const [searchedTitle, setSearchedTitle] = useState("");
  function deletePopup(id) {
    props.deletePopup(id);
  }
  console.log(searchedTitle);
  return (
    <div>
      <input
        type="text"
        class="icon-rtl"
        placeholder="Arama Yapınız..."
        onChange={(e) => setSearchedTitle(e.target.value)}
      />
      {props.list
        .filter((item) => {
          if (searchedTitle === "") {
            return item;
          } else if (item.data.title.toLowerCase().includes(searchedTitle)) {
            return item;
          }
        })
        .map((item, index) => (
          <div className="card" key={index}>
            <ol className="list">
              <li
                className="item"
                data-content={item.id}
                onClick={() => props.onSelectedItemChange(item)}
              >
                <h2 className="headline">{item.data?.title}</h2>
                <span>{item.data?.body}</span>
              </li>
              <div className="trash-box-container">
                <div className="trash-box" onClick={() => deletePopup(item.id)}>
                  <div className="trash"></div>
                  <div className="trash-top"></div>
                  <div className="trash-btm">
                    <div className="trash-lines">
                      <div className="trash-line"></div>
                      <div className="trash-line"></div>
                    </div>
                  </div>
                </div>
              </div>
            </ol>
          </div>
        ))}
    </div>
  );
};

export default List;
