import React, { useContext } from "react";
import { Formik, Field, Form } from "formik";
import { Button, Input } from "antd";
import MultiStepFormContext from "./MultiStepFormContext";

const Details = () => {
  const { address, setAddress, next, prev } = useContext(MultiStepFormContext);

  return (
    <Formik
      initialValues={address}
      onSubmit={(values) => {
        setAddress(values);
        next();
      }}
      validate={(values) => {
        const errors = {};
        if (!values.address1) errors.address1 = "Address is required";
        if (!values.city) errors.city = "City is required";
        return errors;
      }}
    >
      {({ handleSubmit, errors, handleChange, values }) => (
        <Form className="details__wrapper">
          <div className={`form__item ${errors.address1 && "input__error"}`}>
            <label>Address-1 *</label>
            <Input name="address1" onChange={handleChange} value={values.address1} />
            <p className="error__feedback">{errors.address1}</p>
          </div>

          <div className="form__item">
            <label>Address-2</label>
            <Input name="address2" onChange={handleChange} value={values.address2} />
          </div>

          <div className={`form__item ${errors.city && "input__error"}`}>
            <label>City *</label>
            <Input name="city" onChange={handleChange} value={values.city} />
            <p className="error__feedback">{errors.city}</p>
          </div>

          <div className="form__item button__items d-flex justify-content-between">
            <Button type="default" onClick={prev}>
              Back
            </Button>
            <Button type="primary" htmlType="submit">
              Next
            </Button>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default Details;
