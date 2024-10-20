import React from 'react'
import './newsletter.css'

const NewsLetter = () => {
  return (
    <div className='newsletter' id='newsletter' >
        <h2>S'inscrire  pour avoir Nos <br/> Bulletins d'information </h2>
        <form action="">
            <input type="text" placeholder='Entrer votre E-mail...' className='email' required/>
            <input type="submit" value="S'inscrire" 
                   className='bg-gradient-to-r from-indigo-700 via-purple-600 to-pink-600 sub_btn'/>
        </form>
    </div>
  )
}

export default NewsLetter
