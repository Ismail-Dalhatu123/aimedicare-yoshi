import { useNavigate } from 'react-router';
import back from '../assets/svg/back-arrow.svg';
import player from '../assets/png/player.png';

function StudentInfo({ fullname, gender, phoneNumber }) {
	const navigate = useNavigate();

	return (
		<div className="student-info">
			<div className="details">
				<div className="img-wrapper" onClick={() => navigate(-1)}>
					<img src={back} alt="go back" />
				</div>

				<div className="status">
					<div className="online" />
				</div>

				<div>
					<div className="name-wrapper">
						<p className="name">{fullname}</p>
						<p className="email">example@email.com</p>
					</div>

					<div className="age-wrapper">
						<p>Date of Birth: 1st Jan 0000</p>
						<p>Gender: {gender}</p>
						<p>Phone: {phoneNumber}</p>
					</div>
				</div>
			</div>

			<div className="player-wrapper">
				<div className="height">
					<p className="title">Height</p>
					<p>
						5<span>ft</span> 5<span>in</span>
					</p>
				</div>
				<img src={player} alt={fullname} />
				<div className="height">
					<p className="title">Weight</p>
					<p>
						70<span>kg</span>
					</p>
				</div>
			</div>

			<div className="map-wrapper">
				<p>GPS</p>
			</div>
		</div>
	);
}

export default StudentInfo;
