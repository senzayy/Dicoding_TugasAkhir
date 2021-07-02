const atas = document.querySelector('.stick');
const btnDrop = document.getElementById('menu');
const dropcontent = document.getElementById('dropcontent');
const list_li = document.querySelectorAll('.dropcontent li');

window.addEventListener('scroll', ()=>{
    let scrollPos = window.pageYOffset;

   if(scrollPos >= 0 && scrollPos <= 30){
    atas.style.backgroundColor = 'rgb(241, 187, 93, 0)';
   }
   else if(scrollPos > 30 && scrollPos <= 50){
    atas.style.backgroundColor = 'rgb(241, 187, 93, 0.2)';
    }
   else if(scrollPos > 50 && scrollPos <= 100){
       atas.style.backgroundColor = 'rgb(241, 187, 93, 0.4)';
   }
   else if(scrollPos > 100 && scrollPos <= 200){
    atas.style.backgroundColor = 'rgb(241, 187, 93, 0.6)';
    }   
    else if(scrollPos > 200 && scrollPos <= 300){
        atas.style.backgroundColor = 'rgb(241, 187, 93, 0.8)';
        }   
   else{
    atas.style.backgroundColor = 'rgb(241, 187, 93, 1)';
   }
});

btnDrop.addEventListener('click', ()=>{
    if(dropcontent.classList.contains('hilang')){
        dropcontent.classList.replace('hilang', 'tampil');
    }
    else{
        dropcontent.classList.replace('tampil','hilang');
    }
});

for(let list in list_li){
    list_li[list].addEventListener('click', ()=>{
        dropcontent.classList.replace('tampil','hilang');
    });
}