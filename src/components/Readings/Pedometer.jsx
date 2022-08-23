import { useEffect, useState } from 'react';
import { useLocation } from 'react-router';
import icon from '../../assets/svg/pedometer.svg';
import axios from '../../axios';

function Pedometer({ date }) {
	const [data, setData] = useState([]);
	const id = useLocation().pathname.split('/').pop();
	const name = 'pedometer';
	const totalSteps = data
		.reduce((prev, current) => prev + current.step, 0)
		.toString()
		.replace(/\B(?=(\d{3})+(?!\d))/g, ',');

	useEffect(() => {
		axios
			.get(`/v1/vitals/${id}/sport-data?from=${date}&to=${date}`)
			.then((res) => setData(res.data.data.readings));
	}, [id, date]);

	return (
		<div className="reading">
			<div className="title-wrapper">
				<img src={icon} alt={name} />
				<p>{name}</p>
			</div>

			<div className="value-wrapper">
				<p>
					<span>{data.length ? totalSteps : '0'}</span> Steps
				</p>
			</div>
		</div>
	);
}

export default Pedometer;
