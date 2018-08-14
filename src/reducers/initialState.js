import { ENCOUNTERS } from "modules/Adventure/encounters/encounters";

const initialState = {
  // State for the currently logged in user.
  sayluaState: {
    username: null,
    companionIds: [],
    activeCompanionId: null,
    coins: 0,
    encounterId: ENCOUNTERS.START,
    area: null,
    steps: 300,
    encounterSeed: Date.now(),
    encounterState: null,
    sideId: 0,
    theme: 'sayleus',
    inventory: {},

    // Normalized data.
    sprites: {},
  },

  // For redux-form.
  form: {},
};

export default initialState;
