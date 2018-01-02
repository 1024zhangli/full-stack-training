let b1 = new Buffer("1234==gnsfhn==55fff-=sbbb==nlpsfs");
let b2 = Buffer.from(b1);

let ret = [];

//通过indexOf和slice操作实现split
while (b1.indexOf("==") !== -1) {
    let s = b1.indexOf("==");

    ret.push(b1.slice(0, s));
    b1 = b1.slice(s+2);
}

ret.push(b1);

console.log(ret.map(item=>item.toString()));


/********************************************************************************/

Buffer.prototype.split = Buffer.prototype.split || function (spliter) {
    let ret = [];
    let b1 = this;

    while (b1.indexOf(spliter) !== -1) {
        let s = b1.indexOf(spliter);

        ret.push(b1.slice(0, s));
        b1 = b1.slice(s + spliter.length);
    }

    ret.push(b1);

    return ret;
};

let ret2 = b2.split("==");
console.log(ret2.map(item=>item.toString()));
