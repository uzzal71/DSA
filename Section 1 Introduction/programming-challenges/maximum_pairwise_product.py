def maximum_pairwise_product(numbers):
    max1 = max2 = 0

    for num in numbers:
        if num > max1:
            max2 = max1
            max1 = num
        elif num > max2:
            max2 = num

    return max1 * max2


n = int(input("Enter number of elements: "))
x = list(map(int, input("Enter the numbers separated by space: ").split()))

if len(x) != n:
    print("Error: Number of elements doesn't match.")
else:
    print("Maximum pairwise product is:", maximum_pairwise_product(x))
