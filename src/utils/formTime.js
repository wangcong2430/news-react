//设置导出的属性文件，转换时间
let formTime = {
    formTime: function (time) {
      var day = new Date(time)
      if (day.getMinutes() < 10&&day.getHours()<10) {
        return (`${day.getFullYear()} 年${(day.getMonth() + 1)}月${ day.getDate()}日${0}+${day.getHours()}  :  ${0}  ${day.getMinutes()}`)
      }else if(day.getMinutes() < 10&&10&&day.getHours()>=10){
        return (`${day.getFullYear()} 年${(day.getMonth() + 1)}月${ day.getDate()}日+${day.getHours()} : ${0}${day.getMinutes()}`)
      }else if(day.getMinutes() >= 10&&10&&day.getHours()<10){
        return (`${day.getFullYear()} 年${(day.getMonth() + 1)}月${ day.getDate()} 日${0}+${day.getHours()}:${day.getMinutes()}`)
      }else{
        return (`${day.getFullYear()} 年${(day.getMonth() + 1)}月${ day.getDate()}日+${day.getHours()}:${day.getMinutes()}`)
      }
    }
  
}
export default formTime