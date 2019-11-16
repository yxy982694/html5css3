var val;
onconnect = function (e) {
	var port = e.ports[0];
	port.onmessage = function (e) { // 有前台的postMessage触发
		if (e.data == 'get') {
			port.postMessage(val);// 会触发前台的onmessage事件
			// 有哪个页面执行的，它会触发哪个前台页面
			// 它不会把所有页面都触发
		} else {
			val = e.data;
		}
	}
}