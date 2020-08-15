export default {

    setToken(state, token) {
        state.tokenId = token;
    },
    setAuthenticated(state, payload) {
        state.isAuthenticated = payload;
    }
}