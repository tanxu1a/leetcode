/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
// 方法一   递归方式 容易超时
var getPermutation = function(n, k) {
    let result = []
    let nums = []
    for(let i = 1; i <= n; i++) {
        nums.push(i)
    }
    fun('', nums, n, result, k)
    return result[k - 1]
};

function fun (resItem, array,len, result, k) {
    for (let i = 0; i < array.length; i++) {
        resItem += array[i]
        if (resItem.length === len) {
            result.push(resItem)
            if (result.length === k) return
        } else {
            let copy = array.slice()
            copy.splice(i,1)
            fun(resItem, copy, len, result, k)
        }
        resItem = resItem.substring(0, resItem.length - 1)
    }
}

console.log(getPermutation(3, 3))


