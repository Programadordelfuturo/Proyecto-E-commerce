import axios from 'axios';
import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const { register, handleSubmit } = useForm();
  
  const navigate = useNavigate();

  const submit = (data) => {
    axios.post('https://e-commerce-api.academlo.tech/api/v1/users/login', data)
        .then(res => {
          navigate("/")
          console.log(res)
          localStorage.setItem("token", res.data.data.token)
        })
        .catch(error =>{
          if(error.response?.status === 400){
            alert("Credenciales incorrectas")
          } else {
            console.log(error.response?.data)
          }
        })
  };

  return (
    <div>
      <Form onSubmit={handleSubmit(submit)}>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
          <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" {...register("email")}/>
          <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
          <input type="password" className="form-control" id="exampleInputPassword1" {...register("password")}/>
        </div>
        <div className="mb-3 form-check">
          <input type="checkbox" className="form-check-input" id="exampleCheck1" />
          <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </Form>
    </div>
  );
};

export default Login;