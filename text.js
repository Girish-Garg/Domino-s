
 document.addEventListener("DOMContentLoaded", (event) => {
  const textcontainer = document.querySelectorAll("#uni > p")
  Array.from(textcontainer).forEach(Element =>{
    let tukde = Element.innerText.split('');
    let data = '' ;
    console.log(tukde);
  Array.from (tukde).forEach(element => {
  if(element == '' || element == '\n' || element == '\r'){

  }
      else{
      data  +=  `<span>${element}</span>`  
      } 
      
    });
    console.log(data)
    Element.innerHTML = data;
  })

  console.log(textcontainer)


 });
