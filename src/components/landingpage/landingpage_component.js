import React, { Component } from 'react'
import "./landingpage.scss";
import Group from '../../components/Group.svg';
import Groupsmob from '../../components/Groupsmob.svg';
export default class Landingpage extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="landingContainer">
                    <img src={Group} alt="nict" />
                </div>
                <div style={{display:"flex"}} >
                    <div className="containerObjective">
                        <h3>OBJECTIVE</h3>
                        <p>With Solo Aim of Capacity Building.Skill Development in the areas of NICT academic education and professionals for successfull acheivement.</p>
                        <div className="courseTypes">
                            <img style={{ height: "100px", paddingLeft: "20px", paddingTop: "20px" }} src="nicthome.png" alt="nict" />
                            <div className='chevronRight'>
                                <i class="fas fa-chevron-right"></i><span>CERTIFICATED COURSES</span><br /><br />
                                <i class="fas fa-chevron-right"></i><span style={{ marginTop: "20px" }}>DIPLOMA COURSES</span><br />
                            </div>
                            <div className='chevronRight'>
                                <i class="fas fa-chevron-right"></i><span>PG DIPLOMA COURSES</span><br /><br />
                                <i class="fas fa-chevron-right"></i><span>CUSTOMISED COURSES</span><br />
                            </div>
                        </div>
                        <div>
                            <h3>METHODOLOGY</h3>
                            <div className="courseTypes">
                                <img style={{ height: "130px", paddingLeft: "20px", paddingTop: "20px" }} src="nicthome2.png" alt="nict" />
                                <div className='chevronRight'>
                                    <i class="fas fa-chevron-right"></i><span>CLASS ROOM TRAINING</span><br /><br />
                                </div>
                                <div className='chevronRight'>
                                    <i class="fas fa-chevron-right"></i><span>E-LEARNING<img style={{ height: "11px", paddingLeft: "10px", paddingTop: "" }} src="live.jpg" alt="nict" /></span><br /><br />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="brightStudent">
                    <h4 className="brightContainer">We help you choose the right talent</h4>

                        <img style={{ height: "350px",marginTop:"40px",marginLeft:"auto",marginRight:"auto",display:"block"}} src={Groupsmob} alt='nict' />
                    
                    </div>
                </div>
            </React.Fragment>
        )
    }
}
