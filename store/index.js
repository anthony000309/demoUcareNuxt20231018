import { apiPostLoginRequest } from "../api";

export const state = () => ({
  getPageUrl: "",

  //產品存分類
  ProCatID: "",

  //最新消息分類
  NewsCat: "All",
  showNav: false,
});

export const actions = {
  async handAuth({ commit }, payload) {
    const { login, password, validcode } = payload;
    try {
      const res = await apiPostLoginRequest({ login, password, validcode });
      commit("LoginAuth", res);
    } catch (error) {
      // console.log(error);
    }
  },

  ChangeNav(context, status) {
    context.commit("CHANGENAV", status);
  },

  UpdateCatID(context, status) {
    context.commit("SAVECATID", status);
  },

  UpdateNewsCat(context, status) {
    context.commit("SAVENEWSCAT", status);
  },

  GetPageUrl(context, status) {
    context.commit("GETPAGEURL", status);
  },
};

// mutations
export const mutations = {
  CHANGENAV(state, status) {
    state.showNav = status;
  },

  GETPAGEURL(state, status) {
    state.getPageUrl = status;
  },

  SAVECATID(state, status) {
    state.ProCatID = status;
  },

  SAVENEWSCAT(state, status) {
    state.NewsCat = status;
  },
}; // getters
export const getters = {
  getPageUrl: (state) => state.getPageUrl,
};
