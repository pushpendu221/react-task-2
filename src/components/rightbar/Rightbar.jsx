import "./rightbar.css";
import React from 'react'

export default function Rightbar() {
  return (
    <div className="rightbar">
        <div className="rightbarWrapper">
            <div className="birthdayContainer">
            <img className="birthdayImg" src="assets/images/gift.png" alt="" />
            <span className="birthdayText">
                <b>Pola Foster</b> and <b>3 other friends</b> have a birhday today.
            </span>
            </div>
            <img className="rightbarAd" src="/assets/images/ad.png" alt="" />
            <h4 className="rightbarTitle">Online Friends</h4>
            <ul className="rightbarFriendList">
            <li className="rightbarFriend">
            <div className="rightbarProfileImgContainer">
                <img className="rightbarProfileImg" src="assets/images/1.jpeg" alt="" />
                <span className="rightbarOnline"></span>
            </div>
            <span className="rightbarUsername">John Carter</span>
            </li>
            <li className="rightbarFriend">
            <div className="rightbarProfileImgContainer">
                <img className="rightbarProfileImg" src="assets/images/1.jpeg" alt="" />
                <span className="rightbarOnline"></span>
            </div>
            <span className="rightbarUsername">John Carter</span>
            </li>
            <li className="rightbarFriend">
            <div className="rightbarProfileImgContainer">
                <img className="rightbarProfileImg" src="assets/images/1.jpeg" alt="" />
                <span className="rightbarOnline"></span>
            </div>
            <span className="rightbarUsername">John Carter</span>
            </li>
            <li className="rightbarFriend">
            <div className="rightbarProfileImgContainer">
                <img className="rightbarProfileImg" src="assets/images/1.jpeg" alt="" />
                <span className="rightbarOnline"></span>
            </div>
            <span className="rightbarUsername">John Carter</span>
            </li>
            </ul>
        </div>
    </div>
  )
};
