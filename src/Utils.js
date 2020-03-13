export function getRandomNumberWithin9(){
    return Math.floor(Math.random()*9);
}
export function getRandomNumber(){
    return Math.random();
}
export function getRandomNumberInArr(len){
    return Math.floor(Math.random()*(len));
}
export function getRandomFontVal(){
    let nums = ['0','1','2','3','4','5','6','7','8','9','a','b','c','d','e','f'];
    let random1 = Math.floor(Math.random()*(nums.length));
    let random2 = Math.floor(Math.random()*(nums.length));
    let random3 = Math.floor(Math.random()*(nums.length));
    let randomString = '\f'+nums[random1]+nums[random2]+nums[random3];
    return randomString;
}
