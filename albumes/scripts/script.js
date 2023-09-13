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
        "titulo": "Hawaii: Part II",
        "id": "hawaiipartii",
        "artista": "Miracle Musical",
        "duracion": "42",
        "fechaSalida": "2012/01/01",
        "nota": "",
        "fechaReview": "2023/05/04",
        "review":"",
        "link":"58dgh1HT2wGkmqI4mQDgoR"
    },
    {
        "titulo": "Pretty Hate Machine",
        "id": "prettyhatemachine",
        "artista": "Nine Inch Nails",
        "duracion": "49",
        "fechaSalida": "1989/10/20",
        "nota": "",
        "fechaReview": "2023/05/18",
        "review":"",
        "link":"3umFHeEpc4yLXtrRcv9gLN"
    },
    {
        "titulo": "Beneath the Toxic Jungle",
        "id": "beneaththetoxicjungle",
        "artista": "Rav",
        "duracion": "32",
        "fechaSalida": "2015/12/19",
        "nota": "",
        "fechaReview": "2023/05/24",
        "review":"",
        "link":"0MuuLEo21DiUh9kKyass4Q"
    },
    {
        "titulo": "8r8k",
        "id": "8r8k",
        "artista": "Agred",
        "duracion": ""46,
        "fechaSalida": "2023/06/30",
        "nota": "",
        "fechaReview": "20023/07/23",
        "review": "",
        "link": "2GqUBuVurGrocVHZbIfNgf"
    },
        {
        "titulo": "Changes",
        "id": "changeskgwl",
        "artista": "King Gizzard & The Lizard Wizard",
        "duracion": "40",
        "fechaSalida": "2022/10/28",
        "nota": "",
        "fechaReview": "2023/07/28",
        "review": "",
        "link": "05ag5ukffFozEnXGOeuTTD"
    },
        {
        "titulo": "Fishing For Fishies",
        "id": "fishingforfishies",
        "artista": "King Gizzard & The Lizard Wizard",
        "duracion": "42",
        "fechaSalida": "2019/04/26",
        "nota": "",
        "fechaReview": "2023/07/29",
        "review": "",
        "link": "5DEL0SSMojInN54XnSWwR1"
    },
    {
        "titulo": "HIVE",
        "id": "hive",
        "artista": "Sub Urban",
        "duracion": "25",
        "fechaSalida": "2022/06/03",
        "nota": "",
        "fechaReview": "2023/08/06",
        "review": "",
        "link": "14qlU7pezYKrntRHxmYT8A"
    },
    {
        "titulo": "JESUS IS KING",
        "id": "jesusisking",
        "artista": "Kanye West",
        "duracion": "27",
        "fechaSalida": "2019/10/25",
        "nota": "2.5",
        "fechaReview": "2023/08/06",
        "review": "No hay ningún taco en todo el álbum. En su mayoría gospel. Sorprendentemente bueno para ser gospel pero sorprendentemente malo para ser de Kanye West. Aún así tiene un par de canciones buenas, <strong>Follow God</strong> es definitivamente la mejor, y <strong>Use This Gospel</strong> también es buena, pero podría haber sido mucho mejor si el beat que entra en los últimos segundos de canción hubiera estado durante la canción entera. <strong>Every Hour</strong> también es bonita. Aparte de eso no hay mucho que rescatar, Kanye recitando versos de La Biblia y perdiendo cada vez más la cabeza.",
        "link": "0FgZKfoU2Br5sHOfvZKTI9"
    },
    {
        "titulo": "Semantics: The Benzo Chronicles",
        "id": "semanticsthebenzochronicles",
        "artista": "Goreshit",
        "duracion": "38",
        "fechaSalida": "2015/02/10",
        "nota": "4",
        "fechaReview": "2023/09/13",
        "review": "No es demasiado malo para ser un álbum de Goreshit, es breakcore sorprendentemente entretenido para lo repetitivo que es, pero sigue siendo breakcore canción tras canción. <strong>One Way To Hannover</strong> ya me gustaba de antes, pero ahora también he descubierto <strong>There Are No Angels Here.</strong> y <strong>Broken Promises/Shattered Dreams</strong>, que no suenan nada mal.",
        "link": "7IWQHF0tCrXGQlqrmjIyCF"
    },
    
*/
