import React from 'react';

import './team.styles.scss';

const Team = () => {
    return(
        <div className="team bg-dark">
            <div className="teambox" data-aos="fade-up">
                <div className="title py-3">Teams</div>
                <div className="container">
                    <div className="row">
                        <div className="col-md py-4">
                            <div className="teamimg">Team Image</div>
                            <div className="teamname py-2">[Name]</div>
                            <div className="jobtitle py-2">[Job Title]</div>
                        </div>
                        <div className="col-md py-4">
                            <div className="teamimg">Team Image</div>
                            <div className="teamname py-2">[Name]</div>
                            <div className="jobtitle py-2">[Job Title]</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Team;