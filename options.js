document.addEventListener('DOMContentLoaded', () => {
    const input = document.getElementById('urlInput');
    const saveBtn = document.getElementById('saveBtn');
    const selector = document.getElementById('prefixSelector');

    // 初始化：自动回填已保存的网址与协议前缀
    const saved = localStorage.getItem('ck_newtab_url');
    if (saved) {
        if (saved.startsWith('http://')) {
            selector.textContent = 'http://';
            input.value = saved.slice(7);
        } else {
            selector.textContent = 'https://';
            input.value = saved.startsWith('https://') ? saved.slice(8) : saved;
        }
    }

    // 点击切换 http / https 协议前缀
    selector.addEventListener('click', () => {
        selector.textContent = selector.textContent === 'https://' ? 'http://' : 'https://';
        input.focus();
    });

    // 保存逻辑：输入校验+本地存储+成功反馈+自动关窗
    saveBtn.addEventListener('click', () => {
        const urlBody = input.value.trim();
        const prefix = selector.textContent;

        // 空内容拦截，弹出报错提示
        if (!urlBody) {
            alert('⚠️ 请输入跳转网址或本地IP地址');
            return;
        }

        // 拼接完整链接并永久本地存储
        const fullUrl = prefix + urlBody;
        localStorage.setItem('ck_newtab_url', fullUrl);

        // 保存成功提示，随后自动关闭设置窗口
        alert('✅ 设置保存成功！');
        window.close();
    });
});