import { useEffect, useState } from 'react'
import './style.css'

export function Sugestao(){
    const [ Sugestao, SetSugestao] = useState([])
   const [limitUsers, setLimitUsers] = useState(5)
   const slice = Sugestao.slice(0, limitUsers)
    useEffect(() => {
        fetch(`https://api.github.com/users/Haylagabriele/following`)
        .then((response) => {
            return response.json()
        })
        .then((result) => {
            SetSugestao(result)
        })

        .catch((err) => {
            throw new Error(err)
        })

    }, [])

    return(
        <div className='container-sugestao'>
        <div className='header-sugestao'>
        <div className='user-elements'>
                   <img className='image-user-story'  src='https://avatars.githubusercontent.com/u/82326458?s=400&u=c168b2ab5d9ac2bd938fd7979a74b5adbbdcd0fc&v=4' />
           
            </div>
            <div className='user-infos-sugestao'>
                <div className='infos'>
                    <span>haylagabriele</span>
                    <p>Hayla Gabriele</p>
                </div>
                <button>Mudar</button>
            </div>    
        </div>
        <div className='header-main-sugestao'>
            <p>Sugestões para você</p>
            <span>Ver tudo</span>

        </div>
        {slice.map((Sugestao, key) => (
            <div className='infos-sugestao' key={key}>
            <img src={`https://github.com/${Sugestao.login}.png`} />

            <div className='info-segestao'>
                <span>{Sugestao.login}</span>
                <p>Seguido(a) por haylagabriele</p>

            </div>
            <button className='follow'>Seguir</button>

        </div>

        ))}

        <div className='user-sugestao'>
            

        </div>
        <div className='user-sugestao'>
            <div className='infos-sugestao'>
                <img src='https://avatars.githubusercontent.com/u/69767?v=4' />

                <div className='info-segestao'>
                    <span>SnowDev</span>
                    <p>Seguido(a) por haylagabriele</p>

                </div>
                <button className='follow'>Seguir</button>

            </div>

        </div>
        <div className='user-sugestao'>
            <div className='infos-sugestao'>
                <img src='https://avatars.githubusercontent.com/u/95761247?v=4' />

                <div className='info-segestao'>
                    <span>SnowDev</span>
                    <p>Seguido(a) por haylagabriele</p>

                </div>
                <button className='follow'>Seguir</button>

            </div>

        </div>
       
       <footer className='footer-sugetao'>
        
               <p>About &bull; Help &bull; Press &bull; API &bull; Jobs &bull; Privacy &bull; Terms &bull; Locations &bull; Top Accounts &bull; Hashtags &bull; Language</p>
                    <p>&copy; 2022 INSTAGRAM FROM FACEBOOK</p>
                  
       </footer>
        </div>
    )
}