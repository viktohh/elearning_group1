const readmorebtn=document.querySelector('.read-more-btn');
const ab=document.querySelector('.ab');
readmorebtn.addEventListener('click',(e)=>{
    ab.classList.toggle('show-more');
})