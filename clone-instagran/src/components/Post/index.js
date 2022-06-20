
import './style.css'
import {FiMoreHorizontal} from 'react-icons/fi'
import {IoMdHeartEmpty} from 'react-icons/io'
import {BsChat} from 'react-icons/bs'
import {FiSend} from 'react-icons/fi'
import {BsBookmark} from 'react-icons/bs'
import { IconContext } from 'react-icons/lib'
import {BsEmojiSmile} from 'react-icons/bs'

export function Post(){
    return(
     <>
     <header className='header-post'>
        <div className='infos-post'>
            <img className='img-header-post' src='https://avatars.githubusercontent.com/u/80930242?v=4' />

           <p>Miriam</p>
           
        </div>

        <FiMoreHorizontal/>

     </header>
     <div className='img-post'>
        
        <img src='https://avatars.githubusercontent.com/u/80930242?v=4'/>

     </div>

     <div className='footer-post'>
     <IconContext.Provider value={{size:'30px'}}>
        <section className='engagement-post'>
            <div className='icons-1'>
            <div className='icon'><BsChat/></div>
            <div className='icon'> <IoMdHeartEmpty/></div> 
            <div className='icon'><FiSend/></div>
            </div>
            <div className='icon'><BsBookmark/></div>
        </section>
        </IconContext.Provider>
        <section className='like'>
        <span>100 curtidas</span>
        </section>
        <div className='legend'>
        <p>
            <strong>Miriam</strong>
            Trocas necessárias para mudar sua vida 💎
        </p>
        </div>
        <div className='time-post'>
            <time>Há 1 hora</time>
        </div>
        <div className='comment'>
            <div className='fake-comment'>
                <IconContext.Provider value={{size:'25px'}}>
                    <div className='icon'>
                    <BsEmojiSmile/>
                    </div>        
            </IconContext.Provider>

            <input placeholder='Adicione um comentario...'/>    
        </div>
        <button>Publicar</button>
      </div> 
     </div>
     <div className='img-post'>
        
        <img src='https://avatars.githubusercontent.com/u/101683728?v=4'/>

     </div>

     <div className='footer-post'>
     <IconContext.Provider value={{size:'30px'}}>
        <section className='engagement-post'>
            <div className='icons-1'>
            <div className='icon'><BsChat/></div>
            <div className='icon'> <IoMdHeartEmpty/></div> 
            <div className='icon'><FiSend/></div>
            </div>
            <div className='icon'><BsBookmark/></div>
        </section>
        </IconContext.Provider>
        <section className='like'>
        <span>100 curtidas</span>
        </section>
        <div className='legend'>
        <p>
            <strong>Thiago</strong>
            Vamos ser Feliz
        </p>
        </div>
        <div className='time-post'>
            <time>Há 1 hora</time>
        </div>
        <div className='comment'>
            <div className='fake-comment'>
                <IconContext.Provider value={{size:'25px'}}>
                    <div className='icon'>
                    <BsEmojiSmile/>
                    </div>        
            </IconContext.Provider>

            <input placeholder='Adicione um comentario...'/>    
        </div>
        <button>Publicar</button>
      </div> 
     </div>
     
     
     </>

    )
}