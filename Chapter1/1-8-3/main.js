// 数学と英語の点数が、両方ともに80点以上であれば合格の場合（AND条件）
const getIsSuccess = (math, english) => {
    if (math >= 80 && english >= 80) {
        return '合格';
    } else {
        return '不合格';
    }
};

console.log(getIsSuccess(60, 90));
console.log(getIsSuccess(90, 90));
console.log(getIsSuccess(60, 70));



// // 数学と英語の点数が、どちらかが80点以上であれば合格の場合（OR条件）
// const getIsSuccess = (math, english) => {
//     if (math >= 80 || english >= 80) {
//         return '合格';
//     } else {
//         return '不合格';
//     }
// };

// console.log(getIsSuccess(60, 90));
// console.log(getIsSuccess(90, 90));
// console.log(getIsSuccess(60, 70));


// const bool1 = true;
// console.log(!bool1); 

// const bool2 = false;
// console.log(!bool2);


// const a = '20代である';
// const b = '女性である';
// if (!(a === '20代である' || b === '女性である')) {
//     console.log('20代でもないし女性でもない');
// } else {
//     console.log('20代であるか女性である');
// }
// if (a !== '20代である' && b !== '女性である') {
//     console.log('20代でもないし女性でもない');
// } else {
//     console.log('20代であるか女性である');
// }