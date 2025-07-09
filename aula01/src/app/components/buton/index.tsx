'use client'

import { useState } from "react"

export function Button() {

    const [nome, setNome] = useState("Riquelme")

    function handeleChangeName() {
        setNome("programador")
    }
    return (
        <div>
            <button onClick={handeleChangeName}>Alterar Nome</button><br />
            <h3>{nome}</h3>
        </div>
    )
}