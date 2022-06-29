import React from 'react';
import type { NextPage, GetServerSideProps } from 'next';
import Image from "next/image";

import Navbar from '../components/Navbar';
import SectionHeader from '../components/SectionHeader';
import getProjects from '../controller/github';
import { IProject } from "../utils/Project";

interface Props {
    projects: [IProject]
}

const Work: NextPage<Props> = ({ projects }) => {
    return (
        <div className="h-100">
            <Navbar />
            <div className='d-flex justify-content-center'><SectionHeader title='Projects' /></div>
            <section className="bg-background pt-5 pb-5 shadow-sm">
                <div className="container">
                    <div className="row">
                    {/* <!--ADD CLASSES HERE d-flex align-items-stretch--> */}
                    {projects.map((project: IProject, index)=> {
                        return (
                            <div key={index} className="col-lg-4 mb-3 d-flex align-items-stretch">
                                <div className="card">
                                    <img src={project.imagePath} className="card-img-top" alt="Card Image" />
                                    <div className="card-body d-flex flex-column">
                                        <h5 className="card-title">{project.title}</h5>
                                        <p className="card-text mb-4">{project.description}</p>
                                        <a href="#" className="btn btn-primary mt-auto align-self-start">Book now</a>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                    
                    </div>
                </div>
            </section>
        </div>
    )
};

export const getServerSideProps: GetServerSideProps = async() => {
    const projects = await getProjects();

    return { props: { projects } };
}

export default Work;