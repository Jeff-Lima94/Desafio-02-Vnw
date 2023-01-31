function saudacao() {
   console.log('Seja bem vindo')
   }
    saudacao();
   
   function helloFriend(nome) {
   console.log(`Olá ${nome}, seja bem vindo `)
   }
   helloFriend ('Jefferson');
   
   
   function pessoa(nome,idade,estiloMusical) {
   console.log(`Olá ${nome}, você tem ${idade} anos e gosta de ${estiloMusical}`)
   }
   pessoa('Jefferson',28,'Rock');
   
   function movieMusic (filme,musica){
   console.log(filme,musica)
   }
   movieMusic('Harry Potter','Always');
   
   function triple(a){
   return a * 3 ;
   }
   console.log(triple(2))
   
   
   
   
   var ehPar = function(numero) {
       if (numero % 2 == 0) {
           return true;
       } else {
           return false;
       }
   }
   
   
   console.log(ehPar(2))
   
   