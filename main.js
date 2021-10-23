import BotaoConcluir from './components/concluir.js'
import BotaoDeletar from './components/deletar.js'

const buttonForm = document.querySelector('[data-form-button]')

function novaTarefa(event){
  event.preventDefault()
  const inputForm = document.querySelector('[data-input]')
  const valor = inputForm.value;

  const listTarfas = document.querySelector('[data-list]')

  const task = document.createElement('li')
  task.classList.add('task')
  listTarfas.appendChild(task)

  const content = `<p class="content"> ${valor} </p>`
  task.innerHTML = content
  task.classList.add('task')

  task.appendChild(BotaoConcluir())
  task.appendChild(BotaoDeletar())
  listTarfas.appendChild(task)

  inputForm.value = " ";
}

buttonForm.addEventListener('click', novaTarefa)
















