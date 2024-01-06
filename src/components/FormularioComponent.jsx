
import { useForm } from "../hooks/useForm"

export const FormularioComponent = () => {
    const InicialForm = {
        userName: "",
        email: "",
        password: ""
    }
    const { formState,userName,email,password, onInputChange } = useForm(InicialForm)

    const onSubmit = (event) => {
        event.preventDefault()
        console.log(formState)
    }
    return (
        <form onSubmit={onSubmit}>
            <div className="form-group">
                <label htmlFor="userName">Usuario</label>
                <input
                    type="text"  // Cambiado de "email" a "text"
                    className="form-control"
                    name="userName"
                    placeholder="Ingrese Usuario"
                    value={userName}
                    onChange={onInputChange}
                />
            </div>
            <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                    type="email"  // Mantenido como "email"
                    className="form-control"
                    name="email"
                    placeholder="Ingrese Email"
                    value={email}
                    onChange={onInputChange}
                />
            </div>
            <div className="form-group">
                <label htmlFor="exampleInputPassword1">Password</label>
                <input
                    type="password"
                    className="form-control"
                    name="password"
                    placeholder="Password"
                    value={password}
                    onChange={onInputChange}
                />
            </div>
            <button
                type="submit"
                className="btn btn-primary">Enviar</button>
        </form>
    )
}
