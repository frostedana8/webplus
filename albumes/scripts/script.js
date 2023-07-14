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
        "nota": "8.5",
        "fechaReview": "2023/04/07",
        "review":"King Geedorah es un monstruo espacial, así que no esperes hip-hop convencional. Este personaje de MF Doom aterroriza a los habitantes de la Tierra mientras produce beats, ambos elementos con una gran influencia de la cultura japonesa. Varias canciones se basan en una escala pentatónica oriental y utilizan instrumentos tradicionales (aunque modificados para tener un estilo más moderno) y aprovechan samples de películas niponas. Es precisamente de este medio, de la saga de películas japonsesas de Godzilla, de la que nace originalmente el personaje de King Geedorah: un monstruo espacial de tres cabezas cuyo tormento e invasión de nuestro planeta es relatado desde el punto de vista de los inútiles intentos de resistencia humana mediante el uso de samples en canciones o canciones enteras solo con conversaciones de personajes, como es el caso de la pista de 5 minutos <strong>Monster Zero</strong>. Tanto el estilo musical como la ambientación me parecen impecables. <strong>Anti-Matter</strong>, <strong>I Wonder</strong> y <strong>The Fine Print</strong> son mis favoritas, las que menos han sido <strong>No Snakes Alive</strong>, <strong>One Smart Nigger</strong> y <strong>The Final Hour</strong>",
        "link":"1mrhahrlJu5JfzgeV6Cy8t"
    },
    {
        "titulo": "1000 gecs",
        "id": "1000gecs",
        "artista": "100 gecs",
        "duracion": "23",
        "fechaSalida": "2019/02/31",
        "nota": "",
        "fechaReview": "2023/04/21",
        "review":"",
        "link":"2uhB1KivbFnlkARpbd0Cvu"
    },
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
        "titulo": "Cuatro Chavales",
        "id": "cuatrochavales",
        "artista": "Carolina Durante",
        "duracion": "34",
        "fechaSalida": "2022/01/27",
        "nota": "",
        "fechaReview": "2023/05/12",
        "review":"",
        "link":"164QvBwpVSTy3joQXLwcEE"
    },
    {
        "titulo": "Préstame Un Sentimiento",
        "id": "prestameunsentimiento",
        "artista": "Cupido",
        "duracion": "28",
        "fechaSalida": "2019/02/14",
        "nota": "",
        "fechaReview": "2023/05/15",
        "review":"",
        "link":"7veKXYhZXIb5glMwXSVvWr"
    },
    {
        "titulo": "ZABA",
        "id": "zaba",
        "artista": "Glass Animals",
        "duracion": "06",
        "fechaSalida": "2014/06/03",
        "nota": "",
        "fechaReview": "2023/05/15",
        "review":"",
        "link":"14IOe7ahxQPTwUYUQX3IFi"
    },
    {
        "titulo": "First Year",
        "id": "firstyear",
        "artista": "Latadenata",
        "duracion": "69",
        "fechaSalida": "2023/02/21",
        "nota": "",
        "fechaReview": "2023/05/17",
        "review":"",
        "link":"3A5hTSyP6iu4JuQJ5ojuJB"
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
        "titulo": "The Life Of Pablo",
        "id": "thelifeofpablo",
        "artista": "Kanye West",
        "duracion": "66",
        "fechaSalida": "2016/06/10",
        "nota": "5",
        "fechaReview": "2023/05/28",
        "review":"Caracterizado por sus uso de samples crudos, sonidos tecnológicos y etéreos, y temática religiosa pero a la vez egocéntrica, este disco es como tantos otros en la discografía de Ye: consigue tener buenas canciones a base de tener muchas canciones. Y aunque no es Follow God o Donda con dos o tres canciones recuperables, tampoco es Graduation donde solo hay un par de fallos. En mi opinión este álbum es un 50/50, con canciones que rozan el góspel como <strong>Ultralight Beam</strong> y <strong>Low Lights</strong> capaces de dormir a un paquidermo encocado y otras con bases electrónicas que me parecen mucho mejores. De hecho he descubierto una de mis nuevas canciones favoritas de Kanye, <strong>Saint Pablo</strong>, que junto con <strong>Famous</strong>, <strong>Waves</strong> y <strong>30 Hours</strong> han sido lo mejor que ha ofrecido este álbum y definitivamente de lo mejor de Kanye. Por el otro lado tenemos canciones como <strong>Fade</strong>, <strong>Wolves</strong> o <strong>Facts</strong> que son, junto a las ya mencionadas como góspel, las que menos me han gustado. Cabe añadir que, auqnue ya había escuchado <strong>Pt. 2</strong> antes no me había parecido tan buena hasta que la escuché seguida después de <strong>Father Stretch My Hands Pt. 1</strong> y me he reconciliado con el hecho de que gran parte de esta es en realidad otra canción sampleada (por no decir robada en este punto) para solo disfrutar escuchándola.",
        "link":"4xM1pUHZp9HsuKNxyOQDR0"
    },
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
    {
        "titulo": "Strange Fiction",
        "id": "strangefiction",
        "artista": "DEMONDICE",
        "duracion": "30",
        "fechaSalida": "2019/08/23",
        "nota": "4",
        "fechaReview": "2023/06/06",
        "review": "En media horita se recopilan algunas de las canciones más bonitas de Demondice junto a una de las peores, que consigue dejar tan mal sabor de boca que arruina el resto del álbum. <strong>Egosa</strong>, <strong>Tsukuribanashi</strong> y <strong>Appasayo</strong> son tres de mis canciones favoritas de Karen y las estas tres obras infravaloradas juntas componen un tercio del álbum. Entre otras cosas también están la especie de intro de anime que es <strong>Strange Fiction</strong> y su mucho mejor versión instrumental. Pero a todo esto se interpone el horror que es <strong>Necessary Evil</strong>, que si no es la peor canción de Demondice queda cerca de ello, y solo eso hace la escucha cuesta arriba.",
        "link": "59Rvp0vUaxZO5OgNxCSyTN"
    },
    {
        "titulo": "Rockport Espacial",
        "id": "rockportespacial",
        "artista": "Kidd Keo",
        "duracion": "17",
        "fechaSalida": "2020/07/12",
        "nota": "9.5",
        "fechaReview": "2023/07/05",
        "review": "Un EP de 5 canciones muy sólido y fresco que mezcla el trap por el que es conocido Kidd Keo con house y trance por parte de ambos productores invitados (Enry-K y Yay). Esto nos deja una escucha muy novedosa y refrescante basada en esta mezcla de estilos que casa a la perfección. Las canciones no suenan demasiado distintas entre sí, pero no es algo malo ya que son todas muy buenas y son poquitas canciones. Es por esto que tampoco soy capaz de decir que una canción me haya gustado más o menos, a excepción de <strong>Ma Vie</strong> que sobresale ligeramente.",
        "link": "1RHKamkIrSEQAIUfsbYXvB"
    },
    {
        "titulo": "Rockport Espacial 2",
        "id": "rockportespacial2",
        "artista": "Kidd Keo",
        "duracion": "19",
        "fechaSalida": "2021/10/07  ",
        "nota": "4",
        "fechaReview": "2023/07/05",
        "review": "Esta vez el EDM no es el enfoque principal del álbum, aunque hay un par de canciones que mantienen los drops de house de Rockport Espacial la mayoría de las canciones tienen un estilo distinto, más cercano al trap o al pop. Me parece que pierde la identidad house y trance para dar paso a simplemente proyectos de trap con un fuerte toque electrónico. No suenan mal pero no es lo que busco en una segunda parte de Rockport Espacial. <strong>Soy Así (Summer Mix)</strong> y <strong>Drifting & Burning</strong> son las que más me han gustado porque son las que mantienen esos drops de house, y <strong>Corrido Espacial</strong> y <strong>Yo Con Mi Man (Remix)</strong> son las que menos me han gustado porque son las que más se desvían del estilo del primer álbum.",
        "link": "7eIU95LtCeZ3Ud3Lg5z4k6"
    },
    
*/
