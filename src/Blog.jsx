import React from 'react';
import web from '../src/image/Blog.svg';
import web2 from '../src/image/magazine.jpg';
import Common2 from './Common2';
import { Blogcomp } from './Common'





const Blog = () => {
    return (
        <>  <div className='container'>
            <Common2 hname='WELCOME To Our  Blogs' image={web} pname='Association of Civil Engineering  B.I.T SINDRI  Established in 2017' />
            <div className='section_padding'>
                <div className='container'>
                    <div className='justify-content-center mb-4 row'>
                        <div className='col-md-6'>
                            <h3 className='text-center'>Research Oriented Topics</h3>
                            <p className="text-secondary text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='blog'>
                <div className='row section_padding justify-content-center mb-4'>
                    <Blogcomp header='HYPERLOOP' para='HYPERLOOP COULD BE A STEP INTO THE MODERN WORLD. IF IT WORKS AS PICTURED, IT COULD REVOLUTIONIZE. WE CAN TRAVEL WITH AN AVERAGE OF 1200 KPH. CONSIDERING INDIA, WE CAN TRAVEL FROM OUR NORTH TO SOUTH IN JUST 2 HOURS.' date='August 07, 2021' />

                    <Blogcomp header='Benefits of BIM in construction' para='1) Improve onsite collaboration. (Digital BIM models allow for sharing collaborating and versioning the paper drawing set.) 2) Cost and resource saving. 3) Greater efficiency and shorter project life cycle.

                ' date='April 3 2021' />

                    <Blogcomp header='Building Information Modelling' para='also known as BIM is a process for creating and managing information of a construction project across the project lifecycle. One of the key outputs of this process is the BUILDING INFORMATION MODEL. It has a great importance in CIVIL ENGINEERING.' date='August 07, 2021' />
                </div>
            </div>
        </div>
        </>
    )
}

export default Blog;