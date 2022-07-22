import React, { useEffect } from 'react';

import Typewriter from "typewriter-effect";




const About = () => {

    return (



        <>
            <div className='about-banner'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-12'>
                            <div className='width-large-70'>
                                <h1>
                                    About<br />
                                    Association of Civil Engineers<br />
                                    We<span className='typewriter'>
                                        <Typewriter

                                            onInit={(typewriter) => {

                                                typewriter

                                                    .typeString("Construct")

                                                    .pauseFor(1000)
                                                    .deleteAll()
                                                    .typeString("Communicate")
                                                    .start();
                                            }}
                                        />
                                    </span>

                                </h1>
                                <div className="container"></div>
                                <p className='mt-4'>
                                    Civil Engineering has served mankind since time immemorial. It has been at play since human civilization learnt to build homes, bridges and roads. It would not be wrong to view Civil Engineering as the field that shelters man. Therefore, it becomes all the more essential to understand and apply the knowledge and latest advancements of the field and have a sharp view of it.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='container'>
                    <hr />
                </div>
                <div className='section_padding'>
                    <div className='container'>
                        <div className='justify-content-between row'>
                            <div className='col-md-12 col-sm-12'>
                                <p>
                                    The Association of Civil Engineers, B.I.T. Sindri is a step forward in that direction. The Association of Civil Engineers, B.I.T. Sindri established in 2017 is an assortment of individuals who aim to acquaint you with the latest trends in the Civil Engineering field. It is an initiative taken by keen Civil Engineering students of B.I.T. Sindri to broaden their horizon of their knowledge of the aforementioned field. Our patrons are Dr. D. K. Singh, Director, Bit Sindri and H.O.D of Civil engineering department, B.I.T. Sindri.
                                </p>

                            </div>
                        </div>
                    </div>
                </div>
                <div className='container'>
                    <hr />
                </div>
                <div className='section_padding count-section'>
                    <div className='container'>
                        <div className='row'>
                            <div className='col-md-6 col-sm-12'>
                                <div className='text-center'>
                                    <h3 className='text-primary'>60+</h3>
                                    <p>Core Members</p>
                                </div>
                            </div>
                            <div className='col-md-6 col-sm-12'>
                                <div className='text-center'>
                                    <h3 className='text-primary'>400+</h3>
                                    <p>General Members</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default About;