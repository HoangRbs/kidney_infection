/* eslint-disable no-unused-vars */
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    userName: null,
    userAge: null,
    symtomsLevel : {
      // default is No
      "Abrupt Fever and chill":0, 
      "Cloudy urine":0,
      "Dysuria":0,
      "Hemanturia":0,
      "Hesitancy":0,
      "Nausea and vomiting":0,
      "Nocturia":0,
      "Purulent Urine":0,  
      "Suprapubic pain":0, 
      "Flank pain umilateral or bilateral":0,
      "Urinary frequency":0,
    }
  },
  getters: {
    
  },
  mutations: {  // mutate state
   changeSymtomsLevel (state, { symtomName,symtomLevel }){
    state.symtomsLevel[symtomName] = symtomLevel;
   },
   changeUserName (state, {userName}){
    state.userName = userName;
   },
   changeUserAge (state, {userAge}){
    state.userAge = userAge;
   }
  },  
  actions: {  
    changeSymtomsLevel ({commit},payload) {
      const { symtomName, symtomLevel } = payload;
      commit("changeSymtomsLevel", { symtomName, symtomLevel });
    },
    changeUserName ({commit}, payload) {
      const {userName} = payload;
      commit("changeUserName", {userName});
    },
    changeUserAge ({commit}, payload) {
      const {userAge} = payload;
      commit("changeUserAge",{userAge});
    }
  }
})