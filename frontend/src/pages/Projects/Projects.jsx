import React from 'react'
import Footer from '../../components/footer/Footer'
import Header from '../../components/Header/Header'
import "./Projects.css"
import proimg from "../../Images/Projects.png"

const Projects = () => {
  return (
    <div>
        <Header/>
        <div className="projectsDiv">
      <div className="profile">
        <div className="profile-picture">
          <img src={proimg} alt="Profile" />
        </div>
        <div className="profile-details">
          <h2>Фамилия Имя</h2>
          <p>Дизайнер</p>
          <p> Россия</p>
          <p>Проекты: 2</p>
          <div className="social-links">
            <a href="https://vk.com/"   >VK</a>
            
          </div>
          <div className="about-me">
            <p>Обо мне:</p>
            <p>Краткая информация обо мне, о моей жизни и достижениях.</p>
          </div>
        </div>
      </div>
      <div className="main-content">
        <div className="project-highlight">
          <img src={proimg} alt="Project" />
          <p>Вот такой у меня крутой главный проект. Вот такая вот краткая информация про него...</p>
        </div>
        <div className="projects">
          <h3>Проекты</h3>
          <div className="project-thumbnails">
            {Array(11).fill().map((_, index) => (
              <div key={index} className="thumbnail">
                <img src={proimg} alt={`Project ${index + 1}`} />
              </div>
            ))}
          </div>
        </div>
        <div className="certificates">
          <h3>Сертификаты</h3>
        </div>
      </div>
    </div>
    <Footer/>
    </div>
  )
}

export default Projects
