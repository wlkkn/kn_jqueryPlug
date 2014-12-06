调用方式
$(function(){
  $('#dialog').on('click',function(){
    $(this).knDialog(content, options);
  });
});

content:弹出框内容
  内容可以为页面id的内容，img，url，iframe以及text等等，设置方法如下
  {type:'id',value'id'}或者'我是一个弹出框'
options:弹出框配置
  设置方法如下
  {
    title: '标题',//标题文本，传空则不显示
    showTitle: true,//是否显示标题栏
    closeText: '',//关闭按钮文本
    btnConfirm: '确定',//确定按钮文本
    btnCancel: '取消',//取消按钮文本
    showBtns: true,//是否显示按钮组
    showBtnConfirm: true,//显示确定按钮
    showBtnCancel: true,//显示取消按钮
    draggable: true,//是否支持拖动
    modal: true,//是否模态对话框
    center: true,//是否居中
    fixed: true,//是否跟随页面滚动
    time: 0,//自动关闭时间
    id: false//对话框id，若为false，则由系统自动产生一个唯一的id
  }