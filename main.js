const button  = document.querySelector('#submit');
const fixv = "https://fixv";
const input = document.querySelector('input');
const box = document.querySelector('#result');
button.addEventListener('click', () =>{
    
    let domain = (new URL(input.value));
    let hostname = domain.hostname;
    let path = domain.pathname;
    if(hostname == 'x.com'){
        hostname = fixv + hostname + path;
        
    }
});