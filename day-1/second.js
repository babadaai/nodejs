const today =() => {
    const d = new Date();
    return d;

};
const getDay=()=>{
    const now= new Date().getDay();
    const day = ["sun", "mon","tue","wed","thur","fri","sat"];
    return day[now];
};
module.exports={getDay,today};

// write a js module create string functions.
// 1 proper case
// 2 truncate 
// join two string