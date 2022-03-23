console.log('Script JS OK!');

//Partendo dalla struttura dati fornita, visualizzare in pagina un box per ogni icona, in cui è presente il nome dell'icona e l'icona stessa.

//Ciascuna icona ha una proprietà "color": utilizzare questa proprietà per visualizzare le icone del colore corrispondente.


//Aggiungere alla pagina una select in cui le options corrispondono ai vari tipi di icone (animal, vegetable, user). 
//Quando l'utente seleziona un tipo dalla select, visualizzare solamente le icone corrispondenti.


const teamContainer = document.querySelector('.team-container'); //ho recuperato l'elemento in html

createTeam(factory);

function createTeam(element) {
    teamContainer.innerHTML = '';
    /*
    for (let i = 0; i < factory.length; i ++) {
        const box = createBox(factory[i]);
        teamContainer.appendChild(box);
    }
*/
    factory.forEach((element, index, array) => {
        const box = createBox(factory[index]);
            teamContainer.appendChild(box);
    });

}

function createBox(factory){
    const box = document.createElement('div');
    box.className = "box-card";
    box.innerHTML = `
        <div class = "box-icon">
        <img
                src="${factory.prefix}"
                alt="${factory.name}"
        />
        <h3>${factory.name}</h3>
        </div>
    `;
    return box;
}


/*
factory.forEach((element, index, array) => {
    const prefix = createBox(factory[index]);
    console.log(prefix);
});

const {prefix, name} = factory;
*/



/*
const prefix = ciao.name;
console.log(prefix);

function visualizzaPrefixName() { return "prefixName"; }
factory.prefixName = visualizzaPrefixName;
var prefixName = factory.prefixName();
console.log (prefixName)
*/

factory.forEach((element, index, array) => {
    console.log((factory[index].prefix)+(factory[index].name));  
})




// console.log(teams.nome); // se fosse solo object

// console.log([0]) // mi stampa 0

// console.log(teams[0]); // stampa il primo gruppo di graffe

// console.log((teams[0].nome)); // stampare solo il primo nome 

// {
//     name: 'cat',
//     prefix: 'fa-',
//     type: 'animal',
//     family: 'fas',
//     color: 'orange'
// },
