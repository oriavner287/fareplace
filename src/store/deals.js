import create from 'zustand'

const useDealsStore = create(set => ({
    deals: null,
    setDealsData: deals => {
        set({ deals })
    }
}))

export default useDealsStore
