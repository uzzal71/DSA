def max_pairwise_product_naive(a):
    max_product = 0
    for i in range(len(a)):
        for j in range(i+1, len(a)):
            max_product = max(max_product, a[i] * a[j])
    return max_product


n = int(input())
x = input().split()
a = []
for i in range(len(x)):
    a.append(int(x[i]))
print(max_pairwise_product_naive(a))
