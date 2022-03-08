const d = new Date();
d.setTime(d.getTime() + (365 * 24 * 60 * 60 * 1000));
const expires = "expires=" + d.toUTCString();
document.cookie = "test=meheactivao;" + expires + ";path=/";

console.log('me he activao!');
//alert('me he activao!');
