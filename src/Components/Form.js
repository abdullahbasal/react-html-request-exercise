import React from "react";
import { useForm } from "react-hook-form";
import "../Styles/Form.css";
const Form = (props) => {
  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    props.onSubmit(data);
  };
  console.log(props);
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          className="form-input"
          type="text"
          placeholder="Başlık (Gerekli)"
          {...register("title", {
            required: true,
            value: props.title,
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
            value: props.body,
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

        <button type="submit" className="submit-button submit">
          Gönder
        </button>
      </form>
    </>
  );
};

export default Form;
