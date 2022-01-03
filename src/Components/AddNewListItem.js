import React, { useState } from "react";
import { useForm } from "react-hook-form";
import "../Styles/AddNewListItem.css";
const AddNewListItem = (props) => {
  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    props.onSubmit(data);
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          className="form-input"
          type="text"
          placeholder="Başlık (Gerekli)"
          {...register("title", {
            required: true,
            max: 20,
            minLength: 5,
            maxLength: 20,
            pattern: /[a-zA-Z - zöçİğüÖÇĞÜşŞ]/i,
          })}
        />
        {errors.title && (
          <p className="error-message">
            Minimum 5 karakter Maksimum 20 Karakter Giriniz.
          </p>
        )}

        <input
          className="form-input"
          type="text"
          placeholder="Yazınız (Gerekli)"
          {...register("body", {
            required: true,
            minLength: 3,
            maxLength: 20,
            pattern: /[a-zA-Z - zöçİğüÖÇĞÜşŞ]/i,
          })}
        />
        {errors.body && (
          <p className="error-message">
            Minimum 3 karakter Maksimum 20 Karakter Giriniz.
          </p>
        )}

        <button type="submit" className="submit" className="submit-button">
          Gönder
        </button>
      </form>
    </>
  );
};

export default AddNewListItem;
