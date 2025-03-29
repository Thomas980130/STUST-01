document.getElementById('loginForm').addEventListener('submit', async (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append('username', document.getElementById('username').value);
    formData.append('password', document.getElementById('password').value);
    formData.append('hiddenValue', '景點1'); // 確保這個隱藏值正確注入

    try {
        const response = await fetch('https://script.google.com/macros/s/AKfycbw9Lu74oo49MUZl48p7ptkHb5l_ZODiGu_-JQWaDMJ_S-gbbb-ede0aOhM2RSvj8p-S/exec', {
            method: 'POST',
            body: formData
        });

        const result = await response.json();
        
        if (result.success) {
            alert(result.message); // 顯示登入成功訊息
            window.location.href = result.redirectUrl; // 根據後端返回的 URL 跳轉
        } else {
            alert(result.message); // 顯示錯誤訊息
        }
    } catch (error) {
        console.error('Error:', error);
        alert('發生錯誤，請稍後再試！');
    }
});
