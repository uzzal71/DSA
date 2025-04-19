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
def stress_test(N, M, MAX_TESTS=1000):
    test_num = 0

    try:
        while test_num < MAX_TESTS:
            test_num += 1
            n = random.randint(2, N)
            numbers = [random.randint(0, M) for _ in range(n)]

            result_naive = maximum_pairwise_product_naive(numbers)
            result_fast = maximum_pairwise_product_fast(numbers)

            if result_naive != result_fast:
                print(f"\n❌ Test #{test_num} Failed!")
                print("Input:", numbers)
                print("Naive result:", result_naive)
                print("Fast result:", result_fast)
                return  # Exit the function
            else:
                print(f"✅ Test #{test_num} Passed.")
        
        print(f"\n🎉 All {MAX_TESTS} tests passed successfully!")

    except KeyboardInterrupt:
        print(f"\n🛑 Stress test interrupted at test #{test_num}")

# You can modify N and M as needed
N = 5  # Max number of elements
M = 9  # Max value of each element
stress_test(N, M)
