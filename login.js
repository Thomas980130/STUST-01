const corsProxyUrl = 'https://cors-anywhere.herokuapp.com/';
const targetUrl = 'https://script.google.com/macros/s/AKfycbw9Lu74oo49MUZl48p7ptkHb5l_ZODiGu_-JQWaDMJ_S-gbbb-ede0aOhM2RSvj8p-S/exec';

document.getElementById('loginForm').addEventListener('submit', async (event) => {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const hiddenValue = "景點1"; // 固定隱藏值

    const data = {
        username,
        password,
        hiddenValue
    };

    try {
        // 使用 CORS Anywhere 代理服務來繞過 CORS 問題
        const response = await fetch(`${corsProxyUrl}${targetUrl}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'X-Requested-With': 'XMLHttpRequest'
            },
            body: JSON.stringify(data)
        });

        const result = await response.json();
        if (result.success) {
            alert('登入成功！');
            console.log(result);
        } else {
            alert(result.message);
        }
    } catch (error) {
        console.error('Error:', error);
        alert('發生錯誤，請稍後再試！');
    }
});
