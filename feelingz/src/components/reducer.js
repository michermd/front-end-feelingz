const initialState = {
  showWebcam: false,
  selfie: null,
  emotion: null,
  mood: null,
  user_moods: [],
  mood_card: null
}


const reducer = (state = initialState, action) => {
  //{tpye:  .....}
  switch (action.type) {
    case 'UPLOAD_WIDGET':
    return { ...state, selfie: action.image}

    case 'TOGGLE_WEBCAM':
      return {...state, showWebcam: !state.showWebcam}

    case 'CREATE_EMOTION':
      return {...state, emotion: action.emotion}

    case 'CREATE_MOOD':
      return {...state, mood: action.mood}

    case 'GET_USER_MOODS':
      return {...state, user_moods: action.user_moods}

    case 'CREATE_MOOD_CARD':
      return {...state, mood_card: action.mood_card}

    default:
    return state
  }
}


export default reducer
