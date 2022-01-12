import {createStore} from 'vuex'
import { state } from "./state";
import { mutations } from "./mutations";
import createPersistedState from "vuex-persistedstate";


export const store = createStore({
    plugins: [createPersistedState()],
    state,
    mutations,
})
