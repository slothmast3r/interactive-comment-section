
export const mutations = {
    increment (state) {
        state.count++
    },
    saveComments (state, payload) {
        state.comments = payload
    }
}