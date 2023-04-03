import { getIn, useFormik } from "formik";

const FieldQuantity = ({ data, max, change }) => {
  const types = {
    quantity: "number",
  };
  const { handleSubmit, handleBlur, handleChange, values, errors } = useFormik({
    initialValues: data.values,
    validationSchema: data.schema,
  });
  const handleOnChange = (e) => {
    handleChange(e);
    change(e);
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      {Object.keys(data.values).map((v) => (
        <div key={v} className="field">
          <label htmlFor={v}>
            {v.charAt(0).toUpperCase() + v.slice(1)}{" "}
            {errors[v] && <span className="required">{errors[v]}</span>}
          </label>
          <input
            type={types[v]}
            autoComplete="on"
            max={max}
            min={1}
            name={v}
            value={getIn(values, v)}
            placeholder={v}
            onChange={handleOnChange}
            onBlur={handleBlur}
          />
        </div>
      ))}
    </form>
  );
};

export default FieldQuantity;
