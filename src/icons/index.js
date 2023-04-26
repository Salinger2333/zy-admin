import SvgIcon from '@/components/SvgIcon'
// 导入所有svg
const svgRequire = require.context('./svg', false, /\.svg$/)
svgRequire.keys().forEach(svgIcon => svgRequire(svgIcon))
// 完成所有svgicon的全局注册
export default app => {
  app.component('svg-icon', SvgIcon)
}
