import { ArrowForward } from '@mui/icons-material';
import { Button } from '@mui/material';
import React from 'react';
import './HomeComponent.css';
import ImageOutlinedIcon from '@mui/icons-material/ImageOutlined';
import CampaignIcon from '@mui/icons-material/Campaign';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import TeamComponent from '../Team/TeamComponent';

const HomeComponent = () => {
    return (
        <>
            <div className="home-body">
                <div className="home-header1">
                    <div className="home-header1-container">
                        <span className="my-2">Today Let's Learn From Online</span>
                        <br />
                        <Button variant="contained" className="continue-btn">
                            Continue <ArrowForward fontSize='small' className="arrow" />
                        </Button>
                    </div>
                </div>
                <div className="home-header2 mb-5 bg-light py-3">
                    <div className="component">
                        <div className='component-img'>
                            <ImageOutlinedIcon className="img-icon" />
                        </div>
                        <div className="component-header h6">
                            All Visuals
                        </div>
                        <div className="component-footer">
                            Our app support fully visuals so that one can understand very easily.
                        </div>
                    </div>
                    <div className="component">
                        <div className='component-img'>
                            <CampaignIcon className="img-icon" />
                        </div>
                        <div className="component-header h6">
                            Audio Available
                        </div>
                        <div className="component-footer">
                            Our app has feature for audio so it can be easy to hear visuals as well.
                        </div>
                    </div>
                    <div className="component">
                        <div className='component-img'>
                            <FormatListBulletedIcon className="img-icon" />
                        </div>
                        <div className="component-header h6">
                            Wide Range
                        </div>
                        <div className="component-footer">
                            We have range of games available with us which is tested and proved effective.
                        </div>
                    </div><div className="component">
                        <div className='component-img'>
                            <VerifiedUserIcon className="img-icon" />
                        </div>
                        <div className="component-header h6">
                            Trusted
                        </div>
                        <div className="component-footer">
                            All the games are proven effective by therapist. It is safe.
                        </div>
                    </div>
                </div>
                <div className="home-header3 mb-2">
                    <div className="home-header3-container">
                        <span className="my-2">"Children can learn anything if it's fun"</span>
                    </div>
                </div>
                <div className="bg-light p-5">
                    <div className="home-header4">
                        <div className="home-header4-container p-2">
                            <h4 className="text-center header">Our feature</h4>
                            <ul>
                                <li>Dashboard for tracking progress</li>
                                <li>Audio Support</li>
                                <li>Cost effective</li>
                                <li>Full screen support</li>
                                <li>Easy to use</li>
                                <li>Level scheme for increase difficulties</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <TeamComponent />
            </div>
        </>
    );
}

export default HomeComponent