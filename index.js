async function getAdvice(){
  let url = 'https://api.adviceslip.com/advice';
  try{
    let response = await fetch(url,{
      method : 'GET'
    });
    return await response.json()
  }
  catch(error){
    console.log(error);
  }
}

async function addAdvice(){
  let advice = await getAdvice();
  let adviceNumber = advice.slip.id;
  let adviceMessage = advice.slip.advice;

  document.getElementById('number-advice').innerText = adviceNumber;
  document.getElementById('advice').innerText = adviceMessage ;
}

document.onload = addAdvice();
