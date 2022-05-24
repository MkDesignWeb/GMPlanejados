import { Container, Separador, TituloM, MarcCorM, Bfoto, Galeria, Imagem, Black } from './styles'
import {initializeApp} from 'firebase/app'
import { getFirestore, collection, getDocs } from 'firebase/firestore'
import { useState, useEffect } from 'react'
import Modal from '../Modal/index'


function Projetos() {

    const [modalOpen, setModalOpen] = useState(false)
    const setmodal = (f) => {
        if (f = true){
            setModalOpen(false)
        }
        
    }
   

    const firebaseConfig = initializeApp({
        apiKey: "AIzaSyBrohlbDLZgFAYPRu9Vx_30U09MumKlsn8",
        authDomain: "gmplanejados-projetos.firebaseapp.com",
        databaseURL: "https://gmplanejados-projetos-default-rtdb.firebaseio.com",  
        projectId: "gmplanejados-projetos", 
      }) 
    
      const [moveis, setMoveis] = useState([])
    
      const db = getFirestore(firebaseConfig)
      const MCollectionRef =  collection(db, 'Moveis')
    
      useEffect(() => {
        const getM = async () => {
          const data = await getDocs(MCollectionRef)
          setMoveis(data.docs.map((doc) => ({...doc.data(), id: doc.id})))
        } 
        getM()
      },[])
    

    return(
        <Container id='projetos'>
            <Modal setmodal={setmodal} modalOpen={modalOpen}/>
            <Separador />
            <TituloM>Veja nossos <MarcCorM>Projetos</MarcCorM></TituloM>
            <Galeria>
            {moveis.map((moveis) => {
                return(
                    <Bfoto onClick={() => {setModalOpen(true)}} key={moveis.id} >
                        <Imagem Mimg={moveis.img} />
                        <Black><h1>{moveis.titulo}</h1></Black>
                        
                    </Bfoto>
                )
            })}
            </Galeria>
        </Container>
    )
}

export default Projetos
