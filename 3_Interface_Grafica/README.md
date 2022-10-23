## Interface Gráfica

1. Construa um formulário HTML que contenha campos de Nome, Email, Senha e Data de Nascimento e um botão para enviar os dados
usando os inputs mais adequados para cada tipo.
Coloque um id para o formulário. 
No final do body adicione
o código ```<script src="e2.js"></script>``` que será usado para o próximo exercício.

2. Com base no exercício anterior, crie uma classe chamada 'ResetListener'. A classe deve ter um Listener para detectar o evento 'keydown'.
O Listener deve ser adicionado ao elemento 'document'. A função Listener deve checar se a tecla que foi apertada é o Alt Esquerdo,
caso isso aconteça, o formulário HTML do exercício anterior deve ser resetado.<br><br>
Observações:<br><br>
Quando um evento é detectado pelo Listener, um argumento que representa o evento é passado para a função do Listener.
Assim é possível checar todos os detalhes do evento que ocorreu, inclusive saber qual tecla foi apertada.<br><br>
É preciso fazer um casting usando <HTMLFormElement> para transformar o elemento capturado pelo 'document.getElementByID()' em 
um elemento de formulário. Após isso, é possível usar a função 'reset()' para limpar os campos do formulário.
