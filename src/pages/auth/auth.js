export default function AuthPage({onClick, children}) {
    
    return (
        <main className="App-main app-container">
         <p>Форма входа</p>
 
         <button className="main-add-working-shift" onClick={onClick}>
           {children}
         </button>

       </main>   
    )
}
 