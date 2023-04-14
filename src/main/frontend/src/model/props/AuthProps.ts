import { AuthModel } from "../AuthModel"

export interface AuthProps {
    onLogin: (auth: AuthModel) => void
    onRegister: (auth: AuthModel) => void
    onLogout: () => void
}