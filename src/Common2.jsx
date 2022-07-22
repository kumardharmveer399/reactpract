import React from "react";

const Common2 = (props) => {
    return (
        <>
            <section id='header2' className='d-flex align-items-center '>
                <div className='container-fluid nav_bg common_padding'>
                    <div className='row'>
                        <div className='col-10 mx-auto '>
                            <div className='row'>
                                <div className='col-md-6 pt-5 pt-lg-0 order-1 order-lg-2 d-flex justify-content-center flex-column'>
                                <div class="number mb-4">
                                <span>{props.sno}</span>
                                </div>
                                    <h1>
                                        {props.hname}
                                    </h1>
                                    <p>{props.pname}</p>
                                    <div className='mt-3'>

                                        <a  className='btn btn-get-started '>
                                            {props.bname}
                                        </a>
                                    </div>
                                </div>
                                <div className='col-lg-5 order-2 order-lg-1 header-img'>
                                    <img
                                    src={props.image}
                                    className='img-fluid animated'
                                    alt='img'
                                     />
                                </div>

                            </div>
                        </div>
                    </div>
                </div>

            </section>

        </>
    )
}

export default Common2;