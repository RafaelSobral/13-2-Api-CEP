
const cep = document.querySelector("#cep")

const showData = (result) => {
  for (const campo in result) {
    if (document.querySelector("#"+campo)) {
      document.querySelector("#"+campo).value = result[campo]
    }
    if (result != campo) {
      Alert("Digite um CEP válido!")
    }
  } 
}

cep.addEventListener("blur", (e) => {
  let search = cep.value.replace("-","")
  const options = {
    method: 'GET',
    mode: 'cors',
    cache: 'default'
  }
  
  fetch(`https://viacep.com.br/ws/${search}/json/`, options) 
  .then(response => { response.json()
    .then(data => showData(data))
  })
  .catch(e => console.log(`Deu erro, ${e}`))
})

/*
 TODO ACESSO A UMA API COM O FECTH, ELE RETORNA UMA PROMESSA (promise),
 SE DEU CERTO É ".then()", SE DEU ALGO ERRADO É ".catch()", PODE CONTER VÁRIOS THEN ANINHADO!
*/