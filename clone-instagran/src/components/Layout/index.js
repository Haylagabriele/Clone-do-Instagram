import { Post } from '../Post'
import { Story } from '../Story'
import { Sugestao } from '../Sugestao'

import './style.css'

export function Layout(){
    return(
        <>
        <div className='MainGrid'>
            <div className='first-column' style={{gridArea:"firstColumn"}}>
            <div className="box">

           < Story />
   
        </div>
        <div className="box" style={{margin:'30px 0'}}>
            <Post />

        </div>

            </div>
       
        <div className="suggestionBox" style={{gridArea:"secondColumn"}}>
           <Sugestao/>

        </div>

        </div>
        
        
        </>
        
    )
}