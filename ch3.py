# 1. 計算 2 的 10 次方
print("1. 計算 2 的 10 次方")
answer1 = 2 ** 10
print(answer1)

# 2. 計算 100 除以 7 的商和餘數
print("2. 計算 100 除以 7 的商和餘數")
answer2_quotient = 100 // 7
answer2_remainder = 100 % 7
print("商:", answer2_quotient, "餘數:", answer2_remainder)

# 3. 計算 10 除以 3 的結果，保留 2 位小數
print("3. 計算 10 除以 3 的結果，保留 2 位小數")
answer3 = round(10 / 3, 2)
print(answer3)

# 4. 將字串 "5" 轉換成數值型別，然後加上 10
print("4. 將字串 '5' 轉換成數值型別，然後加上 10")
answer4 = int("5") + 10
print(answer4)

# 5. 計算圓形的面積，半徑為 7
print("5. 計算圓形的面積，半徑為 7")
import math
radius = 7
answer5 = math.pi * radius ** 2
print(answer5)

# 6. 將字串 "hello" 與字串 "world" 連接起來
print("6. 將字串 'hello' 與字串 'world' 連接起來")
answer6 = "hello" + "world"
print(answer6)

# 7. 計算數字 123 的個位數字
print("7. 計算數字 123 的個位數字")
answer7 = sum(int(digit) for digit in str(123))
print(answer7)

# 8. 將數字 4 轉換成字串型別，然後連接上字串 "2"
print("8. 將數字 4 轉換成字串型別，然後連接上字串 '2'")
answer8 = str(4) + "2"
print(answer8)

# 9. 判斷數字 15 是否在 10 到 20 的範圍內
print("9. 判斷數字 15 是否在 10 到 20 的範圍內")
answer9 = 10 <= 15 <= 20
print(answer9)

# 10. 判斷字串 "hello" 是否既不是空字串也不是 undefined
print("10. 判斷字串 'hello' 是否既不是空字串也不是 undefined")
answer10 = bool("hello")
print(answer10)

# 11. 判斷數字 25 是否為偶數
print("11. 判斷數字 25 是否為偶數")
answer11 = "Even" if 25 % 2 == 0 else "Odd"
print(answer11)

# 12. 比較數字 x 和數字 y 的大小，若 x 大於 y，就輸出 x，否則輸出 y
print("12. 比較數字 x 和數字 y 的大小，若 x 大於 y，就輸出 x，否則輸出 y")
x, y = 10, 5
answer12 = x if x > y else y
print(answer12)
