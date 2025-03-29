document.getElementById('loginForm').addEventListener('submit', async (event) => {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const hiddenValue = "景點1"; // ✅ 固定隱藏值

    const data = `username=${encodeURIComponent(username)}&password=${encodeURIComponent(password)}&hiddenValue=${encodeURIComponent(hiddenValue)}`;

    try {
        const response = await fetch('https://api.allorigins.win/raw?url=' + encodeURIComponent('https://script.google.com/macros/s/AKfycbw9Lu74oo49MUZl48p7ptkHb5l_ZODiGu_-JQWaDMJ_S-gbbb-ede0aOhM2RSvj8p-S/exec'), {
            method: 'POST',
            headers: {
                'Content-Type': 'text/plain'
            },
            body: data
        });

        // ✅ 強制將回應處理成純文字再解析 JSON
        const text = await response.text();
        console.log('Raw Response:', text);

        try {
            const result = JSON.parse(text);
            if (result.success) {
                alert('登入成功！');
                console.log(result);
                window.location.href = 'dashboard.html';
            } else {
                alert(result.message);
            }
        } catch (jsonError) {
            console.error('JSON Parse Error:', jsonError);
            alert('回應內容無效，請稍後再試！');
        }
    } catch (error) {
        console.error('Error:', error);
        alert('發生錯誤，請稍後再試！');
    }
});
