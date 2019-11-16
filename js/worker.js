console.log('worker外面');
onmessage = function (event) { // 
	console.log('worker里面');
	var num = event.data; // 获取从前台传过来的数值
	var result = 0;
	for (var i=1;i<=num;i++) {
		result += i;
	}
	postMessage(num); // 会触发前台的onmessage事件
}