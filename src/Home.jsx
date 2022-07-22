import React from 'react';
import Common from './Common';
import { NavLink, Routes } from "react-router-dom";
import web from '../src/image/qualify.5d3f9da1.png';
import web2 from '../src/image/welcome.gif'
import web3 from '../src/image/aim.1fefe76f.svg'
import web4 from '../src/image/structure.19ad511f.svg'
import web5 from '../src/image/building.9b8f63cc.svg'
import web6 from '../src/image/enviornment.5587de9b.svg'
import web7 from '../src/image/earth.564f8e9c.svg'
import { Route } from "react-router";
import AimVision from './Tab';
import Common2 from './Common2';
import Patronage from './Patronage';
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
// import '../node_modules/bootstrap/dist/js/bootstrap.min.js';

// <div className='container-fluid nav_bg'>
//     <div className='row'>
//         <div className='col-10 mx-auto'>

//         </div>
//     </div>
// </div>



const Home = () => {
    return (
        <>
             <Common hname='WELCOME to Association of Civil Engineering' bname='Know more about us!' image={web2} pname='Civil Engineering has served mankind since time immemorial. It has been at play since human civilization learnt to build homes, bridges and roads' />
           <Common hname=' G a t e 2022 Result Declared !!' bname='Click here' image={web} pname='more than 30+ students selected' /><br />
            {/* <p>Welcome</p> */}
            <div className='tab_section common_padding'>
                <h1 className='text-center'>Who we are</h1>
                <div className='container'>
                    <div className='row'>
                        <div className="col-md-12" >
                            <div className='tabdata'>
                                <nav class="nav-tabs " role="tablist">
                                    <AimVision />
                                </nav>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            <div className='info_section common_padding'>

            </div>
            <div className='info_section'>
            <Common2 sno ='01' hname='Structural Engineering' image={web4} pname='Structural engineering is the field of engineering that deals with the structural integrity and strength of a building or structure.' />
            <Common2 sno ='02' hname='Geotechnical Engineering'  pname='Geotechnical engineering, also known as geotechnics, is the branch of civil engineering concerned with the engineering behavior of earth materials.' image={web5}/>
            <Common2 sno ='03' hname='Environmental & Water Resources' image={web6} pname='Environmental engineering is a job type that is a professional engineering discipline and takes from broad scientific topics like chemistry, biology, ecology, geology, hydraulics, hydrology, microbiology, and mathematics to create solutions that will protect and also improve the health of living organisms and improve the quality of the environment.' />
            <Common2 sno ='04' hname='Geomatics & Geology' image={web7} pname='Engineering geology is the application of geology to engineering study for the purpose of assuring that the geological factors regarding the location, design, construction, operation and maintenance of engineering works are recognized and accounted for.' />
            </div>
            {/* <Patronage/> */}

        </>
    )
}

export default Home;