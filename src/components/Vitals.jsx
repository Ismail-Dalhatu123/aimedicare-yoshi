import { Button } from '@mui/material';
import Pedometer from './Readings/Pedometer';
import HRV from './Readings/HRV';
import HeartRate from './Readings/HeartRate';
import BloodPressure from './Readings/BloodPressure';
import BloodOxygen from './Readings/BloodOxygen';

function Vitals({ date }) {
	return (
		<div className="vitals">
			<div className="btn-wrapper">
				<Button variant="contained">Today</Button>
				<Button variant="outlined">Yesterday</Button>
				<Button variant="outlined">2 days ago</Button>
			</div>

			<div className="readings">
				<Pedometer date={date} />
				<HRV date={date} />
				<HeartRate date={date} />
				<BloodPressure date={date} />
				<BloodOxygen date={date} />
			</div>
		</div>
	);
}

export default Vitals;
