import React, { useContext } from "react";
import { Formik } from "formik";
import { Button, Input, InputNumber } from "antd";
import MultiStepFormContext from "./MultiStepFormContext";

const Detail = () => {
  const { details, setDetails, next } = useContext(MultiStepFormContext);

  return (
    <Formik
      initialValues={details}
      onSubmit={(values) => {
        setDetails(values);
        next();
      }}
      validate={(values) => {
        const errors = {};
        if (!values.name) errors.name = "Name is required";
        if (!values.age) errors.age = "Age is required";
        if (values.age > 90) errors.age = "Are you sure you're human?";
        if (!values.profession) errors.profession = "Profession is required";
        if (/^[0-9]+$/.test(values.profession))
          errors.profession = "Profession should not contain numbers";
        return errors;
      }}
    >
      {({ handleSubmit, errors, handleChange, values }) => (
        <div className="details__wrapper">
          {/* Name Field */}
          <div className={`form__item ${errors.name ? "input__error" : ""}`}>
            <label>Name *</label>
            <Input name="name" onChange={handleChange} value={values.name} />
            <p className="error__feedback">{errors.name}</p>
          </div>

          {/* Age Field */}
          <div className={`form__item ${errors.age ? "input__error" : ""}`}>
            <label>Age *</label>
            <InputNumber
              name="age"
              min={0}
              value={values.age}
              onChange={(value) => handleChange({ target: { name: "age", value } })}
            />
            <p className="error__feedback">{errors.age}</p>
          </div>

          {/* Profession Field */}
          <div className={`form__item ${errors.profession ? "input__error" : ""}`}>
            <label>Profession *</label>
            <Input
              name="profession"
              onChange={handleChange}
              value={values.profession}
            />
            <p className="error__feedback">{errors.profession}</p>
          </div>

          {/* Submit Button */}
          <div className="form__item button__items d-flex justify-content-end">
            <Button type="primary" htmlType="submit" onClick={handleSubmit}>
              Next
            </Button>
          </div>
        </div>
      )}
    </Formik>
  );
};

export default Detail;