## 23_常用前端组件库（antd）
```aidl
按需引入css样式（参照：https://3x.ant.design/docs/react/use-with-create-react-app-cn）
1.安装插件：
    yarn add react-app-rewired customize-cra
    customize-cra 用于改写webpack打包配置，react-app-rewired 重写启动命令

2.重写启动相关命令 (-为删除，+为新增)
    vi package.json
    /* package.json */
    "scripts": {
    -   "start": "react-scripts start",
    +   "start": "react-app-rewired start",
    -   "build": "react-scripts build",
    +   "build": "react-app-rewired build",
    -   "test": "react-scripts test",
    +   "test": "react-app-rewired test",
    }

3.安装按需引入插件
    yarn add babel-plugin-import

4.创建新增改写配置 config-overrides.js
+ const { override, fixBabelImports } = require('customize-cra');

+ module.exports = override(
+   fixBabelImports('import', {
+     libraryName: 'antd',
+     libraryDirectory: 'es',
+     style: 'css',
+   }),
+ );

5.删除之前代码里面全量引入代码，只需要引入组件，样式会自行解决
    // import 'antd/dist/antd.css'
```