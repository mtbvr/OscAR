import DynamicForm from "../../common/components/dynamic_form/DynamicForm.jsx";
import { CreateUserDto } from "../../api/models/users/AddUserDto.js";
import { addUser } from "../../api/services/users.api.js";

export default function Authentification() {
  const fields = [
    { name: "email", label: "Email", type: "email", required: true },
    { name: "password", label: "Mot de passe", type: "password", required: true },
    { name: "username", label: "Nom d'utilisateur", type: "text", required: true },
  ];

  const handleSubmit = async (values: CreateUserDto) => {
    console.log("Form values:", values);

    if (!values.email || !values.username || !values.password) {
      console.error("Missing fields");
      return;
    }

    try {
      const newUser = await addUser(values);
      console.log("Succes:", newUser);
    } catch (err) {
      console.error("Erreur:", err);
    }
  };

  return (
    <DynamicForm
      fields={fields}
      onSubmit={handleSubmit}
      submitLabel="Envoyer"
    />
  );
}