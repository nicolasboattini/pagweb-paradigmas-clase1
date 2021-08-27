let app = {};
app.ucp = (() => {
    let self = {};

    self.version = '1.0';
    self.generator = () => {
        console.log("generator");
    }
    self.init = () => {
        console.log("init");
    }

    self.generar = (numero) => {
        for (let i = 0; i < numero; i++){
            let btn = document.createElement("button");
            btn.innerHTML = "Boton" + (i+1);
            btn.className = "btn btn-primary col-3 mt-2 me-2";

            let divMedio = document.getElementById("botones");
            divMedio.appendChild(btn);
        }
        
    }
    

    return self;
})();



//var b = () => {}