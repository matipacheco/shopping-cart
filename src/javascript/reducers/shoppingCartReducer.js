const INITIAL_STATE = [
  {
    id: 1,
    name: "Caquita"
  },
  {
    id: 2,
    name: "GoPro"
  },
  {
    id: 3,
    name: "Juego: CupHead"
  }
];

export default function catalogReducer(state = INITIAL_STATE, action) {
  switch (action) {
    case "ADD_ITEM" : {
      return state
    }
    default : {
      return state
    }
  }
}
