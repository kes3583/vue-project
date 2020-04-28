import data from '@/data/index'
export default {
  state: {
    data: data
  },
  mutations: {
    // SET_DATA (state, payload) {
    //   state.data = data
    // },
    DELETE_ITEM (state, payload) {
      const index = state.data.Content.indexOf(payload)
      confirm('Are you sure you want to delete this item?') && state.data.Content.splice(index, 1)
    },
    ADD_ITEM (state, payload) {
      let items = state.data.Content.concat(payload)
      state.data.Content = items
    }
  },
  getters: {
    GET_DATA: state => state.data.Content,
    GET_DES_DATA: state => {
      return state.data.Content.sort((a, b) => {
        return b.content_id - a.content_id
      }) // 내림차순 30 - 0
    }
  },
  actions: {
    async deleteItem ({ commit }, item) {
      commit('DELETE_ITEM', item)
    },
    async saveItem ({ commit, getters }, item) {
      const contentId = getters.GET_DES_DATA[0].content_id + 1 // 마지막 데이터의 id + 1
      item.content_id = contentId
      commit('ADD_ITEM', item)
    }
  }

}
