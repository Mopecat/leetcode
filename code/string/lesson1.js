// export default (str)=>{
//     return str.split(' ').map(item => {
//        return item.split('').reverse().join('')
//     }).join(' ');

// }

// 其他方式 split 正则方式
// export default (str)=>{
//     return str.split(/\s/g).map(item => {
//        return item.split('').reverse().join('')
//     }).join(' ');
// }

// match 正则
// export default (str)=>{
//     return str.match(/[\w']+/g).map(item => {
//        return item.split('').reverse().join('')
//     }).join(' ');
// }

// 两次反转
export default (str)=>{
    return str.split('').reverse().join('').split(' ').reverse().join(' ')
}