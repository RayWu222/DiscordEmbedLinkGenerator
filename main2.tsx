// const button  = document.querySelector('#submit')  as HTMLElement;
// const clear = document.querySelector('#clear') as HTMLElement;;
// const input = document.querySelector('input') as HTMLInputElement;
// const box = document.querySelector('#result') as HTMLElement;;
// const fixv: string = "https://fixv";
// const dd: string = "https://www.ddinstagram.com";
// const pixiv:string  = "https://www.phixiv.net";
// let urlList:string  = "";


// button.addEventListener('click', (): void =>{
//     let domain = (new URL(input.value));
//     let hostname:string = domain.hostname;
//     let path = domain.pathname;
//     console.log(hostname);
//     console.log(path);
//     if(hostname == 'x.com' || hostname == 'twitter.com'){
//         urlList += fixv + hostname + path + "\n" ;
//         console.log(urlList);
//         box.textContent =  urlList;
             
//     }else if(hostname == 'www.instagram.com'){
//         urlList += dd + path + "\n"
//         console.log(urlList);
//         box.textContent = urlList;

//     }else if(hostname == 'www.pixiv.net'){
//         urlList += pixiv + path + "\n";
//         console.log(urlList);
//         box.textContent = urlList;
//     }else{
//         box.textContent = input.value;
//     }
    
//     input.value = "";
// });

// clear.addEventListener('click', ():void=>{
//     urlList = "";
//     box.textContent = "";

// })