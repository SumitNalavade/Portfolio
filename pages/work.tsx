import React from 'react';
import type { NextPage, GetServerSideProps } from 'next';
import Image from "next/image";

import Navbar from '../components/Navbar';
import SectionHeader from '../components/SectionHeader';
import getProjects, { getImages } from '../controller/github';
import { IProject } from "../utils/Project";

interface Props {
    projects: [IProject]
    projectImages: [string]
}

const Work: NextPage<Props> = ({ projects, projectImages }) => {
    console.log(projectImages);

    return (
        <div className="h-100">
            <Navbar />
            <div className='d-flex justify-content-center'><SectionHeader title='Projects' /></div>

            <div className='container h-100 d-flex flex-column justify-content-center'>
                <div className="row row-cols-1 row-cols-md-2 g-4 align-items-center" style={{ overflow: "auto" }}>
                    {projects.map((project: IProject, index)=> {
                        return (
                            <div key={index} className="col bg-background">
                                <div className="card">
                                <img src={projectImages[index].value[1]}  className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title">{project.title}</h5>
                                        <p className="card-text">{project.description}</p>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
};

export const getServerSideProps: GetServerSideProps = async() => {
    const projects = await getProjects();
    const projectImages = await getImages();

    return { props: { projects, projectImages } }
}

export default Work;