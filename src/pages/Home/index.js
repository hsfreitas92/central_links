import './home.css'

export default function Home(){
  return(
    <div className="home-container">
      <h1>Sujeiro prog</h1>
      <span>Veja meus links 👇 </span>

      <main className="links">
        <session className="link-area">
          <a href="#">
            <p className="link-text">Canal youtube</p>
          </a>
        </session>

        <session className="link-area">
          <a href="#">
            <p className="link-text">Grupo telegram</p>
          </a>
        </session>

        <session className="link-area">
          <a href="#">
            <p className="link-text">Treinamento</p>
          </a>
        </session>
      </main>
    </div>
  )
}