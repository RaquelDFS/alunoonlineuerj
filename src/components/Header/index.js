import React from 'react'
import "./index.css"


import imgLogo from "../../image/logo_uerj_cor.gif"
import alunoOnline from "../../image/logo_alunoonline.gif"

function Header() {
    return (
        <>
            <div className='container'>
                <img src={imgLogo} alt="uerj universidade" />
                <div>
                    <h1>Aluno Online</h1>
                    <p> 2023/1 </p>
                    <h1>201620469611 - Raquel da Fonseca Silva</h1>
                </div>
                <img src={alunoOnline} alt="aluno online" />

            </div>
        </>
    )
}

export default Header