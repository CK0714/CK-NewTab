document.addEventListener('DOMContentLoaded', () => {
    const customUrl = localStorage.getItem('ck_newtab_url');
    const tipBox = document.getElementById('emptyTip');

    // 读取到有效网址 → 正常跳转
    if (customUrl?.trim()) {
        window.location.replace(customUrl);
    } 
    // 无配置时：页面居中显示提示文案 + 保留后台调试日志
    else {
        tipBox.textContent = 'CK-NewTab：暂未配置跳转地址，请前往插件选项完成设置';
        console.log('CK-NewTab: 暂未配置跳转地址，请前往插件选项完成设置');
    }
});