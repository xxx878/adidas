import { Route, Routes, Link} from 'react-router-dom'
import Card from 'react-bootstrap/Card';

import img1 from '../../assets/m-snikers/snikers-1.avif'
import img2 from '../../assets/m-snikers/snikers-2.avif'
import img3 from '../../assets/m-snikers/snikers-3.avif'
import img4 from '../../assets/m-snikers/snikers-4.avif'
import img5 from '../../assets/m-snikers/snikers-5.avif'
import img6 from '../../assets/m-snikers/snikers-6.avif'
import img7 from '../../assets/m-snikers/snikers-7.avif'
import img8 from '../../assets/m-snikers/snikers-8.avif'
import img9 from '../../assets/m-snikers/snikers-9.avif'
import img10 from '../../assets/m-snikers/snikers-10.avif'
import img11 from '../../assets/m-snikers/snikers-11.avif'
import img12 from '../../assets/m-snikers/snikers-12.avif'
import img13 from '../../assets/m-snikers/snikers-13.avif'
import img14 from '../../assets/m-snikers/snikers-14.avif'
import img15 from '../../assets/m-snikers/snikers-15.avif'
import img16 from '../../assets/m-snikers/snikers-16.avif'
import img17 from '../../assets/m-snikers/snikers-17.avif'
import img18 from '../../assets/m-snikers/snikers-18.avif'
import img19 from '../../assets/m-snikers/snikers-19.avif'
import img20 from '../../assets/m-snikers/snikers-20.avif'

import running1 from '../../assets/m-running/running-1.avif'
import running2 from '../../assets/m-running/running-2.avif'
import running3 from '../../assets/m-running/running-3.avif'
import running4 from '../../assets/m-running/running-4.avif'
import running5 from '../../assets/m-running/running-5.avif'
import running6 from '../../assets/m-running/running-6.avif'
import running7 from '../../assets/m-running/running-7.avif'
import running8 from '../../assets/m-running/running-8.avif'
import running9 from '../../assets/m-running/running-9.avif'
import running10 from '../../assets/m-running/running-10.avif'
import running11 from '../../assets/m-running/running-11.avif'
import running12 from '../../assets/m-running/running-12.avif'
import running13 from '../../assets/m-running/running-13.avif'
import running14 from '../../assets/m-running/running-14.avif'
import running15 from '../../assets/m-running/running-15.avif'
import running16 from '../../assets/m-running/running-16.avif'
import running17 from '../../assets/m-running/running-17.avif'
import running18 from '../../assets/m-running/running-18.avif'
import running19 from '../../assets/m-running/running-19.avif'
import running20 from '../../assets/m-running/running-20.avif'

import soccer1 from '../../assets/m-soccer/soccer-1.avif'
import soccer2 from '../../assets/m-soccer/soccer-2.avif'
import soccer3 from '../../assets/m-soccer/soccer-3.avif'
import soccer4 from '../../assets/m-soccer/soccer-4.avif'
import soccer5 from '../../assets/m-soccer/soccer-5.avif'
import soccer6 from '../../assets/m-soccer/soccer-6.avif'
import soccer7 from '../../assets/m-soccer/soccer-7.avif'
import soccer8 from '../../assets/m-soccer/soccer-8.avif'
import soccer9 from '../../assets/m-soccer/soccer-9.avif'
import soccer10 from '../../assets/m-soccer/soccer-10.avif'
import soccer11 from '../../assets/m-soccer/soccer-11.avif'
import soccer12 from '../../assets/m-soccer/soccer-12.avif'
import soccer13 from '../../assets/m-soccer/soccer-13.avif'
import soccer14 from '../../assets/m-soccer/soccer-14.avif'
import soccer15 from '../../assets/m-soccer/soccer-15.avif'
import soccer16 from '../../assets/m-soccer/soccer-16.avif'
import soccer17 from '../../assets/m-soccer/soccer-17.avif'
import soccer18 from '../../assets/m-soccer/soccer-18.avif'
import soccer19 from '../../assets/m-soccer/soccer-19.avif'
import soccer20 from '../../assets/m-soccer/soccer-20.avif'

import walking1 from '../../assets/m-walking/walking-1.avif'

import './Man.css'

