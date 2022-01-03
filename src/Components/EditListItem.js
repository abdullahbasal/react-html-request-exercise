import React, { useState } from "react";
import Popup from "./Popup";
const EditListItem = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleEditPopup = () => {
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
              <input />
              <input />
            </>
          }
          handleClose={toggleEditPopup}
        />
      )}
    </div>
  );
};

export default EditListItem;
