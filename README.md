<div align="center">
  
![CK-NewTab Logo](https://raw.githubusercontent.com/CK0714/CK-NewTab/refs/heads/main/public/logo.png)

# CK-NewTab
![CK-ChromeVersion](https://img.shields.io/badge/Chrome-Manifest_V3-blue?style=flat-square)
![CK-Permissions](https://img.shields.io/badge/权限-零权限-green?style=flat-square)
![CK-License](https://img.shields.io/github/license/CK0714/CK-NewTab?style=flat-square)
[![version](https://img.shields.io/github/v/tag/CK0714/CK-NewTab?label=version&style=flat&color=orange)](https://github.com/CK0714/CK-NewTab/releases)
[![HTML](https://img.shields.io/badge/HTML-57.5%25-E34F26?style=flat)](https://html.spec.whatwg.org/)
[![JavaScript](https://img.shields.io/badge/JavaScript-42.5%25-F7DF1E?style=flat)](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript)
[![downloads](https://img.shields.io/github/downloads/CK0714/CK-NewTab/total?style=flat&color=green)](https://github.com/CK0714/CK-NewTab/releases)

**极简 | 纯粹 | 零权限 | 单一功能**

将新标签页自定义为任意网址跳转

</div>

![CK-NewTab 插件封面](https://raw.githubusercontent.com/CK0714/CK-NewTab/refs/heads/main/public/banner.png)

## 📖 项目简介
CK-NewTab 是一款轻量、无广告、纯本地运行的 Chrome 扩展。它能够将浏览器默认的新标签页重定向到您指定的任意网址或内网 IP 地址。  
项目追求极简纯净：无冗余功能、无需任何权限、无数据上传，完美兼容最新 Chromium 内核浏览器，适合注重简洁高效的用户。

## ⚡ 核心功能
- 自定义新标签页跳转目标，支持公网域名及内网地址
- 一键切换 `http://` / `https://` 协议前缀
- 支持内网 IP 地址跳转
- 配置通过 `localStorage` 持久化存储，重启不丢失
- 独立设置面板，操作简单，保存即时生效

## ✨ 项目特色
1. **极致纯净**：无广告、无弹窗、无后台联网、无用户统计
2. **零权限安全**：不申请任何浏览器权限，不读取或上传任何隐私信息
3. **完全合规**：严格遵循 Chrome Manifest V3 规范，CSP 安全策略合规
4. **代码精简**：源码清晰易读，无冗余逻辑
5. **全内核兼容**：适配 Chrome 及其他 Chromium 内核浏览器

## 📥 安装方法
### 本地手动加载（推荐）
1. 前往仓库右侧 **【发行版 Releases】** 板块
2. 下载最新版本后缀为 `.zip` 的 `CK-NewTab` 压缩包
3. 解压至本地文件夹
4. 打开 Chrome 浏览器，进入扩展管理页面 `chrome://extensions/`
5. 开启右上角 **开发者模式**
6. 点击左上角 **加载已解压的扩展程序**，选择解压后的文件夹
7. 加载完成后即可正常使用

## 📝 使用教程
1. 在浏览器右上角找到本扩展图标
2. 右键图标 → 选择【选项】，打开设置界面
3. 输入需要跳转的网址或内网 IP 地址
4. 点击保存，配置自动生效
5. 按下快捷键 `Ctrl+T` 新建标签页，将自动跳转到已配置的地址

## 📂 项目文件结构

- CK-NewTab/ 下的文件：`manifest.json` | `newtab.html` | `newtab.js` | `options.html` | `options.js`
- CK-NewTab/ 下的图标文件夹：`icons/` 包含 `icon16.png`、`icon48.png`、`icon128.png`
  

## 🔧 技术规范
- 扩展标准：**Chrome Manifest V3**
- 安全策略：所有脚本外部引用，无内联脚本
- 数据存储：浏览器原生 `localStorage`，纯本地存储
- 兼容平台：所有 Chromium 内核桌面端浏览器

## ⚖️ 合法声明与免责条款
### 项目声明
CK-NewTab 为独立开发的浏览器扩展，**与 Google LLC 无任何关联、授权或合作关系**，非 Google 官方项目。

### 使用须知
1. 本扩展仅限**个人合法自用**，功能仅为新标签页自定义跳转。
2. 配置全程通过 `localStorage` 纯本地存储，无后台联网、无隐私收集、无数据上传。
3. 扩展不会篡改浏览器核心功能，所有配置仅保存于本地设备。

### 免责声明
开发者不对因使用本扩展导致的浏览器异常、数据丢失或任何直接/间接损失承担责任。  
用户使用本扩展即视为已阅读并同意本条款，自愿承担全部使用风险。  
若认为本项目可能侵犯相关方权益，请与开发者联系。

## 🌟 支持这个项目
如果觉得这个项目对你有帮助，请为它点亮一颗 **⭐️**，非常感谢。


[![Star History Chart](https://api.star-history.com/chart?repos=CK0714/CK-NewTab&type=date&legend=top-left)](https://www.star-history.com/?type=date&repos=CK0714%2FCK-NewTab)
