Buffer.prototype.split=Buffer.prototype.split||function (spliter){
  let b1=this;

  let result=[];
  let n;

  while((n=b1.indexOf(spliter))!=-1){
    let res1=b1.slice(0, n);
    let res2=b1.slice(n+spliter.length);

    result.push(res1);
    b1=res2;
  }
  result.push(b1);

  return result;
};
