import AsyncStorage from '@react-native-async-storage/async-storage'
import create from 'zustand'

const STORAGE_KEY = '@list'

let list = [
  {
      id: '1231',
      title: 'Deneme',
      done: false
    },
    {
      id: '1232',
      title: 'Deneme',
      done: false
    },
    {
      id: '1235',
      title: 'Deneme',
      done: false
    },
    {
      id: '1234',
      title: 'Deneme',
      done: true
    }
]

const fetchData = async () => {
  try {
    const jsonValue = await AsyncStorage.getItem(STORAGE_KEY)
    list = []
    // return [] // JSON.parse(jsonValue)
    // return jsonValue != null ? JSON.parse(jsonValue) : []
  } catch(e) {
    alert('Failed to load...')
  }
}

fetchData()

const saveData = async (latestList) => {
  try {
    await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(latestList))
    console.log(JSON.stringify(latestList))
  } catch(e) {
    alert('Failed to save...')
  }
}

const useStore = create(set => ({
  list: list,
  addItem: (item) => set(state => {
    state.list[state.list.length] = item
    saveData(state.list)
    return {list: state.list}
  }),
  updateItem: (id, item) => set(state => {
    const index = state.list.findIndex(e => (e.id == id))
    if (index != -1) {
      state.list[index] = item
      saveData(state.list)
    }
    return {list: state.list}
  })
}))

export default useStore