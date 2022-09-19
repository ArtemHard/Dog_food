import React from "react";
import Button from "../Elements/Buttons/Button";
import FormInput from "../FormInput/FormInput";
import { useDispatch } from "react-redux";
import { createProduct } from "../../redux/store/productSlice";

const CreateProductForm = () => {
  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();

    const formData = Object.fromEntries(new FormData(e.target).entries());

    dispatch(createProduct(formData));
    e.target.reset();
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
