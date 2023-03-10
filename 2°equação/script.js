function contar(){
    let a = document.getElementById('a').value;
    let b = document.getElementById('b').value;
    let c = document.getElementById('c').value;
      
     
    let delta  = (`${b**2 - 4*a*c} `);
    ri.innerHTML = `Delta = ${delta}`

    let  raiz = Math.sqrt(delta);
    let d = `${2*a}`;

    /*let x = [`${-b}, ${raiz}, ${2*a}`]*/
    let x1 = `${(-b + raiz) /d}` 
    let x2 = `${(-b - raiz) /d}`

    rx1.innerHTML = `x1= ${x1}`

    rx2.innerHTML = `x2= ${x2}`

    


    /*var dobro = numeros.map(Math.sqrt)*/
    

    

     
}