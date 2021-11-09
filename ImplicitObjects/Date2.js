const date = new Date();
const ts1 = date.getTime();
console.log(ts1);

const prevDay = new Date(date.getFullYear(),0,1);
const ts2 = prevDay.getTime();
const tmp1 = ts1 - ts2;
const day1 = Math.floor(tmp1/(24*60*60*1000));
console.log("올해는 " + day1 + "일 지났습니다.");

const nextDay = new Date(date.getFullYear(),11,31);
const ts3 = nextDay.getTime();
const tmp2 = ts3 - ts1;
const day2 = Math.ceil(tmp2/(24*60*60*1000));
console.log("올해는 " + day2 + "일 남았습니다.");

const a = date.getDate() +30;
date.setDate(a);
console.log(date.toLocaleString("ko-KR"));

const b = date.getDate() - 100;
date.setDate(b);
console.log(date.toLocaleString("ko-KR"));