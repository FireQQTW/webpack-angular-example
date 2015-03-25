// ngReqShim
// 
// 要將angular宣告成全域都可使用
module.exports = function() {
  global.ngReqShim = function () { return window.angular };  
}
