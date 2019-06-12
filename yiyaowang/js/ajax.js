 //将对象转换成用&拼接的字符串
 function objtostring(object) {
     var arr = [];
     for (var attr in object) {
         arr.push(attr + '=' + object[attr]);
     }
     return arr.join('&');
 }


 function ajax(obj) {
     var ajax = new XMLHttpRequest();

     //1.请求方式：默认get，否则是post
     obj.type = obj.type || 'get'; //如果传入obj.type的值，结果就是obj.type,否则就是get

     //2.接口地址必须存在。
     if (!obj.url) {
         throw new Error('请输入接口地址');
     }

     //3.是否异步:默认异步
     if (obj.async == false || obj.async == 'false') {
         obj.async = false;
     } else {
         obj.async = true;
     }

     //4.数据存在
     if (obj.data) {
         if (typeof obj.data == 'object' && !Array.isArray(obj.data)) {
             obj.data = objtostring(obj.data);
         } else if (typeof obj.data == 'string') {
             obj.data = obj.data;
         }
     }
     //5.判断是get拼接数据
     if (obj.data && obj.type == 'get') {
         obj.url += '?' + obj.data;
     }

     ajax.open(obj.type, obj.url, obj.async);

     //6.post请求发送数据
     if (obj.data && obj.type == 'post') {
         ajax.setRequestHeader('content-type', 'application/x-www-form-urlencoded');
         ajax.send(obj.data);
     } else { //get
         ajax.send();
     }

     //是否异步:如果异步监听，否则直接输出结果
     if (obj.async) { //异步
         ajax.onreadystatechange = function () {
             if (ajax.readyState == 4) {
                 if (ajax.status == 200) {
                     //ajax.responseText:请求的数据
                     obj.success && typeof obj.success === 'function' && obj.success(ajax.responseText);
                 } else {
                     obj.error && typeof obj.error === 'function' && obj.error('接口地址有误' + ajax.status);
                 }
             }
         }
     } else { //同步
         if (ajax.status == 200) {
             //ajax.responseText:请求的数据
             obj.success && typeof obj.success === 'function' && obj.success(ajax.responseText);
         } else {
             obj.error && typeof obj.error === 'function' && obj.error('接口地址有误' + ajax.status);
         }
     }

 }