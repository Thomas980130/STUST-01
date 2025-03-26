const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 3000;

// 用來解析 JSON 資料
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// 假設資料庫中的用戶帳號和密碼
const users = [
    { username: 'student', password: 'password123' }
];

// 處理登入請求
app.post('/login', (req, res) => {
    const { username, password } = req.body;

    // 查詢帳號和密碼是否正確
    const user = users.find(u => u.username === username && u.password === password);

    if (user) {
        // 登入成功，回傳成功訊息
        res.json({ success: true, message: '登入成功' });
    } else {
        // 登入失敗，回傳錯誤訊息
        res.json({ success: false, message: '用戶名或密碼錯誤' });
    }
});

// 啟動伺服器
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
