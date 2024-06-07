document.addEventListener("DOMContentLoaded", function() {
    // 1. 計算一個日期距離現在的天數
    function daysBetweenDates(date1, date2) {
        const oneDay = 24 * 60 * 60 * 1000;
        const diffDays = Math.round(Math.abs((date2 - date1) / oneDay));
        return diffDays;
    }
    let date1 = new Date('2023-01-01');
    let date2 = new Date();
    let answer1 = daysBetweenDates(date1, date2);
    document.getElementById("q1").innerText += ` - 答案: ${answer1} 天`;

    // 2. 將一個字串反轉
    function reverseString(str) {
        return str.split('').reverse().join('');
    }
    let str2 = "hello";
    let answer2 = reverseString(str2);
    document.getElementById("q2").innerText += ` - 答案: ${answer2}`;

    // 3. 判斷一個字串是否為迴文
    function isPalindrome(str) {
        let left = 0;
        let right = str.length - 1;
        while (left < right) {
            if (str[left] !== str[right]) {
                return false;
            }
            left++;
            right--;
        }
        return true;
    }
    let str3 = "racecar";
    let answer3 = isPalindrome(str3);
    document.getElementById("q3").innerText += ` - 答案: ${str3} ${answer3 ? "是迴文" : "不是迴文"}`;

    // 4. 生成一個指定長度的隨機字串
    function generateRandomString(length) {
        let chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let result = '';
        for (let i = 0; i < length; i++) {
            result += chars.charAt(Math.floor(Math.random() * chars.length));
        }
        return result;
    }
    let length4 = 10;
    let answer4 = generateRandomString(length4);
    document.getElementById("q4").innerText += ` - 答案: ${answer4}`;

    // 5. 判斷一個數字是否為完美數
    function isPerfectNumber(num) {
        let sum = 0;
        for (let i = 1; i < num; i++) {
            if (num % i === 0) {
                sum += i;
            }
        }
        return sum === num;
    }
    let num5 = 28;
    let answer5 = isPerfectNumber(num5);
    document.getElementById("q5").innerText += ` - 答案: ${num5} ${answer5 ? "是完美數" : "不是完美數"}`;

    // 6. 氣泡排序法
    function bubbleSort(arr) {
        let len = arr.length;
        for (let i = 0; i < len; i++) {
            for (let j = 0; j < len - 1 - i; j++) {
                if (arr[j] > arr[j + 1]) {
                    let temp = arr[j];
                    arr[j] = arr[j + 1];
                    arr[j + 1] = temp;
                }
            }
        }
        return arr;
    }
    let array6 = [5, 2, 9, 1, 5, 6];
    let answer6 = bubbleSort(array6);
    document.getElementById("q6").innerText += ` - 答案: ${answer6}`;
});
