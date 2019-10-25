  var sheng;
  var patt=/[0-9]+/ig;
  var dizhi=window.location.href;
  var dizhi='http://www.zhaojiao.net/zt/kaoqing/?project_id=20&county_id=13';
  var baohanpr;
  var baohanco;
  var time=120;
  var ss=(new window["\x44\x61\x74\x65"]())['\x67\x65\x74\x54\x69\x6d\x65']();
  var pinjie=hex_md5(ss+'\x71\x61\x7a\x78\x73\x77\x65\x64\x63\x76\x66\x72\x74\x67\x62\x6e\x68\x79\x75\x6a\x6d\x6b\x69\x6c\x6f\x4f\x4b\x4d\x49\x4a\x4e\x55\x48\x42\x59\x47\x56\x54\x46\x43\x52\x44\x58\x45\x53\x5a\x57\x41\x51\x37\x34\x31\x32\x35\x38\x39\x36\x33\x30')['\x73\x75\x62\x73\x74\x72\x69\x6e\x67'](3,11);
  if(dizhi.indexOf('project_id')>-1&&dizhi.indexOf('county_id')>-1){
    baohanpr=parseInt(dizhi.match(patt)[0]);
    baohanco=parseInt(dizhi.match(patt)[1]);
    console.log('baohanpr:'+baohanpr);
    console.log('baohanco:'+baohanco);
  }else{
    // window.location.href='/zt/kaoqing/404.html';
  }
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
    var shengfenV;
    var dishiV='';
    var quxianV='';
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
    $.ajax({
      type:"get",
      url:"http://zjw.shanxiangjiaoyu.com/api/county",
      data: {
        'project_id':baohanpr,
        'county_id':baohanco,
        'time':ss,
        'string':pinjie
      }
    })
    .done(function(data) {
      var obj = eval('(' +data + ')');
      var ss1='';
      var ss2='';
      var k=0;
      console.log(obj);
    if(obj.code==='200'){
      if(obj.data.length>=1){
        $('#sheng1').html(obj.data[0].project_name);
        sheng=obj.data[0].province;
        if(sheng==='河南'){
           dishiV='郑州';
           quxianV='金水区';
           new PCAS("province","city","area",sheng,'郑州','金水区');
        }
        else if(sheng==='山东'){
          dishiV='济南';
          quxianV='历下区';
          new PCAS("province","city","area",sheng,'济南','历下区');
        }
        else if(sheng==='黑龙江'){
          dishiV='哈尔滨';
          quxianV='道里区';
          new PCAS("province","city","area",sheng,'哈尔滨','道里区');
        }
        else if(sheng==='吉林'){
          dishiV='长春';
          quxianV='南关区';
          new PCAS("province","city","area",sheng,'长春','南关区');
        }
        else if(sheng==='辽宁'){
          dishiV='沈阳';
          quxianV='和平区';
          new PCAS("province","city","area",sheng,'沈阳','和平区');
        }
        else if(sheng==='河北'){
          dishiV='石家庄';
          quxianV='新华区';
          new PCAS("province","city","area",sheng,'石家庄','新华区');
        }
        else if(sheng==='山西'){
          dishiV='太原';
          quxianV='小店区';
          new PCAS("province","city","area",sheng,'太原','小店区');
        }
        else if(sheng==='内蒙古自治区'){
          dishiV='呼和浩特';
          quxianV='新城区';
          new PCAS("province","city","area",sheng,'呼和浩特','新城区');
        }
        else if(sheng==='江苏'){
          dishiV='南京';
          quxianV='玄武区';
          new PCAS("province","city","area",sheng,'南京','玄武区');
        }
        else if(sheng==='浙江'){
          dishiV='杭州';
          quxianV='上城区';
          new PCAS("province","city","area",sheng,'杭州','上城区');
        }
        else if(sheng==='浙江'){
          dishiV='杭州';
          quxianV='上城区';
          new PCAS("province","city","area",sheng,'杭州','上城区');
        }
        else if(sheng==='江西'){
          dishiV='南昌';
          quxianV='东湖区';
          new PCAS("province","city","area",sheng,'南昌','东湖区');
        }
        else if(sheng==='安徽'){
          dishiV='合肥';
          quxianV='瑶海区';
          new PCAS("province","city","area",sheng,'合肥','瑶海区');
        }
        else if(sheng==='福建'){
          dishiV='福州';
          quxianV='鼓楼区';
          new PCAS("province","city","area",sheng,'福州','鼓楼区');
        }
        else if(sheng==='湖北'){
          dishiV='武汉';
          quxianV='武昌区';
          new PCAS("province","city","area",sheng,'武汉','武昌区');
        }
        else if(sheng==='湖南'){
          dishiV='长沙';
          quxianV='芙蓉区';
          new PCAS("province","city","area",sheng,'长沙','芙蓉区');
        }
        else if(sheng==='广东'){
          dishiV='广州';
          quxianV='越秀区';
          new PCAS("province","city","area",sheng,'广州','越秀区');
        }
        else if(sheng==='广西'){
          dishiV='南宁';
          quxianV='青秀区';
          new PCAS("province","city","area",sheng,'南宁','青秀区');
        }
        else if(sheng==='海南'){
          dishiV='海口';
          quxianV='秀英区';
          new PCAS("province","city","area",sheng,'海口','秀英区');
        }
        else if(sheng==='四川'){
          dishiV='成都';
          quxianV='武侯区';
          new PCAS("province","city","area",sheng,'成都','武侯区');
        }
        else if(sheng==='贵州'){
          dishiV='贵阳';
          quxianV='观山湖区';
          new PCAS("province","city","area",sheng,'贵阳','观山湖区');
        }
        else if(sheng==='西藏自治区'){
          dishiV='拉萨';
          quxianV='城关区';
          new PCAS("province","city","area",sheng,'拉萨','城关区');
        }
        else if(sheng==='陕西'){
          dishiV='西安';
          quxianV='未央区';
          new PCAS("province","city","area",sheng,'西安','未央区');
        }
        else if(sheng==='甘肃'){
          dishiV='兰州';
          quxianV='安宁区';
          new PCAS("province","city","area",sheng,'兰州','安宁区');
        }
        else if(sheng==='青海'){
          dishiV='西宁';
          quxianV='城中区';
          new PCAS("province","city","area",sheng,'西宁','城中区');
        }
        else if(sheng==='宁夏回族自治区'){
          dishiV='银川';
          quxianV='兴庆区';
          new PCAS("province","city","area",sheng,'银川','兴庆区');
        }
        else if(sheng==='新疆维吾尔自治区'){
          dishiV='乌鲁木齐';
          quxianV='天山区';
          new PCAS("province","city","area",sheng,'乌鲁木齐','天山区');
        }
        else if(sheng==='香港特别行政区'){
          dishiV='香港';
          quxianV='香港特别行政区';
          new PCAS("province","city","area",sheng,'香港','香港特别行政区');
        }
        else if(sheng==='澳门特别行政区'){
          dishiV='澳门';
          quxianV='澳门特别行政区';
          new PCAS("province","city","area",sheng,'澳门','澳门特别行政区');
        }
        else if(sheng==='台湾'){
          dishiV='台北';
          quxianV='中正区';
          new PCAS("province","city","area",sheng,'台北','中正区');
        }
        else if(sheng==='北京'){
          dishiV='辖区';
          quxianV='东城区';
          new PCAS("province","city","area",sheng,'辖区','东城区');
        }
        else if(sheng==='天津'){
          dishiV='辖区';
          quxianV='和平区';
          new PCAS("province","city","area",sheng,'辖区','和平区');
        }
        else if(sheng==='上海'){
          dishiV='辖区';
          quxianV='黄浦区';
          new PCAS("province","city","area",sheng,'辖区','黄浦区');
        }
        else if(sheng==='重庆'){
          dishiV='辖区';
          quxianV='万州区';
          new PCAS("province","city","area",sheng,'辖区','万州区');
      }
        for(var i=0;i<obj.data.length;i++){
          k++;
          ss1+='<li  class="leng">'+
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
            k++;
            ss2+='<li  class="leng">'+
            '<span>'+obj.data[i].years+'</span>'+
            '<span>'+obj.data[i].city+'</span>'+
            '<span>'+obj.data[i].county+'</span>'+
            '<span>'+obj.data[i].grade+'</span>'+
            '<span>'+obj.data[i].discipline+'</span>'+
            '<span>'+obj.data[i].lowest+'</span>'+
            '</li>';
            if(k===400){
              break;
            } 
          }
          if(k===400){
              break;
            } 
        }
          html=ss1+ss2;
          $('#list').html(html); 
        }
      }else if(obj.code==='404'){
        // window.location.href='/zt/kaoqing/404.html';
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
    if(dishi.validity.valueMissing){
      layer.open({
        type:0,
        title:['山香教育温馨提示：','font-size:16px;color:#ed6053;'],
        content:'请输入地名',
        icon:6
      });
      return false;
    }
    if(quxian.validity.valueMissing){
      layer.open({
        type:0,
        title:['山香教育温馨提示：','font-size:16px;color:#ed6053;'],
        content:'请输入区县名',
        icon:6
      });
      return false;
    }
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
          'province':sheng,
          'city':dishiV,
          'county':quxianV,
          'grade':xueduanV,
          'discipline':xuekeV,
          'project_id':baohanpr,
          'county_id':baohanco
        },
      })
      .done(function(data) {
        document.getElementById('sub').disabled=true;
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