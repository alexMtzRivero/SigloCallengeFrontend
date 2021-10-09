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
    editUser({commit},user,index){
        callApi(`users/${user.pk}/`,"put",user).then(newUser=>{
            commit("updateUser",index,newUser)
        })
    },
    deleteUser({commit},userPk,index){
        if(userPk){
            //delete from DB
            callApi(`users/${userPk}/`,"delete").then(()=>{
                //delete from local list
                commit("removeUser", index)
            })    
        }else{
            commit("removeUser", index)
        }
    },
    createUser({commit},user,index){
        callApi("users/","post",user).then(newUser=>{
            commit("updateUser",index,newUser)
        })
    },
}

const mutations = {
    removeUser:(state,index)=> state.users.splice(index, 1),
    updateUser:(state,index,newUser)=> state.users[index] = newUser,
    addEmptyUser: (state)=> state.users.unshift({}), 
    setUsers:(state,users)=> state.users = users
}

export default {
	state: state,
	getters: getters,
	actions: actions,
	mutations: mutations
}
