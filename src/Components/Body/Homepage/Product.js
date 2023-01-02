import Button from "react-bootstrap/esm/Button";
import icon from '../../../Assets/Images/buttonicon.png'
import image from '../../../Assets/Images/productspage.png'

function Product(){
    return(
        <>
            <div className="Product">
                <div className="Producttitle">
                    <h2 className="ProductTitle">Product</h2>
                    <div className="Producthr"></div>
                </div>
                <div className="ProductSubTitle">
                    <h1>A solution for all budgets</h1>
                </div>
                <div className="ProductContainer">
                    <div className="productcon1">
                        <h2 className="productcon1title">PhotoShoots</h2>
                        <p className="productcon1text">Book a single on-demand photoshoot in as little as 60 seconds, for any business or personal need. No minimums, pay as you go.</p>
                        <Button className='productbutton'>Book a shoot<img className='productbuttonicon' src={icon} alt="icon"/></Button>
                    </div>
                    <div className="productcon2">
                        <img src={image} alt="productimage"/>
                    </div>
                    <div className="productcon3">
                    <h2 className="productcon1title">PhotoWorkflow</h2>
                        <p className="productcon1text">Lorem Ipsum is simply dummy text of the printing and type setting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
                        <Button className='productbutton'>Learn more<img className='productbuttonicon' src={icon} alt="icon"/></Button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Product;