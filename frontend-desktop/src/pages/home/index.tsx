import { getAllDifficulty } from "../../api/services/difficulty.api";
import DynamicForm from "../../common/components/dynamic_form/DynamicForm";

export default function Home() {

  const difficultyData = async() => {getAllDifficulty}

  const addHuntFields = 
    [
      { name: "title", label: "Titre de la chasse", type: "text", required: true },
      { name: "description", label: "Description de la chasse", type: "text", required: true },
      { name: "points", label: "Points de la chasse", type: "number", required: true },
      { name: "latitude", label: "Latitude de la chasse", type: "number", required: false},
      { name: "longitude", label: "Longitude de la chasse", type: "number", required: false},
      //TODO Create select with all difficulty options
    ]

  const handleAddHunt = async() => {

  }

  return (
    <>
        <h1>Lootopia</h1>

        <section>
          <h2>
            Ajouter une chasse
          </h2>
          <DynamicForm
                  fields={addHuntFields}
                  onSubmit={handleAddHunt}
                  submitLabel="Envoyer"
            />
        </section>

    </>
  );
}