import { ENCOUNTERS } from "modules/Adventure/encounters/encounters";

const initialState = {
  // State for the currently logged in user.
  sayluaState: {
    // General user settings.
    username: null,
    theme: 'sayleus',
    sidebarTabIndex: 0,

    // Game state.
    inventory: {},
    companionIds: [],
    activeCompanionId: null,
    coins: 0,
    shards: 1,
    encounterId: ENCOUNTERS.START,
    area: null,
    steps: 300,
    deck: [],
    encounterSeed: Date.now(),
    encounterState: null,
    sideId: 0,
    denLimit: 20,
    jobLimit: 1,
    activeJobs: [],
    lastJobTick: 0,

    // Normalized data.
    sprites: {},
  },

  // For redux-form.
  form: {},
};

export default initialState;
