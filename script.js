/* Viene fornito un array di oggetti in allegato in cui è definito un array di oggetti che rappresentano i membri del team.
Ogni membro ha le informazioni necessarie per stampare le relative informazioni: Nome, Ruolo e Foto.
MILESTONE 1:
stampare su console le informazioni di nome, ruolo e la stringa della foto
MILESTONE 2:
stampare le stesse informazioni su DOM sottoforma di stringhe
BONUS 1:
trasformare la stringa foto in una immagine effettiva
BONUS 2:
organizzare i singoli membri in card/schede */





let myImg=["img/01.jpg , img/02.jpg , img/03.jpg , img/04.jpg"]

/* ARRAY DI OGGETTI DATI DALL'ESERCIZIO */

const team = [
    {
      name: 'Wayne Barnett',
      role: 'Founder & CEO',
      image: 'wayne-barnett-founder-ceo.jpg',
    },
    {
      name: 'Angela Caroll',
      role: 'Chief Editor',
      image: 'angela-caroll-chief-editor.jpg',
    },
    {
      name: 'Walter Gordon',
      role: 'Office Manager',
      image: 'walter-gordon-office-manager.jpg',
    },
    {
      name: 'Angela Lopez',
      role: 'Social Media Manager',
      image: 'angela-lopez-social-media-manager.jpg',
    },
    {
      name: 'Scott Estrada',
      role: 'Developer',
      image: 'scott-estrada-developer.jpg',
    },
    {
      name: 'Barbara Ramos',
      role: 'Graphic Designer',
      image: 'barbara-ramos-graphic-designer.jpg',
    },
  ];


    
    for(let oggettiTeam in team){
        console.log(team[oggettiTeam]) 
        
    }

  

    

    

    for(i = 0; i < team.length; i++){

        /* creo un contenitore di tipo div */
        let scheda = document.createElement("div")
        /* gli aggiungo le varie calssi */
        scheda.classList.add("col-4", "my-scheda", "m-2","flex-column")
        /* dico alla row nell'hatml di comprendere la scheda che ho screato (il div che ho creato) */
        document.getElementById("ciccio").appendChild(scheda)
        /* creo un h2 che farà da titolo per il nome */
        let titleName = document.createElement("h2")
        /* gli aggiungo le varie classi */
        titleName.classList.add("my-title","text-center","my-3")
        /* lo inserisco nel contenitore (la scheda che ho creato prima) */
        scheda.appendChild(titleName)
        /* GLI INSERISCO IL VALORE NAME CONTRASSEGNATO COME "I" DEI VARI OGGETTI CONTENUTI NELL'ARRAY TEAM */
        titleName.innerHTML=team[i].name

        /* creo un paragrafo per il ruolo */
        let paragrafoRole= document.createElement("p")
        /* gli do le classi */
        paragrafoRole.classList.add("my-title","text-center")
        /* inserisco il paragrafo nella scheda */
        scheda.appendChild(paragrafoRole)
        /* GLI DO IL VALORE IL VALORE ROLE CONTRASSEGNATO COME "I" NELL'ARRAY TEAM */
        paragrafoRole.innerHTML=team[i].role


        let oggettoImage = document.createElement("p")
        scheda.appendChild(oggettoImage)
        oggettoImage.innerHTML=team[i].image




        /* let imgContainer=document.createElement("div")
        imgContainer.classList.add("my-img-container")
        scheda.appendChild(imgContainer) */

        /* creato elemento img */
        /* let imgImage=document.createElement("img") */
        /* inserito elemento img nel contenitore "imgContainer" che a sua volta è inserito nel div "scheda" */
        /* imgContainer.appendChild(imgImage) */


        /* ciclo che scrive nel imgContainer.... per aggiungere le immagini contenute nell'array */

        /* for(k = 0; k < myImg.length; k++){
            
            imgContainer.innerHTML+=`<img class="my-img" src="${myImg[k]}" alt="">`
            
        
        } */

        
        
        
        
    }

    






