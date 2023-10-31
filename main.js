const button  = document.querySelector('#submit');
const clear = document.querySelector('#clear');
const input = document.querySelector('input');
const box = document.querySelector('#result');
const fixv = "https://fixv";
let urlList = "";


button.addEventListener('click', () =>{
    let domain = (new URL(input.value));
    let hostname = domain.hostname;
    let path = domain.pathname;
    if(hostname == 'x.com'){
        urlList += fixv + hostname + path + "\n" ;
        box.textContent =  urlList;     
    }
    input.value = "";
});

clear.addEventListener('click', ()=>{
    box.textContent = "";
})