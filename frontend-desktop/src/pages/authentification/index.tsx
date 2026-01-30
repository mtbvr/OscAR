import DynamicForm from "../../common/components/dynamic_form/DynamicForm.jsx";
import { CreateUserDto } from "../../api/models/users/AddUserDto.js";
import { LogUserDto } from "../../api/models/users/LogUserDto.js";
import { addUser } from "../../api/services/users.api.js";
import { currentUser, logoutUser, logUser } from "../../api/services/auth.api.js";
import { useAuthStore } from "../../common/store/authStore";

export default function Authentification() {

  const user = useAuthStore((state) => state.user);
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);
  const clearUser = useAuthStore((state) => state.clearUser);
  const setUser = useAuthStore((state) => state.setUser);
  
  const signinFields = [
    { name: "email", label: "Email", type: "email", required: true },
    { name: "password", label: "Mot de passe", type: "password", required: true },
    { name: "username", label: "Nom d'utilisateur", type: "text", required: true },
  ];

  const loginFields = [
    { name: "email", label: "Email", type: "email", required: true },
    { name: "password", label: "Mot de passe", type: "password", required: true },
  ]

  const handleSubmitSignin = async (values: CreateUserDto) => {

    if (!values.email || !values.username || !values.password) {
      console.error("Missing fields");
      return;
    }

    try {
      const newUser = await addUser(values);
      setUser(newUser);
      console.log(newUser)
    } catch (err) {
      console.error("Erreur:", err);
    }
  };

  const handleSubmitLogin = async (values: LogUserDto) => {

    if (!values.email || !values.password) {
      console.error("Missing field");
      return;
    }

    try {
      const newUser = await logUser(values);
      setUser(newUser);

    } catch (err) {
      console.error("Erreur:", err);
    }
  };

  const handleLogout = async () => {
    try {
      await logoutUser();
      clearUser();
    } catch (err) {
      console.error("Erreur lors de la déconnexion :", err);
    }
  };

  return (
    <>
      <DynamicForm
        fields={signinFields}
        onSubmit={handleSubmitSignin}
        submitLabel="Envoyer"
      />

      <DynamicForm
        fields={loginFields}
        onSubmit={handleSubmitLogin}
        submitLabel="Envoyer"
      />
      
      <section aria-label="Auth actions">
        <button
          type="button"
          onClick={() => {
            console.log("AUTH STORE:", { user, isAuthenticated });
          }}
        >
          Debug auth store
        </button>

        <button
          type="button"
          onClick={handleLogout}
          disabled={!isAuthenticated}
        >
          Se déconnecter
        </button>
      </section>

    </>

  );
}