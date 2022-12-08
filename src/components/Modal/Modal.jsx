import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form"
import { toast } from "react-toastify";
import { api } from "../../api/api";
import { Button } from "../../styles/Button";
import { FormContainer } from "../../styles/FormContainer";
import { Input } from "../../styles/Input";
import { LabelText } from "../../styles/Label";
import { modalSchema } from "./modalSchema";
import { ModalBackground, ModalContainer, Select } from "./styles"

export const Modal = ({ addTechs, setAddTechs, setOpenModal, techInfo, setTechInfo }) => {
    
    const { register, handleSubmit, formState: {errors} } = useForm({
        resolver: yupResolver(modalSchema)
    });

    const createTech = async (data) => {
        try {
            const response = await api.post("/users/techs", data);    
            
            if(response.status === 201){
                toast.success("A tecnologia foi criada com sucesso");
            }

        } catch (error) {
            toast.error("Desculpe, algo deu errado!");
        }
    }

    const changeTech = async (data) => {
        try {
            const response = await api.put(`/users/techs/${techInfo.id}`, data);

            if(response.status === 201){
                toast.success("A tecnologia foi alterada com sucesso");
            }

        } catch (error) {
            toast.error("Desculpe, algo deu errado!");
        }
    }

    const deleteTech = async () => {
        try {
            const response = await api.delete(`/users/techs/${techInfo.id}`);

            toast.success("Tecnologia deletada com sucesso");

            setOpenModal(false);
        } catch (error) {
            console.error(error)
        }
    }

    const submit = async (data) => {
        
        if(addTechs){
            await createTech(data);
        }
        else {
            await changeTech(data);
        }

        setOpenModal(false);
    }

    const closeModal = () => {
        setOpenModal(false);

        setAddTechs(false);

        setTechInfo(null);
    }

    return (
        <ModalBackground>
            <ModalContainer>
                <div className="modal__header">
                    <h3>Cadastrar tecnologia</h3>

                    <button onClick={() => closeModal()}>X</button>
                </div>

                <FormContainer className=".form__modal" onSubmit={handleSubmit(submit)}>
                    <LabelText htmlFor="title">Nome</LabelText>
                    <Input 
                        type="text"
                        id="title"
                        placeholder="Digite o nome do projeto"
                        {...register("title")}
                        value={techInfo && techInfo.title}
                    />
                    {errors.title && <span>{errors.title.message}</span>}

                    <LabelText htmlFor="title">Selecionar módulo</LabelText>
                    <Select {...register("status")} defaultValue={techInfo ? techInfo.status : ""}>
                        <option value="" hidden>Escolha o módulo</option>
                        <option value="Iniciante">Iniciante</option>
                        <option value="Intermediário">Intermediário</option>
                        <option value="Avançado">Avançado</option>
                    </Select>
                    {errors.status && <span>{errors.status.message}</span>}

                    {addTechs ?
                    
                        <Button btnType={"pink"} btnSize={"big"} type="submit">Cadastrar tecnologias</Button>
                    :
                        <div className="btn__saveChanges__container">
                            <Button btnType={"wine"} btnSize={"modal-wine"} type="submit">Salvar alterações</Button>

                            <Button btnType={"gray"} btnSize={"modal-gray"} type="button" onClick={() => deleteTech()}>Excluir</Button>
                        </div>
                    }
                </FormContainer>

            </ModalContainer>
        </ModalBackground>
    )
}