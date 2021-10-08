import callApi from "@/js/api"
const state = {
    users:[]

}


const getters = {
    users : (state)=> state.users 
}

const actions = {
    getUsers({commit}){
        callApi("users/").then(response=>{
            commit("setUsers", response)
        })
    }
}

const mutations = {
    setUsers:(state,users)=> state.users = users
}

export default {
	state: state,
	getters: getters,
	actions: actions,
	mutations: mutations
}
