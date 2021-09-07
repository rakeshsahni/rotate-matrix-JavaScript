const allbtns = document.querySelectorAll("button");
let res = [1,2,3,6,9,8,7,4];
btn5.onclick = () => {
    let tem = [...res];
    for(let i=1;i<9;++i) res[i%8] = tem[i-1];
    let i=0;
    for(i=0;i<3;++i){
        allbtns[i].innerText = `${res[i]}`;
        allbtns[i].id = `btn${res[i]}`;
    }
    allbtns[5].innerText = `${res[i]}`; 
    allbtns[5].id = `btn${res[i]}`;
    ++i;
    allbtns[8].innerText = `${res[i]}`; 
    allbtns[8].id = `btn${res[i]}`;
    ++i;
    allbtns[7].innerText = `${res[i]}`; 
    allbtns[7].id = `btn${res[i]}`;
    ++i;
    allbtns[6].innerText = `${res[i]}`; 
    allbtns[6].id = `btn${res[i]}`;
    i++;
    allbtns[3].innerText = `${res[i]}`; 
    allbtns[3].id = `btn${res[i]}`;
}