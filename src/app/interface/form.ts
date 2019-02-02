export interface RegisterForm {
    email: string;
    username: string;
    password1: string;
    password2: string;
}

export interface LoginForm {
    email: string;
    password: string;
    token: string;
}

export interface RegisterState {
    active: boolean;
    color: string;
    message: string;
    errors: Array<any>;
}
