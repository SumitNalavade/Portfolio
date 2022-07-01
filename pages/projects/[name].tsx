import React from 'react';
import type{ NextPage, GetServerSideProps } from "next";
import { ReactMarkdown } from 'react-markdown/lib/react-markdown';

import Layout from '../../components/Layout';
import { Card } from "../../components/Projects";

import { getProject } from "../../utils/github";
import { IProject } from '../../utils/Project';

interface Props {
    project: IProject
}
const Project: NextPage<Props> = ({ project }) => {
    return (
        <Layout>
            <div className={`container-lg my-5 mobileStacked`}>
                <div className="container">
                    <div className="row gx-5">
                        <div className='col-lg-6 mb-5 align-items-stretch'>
                            <Card proj={project} />
                        </div>

                        <div className='col-lg-6 text-main'>
                            <ReactMarkdown>
                                { project.readMe as string }
                            </ReactMarkdown>
                        </div> 
                    </div>
                </div>
            </div>
        </Layout>
    )
};

export const getServerSideProps: GetServerSideProps = async({ query }) => {
    const { name } = query;
    
    const project = await getProject(name as string)

    return { props: { project } }
}

export default Project;