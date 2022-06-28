import React from 'react';

import SectionHeader from './SectionHeader';

interface Props {
    title: string
    content: string
    children?: React.ReactNode
}

const SectionWithDescription: React.FC<Props> = ({ title, content, children }) => {
    return (
        <div className='container d-flex mx-md-3 mx-lg-5 flex-column text-main'> 
            <SectionHeader title={title} />
            <div>
                {content}
            </div>

            {children}
        </div>
    )
};

export default SectionWithDescription;
