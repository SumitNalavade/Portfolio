import React from 'react';
import type { NextPage, GetServerSideProps } from 'next';
import Link from 'next/link';

import Layout from '../../components/Layout';
import SectionHeader from '../../components/SectionHeader';
import { Card } from '../../components/Projects';

import { getPinnedProjects } from '../../utils/github';
import { IProject } from "../../utils/Project";

interface Props {
    pinnedProjects: IProject[]
}
const Projects: NextPage<Props> = ({ pinnedProjects }) => {    
    return (
        <Layout pageName="projects">
            <div className='d-flex justify-content-center pt-5'><SectionHeader title='Projects' /></div>
            <section className="bg-background pt-5 pb-5 shadow-sm">
                <div className="container">
                    <div className="row">
                    {/* <!--ADD CLASSES HERE d-flex align-items-stretch--> */}
                    {pinnedProjects.map((project: IProject, index)=> {
                        return (
                            <Link key={index} href={`/projects/${project.name}`}>
                                <div key={index} className="col-lg-4 mb-5 d-flex align-items-stretch">    
                                    <Card proj={project} key={index} />
                                </div>
                            </Link>
                        ) 
                    })}
                    </div>
                </div>
            </section>
        </Layout>
    )
};

export const getServerSideProps: GetServerSideProps = async() => {
    const pinnedProjects: IProject[] = await getPinnedProjects();

    return { props: { pinnedProjects } }
}

export default Projects;