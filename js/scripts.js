function getApiData (url) {
    const xhr = new XMLHttpRequest()
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            const data = JSON.parse(xhr.responseText);
            innerHTML=""
              console.log(data)
            for(i=0;i<=data.length;i++){
              

              var doc = document.createElement("DIV");
              doc.innerHTML = '<div id "carte"><div class="info"> <img src='+data[i].card_images[0].image_url+'></div></div>';
              document.body.appendChild(doc);

        }
        }
        
                   
              
      }
     
            xhr.open('GET',url );
            xhr.send();


}
innerHTML=""
//Monster Card
document.getElementById("water").addEventListener ("click",function(){getApiData ("https://db.ygoprodeck.com/api/v5/cardinfo.php?attribute=water")} )
document.getElementById("fire").addEventListener ("click",function(){getApiData ("https://db.ygoprodeck.com/api/v5/cardinfo.php?attribute=fire")} )
document.getElementById("dark").addEventListener ("click",function(){getApiData ("https://db.ygoprodeck.com/api/v5/cardinfo.php?attribute=dark")} )
document.getElementById("light").addEventListener ("click",function(){getApiData ("https://db.ygoprodeck.com/api/v5/cardinfo.php?attribute=light")} )
document.getElementById("earth").addEventListener ("click",function(){getApiData ("https://db.ygoprodeck.com/api/v5/cardinfo.php?attribute=earth")} )
document.getElementById("wind").addEventListener ("click",function(){getApiData ("https://db.ygoprodeck.com/api/v5/cardinfo.php?attribute=wind")} )



//Speel Card
document.getElementById("normal").addEventListener ("click",function(){getApiData ("https://db.ygoprodeck.com/api/v5/cardinfo.php?type=spell%20card&race=normal")} )
document.getElementById("continuous").addEventListener ("click",function(){getApiData ("https://db.ygoprodeck.com/api/v5/cardinfo.php?type=spell%20card&race=Continuous")} )
document.getElementById("equip").addEventListener ("click",function(){getApiData ("https://db.ygoprodeck.com/api/v5/cardinfo.php?type=spell%20card&race=equip")} )
document.getElementById("quick").addEventListener ("click",function(){getApiData ("https://db.ygoprodeck.com/api/v5/cardinfo.php?type=spell%20card&race=Quick-Play")} )
document.getElementById("field").addEventListener ("click",function(){getApiData ("https://db.ygoprodeck.com/api/v5/cardinfo.php?type=spell%20card&race=Field")} )
document.getElementById("ritual").addEventListener ("click",function(){getApiData ("https://db.ygoprodeck.com/api/v5/cardinfo.php?type=spell%20card&race=Ritual")})


///Speel Card
document.getElementById("trap1").addEventListener ("click",function(){getApiData ("https://db.ygoprodeck.com/api/v5/cardinfo.php?type=trap%20card&race=normal")} )
document.getElementById("trap2").addEventListener ("click",function(){getApiData ("https://db.ygoprodeck.com/api/v5/cardinfo.php?type=trap%20card&race=Continuous")} )
document.getElementById("trap3").addEventListener ("click",function(){getApiData ("https://db.ygoprodeck.com/api/v5/cardinfo.php?type=trap%20card&race=Counter")} )




