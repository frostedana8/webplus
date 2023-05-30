const url = "albumes.json"
getAlbumes()









async function getAlbumes() {
  const response = await fetch(url)
  const json = await response.json()
  const tabla = document.getElementById("myTable")  
  const yokai = document.getElementById("yokai")  

  json.albumes.forEach(album => {
    var row = tabla.insertRow(1);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    var cell5 = row.insertCell(4);
    var cell6 = row.insertCell(5);
    var cell7 = row.insertCell(6);

    cell1.innerHTML = "<img src=\"imagenesalbumes/"+album.id+".png\" height=\"100px\", width=\"100px\"></img>"
    cell2.innerHTML = "<p><a href=\"#"+album.id+"\">"+album.titulo+"</p>"
    cell3.innerHTML = "<p>"+album.artista+"</p>"
    cell4.innerHTML = "<p>"+album.duracion+" min</p>"
    cell5.innerHTML = "<p>"+album.fechaSalida+"</p>"
    cell6.innerHTML = "<p>"+album.nota+"</p>"
    cell7.innerHTML = "<p>"+album.fechaReview+"</p>"

    //append div to yokai
    var div = document.createElement("div");
    div.innerHTML = "<div id=\""+album.id+"\" class=\"overlay\"><div class=\"popup\"><h2 class=\"nota\">"+album.nota+"/10</h2><h2 style=\"padding-right: 20%;\">"+album.titulo+"</h2> <h6>Por "+album.artista+"</h6> <a class=\"close\" href=\"#\">&times;</a> <div class=\"content\"> <p>"+album.review+"</p> <hr><iframe style=\"border-radius:12px\" src=\"https://open.spotify.com/embed/album/"+album.link+"?utm_source=generator\" width=\"100%\" height=\"1000\" frameBorder=\"0\" allowfullscreen=\"\" allow=\"autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture\" loading=\"lazy\"></iframe></div></div></div>"
    yokai.appendChild(div);
  });


}


/*,
    {
        "titulo": "10,000 gecs",
        "id": "10000gecs",
        "artista": "100 gecs",
        "duracion": "27",
        "fechaSalida": "2023/03/17",
        "nota": "3.5",
        "fechaReview": "2023/03/17",
        "review":"Una mezcla de géneros abarcando varios estilos nuevos para el duo. Predomina el rock electrónico pero también hay ska y varias canciones experimentales pero en una dirección completamente diferente a la que puedan haber hecho antes, a excepción de unas pocas canciones (que coincide que son las que más me han gustado) se abandona en gran parte la electrónica y se introducen guitarras, saxofones, trombones y trompetas, llegando a crear incluso ambientes circenses en canciones como <strong>I Got My Tooth Removed</strong>, o por ejemplo <strong>The Most Wanted Person In The United States</strong> incorpora sonidos realmente indescriptibles para hacer una canción expermiental e incluso infantil. Sin embargo no son canciones que escucharía. Algunas se salvan, como <strong>mememe</strong>, <strong>757</strong>, <strong>Dumbest Girl Alive</strong> o <strong>Doritos & Fritos</strong> pero el resto no me han gustado.",
        "link":"2XS5McKf3zdJWpcZ4OkZPZ"
    },
    {
        "titulo": "A Brief Inquiry Into Online Relationships",
        "id": "abriefinquiryintoonlinerelationships",
        "artista": "The 1975",
        "duracion": "59",
        "fechaSalida": "2018/11/30",
        "nota": "2.5",
        "fechaReview": "2023/03/31",
        "link":"6PWXKiakqhI17mTYM4y6oY",
        "review": "Este álbum nos presenta principalmente canciones de amor y desamor lentas y melancólicas, tecnopop con claras influencias ochenteras pero a la vez técnicas modernas. El álbum contiene también un par de pistas experimentales e instrumentales. Trata sobre el amor, la sociedad moderna, la tecnología, pero también sobre nihilismo y cinismo. Por desgracia esta música lenta no es mi tipo para nada y aunque sé que tiene su público y me parece que las canciones están construidas fantasticamente no es algo que haya disfrutado de escuchar, como mucho al ser música lenta puede agradarme como música de fondo pero poco más. Las canciones que más me gustaron fueron las más animadas: <strong>It's Not Living (If It's Not With You)</strong>, <strong>I Always Wanna Die (Sometimes)</strong>, y <strong>Love It If We Made It</strong>. En cuanto a las que no me gustaron, realmente todas las no mencionadas, pero la que menos definitivamente fue <strong>The Man Who Married A Robot / Love Theme</strong>"
    },
    {
        "titulo": "POWER OF LIFE",
        "id": "poweroflife",
        "artista": "BRADIO",
        "duracion": "47",
        "fechaSalida": "2015/06/03",
        "nota": "",
        "fechaReview": "2023/04/25",
        "review":"",
        "link":"5xdNjKLKfs6ElMaFh9aG7l"
    },
    {
        "titulo": "Take Me To Your Leader",
        "id": "takemetoyourleader",
        "artista": "King Geedorah",
        "duracion": "42",
        "fechaSalida": "2003/06/17",
        "nota": "",
        "fechaReview": "2023/04/07",
        "review":"",
        "link":"1mrhahrlJu5JfzgeV6Cy8t"
    },
    {
        "titulo": "",
        "id": "",
        "artista": "",
        "duracion": "",
        "fechaSalida": "",
        "nota": "",
        "fechaReview": "",
        "review":"",
        "link":""
    },
    {
        "titulo": "",
        "id": "",
        "artista": "",
        "duracion": "",
        "fechaSalida": "",
        "nota": "",
        "fechaReview": "",
        "review":"",
        "link":""
    },
    {
        "titulo": "",
        "id": "",
        "artista": "",
        "duracion": "",
        "fechaSalida": "",
        "nota": "",
        "fechaReview": "",
        "review":"",
        "link":""
    },
    {
        "titulo": "",
        "id": "",
        "artista": "",
        "duracion": "",
        "fechaSalida": "",
        "nota": "",
        "fechaReview": "",
        "review":"",
        "link":""
    }


    {
        "titulo": "Soothing Music (Get It?)",
        "id": "soothingmusicgetit",
        "artista": "Agred",
        "duracion": "6",
        "fechaSalida": "2023/05/26",
        "nota": "9",
        "fechaReview": "2023/05/30",
        "review":"Un EP muy cortito, solo cuatro canciones. Aún así deja muy buena impresión, se trata de electrónica que a mi parecer está en el punto perfecto entre hiperpop y lo que sea que haga Goreshit, las canciones son simples pero muy pegadizas, con estribillos instrumentales que recuerdan al hardcore pero también con secciones cantadas. Me parece increíble que ninguna canción de Agred sobrepase las 1000 escuchas en Spotify, es un artista que merece mucho más reconocimiento, tiene muchísimo talento y un estilo propio que en mi opinión aprende de estilos extranjeros como hip-hop, hiperpop, hardcore y noise, pero también tiene una pizca de influencia españoles en ritmos y percusiones (algo que se deja ver incluso mejor en alguna otra de sus pistas). De las cuantro canciones, la que más me ha gustado <strong>The Ultimate 8r8k Song</strong> y la que menos <strong>I'll Prove It</strong>",
        "link":"59TQwOsF835e7hP9Wkqwb5"
    },
*/