document.getElementById('loginForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const formData = {
        username: document.getElementById('username').value,
        password: document.getElementById('password').value
    };

    try {
        const response = await fetch(
            'https://script.google.com/macros/s/AKfycbw9Lu74oo49MUZl48p7ptkHb5l_ZODiGu_-JQWaDMJ_S-gbbb-ede0aOhM2RSvj8p-S/exec', 
            {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
                credentials: 'include'  // 处理跨域cookie
            }
        );

        const rawResponse = await response.text(); // 先获取原始响应
        console.log("原始响应:", rawResponse);
        
        try {
            const data = JSON.parse(rawResponse);
            console.log('JSON解析结果:', data);
        } catch (e) {
            console.error('响应不是有效JSON:', rawResponse);
        }
    } catch (error) {
        console.error('完整错误信息:', {
            name: error.name,
            message: error.message,
            stack: error.stack
        });
    }
});
