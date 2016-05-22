var monImage = document.querySelector('img');
    monImage.onclick = function (){
        var maSrc = monImage.getAttribute('src');
            if (maSrc === 'images/Socrates.jpg') {
                monImage.setAttribute('src','images/hitler.jpg')
            }else{
                monImage.setAttribute('src','images/Socrates.jpg')
            }
    }
    
var monBouton = document.querySelector('button');
var monTitre = document.querySelector('h1');

    function definirNomUtilisateur() {
        var monNom = prompt('Veuillez saisir votre Nom');
            localStorage.setItem('nom', monNom);
            monTitre.textContent = 'Hello Mr, '+ monNom;
    }
    
    if (!localStorage.getItem('nom')) {
        definirNomUtilisateur();
    }else{
        var nomEnregistre = localStorage.getItem('nom');
        monTitre.textContent = 'Hello Mr, '+ nomEnregistre;
    }
    
    monBouton.onclick = function(){
        definirNomUtilisateur();
    }