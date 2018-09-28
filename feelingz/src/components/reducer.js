const initialState = {
  showWebcam: false,
  selfie: null,
  emotion: null
}


const reducer = (state = initialState, action) => {
  switch (action.type) {

    case 'TOGGLE_WEBCAM':
      return {...state, showWebcam: !state.showWebcam}

    default:
    return state
  }
}


export default reducer
