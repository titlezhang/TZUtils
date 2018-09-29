//用来测试各个模块
const DateUtils=require('./utils/DateUtils');

function testDateUtilsFormat(){
    console.log("testDateUtilsFormat----start");
    console.log('input:new Date(),yyyy-MM-dd HH:mm:ss:SSS');
    console.log('output:'+DateUtils.format(new Date(),'yyyy-MM-dd HH:mm:ss:SSS'));
    console.log("testDateUtilsFormat----end");
}

function testDateUtilsParse(){
    console.log("testDateUtilsParse----start");
    console.log('input:str,yyyy-MM-dd HH:mm:ss:SSS');
    console.log('output:'+DateUtils.parse('2018年9月27日 4时50分50秒'));
    console.log("testDateUtilsParse----end");
}

//testDateUtilsFormat();
testDateUtilsParse();