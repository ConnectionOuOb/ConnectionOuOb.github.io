<?php
$content = isset($_GET['content']) ? htmlspecialchars($_GET['content']) : '';
?>

<!DOCTYPE html>
<html lang="zh-TW">
<head>
    <meta charset="UTF-8">
    <title>Content Tester</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            margin: 0;
            background-color: #f0f0f0;
        }
        .content-box {
            background-color: white;
            border: 2px solid #333;
            padding: 30px;
            border-radius: 10px;
            box-shadow: 0 4px 6px rgba(0,0,0,0.1);
            text-align: center;
            min-width: 300px;
        }
    </style>
</head>
<body>
    <div class="content-box">
        <?php if (!empty($content)): ?>
            <h1>您輸入的內容</h1>
            <p style="font-size: 24px; color: #333;"><?php echo $content; ?></p>
        <?php else: ?>
            <h1>請在 URL 中提供 content 參數</h1>
            <p>範例：/ContentTest?content=test123</p>
        <?php endif; ?>
    </div>
</body>
</html>