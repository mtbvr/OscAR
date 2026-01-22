import React, { useState } from "react";

export default function DynamicForm({ fields, onSubmit, submitLabel = "Valider" }) {
  const [values, setValues] = useState(
    () =>
      fields.reduce((acc, field) => {
        acc[field.name] = "";
        return acc;
      }, {})
  );

  const handleChange = (name, type, value) => {
    let parsed = value;
    if (type === "number") {
      parsed = value === "" ? "" : Number(value);
    }
    setValues((prev) => ({ ...prev, [name]: parsed }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(values);
  };

  return (
    <form onSubmit={handleSubmit}>
      {fields.map((field) => (
        <div key={field.name} style={{ marginBottom: "1rem" }}>
          <label>
            {field.label}
            {field.required && " *"}
          </label>
          <input
            type={field.type}
            name={field.name}
            placeholder={field.placeholder}
            required={field.required}
            value={values[field.name]}
            onChange={(e) => handleChange(field.name, field.type, e.target.value)}
          />
        </div>
      ))}

      <button type="submit">{submitLabel}</button>
    </form>
  );
}