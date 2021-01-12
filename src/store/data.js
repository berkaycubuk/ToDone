import create from 'zustand'

const useStore = create(set => ({
  list: [
    {
      id: 'aaa',
      title: 'Item 1',
    }
  ],
}))

export default useStore