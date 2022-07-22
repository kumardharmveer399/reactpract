import React from 'react';
import web from '../src/image/constitution.svg';
import web2 from '../src/image/magazine.jpg';
import Common from './Common'





const Magzine = () => {
    return (
        <>
            <Common hname='WELCOME To Our  Magazine  Page' bname='Download!' image={web} pname='Association of Civil Engineering  B.I.T SINDRI  Established in 2017' />
            <div className='section_padding'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-12'>
                            <img src={web2} style={{width:'80%'}}/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Magzine;