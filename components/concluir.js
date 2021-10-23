
const BotaoConcluir = () => {

    const botaConcluir = document.createElement('button')
    botaConcluir.addEventListener('click', tarefaConcluir)
    botaConcluir.innerText = "Concluir"
    botaConcluir.classList.add('btnsConcluir')

    return botaConcluir
}

const tarefaConcluir = (event) => {
    const botaConcluir = event.target
    const tarefaCompleta = botaConcluir.parentElement
    tarefaCompleta.classList.toggle('done')
    tarefaCompleta.classList.add('feito')
}

export default BotaoConcluir