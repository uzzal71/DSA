import random


def max_pairwise_product_naive(a):
    max_product = 0
    for i in range(len(a)):
        for j in range(i+1, len(a)):
            max_product = max(max_product, a[i] * a[j])
    return max_product


def max_pairwise_product_fast(a):
    index1 = -1
    for i in range(len(a)):
        if index1 == -1 or a[i] > a[index1]:
            index1 = i
    index2 = -1
    for j in range(len(a)):
        if j != index1 and (index2 == -1 or a[j] > a[index2]):
            index2 = j
    print(index1, index2)
    return a[index1] * a[index2]


def stress_test(N, M):
    while True:
        n = random.randint(2, N)
        print(n)
        a = [random.randint(0, M) for i in range(n)]
        print(a)
        res1 = max_pairwise_product_naive(a)
        res2 = max_pairwise_product_fast(a)
        if res1 == res2:
            print('OK')
        else:
            print('Wrong answer:', res1, res2)
            break


N = 100
M = 100000
stress_test(N, M)
