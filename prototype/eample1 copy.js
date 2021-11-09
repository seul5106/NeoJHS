function student(kor, eng, math){
    this._kor = kor;
    this._eng = eng;
    this._math = math;
}

student.prototype = {
    sum : function(){
        return this._kor + this._eng + this._math;
    },

    avg : function(){
        return this.sum()/3
    }
}

const grade = [
    ["철수",92,81,76],
    ["영희",72,95,84],
    ["민혁",80,86,98]
];

for(item of grade){
    const s = new student(item[1],item[2],item[3]);
    console.log("%s의 총점은 %d점 이고 평균은 %d점 입니다.", item[0], s.sum(), s.avg());
}
