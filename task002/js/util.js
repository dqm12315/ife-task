//判断键盘输入 利用event  的which或者keyCode来判断  event.which || event.keyCode

function isArray(arr) {
	console.log(arr instanceof Array);
	console.log(arr.constructor == Array);
}

function isFn(fn) {
	console.log(typeof(fn) == "function");
}
//深度克隆
function cloneObject(src) {
	var buf;
	if(src instanceof Array) {
		buf = [];
		var len = src.length;
		for(var i = 0; i < len; i++) {
			buf[i] = cloneObject(src[i]);
		}
		return buf;
	}else if(src instanceof Object) {
		buf = {};
		for(var j in src) {
			buf[j] = cloneObject(src[j]);
		}
		return buf;
	}else {
		return src;
	}
}
//数组去重
function uniqArray(arr) {
	var n = [];
	for(var i = 0; i < arr.length; i++){
		if(n.indexOf(arr[i]) == -1) n.push(arr[i]);
	}
	return n;
}

// 判断siblingNode和dom是否为同一个父元素下的同一级的元素，返回bool值
function isSiblingNode(element, siblingNode) {
    var parent = element.parentNode;
    return parent.childNodes.indexOf(siblingNode);
}

//倒计时功能，计算时间差(输入时间以-分隔）
function(src) {
	if (src.indexOf('-') == -1) return;
	var input = src.split("-");
	if (input.length !=3) return;
	var inputDate = new Date(input[0], input[1] - 1, input[2]);
	var now = new Date();
	var _inputDate = inputDate.getTime();
	var _now = now.getTime();
	var result = _inputDate - _now;
	if(result < 0) {
		result = "请输入当前日期之后的日期";
	}
	//计算出相差天数
    var days=Math.floor(date3/(24*3600*1000))
 

    //计算出小时数
    var leave1=date3%(24*3600*1000)    //计算天数后剩余的毫秒数 
    var hours=Math.floor(leave1/(3600*1000))
    //计算相差分钟数
    var leave2=leave1%(3600*1000)        //计算小时数后剩余的毫秒数
    var minutes=Math.floor(leave2/(60*1000))
    //计算相差秒数
    var leave3=leave2%(60*1000)      //计算分钟数后剩余的毫秒数
    var seconds=Math.round(leave3/1000)
    result = " 相差 "+days+"天 "+hours+"小时 "+minutes+" 分钟"+seconds+" 秒"
}