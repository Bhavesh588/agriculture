import React from 'react';
import _ from "lodash";

import './services.styles.scss';

const Service = ({ service }) => {
    let len = service.s_des.length
    // let dist = [[]]
    let count = 1
    if(len > 3) {
        let j = 3
        for(let i = 0; i < len; i++) {
            // let inner = []
            // for(let j = 0; j <= 3; j++) {
            //     inner.push(service.s_des[i])
            // }
            if(i === j) {
                count = count + 1
                j = j + 3
            }
        }
    } else {
        count = 1
    }
    console.log(count)
    return (
        <div className="services">
            <div className="servbox" data-aos="fade-up">
                <div className="title">Services</div>
                <div id="ser" className="carousel slide" data-interval="false">
                    <ul className="carousel-indicators">
                        <li data-target="#ser" data-slide-to="0" className="active"></li>
                        <li data-target="#ser" data-slide-to="1"></li>
                        <li data-target="#ser" data-slide-to="2"></li>
                    </ul>

                    <div className="carousel-inner">
                                {
                                    _.times(count, (i)=> 
                                        i === 1
                                        ?   <div className="carousel-item active" key={i}>
                                                <div className="container-fluid">
                                                    <div className="row">
                                                        {
                                                            service.s_des.map((ser, i) =>
                                                                <div className="col-md" key={i}>
                                                                    <div className='outline'>
                                                                        <img src={require('../../Images/'+service.s_filename[i])} className="imgser" alt="Service"/>
                                                                    </div>
                                                                    <div className="des">
                                                                        <p>{ser}</p>
                                                                    </div>
                                                                </div>
                                                            )
                                                        }
                                                    </div>
                                                </div>
                                            </div>
                                        :   <div className="carousel-item" key={i}>
                                                <div className="container-fluid">
                                                    <div className="row">
                                                        {
                                                            service.s_des.map((ser, i) =>
                                                                <div className="col-md" key={i}>
                                                                    <div className='outline'>
                                                                        <img src={require('../../Images/'+service.s_filename[i])} className="imgser" alt="Service"/>
                                                                    </div>
                                                                    <div className="des">
                                                                        <p>{ser}</p>
                                                                    </div>
                                                                </div>
                                                            )
                                                        }
                                                    </div>
                                                </div>
                                            </div>
                                    )
                                }
                        {/* <div className="carousel-item">
                            <div className="container-fluid">
                                <div className="row">
                                    <div className="col-md ">
                                        <div className='outline'>
                                            <div className="inline">
                                                Service Image
                                            </div>
                                        </div>
                                        <div className="des">
                                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex nulla, tenetur suscipit corporis, quas laboriosam neque</p>
                                        </div>
                                    </div>
                                    <div className="col-md ">
                                        <div className='outline'>
                                            <div className="inline">
                                                Service Image
                                            </div>
                                        </div>
                                        <div className="des">
                                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex nulla, tenetur suscipit corporis, quas laboriosam neque</p>
                                        </div>
                                    </div>
                                    <div className="col-md ">
                                        <div className='outline'>
                                            <div className="inline">
                                                Service Image
                                            </div>
                                        </div>
                                        <div className="des">
                                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex nulla, tenetur suscipit corporis, quas laboriosam neque</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <div className="container-fluid">
                                <div className="row">
                                    <div className="col-md ">
                                        <div className='outline'>
                                            <div className="inline">
                                                Service Image
                                            </div>
                                        </div>
                                        <div className="des">
                                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex nulla, tenetur suscipit corporis, quas laboriosam neque</p>
                                        </div>
                                    </div>
                                    <div className="col-md ">
                                        <div className='outline'>
                                            <div className="inline">
                                                Service Image
                                            </div>
                                        </div>
                                        <div className="des">
                                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex nulla, tenetur suscipit corporis, quas laboriosam neque</p>
                                        </div>
                                    </div>
                                    <div className="col-md ">
                                        <div className='outline'>
                                            <div className="inline">
                                                Service Image
                                            </div>
                                        </div>
                                        <div className="des">
                                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex nulla, tenetur suscipit corporis, quas laboriosam neque</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div> */}
                    </div>

                    <a className="carousel-control-prev" href="#ser" data-slide="prev">
                        <span className="carousel-control-prev-icon"></span>
                    </a>
                    <a className="carousel-control-next" href="#ser" data-slide="next">
                        <span className="carousel-control-next-icon"></span>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Service;