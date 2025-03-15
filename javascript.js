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

function mostrarAlerta() {
    Swal.fire({
        title: 'Eu sei :)',
        confirmButtonText: 'Fechar',
        background: '#1e1e1e', // Cor de fundo escura
        color: '#ffffff', // Cor do texto
        confirmButtonColor: '#44444', // Cor do botão de confirmação
    });
}