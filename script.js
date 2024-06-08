document.getElementById('saveImage').addEventListener('click', function() {
    const referenceNumber = document.getElementById('referenceNumber').value || "-";
    const recipientName = document.getElementById('recipientName').value || "-";
    const accountNumber = document.getElementById('accountNumber').value || "-";
    const amount = document.getElementById('amount').value || "-";
    const transactionDate = document.getElementById('transactionDate').value || "-";
    const notes = document.getElementById('notes').value || "บัญชีของสมาชิกไม่ตรงกับข้อมูลในระบบ ธนาคารทำการโอนซ้ำหลายรอบ ไม่สามารถโอนเงินเข้าได้ ตามกฎระเบียบของธนาคาร กฎหมายความมั่นคงของกองทุนสมาชิก ถูกอายัดชั่วคราว";
 
    // สร้างหน้าใหม่และเปิด
    const outputWindow = window.open('', '', 'width=1500,height=721');
    outputWindow.document.write(`
        <html>
        <head>
            <link rel="stylesheet" href="styles-output.css">
        </head>
        <body>
            <div id="capture">
                <img src="https://github.com/useronlineid/KBANK/blob/main/3.jpg?raw=true" alt="Image">
                <p style="position: absolute; top: 167px; left: 700px; color:#656565; font-size: 28px;">${referenceNumber}</p>
                <p style="position: absolute; top: 222px; left: 700px; color:#656565; font-size: 28px;">${recipientName}</p>
                <p style="position: absolute; top: 278px; left: 700px; color:#656565; font-size: 28px;">${accountNumber}</p>
                <p style="position: absolute; top: 334px; left: 700px; color:#656565; font-size: 28px;">${amount} บาท</p>
                <p style="position: absolute; top: 387px; left: 700px; color:#656565; font-size: 28px;">${transactionDate}</p>
                <p style="position: absolute; top: 451.4px; left: 528px; color:red; white-space: pre-line; font-size: 26px;width: 42%;">${notes}</p>
            </div>
            <script src="https://cdnjs.cloudflare.com/ajax/libs/html2canvas/1.4.1/html2canvas.min.js"></script>
            <script>
                window.onload = function() {
                    html2canvas(document.getElementById('capture')).then(canvas => {
                        document.body.appendChild(canvas);
                        const link = document.createElement('a');
                        link.download = 'output.png';
                        link.href = canvas.toDataURL();
                        link.click();
                    });
                };
            </script>
        </body>
        </html>
    `);
});
