/*
 * @Author: TerryMin
 * @Date: 2021-12-11 15:28:27
 * @LastEditors: TerryMin
 * @LastEditTime: 2022-04-24 15:22:58
 * @Description: file not
 */
console.log('1');

setTimeout(function () {
  console.log(2);
  process.nextTick(function () {
    console.log(3);
  })
  new Promise(function (resolve) {
    console.log(4);
    resolve()

  }).then(function () {
    console.log(5);

  })
})
process.nextTick(function () {
  console.log(6);

})
new Promise(function (resolve) {
  console.log(7);
  resolve()
}).then(function () {
  console.log(8);

})