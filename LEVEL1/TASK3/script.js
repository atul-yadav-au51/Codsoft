let string = ""
const buttons= document.querySelectorAll('.button')
Array.from(buttons).forEach((button)=>{
    button.addEventListener('click',(e)=>{
        if(e.target.innerHTML === '='){
            string=eval(string)
            document.querySelector('input').value=string
        }
        else if(e.target.innerHTML === 'AC'){
            string=""
            document.querySelector('input').value=string
        }
        else if(e.target.innerHTML === 'Del'){
            string=string.slice(0,string.length-1)
            document.querySelector('input').value=string
        }
        else if(e.target.innerHTML == 'Off'){
            window.close()

        }
        
        else{
            
            string=string+e.target.innerHTML;
           document.querySelector('input').value=string}
    })
})