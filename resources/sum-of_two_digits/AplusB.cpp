#include<iostream>

using namespace std;

int SumOfDigits(int a, int b)
{
    return a + b;
}

int main()
{
    int a = 0;
    int b = 0;
    int sum = 0;
    cin >> a;
    cin >> b;
    sum = SumOfDigits(a, b);
    cout << sum;
    return 0;
}
