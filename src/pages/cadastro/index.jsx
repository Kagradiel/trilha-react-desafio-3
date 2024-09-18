import { Link } from "react-router-dom";
import { MdEmail, MdLock } from "react-icons/md";
import { FaUser } from "react-icons/fa";
import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";

import { useForm } from "react-hook-form";

import {
  Container,
  Title,
  Column,
  TitleCadastro,
  SubtitleCadastro,
  CriarText,
  Row,
  Wrapper,
  Rodape,
} from "./styles";
import { useState } from "react";

const Cadastro = () => {
  const [dadosFormulario, setDadosFormulario] = useState("");

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    reValidateMode: "onChange",
    mode: "onChange",
  });

  const onSubmit = (data) => setDadosFormulario(data);
  console.log(dadosFormulario);

  return (
    <>
      <Header />
      <Container>
        <Column>
          <Title>
            A plataforma para você aprender com experts, dominar as principais
            tecnologias e entrar mais rápido nas empresas mais desejadas.
          </Title>
        </Column>
        <Column>
          <Wrapper>
            <TitleCadastro>Comece agora grátis</TitleCadastro>
            <SubtitleCadastro>
              Crie sua conta e make the change._
            </SubtitleCadastro>
            <form onSubmit={handleSubmit(onSubmit)}>
              <Input
                placeholder="Nome completo"
                leftIcon={<FaUser />}
                name="name"
                control={control}
              />
              {errors.name && <span>Nome é obrigatório</span>}
              <Input
                placeholder="E-mail"
                leftIcon={<MdEmail />}
                name="email"
                control={control}
              />
              {errors.email && <span>E-mail é obrigatório</span>}
              <Input
                type="password"
                placeholder="Senha"
                leftIcon={<MdLock />}
                name="senha"
                control={control}
              />
              {errors.senha && <span>Senha é obrigatório</span>}

              <Button title="Entrar" variant="secondary" type="submit" />
            </form>
            <Row>
              <SubtitleCadastro>
                Ao clicar em "criar minha conta grátis", declaro que aceito as
                politicas de Privacidade e os termos de Uso da DIO.
              </SubtitleCadastro>
              <Link to="/login">
                <Rodape>
                  <p>Já tenho conta.</p>
                  <CriarText>Fazer login</CriarText>
                </Rodape>
              </Link>
            </Row>
          </Wrapper>
        </Column>
      </Container>
    </>
  );
};

export { Cadastro };
