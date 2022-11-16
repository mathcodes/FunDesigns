const cls = ['fa-solid', 'fa', 'fa-coffee', 'fa-user']
function showFormData(oForm) {

  const f1 = document.getElementById("firstReturn").textContent = oForm.elements[0].value;
  document.getElementById("firstIcon").classList.remove(...cls);
  document.getElementById("firstIcon").classList.add(f1)
// fa-solid fa-user

  return(f1);
}





