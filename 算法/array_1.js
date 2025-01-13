'use strict';
x = 10;
// 合并2个有序数组
let foo = function (arr1 = [], n1, arr2 = [], n2) {
    let i = n1 - 1, j = n2 - 1, h = n1 + n2 - 1;
    while (i >= 0 && j >= 0) {
        if (arr1[i] > arr2[j]) {
            arr1[h] = arr1[i];
            i--;
            h--;
        } else {
            arr1[h] = arr2[j];
            j--;
            h--;
        }
    }
    while (j > 0) {
        arr1[h] = arr2[j];
        j--;
        h--;
    }
    return arr1;
}
// 三数求和
let foo2 = function (arr = [-1, 0, 1, 2, -1, -4]) {
    let res = [];
    let nums = arr.sort((a, b) => a - b);
    let lens = nums.length;
    for (let i = 0; i < lens - 2; i++) {
        let j = i + 1;
        let k = lens - 1;
        if (i > 0 && nums[i] === nums[i - 1]) {
            continue;
        }
        while (j < k) {
            if(nums[i] + nums[j] + nums[k] < 0) {
                j++;
                while(j<k&&nums[j] === nums[j-1]) {
                    j++;
                }
            }else if(nums[i] + nums[j] + nums[k] >0) {
                k--;
                while(j<k&&nums[k] === num){}
            }
        }
    }

}