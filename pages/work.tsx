import React from 'react';
import type { NextPage } from 'next';

import Navbar from '../components/Navbar';
import SectionHeader from '../components/SectionHeader';
import { Project } from '../components/Projects';

import { IProject } from "../utils/Project";

interface Props {
    pinnedProjects: IProject[]
}

const Work: NextPage<Props> = ({ pinnedProjects }) => {
    return (
        <div className="h-100">
            <Navbar />
            <div className='d-flex justify-content-center pt-5'><SectionHeader title='Projects' /></div>
            <section className="bg-background pt-5 pb-5 shadow-sm">
                <div className="container">
                    <div className="row">
                    {/* <!--ADD CLASSES HERE d-flex align-items-stretch--> */}
                    {pinnedProjects.map((project: IProject, index)=> {
                        return <Project key={index} proj={project} /> 
                    })}
                    </div>
                </div>
            </section>
        </div>
    )
};

export default Work;