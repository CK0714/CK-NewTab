![CK-NewTab Logo](https://raw.githubusercontent.com/CK0714/CK-NewTab/main/icons/icon128.png)
# CK-NewTab
![CK-ChromeVersion](https://img.shields.io/badge/Chrome-Manifest_V3-blue?style=flat-square)
![CK-Permissions](https://img.shields.io/badge/权限-零权限-green?style=flat-square)
![CK-License](https://img.shields.io/github/license/CK0714/CK-NewTab?style=flat-square)

**极简 | 纯净 | 零权限 | 符合 Chrome Manifes V3 规范**

自定义新标签页的指定地址跳转，只此一项功能。

![CK-NewTab 插件封面](https://raw.githubusercontent.com/CK0714/CK-NewTab/refs/heads/main/public/banner1.png)

## 📖 项目简介
CK-NewTab 是一款轻量化、无广告、纯本地运行的 Chrome 浏览器扩展，核心作用是将浏览器默认新标签页自定义跳转到任意网址、内网服务器IP。
项目主打极简纯净，无多余功能、无额外权限申请、无数据上传，完美适配最新版 Chromium 内核浏览器，专为极简主义使用者设计。

## ⚡ 核心功能
- 自定义新标签页跳转目标，支持公网域名网址
- 一键切换 `http://` / `https://` 协议前缀
- 支持本地内网 IP 地址跳转
- 配置本地持久化存储，重启浏览器不会丢失
- 独立设置面板，操作简单，保存后即时生效

## ✨ 项目特色
1.  **极致纯净**：无广告、无弹窗、无后台联网、无用户数据统计
2.  **零权限安全**：不申请任何网页权限，不读取、不上传任何隐私信息
3.  **完全合规**：严格遵循 Chrome Manifest V3 官方规范，CSP 安全策略合规
4.  **代码精简**：源码简洁清晰，无冗余逻辑，易于阅读
5.  **全内核兼容**：适配 Chrome等Chromium 内核浏览器

## 📥 安装方法
### 本地手动加载（推荐）
1. 前往仓库右侧 **【发行版 Releases】** 板块
2. 下载最新版本 `CK-NewTab` 后缀为 `.zip` 的压缩包
3. 解压下载好的压缩包
4. 打开 Chrome 浏览器，进入扩展管理页面 `chrome://extensions/`
5. 开启页面右上角 **开发者模式**
6. 点击左上角 **加载已解压的扩展程序**，选择解压后的插件文件夹
7. 加载完成即可正常使用

## 📝 使用教程
1. 在浏览器右上角找到本扩展图标
2. 右键图标 → 选择【选项】，打开设置界面
3. 输入需要跳转的网址或内网IP地址
4. 点击保存设置，配置自动生效
5. 按下快捷键 `Ctrl+T` 新建标签页，将自动跳转至已配置地址

## 📂 项目文件结构
CK-NewTab/

├─ manifest.json       # 扩展基础配置文件

├─ newtab.html         # 新标签页页面

├─ newtab.js           # 自动跳转核心脚本

├─ options.html        # 扩展设置界面

├─ options.js          # 设置面板交互脚本

└─ icons/              # 扩展图标资源文件夹

## 🔧 技术规范
- 扩展标准：**Chrome Manifest V3**
- 安全策略：全部脚本外部引用，无内联脚本
- 数据存储：浏览器原生 `localStorage` 纯本地存储
- 兼容平台：所有 Chromium 内核桌面端浏览器

## ⚖️合法声明与使用规范
### 声明
CK-NewTab 是一款独立开发的浏览器扩展程序，**与 Google LLC 无任何关联、授权或合作关系**。
本项目不属于 Google 官方项目，不代表 Google 公司，也未获得 Google 的任何官方认可或支持。

### 使用须知
1.  **合法合规**：本项目仅用于个人合法的浏览器扩展自定义使用。
2.  **安全责任**：本扩展仅在本地浏览器环境运行，通过 `localStorage` 纯本地存储配置。
    开发者不对因使用本扩展导致的浏览器配置错乱、数据丢失或其他意外情况承担直接责任。
3.  **功能边界**：本扩展仅实现新标签页自定义跳转功能，全程本地运行，不收集、不上传任何用户隐私数据，不篡改浏览器核心功能。
4.  **用户自主责任**：用户需自行保证使用行为符合当地法律法规、浏览器服务协议，开发者不对用户违规使用行为承担责任。

### 免责声明
本人作为 CK-NewTab 的开发者，对于因使用或无法使用本扩展程序所产生的任何直接、间接、偶然性或后果性损失（包括但不限于软件故障、数据丢失或法律纠纷）**不承担任何责任**。
如您使用本扩展即表示您已理解并同意上述所有条款，并自愿承担相关使用风险。
若你认为本项目可能侵犯相关方的合法权益，请与开发者取得联系。

## 🌟 支持这个项目
如果觉得这个项目对你有帮助，欢迎在 GitHub 仓库主页为它点亮一颗 **⭐️**。
你的支持是我持续维护和更新的动力，非常感谢。

## 📈 Star 增长历史
![Star History Chart](https://api.star-history.com/svg?repos=CK0714/CK-NewTab&type=Date)
