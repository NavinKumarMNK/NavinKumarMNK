#include <bits/stdc++.h>
using namespace std;

class Solution
{
private:
    void branch(bitset<16> &bits, vector<int> &ans, int n)
    {
        if (n == 0)
        {
            ans.push_back(bits.to_ulong());
            return;
        }
        branch(bits, ans, n - 1);
        bits.flip(n - 1);
        branch(bits, ans, n - 1);
    }

public:
    vector<int> grayCode(int n)
    {
        bitset<16> bits;
        vector<int> ans;
        branch(bits, ans, n);
        return ans;
    }
};

int main()
{
    Solution sol;
    int n = 2;
    vector<int> ans = sol.grayCode(n);
    for (int i = 0; i < ans.size(); i++)
    {
        cout << ans[i] << " ";
    }
    cout << endl;
    return 0;
}