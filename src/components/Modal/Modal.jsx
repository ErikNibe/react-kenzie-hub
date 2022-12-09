import { yupResolver } from "@hookform/resolvers/yup";
import { useContext } from "react";
import { useForm } from "react-hook-form"
import { TechContext } from "../../contexts/TechContext";
import { Button } from "../../styles/Button";
import { FormContainer } from "../../styles/FormContainer";
import { Input } from "../../styles/Input";
import { LabelText } from "../../styles/Label";
import { modalSchema } from "./modalSchema";
import { ModalBackground, ModalContainer, Select } from "./styles"

export const Modal = () => {
    
    const { addTechs, setAddTechs, setOpenModal, techInfo, setTechInfo, createTech, changeTech, deleteTech } = useContext(TechContext);

    const { register, handleSubmit, formState: {errors} } = useForm({
        resolver: yupResolver(modalSchema)
    });

    const submit = async (data) => {
        
        if(addTechs){
            await createTech(data);
        }
        else {
            await changeTech(data);
        }

        setAddTechs(false);

        setOpenModal(false);
    }

    const closeModal = () => {
        setAddTechs(false);

        setOpenModal(false);

        setTechInfo(null);
    }

    return (
        <ModalBackground>
            <ModalContainer>
                <div className="modal__header">
                    <h3>{addTechs ? "Cadastrar tecnologias" : "Tecnologia Detalhes"}</h3>

                    <button onClick={() => closeModal()}>X</button>
                </div>

                <FormContainer className=".form__modal" onSubmit={handleSubmit(submit)}>
                    <LabelText htmlFor="title">Nome</LabelText>
                    <Input 
                        type="text"
                        id="title"
                        placeholder="Digite o nome do projeto"
                        {...register("title")}
                        value={techInfo ? techInfo.title : undefined}
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