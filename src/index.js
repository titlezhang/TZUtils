//用来测试各个模块
const DateUtils=require('./utils/DateUtils');

function testDateUtilsFormat(){
    console.log("testDateUtilsFormat----start");
    console.log('input:new Date(),yyyy-MM-dd HH:mm:ss:SSS');
    console.log('output:'+DateUtils.format(new Date(),'yyyy-MM-dd HH:mm:ss:SSS'));
    console.log("testDateUtilsFormat----end");
}

testDateUtilsFormat();