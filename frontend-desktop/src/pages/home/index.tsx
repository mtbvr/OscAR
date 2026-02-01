import { getAllDifficulty } from "../../api/services/difficulty.api";
import { getAllIndexByHunt } from "../../api/services/index.api";
import DynamicForm from "../../common/components/dynamic_form/DynamicForm";

export default function Home() {

  const difficultyData = async() => {getAllDifficulty}
  const indexByHuntData = async(hunt_id: string) => {getAllIndexByHunt(hunt_id)}

  const addHuntFields = 
    [
      { name: "title", label: "Titre de la chasse", type: "text", required: true },
      { name: "description", label: "Description de la chasse", type: "text", required: true },
      { name: "points", label: "Points de la chasse", type: "number", required: true },
      { name: "latitude", label: "Latitude de la chasse", type: "number", required: false},
      { name: "longitude", label: "Longitude de la chasse", type: "number", required: false},
      //TODO Create select with all difficulty in options
    ]

  const addStepFields =
    [
      { name: "title", label: "Titre de la chasse", type: "text", required: true },
      { name: "description", label: "Description de la chasse", type: "text", required: true },
      { name: "points", label: "Points de la chasse", type: "number", required: true },
      { name: "latitude", label: "Latitude de la chasse", type: "number", required: false},
      { name: "longitude", label: "Longitude de la chasse", type: "number", required: false},
      //TODO Create select with all different hunts in options
      //TODO Create Boolean button would you add this step on step group ? Yes : Show all hunt index + button add new Index / No : Don't put index_id on body
    ]

  const addIndexFields =
    [
      { name: "name", label: "Nom de l'index", type: "text", required: true },
      //TODO don't forget to get the hunt_id and send with the request body
    ]

  const handleAddHunt = async() => {
    console.log("create hunt")
  }

  const handleAddStep = async() => {
    console.log("create step")
  }

  const handleAddIndex = async() => {
    console.log("create index")
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

        <section>
          <h2>
            Ajouter un Index à une chasse
          </h2>
          <DynamicForm
            fields={addIndexFields}
            onSubmit={handleAddIndex}
            submitLabel="Envoyer"
          />
        </section>

        <section>
          <h2>Ajouter une étape à une chasse</h2>
          <DynamicForm
            fields={addStepFields}
            onSubmit={handleAddStep}
            submitLabel="Envoyer"
          />
        </section>

    </>
  );
}