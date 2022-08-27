export default {
    saveUserName(context,username){
        context.commit('saveUserName',username);
    },
    getCartCount(context,cartcount){
        context.commit('getCartCount',cartcount);
    }
}