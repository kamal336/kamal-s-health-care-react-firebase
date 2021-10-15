import React, { useEffect,useState} from 'react';
import { useParams } from 'react-router-dom';


const ServiceDetails = () => {
    const [services,setServices] = useState([]);
    const {serviceId} = useParams();
    console.log(serviceId);
    const [details,setDetails] = useState({});

    useEffect(()=>{
        fetch("./services.json")
        .then(res => res.json())
        .then(data => setServices(data))
    },[])
  
    useEffect(()=>{
       const foundService = services.find(service=> service.id === serviceId)
       console.log(foundService);
       setDetails(foundService);
    },[services])
  

    return (
        <div>
            <h1>This is service details{serviceId}</h1>
            {/* <h2>{singleService?.title}</h2>
            <h2>{singleService?.name}</h2> */}
        </div>
    );
};

export default ServiceDetails;