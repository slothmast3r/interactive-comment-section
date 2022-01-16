
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
    },
    deleteComment(state,id){

        for (let i = 0; i < state.comments.length; i++) {
            let comment = state.comments[i]
            if(comment.id === id){
                state.comments.splice(i, 1);
            }
            if(comment.replies)
                for (let j = 0; j < comment.replies.length; j++) {
                    let reply = comment.replies[j]
                    if(reply.id === id){
                        comment.replies.splice(j, 1);
                    }
                }
        }
    },
}