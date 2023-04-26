// 存储数据到localstorage
export const setItem = (key, value) => {
  // value两种情况
  // 1.基本
  // 2.复杂
  if (typeof value === 'object') {
    value = JSON.stringify(value)
  }
  window.localStorage.setItem(key, value)
}
// 获取数据
export const getItem = key => {
  const data = window.localStorage.getItem(key)
  try {
    return JSON.parse(data)
  } catch (err) {
    return data
  }
}
// 删除指定数据
export const removeItem = key => {
  window.localStorage.removeItem(key)
}
// 删除所有数据
export const removeAllItem = () => {
  window.localStorage.clear()
}
