//Botão Não
function desvia(t){
    var btn = t;
    btn.style.position = 'absolute'
    btn.style.bottom = generatePosition(10,90)
    btn.style.left = generatePosition(10,90)
    }
        
    function generatePosition(min,max){
        return Math.random() * (max - min) + '%';
    }
    //

function sim(){
    alert("Eu sei :)")
}