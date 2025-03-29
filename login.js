document.getElementById('loginForm').addEventListener('submit', async (event) => {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const hiddenValue = "景點1"; // ✅ 固定隱藏值

    const data = new URLSearchParams();
    data.append('username', username);
    data.append('password', password);
    data.append('hiddenValue', hiddenValue);

    try {
        const response = await fetch('https://script.google.com/macros/s/AKfycbw9Lu74oo49MUZl48p7ptkHb5l_ZODiGu_-JQWaDMJ_S-gbbb-ede0aOhM2RSvj8p-S/exec', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded' // ✅ 重要修正
            },
            body: data
        });

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        // ✅ 轉為 JSON 格式
        const result = await response.json();
        console.log('Result:', result);

        if (result.success) {
            alert('登入成功！');
            console.log(result);
            window.location.href = 'dashboard.html';
        } else {
            alert(result.message);
        }
    } catch (error) {
        console.error('Error:', error);
        alert('發生錯誤，請稍後再試！');
    }
});
