import React from 'react';
import {FaGit, FaLinkedinIn, FaInstagram} from 'react-icons/fa';

import Photos from '../photos';
import Footer from '../../components/footer';
import './styles.css';

export default function Home(){
  const instagramLink = 'https://www.instagram.com/negoh.css/';
  const githubLink = 'https://github.com/Gabriel-Tomaz';
  const linkedinLink = 'https://www.linkedin.com/in/gabriel-tomaz-35172a1a4/';

  function abrirLink(link){
    window.open(link);
  }

  return(
    <div className="main">
      <section className="home">
      <div className="abstract">
        <h1 className="abstract-title">Gabriel</h1>          
        <p className="abstract-text">
          Este é meu portfólio de fotos. A fotografia é um hobby ao qual dediquei-me bastante e que me rendeu momentos e registros incríveis. Todas as fotos listadas abaixo foram feitas e editadas em um Smartphone.
        </p>
        <div className="social">
          <p className="abstract-link" onClick={() => abrirLink(instagramLink)} title='Instagram'>
            <FaInstagram color="#CAD2C5" />
          </p>
          <p className="abstract-link" href=" " onClick={() => abrirLink(githubLink)} title='Github'>
              <FaGit color="#CAD2C5" />
          </p>
          <p className="abstract-link" href=" " onClick={() => abrirLink(linkedinLink)} title='Linkedin'>
            <FaLinkedinIn color="#CAD2C5" />
          </p>
        </div>
      </div>
      <div className="about">
          <div className="about-image profile-image"></div>
          <div className="about-card">
            <h2 className="about-card-title">Sobre mim</h2>
            <p className="about-card-text">
              Olá meu nome é Gabriel, eu estou cursando ADS no IF Cajazeiras. Minha aréa de estudos é o <b>Front End</b> e estou começando no <b>UI/UX Design</b>. 
            </p>
          </div>
            <div className="about-card">
              <h2 className="about-card-title">Sobre as fotos</h2>
              <p className="about-card-text">
                Minhas fotos são como uma parte de mim, nelas eu tento passar um pouco do meu olhar, a forma como enxergo o mundo.
              </p>
            </div>
          <div className="about-image portfolio-image"></div>
        </div>
      </section>

      <Photos />
      <Footer />
    </div>
  );
}