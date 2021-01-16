import AsyncStorage from '@react-native-async-storage/async-storage'
import create from 'zustand'

const STORAGE_KEY = '@list'

let list = []

const fetchData = async () => {
  try {
    const jsonValue = await AsyncStorage.getItem(STORAGE_KEY)
    list = JSON.parse(jsonValue)
    console.log(list)
    return list
  } catch(e) {
    alert('Failed to load...')
  }
}

const saveData = async (latestList) => {
  try {
    await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(latestList))
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
  fetch: async () => {
    await fetchData()
    set(() => ({ list: list }))
  },
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