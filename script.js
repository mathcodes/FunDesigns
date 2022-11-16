const cls = ['fa-solid',  'fa-coffee', 'fa-user']
function showFormData(oForm) {

  const icon1 = document.getElementById("firstReturn").textContent = oForm.elements[0].value;
  document.getElementById("firstIcon").classList.remove(...cls);
  let newClass1 = "fa-solid " + icon1 + "";
  console.log({newClass1})
  const color1 = document.getElementById("firstIcon").classList.add(icon1)
  
  // const color1 = document.getElementById("favcolor").textContent = oForm.elements[0].value;
  // document.getElementById("secondIcon").value = color1;
  // document.getElementById("favcolor").setAttribute("value",color1);
  let colorChoice = oForm.elements[1].value;
  console.log({colorChoice})
  // document.getElementById("favcolor").setAttribute("value","");
  document.getElementById('aSecondIcon').style.background = colorChoice;
  return(f1);
}





