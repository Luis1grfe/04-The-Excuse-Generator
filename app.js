window.onload = function(){
    let paragraph = document.querySelector('#excuse');
    console.log(paragraph.innerHTML);
    paragraph.innerHTML = answer();
    }
let who = ['the dog','my granma','his turtle','my bird'];
let what = ['eat','pissed','crushed','broked'];
let when = ['before the class','right in time','when I finished','during my lunch','while I was praying'];
function answer(){
    let position = Math.floor((Math.random() * 5) + 0);
    var print = '';
    if (position<4){
        var whoAux = who[position];
        var whatAux = what[position];
        var whenAux = when[position];
        print = whoAux+" "+whatAux+" "+whenAux+", position number = "+position;
    }
    else if (position==4){
        var whoAux = who[position-1];
        var whatAux = what[position-1];
        var whenAux = when[position];
        print = whoAux+" "+whatAux+" "+whenAux+", position number = "+position;
    }
    return print;
}