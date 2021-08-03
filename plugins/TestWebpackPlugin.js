class TestWebpackPlugin {
  constructor () {

  }

  apply (compiler) {
    let testObj

    compiler.hooks.thisCompilation.tap('TestWebpackPlugin', (compilation, { normalModuleFactory }) => {
      if (!compilation.__testObj__) {
        testObj = compilation.__testObj__ = {
          modulesMap: {}
        }
      }
    
      // 解决办法二 重写addModule方法
      // const rawAddModule = compilation.addModule
      // compilation.addModule = (...args) => {
      //   const addModuleResult = rawAddModule.apply(compilation, args)
      //   if (!addModuleResult.build && addModuleResult.issuer) {
      //     const buildInfo = addModuleResult.module.buildInfo
      //     if (buildInfo.modulesMap) {
      //       Object.assign(testObj.modulesMap, buildInfo.modulesMap)
      //     }
      //   }
      //   return addModuleResult
      // }
    })

    compiler.hooks.emit.tapAsync('TestWebpackPlugin', (compilation, callback) => {
      console.log(compilation.__testObj__)
      callback()
    })
  }
}

module.exports = TestWebpackPlugin