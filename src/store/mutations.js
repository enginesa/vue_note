export default {

    setToken(state, token) {
        state.tokenId = token;
    }, setUserId(state, userId) {
        state.userId = userId;
    },
    setAuthenticated(state, payload) {
        state.isAuthenticated = payload;
    },
    setNotes(state,notes){
        state.notes=notes;
    },

}