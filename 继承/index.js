//现在有一个类

class Watch{
    //订阅
    on(a,fn){
        // 实现该方法逻辑

     }
     //发布
    emit(a,b){
        // 实现该方法逻辑 
    }
}

//调用示例如下：
const w1 = new Watch();
w1.on('www',(options) => {
  console.log(options)
});
w1.emit('www','success');

// 最后的打印结果是  success

//请实现要求的逻,可以对该类进行任意修改
