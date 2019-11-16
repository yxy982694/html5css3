var val;
onmessage = function (event) { // 
	if (event.data == 'get') {
		postMessage(val); // 会触发前台的onmessage事件
	} else {
		val = event.data;
	}
}