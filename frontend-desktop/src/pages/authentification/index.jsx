import React from "react";
import DynamicForm from "../../common/components/DynamicForm.jsx";

export default function Authentification() {
  const fields = [
    { name: "email", label: "Email", type: "email", required: true },
    { name: "password", label: "Mot de passe", type: "password", required: true },
    { name: "username", label: "Nom d'utilisateur", type: "text", required: true },
  ];

  const handleSubmit = (values) => {
    console.log("Form values:", values);
  };

  return (
    <DynamicForm
      fields={fields}
      onSubmit={handleSubmit}
      submitLabel="Envoyer"
    />
  );
}