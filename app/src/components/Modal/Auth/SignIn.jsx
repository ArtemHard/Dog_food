import style from './signin.module.css'

const SignIn = ({children}) => {
    

    const submitHandler = async (e) => {
        e.preventDefault()
        const formData = Object.fromEntries(new FormData(e.target).entries());
        console.log(formData)
        const response = await fetch('https://api.react-learning.ru/signin', {
            method: "POST",
            headers:{
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formData),
        })
        if (response.ok) {
            const userFromServer = await response.json()
            // получаем токен и надо засунуть кудато
        }
    }

    return (
        <>
            <form className={style.modal__form} onSubmit={submitHandler} >
                <div className={style.modal__inner}>
                    <h5 className={style.modal__inner__textLogIn}>Log In</h5>
                    <input type="email" name='email' placeholder='email' autoComplete ="email" />
                    <input type="password" name='password' placeholder='password' autoComplete ="off" />
                    <button className={style.modal__inner__btnConfirm} type="submit"> Sign In</button>
                </div>
            </form>
            {children}
         </>
    )
}

export default SignIn