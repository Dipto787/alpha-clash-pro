

function continues(){
    const alphabetLetter='qwertyuiopasdfghjklzxcvbnm';
    const splitAlphabet=alphabetLetter.split('');
    const randomNumber=Math.random()*splitAlphabet.length;
    const random=Math.round(randomNumber);
    const alphabet=splitAlphabet[random];
    return alphabet;
}

function conttt(){
    const addRandom=document.getElementById('setText');
    const alphabet=continues();
    addRandom.innerText=alphabet;
    addBackgroundColor(alphabet);
}


document.addEventListener('keyup',function(key){
    if(key.key.toLowerCase()==='enter'){
        hideElementById('home');
        showElementById('playGround');
        conttt();
    }
    
})

function playbtn(){
    hideElementById('home');
    hideElementById('main-score')
    showElementById('playGround');
    conttt();
  
    
    }


    document.addEventListener('keyup',function(key){
        
        const addRandom=document.getElementById('setText');
        const lower =addRandom.innerText; 
        
        if(lower.toLowerCase()===key.key){
            conttt(); 
            const remove=document.getElementById(key.key);
            remove.classList.remove('bg-red-500');

            let currentScore=document.getElementById('current-score');
            let score=currentScore.innerText;
            let strTonum=parseFloat(score); 
            currentScore.innerText=strTonum+1; 
            const set2=document.getElementById('set-score');
            set2.innerText=currentScore.innerText;
            

        } else{
            console.log('tata')
            const currentLifeElement=document.getElementById('current-life');
            const currentLifeText=currentLifeElement.innerText;
            const lifecon=parseInt(currentLifeText);
            currentLifeElement.innerText=lifecon-1; 

            const magic=currentLifeElement.innerText; 
            const parse=parseInt(magic);

            if(parse===0){
                gameOver();
            }

           console.log(parse)
            // const life=lifecon-1;
            // currentLifeElement.innerText=life;
        }
    })
    function jero(element,value){
        const life=document.getElementById(element);
        life.innerText=value;
    }

    function final(element,value){
        const life=document.getElementById(element);
        life.innerText=value;
    }


    function gameOver(){
        hideElementById('playGround');
        showElementById('main-score');
        final('current-score',0)
    }

function playAgain(){
    hideElementById('main-score');
    showElementById('playGround');
    jero('current-life',7)
}
