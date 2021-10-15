
import { Container, Row } from 'react-bootstrap';
import useDoctors from '../../../hooks/useDoctors';
import Doctor from './../Doctor/Doctor';

const Doctors = () => {
     const [doctors] = useDoctors();
    return (
        <div id="doctors">
            <Container>
                <h1 className="text-center text-primary fw-bold my-3">Top Doctors</h1>
                <Row>
                    {
                        doctors.map(doctor=> <Doctor
                         key={doctor.id}
                         doctor={doctor}
                        />)
                    }
                </Row>
            </Container>
        </div>
    );
};

export default Doctors;