import React, { useState, useEffect } from 'react'

//gerar id
function getId () {
  return (5999 - Math.round(Math.random() * 392));
}
//validar campos obrigatorios
function validateContact (dados) {
  let msg = '';

  msg += dados.name === '' ? '\nCampo "Nome" é obrigatório.' : '';
  msg += dados.company === '' ? '\nCampo "Empresa" e obrigatorio.' : '';
  msg += dados.email === '' ? '\n"Email" inválido.' : '';

  if (msg) {
    alert(msg);
    return false;
  }
  return true;
}

export default function ContactForm (props) {
  const [data, setData] = useState(props.data);
  const atualizar = data.id > 0

  useEffect(() => {
    setData(props.data);
  }, [props.data]);

  const changeField = (field) => {
    const change = (evt) => setData({ ...data, [field]: evt.target.value });

    return change;
  }

  const hangleSubmit = (evt) => {
    evt.preventDefault();

    if (validateContact(data)) {
      props.save({ ...data, id: (atualizar ? data.id : getId()) }, atualizar ? data.id : 0);

      setData({ id: 0, name: '', email: '', company: '', office: '' })
    } else {
      console.log('Preencha todos os campos obrigatórios');
    }
  }

  return (
    <form onSubmit={hangleSubmit} className="p-2 flex flex-col">
      <div className="flex flex-row text-black items-stretch mb-2">
        <label className="text-lg">Nome*</label>
        <input type="text" className="p-2 rounded text-lg black"
          maxLength={50}
          value={data.name}
          onChange={changeField('name')} />
      </div>

      <div className="flex flex-row text-black items-stretch mb-2">
        <label className="text-lg">E-mail*</label>
        <input type="text" className="p-2 rounded text-lg "
          maxLength={50}
          value={data.email}
          onChange={changeField('email')} />
      </div>

      <div className="flex flex-row text-black items-stretch mb-2">
        <label className="text-lg">Empresa*</label>
        <input type="text" className="p-2 rounded text-lg "
          maxLength={50}
          value={data.company}
          onChange={changeField('company')} />
      </div>

      <div className="flex flex-row text-black items-stretch mb-2">
        <label className="text-lg">Cargo</label>
        <input type="text" className="p-2 rounded text-lg "
          maxLength={50}
          value={data.office}
          onChange={changeField('office')} />
      </div>

      <div>
        <input type="submit" value="Adicionar"></input>
      </div>
    </form>
  )
}
