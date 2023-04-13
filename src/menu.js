import { useState } from "react";
import Page from "./page";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import branchlogo from "./IEEE-Branch-logo.svg";
// You can actually name it whatever, it can even be Hilbert
// import Hilbert from "./IEEE-Branch-logo.svg"; will still work

import {
	faHomeLg,
	faChartBar,
	faFlag,
	faHourglass,
	faClipboard,
	faUser,
	faLock,
	faRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";

const Menu = () => {
	const [pageChoice, setPage] = useState("home");

	const changeIconColor = iconID => {
		// this takes in a number
		// we can also make it take in a string
		// what matters is that it's a correct ID to target our icon
		document.getElementById(`icon-${iconID}`).classList.toggle("blueIcon");
	};

	return (
		<div>
			<div className="con">
							
			<div className="profile">
				<div className="Myprofile">My profile
				<FontAwesomeIcon
					id="user"
					icon={faUser}
				    className="usericon"
				/>
				<div className="UserName"> 
				<p className="Fname">First Name</p>
				<p className="lname">Last Name</p>
				
				</div>
				<div className="typeName">Leader</div>
				<button className="changePassword">
					<FontAwesomeIcon
					id="LockIcon"
					icon={faLock}
				    className="lockIcon"
				/>
				<p className="PchangePassword">
				Change Password
				</p>
				</button>

				<a href="">
				<div className="logDiv">
					<FontAwesomeIcon
					id="logouticon"
					icon={faRightFromBracket}
				    className="logout"
				/>
				<p className="log">log out</p>
				</div></a>
				</div>
				
			</div>
				<nav className="navigation ">
					<a
						href="https://github.com/IEEE-SUSTech"
						class="branchLogo"
					>
						<img src={branchlogo} height="80" alt="Branch logo" />
					</a>
					<ul className="">
						<li>
							<div
								className="icons"
								onMouseEnter={() => {
									changeIconColor(1);
								}}
								onMouseLeave={() => {
									changeIconColor(1);
								}}
							>
								<FontAwesomeIcon
									id="icon-1"
									icon={faHomeLg}
									onClick={() => setPage("home")}
									className="FontAwesome"
								/>
							</div>
						</li>
						<li>
							<div
								className="icons"
								onMouseEnter={() => {
									changeIconColor(2);
								}}
								onMouseLeave={() => {
									changeIconColor(2);
								}}
							>
								<FontAwesomeIcon
									id="icon-2"
									icon={faChartBar}
									onClick={() => setPage("chart")}
									className="FontAwesomeIcon"
								/>
							</div>
						</li>
						<li>
							<div
								className="icons"
								onMouseEnter={() => {
									changeIconColor(3);
								}}
								onMouseLeave={() => {
									changeIconColor(3);
								}}
							>
								<FontAwesomeIcon
									id="icon-3"
									icon={faFlag}
									onClick={() => setPage("flags")}
									className="FontAwesomeIcon"
								/>
							</div>
						</li>
						<li>
							<div
								className="icons"
								onMouseEnter={() => {
									changeIconColor(4);
								}}
								onMouseLeave={() => {
									changeIconColor(4);
								}}
							>
								<FontAwesomeIcon
									id="icon-4"
									icon={faHourglass}
									onClick={() => setPage("time")}
									className="FontAwesomeIcon"
								/>
							</div>
						</li>
						<li>
							<div
								className="icons"
								onMouseEnter={() => {
									changeIconColor(5);
								}}
								onMouseLeave={() => {
									changeIconColor(5);
								}}
							>
								<FontAwesomeIcon
									id="icon-5"
									icon={faClipboard}
									onClick={() => setPage("regulations")}
									className="FontAwesomeIcon"
								/>
							</div>
						</li>
						<li>
							<div
								className="icons"
								onMouseEnter={() => {
									changeIconColor(6);
								}}
								onMouseLeave={() => {
									changeIconColor(6);
								}}
							>
								<FontAwesomeIcon
									id="icon-6"
									icon={faClipboard}
									onClick={() => setPage("regu")}
									className="FontAwesomeIcon"
								/>
							</div>
						</li>
					</ul>
				</nav>

				<Page choice={pageChoice} />
			</div>
		</div>
	);
};

export default Menu;
