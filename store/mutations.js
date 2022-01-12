
export const mutations = {
    increment (state) {
        state.lastId++
    },
    saveComments (state, payload) {
        state.comments = payload
    },
    saveDictionary (state, payload) {
        state.commentDict = payload
    },
    addUserScoreById(state, payload){
        let id = payload.commentId
        for(let comment of state.comments){
            if(comment.id === id){
                comment.userScore = payload.userScore
            }
            for (let reply of comment.replies) {
                if(reply.id === id){
                    reply.userScore = payload.userScore
                }
            }
        }
    }
}