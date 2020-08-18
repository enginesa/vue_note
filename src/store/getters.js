export default {

    getToken(state) {
        return state.tokenId;
    },
    getUserId(state) {
        return state.userId;
    },
    getNotes(state){
        return state.notes;
    }
}