//Pour le bouton toggle qui affiche les menus 
        let bar = document.getElementById('open');
        let menu = document.getElementById('navi');
        console.log('navi', navi)
        bar.addEventListener('click',() => {
            if (menu.classList.contains('hidden')){
                menu.classList.remove('hidden')
            }
            else {
                menu.classList.add('hidden')
            }
        })
        // Pour que les menus cliqués s'affichent
        let ouv1 = document.getElementById('men1');
        let menu1 = document.getElementsByClassName('M1')[0];
        ouv1.addEventListener('click',() => {
            if (menu1.classList.contains('hidden')){
                menu1.classList.remove('hidden')
            }
            else {
                menu1.classList.add('hidden')
            }
        })
        let ouv2 = document.getElementById('men2');
        let menu2 = document.getElementsByClassName('M2')[0];
        ouv2.addEventListener('click',() => {
            if (menu2.classList.contains('hidden')){
                menu2.classList.remove('hidden')
            }
            else {
                menu2.classList.add('hidden')
            }
        })
        let ouv3 = document.getElementById('men3');
        let menu3 = document.getElementsByClassName('M3')[0];
        ouv3.addEventListener('click',() => {
            if (menu3.classList.contains('hidden')){
                menu3.classList.remove('hidden')
            }
            else {
                menu3.classList.add('hidden')
            }
        })
        let ouv4 = document.getElementById('men4');
        let menu4 = document.getElementsByClassName('M4')[0];
        ouv4.addEventListener('click',() => {
            if (menu4.classList.contains('hidden')){
                menu4.classList.remove('hidden')
            }
            else {
                menu4.classList.add('hidden')
            }
        })
        let ouv5 = document.getElementById('men5');
        let menu5 = document.getElementsByClassName('M5')[0];
        ouv5.addEventListener('click',() => {
            if (menu5.classList.contains('hidden')){
                menu5.classList.remove('hidden')
            }
            else {
                menu5.classList.add('hidden')
            }
        })
        //Tableau qui affiche une image au passage de la souris
        let link1 = document.getElementsByClassName('boat1')[0]
        let img1= document.createElement("img")
        link1.addEventListener('mouseover',()=> {
        img1.src="https://media.iletaitunehistoire.com//images/biblidpoe_007i01.png"
        document.body.appendChild(img1);
    })
        link1.addEventListener('mouseout',()=> {
        document.body.removeChild(img1);
    }) 
        let link2 = document.getElementsByClassName('anim1')[0]
        let img2= document.createElement("img")
        console.log("link2",link2);
        link2.addEventListener('mouseover',()=> {
        img2.src="https://lemagdesanimaux.ouest-france.fr/images/dossiers/2020-12/mini/suricate-070304-650-400.jpg"
        document.body.appendChild(img2);
        console.log("img",img2)
    })
        link2.addEventListener('mouseout',()=> {
        document.body.removeChild(img2);
    })
    //menu2
        let ouverture = document.getElementById('buttab');
        let tableau = document.getElementById('tabnom');
        ouverture.addEventListener('click',() => {
            if (tableau.classList.contains('hidden')){
                tableau.classList.remove('hidden')
            }
        })
    function insert_tab() {; //je crée une fonction rajout de ligne
        let rw = document.createElement("tr");//la variable rw stocke la balise tr crée
        let table = document.getElementById("tabnom");// je stock l'element table dont l'id est tabnom
        let cell1 = document.createElement("td");
        let cell2 = document.createElement("td");//création d'une balise td
        rw.appendChild(cell1);
        rw.appendChild(cell2);//administre la balise td a la balise tr crée
        cell1.innerHTML=document.getElementById("box1").value; //prend la valeur de la box1 pour l'ajouter dans le tableau
        cell2.innerHTML=document.getElementById("box2").value;
        table.appendChild(rw);//administre les tr crée au parent table
    }

    //Changement de Police avec 3 styles différents
    let change = document.getElementById('paragraph');
        document.getElementById('style').addEventListener('change', function(){
        if (this.value){
            change.style.fontFamily = this.value
        } 
    });
    //menu4
let reverse = document.getElementById('decroissant'); //je récupère le bouton décroissant
        let retourne = document.getElementById('ulm4');//je recupere la liste
        reverse.addEventListener('click',() => { // au clic du bouton décroissant
            if (!retourne.classList.contains('reverse')){ //je verifie si ma liste ne contiens pas la class reverse
                retourne.classList.add('reverse') //j'ajoute la classe reverse à la liste retourne
            }
        })
let defaut = document.getElementById('croissant');// je récupère le bouton croissant
        let retour = document.getElementById('ulm4');//je récupère la liste 
        defaut.addEventListener('click',() => {// au clic du bouton croissant
            if (retourne.classList.contains('reverse')){//je verifie si ma liste contiens la class reverse
                retourne.classList.remove('reverse')//je supprime la class reverse de ma liste
            }
        })