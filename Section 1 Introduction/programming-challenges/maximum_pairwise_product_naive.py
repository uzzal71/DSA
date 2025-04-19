def maximum_pairwise_product(numbers):
    max_product = 0
    for i in range(len(numbers)):
        for j in range(i + 1, len(numbers)):
            max_product = max(max_product, numbers[i] * numbers[j])

    return max_product


n = int(input())
x = input().split()
a = []
for i in range(len(x)):
    a.append(int(x[i]))

print(maximum_pairwise_product(a))

"""
def maximum_pairwise_product(numbers):
    max_product = 0
    for i in range(len(numbers)):
        for j in range(i + 1, len(numbers)):
            max_product = max(max_product, numbers[i] * numbers[j])
    return max_product

n = int(input("Enter number of elements: "))
x = list(map(int, input("Enter the numbers separated by space: ").split()))

if len(x) != n:
    print("Error: Number of elements doesn't match.")
else:
    print("Maximum pairwise product is:", maximum_pairwise_product(x))
"""