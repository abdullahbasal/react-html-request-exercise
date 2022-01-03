import axios from "axios";
import React, { useEffect, useState } from "react";
import AddNewListItem from "../Components/AddNewListItem";
import List from "../Components/List";
import Popup from "../Components/Popup";
import "../Styles/Home.css";
const Home = () => {
  const [loading, setLoading] = useState(false);
  const [list, setList] = useState([]);
  const [filteredList, setFilteredList] = useState();
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
    console.log(list);
    return () => {};
  }, []);

  const onSubmit = async (data) => {
    try {
      setLoading(true);
      const res = await axios.post("http://localhost:3002/posts/", {
        data,
      });
      setList([...list, res.data.data]);
      togglePopup();
      getList();
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };
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
              <b>Listeye Eleman Ekle</b>
              <p>Listeye Eleman Eklemek için eksiksiz ve hatasız doldurunuz.</p>
              <AddNewListItem
                onSubmit={(data) => onSubmit(data)}
                handleClose={togglePopup}
              />
            </>
          }
          handleClose={togglePopup}
        />
      )}

      <List list={list} deleteData={(id) => deleteData(id)} />
    </>
  );
};

export default Home;
