console.log(screen.width);
console.log(screen.height);

console.log(screen.availWidth);
console.log(screen.availHeight);

console.log(screen.colorDepth);
console.log(screen.pixelDepth);

console.log(screen.orientation.type);

// Location object url
//https://www.instagram.com/ayyouyat_27.03/  ==href
//https: == protocol
//www.instagram.com == host name
///ayyouyat_27.03/ == path name


// location.assign()
// ينقل المستخدم إلى صفحة جديدة
// ويمكنه الرجوع للصفحة السابقة باستعمال زر Back
location.assign('https://www.instagram.com/ayyouyat_27.03/');


// location.replace()
// ينقل المستخدم إلى صفحة جديدة
// ❌ ولا يمكن الرجوع للصفحة السابقة (تُحذف من سجل المتصفح)
location.replace('https://www.instagram.com/ayyouyat_27.03/');



//setTimeOut & setInterval

// setTimeout()
// تنفّذ الكود مرة واحدة فقط بعد مدة زمنية (بالميلي ثانية)
setTimeout(function () {
    // code here
}, 1000); // 1000ms = 1 second


// clearTimeout()
// توقف تنفيذ setTimeout
// ❗ لازم يكون عندك المتغير اللي فيه setTimeout
clearTimeout(hello); // (مثال توضيحي)



// setInterval()
// تنفّذ الكود كل مدة زمنية محددة (تكرار)
let hello = setInterval(function () {
    // code here
}, 1000); // كل 1 ثانية


// clearInterval()
// توقف التكرار (setInterval)
clearInterval(hello);


