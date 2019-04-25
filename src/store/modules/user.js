import { loginByEmail, getUserInfo } from '@/api/login';
import { setToken, removeToken } from '@/utils/auth';

const user = {
  state: {
    user: '',
    status: '',
    code: '',
    token: '3b759a9ca80234563d87672350659b2b',
    name: '',
    avatar: '',
    introduction: '',
    roles: [],
    setting: {
      articlePlatform: []
    }
  },

  getters: {
    token: state => state.token,
    avatar: state => state.avatar,
    name: state => state.name,
    status: state => state.status,
    introduction: state => state.introduction,
    roles: state => state.roles,
    setting: state => state.setting
  },

  mutations: {
    SET_CODE: (state, code) => {
      state.code = code;
    },
    SET_TOKEN: (state, token) => {
      state.token = token;
    },
    SET_INTRODUCTION: (state, introduction) => {
      state.introduction = introduction;
    },
    SET_SETTING: (state, setting) => {
      state.setting = setting;
    },
    SET_STATUS: (state, status) => {
      state.status = status;
    },
    SET_NAME: (state, name) => {
      state.name = name;
    },
    SET_AVATAR: (state, avatar) => {
      state.avatar = avatar;
    },
    SET_ROLES: (state, roles) => {
      state.roles = roles;
    }
  },

  actions: {
    // Username login
    LoginByEmail({ commit }, payload) {
      return new Promise((resolve, reject) => {
        loginByEmail(payload.email.trim(), payload.password).then(response => {
          const { data } = response;
          commit('SET_TOKEN', data.user.token);
          setToken(response.data.user.token);
          resolve(data);
        }).catch(error => {
          reject(error);
        });
      });
    },

    // Get user information
    GetUserInfo({ commit, state }) {
      return new Promise((resolve, reject) => {
        getUserInfo(state.token).then(response => {
          // Since mockjs does not support custom status codes, it can only be hacked like this
          if (!response.data) {
            reject(new Error('Verification failed, please login again.'));
          }
          const { data } = response;

          // Verify returned roles are a non-null array
          if (data.user.roles && data.user.roles.length > 0) {
            commit('SET_ROLES', data.user.roles);
          } else {
            reject(new Error('getInfo: roles must be a non-null array!'));
          }

          commit('SET_NAME', data.user.name);
          commit('SET_AVATAR', data.user.avatar);
          commit('SET_INTRODUCTION', data.user.introduction);
          resolve(response);
        }).catch(error => {
          reject(error);
        });
      });
    },

    // Third party verification login
    // LoginByThirdparty({ commit, state }, code) {
    //   return new Promise((resolve, reject) => {
    //     commit('SET_CODE', code)
    //     loginByThirdparty(state.status, state.email, state.code).then(response => {
    //       commit('SET_TOKEN', response.data.token)
    //       setToken(response.data.token)
    //       resolve()
    //     }).catch(error => {
    //       reject(error)
    //     })
    //   })
    // },

    // Sign out
    // LogOut({ commit, state }) {
    //   return new Promise((resolve, reject) => {
    //     logout(state.token).then(() => {
    //       commit('SET_TOKEN', '');
    //       commit('SET_ROLES', []);
    //       removeToken();
    //       resolve();
    //     }).catch(error => {
    //       reject(error);
    //     });
    //   });
    // },

    // Front end
    LogOut({ commit }) {
      return new Promise(resolve => {
        commit('SET_TOKEN', '');
        // this.$storage.clear();
        removeToken();
        resolve();
      });
    },

    // Dynamically modify permissions
    ChangeRoles({ commit, dispatch }, role) {
      return new Promise(resolve => {
        commit('SET_TOKEN', role);
        setToken(role);
        getUserInfo(role).then(response => {
          const { data } = response;
          commit('SET_ROLES', data.roles);
          commit('SET_NAME', data.name);
          commit('SET_AVATAR', data.avatar);
          commit('SET_INTRODUCTION', data.introduction);
          // Redraw the side menu after dynamically modifying the permissions
          dispatch('GenerateRoutes', data);
          resolve();
        });
      });
    }
  }
};

export default user;