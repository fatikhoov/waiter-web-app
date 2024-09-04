import TextField from '@mui/material/TextField';

export default function AuthPage({onClick, children}) {
    
    return (
        <main className="App-main app-container">
         <p>Форма входа</p>
         <TextField id="outlined-login" label="Логин" variant="outlined" color="primary" focused />
         <TextField id="outlined-password" label="Пароль" variant="outlined" color="primary" />
         <button className="main-add-working-shift" onClick={onClick}>
           {children}
         </button>

       </main>   
    )
}
 