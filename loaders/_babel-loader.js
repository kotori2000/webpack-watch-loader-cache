function _babelLoader (source) {
  // 解决办法一 去除loader缓存
  // this.cacheable(false)
  
  const testObj = this._compilation.__testObj__
  
  if (!testObj) {
    return source
  }
  
  const modulesMap = testObj.modulesMap
  if (!modulesMap[this.resourcePath]) {
    modulesMap[this.resourcePath] = this.resourcePath
  }
  // 解决办法二 buildInfo中保存解析过的文件
  // const buildInfo = this._module.buildInfo
  // buildInfo.modulesMap = buildInfo.modulesMap || {}
  // buildInfo.modulesMap[this.resourcePath] = testObj.modulesMap[this.resourcePath] = this.resourcePath
  
  return source
}

module.exports = _babelLoader