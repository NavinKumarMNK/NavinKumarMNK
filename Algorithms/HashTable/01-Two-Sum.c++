#include <bits/stdc++.h>
using namespace std;

class Solution
{
public:
    // O(n^2) traditional
    vector<int> twoSum_n2(vector<int> &nums, int target)
    {
        vector<int> result;
        for (auto iter1 = nums.begin(); iter1 != nums.end(); ++iter1)
        {
            // auto it2 = find(iter1+1, nums.end(), target - *iter1);
            for (auto iter2 = next(iter1, 1); iter2 != nums.end(); ++iter2)
            {
                if (*iter1 + *iter2 == target)
                {
                    result.push_back(iter1 - nums.begin());
                    result.push_back(iter2 - nums.begin());
                    break;
                }
            }
        }
        return result;
    }
    // hashmaps => O(n)
    vector<int> twoSum(vector<int> &nums, int target)
    {
        unordered_map<int, int> map;
        for (auto iter1 = nums.begin(); iter1 != nums.end(); ++iter1)
        {
            int need = target - *iter1;
            auto iter2 = map.find(need);

            if (iter2 != map.end())
            {
                //(&(*myIterator) - &(myVector[0])) / sizeof(myVector[0])
                cout << iter2->first << (&(*iter1) - &(nums[0]));
                return {iter2->second, (int)(&(*iter1) - &(nums[0]))};
            }
            map[*iter1] = (int)(&(*iter1) - &(nums[0]));
        }
        return {};
    }
};

int main()
{
    Solution s;
    vector<int> nums = {2, 7, 11, 15};
    int target = 9;
    vector<int> result = s.twoSum(nums, target);
    for (auto iter = result.begin(); iter != result.end(); ++iter)
    {
        cout << *iter << " ";
    }
    return 0;
}