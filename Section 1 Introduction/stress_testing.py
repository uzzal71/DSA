import random

def maximum_pairwise_product_naive(numbers):
    max_product = 0
    for i in range(len(numbers)):
        for j in range(i + 1, len(numbers)):
            max_product = max(max_product, numbers[i] * numbers[j])
    return max_product

def maximum_pairwise_product_fast(numbers):
    max1 = max2 = 0
    for num in numbers:
        if num > max1:
            max2 = max1
            max1 = num
        elif num > max2:
            max2 = num
    return max1 * max2

# Stress Test
MAX_TESTS = 1000
test_num = 0
while test_num < MAX_TESTS:
    test_num += 1
    n = random.randint(2, 5)
    numbers = [random.randint(0, 9) for _ in range(n)]

    result_naive = maximum_pairwise_product_naive(numbers)
    result_fast = maximum_pairwise_product_fast(numbers)

    if result_naive != result_fast:
        print(f"❌ Test #{test_num} Failed!")
        print("Input:", numbers)
        print("Naive result:", result_naive)
        print("Fast result:", result_fast)
        break
    else:
        print(f"✅ Test #{test_num} Passed.")

if test_num == MAX_TESTS:
    print(f"\n🎉 All {MAX_TESTS} tests passed!")
