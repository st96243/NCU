document.addEventListener("DOMContentLoaded", function() {
    // 1. 判斷年份是否為閏年
    function isLeapYear(year) {
        return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
    }
    let year = 2024;
    let answer1 = isLeapYear(year);
    document.getElementById("q1").innerText += ` - 答案: ${year} ${answer1 ? "是閏年" : "不是閏年"}`;

    // 2. 根據月份判斷天數
    function getDaysInMonth(month, year) {
        switch (month) {
            case 1: case 3: case 5: case 7: case 8: case 10: case 12:
                return 31;
            case 4: case 6: case 9: case 11:
                return 30;
            case 2:
                return isLeapYear(year) ? 29 : 28;
            default:
                return "無效的月份";
        }
    }
    let month = 2;
    let answer2 = getDaysInMonth(month, year);
    document.getElementById("q2").innerText += ` - 答案: ${year} 年 ${month} 月有 ${answer2} 天`;

    // 3. 將字串反轉
    function reverseString(str) {
        return str.split('').reverse().join('');
    }
    let str = "hello";
    let answer3 = reverseString(str);
    document.getElementById("q3").innerText += ` - 答案: ${answer3}`;

    // 4. 使用 for 迴圈印出倒直角三角形
    let n = 5;
    let answer4 = "";
    for (let i = n; i > 0; i--) {
        answer4 += "*".repeat(i) + "\n";
    }
    console.log(answer4);
    document.getElementById("q4").innerText += ` - 答案:\n${answer4}`;

    // 5. 使用 while 迴圈判斷一個數是否為質數
    function isPrime(num) {
        if (num <= 1) return false;
        if (num <= 3) return true;
        if (num % 2 === 0 || num % 3 === 0) return false;
        let i = 5;
        while (i * i <= num) {
            if (num % i === 0 || num % (i + 2) === 0) return false;
            i += 6;
        }
        return true;
    }
    let num = 29;
    let answer5 = isPrime(num);
    document.getElementById("q5").innerText += ` - 答案: ${num} ${answer5 ? "是質數" : "不是質數"}`;

    // 6. 使用 while 迴圈印出倒直角三角形
    let answer6 = "";
    let j = n;
    while (j > 0) {
        answer6 += "*".repeat(j) + "\n";
        j--;
    }
    console.log(answer6);
    document.getElementById("q6").innerText += ` - 答案:\n${answer6}`;

    // 7. 使用 do...while 迴圈計算 n! 的值
    function factorial(n) {
        let result = 1;
        do {
            result *= n;
            n--;
        } while (n > 0);
        return result;
    }
    let num7 = 5;
    let answer7 = factorial(num7);
    document.getElementById("q7").innerText += ` - 答案: ${num7}! = ${answer7}`;

    // 8. 使用 for 迴圈找出陣列中的最大值
    let array = [1, 5, 2, 9, 7];
    let max = array[0];
    for (let i = 1; i < array.length; i++) {
        if (array[i] > max) {
            max = array[i];
        }
    }
    document.getElementById("q8").innerText += ` - 答案: 最大值是 ${max}`;

    // 9. 使用 for...of 迴圈計算陣列中所有偶數元素的總和
    let array2 = [1, 2, 3, 4, 5, 6, 7, 8];
    let sumEven = 0;
    for (let num of array2) {
        if (num % 2 === 0) {
            sumEven += num;
        }
    }
    document.getElementById("q9").innerText += ` - 答案: 偶數元素的總和是 ${sumEven}`;

    // 10. 使用 for...in 迴圈計算物件屬性值的總和
    let obj = {a: 1, b: 2, c: 3, d: 4, e: 5};
    let sumValues = 0;
    for (let key in obj) {
        sumValues += obj[key];
    }
    document.getElementById("q10").innerText += ` - 答案: 屬性值的總和是 ${sumValues}`;
});
