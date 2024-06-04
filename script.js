document.getElementById('saveImage').addEventListener('click', function() {
    const referenceNumber = document.getElementById('referenceNumber').value || "AMPim191";
    const recipientName = document.getElementById('recipientName').value || "สนชมา กสนกา";
    const accountNumber = document.getElementById('accountNumber').value || "5502675802";
    const amount = document.getElementById('amount').value || "408,309.20 บาท";
    const transactionDate = document.getElementById('transactionDate').value || "30/05/2567 17:47:05";
    const notes = document.getElementById('notes').value;

    // สร้างหน้าใหม่และเปิด
    const outputWindow = window.open('', '', 'width=1650,height=900');
    outputWindow.document.write(`
        <html>
        <head>
            <link rel="stylesheet" href="styles-output.css">
        </head>
        <body>
            <div id="capture">
                <img src="https://github.com/useronlineid/documentnew2/blob/main/png.png?raw=true" alt="Image">
                <p style="position: absolute; top: 210px; left: 720px; color:#828282; font-size: 30px;">${referenceNumber}</p>
                <p style="position: absolute; top: 264px; left: 720px; color:#828282; font-size: 30px;">${recipientName}</p>
                <p style="position: absolute; top: 322px; left: 720px; color:#828282; font-size: 30px;">${accountNumber}</p>
                <p style="position: absolute; top: 376px; left: 720px; color:#828282; font-size: 30px;">${amount}</p>
                <p style="position: absolute; top: 430px; left: 720px; color:#828282; font-size: 30px;">${transactionDate}</p>
                <p style="position: absolute; top: 490px; left: 545px; color:red; white-space: pre-line; font-size: 27px;width: 42%;">${notes}</p>
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
