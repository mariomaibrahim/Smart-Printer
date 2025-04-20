 
    function generateRandomNumber() {
        const number = Math.floor(Math.random() * 1000000); // رقم من 0 إلى 999999
        document.getElementById('randomNumber').textContent = number;
        }
        
        // توليد رقم عند فتح الصفحة مباشرة
        window.onload = generateRandomNumber;