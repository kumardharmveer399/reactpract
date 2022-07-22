import React, { useState } from "react";

const Common = (props) => {
    return (
        <>
            <section id='header' className='d-flex align-items-center '>
                <div className='container-fluid nav_bg common_padding'>
                    <div className='row'>
                        <div className='col-10 mx-auto '>
                            <div className='row'>
                                <div className='col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column'>
                                    <h1>
                                        {props.hname}
                                    </h1>
                                    <p>{props.pname}</p>
                                    <div className='mt-3'>

                                        <a className='btn btn-get-started '>
                                            {props.bname}
                                        </a>
                                    </div>
                                </div>
                                <div className='col-lg-5 order-1 order-lg-2 header-img'>
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
export default Common
const Blogcomp = (props) => {

    const[show,setshow]=useState(false);
    const setmedia=()=>{
        setshow(!show)
    }

    return (
        <>
            <div className='col-md-3 col-sm-12'>
                <div className="cards">
                    <div className="noteCard my-2 mx-2 card" style={{ width: '' }}>
                        <div className="card-body">
                            <p className="text-secondary mb-2 small">
                                {props.date}
                            </p>
                            <h5 className="card-title">{props.header}</h5>
                            <p className="card-text">{props.para}</p>

                            {/* here another expandable blog content can be added using {props.para2}*/}
                           { show && <p className="card-text">HYPERLOOP COULD BE A STEP INTO THE MODERN WORLD. IF IT WORKS AS PICTURED, IT COULD REVOLUTIONIZE. WE CAN TRAVEL WITH AN AVERAGE OF 1200 KPH. CONSIDERING INDIA, WE CAN TRAVEL FROM OUR NORTH TO SOUTH IN JUST 2 HOURS. THE CONCEPT OF THE HYPERLOOP IS GIVEN BY THE CEO OF TESLA AND SPACEX, ELON MUSK IN 2013. THE HYPERLOOP CONSISTS OF EVACUATED TUBE AND PASSENGER PODS. THE PODS MOVES WITH ULTRA HIGH SPEED IN THE EVACUATED TUBE. IT IS AN ECO-FRIENDLY MODE OF TRANSPORTATION AS IT DOESN’T CONSUME FUEL. IN EVERY MODE OF TRANSPORT, AIR FRICTION AND AIR DRAG ARE THE BIGGEST SPEED LIMIT PROBLEM, BUT THE HYPERLOOP ALLEVIATES THESE PROBLEMS. IN THE HYPERLOOP SYSTEM, THE INNER SURFACE OF THE TUBE AND THE OUTER SURFACE OF THE PODS HAVE THE SAME MAGNETIC POLE THAT DRAWS THE POD INTO THE AIR AND ITS SPEED FROM AN EXTERNAL LINEAR ELECTRIC MOTOR AVAILABLE IN THE PODS. SOME LOW-PRESSURE AIR HAS NOT BEEN COMPLETELY SUCKED FROM THE PIPE. THE MOTOR IN FRONT OF THE PIPE ROTATES IN THE REVERSE DIRECTION SO THAT THE AIR TRAIL CAN BE USED AS A BRAKE. HYPERLOOP IS IMMUNE TO EARTHQUAKES AND CLIMATE CHANGE. THE TUBE IS MADE BY COMBINING SMALLER CELLS. EACH CELL HAVE A SHOCK ABSORBER THAT PREVENTS FROM EARTHQUAKE DAMAGE TO A LARGE EXTENT. IT IS MUCH SAFER THAN FLIGHTS.IT IS ESTIMATED THAT IT WILL COST 1/10 OF THE REGULAR RAILWAY TRACKS. IT WILL BE THE FASTEST ON LAND TRANSPORT. AS IT IS FREE FROM THE PROBLEMS LIKE AIR DRAG AND FRICTION, IT WILL COST LOW IN MAINTAINANCE THAT ENSURE IT WILL BE POCKET FRIENDLY. IT DOESN’T NEED MUCH POWER TO THAT OF OTHER TRANSPORT. IT USES SOLAR ENERGY; SOLAR PANELS ARE INSTALLED ON TOP OF TUBE. A PERSON CAN WORK IN ANOTHER COUNTRY AND CAN REGURARLY JOURNEY AND PRE-TRAVEL AS IT DOESN’T INFLUENCE THE BUDGET. IF IT WORKS IN ITS FULL POTENTIAL TRAVELLING WILL NO LONGER BE A BIG DEAL. HYPERLOOP REQUIRES HIGH INVESTMENT A LOT OF TREE WILL BE CUT, ANY DEFECT RESULTS IN SEVERE PROBLEMS BUT THESE PROBLEMS CAN BE REDUCE. THIS CAN EASILY WORK WITHIN A COUNTRY BUT CONNECTING GLOBE CAN BE A PROBLEM. GLOBAL CONNECTION CAN’T BE DONE WITHOUT PEACE AND HARMONY. VIRGIN HYPERLOOP ONE, HTT, TRANSPOD, ARRIVO, HYPERLOOP ALPHA ALL ARE WORKING IN THIS FIELD BUT VIRGIN HYPERLOOP IS LEADING. THEY ALREADY DID THE HUMAN TRIAL AND IT WAS SUCCESFULL. WE CAN IMAGINE IT RUNNING THROUGH OUR CITIES WITHIN 10 YEARS.</p> }
                            <button className="btn btn-primary" onClick={setmedia}>{show ? "show less" : "Explore More"}</button>
                            
                        </div>
                    </div>


                </div>
            </div>
        </>
    )
}

export { Blogcomp };