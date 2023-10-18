export default ({ app }, inject) => {
  inject('sessionStorage', {
    set(key = '', val = {}) {
      sessionStorage.setItem(key, JSON.stringify(val))
    },

    // 改善錯誤時會顯示null，調整如沒資料便回傳空物件
    get(key = '') {
      const obj = JSON.parse(sessionStorage.getItem(key))
      if (!obj) return {}
      return obj
    },
    remove(key = '') {
      sessionStorage.removeItem(key)
    },
    removeAll() {
      sessionStorage.clear()
    },
  })
}
