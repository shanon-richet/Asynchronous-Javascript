const main= document.querySelector('main')
fetch('becode.json')

.then(response => response.json())
.then(json => {
    const rulesArray= json.rules
  console.log(json.rules)
    for (const element of rulesArray){
    console.log(element)
    var section= document.createElement('section')

    var ul= document.createElement('p')
    ul.innerHTML= element.value;

    var h3= document.createElement('h3')
    h3.innerHTML= element.nom;

    var p= document.createElement('p')
    p.innerHTML= element.description;
    main.appendChild(section)
    section.appendChild(ul)
    section.appendChild(h3)
    section.appendChild(p)
 
    }
})
.catch(error => {
  console.log('There was an error!', error)
})
