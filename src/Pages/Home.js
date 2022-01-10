import axios from "axios";
import React, { useEffect, useState } from "react";
import Form from "../Components/Form";
import List from "../Components/List";
import Popup from "../Components/Popup";
import "../Styles/Home.css";
const Home = () => {
  const [, setLoading] = useState(false);
  const [list, setList] = useState([]);
  const [selectedItem, setSelectedItem] = useState();
  const [popupText, setPopupText] = useState({
    popupHeader: "",
    popupText: "",
  });
  const getList = () => {
    setLoading(true);
    axios({
      method: "GET",
      url: "http://localhost:3002/db/",
    }).then((ress) => setList(ress.data.posts));
  };
  useEffect(() => {
    getList();
    setLoading(false);

    return () => {};
  }, []);

  const onSubmit = async (data) => {
    try {
      setLoading(true);
      if (selectedItem) {
        await axios.put(`http://localhost:3002/posts/${selectedItem.id}`, {
          data,
        });
      } else {
        await axios.post("http://localhost:3002/posts/", {
          data,
        });
      }

      togglePopup();
      getList();
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  // const deletePopup = () => {
  //   setIsOpen(true);
  // };
  const deleteData = async (id) => {
    try {
      setLoading(true);
      await axios.delete(`http://localhost:3002/posts/${id}`);
      const filteredList = list.filter((item) => item.d !== id);
      setList(filteredList);
      getList();
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  //popup
  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
    if (isOpen) {
      setSelectedItem();
    } else {
      setPopupText({
        popupHeader: "Listeye Öğe Ekle",
        popupText: "Eklemek yapacağınız alanları eksik ve hatasız doldurunuz.",
      });
    }
  };
  const handleSelectedItemChange = (item) => {
    setSelectedItem({ ...item.data, id: item.id });
    setPopupText({
      popupHeader: "Seçili Öğeyi Düzenle",
      popupText: "Düzenlemek istediğiniz alanları eksik ve hatasız doldurunuz.",
    });
    setIsOpen(true);
  };

  return (
    <>
      <h1>Listeye Eleman Ekle</h1>
      <input
        type="button"
        value="+"
        onClick={togglePopup}
        className="plus-button"
      />
      {isOpen && (
        <Popup
          content={
            <>
              <b>{popupText.popupHeader}</b>
              <p>{popupText.popupText}</p>
              <Form
                onSubmit={(data) => onSubmit(data)}
                handleClose={togglePopup}
                title={selectedItem?.title}
                body={selectedItem?.body}
              />
            </>
          }
          handleClose={togglePopup}
        />
      )}

      <List
        list={list}
        deleteData={(id) => deleteData(id)}
        onSelectedItemChange={(item) => handleSelectedItemChange(item)}
      />
    </>
  );
};

export default Home;
