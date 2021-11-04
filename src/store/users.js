export default {
    namespaced: true,
    state: {
        users: []
    },
    getters: {
        userGreatestId(state) {
            const sortedUsers = [...state.users].sort((a, b) =>
                b.id - a.id
            )

            return sortedUsers.length > 0 ? sortedUsers[0].id : 0
        },
    },
    mutations: {
        setUsers(state, users) {
            state.users = users;
        }
    },
    actions: {
        addUser({ commit, state }, user) {
            commit('setUsers', state.users.concat([user]))
        },
        deleteUser({ commit, state }, userId) {
            commit('setUsers', state.users.filter(x => x.id != userId));

        },
        fetchUsers({ commit }) {
            fetch('https://reqres.in/api/users?page=1')
                .then((response) => {
                    return response.json();
                })
                .then((data) => {
                    commit('setUsers', data.data)
                })
        },

    },


}
