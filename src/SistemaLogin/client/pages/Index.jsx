import { useState } from 'react';
import api from '../services/api';
import { useNavigate, Link } from 'react-router-dom';
import '../base.css'; 
import Header from '../components/Header.jsx';

const Index = () => {
  return (
    <div className="bg:white fundo-index" style={{ minHeight: '100vh', position: 'relative' }}> 
        
        <Header/>

        <div className="flex flex-col items-center justify-center h-screen">
            <div className="flex justify-center text-center">   
                <p className="m-0">
                <span className="block text-[#1c1cb8] text-[5vw] leading-[1.2] font-headline">Viva o melhor da</span>
                <span className="font-handwritten block text-black text-[4vw] leading-[1.2]">Vida universitária!</span> 
                </p>
            </div>

            <div className="flex flex-col items-center gap-5 w-full mt-[30px]">
                <Link to="/home"><button type="button" className="bg-[#1c1cb8] font-[1.5rem] cursor-pointer font-Absolut text-white py-5 px-15 hover:transition-transform hover:duration-200 hover:scale-105 hover:bg-[#000471]">Conheça a Demorô!</button></Link>
                <Link to="/login"><button type="button" className="bg-transparent border-[2px] border-solid border-[#1c21b8] py-[10px] px-[30px] font-[1rem] cursor-pointer font-Absolut hover:transition hover:bg-[#f0f0f0] text-[#1c21b8]">Página do Morador</button></Link>
            </div>

        </div>

    </div>
  );
};

export default Index;