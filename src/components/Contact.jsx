import { useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  // Função para enviar o e-mail
  const sendEmail = (e) => {
    e.preventDefault();

    if (nome === '' || email === '' || message === '') {
      alert('Preencha todos os campos');
      return;
    }

    const templateParams = {
      from_name: nome,
      message: message,
      email: email,
    };

    emailjs.send("service_n15sy5h", "template_j88mcx1", templateParams, "1UG3eHQ2jXgA1uypM")
      .then((response) => {
        console.log("EMAIL ENVIADO", response.status, response.text);
        alert("Obrigado. Entrarei em contato com você o mais rápido possível.")
        setNome('');
        setEmail('');
        setMessage('');
      }, (error) => {
        console.log("ERRO: ", error);
      });
  };

  return (
    <>
      <style>
        {`
          .contact-container {
            display: flex;
            flex-direction: column;
            align-items: center;
            width: 100%;
            padding: 20px;
          }
          .title {
          font-size: 30px
          }
          .form {
            display: flex;
            flex-direction: column;
            width: 100%;
            max-width: 600px;
            padding: 30px;
            border-radius: 20px;
          }
          .label_content {
            font-size: 16px;
            margin-bottom: 8px;
            color: #fff;
          }
          .input-contact {
            width: 100%;
            padding: 12px;
            margin-bottom: 16px;
            border-radius: 8px;
            border: 1px solid #ccc;
            font-size: 16px;
            outline: none;
          }
          .input-contact:focus {
            border-color: purple;
          }
          #input-msg {
            resize: vertical;
          }
          .button {
            color: #fff;
            padding: 12px;
            border: none;
            border-radius: 8px;
            font-size: 18px;
            cursor: pointer;
            width: 50%;
            margin: 0 auto;
          }
          .button:hover {
            background-color: purple;
          }
          .title {
            text-align: center;
            color: #fff;
            margin-bottom: 20px;
          }
        `}
      </style>

      <div className="contact-container">
        <h2 className="title">Contato</h2>
        <form className="form bg-black-100" onSubmit={sendEmail}>
          <label htmlFor="" className="label_content text-white font-medium mb-4">Nome</label>
          <input 
            type="text" 
            placeholder="Digite seu nome aqui" 
            className="input-contact bg-tertiary" 
            onChange={(e) => setNome(e.target.value)} 
            value={nome} 
          />

          <label htmlFor="" className="label_content text-white font-medium mb-4">Email</label>
          <input 
            type="text" 
            placeholder="Digite seu email aqui" 
            className="input-contact bg-tertiary" 
            onChange={(e) => setEmail(e.target.value)} 
            value={email} 
          />

          <label htmlFor="" className="label_content text-white font-medium mb-4">Podemos trabalhar juntos</label>
          <textarea 
            type="text" 
            placeholder="Digite sua mensagem" 
            className="input-contact bg-tertiary" 
            id="input-msg" 
            onChange={(e) => setMessage(e.target.value)} 
            value={message} 
          />

          <input className="button bg-tertiary" type="submit" value="Enviar" />
        </form>
      </div>
    </>
  );
};

export default Contact;
