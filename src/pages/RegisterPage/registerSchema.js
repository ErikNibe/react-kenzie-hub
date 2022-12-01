import * as yup from "yup";

export const loginSchema = yup.object().shape({
  name: yup.string().required("O nome é obrigatório"),
  email: yup
    .string()
    .required("O e-mail é obrigatório")
    .email("O email digitado é inválido"),
  password: yup
    .string()
    .required("A senha é obrigatória")
    .min(8, "A senha precisa conter pelo menos 8 caracteres")
    .matches(/(?=.*[a-zA-Z])/, "A senha precisa conter pelo menos uma letra")
    .matches(/(?=.*?[0-9])/, "A senha precisa conter pelo menos um número")
    .matches(/(?=.*?[#?!@$%^&*-])/, "A senha precisa conter pelo menos um caractere especial"),
  confirmPassword: yup
    .string()
    .required("É necessário confirmar a senha")
    .oneOf([yup.ref("password")], "As senhas precisam ser iguais"),
  bio: yup
    .string()
    .required("A bio é obrigatória"),
  contact: yup
    .string()
    .required("A forma de contato é obrigatória"),
  course_module: yup
    .string()
    .required("O módulo é obrigatório"),
});
