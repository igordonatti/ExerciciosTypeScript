/*Com base no exercício anterior, crie uma classe chamada 'ResetListener'. A classe deve ter um Listener para detectar o evento 'keydown'.
O Listener deve ser adicionado ao elemento 'document'. A função Listener deve checar se a tecla que foi apertada é o Alt Esquerdo,
caso isso aconteça, o formulário HTML do exercício anterior deve ser resetado.

Observações:

Quando um evento é detectado pelo Listener, um argumento que representa o evento é passado para a função do Listener.
Assim é possível checar todos os detalhes do evento que ocorreu, inclusive saber qual tecla foi apertada.

É preciso fazer um casting usando <HTMLFormElement> para transformar o elemento capturado pelo 'document.getElementByID()' em 
um elemento de formulário. Após isso, é possível usar a função 'reset()' para limpar os campos do formulário.

*/

//Resposta

class ResetListener{
    constructor(){
            document.addEventListener('keydown', ResetListener.resetarFormulario);
    }
    static resetarFormulario(e) : void{
        console.log(e)
        if(e.code == 'AltLeft'){
            let form : HTMLElement|null = document.getElementById('formulario');
            if(form !== null){
                (<HTMLFormElement> form).reset();
            }
        }

    }
}

const resetListener = new ResetListener();