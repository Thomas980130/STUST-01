document.getElementById('loginForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const formData = {
        username: document.getElementById('username').value,
        password: document.getElementById('password').value
    };

    try {
        const response = await fetch('https://script.google.com/macros/library/d/1n1FvKu8ZYkeHd2aaPbtxakUC0XjeYIWjVttl8511E_jaZWtaS4J4PgDp/4', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData) // 确保转换为 JSON 字符串
        });
        
        const data = await response.json();
        console.log('响应数据:', data);
    } catch (error) {
        console.error('完整错误:', {
            name: error.name,
            message: error.message,
            stack: error.stack
        });
    }
});