const Kids = () => {
  return (
    <div className='man'>
     
        <div className='shoes'>
            <ul>
                <div>SHOES</div>
                <li><Link to="snikers">Snikers</Link></li>
                <li><Link to="running">Running</Link></li>
                <li><Link to="slides&sandals">Soccer</Link></li>
                <li><Link to="walking">Walking</Link></li>
            </ul>
        </div>

        <div className='clothing'>
            <ul>
                <div>CLOTHING</div>
                <li><Link to="t-shorts&tops">T-Shorts & Tops</Link></li>
                <li><Link to="shorts">Shorts</Link></li>
                <li><Link to="dresses & skirts">Hoodies & Sweatshirts</Link></li>
                <li><Link to="plus size">Swimwear</Link></li>
            </ul>
        </div>

        
      
        <div className='cards'>
            <Routes>
                <Route path="snikers" element={<div className='shikers'>

                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={img1} />
                            <Card.Body>
                                <Card.Title>NIZZA PLATFORM SHOES</Card.Title>
                                <Card.Text>
                                Originals
                                </Card.Text>
                                <Card.Text>$80</Card.Text>
                                <Card.Text>2 colorst</Card.Text>
                            </Card.Body>
                        </Card>

                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={img2} />
                            <Card.Body>
                                <Card.Title>SWIFT RUN 1.0 SHOES</Card.Title>
                                <Card.Text>
                                Men's • Sportswear
                                </Card.Text>
                                <Card.Text>$80</Card.Text>
                                <Card.Text>4 colorst</Card.Text>
                            </Card.Body>
                        </Card>

                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={img3} />
                            <Card.Body>
                                <Card.Title>ULTRABOOST 1.0 SHOES</Card.Title>
                                <Card.Text>
                                Men's • Sportswear
                                </Card.Text>
                                <Card.Text>$190</Card.Text>
                                <Card.Text>6 colorst</Card.Text>
                            </Card.Body>
                        </Card>

                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={img4} />
                            <Card.Body>
                                <Card.Title>GAZELLE SHOES</Card.Title>
                                <Card.Text>
                                Men's • Originals
                                </Card.Text>
                                <Card.Text>$100</Card.Text>
                                <Card.Text>33 colorst</Card.Text>
                            </Card.Body>
                        </Card>

                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={img5} />
                            <Card.Body>
                                <Card.Title>GAZELLE INDOOR SHOES</Card.Title>
                                <Card.Text>
                                Men's • Originals
                                </Card.Text>
                                <Card.Text>$120</Card.Text>
                                <Card.Text>12 colorst</Card.Text>
                            </Card.Body>
                        </Card>

                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={img6} />
                            <Card.Body>
                                <Card.Title>BUSENITZ VULC II SHOES</Card.Title>
                                <Card.Text>
                                Originals
                                </Card.Text>
                                <Card.Text>$75</Card.Text>
                                <Card.Text>3 colorst</Card.Text>
                            </Card.Body>
                        </Card>

                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={img7} />
                            <Card.Body>
                                <Card.Title>ULTRABOOST 1.0 SHOES</Card.Title>
                                <Card.Text>
                                Men's • Sportswear   
                                </Card.Text>
                                <Card.Text>$190</Card.Text>
                                <Card.Text>6 colorst</Card.Text>
                            </Card.Body>
                        </Card>

                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={img8} />
                            <Card.Body>
                                <Card.Title>4DFWD 3 RUNNING SHOES</Card.Title>
                                <Card.Text>
                                Men's • Running
                                </Card.Text>
                                <Card.Text>$200</Card.Text>
                                <Card.Text>4 colorst</Card.Text>
                            </Card.Body>
                        </Card>

                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={img9} />
                            <Card.Body>
                                <Card.Title>NMD_G1 SHOES</Card.Title>
                                <Card.Text>
                                Men's • Originals
                                </Card.Text>
                                <Card.Text>$140</Card.Text>
                                <Card.Text>3 colorst</Card.Text>
                            </Card.Body>
                        </Card>

                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={img10} />
                            <Card.Body>
                                <Card.Title>SUPERSTAR XLG SHOES</Card.Title>
                                <Card.Text>
                                Originals
                                </Card.Text>
                                <Card.Text>$110</Card.Text>
                                <Card.Text>4 colorst</Card.Text>
                            </Card.Body>
                        </Card>

                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={img11} />
                            <Card.Body>
                                <Card.Title>SUPERSTAR SHOES</Card.Title>
                                <Card.Text>
                                Men's • Originals
                                </Card.Text>
                                <Card.Text>$110</Card.Text>
                                <Card.Text>14 colorst</Card.Text>
                            </Card.Body>
                        </Card>

                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={img12} />
                            <Card.Body>
                                <Card.Title>MAD IIINFINITY</Card.Title>
                                <Card.Text>
                                Originals
                                </Card.Text>
                                <Card.Text>$180</Card.Text>
                                <Card.Text>2 colorst</Card.Text>
                            </Card.Body>
                        </Card>

                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={img13} />
                            <Card.Body>
                                <Card.Title>SAMBA CLASSIC SHOES</Card.Title>
                                <Card.Text>
                                Soccer
                                </Card.Text>
                                <Card.Text>$90</Card.Text>
                                <Card.Text>2 colorst</Card.Text>
                            </Card.Body>
                        </Card>

                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={img14} />
                            <Card.Body>
                                <Card.Title>UBOUNCE DNA SHOES</Card.Title>
                                <Card.Text>
                                Men's • Sportswear
                                </Card.Text>
                                <Card.Text>$90</Card.Text>
                                <Card.Text>8 colorst</Card.Text>
                            </Card.Body>
                        </Card>

                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={img15} />
                            <Card.Body>
                                <Card.Title>KAPTIR 3.0 SHOES</Card.Title>
                                <Card.Text>
                                Men's • Essentials  
                                </Card.Text>
                                <Card.Text>$68</Card.Text>
                                <Card.Text>12 colorst</Card.Text>
                            </Card.Body>
                        </Card>

                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={img16} />
                            <Card.Body>
                                <Card.Title>NORA SHOES</Card.Title>
                                <Card.Text>
                                Originals
                                </Card.Text>
                                <Card.Text>$64</Card.Text>
                                <Card.Text>9 colorst</Card.Text>
                            </Card.Body>
                        </Card>

                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={img17} />
                            <Card.Body>
                                <Card.Title>RESPONSE</Card.Title>
                                <Card.Text>
                                Men's • Running
                                </Card.Text>
                                <Card.Text>$60</Card.Text>
                                <Card.Text>5 colorst</Card.Text>
                            </Card.Body>
                        </Card>

                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={img18} />
                            <Card.Body>
                                <Card.Title>SUPERSTAR XLG SHOES</Card.Title>
                                <Card.Text>
                                Men's • TERREX  
                                </Card.Text>
                                <Card.Text>$105</Card.Text>
                                <Card.Text>2 colorst</Card.Text>
                            </Card.Body>
                        </Card>

                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={img19} />
                            <Card.Body>
                                <Card.Title>TERREX TRAILMAKER GORE-TEX HIKING SHOES</Card.Title>
                                <Card.Text>
                                Men's • TERREX
                                </Card.Text>
                                <Card.Text>$91</Card.Text>
                                <Card.Text>2 colorst</Card.Text>
                            </Card.Body>
                        </Card>

                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={img20} />
                            <Card.Body>
                                <Card.Title>SUPERSTAR XLG SHOES</Card.Title>
                                <Card.Text>
                                Originals
                                </Card.Text>
                                <Card.Text>$110</Card.Text>
                                <Card.Text>4 colorst</Card.Text>
                            </Card.Body>
                        </Card>
                    </div>} />
                <Route path="running" element={<div className='running'>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={running1} />
                        <Card.Body>
                            <Card.Title>ADIZERO TAKUMI SEN 10 M</Card.Title>
                            <Card.Text>
                            Men's • Running
                            </Card.Text>
                            <Card.Text>$180</Card.Text>
                            <Card.Text>2 colorst</Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={running2} />
                        <Card.Body>
                            <Card.Title>ADIZERO ADIOS PRO 3 M</Card.Title>
                            <Card.Text>
                            Running
                            </Card.Text>
                            <Card.Text>$250</Card.Text>
                            <Card.Text>4 colorst</Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={running3} />
                        <Card.Body>
                            <Card.Title>ADIZERO PRIME X 2.0 STRUNG RUNNING SHOES</Card.Title>
                            <Card.Text>
                            Running
                            </Card.Text>
                            <Card.Text>$300</Card.Text>
                            <Card.Text>3 colorst</Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={running4} />
                        <Card.Body>
                            <Card.Title>ADIZERO AVANTI SHOES</Card.Title>
                            <Card.Text>
                            Track & Field
                            </Card.Text>
                            <Card.Text>$150</Card.Text>
                            <Card.Text>5 colorst</Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={running5} />
                        <Card.Body>
                            <Card.Title>SUPERNOVA RISE SHOES</Card.Title>
                            <Card.Text>
                            Men's • Running
                            </Card.Text>
                            <Card.Text>$140</Card.Text>
                            <Card.Text>7 colorst</Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={running6} />
                        <Card.Body>
                            <Card.Title>ADISTAR CS 2.0 SHOES</Card.Title>
                            <Card.Text>
                            Men's • Running
                            </Card.Text>
                            <Card.Text>$128</Card.Text>
                            <Card.Text>4 colorst</Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={running7} />
                        <Card.Body>
                            <Card.Title>DURAMO SPEED SHOES</Card.Title>
                            <Card.Text>
                            Men's • Running
                            </Card.Text>
                            <Card.Text>$140</Card.Text>
                            <Card.Text>8 colorst</Card.Text>
                        </Card.Body>
                    </Card>
 
 
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={running8} />
                        <Card.Body>
                            <Card.Title>PUREBOOST 23 SHOES</Card.Title>
                            <Card.Text>
                            Men's • Running
                            </Card.Text>
                            <Card.Text>$140</Card.Text>
                            <Card.Text>4 colorst</Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={running9} />
                        <Card.Body>
                            <Card.Title>4DFWD 3 RUNNING SHOES</Card.Title>
                            <Card.Text>
                            Men's • Running
                            </Card.Text>
                            <Card.Text>$200</Card.Text>
                            <Card.Text>4 colorst</Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={running10} />
                        <Card.Body>
                            <Card.Title>SOLAR GLIDE 5 GORE-TEX RUNNING SHOES</Card.Title>
                            <Card.Text>
                            Men's • Running
                            </Card.Text>
                            <Card.Text>$160</Card.Text>
                            <Card.Text>3 colorst</Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={running11} />
                        <Card.Body>
                            <Card.Title>ADIZERO PRIME X 2.0 STRUNG RUNNING SHOES</Card.Title>
                            <Card.Text>
                            Running
                            </Card.Text>
                            <Card.Text>$300</Card.Text>
                            <Card.Text>4 colorst</Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={running12} />
                        <Card.Body>
                            <Card.Title>ADIZERO ADIOS 8 RUNNING SHOES</Card.Title>
                            <Card.Text>
                            Men's • Running
                            </Card.Text>
                            <Card.Text>$130</Card.Text>
                            <Card.Text>3 colorst</Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={running13} />
                        <Card.Body>
                            <Card.Title>DURAMO SPEED RUNNING SHOES</Card.Title>
                            <Card.Text>
                            Men's • Running
                            </Card.Text>
                            <Card.Text>$63</Card.Text>
                            <Card.Text>8 colorst</Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={running14} />
                        <Card.Body>
                            <Card.Title>DURAMO SL RUNNING SHOES</Card.Title>
                            <Card.Text>
                            Men's • Running
                            </Card.Text>
                            <Card.Text>$59</Card.Text>
                            <Card.Text>2 colorst</Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={running15} />
                        <Card.Body>
                            <Card.Title>DURAMO SPEED RUNNING SHOES</Card.Title>
                            <Card.Text>
                            Men's • Running
                            </Card.Text>
                            <Card.Text>$90</Card.Text>
                            <Card.Text>8 colorst</Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={running16} />
                        <Card.Body>
                            <Card.Title>SUPERNOVA RISE MOVE FOR THE PLANET SHOES</Card.Title>
                            <Card.Text>
                            Men's • Running

                            </Card.Text>
                            <Card.Text>$140</Card.Text>
                            <Card.Text>10 colorst</Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={running17} />
                        <Card.Body>
                            <Card.Title>RESPONSE</Card.Title>
                            <Card.Text>
                            Men's • Running
                            </Card.Text>
                            <Card.Text>$60</Card.Text>
                            <Card.Text>7 colorst</Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={running18} />
                        <Card.Body>
                            <Card.Title>DURAMO SPEED RUNNING SHOES</Card.Title>
                            <Card.Text>
                            Men's • Running
                            </Card.Text>
                            <Card.Text>$63</Card.Text>
                            <Card.Text>8 colorst</Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={running19} />
                        <Card.Body>
                            <Card.Title>GALAXY 6 RUNNING SHOES</Card.Title>
                            <Card.Text>
                            Men's • Running
                            </Card.Text>
                            <Card.Text>$60</Card.Text>
                            <Card.Text>5 colorst</Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={running20} />
                        <Card.Body>
                            <Card.Title>DURAMO SPEED RUNNING SHOES</Card.Title>
                            <Card.Text>
                            Men's • Running
                            </Card.Text>
                            <Card.Text>$90</Card.Text>
                            <Card.Text>7 colorst</Card.Text>
                        </Card.Body>
                    </Card>
                    </div>} />
                <Route path="slides&sandals" element={<div className='soccer'>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={soccer1} />
                        <Card.Body>
                            <Card.Title>X CRAZYFAST ELITE LACELESS FIRM GROUND CLEATS</Card.Title>
                            <Card.Text>
                            Soccer
                            </Card.Text>
                            <Card.Text>$260</Card.Text>
                            <Card.Text>6 colorst</Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={soccer2} />
                        <Card.Body>
                            <Card.Title>COPA PURE II ELITE FIRM GROUND CLEATS</Card.Title>
                            <Card.Text>
                            Soccer
                            </Card.Text>
                            <Card.Text>$230</Card.Text>
                            <Card.Text>4 colorst</Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={soccer3} />
                        <Card.Body>
                            <Card.Title>PREDATOR 24 LEAGUE LACELESS FIRM GROUND CLEATS</Card.Title>
                            <Card.Text>
                            Soccer
                            </Card.Text>
                            <Card.Text>$100</Card.Text>
                            <Card.Text>6 colorst</Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={soccer4} />
                        <Card.Body>
                            <Card.Title>X CRAZYFAST LEAGUE LACELESS TURF CLEATS</Card.Title>
                            <Card.Text>
                            Soccer
                            </Card.Text>
                            <Card.Text>$100</Card.Text>
                            <Card.Text>6 colorst</Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={soccer5} />
                        <Card.Body>
                            <Card.Title>PREDATOR 24 LEAGUE TURF CLEATS</Card.Title>
                            <Card.Text>
                            Soccer
                            </Card.Text>
                            <Card.Text>$95</Card.Text>
                            <Card.Text>2 colorst</Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={soccer6} />
                        <Card.Body>
                            <Card.Title>COPA PURE II LEAGUE FIRM GROUND CLEATS</Card.Title>
                            <Card.Text>
                            Soccer


                            </Card.Text>
                            <Card.Text>$60</Card.Text>
                            <Card.Text>4 colorst</Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={soccer7} />
                        <Card.Body>
                            <Card.Title>F50 ELITE FAST REBORN FIRM GROUND CLEATS</Card.Title>
                            <Card.Text>
                            Soccer
                            </Card.Text>
                            <Card.Text>$260</Card.Text>
                            <Card.Text>17 colorst</Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={soccer8} />
                        <Card.Body>
                            <Card.Title>MESSI SAMBA SHOES</Card.Title>
                            <Card.Text>
                            Soccer
                            </Card.Text>
                            <Card.Text>$100</Card.Text>
                            <Card.Text>3 colorst</Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={soccer9} />
                        <Card.Body>
                            <Card.Title>PREDATOR ELITE FIRM GROUND CLEATS</Card.Title>
                            <Card.Text>
                            Soccer
                            </Card.Text>
                            <Card.Text>$260</Card.Text>
                            <Card.Text>4 colorst</Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={soccer10} />
                        <Card.Body>
                            <Card.Title>X CRAZYFAST.3 FIRM GROUND SOCCER CLEATS</Card.Title>
                            <Card.Text>
                            Soccer
                            </Card.Text>
                            <Card.Text>$76</Card.Text>
                            <Card.Text>2 colorst</Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={soccer11} />
                        <Card.Body>
                            <Card.Title>X CRAZYFAST MESSI LEAGUE FIRM GROUND CLEATS</Card.Title>
                            <Card.Text>
                            Soccer
                            </Card.Text>
                            <Card.Text>$90</Card.Text>
                            <Card.Text>3 colorst</Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={soccer12} />
                        <Card.Body>
                            <Card.Title>GAZELLE CHILE SHOES</Card.Title>
                            <Card.Text>
                            Originals
                            </Card.Text>
                            <Card.Text>$100</Card.Text>
                            <Card.Text>35 colorst</Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={soccer13} />
                        <Card.Body>
                            <Card.Title>X CRAZYFAST.1 LACELESS FIRM GROUND SOCCER CLEATS</Card.Title>
                            <Card.Text>
                                Women's • Originals
                            </Card.Text>
                            <Card.Text>$120</Card.Text>
                            <Card.Text>20 colorst</Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={soccer14} />
                        <Card.Body>
                            <Card.Title>X CRAZYFAST LEAGUE LACELESS FIRM GROUND CLEATS</Card.Title>
                            <Card.Text>
                            Soccer
                            </Card.Text>
                            <Card.Text>$100</Card.Text>
                            <Card.Text>3 colorst</Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={soccer15} />
                        <Card.Body>
                            <Card.Title>X CRAZYFAST LEAGUE TURF SHOES</Card.Title>
                            <Card.Text>
                            Soccer
                            </Card.Text>
                            <Card.Text>$85</Card.Text>
                            <Card.Text>3 colorst</Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={soccer16} />
                        <Card.Body>
                            <Card.Title>COPA PURE II LEAGUE FIRM GROUND CLEATS</Card.Title>
                            <Card.Text>
                            Soccer
                            </Card.Text>
                            <Card.Text>$60</Card.Text>
                            <Card.Text>3 colorst</Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={soccer17} />
                        <Card.Body>
                            <Card.Title>SAMBA MESSI SHOES</Card.Title>
                            <Card.Text>
                            Men's • Soccer
                            </Card.Text>
                            <Card.Text>$100</Card.Text>
                            <Card.Text>2 colorst</Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={soccer18} />
                        <Card.Body>
                            <Card.Title>X CRAZYFAST PRO FIRM GROUND CLEATS</Card.Title>
                            <Card.Text>
                            Soccer
                            </Card.Text>
                            <Card.Text>$150</Card.Text>
                            <Card.Text>2 colorst</Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={soccer19} />
                        <Card.Body>
                            <Card.Title>X CRAZYFAST LEAGUE LACELESS TURF CLEATS</Card.Title>
                            <Card.Text>
                            Soccer
                            </Card.Text>
                            <Card.Text>$100</Card.Text>
                            <Card.Text>2 colorst</Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={soccer20} />
                        <Card.Body>
                            <Card.Title>COPA MUNDIAL SOCCER SHOES</Card.Title>
                            <Card.Text>
                            Soccer
                            </Card.Text>
                            <Card.Text>$180</Card.Text>
                            <Card.Text>3 colorst</Card.Text>
                        </Card.Body>
                    </Card>
                    </div>} />
                <Route path="walking" element={<div className='walking'>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={walking1} />
                        <Card.Body>
                            <Card.Title>ADIZERO TAKUMI SEN 10 M</Card.Title>
                            <Card.Text>
                            ADIZERO TAKUMI SEN 10 M
                            </Card.Text>
                            <Card.Text>$180</Card.Text>
                            <Card.Text>3 colorst</Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={walking2} />
                        <Card.Body>
                            <Card.Title>ADIZERO AVANTI SHOES</Card.Title>
                            <Card.Text>
                            Track & Field
                            </Card.Text>
                            <Card.Text>$150</Card.Text>
                            <Card.Text>3 colorst</Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={walking3} />
                        <Card.Body>
                            <Card.Title>SUPERNOVA RISE SHOES</Card.Title>
                            <Card.Text>
                            Men's • Running
                            </Card.Text>
                            <Card.Text>$140</Card.Text>
                            <Card.Text>3 colorst</Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={walking4} />
                        <Card.Body>
                            <Card.Title>DURAMO SPEED SHOES</Card.Title>
                            <Card.Text>
                            Men's • Running
                            </Card.Text>
                            <Card.Text>$90</Card.Text>
                            <Card.Text>8 colorst</Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={walking5} />
                        <Card.Body>
                            <Card.Title>4DFWD X STRUNG</Card.Title>
                            <Card.Text>
                            Men's • Running
                            </Card.Text>
                            <Card.Text>$300</Card.Text>
                            <Card.Text>20 colorst</Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={img6} />
                        <Card.Body>
                            <Card.Title>GAZELLE BOLD SHOES</Card.Title>
                            <Card.Text>
                                Women's • Originals
                            </Card.Text>
                            <Card.Text>$120</Card.Text>
                            <Card.Text>20 colorst</Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={walking19} />
                        <Card.Body>
                            <Card.Title>GAZELLE BOLD SHOES</Card.Title>
                            <Card.Text>
                                Women's • Originals
                            </Card.Text>
                            <Card.Text>$120</Card.Text>
                            <Card.Text>20 colorst</Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={walking9} />
                        <Card.Body>
                            <Card.Title>GAZELLE BOLD SHOES</Card.Title>
                            <Card.Text>
                                Women's • Originals
                            </Card.Text>
                            <Card.Text>$120</Card.Text>
                            <Card.Text>20 colorst</Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={walking2} />
                        <Card.Body>
                            <Card.Title>GAZELLE BOLD SHOES</Card.Title>
                            <Card.Text>
                                Women's • Originals
                            </Card.Text>
                            <Card.Text>$120</Card.Text>
                            <Card.Text>20 colorst</Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={running6} />
                        <Card.Body>
                            <Card.Title>GAZELLE BOLD SHOES</Card.Title>
                            <Card.Text>
                                Women's • Originals
                            </Card.Text>
                            <Card.Text>$120</Card.Text>
                            <Card.Text>20 colorst</Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={walking18} />
                        <Card.Body>
                            <Card.Title>GAZELLE BOLD SHOES</Card.Title>
                            <Card.Text>
                                Women's • Originals
                            </Card.Text>
                            <Card.Text>$120</Card.Text>
                            <Card.Text>20 colorst</Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={img12} />
                        <Card.Body>
                            <Card.Title>GAZELLE BOLD SHOES</Card.Title>
                            <Card.Text>
                                Women's • Originals
                            </Card.Text>
                            <Card.Text>$120</Card.Text>
                            <Card.Text>20 colorst</Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={img13} />
                        <Card.Body>
                            <Card.Title>GAZELLE BOLD SHOES</Card.Title>
                            <Card.Text>
                                Women's • Originals
                            </Card.Text>
                            <Card.Text>$120</Card.Text>
                            <Card.Text>20 colorst</Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={img14} />
                        <Card.Body>
                            <Card.Title>GAZELLE BOLD SHOES</Card.Title>
                            <Card.Text>
                                Women's • Originals
                            </Card.Text>
                            <Card.Text>$120</Card.Text>
                            <Card.Text>20 colorst</Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={img15} />
                        <Card.Body>
                            <Card.Title>GAZELLE BOLD SHOES</Card.Title>
                            <Card.Text>
                                Women's • Originals
                            </Card.Text>
                            <Card.Text>$120</Card.Text>
                            <Card.Text>20 colorst</Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={walking6} />
                        <Card.Body>
                            <Card.Title>GAZELLE BOLD SHOES</Card.Title>
                            <Card.Text>
                                Women's • Originals
                            </Card.Text>
                            <Card.Text>$120</Card.Text>
                            <Card.Text>20 colorst</Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={walking10} />
                        <Card.Body>
                            <Card.Title>GAZELLE BOLD SHOES</Card.Title>
                            <Card.Text>
                                Women's • Originals
                            </Card.Text>
                            <Card.Text>$120</Card.Text>
                            <Card.Text>20 colorst</Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={img18} />
                        <Card.Body>
                            <Card.Title>GAZELLE BOLD SHOES</Card.Title>
                            <Card.Text>
                                Women's • Originals
                            </Card.Text>
                            <Card.Text>$120</Card.Text>
                            <Card.Text>20 colorst</Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={img19} />
                        <Card.Body>
                            <Card.Title>GAZELLE BOLD SHOES</Card.Title>
                            <Card.Text>
                                Women's • Originals
                            </Card.Text>
                            <Card.Text>$120</Card.Text>
                            <Card.Text>20 colorst</Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={running9} />
                        <Card.Body>
                            <Card.Title>GAZELLE BOLD SHOES</Card.Title>
                            <Card.Text>
                                Women's • Originals
                            </Card.Text>
                            <Card.Text>$120</Card.Text>
                            <Card.Text>20 colorst</Card.Text>
                        </Card.Body>
                    </Card>
                    </div>} />  

                <Route path="t-shorts&tops" element={<div className='t-shorts_tops'>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={img1} />
                        <Card.Body>
                            <Card.Title>GAZELLE BOLD SHOES</Card.Title>
                            <Card.Text>
                                Women's • Originals
                            </Card.Text>
                            <Card.Text>$120</Card.Text>
                            <Card.Text>20 colorst</Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={img2} />
                        <Card.Body>
                            <Card.Title>GAZELLE BOLD SHOES</Card.Title>
                            <Card.Text>
                                Women's • Originals
                            </Card.Text>
                            <Card.Text>$120</Card.Text>
                            <Card.Text>20 colorst</Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={img3} />
                        <Card.Body>
                            <Card.Title>GAZELLE BOLD SHOES</Card.Title>
                            <Card.Text>
                                Women's • Originals
                            </Card.Text>
                            <Card.Text>$120</Card.Text>
                            <Card.Text>20 colorst</Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={img4} />
                        <Card.Body>
                            <Card.Title>GAZELLE BOLD SHOES</Card.Title>
                            <Card.Text>
                                Women's • Originals
                            </Card.Text>
                            <Card.Text>$120</Card.Text>
                            <Card.Text>20 colorst</Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={img5} />
                        <Card.Body>
                            <Card.Title>GAZELLE BOLD SHOES</Card.Title>
                            <Card.Text>
                                Women's • Originals
                            </Card.Text>
                            <Card.Text>$120</Card.Text>
                            <Card.Text>20 colorst</Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={img6} />
                        <Card.Body>
                            <Card.Title>GAZELLE BOLD SHOES</Card.Title>
                            <Card.Text>
                                Women's • Originals
                            </Card.Text>
                            <Card.Text>$120</Card.Text>
                            <Card.Text>20 colorst</Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={img7} />
                        <Card.Body>
                            <Card.Title>GAZELLE BOLD SHOES</Card.Title>
                            <Card.Text>
                                Women's • Originals
                            </Card.Text>
                            <Card.Text>$120</Card.Text>
                            <Card.Text>20 colorst</Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={img8} />
                        <Card.Body>
                            <Card.Title>GAZELLE BOLD SHOES</Card.Title>
                            <Card.Text>
                                Women's • Originals
                            </Card.Text>
                            <Card.Text>$120</Card.Text>
                            <Card.Text>20 colorst</Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={img9} />
                        <Card.Body>
                            <Card.Title>GAZELLE BOLD SHOES</Card.Title>
                            <Card.Text>
                                Women's • Originals
                            </Card.Text>
                            <Card.Text>$120</Card.Text>
                            <Card.Text>20 colorst</Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={img10} />
                        <Card.Body>
                            <Card.Title>GAZELLE BOLD SHOES</Card.Title>
                            <Card.Text>
                                Women's • Originals
                            </Card.Text>
                            <Card.Text>$120</Card.Text>
                            <Card.Text>20 colorst</Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={img11} />
                        <Card.Body>
                            <Card.Title>GAZELLE BOLD SHOES</Card.Title>
                            <Card.Text>
                                Women's • Originals
                            </Card.Text>
                            <Card.Text>$120</Card.Text>
                            <Card.Text>20 colorst</Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={img12} />
                        <Card.Body>
                            <Card.Title>GAZELLE BOLD SHOES</Card.Title>
                            <Card.Text>
                                Women's • Originals
                            </Card.Text>
                            <Card.Text>$120</Card.Text>
                            <Card.Text>20 colorst</Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={img13} />
                        <Card.Body>
                            <Card.Title>GAZELLE BOLD SHOES</Card.Title>
                            <Card.Text>
                                Women's • Originals
                            </Card.Text>
                            <Card.Text>$120</Card.Text>
                            <Card.Text>20 colorst</Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={img14} />
                        <Card.Body>
                            <Card.Title>GAZELLE BOLD SHOES</Card.Title>
                            <Card.Text>
                                Women's • Originals
                            </Card.Text>
                            <Card.Text>$120</Card.Text>
                            <Card.Text>20 colorst</Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={img15} />
                        <Card.Body>
                            <Card.Title>GAZELLE BOLD SHOES</Card.Title>
                            <Card.Text>
                                Women's • Originals
                            </Card.Text>
                            <Card.Text>$120</Card.Text>
                            <Card.Text>20 colorst</Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={img16} />
                        <Card.Body>
                            <Card.Title>GAZELLE BOLD SHOES</Card.Title>
                            <Card.Text>
                                Women's • Originals
                            </Card.Text>
                            <Card.Text>$120</Card.Text>
                            <Card.Text>20 colorst</Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={img17} />
                        <Card.Body>
                            <Card.Title>GAZELLE BOLD SHOES</Card.Title>
                            <Card.Text>
                                Women's • Originals
                            </Card.Text>
                            <Card.Text>$120</Card.Text>
                            <Card.Text>20 colorst</Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={img18} />
                        <Card.Body>
                            <Card.Title>GAZELLE BOLD SHOES</Card.Title>
                            <Card.Text>
                                Women's • Originals
                            </Card.Text>
                            <Card.Text>$120</Card.Text>
                            <Card.Text>20 colorst</Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={img19} />
                        <Card.Body>
                            <Card.Title>GAZELLE BOLD SHOES</Card.Title>
                            <Card.Text>
                                Women's • Originals
                            </Card.Text>
                            <Card.Text>$120</Card.Text>
                            <Card.Text>20 colorst</Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={img20} />
                        <Card.Body>
                            <Card.Title>GAZELLE BOLD SHOES</Card.Title>
                            <Card.Text>
                                Women's • Originals
                            </Card.Text>
                            <Card.Text>$120</Card.Text>
                            <Card.Text>20 colorst</Card.Text>
                        </Card.Body>
                    </Card>
                    </div>} />
                <Route path="shorts" element={<div className='shorts'>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={img1} />
                        <Card.Body>
                            <Card.Title>GAZELLE BOLD SHOES</Card.Title>
                            <Card.Text>
                                Women's • Originals
                            </Card.Text>
                            <Card.Text>$120</Card.Text>
                            <Card.Text>20 colorst</Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={img2} />
                        <Card.Body>
                            <Card.Title>GAZELLE BOLD SHOES</Card.Title>
                            <Card.Text>
                                Women's • Originals
                            </Card.Text>
                            <Card.Text>$120</Card.Text>
                            <Card.Text>20 colorst</Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={img3} />
                        <Card.Body>
                            <Card.Title>GAZELLE BOLD SHOES</Card.Title>
                            <Card.Text>
                                Women's • Originals
                            </Card.Text>
                            <Card.Text>$120</Card.Text>
                            <Card.Text>20 colorst</Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={img4} />
                        <Card.Body>
                            <Card.Title>GAZELLE BOLD SHOES</Card.Title>
                            <Card.Text>
                                Women's • Originals
                            </Card.Text>
                            <Card.Text>$120</Card.Text>
                            <Card.Text>20 colorst</Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={img5} />
                        <Card.Body>
                            <Card.Title>GAZELLE BOLD SHOES</Card.Title>
                            <Card.Text>
                                Women's • Originals
                            </Card.Text>
                            <Card.Text>$120</Card.Text>
                            <Card.Text>20 colorst</Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={img6} />
                        <Card.Body>
                            <Card.Title>GAZELLE BOLD SHOES</Card.Title>
                            <Card.Text>
                                Women's • Originals
                            </Card.Text>
                            <Card.Text>$120</Card.Text>
                            <Card.Text>20 colorst</Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={img7} />
                        <Card.Body>
                            <Card.Title>GAZELLE BOLD SHOES</Card.Title>
                            <Card.Text>
                                Women's • Originals
                            </Card.Text>
                            <Card.Text>$120</Card.Text>
                            <Card.Text>20 colorst</Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={img8} />
                        <Card.Body>
                            <Card.Title>GAZELLE BOLD SHOES</Card.Title>
                            <Card.Text>
                                Women's • Originals
                            </Card.Text>
                            <Card.Text>$120</Card.Text>
                            <Card.Text>20 colorst</Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={img9} />
                        <Card.Body>
                            <Card.Title>GAZELLE BOLD SHOES</Card.Title>
                            <Card.Text>
                                Women's • Originals
                            </Card.Text>
                            <Card.Text>$120</Card.Text>
                            <Card.Text>20 colorst</Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={img10} />
                        <Card.Body>
                            <Card.Title>GAZELLE BOLD SHOES</Card.Title>
                            <Card.Text>
                                Women's • Originals
                            </Card.Text>
                            <Card.Text>$120</Card.Text>
                            <Card.Text>20 colorst</Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={img11} />
                        <Card.Body>
                            <Card.Title>GAZELLE BOLD SHOES</Card.Title>
                            <Card.Text>
                                Women's • Originals
                            </Card.Text>
                            <Card.Text>$120</Card.Text>
                            <Card.Text>20 colorst</Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={img12} />
                        <Card.Body>
                            <Card.Title>GAZELLE BOLD SHOES</Card.Title>
                            <Card.Text>
                                Women's • Originals
                            </Card.Text>
                            <Card.Text>$120</Card.Text>
                            <Card.Text>20 colorst</Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={img13} />
                        <Card.Body>
                            <Card.Title>GAZELLE BOLD SHOES</Card.Title>
                            <Card.Text>
                                Women's • Originals
                            </Card.Text>
                            <Card.Text>$120</Card.Text>
                            <Card.Text>20 colorst</Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={img14} />
                        <Card.Body>
                            <Card.Title>GAZELLE BOLD SHOES</Card.Title>
                            <Card.Text>
                                Women's • Originals
                            </Card.Text>
                            <Card.Text>$120</Card.Text>
                            <Card.Text>20 colorst</Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={img15} />
                        <Card.Body>
                            <Card.Title>GAZELLE BOLD SHOES</Card.Title>
                            <Card.Text>
                                Women's • Originals
                            </Card.Text>
                            <Card.Text>$120</Card.Text>
                            <Card.Text>20 colorst</Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={img16} />
                        <Card.Body>
                            <Card.Title>GAZELLE BOLD SHOES</Card.Title>
                            <Card.Text>
                                Women's • Originals
                            </Card.Text>
                            <Card.Text>$120</Card.Text>
                            <Card.Text>20 colorst</Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={img17} />
                        <Card.Body>
                            <Card.Title>GAZELLE BOLD SHOES</Card.Title>
                            <Card.Text>
                                Women's • Originals
                            </Card.Text>
                            <Card.Text>$120</Card.Text>
                            <Card.Text>20 colorst</Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={img18} />
                        <Card.Body>
                            <Card.Title>GAZELLE BOLD SHOES</Card.Title>
                            <Card.Text>
                                Women's • Originals
                            </Card.Text>
                            <Card.Text>$120</Card.Text>
                            <Card.Text>20 colorst</Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={img19} />
                        <Card.Body>
                            <Card.Title>GAZELLE BOLD SHOES</Card.Title>
                            <Card.Text>
                                Women's • Originals
                            </Card.Text>
                            <Card.Text>$120</Card.Text>
                            <Card.Text>20 colorst</Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={img20} />
                        <Card.Body>
                            <Card.Title>GAZELLE BOLD SHOES</Card.Title>
                            <Card.Text>
                                Women's • Originals
                            </Card.Text>
                            <Card.Text>$120</Card.Text>
                            <Card.Text>20 colorst</Card.Text>
                        </Card.Body>
                    </Card>
                    </div>} />
                <Route path="plus size" element={<div className='hoodies & sweatshirts'>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={img1} />
                        <Card.Body>
                            <Card.Title>GAZELLE BOLD SHOES</Card.Title>
                            <Card.Text>
                                Women's • Originals
                            </Card.Text>
                            <Card.Text>$120</Card.Text>
                            <Card.Text>20 colorst</Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={img2} />
                        <Card.Body>
                            <Card.Title>GAZELLE BOLD SHOES</Card.Title>
                            <Card.Text>
                                Women's • Originals
                            </Card.Text>
                            <Card.Text>$120</Card.Text>
                            <Card.Text>20 colorst</Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={img3} />
                        <Card.Body>
                            <Card.Title>GAZELLE BOLD SHOES</Card.Title>
                            <Card.Text>
                                Women's • Originals
                            </Card.Text>
                            <Card.Text>$120</Card.Text>
                            <Card.Text>20 colorst</Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={img4} />
                        <Card.Body>
                            <Card.Title>GAZELLE BOLD SHOES</Card.Title>
                            <Card.Text>
                                Women's • Originals
                            </Card.Text>
                            <Card.Text>$120</Card.Text>
                            <Card.Text>20 colorst</Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={img5} />
                        <Card.Body>
                            <Card.Title>GAZELLE BOLD SHOES</Card.Title>
                            <Card.Text>
                                Women's • Originals
                            </Card.Text>
                            <Card.Text>$120</Card.Text>
                            <Card.Text>20 colorst</Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={img6} />
                        <Card.Body>
                            <Card.Title>GAZELLE BOLD SHOES</Card.Title>
                            <Card.Text>
                                Women's • Originals
                            </Card.Text>
                            <Card.Text>$120</Card.Text>
                            <Card.Text>20 colorst</Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={img7} />
                        <Card.Body>
                            <Card.Title>GAZELLE BOLD SHOES</Card.Title>
                            <Card.Text>
                                Women's • Originals
                            </Card.Text>
                            <Card.Text>$120</Card.Text>
                            <Card.Text>20 colorst</Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={img8} />
                        <Card.Body>
                            <Card.Title>GAZELLE BOLD SHOES</Card.Title>
                            <Card.Text>
                                Women's • Originals
                            </Card.Text>
                            <Card.Text>$120</Card.Text>
                            <Card.Text>20 colorst</Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={img9} />
                        <Card.Body>
                            <Card.Title>GAZELLE BOLD SHOES</Card.Title>
                            <Card.Text>
                                Women's • Originals
                            </Card.Text>
                            <Card.Text>$120</Card.Text>
                            <Card.Text>20 colorst</Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={img10} />
                        <Card.Body>
                            <Card.Title>GAZELLE BOLD SHOES</Card.Title>
                            <Card.Text>
                                Women's • Originals
                            </Card.Text>
                            <Card.Text>$120</Card.Text>
                            <Card.Text>20 colorst</Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={img11} />
                        <Card.Body>
                            <Card.Title>GAZELLE BOLD SHOES</Card.Title>
                            <Card.Text>
                                Women's • Originals
                            </Card.Text>
                            <Card.Text>$120</Card.Text>
                            <Card.Text>20 colorst</Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={img12} />
                        <Card.Body>
                            <Card.Title>GAZELLE BOLD SHOES</Card.Title>
                            <Card.Text>
                                Women's • Originals
                            </Card.Text>
                            <Card.Text>$120</Card.Text>
                            <Card.Text>20 colorst</Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={img13} />
                        <Card.Body>
                            <Card.Title>GAZELLE BOLD SHOES</Card.Title>
                            <Card.Text>
                                Women's • Originals
                            </Card.Text>
                            <Card.Text>$120</Card.Text>
                            <Card.Text>20 colorst</Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={img14} />
                        <Card.Body>
                            <Card.Title>GAZELLE BOLD SHOES</Card.Title>
                            <Card.Text>
                                Women's • Originals
                            </Card.Text>
                            <Card.Text>$120</Card.Text>
                            <Card.Text>20 colorst</Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={img15} />
                        <Card.Body>
                            <Card.Title>GAZELLE BOLD SHOES</Card.Title>
                            <Card.Text>
                                Women's • Originals
                            </Card.Text>
                            <Card.Text>$120</Card.Text>
                            <Card.Text>20 colorst</Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={img16} />
                        <Card.Body>
                            <Card.Title>GAZELLE BOLD SHOES</Card.Title>
                            <Card.Text>
                                Women's • Originals
                            </Card.Text>
                            <Card.Text>$120</Card.Text>
                            <Card.Text>20 colorst</Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={img17} />
                        <Card.Body>
                            <Card.Title>GAZELLE BOLD SHOES</Card.Title>
                            <Card.Text>
                                Women's • Originals
                            </Card.Text>
                            <Card.Text>$120</Card.Text>
                            <Card.Text>20 colorst</Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={img18} />
                        <Card.Body>
                            <Card.Title>GAZELLE BOLD SHOES</Card.Title>
                            <Card.Text>
                                Women's • Originals
                            </Card.Text>
                            <Card.Text>$120</Card.Text>
                            <Card.Text>20 colorst</Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={img19} />
                        <Card.Body>
                            <Card.Title>GAZELLE BOLD SHOES</Card.Title>
                            <Card.Text>
                                Women's • Originals
                            </Card.Text>
                            <Card.Text>$120</Card.Text>
                            <Card.Text>20 colorst</Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={img20} />
                        <Card.Body>
                            <Card.Title>GAZELLE BOLD SHOES</Card.Title>
                            <Card.Text>
                                Women's • Originals
                            </Card.Text>
                            <Card.Text>$120</Card.Text>
                            <Card.Text>20 colorst</Card.Text>
                        </Card.Body>
                    </Card>
                    </div>} />
                <Route path="dresses & skirts" element={<div className='swimwear'>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={img1} />
                        <Card.Body>
                            <Card.Title>GAZELLE BOLD SHOES</Card.Title>
                            <Card.Text>
                                Women's • Originals
                            </Card.Text>
                            <Card.Text>$120</Card.Text>
                            <Card.Text>20 colorst</Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={img2} />
                        <Card.Body>
                            <Card.Title>GAZELLE BOLD SHOES</Card.Title>
                            <Card.Text>
                                Women's • Originals
                            </Card.Text>
                            <Card.Text>$120</Card.Text>
                            <Card.Text>20 colorst</Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={img3} />
                        <Card.Body>
                            <Card.Title>GAZELLE BOLD SHOES</Card.Title>
                            <Card.Text>
                                Women's • Originals
                            </Card.Text>
                            <Card.Text>$120</Card.Text>
                            <Card.Text>20 colorst</Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={img4} />
                        <Card.Body>
                            <Card.Title>GAZELLE BOLD SHOES</Card.Title>
                            <Card.Text>
                                Women's • Originals
                            </Card.Text>
                            <Card.Text>$120</Card.Text>
                            <Card.Text>20 colorst</Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={img5} />
                        <Card.Body>
                            <Card.Title>GAZELLE BOLD SHOES</Card.Title>
                            <Card.Text>
                                Women's • Originals
                            </Card.Text>
                            <Card.Text>$120</Card.Text>
                            <Card.Text>20 colorst</Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={img6} />
                        <Card.Body>
                            <Card.Title>GAZELLE BOLD SHOES</Card.Title>
                            <Card.Text>
                                Women's • Originals
                            </Card.Text>
                            <Card.Text>$120</Card.Text>
                            <Card.Text>20 colorst</Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={img7} />
                        <Card.Body>
                            <Card.Title>GAZELLE BOLD SHOES</Card.Title>
                            <Card.Text>
                                Women's • Originals
                            </Card.Text>
                            <Card.Text>$120</Card.Text>
                            <Card.Text>20 colorst</Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={img8} />
                        <Card.Body>
                            <Card.Title>GAZELLE BOLD SHOES</Card.Title>
                            <Card.Text>
                                Women's • Originals
                            </Card.Text>
                            <Card.Text>$120</Card.Text>
                            <Card.Text>20 colorst</Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={img9} />
                        <Card.Body>
                            <Card.Title>GAZELLE BOLD SHOES</Card.Title>
                            <Card.Text>
                                Women's • Originals
                            </Card.Text>
                            <Card.Text>$120</Card.Text>
                            <Card.Text>20 colorst</Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={img10} />
                        <Card.Body>
                            <Card.Title>GAZELLE BOLD SHOES</Card.Title>
                            <Card.Text>
                                Women's • Originals
                            </Card.Text>
                            <Card.Text>$120</Card.Text>
                            <Card.Text>20 colorst</Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={img11} />
                        <Card.Body>
                            <Card.Title>GAZELLE BOLD SHOES</Card.Title>
                            <Card.Text>
                                Women's • Originals
                            </Card.Text>
                            <Card.Text>$120</Card.Text>
                            <Card.Text>20 colorst</Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={img12} />
                        <Card.Body>
                            <Card.Title>GAZELLE BOLD SHOES</Card.Title>
                            <Card.Text>
                                Women's • Originals
                            </Card.Text>
                            <Card.Text>$120</Card.Text>
                            <Card.Text>20 colorst</Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={img13} />
                        <Card.Body>
                            <Card.Title>GAZELLE BOLD SHOES</Card.Title>
                            <Card.Text>
                                Women's • Originals
                            </Card.Text>
                            <Card.Text>$120</Card.Text>
                            <Card.Text>20 colorst</Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={img14} />
                        <Card.Body>
                            <Card.Title>GAZELLE BOLD SHOES</Card.Title>
                            <Card.Text>
                                Women's • Originals
                            </Card.Text>
                            <Card.Text>$120</Card.Text>
                            <Card.Text>20 colorst</Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={img15} />
                        <Card.Body>
                            <Card.Title>GAZELLE BOLD SHOES</Card.Title>
                            <Card.Text>
                                Women's • Originals
                            </Card.Text>
                            <Card.Text>$120</Card.Text>
                            <Card.Text>20 colorst</Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={img16} />
                        <Card.Body>
                            <Card.Title>GAZELLE BOLD SHOES</Card.Title>
                            <Card.Text>
                                Women's • Originals
                            </Card.Text>
                            <Card.Text>$120</Card.Text>
                            <Card.Text>20 colorst</Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={img17} />
                        <Card.Body>
                            <Card.Title>GAZELLE BOLD SHOES</Card.Title>
                            <Card.Text>
                                Women's • Originals
                            </Card.Text>
                            <Card.Text>$120</Card.Text>
                            <Card.Text>20 colorst</Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={img18} />
                        <Card.Body>
                            <Card.Title>GAZELLE BOLD SHOES</Card.Title>
                            <Card.Text>
                                Women's • Originals
                            </Card.Text>
                            <Card.Text>$120</Card.Text>
                            <Card.Text>20 colorst</Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={img19} />
                        <Card.Body>
                            <Card.Title>GAZELLE BOLD SHOES</Card.Title>
                            <Card.Text>
                                Women's • Originals
                            </Card.Text>
                            <Card.Text>$120</Card.Text>
                            <Card.Text>20 colorst</Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={img20} />
                        <Card.Body>
                            <Card.Title>GAZELLE BOLD SHOES</Card.Title>
                            <Card.Text>
                                Women's • Originals
                            </Card.Text>
                            <Card.Text>$120</Card.Text>
                            <Card.Text>20 colorst</Card.Text>
                        </Card.Body>
                    </Card>
                    </div>} />
                
            </Routes>
        </div>
        
    </div>

  )
}

export default Kids