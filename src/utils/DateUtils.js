/*
 * @param date Date日期对象，或者豪秒值
 * @param pattern 格式，如yyyy-MM-dd HH:mm:ss:SSS
 * @return 格式化的日期时间字符串，若失败，则原样返回date
 */
function format(date, pattern) {
    let fmt = 'yyyy-MM-dd HH:mm:ss';
    if (pattern) {
        fmt = pattern;
    }
    if (date) {
        if (isNaN(date) && !(date instanceof Date)) {
            return date;
        } else {
            let dateTemp = date;
            if (!isNaN(date)) {//如果是数字，转成Date对象处理
                dateTemp = new Date(date);
            }
            var model = {
                "M+": dateTemp.getMonth() + 1, //月份   
                "d+": dateTemp.getDate(), //日   
                "H+": dateTemp.getHours(), //24小时制   
                "h+":dateTemp.getHours()<=12?dateTemp.getHours():dateTemp.getHours()-12,//12小时制
                "m+": dateTemp.getMinutes(), //分   
                "s+": dateTemp.getSeconds(), //秒   
                "q+": Math.floor((dateTemp.getMonth() + 3) / 3), //季度   
                "S+": dateTemp.getMilliseconds() //毫秒   
            };

            //处理年份
            if (/(y+)/.test(fmt)) {//把所有的小y找出来,如yy或者yyyy
                //倒着来把年份截出来,比如现在是2018年，如果是yy则取后两位：18，所以用4去减
                fmt = fmt.replace(RegExp.$1, (dateTemp.getFullYear() + "").substr(4 - RegExp.$1.length));
            }

            //根据前的月、日、时等的标记去匹配出来，并且用值替换
            for (var k in model) {
                let zero="00";//是多少位的，就给多少个"0"
                if(k==="S+"){//毫秒是三位的
                    zero="000";
                }
                if (new RegExp("(" + k + ")").test(fmt)) {
                    fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? 
                    (model[k]) : ((zero + model[k]).substr(("" + model[k]).length)));
                }
            }
            return fmt;
        }
    } else {
        return date;
    }
}
module.exports = {
    format: format
}