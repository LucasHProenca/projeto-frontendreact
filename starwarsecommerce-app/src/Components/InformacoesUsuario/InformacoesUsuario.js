import React from "react";
import { useState } from "react";
import { Form, FormContainer, Input, StyledLabel, SendButton } from "./informacoesUsuarioStyle";

const InformacoesUsuario = ({ mudarTela, setCart, removeItem}) => {
    const [nome, setNome] = useState("");

    const onChangeNome = (event) => {
        setNome(event.target.value);
    };

    const mostrarTelaHome = () => {
        if(nome !== "" && email !== "" && telefone !== "" &&  endereco !== ""){
            alert(`Obrigado por comprar conosco ${nome}.\n` + `Em breve enviaremos uma confirmação no e-mail ${email.toLowerCase()}.`)
            removeItem()
            setCart([])
            mudarTela("Home")
        } else {
            alert('Verifique se preencheu todos os campos')
        }
    }

    const [email, setEmail] = useState("");

    const onChangeEmail = (event) => {
        setEmail(event.target.value);
    };

    const [telefone, setTelefone] = useState("");

    const onChangeTelefone = (event) => {
        setTelefone(event.target.value)
    }

    const [endereco, setEndereco] = useState("");

    const onChangeEndereco = (event) => {
        setEndereco(event.target.value)
    }
    return (
        <FormContainer>
            <h1>Informações de Contato </h1>

            <Form>
                <StyledLabel htmlFor="nome">
                    Nome:
                    <Input id="nome" value={nome} onChange={onChangeNome} required />
                </StyledLabel>

                <StyledLabel htmlFor="email">
                    E-mail:
                    <Input id="email" value={email} onChange={onChangeEmail} required/>
                </StyledLabel>

                <StyledLabel htmlFor="telefone">
                    Telefone:
                    <Input
                        id="telefone"
                        value={telefone}
                        onChange={onChangeTelefone}
                        required
                    />
                </StyledLabel>

                <StyledLabel htmlFor="endereço">
                    Endereço:
                    <Input
                        id="endereço"
                        value={endereco}
                        onChange={onChangeEndereco}
                        required
                    />
                </StyledLabel>

                <SendButton onClick={mostrarTelaHome}>Finalizar Compra</SendButton>
            </Form>
        </FormContainer>
    )
}

export default InformacoesUsuario