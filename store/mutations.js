
function findComment(state, id) {
    for(let comment of state.comments){
        if(comment.id === id){
            return comment
        }
        if(comment.replies)
            for (let reply of comment.replies) {
                if(reply.id === id){
                    return reply
                }
            }
    }
    return undefined
}

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
    addNewComment(state,payload){
        state.comments.push(payload)
    },
    addUserScoreById(state, payload){
        let id = payload.commentId
        let comment = findComment(state, id)
        if(comment){
            comment.userScore = payload.userScore
        }
    },
    editCommentById(state,payload){
        let id = payload.commentId

        let comment = findComment(state, id)
        if(comment){
            comment.content = payload.commentContent
            comment.replyingTo = payload.replyingTo
        }
    }
}