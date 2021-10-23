
const BotaoDeletar = ()=>{

    const botaoDeletar = document.createElement('button')
    botaoDeletar.addEventListener('click', deletarTarefa)
    botaoDeletar.innerText = "Deletar"
    botaoDeletar.classList.add('btnDeletar')

    return botaoDeletar
  }

  const deletarTarefa = (event)=>{
    const deletar = event.target
    const btnDeletar = deletar.parentElement
    btnDeletar.remove()
  }

  export default BotaoDeletar