function cadastrarNewsletter() {
    let email = document.getElementById("campo-email").value

    alert(email)
    console.log(email)
}

 $("#barras").click(function() {

     $("#menu").toggleClass("menu-ativo");
    
   Toggle
     if( $("#menu").hasClass("menu-ativo") ) {
         $("#menu").removeClass("menu-ativo")
    } else {
        $("#menu").addClass("menu-ativo")
    }
 })
 
 function mostrarMenu() {
    let menu = document.getElementById("menu")

    if (getComputedStyle(menu).display == 'none') {
        menu.style.display = 'flex';
    } else {
        menu.style.display = 'none';
    }
}
