const cls = ['fa-solid',  'fa-coffee', 'fa-user', 'fa-diamond', 'fa-star', 'fa-microphone', 'fa-heart']

function showFormData(oForm) {


          //TODO _*_*_*_*_*_*_*_*_*_*_ChildNode 1_*_*_*_*_*_*_*_*_*_*_ \\
  // grab the input and assign the text to the firstReturn element (in the return table)
  const icon1 = document.getElementById("firstReturn").textContent = oForm.elements[0].value;
  // remove the classes from the firstIcon element, then add the input bound to icon1 from above
  document.getElementById("firstIcon").classList.remove(...cls);
  document.getElementById("firstIcon").classList.add(icon1)
  
  // bind the user's colorChoice to colorChoice as a hex string and assign it to the background color of the aSecondIcon element
  let colorChoice = oForm.elements[1].value;
  document.getElementById('aFirstIcon').style.background = colorChoice;


  console.log(oForm.elements[0].value)
  console.log(oForm.elements[1].value)
  console.log(oForm.elements[2].value)
  console.log(oForm.elements[3].value)
  console.log(oForm.elements[4].value)
  console.log(oForm.elements[5].value)
  console.log(oForm.elements[6].value)
  console.log(oForm.elements[7].value)
  console.log(oForm.elements[8].value)
  console.log(oForm.elements[9].value)
  console.log(oForm.elements[10].value)
  console.log(oForm.elements[11].value)
  console.log(oForm.elements[12].value)

          //TODO _*_*_*_*_*_*_*_*_*_*_ChildNode 2_*_*_*_*_*_*_*_*_*_*_ \\
  // grab the input and assign the text to the firstReturn element (in the return table)
  const icon2 = document.getElementById("secondReturn").textContent = oForm.elements[0].value;
  // remove the classes from the firstIcon element, then add the input bound to icon1 from above
  document.getElementById("secondIcon").classList.remove(...cls);
  document.getElementById("secondIcon").classList.add(icon2)
  
  // bind the user's colorChoice to colorChoice as a hex string and assign it to the background color of the aSecondIcon element
  let colorChoice2 = oForm.elements[3].value;
  document.getElementById('aSecondIcon').style.background = colorChoice2;



            //TODO _*_*_*_*_*_*_*_*_*_*_ChildNode 3_*_*_*_*_*_*_*_*_*_*_ \\
  // grab the input and assign the text to the firstReturn element (in the return table)
  const icon3 = document.getElementById("thirdReturn").textContent = oForm.elements[0].value;
  // remove the classes from the firstIcon element, then add the input bound to icon1 from above
  document.getElementById("thirdIcon").classList.remove(...cls);
  document.getElementById("thirdIcon").classList.add(icon3)
  console.log(oForm.elements[5].value.value)
  // bind the user's colorChoice to colorChoice as a hex string and assign it to the background color of the aSecondIcon element
  let colorChoice3 = oForm.elements[5].value;
  document.getElementById('aThirdIcon').style.background = colorChoice3;



          //TODO _*_*_*_*_*_*_*_*_*_*_ChildNode 4_*_*_*_*_*_*_*_*_*_*_ \\
  // grab the input and assign the text to the firstReturn element (in the return table)
  const icon4 = document.getElementById("fourthReturn").textContent = oForm.elements[0].value;
  // remove the classes from the firstIcon element, then add the input bound to icon1 from above
  document.getElementById("fourthIcon").classList.remove(...cls);
  document.getElementById("fourthIcon").classList.add(icon4)
  
  // bind the user's colorChoice to colorChoice as a hex string and assign it to the background color of the aSecondIcon element
  let colorChoice4 = oForm.elements[7].value;
  console.log(colorChoice4)
  document.getElementById('aFourthIcon').style.background = colorChoice4;



          //TODO _*_*_*_*_*_*_*_*_*_*_ChildNode 5_*_*_*_*_*_*_*_*_*_*_ \\
  // grab the input and assign the text to the firstReturn element (in the return table)
  const icon5 = document.getElementById("fifthReturn").textContent = oForm.elements[0].value;
  // remove the classes from the firstIcon element, then add the input bound to icon1 from above
  document.getElementById("fifthIcon").classList.remove(...cls);
  document.getElementById("fifthIcon").classList.add(icon1)
  
  // bind the user's colorChoice to colorChoice as a hex string and assign it to the background color of the aSecondIcon element
  let colorChoice5 = oForm.elements[9].value;
  document.getElementById('aFifthIcon').style.background = colorChoice5;



          //TODO _*_*_*_*_*_*_*_*_*_*_ChildNode 6_*_*_*_*_*_*_*_*_*_*_ \\
  // grab the input and assign the text to the firstReturn element (in the return table)
  const icon6 = document.getElementById("sixthReturn").textContent = oForm.elements[0].value;
  // remove the classes from the firstIcon element, then add the input bound to icon1 from above
  document.getElementById("sixthIcon").classList.remove(...cls);
  document.getElementById("sixthIcon").classList.add(icon6)
  
  // bind the user's colorChoice to colorChoice as a hex string and assign it to the background color of the aSecondIcon element
  let colorChoice6 = oForm.elements[11].value;
  document.getElementById('aSixthIcon').style.background = colorChoice6;



}





