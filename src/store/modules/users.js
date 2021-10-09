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
    },
    editUser(_,user,index){
        callApi(`users/${user.pk}/`,"put",user).then(response=>{
            console.log(response,index)
        })
    },
    createUser(_,user){
        callApi("users/","post",user).then(response=>{
            console.log(response)
        })
    },
}

const mutations = {
    addEmptyUser: (state)=> state.users.unshift({}), 
    setUsers:(state,users)=> state.users = users
}

export default {
	state: state,
	getters: getters,
	actions: actions,
	mutations: mutations
}
