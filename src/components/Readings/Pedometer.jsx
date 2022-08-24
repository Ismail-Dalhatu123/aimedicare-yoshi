import { useEffect, useState } from 'react';
import { useLocation } from 'react-router';
import icon from '../../assets/svg/pedometer.svg';
import axios from '../../axios';

function Pedometer({ date }) {
	const [data, setData] = useState([]);
	const id = useLocation().pathname.split('/').pop();
	const name = 'pedometer';

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
					<span>{data.length ? data[data.length - 1]?.['step'] : '0'}</span>{' '}
					Steps
				</p>
			</div>
		</div>
	);
}

export default Pedometer;
