import { createStore } from 'vuex'

//로그인 정보 유지하기 위한 코드
import persistedstate from 'vuex-persistedstate'

const store = createStore({
    state () {
        return {
            user: {}
        }
    },
    mutations: {
        user (state, data) {
            state.user = data;
        }
    },
    plugins: [
        persistedstate({
            paths: ['user']
        })
    ]
});

export default store;