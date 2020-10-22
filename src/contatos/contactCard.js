import React from 'react'

export default function ContactCard (props) { 
  let { id, name, email, company, office } = props.data;

  return (
    <div className="mb-2 flex flex-col p-4 bg-gray-700 items-start text-black w-6/12">
      <span className="block text-2xl font-semibold">Nome: {name}</span>
     <span className="block text-base text-black">ID: {id}</span>
      <span className="block text-base text-black">Email: {email}</span>
      <span className="block text-base text-black">Empresa: {company}</span>
      <span className="block text-base text-black">Cargo: {office}</span>
      Ações<button className="text-green-500" onClick={() => props.update(props.data)}>Editar</button>
      <button className="text-red-500" onClick={() => props.delete(props.data)}>Deletar</button>
    </div>
  )
}
