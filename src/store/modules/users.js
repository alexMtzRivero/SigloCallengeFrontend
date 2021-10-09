import Vue from 'vue'
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
    editUser({commit},{user,listIndex}){
        callApi(`users/${user.pk}/`,"put",user).then(newUser=>{
            commit("updateUser",{listIndex,newUser})
        })
    },
    deleteUser({commit},{userPk,listIndex}){
        if(userPk){
            //delete from DB
            callApi(`users/${userPk}/`,"delete").then(()=>{
                //delete from local list
                commit("removeUser", listIndex)
            })    
        }else{
            commit("removeUser", listIndex)
        }
    },
    createUser({commit},{user,listIndex}){
        callApi("users/","post",user).then(newUser=>{
            commit("updateUser",{listIndex,newUser})
        })
    },
}

const mutations = {
    removeUser:(state,index)=> state.users.splice(index, 1),
    updateUser:(state,{listIndex,newUser})=> {
        console.log("update",listIndex,newUser);
        Vue.set(state.users,listIndex,newUser)
    }
        ,
    addEmptyUser: (state)=> state.users.unshift({}), 
    setUsers:(state,users)=> state.users = users
}

export default {
	state: state,
	getters: getters,
	actions: actions,
	mutations: mutations
}
