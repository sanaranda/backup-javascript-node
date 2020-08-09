function noParesDeContarImparesHasta(numero){
    let cont=0;
    for(let i=0; i<numero ; i++){
        if((i%2)!=0){
           cont=cont+1; 
        }
    }
return cont;
}

console.log(noParesDeContarImparesHasta(5));
