let p1_name = "john";
let p2_name = "Alice";

async function getCard(url){
        try{
                const response = await fetch(url);
                if(!response.ok){
                        throw new Error("Not able to fetch data");
                }
                const response_1 = await response.json();
                let x = Math.floor(((Math.random()) * 20));
                const response_2 = await fetch(response_1.results[x].url);
                if(!response_2.ok){
                        throw new Error("Not able to fetch image for a the provided card");
                }
                return await response_2.json();
        }catch(err){
                console.log(err);
        }
}

function getPokemon(){
        getCard("https://pokeapi.co/api/v2/pokemon/")
        .then((response)=> {
                displayPlayer1(response)
                return getCard("https://pokeapi.co/api/v2/pokemon/")
        })
        .then((response)=> {
                displayPlayer2(response)
        })
}

function displayPlayer1(response){
        document.getElementById('p1_name').innerHTML = p1_name;
        document.getElementById('p1_score').textContent = `Score: ${score1}`;
                const card1 = document.querySelector('#card1');
                card1.querySelector('#name').textContent = response.name;
                const imgc = document.createElement('img');
                imgc.setAttribute('src',response.sprites.other.dream_world.front_default);
                imgc.style.height = '300px';
                imgc.style.width = '300px';
                card1.querySelector('#img').innerHTML='';
                card1.querySelector('#img').append(imgc);
                const lst = card1.querySelector('#abilities');
                lst.innerHTML='';
                const abilities = response.abilities;
                for(let i of abilities){
                        const li = document.createElement('li');
                        li.textContent = i.ability.name;
                        lst.append(li);
                }
                const exp = card1.querySelector('#experience')
                exp.textContent = response.base_experience;
                
}
function displayPlayer2(response){
        document.getElementById('p2_name').textContent = p2_name;
        document.getElementById('p2_score').textContent = `Score: ${score2}`;
                const card2 = document.querySelector('#card2');
                card2.querySelector('#name').textContent = response.name;
                const imgc = document.createElement('img');
                imgc.setAttribute('src',response.sprites.other.dream_world.front_default);
                imgc.style.height = '300px';
                imgc.style.width = '300px';
                card2.querySelector('#img').innerHTML='';
                card2.querySelector('#img').append(imgc);
                const lst = card2.querySelector('#abilities');
                lst.innerHTML='';
                const abilities = response.abilities;
                for(let i of abilities){
                        const li = document.createElement('li');
                        li.textContent = i.ability.name;
                        lst.append(li);
                }
                card2.querySelector('#experience').textContent = response.base_experience;
}
let score1 = 0;
let score2 = 0;
const btn = document.getElementById('fight')
btn.addEventListener('click',()=>{
        getPokemon();
        setTimeout(()=>{                
        let crd1 = document.getElementById('card1');
        let scr1 = crd1.querySelector('#experience').textContent;
        let crd2 = document.querySelector('#card2');
        let src2 = crd2.querySelector('#experience').textContent;
        scr1 = Number(scr1);
        src2 = Number(src2);
        console.log(scr1,src2);
        if(scr1>src2){
                score1= score1+1;
                document.querySelector('#p1_score').textContent = `Score: ${score1}`;
        }
        else if(scr1<src2){
                score2 = score2 +1;
                document.querySelector('#p2_score').textContent = `Score: ${score2}`;        
        }
    
},1000)       
})
