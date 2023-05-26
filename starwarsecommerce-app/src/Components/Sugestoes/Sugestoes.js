import React from "react";
import { useState } from "react";
import { Form, FormContainer, Input, StyledLabel, SendButton, TextArea } from "./sugestoesStyle";

const Sugestoes = ({mudarTela}) => {
    const [nome, setNome] = useState("");

    const onChangeNome = (event) => {
        setNome(event.target.value);
    };

    const [email, setEmail] = useState("");

    const onChangeEmail = (event) => {
        setEmail(event.target.value);
    };

    const [sugestao, setSugestao] = useState("");

    const onChangeSugestao = (event) => {
        setSugestao(event.target.value)
    }

    const mostrarTelaHome = () => {
        if(nome !== "" && email !== "" && sugestao !== ""){
            alert(`Agradecemos pela sua sugestão ${nome}.\n` + `Quando este produto estiver disponível em nossa loja vamos te notificar no e-mail ${email.toLowerCase()}.`)
            mudarTela("Home")
        } else {
            alert('Verifique se preencheu todos os campos')
        }
    }

    return(
        <FormContainer>
            <h1>Fale Conosco</h1>

            <Form>
                <StyledLabel htmlFor="nome">
                    Nome:
                    <Input id="nome" value={nome} onChange={onChangeNome} required />
                </StyledLabel>

                <StyledLabel htmlFor="email">
                    E-mail:
                    <Input id="email" value={email} onChange={onChangeEmail} required/>
                </StyledLabel>

                <StyledLabel htmlFor="sugestão">
                    Sugestão:
                    <TextArea
                        id="sugestão"
                        value={sugestao}
                        onChange={onChangeSugestao}
                        cols = "30"
                        rows={10}
                        placeholder = "Insira aqui opções de brinquedos que você gostaria de ver na nossa loja."
                        required
                    />
                </StyledLabel>

                <SendButton onClick={mostrarTelaHome}>Enviar Sugestão</SendButton>
            </Form>
        </FormContainer>
    )
}

export default Sugestoes