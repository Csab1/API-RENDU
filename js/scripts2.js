function getApiData (url) {
    const xhr = new XMLHttpRequest()
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            const data = JSON.parse(xhr.responseText);
            innerHTML=""
              console.log(data)
        
            for(i=0;i<=data.cards.length;i++){
              

              var doc = document.createElement("DIV");
              doc.innerHTML = '<div id "carte"><div class="info"> <img src='+data.cards[i].imageUrl+'></div></div>';
              document.body.appendChild(doc);

        }
        }
        
                   
              
      }
     
            xhr.open('GET',url );
            xhr.send();


}
innerHTML=""
//Monster Card
document.getElementById("water").addEventListener ("click",function(){getApiData ("https://api.pokemontcg.io/v1/cards?supertype=pokemon&types=|water|")})
document.getElementById("fire").addEventListener ("click",function(){getApiData ("https://api.pokemontcg.io/v1/cards?supertype=pokemon&types=|fire|")} )
document.getElementById("fighting").addEventListener ("click",function(){getApiData ("https://api.pokemontcg.io/v1/cards?supertype=pokemon&types=|fighting|")} )
document.getElementById("colorless").addEventListener ("click",function(){getApiData ("https://api.pokemontcg.io/v1/cards?supertype=pokemon&types=|colorless|")} )
document.getElementById("metal").addEventListener ("click",function(){getApiData ("https://api.pokemontcg.io/v1/cards?supertype=pokemon&types=|metal|")} )
document.getElementById("grass").addEventListener ("click",function(){getApiData ("https://api.pokemontcg.io/v1/cards?supertype=pokemon&types=|grass|")} )
document.getElementById("fairy").addEventListener ("click",function(){getApiData ("https://api.pokemontcg.io/v1/cards?supertype=pokemon&types=|fairy|")})
document.getElementById("dragon").addEventListener ("click",function(){getApiData ("https://api.pokemontcg.io/v1/cards?supertype=pokemon&types=|dragon|")})
document.getElementById("psychic").addEventListener ("click",function(){getApiData ("https://api.pokemontcg.io/v1/cards?supertype=pokemon&types=|psychic|")})
document.getElementById("lightning").addEventListener ("click",function(){getApiData ("https://api.pokemontcg.io/v1/cards?supertype=pokemon&types=|lightning|")})
document.getElementById("darkness").addEventListener ("click",function(){getApiData ("https://api.pokemontcg.io/v1/cards?supertype=pokemon&types=|darkness|")})




