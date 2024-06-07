document.addEventListener("DOMContentLoaded", function() {
    // 1. 計算任意數量數字的平均值
    function average(...nums) {
        let sum = 0;
        for (let num of nums) {
            sum += num;
        }
        return sum / nums.length;
    }
    let nums1 = [1, 2, 3, 4, 5];
    let answer1 = average(...nums1);
    document.getElementById("q1").innerText += ` - 答案: ${answer1}`;

    // 2. 檢查一個數字是否為質數
    function isPrime(num) {
        if (num <= 1) return false;
        if (num <= 3) return true;
        if (num % 2 === 0 || num % 3 === 0) return false;
        for (let i = 5; i * i <= num; i += 6) {
            if (num % i === 0 || num % (i + 2) === 0) return false;
        }
        return true;
    }
    let num2 = 29;
    let answer2 = isPrime(num2);
    document.getElementById("q2").innerText += ` - 答案: ${num2} ${answer2 ? "是質數" : "不是質數"}`;

    // 3. 將一個數字轉換為其二進位表示法的字串
    function toBinaryString(num) {
        return num.toString(2);
    }
    let num3 = 10;
    let answer3 = toBinaryString(num3);
    document.getElementById("q3").innerText += ` - 答案: ${num3} 的二進位表示法是 ${answer3}`;

    // 4. 找出陣列中的最小值和最大值
    function findMinMax(array) {
        let min = array[0], max = array[0];
        for (let i = 1; i < array.length; i++) {
            if (array[i] < min) {
                min = array[i];
            }
            if (array[i] > max) {
                max = array[i];
            }
        }
        return {min: min, max: max};
    }
    let array4 = [1, 5, 2, 9, 7];
    let answer4 = findMinMax(array4);
    document.getElementById("q4").innerText += ` - 答案: 最小值是 ${answer4.min}, 最大值是 ${answer4.max}`;

    // 5. 計算費氏數列的第 n 項
    function fibonacci(n) {
        if (n === 1 || n === 2) return 1;
        return fibonacci(n - 1) + fibonacci(n - 2);
    }
    let n5 = 7;
    let answer5 = fibonacci(n5);
    document.getElementById("q5").innerText += ` - 答案: 費氏數列的第 ${n5} 項是 ${answer5}`;

    // 6. 計算兩個正整數的最大公因數 (GCD)
    function GCD(m, n) {
        if (n === 0) return m;
        return GCD(n, m % n);
    }
    let m6 = 56, n6 = 98;
    let answer6 = GCD(m6, n6);
    document.getElementById("q6").innerText += ` - 答案: ${m6} 和 ${n6} 的最大公因數是 ${answer6}`;
});
