const form_input = document.querySelector('form')


form_input.addEventListener('submit', function(event){
    event.preventDefault()


    let deg_cel = document.querySelector('.dig-cal').value


    if(deg_cel === ""){
        alert("pls input a number")
    }else{
        let out_put = (Number(deg_cel) * 1.8) + 32
        out_put = out_put.toFixed(2)



        document.querySelector('.output').value = Number(out_put)
    

    }
  

    // calculate
   

    

})