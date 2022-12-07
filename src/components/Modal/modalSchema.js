import * as yup from "yup";

export const modalSchema = yup.object().shape({
    title: yup.string().required("O nome do projeto é obrigatório"),
    status: yup.string().required("O status é obrigatório")
})