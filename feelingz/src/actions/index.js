export const toggleWebcam = () => {
  // console.log('in action')
  return {type: 'TOGGLE_WEBCAM'}
}

export const uploadWidget = (image) => {
  return {type: 'UPLOAD_WIDGET', image: image}
}

export const createEmotion = (emotion) => {
  return {type: 'CREATE_EMOTION', emotion: emotion}
}

export const createMood = (mood) => {
  return {type: 'CREATE_MOOD', mood: mood}
}

export const getUserMoods = (user_moods) => {
  return {type: 'GET_USER_MOODS', user_moods: user_moods}
}

export const createMoodCard = (mood_card) => {
  return {type: 'CREATE_MOOD_CARD', mood_card: mood_card}
}
