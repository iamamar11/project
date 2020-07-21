// document.querySelector("#theme").addEventListener("click",()=>{
//     document.body.classList.toggle("theme");
//     document.querySelector("#nightMode").classList.toggle("night");
// });
window.addEventListener("scroll",() => {
    let navigation = document.querySelector('nav');
    navigation.classList.toggle("navigation",window.scrollY > 21);
});
