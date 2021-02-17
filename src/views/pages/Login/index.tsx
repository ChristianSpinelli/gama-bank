import React, {useState} from 'react';
import {Card, Col, Form, Button} from 'react-bootstrap';
import api from '../../../services/api';
import {Link} from 'react-router-dom';

interface Login{
    senha:string,
    usuario:string,
}

const Login:React.FC = () =>{
    const [login, setLogin] = useState<Login>({senha:"",usuario:""})

    function logar(){
        api.post("/login",login)
        .then(res =>{
            console.log("sucesso")
        }, err=>{
            console.log("erro")
        })
    }

    return(
        <React.Fragment>
            <Card>
                <Card.Title>Faça seu Login</Card.Title>
                <Card.Body>
                    <Form.Row>
                        <Form.Group as={Col} xs={12} md={12}>
                            <Form.Control value={login.usuario} onChange={(e) => setLogin({...login,usuario:e.target.value})} type="text" placeholder="Digite seu Usuário"/>
                        </Form.Group>
                        <Form.Group as={Col} xs={12} md={12}>
                            <Form.Control value={login.senha}  onChange={(e) => setLogin({...login,senha:e.target.value})} type="password" placeholder="Digite sua Senha"/>
                        </Form.Group>
                        <Button onClick={logar}>Logar</Button>
                        <Form.Group as={Col} xs={12} md={12}>
                            <Link to="/">Ainda não sou cadastrado.</Link>
                        </Form.Group>
                        
                    </Form.Row>
                </Card.Body>
            </Card>
        </React.Fragment>
    )
}

export default Login