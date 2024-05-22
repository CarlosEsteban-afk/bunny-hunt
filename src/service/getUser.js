import axios from 'axios'
const submitScore = async (id, score) => {
  try {
    const response = await axios.post(
      `https://66332d1ef7d50bbd9b486b99.mockapi.io/api/bunny/user/${id}`,
      score
    )
    console.log(response.data)
  } catch (error) {
    console.error(error)
  }
}

const getUserById = async (id) => {
  try {
    const response = await axios.get(
      `https://66332d1ef7d50bbd9b486b99.mockapi.io/api/bunny/user/${id}`
    )
    console.log(response.data)
    return response.data
  } catch (error) {
    console.error(error)
  }
}

export default getUserById

