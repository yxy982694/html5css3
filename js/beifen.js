  // window.location.href='http://www.zhaojiao.net/zt/henan2018tgmsfsx?campus_id=123';
  function replaceValidationUI( form ) {
    // 阻止默认气泡
    form.addEventListener( "invalid", function( event ) {
    	event.preventDefault();
    }, true );
    form.addEventListener( "submit", function( event ) {
    	if ( !this.checkValidity() ) {
    		event.preventDefault();
    	}
    });
    var name=document.getElementById('name');
    var tel=document.getElementById('tel');
    var yanzma=document.getElementById('yanzma');
    var shengfen=document.getElementById('sheng');
    var dishi=document.getElementById('city');
    var quxian=document.getElementById('area');
    var xueduan=document.getElementById('xueduan');
    var xueke=document.getElementById('xueke');
    var btn=document.getElementById('btn');
    var tanchua=document.getElementById('tanchua');
    var imgf=document.getElementById('imgf');
    // var shengfenV=shengfen.innerHTML;

    // var dishiV='郑州';
    // var quxianV='金水区';
    var xueduanV;
    var xuekeV;
    var kuand=window.innerWidth;
    $('.logo-er').hover(function() {
      imgf.src='img/weixin.png';
      $('.erweima').css('display','block');
    }, function() {
      imgf.src='img/lvse.png';
      $('.erweima').css('display','none');
    });
    $('.head').hover(function() {
      $('.dong-tu').addClass('animated bounce');
    }, function() {
      $('.dong-tu').removeClass('animated bounce');
    });
    $('.middle-title').on('click',function(){
      window.location.href='http://www.zhaojiao.net/';
    });
    dishi.addEventListener('change',function(){
      dishiV=dishi.value;
    });
    quxian.addEventListener('change',function(){
     quxianV=quxian.value;
   });
    xueduan.addEventListener('change',function(){
     xueduanV=xueduan.value;
   });
    xueke.addEventListener('change',function(){
     xuekeV=xueke.value;
   });
    var time=120;
    var fenxiao;
    var ss=(new window["\x44\x61\x74\x65"]())['\x67\x65\x74\x54\x69\x6d\x65']();
    var pinjie=hex_md5(ss+'\x71\x61\x7a\x78\x73\x77\x65\x64\x63\x76\x66\x72\x74\x67\x62\x6e\x68\x79\x75\x6a\x6d\x6b\x69\x6c\x6f\x4f\x4b\x4d\x49\x4a\x4e\x55\x48\x42\x59\x47\x56\x54\x46\x43\x52\x44\x58\x45\x53\x5a\x57\x41\x51\x37\x34\x31\x32\x35\x38\x39\x36\x33\x30')['\x73\x75\x62\x73\x74\x72\x69\x6e\x67'](3,11);
     
     $.ajax({
      type:"get",
      url:"http://zjw.shanxiangjiaoyu.com/api/CampusData",
      data: {
        
      }
    })
    .done(function(data) {
      var obj = eval('(' +data + ')');
      var ss1='';
      var ss2='';
      var le;
      var html='';
      console.log(obj);
      if(obj.code==='200'){
        if(obj.data.length>=1){
          le=obj.data.length*5;
          $('#sheng').html(obj.data[0].campus.campus_name);
          fenxiao=obj.data[0].campus.campus_name;
          for(var i=0;i<obj.data.length;i++){
            ss1+='<li class="leng">'+
            '<span>'+obj.data[i].years+'</span>'+
            '<span>'+obj.data[i].city+'</span>'+
            '<span>'+obj.data[i].county+'</span>'+
            '<span>'+obj.data[i].grade+'</span>'+
            '<span>'+obj.data[i].discipline+'</span>'+
            '<span>'+obj.data[i].lowest+'</span>'+
            '</li>';
          }
          for(var j=0;j<400;j++){
            for(var i=0;i<obj.data.length;i++){
              ss2+='<li class="leng">'+
              '<span>'+obj.data[i].years+'</span>'+
              '<span>'+obj.data[i].city+'</span>'+
              '<span>'+obj.data[i].county+'</span>'+
              '<span>'+obj.data[i].grade+'</span>'+
              '<span>'+obj.data[i].discipline+'</span>'+
              '<span>'+obj.data[i].lowest+'</span>'+
              '</li>';
            }
            html=ss1+ss2;
            $('#list').html(html); 
            if($('.leng').length===400){
              return;
            }
          }
          
        }
      }else if(obj.code==='404'){
        window.location.href='file:///C:/Users/Administrator/Desktop/%E4%B8%8A%E7%BA%BF%E9%A1%B9%E7%9B%AE/%E5%BC%A0%E7%91%9E%E6%AC%A32018.8.6/404.html';
      }           
    })
    .fail(function(data) {
    });
    $('#btn').on('click',function(){
    	var xunhuan;
    	if(name.checkValidity()&&tel.checkValidity()){
    		document.getElementById('btn').setAttribute('disabled',true);
    		xunhuan=setInterval(function(){
    			time=time-1;
    			if(time>0){
    				var second=Math.floor(time%120);
    				document.getElementById('btn').innerHTML=second+'秒';
    			}else{
    				document.getElementById('btn').innerHTML='获取验证码';
    				document.getElementById('btn').disabled='';
    				clearInterval(xunhuan);
    			}
    		},1000);
    		$.ajax({
    			type:"get",
    			url:"http://zjw.shanxiangjiaoyu.com/api/v1/sms",
					// dataType: "JSON",
					data:{
						'mobile':tel.value,
						'time':ss,
						'string':pinjie
					},
					success:function(data){
            var obj = eval('(' +data + ')');
            console.log(data);
            if(obj.code==='2000'){
              localStorage.setItem('yzm',obj.phone_code);
             layer.open({
                type:0,
                title:['山香教育温馨提示：','font-size:16px;color:#ed6053;'],
                content:'发送成功',
                icon:6
              });
            }
            if(obj.code==='5001'){
             layer.open({
                type:0,
                title:['山香教育温馨提示：','font-size:16px;color:#ed6053;'],
                content:'不能重复发送',
                icon:6
              });
            }
          },
          error:function(data) {

          }
        });
    	}else{
        layer.open({
        type:0,
        title:['山香教育温馨提示：','font-size:16px;color:#ed6053;'],
        content:'请把姓名，手机号两项填写完整，才能发送验证码'+'\r\n'+'当字体是绿色为正确。',
        icon:6
      });
    	}   
    });
    var tanp=document.getElementById('tan-p');
    $('#name').on('input',function(){
     if(name.checkValidity()){
      name.style.color='green';
    }else{
      name.style.color='red';
    }
  });
    $('#tel').on('input',function(){
     if(tel.value!==''&&!tel.validity.patternMismatch){
      tel.style.color='green';
    }else{
      tel.style.color='red';
    }
  });
    $('#yanzma').on('input',function(){
     if(!yanzma.validity.valueMissing){
      yanzma.style.color='green';
    }else{
      yanzma.style.color='red';
    }
  });
    var submitButton = form.querySelector( "input[type=submit]" );
    $('#sub').on( "click", function( event ) {
     event.preventDefault();
     var invalidFields = form.querySelectorAll( ":invalid" );
     if(!name.checkValidity()){
      layer.open({
        type:0,
        title:['山香教育温馨提示：','font-size:16px;color:#ed6053;'],
        content:'请输入姓名',
        icon:6
      });
      return false;
    }
    if(tel.validity.valueMissing){
      layer.open({
        type:0,
        title:['山香教育温馨提示：','font-size:16px;color:#ed6053;'],
        content:'请输入手机号',
        icon:6
      });
      return false;
    }
    if(tel.validity.patternMismatch){
      layer.open({
        type:0,
        title:['山香教育温馨提示：','font-size:16px;color:#ed6053;'],
        content:'请输入正确的手机号',
        icon:6
      });
      return false;
    }
    if(!yanzma.checkValidity()){
      layer.open({
        type:0,
        title:['山香教育温馨提示：','font-size:16px;color:#ed6053;'],
        content:'请输入验证码',
        icon:6
      });
      return false;
    }
    // if(dishi.validity.valueMissing){
    //   layer.open({
    //     type:0,
    //     title:['山香教育温馨提示：','font-size:16px;color:#ed6053;'],
    //     content:'请输入地市名',
    //     icon:6
    //   });
    //   return false;
    // }
    // if(quxian.validity.valueMissing){
    //   layer.open({
    //     type:0,
    //     title:['山香教育温馨提示：','font-size:16px;color:#ed6053;'],
    //     content:'请输入区县名',
    //     icon:6
    //   });
    //   return false;
    // }
    if(xueduan.validity.valueMissing){
      layer.open({
        type:0,
        title:['山香教育温馨提示：','font-size:16px;color:#ed6053;'],
        content:'请输入学段名',
        icon:6
      });
      return false;
    }
    if(xueke.validity.valueMissing){
      layer.open({
        type:0,
        title:['山香教育温馨提示：','font-size:16px;color:#ed6053;'],
        content:'请输入学科',
        icon:6
      });
      return false;
    }
    if(yanzma.validity.valueMissing){
      layer.open({
        type:0,
        title:['山香教育温馨提示：','font-size:16px;color:#ed6053;'],
        content:'短信验证码错误',
        icon:6
      });
      yanzma.focus();
    }else{
      var kuan= window.innerWidth;
      $.ajax({
        type:"post",
        url:"http://zjw.shanxiangjiaoyu.com/api/v1/score",
        data: {
          'name':name.value,
          'mobile':tel.value,
          'time':ss,
          'string':pinjie,
          'fenxiao':fenxiao,
          'grade':xueduanV,
          'discipline':xuekeV
        },
      })
      .done(function(data) {
        document.getElementById('sub').disabled=true
        var obj = eval('(' +data + ')');
        if(obj.code==='404'){
          var kuan=window.innerWidth;
          var index;
          if(kuan>800){
            index=layer.open({
                    type:1,
                    // title:false,
                    title:['山香教育温馨提示：','font-size:16px;color:#ed6053;'],
                    closeBtn:1,
                    content:$('#title'),
                    area:['750px'],
                    btn:'确定',
                    btnAlign:'c',
                    yes:function(){
                      location.reload();
                    },
                    cancel:function(){
                      location.reload();
                    }
                  });
          }else if(kuan>450){
            index=layer.open({
                    type:1,
                    title:['山香教育温馨提示：','font-size:16px;color:#ed6053;'],
                    closeBtn:1,
                    content:$('#title'),
                    area:['440px'],
                    btn:'确定',
                    btnAlign:'c',
                    yes:function(){
                      location.reload();
                    },
                    cancel:function(){
                      location.reload();
                    }
                  });
          }else if(kuan>400){
            index=layer.open({
                    type:1,
                    // title:false
                    title:['山香教育温馨提示：','font-size:16px;color:#ed6053;'],
                    closeBtn:1,
                    content:$('#title'),
                    area:['400px'],
                    btn:'确定',
                    btnAlign:'c',
                    yes:function(){
                      location.reload();
                    },
                    cancel:function(){
                      location.reload();
                    }
                  });
          }else if(kuan>360){
            index=layer.open({
                    type:1,
                    // title:false
                    title:['山香教育温馨提示：','font-size:16px;color:#ed6053;'],
                    closeBtn:1,
                    content:$('#title'),
                    area:['360px'],
                    btn:'确定',
                    btnAlign:'c',
                    yes:function(){
                      location.reload();
                    },
                    cancel:function(){
                      location.reload();
                    }
                  });
          }else{
            index=layer.open({
                    type:1,
                    // title:false,
                    title:['山香教育温馨提示：','font-size:16px;color:#ed6053;'],
                    closeBtn:1,
                    content:$('#title'),
                    area:['310px'],
                    btn:'确定',
                    btnAlign:'c',
                    yes:function(){
                      location.reload();
                    },
                    cancel:function(){
                      location.reload();
                    }
                  });
          }
          if(kuan>800){
            $('.title-tg').click(function(){
                layer.close(index);
                location.reload();
              });
          }else{
            $('.title-tg').on('tap',function(){
                layer.close(index);
                location.reload();
              });
          }
          
        }
        if(obj.code==='200'){
          // $('#tan').animate({
          //   opacity:1
          // },500); 
          $('#tan').html('');
          var ss='';
          if(obj.data.length>=1){
           for(var i=0;i<obj.data.length;i++){
            ss+='<tr>'+
            '<td class="info-one">'+obj.data[i].years+'</td>'+
            '<td>'+obj.data[i].city+'</td>'+
            '<td>'+obj.data[i].county+'</td>'+
            '<td>'+obj.data[i].grade+'</td>'+
            '<td>'+obj.data[i].discipline+'</td>'+
            '<td class="info-qi">'+obj.data[i].lowest+'</td>'+
            '</tr>';
          }
        }
        var html='<table>'+
        '<thead>'+
        '<tr>'+
        '<td class="info-one">年份</td>'+
        '<td>地市</td>'+
        '<td>区县</td>'+
        '<td>学段</td>'+
        '<td>学科</td>'+
        '<td class="info-qi">进面最低分</td>'+
        '</tr>'+
        '</thead>'+
        '<tbody>'+ss+
        '</tbody>'+
        '</table>';
        var ss1='<p>更多咨询山香老师个人微信号：<span>shanxiang000</span></p>';
        var guanbi='<span id="close"></span>';
        $('#tan').html(html+ss1);
        layer.open({
            type:1,
            title:['山香教育温馨提示：','font-size:16px;color:#ed6053;'],
            closeBtn:1,
            content:$('#tan').html(),
            area:'758px',
            btn:'确定',
            btnAlign:'c',
            yes:function(){
              location.reload();
            },
            cancel:function(){
              location.reload();
            }
          });
      }
    })
      .fail(function(data) {

      });
      localStorage.removeItem('yzm');
    }
  });
  }
  var forms = document.querySelectorAll( "form" );
  for ( var i = 0; i < forms.length; i++ ) {
   replaceValidationUI( forms[ i ] );
 }