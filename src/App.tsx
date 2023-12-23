import Brand from "./assets/img/5119xfYm0EL._AC_SL1250_.jpg"
import './App.css'
import { useEffect } from "react";

function App() {
  
  const handleModal = (modalShow: Boolean) => {
    const modal: HTMLDivElement | null = document.querySelector('.modal');

    
    if (modal) {
      if (modalShow) {
        modal.style.display = 'grid';
      } else {
        modal.classList.add('close-modal-animation');
        setTimeout(() => {
          modal.style.display = 'none';
          window.location.reload();
        }, 1000);
      }
      
    } else {
        console.error('Modal not found');
    }
  }

  const handleFormSubmit =  (event: React.SyntheticEvent) => {
    event.preventDefault();
    const target = event.target as typeof event.target & {
      email: { value: string };
    }
    
    const email = target.email.value;
    
    if (email) {
      const card: HTMLDivElement | null = document.querySelector('.card');
      if (card) {
        card.innerHTML = "<h2>Thanks for your subscription</h2>"
        setTimeout(() => {
          handleModal(false)
        }, 3000);
      }  
    }
  }

  useEffect(() => {
    const modal: HTMLDivElement | null = document.querySelector('.modal');

    modal?.addEventListener('click', (event: any) => {
      if (event.target.classList.contains('modal')) {
        handleModal(false);
      }
    })

    return (
      modal?.removeEventListener('click', () => {return;})
    )
  },[])
  return (
    <>
      <div className="container">
        <button onClick={() => handleModal(true)}>Subscribe</button>
        <div className="modal">
          <div className="card">
            <i className="fa-solid fa-xmark" id="close" onClick={() => handleModal(false)}></i>
            <div className="brand">
              <img src={Brand} alt="brand" />
            </div>
            <div className="info">
              <h2>Subscribe To Our Newsletter</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus cumque ducimus dignissimos animi placeat, molestias fugiat velit facilis nesciunt repellat et, iure facere quia ipsa sit numquam eius aut! Dolores!</p>
              <form action="#" onSubmit={(e: React.SyntheticEvent) => handleFormSubmit(e)}>
                <input type="email" name="email" id="email" placeholder="Email Address" />
                <input type="submit" value="Subscribe"/>
              </form>
            </div>
            
          </div>
        </div>
      </div>
    </>
  )
}

export default App
