import React from 'react';

import './certificate.styles.scss';

const Certificate = () => {
    return (
        <div className="certificate">
            <div className="cerbox" data-aos="fade-up">
                <div className="title">Certificates</div>
                <div className="row">
                    <div className="col-md ">
                        <div className='outlinecer my-3'>
                            Certificate Image
                        </div>
                        <div className="py-3">[Certificate Name]</div>
                    </div>
                    <div className="col-md ">
                        <div className='outlinecer my-3'>
                            Certificate Image
                        </div>
                        <div className="py-3">[Certificate Name]</div>
                    </div>
                    <div className="col-md ">
                        <div className='outlinecer my-3'>
                            Certificate Image
                        </div>
                        <div className="py-3">[Certificate Name]</div>
                    </div>
                    <div className="col-md ">
                        <div className='outlinecer my-3'>
                            Certificate Image
                        </div>
                        <div className="py-3">[Certificate Name]</div>
                    </div>
                    <div className="col-md ">
                        <div className='outlinecer my-3'>
                            Certificate Image
                        </div>
                        <div className="py-3">[Certificate Name]</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Certificate;