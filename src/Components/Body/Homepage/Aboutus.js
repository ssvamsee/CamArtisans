import aboutusimg from '../../../Assets/Images/aboutsus.png'
function Aboutus(){
    return(
        <>
        <div className="Aboutus">
            <div className="Aboutusleftcontainer">
                <div className="AboutusTitlecon">
                    <h2>About Us</h2>
                    <div className='aboutushr'></div>
                </div>
                <div className="Aboutustextcontainer">
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                </div>
                <div className="AboutusJON">
                    <p className='aboutusjontext'>Join our network &gt;&gt; </p>
                </div>
            </div>
            <div className="Aboutusrightcontainer">
                <div className="Aboutusimgcontainer">
                    <img className='Aboutusimg' src={aboutusimg} alt="aboutus"/>
                </div>
            </div>
        </div>
        </>
    );
}

export default Aboutus;