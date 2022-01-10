import React from "react";

import "../Styles/List.css";

const List = (props) => {
  function deleteData(id) {
    props.deleteData(id);
  }

  return (
    <div>
      {props.list.map((item, index) => (
        <div key={index}>
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
              <div className="trash-box" onClick={() => deleteData(item.id)}>
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
