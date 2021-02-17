import React, {useState, useEffect} from 'react';
import {Form, Col, Card, Button} from 'react-bootstrap';
import api from '../../../services/api';
import {toast} from 'react-toastify';
import {Link} from 'react-router-dom';

interface Usuario{
    cpf:string,
    login:string,
    nome:string,
    senha:string,
}

const Home:React.FC = () =>{
    const intialForm = {cpf:"",login:"",nome:"",senha:""}
    const [form, setForm] = useState<Usuario>(intialForm)

    function continuar(){
        api.post("/usuarios", form)
        .then(res=>{
            toast.success("Usuário cadastrado com sucesso.")
            console.log("sucesso")
        }, err =>{
            toast.error("Não foi possível cadastrar o usuário.")
            console.log("erro")
        })
        
        
    }

    return(
        <>  
            <Card>
                <Card.Body>
                    <Card.Title>Peça sua conta e cartão de crédito Gama Bank</Card.Title>
                    <Form.Row>
                        <Form.Group as={Col} xs={12} md={12}>
                            <Form.Control value={form.cpf} onChange={(e) => setForm({...form,cpf:e.target.value})} type="text" placeholder="Digite seu CPF"/>
                        </Form.Group>
                        <Form.Group as={Col} xs={12} md={12}>
                            <Form.Control value={form.nome} onChange={(e) => setForm({...form,nome:e.target.value})} type="text" placeholder="Nome Completo"/>
                        </Form.Group>
                        <Form.Group as={Col} xs={12} md={12}>
                            <Form.Control value={form.login} onChange={(e) => setForm({...form,login:e.target.value})} type="text" placeholder="Nome de Usuário"/>
                        </Form.Group>
                        <Form.Group as={Col} xs={12} md={12}>
                            <Form.Control value={form.senha} onChange={(e) => setForm({...form,senha:e.target.value})} type="password" placeholder="Digite sua Senha"/>
                        </Form.Group>
                        <Form.Group as={Col} xs={12} md={12}>
                            <Form.Control type="password" placeholder="Confirme sua Senha"/>
                        </Form.Group>
                        <Button onClick={continuar}>Continuar</Button>
                        <Link to="/login">
                            <Button variant="secondary">Voltar</Button>
                        </Link>
                    </Form.Row>
                </Card.Body>
            </Card>
        </>
    )
}

export default Home