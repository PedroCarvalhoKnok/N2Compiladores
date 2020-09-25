//var btnValida = document.getElementById("btnvalida");



function isValid(str) {
    if (str === null || str.length <= 0) return true;
    var cArr = str.split('');
    var stack = [];
    for (var c of cArr) {
        if (c === '[') stack.push(']');
        else if (c === '{') stack.push('}');
        else if (c === '(') stack.push(')');
        else if(c === '<') stack.push('>');
        else if (stack.length === 0 || c !== stack.pop()) return false;
    }
    if (stack.length === 0) return true;
    return false;

    //valida como uma pilha os caracteres de cada palavra
};




function validar(){

    var word = document.getElementById("txtPalavra").value;

    var validation = isValid(word.trim()); 

    var list = document.getElementById("lista").innerHTML;

    if(validation)
    {
    
        list = list +"<li>"+ word + " - é Valido" + "</li>";
    }
    else
    {
        list = list +"<li>"+ word + " - é Inválido" + "</li>";

    }


    document.getElementById("lista").innerHTML = list;
    
    
  


    // if(validation)
    // {
    // console.log(w + '-' + 'Válido');

    // }
    // else
    // {
    // console.log(w + '-' + 'Inválido');
    // }


}