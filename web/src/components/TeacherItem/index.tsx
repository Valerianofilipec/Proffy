import React from 'react'

import './styles.css'

import whatsappIcon from '../../assets/images/icons/whatsapp.svg'

function TeacherItem(){
  return (
    <article className='teacher-item'>
      <header>
        <img
          src='https://avatars0.githubusercontent.com/u/11735621?s=460&u=53ced764fe09e89bf2e6d4b3acb771ea549c17b2&v=4'
          alt='Valeriano Filipe'
        />
        <div>
          <strong>Valeriano Filipe</strong>
          <span>Quimica</span>
        </div>
      </header>
      <p>
        Aulas de Matemática bem estruturadas e expositiva.
        <br /> <br />
        Estude para o Exame no Melhor Curso com o Melhor Preço.
        Pague em até 12x. Exame com a melhor preparação. Parcelas por menos de
        15 euros.
      </p>

      <footer>
        <p>
          Preço/hora
          <strong>€ 15,00</strong>
        </p>
        <button type='button'>
          <img src={whatsappIcon} alt='Whatsapp' />
          Entrar em Contato
        </button>
      </footer>
    </article>
  )
}

export default TeacherItem
