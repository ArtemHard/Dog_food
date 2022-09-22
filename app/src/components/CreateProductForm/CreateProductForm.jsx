import React from "react";
import Button from "../Elements/Buttons/Button";
import FormInput from "../FormInput/FormInput";
import { useDispatch, useSelector } from "react-redux";
import { createNewProduct } from "../../redux/store/productSlice";

const CreateProductForm = () => {
  const { status, error } = useSelector((state) => state.products);

  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();

    const formData = Object.fromEntries(new FormData(e.target).entries());

    dispatch(createNewProduct(formData));
    e.target.reset();
    if (status === "created") {
      alert("Товар успешно создан");
    }
  };

  return (
    <form
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        gap: "10px",
      }}
      onSubmit={submitHandler}
    >
      {status === "creating" && <h2>Создаю товар...</h2>}
      {error && <h2>An error occured: {error}</h2>}
      <FormInput name='available' text='available' type='text' />
      <FormInput name='pictures' text='pictures' type='text' />
      <FormInput name='name' text='name' type='text' />
      <FormInput name='price' text='price' type='text' />
      <FormInput name='discount' text='discount' type='text' />
      <FormInput name='stock' text='stock' type='text' />
      <FormInput name='wight' text='wight' type='text' />
      <FormInput name='description' text='description' type='text' />
      <Button text='Создать' type='submit' />
    </form>
  );
};

export default CreateProductForm;
