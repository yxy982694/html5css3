// self.addEventListener('install',function (event) {
// 	event.waitUntil(
// 		caches.open('v2').then(function (cache) {
// 			console.log('缓存2');
// 			return cache.addAll([
// 				'/',
// 				'/index.html',
// 				'/index0.html',
// 				'/js/cache.js'
// 			])
// 		}).then(function () {
// 			caches.open('v3').then(function (cache) {
// 				console.log('缓存3');
// 				return cache.addAll([
// 					'/js/jquery.min.js',
// 					'/fallback.html'
// 				])
// 			})
// 		}).then(function () {
// 			console.log('所有资源被成功缓存');
// 		}).catch(function (error) {
// 			console.log('预抓取失败：'+error);
// 		})
// 	);
// });
// // 首次加载http://localhost/js/cache.js时，会打印出缓存v2 缓存v3
// // 第二次加载http://localhost/js/cache.js时，才会执行激活事件 
// // 按ctrl+F5 强制刷新 强制从服务器获取资源
// self.addEventListener('activate',function (event) {
// 	let cacheWhiteList = ['v2','v3'];
// 	console.log('激活了v2,v3');
// 	event.waitUntil(
// 		caches.keys().then(function (cacheNames) {
// 			 // 包含之前的v1和现在的v2 v3缓存
// 			return Promise.all(cacheNames.map(function (cacheName) {
// 				if (cacheWhiteList.indexOf(cacheName) === -1) {
// 					console.log(cacheName+'缓存被删除');
// 					return caches.delete(cacheName);
// 				}
// 			}))
// 		})
// 	);
// });
self.addEventListener('install',function (event) {
	event.waitUntil(
		caches.open('v1').then(function (cache) {
			console.log('缓存');
			return cache.addAll([
				'/',
				'/index.html',
				'/index0.html',
				'/index3.html',
				'/js/cache.js',
				'/js/jquery.min.js',
				'/img/3.png',
				'/fallback.html',
				'/css/sw.css',
				'/html/index.html'
			])
		}).then(function () {
			console.log('所有资源被成功缓存');
		}).catch(function (error) {
			console.log('预抓取失败：'+error);
		})
	);
});
// serverWorker已经注册安装完成，在请求资源时，
// 会触发fetch事件，
// 不返回请求资源的内容，而是返回自定义的内容“测试响应”4个字
// 使用event.respondWith()方法来劫持内容
// new Response('测试响应')为响应的内容
// 资源无论在不在缓存中，都会触发fetch事件
// 但是在请求图片时，并没有触发fetch事件
// self.addEventListener('fetch',function (event) {
// 	console.log('请求了资源文件');
// 	console.log(event);
// 	// console.log(event.respondWith);
// 	// 当请求http://localhost/test.html，会跳转到fallback.html页面
// 	// fallback.html要先在缓存中
// 	if (event.request.url == 'http://localhost/test.html') {
// 		console.log('url');
// 		event.respondWith(caches.match('/fallback.html'));
// 	}
// 	// event.respondWith(new Response('测试响应'),{ // 增添响应头
// 	// 	headers: {'Content-Type': 'text/html'}
// 	// });
// 	// event.request请求的资源是否在缓存中
// 	// 若在，response作为缓存中请求资源的返回值
// 	// 若不在缓存中，response为undefined
// 	// 向服务器抓取资源
// 	// 并把该资源也加入到缓存中
// 	// 两种情况下会执行then
// 	// 1.资源在缓存中
// 	// 2.服务器连接着
// 	// 如果两种情况都不满足，则执行catch
// 	caches.match(event.request).then(function (response) {
// 		if (response) {
// 			console.log('使用的是缓存中的资源');
// 			return response
// 		} else {
// 			return fetch(event.request).then(function (response) {
// 				return caches.open('v1').then(function (cache) {
// 					console.log('使用的是服务器中的资源');
// 					cache.put(event.request,response.clone());
// 					return response;
// 				})
// 			})
// 		}
// 	}).catch(function () {
// 		console.log('bucunzai');
// 		// event.respondWith(caches.match('/fallback.html'));
// 		return caches.match('/fallback.html')
// 	})
// });