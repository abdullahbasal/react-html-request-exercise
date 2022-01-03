import React, { useState } from "react";

import "../Styles/List.css";
import Popup from "./Popup";
const List = (props) => {
  const [selectedItem, setSelectedItem] = useState();
  function handleTitle(event) {
    setSelectedItem({
      ...selectedItem,
      title: event.target.value,
    });
  }
  function handleBody(event) {
    setSelectedItem({
      ...selectedItem.data,
      body: event.target.value,
    });
  }
  function deleteData(id) {
    props.deleteData(id);
  }
  console.log(selectedItem);
  const [isOpen, setIsOpen] = useState(false);

  const toggleEditPopup = (item, id) => {
    setSelectedItem(item);
    setIsOpen(!isOpen);
  };
  return (
    <div>
      {isOpen && (
        <Popup
          content={
            <>
              <b>Listedeki Elemanı Düzenle</b>
              <p>
                Listedeki Elemanı Düzenlemek için eksiksiz ve hatasız
                doldurunuz.
              </p>
              <input onChange={(event) => handleTitle(event)} />
              <input onChange={(event) => handleBody(event)} />
              <button>tamam</button>
            </>
          }
          handleClose={toggleEditPopup}
        />
      )}
      {props.list.map((item, index) => (
        <div key={index}>
          <ol className="list">
            <li
              className="item"
              data-content={item.id}
              onClick={() => toggleEditPopup(item)}
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
