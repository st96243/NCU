document.addEventListener("DOMContentLoaded", function() {
    // 1. 計算 2 的 10 次方
    let answer1 = Math.pow(2, 10);
    document.getElementById("q1").innerText += ` - 答案: ${answer1}`;

    // 2. 計算 100 除以 7 的商和餘數
    let answer2_quotient = Math.floor(100 / 7);
    let answer2_remainder = 100 % 7;
    document.getElementById("q2").innerText += ` - 答案: 商: ${answer2_quotient}, 餘數: ${answer2_remainder}`;

    // 3. 計算 10 除以 3 的結果，保留 2 位小數
    let answer3 = (10 / 3).toFixed(2);
    document.getElementById("q3").innerText += ` - 答案: ${answer3}`;

    // 4. 將字串 "5" 轉換成數值型別，然後加上 10
    let answer4 = Number("5") + 10;
    document.getElementById("q4").innerText += ` - 答案: ${answer4}`;

    // 5. 計算圓形的面積，半徑為 7
    let radius = 7;
    let answer5 = Math.PI * Math.pow(radius, 2);
    document.getElementById("q5").innerText += ` - 答案: ${answer5.toFixed(2)}`;

    // 6. 將字串 "hello" 與字串 "world" 連接起來
    let answer6 = "hello" + "world";
    document.getElementById("q6").innerText += ` - 答案: ${answer6}`;

    // 7. 計算數字 123 的個位數字
    let answer7 = (123).toString().split('').reduce((acc, digit) => acc + Number(digit), 0);
    document.getElementById("q7").innerText += ` - 答案: ${answer7}`;

    // 8. 將數字 4 轉換成字串型別，然後連接上字串 "2"
    let answer8 = String(4) + "2";
    document.getElementById("q8").innerText += ` - 答案: ${answer8}`;

    // 9. 判斷數字 15 是否在 10 到 20 的範圍內
    let answer9 = (15 >= 10 && 15 <= 20);
    document.getElementById("q9").innerText += ` - 答案: ${answer9}`;

    // 10. 判斷字串 "hello" 是否既不是空字串也不是 undefined
    let answer10 = ("hello" !== "" && typeof "hello" !== "undefined");
    document.getElementById("q10").innerText += ` - 答案: ${answer10}`;

    // 11. 判斷數字 25 是否為偶數
    let answer11 = (25 % 2 === 0) ? "Even" : "Odd";
    document.getElementById("q11").innerText += ` - 答案: ${answer11}`;

    // 12. 比較數字 x 和數字 y 的大小，若 x 大於 y，就輸出 x，否則輸出 y
    let x = 10, y = 5;
    let answer12 = (x > y) ? x : y;
    document.getElementById("q12").innerText += ` - 答案: ${answer12}`;
});
