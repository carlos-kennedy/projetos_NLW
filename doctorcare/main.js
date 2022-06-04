function onScroll() {  
 if(scrollY > 0){
    navigation.classList.add('scroll') 
}

else{
navigation.classList.remove('scroll') 
}
}

function openMenu(){
   document.body.classList.add('menu-expanded')
}

function closeMenu(){
    document.body.classList.remove('menu-expanded')
}

ScrollReveal({
 origin:'top',
 distance: '3rem',
 duration: 700,
}).reveal(`
 #home,
 #home img,
 #home
 .stats
 `);

ScrollReveal({
 origin:'rigth',
 distance: '3rem',
 duration: 700,
}).reveal(`
 #services header,
 #services .card
 `);
