import img1 from '../../../Assets/Images/ourservice1.png';
import img2 from '../../../Assets/Images/ourservice2.png';
import img3 from '../../../Assets/Images/ourservice3.png';

function Ourservices(){
    return(
        <>
        <div className="Ourservices">
            <div className="Ouservicestitle">
                <h2>OUR SERVICES</h2>
                <div className="ourservicehr"></div>
            </div>
            <div className="Ouservicesimgcontainer">
                <div className="Ourservicesimg">
                    <img className='OSIMG' src={img1} alt="OSIMG"/>
                    <h2 className='OSIMGtext'>Business Users</h2>
                </div>
                <div className="Ourservicesimg">
                    <img className='OSIMG' src={img2} alt="OSIMG"/>
                    <h2 className='OSIMGtext'>individual</h2>
                </div>
                <div className="Ourservicesimg">
                    <img className='OSIMG' src={img3} alt="OSIMG"/>
                    <h2 className='OSIMGtext'>NOT FOR PROFIT</h2>
                </div>
            </div>
        </div>
        </>
    );
}

export default Ourservices;