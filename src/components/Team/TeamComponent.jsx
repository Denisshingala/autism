import React from 'react';
import { Swiper } from 'swiper/react';
import { Pagination, Navigation } from "swiper";
import { Designer, Developer, FinancialOfficer, Shruti, Jap, Shubham, AnkitChotaliya, AnkitVerma, Denis } from '../../images/images';
import './Team.css';

const TeamComponent = () => {
    return (
        <>
            <div className="container container-fluid swiper">
                <Swiper
                    slidesPerView={3}
                    spaceBetween={30}
                    slidesPerGroup={3}
                    loop={true}
                    loopFillGroupWithBlank={true}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={true}
                    modules={[Pagination, Navigation]}
                    className="slide-container">
                    <div className="card-wrapper swiper-wrapper">
                        <div className="card swiper-slide">
                            <div className="image-box">
                                <img src={Designer} alt="Work" />
                            </div>
                            <div className="profile-details">
                                <img src={Shruti} alt="Profile" width="50" height="50" />
                                <div className="name-job">
                                    <h3 className="name">Shruti Jagtap</h3>
                                    <h4 className="job">Product Designer & Researcher</h4>
                                </div>
                            </div>
                        </div>
                        <div className="card swiper-slide">
                            <div className="image-box">
                                <img src={FinancialOfficer} alt="Work" />
                            </div>
                            <div className="profile-details">
                                <img src={Jap} alt="Profile" width="50" height="50" />
                                <div className="name-job">
                                    <h3 className="name">Jap Hirpara</h3>
                                    <h4 className="job">Financial Officer</h4>
                                </div>
                            </div>
                        </div>
                        <div className="card swiper-slide">
                            <div className="image-box">
                                <img src={Developer} alt="Work" />
                            </div>
                            <div className="profile-details">
                                <img src={Shubham} alt="Profile" width="50" height="50" />
                                <div className="name-job">
                                    <h3 className="name">Shubham Dusane</h3>
                                    <h4 className="job">Full Stack Developer</h4>
                                </div>
                            </div>
                        </div>
                        <div className="card swiper-slide">
                            <div className="image-box">
                                <img src={Developer} alt="Work" />
                            </div>
                            <div className="profile-details">
                                <img src={AnkitVerma} alt="Profile" width="50" height="50" />
                                <div className="name-job">
                                    <h3 className="name">Ankit Verma</h3>
                                    <h4 className="job">Full Stack Developer</h4>
                                </div>
                            </div>
                        </div>
                        <div className="card swiper-slide">
                            <div className="image-box">
                                <img src={Developer} alt="Work" />
                            </div>
                            <div className="profile-details">
                                <img src={AnkitChotaliya} alt="Profile" width="50" height="50" />
                                <div className="name-job">
                                    <h3 className="name">Ankit Chotaliya</h3>
                                    <h4 className="job">Full Stack Developer</h4>
                                </div>
                            </div>
                        </div>
                        <div className="card swiper-slide">
                            <div className="image-box">
                                <img src={Developer} alt="Work" />
                            </div>
                            <div className="profile-details">
                                <img src={Denis} alt="Profile" width="50" height="50" />
                                <div className="name-job">
                                    <h3 className="name">Denis Shingala</h3>
                                    <h4 className="job">Full Stack Developer</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </Swiper>
                <div className="swiper-pagination"></div>
            </div>
        </>
    );
}

export default TeamComponent