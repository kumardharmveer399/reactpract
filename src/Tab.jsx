import React, { useState } from 'react';
import Common2 from './Common2';
import { Link } from 'react-router-dom';
import aim from "../src/image/aim.1fefe76f.svg";
import vision from "../src/image/vision.8d3875cb.svg";




const AimVision = () => {

    const [index, setIndex] = useState(0);
    return (
        <>
        <div className='tablist'>
        <div className='tabhead' onClick={() => (setIndex(0))}>
                <Link activeClassName="active_class" id="uncontrolled-tab-example-tab-Tab1" to="#" role="tab" data-rb-event-key="Tab1" aria-controls="uncontrolled-tab-example-tabpane-Tab1" aria-selected="true" class="nav-item nav-link ">
                    <svg stroke="currentColor" fill="currentColor" stroke-width="0" t="1569683657482" viewBox="0 0 1024 1024" version="1.1" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"></svg><span class="ml-3">Aim</span>
                </Link>
            </div>
            <div className='tabhead' onClick={() => (setIndex(1))}>
                <Link activeClassName="active-class" id="uncontrolled-tab-example-tab-Tab2" to="#" role="tab" data-rb-event-key="Tab2" aria-controls="uncontrolled-tab-example-tabpane-Tab2" aria-selected="false" class="nav-item nav-link">
                    <svg stroke="currentColor" fill="currentColor" stroke-width="0" role="img" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"></svg>
                    <span class="ml-3">Vision</span>
                </Link>
            </div>
        </div>
         
            <div className='tabcontent' hidden={index != 0}>
            <Common2 hname='Aim of ACE' image={aim}  pname='Association of Civil Engineers, B.I.T. Sindri aims to enlighten students, scholars and researchers of the most recent advancements in the Civil Engineering field. It aspires to foster a culture of learning, understanding and sharing of Civil engineering concepts in the campus so that there is no dearth of information and an open along with free flow of knowledge. We want more people to join us in the movement so that we learn and innovate together.' /> 
            </div>
            <div className='tabcontent' hidden={index != 1}>
            <Common2 hname='Vision of ACE' image={vision} pname='Civil Engineering is an art and a technique to create safe, resilient and sustainable buildings' />
            </div>



        </>
    )
}

export default AimVision;