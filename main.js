const button  = document.querySelector('#submit');
const clear = document.querySelector('#clear');
const input = document.querySelector('input');
const box = document.querySelector('#result');
const fixv = "https://vxtwitter.com";
const dd = "https://www.ddinstagram.com";
const pixiv = "https://www.phixiv.net";
let urlList = "";


button.addEventListener('click', () =>{
    let domain = (new URL(input.value));
    let hostname = domain.hostname;
    let path = domain.pathname;
    console.log(hostname);
    console.log(path);
    if(hostname == 'x.com' || hostname == 'twitter.com'){
        urlList += fixv + path + "\n" ;
        box.textContent =  urlList;     
    }else if(hostname == 'www.instagram.com'){
        urlList += dd + path + "\n"
        box.textContent = urlList;

    }else if(hostname == 'www.pixiv.net'){
        urlList += pixiv + path + "\n";
        box.textContent = urlList;
    }else{
        return input.value;
    }
    
    input.value = "";
});

clear.addEventListener('click', ()=>{
    urlList = "";
    box.textContent = "";

})