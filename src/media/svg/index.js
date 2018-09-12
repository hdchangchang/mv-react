// 引入项目中所有的svg图标
const requireAll = requireContext => requireContext.keys().map(requireContext) 
const req = require.context('./', false, /\.svg$/) 
requireAll(req)