/**
 * 快捷访问
 */
const getters = {
  token: state => state.user.token,
  /**
   * @return true 用户存在
   */
  hasUserInfo: state => {
    return JSON.stringify(state.user.userInfo) !== '{}'
  },
  userInfo: state => state.user.userInfo
}
export default getters
