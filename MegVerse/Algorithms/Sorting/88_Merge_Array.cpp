#include <bits/stdc++.h>
using namespace std;
class Solution
{
public:
    vector<int> &merge(vector<int> &nums1, int m, vector<int> &nums2, int n)
    {
        if (m == 0)
        {
            for (int i = 0; i < n; i++)
            {
                nums1[i] = nums2[i];
            }
            return nums1;
        }
        else if (n == 0)
        {
            return nums1;
        }
        else if (m != 0 & n != 0)
        {
            int c = m + n - 1;
            int b = n - 1;
            int a = m - 1;
            int flag = 0;
            for (; c >= 0; c--)
            {
                if (a < 0)
                {
                    nums1[c] = nums2[b];
                    b--;
                }
                else if (b < 0)
                {
                    nums1[c] = nums1[a];
                    a--;
                }
                else
                {
                    if (nums1[a] >= nums2[b])
                    {
                        nums1[c] = nums1[a];
                        a--;
                    }
                    else if (nums1[a] < nums2[b])
                    {
                        nums1[c] = nums2[b];
                        b--;
                    }
                }
            }
            return nums1;
        }
        return nums1;
    }
};

int main()
{
    Solution a = Solution();
    vector<int> nums1 = {0, 0};
    vector<int> nums2 = {1, 2};
    int m = 0;
    int n = 2;
    vector<int> ans = a.merge(nums1, m, nums2, n);
    for (int i = 0; i < ans.size(); i++)
    {
        cout << ans[i] << " ";
    }
    return 0;
}