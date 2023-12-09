export const Reducer = (state, action) => {
  const { payload, type, page } = action
  switch (type) {
    case 'suma':
      return {
        page: state.page + 1,
      };
    case 'resta':
      return {
        page: state.page - 1,
      };
    case 'setCharacters':
      return {
        ...state,
        characters: action.payload,
        page
      };
      case 'reset':
      return {
        ...state,
        page: payload,
      };
    case 'setCharacter':
      return {
        ...state,
        character: {
          id: action.payload.id,
          image: action.payload.image,
          name: action.payload.name,
          status: action.payload.status,
          species: action.payload.species,
          gender: action.payload.gender,
        },
        origin: action.payload.origin,
        location: action.payload.location
      }
    case 'next':
      return {
        page: payload + 1,
      }
    case 'prev':
      return {
        page: payload - 1,
      }
    default:
      return state;
  }
};
