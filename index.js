//  target = 8
let nums = [5, 8, 8, 8, 8, 10];

var search = function (nums, target) {
  let left = 0,
    right = nums.length - 1,
    start = -1,
    end = -1;

  // 找到左边界
  while (left < right) {
    let mid = Math.floor((left + right) / 2);
    if (nums[mid] == target) {
      start = mid;
      right = mid - 1;
    } else if (nums[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  // 找到右边界
  left = start;
  right = nums.length - 1;
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (nums[mid] == target) {
      end = mid;
      left = mid + 1;
    } else if (nums[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
}