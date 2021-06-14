import React,{Component} from 'react'
import Card from './CardUI';
import img1 from '../assets/city.png'
import img2 from '../assets/donus.png'
import img3 from '../assets/selfie.png'
import img4 from '../assets/city.png'
class Cards extends Component{
    render(){
        return(
            <div className="container-fluid d-flex justify-content-center">
                <div className="row">
                    <table cellPadding="20" cellSpacing="20">
                        <tr>
                            <td align="center">
                                <Card imgsrc={img1} title='Search' />
                            </td>
                            <td align="center">
                                <Card imgsrc={img2} title='Materials' />
                            </td>
                        </tr>
                        <tr>
                            <td align="center">
                                <Card imgsrc={img3} title='Quiz' />
                            </td>
                            <td align="center">
                                <Card imgsrc={img4} title='Volunteer'/>
                            </td>
                        </tr>

                    </table>
                    {/* <div className="col-md-5">
                        <Card imgsrc={img1} title='Search' />
                    </div>
                    <div className="col-md-5">
                        <Card imgsrc={img2} title='Materials' />
                    </div> */}
                    {/* <div className="col-md-6">
                        <Card imgsrc={img3} title='Quiz' />
                    </div>
                    <div className="col-md-6">
                        <Card imgsrc={img4} title='Volunteer'/>
                    </div> */}
                </div>
            </div>
        );
    }
}
export default Cards;