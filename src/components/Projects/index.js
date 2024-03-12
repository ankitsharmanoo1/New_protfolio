/* eslint-disable eqeqeq */
import React from 'react'
import { useState } from 'react'
import { Container, Wrapper, Title, Desc, CardContainer, ToggleButtonGroup, ToggleButton, Divider } from './ProjectsStyle'
import ProjectCard from '../Cards/ProjectCards'
import { projects } from '../../data/constants'


const Projects = ({openModal,setOpenModal}) => {
  const [toggle, setToggle] = useState('all');
  return (
    <Container id="projects">
      <Wrapper>
        <Title>Projects</Title>
        <Desc>
          I have worked on a wide range of projects. From web apps to android apps. Here are some of my projects.
        </Desc>
        <ToggleButtonGroup >
          {toggle === 'all' ?
            <ToggleButton active value="all" onClick={() => setToggle('all')}>All</ToggleButton>
            :
            <ToggleButton value="all" onClick={() => setToggle('all')}>All</ToggleButton>
          }
          <Divider />
          {toggle === 'web app' ?
            <ToggleButton active value="web app" onClick={() => setToggle('web app')}> JavaScript</ToggleButton>
            :
            <ToggleButton value="web app" onClick={() => setToggle('web app')}>JavaScript</ToggleButton>
          }
          <Divider />
          {toggle === 'Backend' ?
            <ToggleButton active value="Backend" onClick={() => setToggle('Backend')}>Backend</ToggleButton>
            :
            <ToggleButton value="Backend" onClick={() => setToggle('Backend')}>Backend</ToggleButton>
          }
          <Divider />
          {toggle === 'React' ?
            <ToggleButton active value="React" onClick={() => setToggle('React')}>ReactJS</ToggleButton>
            :
            <ToggleButton value="React" onClick={() => setToggle('React')}>ReactJS</ToggleButton>
          }
        </ToggleButtonGroup>
        <CardContainer>
          {toggle === 'all' && projects
            .map((project) => (
              <ProjectCard project={project} openModal={openModal} setOpenModal={setOpenModal}/>
            ))}
          {projects
            .filter((item) => item.category == toggle)
            .map((project) => (
              <ProjectCard project={project} openModal={openModal} setOpenModal={setOpenModal}/>
            ))}
        </CardContainer>
      </Wrapper>
    </Container>
  )
}

export default Projects