document.addEventListener.apply("DOMContentLoaded", () => {
    const createButton = document.getElementById("createButton");
    createButton.addEventListener("click", () =>{
        const megnevezes = document.getElementById("megnevezes").value;
        const egysegara = document.getElementById("egysegara").value;
        const mennyiseg = document.getElementById("mennyiseg").value;
        const mennyisegiEgyseg = document.getElementById("mennyisegiEgyseg").value;
        const jsontext = `{"megnevezes":"${megnevezes}","egysegara":"${egysegara}","mennyiseg":"${mennyiseg}","mennyisegiEgyseg":"${mennyisegiEgyseg}"`;
        const json = JSON.parse(jsontext);
        console.log(json);
        let backendurl = "http://localhost:3000/fruit"
        let reponse = fetch(backendurl, {
            method: 'POST',
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(json)
        });
    });
});