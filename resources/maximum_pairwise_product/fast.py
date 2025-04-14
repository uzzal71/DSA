def max_pairwise_product_fast(a):
    index1 = -1
    for i in range(len(a)):
        if index1 == -1 or a[i] > a[index1]:
            index1 = i
    index2 = -1
    for j in range(len(a)):
        if a[j] != a[index1] and (index2 == -1 or a[j] > a[index2]):
            index2 = j
    return a[index1] * a[index2]


n = int(input())
x = input().split()
a = []
for i in range(len(x)):
    a.append(int(x[i]))
print(max_pairwise_product_fast(a))
