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
import walking2 from '../../assets/m-walking/walking-2.avif'
import walking3 from '../../assets/m-walking/walking-3.avif'
import walking4 from '../../assets/m-walking/walking-4.avif'
import walking5 from '../../assets/m-walking/walking-5.avif'
import walking6 from '../../assets/m-walking/walking-6.avif'
import walking7 from '../../assets/m-walking/walking-7.avif'
import walking8 from '../../assets/m-walking/walking-8.avif'
import walking9 from '../../assets/m-walking/walking-9.avif'
import walking10 from '../../assets/m-walking/walking-10.avif'
import walking11 from '../../assets/m-walking/walking-11.avif'
import walking12 from '../../assets/m-walking/walking-12.avif'
import walking13 from '../../assets/m-walking/walking-13.avif'
import walking14 from '../../assets/m-walking/walking-14.avif'
import walking15 from '../../assets/m-walking/walking-15.avif'
import walking16 from '../../assets/m-walking/walking-16.avif'
import walking17 from '../../assets/m-walking/walking-17.avif'
import walking18 from '../../assets/m-walking/walking-18.avif'
import walking19 from '../../assets/m-walking/walking-19.avif'
import walking20 from '../../assets/m-walking/walking-20.avif'

import tops1 from '../../assets/m-tops/tops-1.avif'
import tops2 from '../../assets/m-tops/tops-2.avif'
import tops3 from '../../assets/m-tops/tops-3.avif'
import tops4 from '../../assets/m-tops/tops-4.avif'
import tops5 from '../../assets/m-tops/tops-5.avif'
import tops6 from '../../assets/m-tops/tops-6.avif'
import tops7 from '../../assets/m-tops/tops-7.avif'
import tops8 from '../../assets/m-tops/tops-8.avif'
import tops9 from '../../assets/m-tops/tops-9.avif'
import tops10 from '../../assets/m-tops/tops-10.avif'
import tops11 from '../../assets/m-tops/tops-11.avif'
import tops12 from '../../assets/m-tops/tops-12.avif'
import tops13 from '../../assets/m-tops/tops-13.avif'
import tops14 from '../../assets/m-tops/tops-14.avif'
import tops15 from '../../assets/m-tops/tops-15.avif'
import tops16 from '../../assets/m-tops/tops-16.avif'
import tops17 from '../../assets/m-tops/tops-17.avif'
import tops18 from '../../assets/m-tops/tops-18.avif'
import tops19 from '../../assets/m-tops/tops-19.avif'
import tops20 from '../../assets/m-tops/tops-20.avif'

import shorts1 from '../../assets/m-shorts/shorts-1.avif'
import shorts2 from '../../assets/m-shorts/shorts-2.avif'
import shorts3 from '../../assets/m-shorts/shorts-3.avif'
import shorts4 from '../../assets/m-shorts/shorts-4.avif'
import shorts5 from '../../assets/m-shorts/shorts-5.avif'
import shorts6 from '../../assets/m-shorts/shorts-6.avif'
import shorts7 from '../../assets/m-shorts/shorts-7.avif'
import shorts8 from '../../assets/m-shorts/shorts-8.avif'
import shorts9 from '../../assets/m-shorts/shorts-9.avif'
import shorts10 from '../../assets/m-shorts/shorts-10.avif'
import shorts11 from '../../assets/m-shorts/shorts-11.avif'
import shorts12 from '../../assets/m-shorts/shorts-12.avif'
import shorts13 from '../../assets/m-shorts/shorts-13.avif'
import shorts14 from '../../assets/m-shorts/shorts-14.avif'
import shorts15 from '../../assets/m-shorts/shorts-15.avif'
import shorts16 from '../../assets/m-shorts/shorts-16.avif'
import shorts17 from '../../assets/m-shorts/shorts-17.avif'
import shorts18 from '../../assets/m-shorts/shorts-18.avif'
import shorts19 from '../../assets/m-shorts/shorts-19.avif'
import shorts20 from '../../assets/m-shorts/shorts-20.avif'

import hoodi1 from '../../assets/m-hoodi/hoodi-1.avif'
import hoodi2 from '../../assets/m-hoodi/hoodi-2.avif'
import hoodi3 from '../../assets/m-hoodi/hoodi-3.avif'
import hoodi4 from '../../assets/m-hoodi/hoodi-4.avif'
import hoodi5 from '../../assets/m-hoodi/hoodi-5.avif'
import hoodi6 from '../../assets/m-hoodi/hoodi-6.avif'
import hoodi7 from '../../assets/m-hoodi/hoodi-7.avif'
import hoodi8 from '../../assets/m-hoodi/hoodi-8.avif'
import hoodi9 from '../../assets/m-hoodi/hoodi-9.avif'
import hoodi10 from '../../assets/m-hoodi/hoodi-10.avif'
import hoodi11 from '../../assets/m-hoodi/hoodi-11.avif'
import hoodi12 from '../../assets/m-hoodi/hoodi-12.avif'
import hoodi13 from '../../assets/m-hoodi/hoodi-13.avif'
import hoodi14 from '../../assets/m-hoodi/hoodi-14.avif'
import hoodi15 from '../../assets/m-hoodi/hoodi-15.avif'
import hoodi16 from '../../assets/m-hoodi/hoodi-16.avif'
import hoodi17 from '../../assets/m-hoodi/hoodi-17.avif'
import hoodi18 from '../../assets/m-hoodi/hoodi-18.avif'
import hoodi19 from '../../assets/m-hoodi/hoodi-19.avif'
import hoodi20 from '../../assets/m-hoodi/hoodi-20.avif'

import swim1 from '../../assets/m-swim/swim-1.avif'
import swim2 from '../../assets/m-swim/swim-2.avif'
import swim3 from '../../assets/m-swim/swim-3.avif'
import swim4 from '../../assets/m-swim/swim-4.avif'
import swim5 from '../../assets/m-swim/swim-5.avif'
import swim6 from '../../assets/m-swim/swim-6.avif'
import swim7 from '../../assets/m-swim/swim-7.avif'
import swim8 from '../../assets/m-swim/swim-8.avif'
import swim9 from '../../assets/m-swim/swim-9.avif'
import swim10 from '../../assets/m-swim/swim-10.avif'
import swim11 from '../../assets/m-swim/swim-11.avif'
import swim12 from '../../assets/m-swim/swim-12.avif'
import swim13 from '../../assets/m-swim/swim-13.avif'
import swim14 from '../../assets/m-swim/swim-14.avif'
import swim15 from '../../assets/m-swim/swim-15.avif'
import swim16 from '../../assets/m-swim/swim-16.avif'
import swim17 from '../../assets/m-swim/swim-17.avif'
import swim18 from '../../assets/m-swim/swim-18.avif'
import swim19 from '../../assets/m-swim/swim-19.avif'
import swim20 from '../../assets/m-swim/swim-20.avif'
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
                <li><Link to="dresses & skirts" >Swimwear</Link></li>
                <li><Link to="plus size" >Hoodies & Sweatshirts</Link></li>
               
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
                        <Card.Img variant="top" src={walking6} />
                        <Card.Body>
                            <Card.Title>ULTRABOOST 1.0 SHOES</Card.Title>
                            <Card.Text>
                            Men's • Sportswear
                            </Card.Text>
                            <Card.Text>$190</Card.Text>
                            <Card.Text>3 colorst</Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={walking7} />
                        <Card.Body>
                            <Card.Title>RUNFALCON 3 CLOUDFOAM LOW RUNNING SHOES</Card.Title>
                            <Card.Text>
                            Men's • Running
                            </Card.Text>
                            <Card.Text>$65</Card.Text>
                            <Card.Text>7 colorst</Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={walking8} />
                        <Card.Body>
                            <Card.Title>EQ21 RUN RUNNING SHOES</Card.Title>
                            <Card.Text>
                            Men's • Running
                            </Card.Text>
                            <Card.Text>$80</Card.Text>
                            <Card.Text>2 colorst</Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={walking9} />
                        <Card.Body>
                            <Card.Title>SUPERNOVA RISE SHOES</Card.Title>
                            <Card.Text>
                            Men's • Running
                            </Card.Text>
                            <Card.Text>$140</Card.Text>
                            <Card.Text>6 colorst</Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={walking10} />
                        <Card.Body>
                            <Card.Title>SUPERNOVA RISE SHOES</Card.Title>
                            <Card.Text>
                            Men's • Running
                            </Card.Text>
                            <Card.Text>$120</Card.Text>
                            <Card.Text>8 colorst</Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={walking11} />
                        <Card.Body>
                            <Card.Title>RESPONSE</Card.Title>
                            <Card.Text>
                            Men's • Running
                            </Card.Text>
                            <Card.Text>$75</Card.Text>
                            <Card.Text>5 colorst</Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={walking12} />
                        <Card.Body>
                            <Card.Title>SUPERNOVA STRIDE SHOES</Card.Title>
                            <Card.Text>
                            Men's • Running
                            </Card.Text>
                            <Card.Text>$110</Card.Text>
                            <Card.Text>4 colorst</Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={walking13} />
                        <Card.Body>
                            <Card.Title>SUPERNOVA STRIDE SHOES</Card.Title>
                            <Card.Text>
                            Men's • Running
                            </Card.Text>
                            <Card.Text>$110</Card.Text>
                            <Card.Text>5 colorst</Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={walking14} />
                        <Card.Body>
                            <Card.Title>ULTRABOOST 1.0 SHOES</Card.Title>
                            <Card.Text>
                            Men's • Sportswear
                            </Card.Text>
                            <Card.Text>$133</Card.Text>
                            <Card.Text>13 colorst</Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={walking15} />
                        <Card.Body>
                            <Card.Title>ADIDAS BY STELLA MCCARTNEY ULTRABOOST SPEED</Card.Title>
                            <Card.Text>
                            adidas by Stella McCartney
                            </Card.Text>
                            <Card.Text>$280</Card.Text>
                            <Card.Text>5 colorst</Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={walking16} />
                        <Card.Body>
                            <Card.Title>GALAXY 6 RUNNING SHOES</Card.Title>
                            <Card.Text>
                            Men's • Running
                            </Card.Text>
                            <Card.Text>$60</Card.Text>
                            <Card.Text>3 colorst</Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={walking17} />
                        <Card.Body>
                            <Card.Title>ULTRABOUNCE RUNNING SHOES</Card.Title>
                            <Card.Text>
                            Men's • Running
                            </Card.Text>
                            <Card.Text>$44</Card.Text>
                            <Card.Text>3 colorst</Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={walking18} />
                        <Card.Body>
                            <Card.Title>LITE RACER 2.0 SHOES</Card.Title>
                            <Card.Text>
                            Men's • Sportswear
                            </Card.Text>
                            <Card.Text>$60</Card.Text>
                            <Card.Text>3 colorst</Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={walking19} />
                        <Card.Body>
                            <Card.Title>ULTRABOOST LIGHT GORE-TEX RUNNING SHOES</Card.Title>
                            <Card.Text>
                            Men's • Running
                            </Card.Text>
                            <Card.Text>$110</Card.Text>
                            <Card.Text>3 colorst</Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={walking20} />
                        <Card.Body>
                            <Card.Title>ULTRABOOST LIGHT RUNNING SHOES</Card.Title>
                            <Card.Text>
                            Men's • Running
                            </Card.Text>
                            <Card.Text>$133</Card.Text>
                            <Card.Text>14 colorst</Card.Text>
                        </Card.Body>
                    </Card>
                    </div>} />  

                <Route path="t-shorts&tops" element={<div className='t-shorts_tops'>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={tops1} />
                        <Card.Body>
                            <Card.Title>OWN THE RUN TEE</Card.Title>
                            <Card.Text>
                            Men's • Running
                            </Card.Text>
                            <Card.Text>$35</Card.Text>
                            <Card.Text>5 colorst</Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={tops2} />
                        <Card.Body>
                            <Card.Title>ULTIMATE365 JACQUARD POLO SHIRT</Card.Title>
                            <Card.Text>
                            Men's • Golf
                            </Card.Text>
                            <Card.Text>$70</Card.Text>
                            <Card.Text>3 colorst</Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={tops3} />
                        <Card.Body>
                            <Card.Title>TRAIN ESSENTIALS SEASONAL CAMO TEE </Card.Title>
                            <Card.Text>
                            Men's • Training
                            </Card.Text>
                            <Card.Text>$28</Card.Text>
                            <Card.Text>2 colorst</Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={tops4} />
                        <Card.Body>
                            <Card.Title>WORKOUT CREWNECK TEE</Card.Title>
                            <Card.Text>
                            Men's • Training
                            </Card.Text>
                            <Card.Text>$45</Card.Text>
                            <Card.Text>2 colorst</Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={tops5} />
                        <Card.Body>
                            <Card.Title>MANCHESTER UNITED 23/24 AWAY AUTHENTIC JERSEY</Card.Title>
                            <Card.Text>
                            Men's • Soccer
                            </Card.Text>
                            <Card.Text>$60</Card.Text>
                            <Card.Text>3 colorst</Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={tops6} />
                        <Card.Body>
                            <Card.Title>ADICOLOR TREFOIL TEE</Card.Title>
                            <Card.Text>
                            Men's • Originals
                            </Card.Text>
                            <Card.Text>$24</Card.Text>
                            <Card.Text>10 colorst</Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={tops7} />
                        <Card.Body>
                            <Card.Title>ADICOLOR CUTLINE TRACK TOP</Card.Title>
                            <Card.Text>
                            Men's • Originals
                            </Card.Text>
                            <Card.Text>$85</Card.Text>
                            <Card.Text>2 colorst</Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={tops8} />
                        <Card.Body>
                            <Card.Title>ADICOLOR TREFOIL TEE</Card.Title>
                            <Card.Text>
                            Men's • Originals
                            </Card.Text>
                            <Card.Text>$30</Card.Text>
                            <Card.Text>10 colorst</Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={tops9} />
                        <Card.Body>
                            <Card.Title>ADICOLOR ADIBREAK TEE</Card.Title>
                            <Card.Text>
                            Men's • Originals
                            </Card.Text>
                            <Card.Text>$40</Card.Text>
                            <Card.Text>4 colorst</Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={tops10} />
                        <Card.Body>
                            <Card.Title>BREAK THE NORM TANK TOP</Card.Title>
                            <Card.Text>
                            Men's • Running
                            </Card.Text>
                            <Card.Text>$40</Card.Text>
                            <Card.Text>5 colorst</Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={tops11} />
                        <Card.Body>
                            <Card.Title>MEXICO 2024 AWAY AUTHENTIC JERSEY</Card.Title>
                            <Card.Text>
                            Men's • Soccer
                            </Card.Text>
                            <Card.Text>$150</Card.Text>
                            <Card.Text>4 colorst</Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={tops12} />
                        <Card.Body>
                            <Card.Title>TRAINING SUPPLY SHORT SLEEVE TEE</Card.Title>
                            <Card.Text>
                            Men's • Originals
                            </Card.Text>
                            <Card.Text>$35</Card.Text>
                            <Card.Text>3 colorst</Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={tops13} />
                        <Card.Body>
                            <Card.Title>HOUSE OF TIRO NATIONS PACK TRACK JACKET</Card.Title>
                            <Card.Text>
                            Men's • Sportswear
                            </Card.Text>
                            <Card.Text>$65</Card.Text>
                            <Card.Text>5 colorst</Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={tops14} />
                        <Card.Body>
                            <Card.Title>ADICOLOR NEUCLASSICS TEE</Card.Title>
                            <Card.Text>
                            Men's • Originals
                            </Card.Text>
                            <Card.Text>$35</Card.Text>
                            <Card.Text>5 colorst</Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={tops15} />
                        <Card.Body>
                            <Card.Title>ULTIMATE365 PRINTED POLO SHIRT</Card.Title>
                            <Card.Text>
                            Men's • Golf
                            </Card.Text>
                            <Card.Text>$70</Card.Text>
                            <Card.Text>4 colorst</Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={tops16} />
                        <Card.Body>
                            <Card.Title>ADICOLOR CLASSICS 3-STRIPES TEE</Card.Title>
                            <Card.Text>
                            Men's • Originals
                            </Card.Text>
                            <Card.Text>$35</Card.Text>
                            <Card.Text>11 colorst</Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={tops17} />
                        <Card.Body>
                            <Card.Title>BASKETBALL CLASSIC TEE (GENDER NEUTRAL)</Card.Title>
                            <Card.Text>
                            Originals                           
                            </Card.Text>
                            <Card.Text>$40</Card.Text>
                            <Card.Text>4 colorst</Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={tops18} />
                        <Card.Body>
                            <Card.Title>DESIGNED FOR TRAINING HIIT WORKOUT HEAT.RDY PRINT TEE</Card.Title>
                            <Card.Text>
                            Men's • Training
                            </Card.Text>
                            <Card.Text>$55</Card.Text>
                            <Card.Text>2 colorst</Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={tops19} />
                        <Card.Body>
                            <Card.Title>DESIGNED FOR TRAINING WORKOUT TEE</Card.Title>
                            <Card.Text>
                            Men's • Training
                            </Card.Text>
                            <Card.Text>$35</Card.Text>
                            <Card.Text>15 colorst</Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={tops20} />
                        <Card.Body>
                            <Card.Title>ADICOLOR CLASSICS TREFOIL TANK TOP </Card.Title>
                            <Card.Text>
                            Men's • Originals
                            </Card.Text>
                            <Card.Text>$25</Card.Text>
                            <Card.Text>3 colorst</Card.Text>
                        </Card.Body>
                    </Card>
                    </div>} />
                <Route path="shorts" element={<div className='shorts'>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={shorts1} />
                        <Card.Body>
                            <Card.Title>OWN THE RUN SHORTS</Card.Title>
                            <Card.Text>
                            Men's • Running
                            </Card.Text>
                            <Card.Text>$35</Card.Text>
                            <Card.Text>7 colorst</Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={shorts2} />
                        <Card.Body>
                            <Card.Title>FIVE TEN BRAND OF THE BRAVE SHORTS</Card.Title>
                            <Card.Text>
                            Men's • Five Ten
                            </Card.Text>
                            <Card.Text>$53</Card.Text>
                            <Card.Text>3 colorst</Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={shorts3} />
                        <Card.Body>
                            <Card.Title>OWN THE RUN 3-STRIPES 2-IN-1 SHORTS</Card.Title>
                            <Card.Text>
                            Men's • Running
                            </Card.Text>
                            <Card.Text>$55</Card.Text>
                            <Card.Text>3 colorst</Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={shorts4} />
                        <Card.Body>
                            <Card.Title>TIRO 24 COMPETITION MATCH SHORTS</Card.Title>
                            <Card.Text>
                            Men's • Soccer
                            </Card.Text>
                            <Card.Text>$40</Card.Text>
                            <Card.Text>3 colorst</Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={shorts5} />
                        <Card.Body>
                            <Card.Title>FIVE TEN BRAND OF THE BRAVE SHORTS</Card.Title>
                            <Card.Text>
                            Men's • Five Ten
                            </Card.Text>
                            <Card.Text>$53</Card.Text>
                            <Card.Text>3 colorst</Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={shorts6} />
                        <Card.Body>
                            <Card.Title>MOVE FOR THE PLANET SHORTS</Card.Title>
                            <Card.Text>
                            Men's • Running
                            </Card.Text>
                            <Card.Text>$55</Card.Text>
                            <Card.Text>3 colorst</Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={shorts7} />
                        <Card.Body>
                            <Card.Title>TIRO ALLOVER PRINT MESH SHORTS</Card.Title>
                            <Card.Text>
                            Men's • Sportswear
                            </Card.Text>
                            <Card.Text>$45</Card.Text>
                            <Card.Text>3 colorst</Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={shorts8} />
                        <Card.Body>
                            <Card.Title>ALL SZN FRENCH TERRY 3-STRIPES GARMENT-WASH SHORTS</Card.Title>
                            <Card.Text>
                            Men's • Sportswear
                            </Card.Text>
                            <Card.Text>$45</Card.Text>
                            <Card.Text>3 colorst</Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={shorts9} />
                        <Card.Body>
                            <Card.Title>FASHION MESH SHORTS</Card.Title>
                            <Card.Text>
                            Men's • Originals
                            </Card.Text>
                            <Card.Text>$60</Card.Text>
                            <Card.Text>4 colorst</Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={shorts10} />
                        <Card.Body>
                            <Card.Title>CITY ESCAPE SHORTS</Card.Title>
                            <Card.Text>
                            Men's • Sportswear
                            </Card.Text>
                            <Card.Text>$32</Card.Text>
                            <Card.Text>3 colorst</Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={shorts11} />
                        <Card.Body>
                            <Card.Title>OWN THE RUN SHORTS</Card.Title>
                            <Card.Text>
                            Men's • Running
                            </Card.Text>
                            <Card.Text>$35</Card.Text>
                            <Card.Text>6 colorst</Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={shorts12} />
                        <Card.Body>
                            <Card.Title>TIRO LIGHTWEIGHT WOVEN SHORTS</Card.Title>
                            <Card.Text>
                            Men's • Sportswear
                            </Card.Text>
                            <Card.Text>$45</Card.Text>
                            <Card.Text>3 colorst</Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={shorts13} />
                        <Card.Body>
                            <Card.Title>TIRO 24 SWEAT SHORTS</Card.Title>
                            <Card.Text>
                            Men's • Soccer
                            </Card.Text>
                            <Card.Text>$45</Card.Text>
                            <Card.Text>3 colorst</Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={shorts14} />
                        <Card.Body>
                            <Card.Title>CLUB 3-STRIPES TENNIS SHORTS</Card.Title>
                            <Card.Text>
                            Men's • Tennis
                            </Card.Text>
                            <Card.Text>$45</Card.Text>
                            <Card.Text>2 colorst</Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={shorts15} />
                        <Card.Body>
                            <Card.Title>Z.N.E. WOVEN SHORTS </Card.Title>
                            <Card.Text>
                            Men's • Sportswear
                            </Card.Text>
                            <Card.Text>$65</Card.Text>
                            <Card.Text>2 colorst</Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={shorts16} />
                        <Card.Body>
                            <Card.Title>FASHION SPRINTER SHORTS</Card.Title>
                            <Card.Text>
                            Men's • Originals
                            </Card.Text>
                            <Card.Text>$55</Card.Text>
                            <Card.Text>2 colorst</Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={shorts17} />
                        <Card.Body>
                            <Card.Title>TIRO LIGHTWEIGHT WOVEN SHORTS</Card.Title>
                            <Card.Text>
                            Men's • Sportswear
                            </Card.Text>
                            <Card.Text>$45</Card.Text>
                            <Card.Text>3 colorst</Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={shorts18} />
                        <Card.Body>
                            <Card.Title>ADICOLOR 3-STRIPES SHORTS</Card.Title>
                            <Card.Text>
                            Men's • Originals
                            </Card.Text>
                            <Card.Text>$45</Card.Text>
                            <Card.Text>8 colorst</Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={shorts19} />
                        <Card.Body>
                            <Card.Title>ADI ADVANTAGE GOLF SHORTS</Card.Title>
                            <Card.Text>
                            Men's • Golf
                            </Card.Text>
                            <Card.Text>$60</Card.Text>
                            <Card.Text>4 colorst</Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={shorts20} />
                        <Card.Body>
                            <Card.Title>TIRO LIGHTWEIGHT WOVEN SHORTS</Card.Title>
                            <Card.Text>
                            Men's • Sportswear  
                            </Card.Text>
                            <Card.Text>$45</Card.Text>
                            <Card.Text>3 colorst</Card.Text>
                        </Card.Body>
                    </Card>
                    </div>} />
                <Route path="plus size" element={<div className='hoodies_sweatshirts'>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={hoodi1} />
                        <Card.Body>
                            <Card.Title>ADICOLOR CLASSICS 3-STRIPES HOODIE</Card.Title>
                            <Card.Text>
                            Men's • Originals
                            </Card.Text>
                            <Card.Text>$56</Card.Text>
                            <Card.Text>4 colorst</Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={hoodi2} />
                        <Card.Body>
                            <Card.Title>ULTIMATE365 PRINTED CREWNECK SWEATSHIRT</Card.Title>
                            <Card.Text>
                            Men's • Golf
                            </Card.Text>
                            <Card.Text>$72</Card.Text>
                            <Card.Text>4 colorst</Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={hoodi3} />
                        <Card.Body>
                            <Card.Title>LOUNGE FRENCH TERRY COLORED MÉLANGE HOODIE</Card.Title>
                            <Card.Text>
                            Men's • Sportswear
                            </Card.Text>
                            <Card.Text>$77</Card.Text>
                            <Card.Text>2 colorst</Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={hoodi4} />
                        <Card.Body>
                            <Card.Title>YOGA TRAINING HOODIE</Card.Title>
                            <Card.Text>
                            Men's • Training
                            </Card.Text>
                            <Card.Text>$53</Card.Text>
                            <Card.Text>4 colorst</Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={hoodi5} />
                        <Card.Body>
                            <Card.Title>LA GRAPHIC HOODIE</Card.Title>
                            <Card.Text>
                            Men's • Sportswear
                            </Card.Text>
                            <Card.Text>$59</Card.Text>
                            <Card.Text>3 colorst</Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={hoodi6} />
                        <Card.Body>
                            <Card.Title>INTER MIAMI CF DESIGNED FOR GAMEDAY ANTHEM JACKET</Card.Title>
                            <Card.Text>
                            Men's • Soccer
                            </Card.Text>
                            <Card.Text>$110</Card.Text>
                            <Card.Text>4 colorst</Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={hoodi7} />
                        <Card.Body>
                            <Card.Title>Z.N.E. WOVEN FULL-ZIP HOODED TRACK TOP</Card.Title>
                            <Card.Text>
                            Men's • Sportswear
                            </Card.Text>
                            <Card.Text>$80</Card.Text>
                            <Card.Text>2 colorst</Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={hoodi8} />
                        <Card.Body>
                            <Card.Title>Z.N.E. WOVEN FULL-ZIP HOODED TRACK TOP</Card.Title>
                            <Card.Text>
                            Men's • Sportswear
                            </Card.Text>
                            <Card.Text>$80</Card.Text>
                            <Card.Text>2 colorst</Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={hoodi9} />
                        <Card.Body>
                            <Card.Title>TREFOIL ESSENTIALS FULL-ZIP HOODIE</Card.Title>
                            <Card.Text>
                            Men's • Originals
                            </Card.Text>
                            <Card.Text>$63</Card.Text>
                            <Card.Text>3 colorst</Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={hoodi10} />
                        <Card.Body>
                            <Card.Title>DWR QUARTER-ZIP PULLOVER</Card.Title>
                            <Card.Text>
                            Men's • Golf
                            </Card.Text>
                            <Card.Text>$56</Card.Text>
                            <Card.Text>2 colorst</Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={hoodi11} />
                        <Card.Body>
                            <Card.Title>DWR QUARTER-ZIP PULLOVER</Card.Title>
                            <Card.Text>
                            Men's • Golf
                            </Card.Text>
                            <Card.Text>$56</Card.Text>
                            <Card.Text>4 colorst</Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={hoodi12} />
                        <Card.Body>
                            <Card.Title>PRIDE GRAPHIC SWEATSHIRT (GENDER NEUTRAL)</Card.Title>
                            <Card.Text>
                            Sportswear
                            </Card.Text>
                            <Card.Text>$90</Card.Text>
                            <Card.Text>3 colorst</Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={hoodi13} />
                        <Card.Body>
                            <Card.Title>PREMIUM CLASSIC STREET HOODIE</Card.Title>
                            <Card.Text>
                            Men's • Originals
                            </Card.Text>
                            <Card.Text>$130</Card.Text>
                            <Card.Text>3 colorst</Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={hoodi14} />
                        <Card.Body>
                            <Card.Title>LONG SLEEVE CREW SWEATSHIRT</Card.Title>
                            <Card.Text>
                            Men's • Golf
                            </Card.Text>
                            <Card.Text>$75</Card.Text>
                            <Card.Text>3 colorst</Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={hoodi15} />
                        <Card.Body>
                            <Card.Title>TREFOIL ESSENTIALS+ DYE HALF ZIP CREW SWEATSHIRT</Card.Title>
                            <Card.Text>
                            Men's • Originals
                            </Card.Text>
                            <Card.Text>$65</Card.Text>
                            <Card.Text>4 colorst</Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={hoodi16} />
                        <Card.Body>
                            <Card.Title>LIGHTWEIGHT HALF-ZIP TOP</Card.Title>
                            <Card.Text>
                            Men's • Golf
                            </Card.Text>
                            <Card.Text>$70</Card.Text>
                            <Card.Text>6 colorst</Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={hoodi17} />
                        <Card.Body>
                            <Card.Title>ALL SZN FLEECE HOODIE</Card.Title>
                            <Card.Text>
                            Men's • Sportswear
                            </Card.Text>
                            <Card.Text>$60</Card.Text>
                            <Card.Text>3 colorst</Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={hoodi18} />
                        <Card.Body>
                            <Card.Title>ESSENTIALS FLEECE 3-STRIPES FULL-ZIP HOODIE</Card.Title>
                            <Card.Text>
                            Men's • Sportswear
                            </Card.Text>
                            <Card.Text>$65</Card.Text>
                            <Card.Text>3 colorst</Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={hoodi19} />
                        <Card.Body>
                            <Card.Title>ALL SZN FRENCH TERRY 3-STRIPES GARMENT WASH CREW SWEATSHIRT</Card.Title>
                            <Card.Text>
                            Men's • Sportswear
                            </Card.Text>
                            <Card.Text>$60</Card.Text>
                            <Card.Text>2 colorst</Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={hoodi20} />
                        <Card.Body>
                            <Card.Title>TREFOIL ESSENTIALS HOODIE</Card.Title>
                            <Card.Text>
                            Men's • Originals
                            </Card.Text>
                            <Card.Text>$60</Card.Text>
                            <Card.Text>6 colorst</Card.Text>
                        </Card.Body>
                    </Card>
                    </div>} />
                <Route path="dresses & skirts" element={<div className='swimwear'>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={swim1} />
                        <Card.Body>
                            <Card.Title>ADICOLOR ESSENTIALS SOLID SWIM SHORTS</Card.Title>
                            <Card.Text>
                            Men's • Originals
                            </Card.Text>
                            <Card.Text>$55</Card.Text>
                            <Card.Text>4 colorst</Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={swim2} />
                        <Card.Body>
                            <Card.Title>3-STRIPES CLX SWIM SHORTS</Card.Title>
                            <Card.Text>
                            Men's • Sportswear
                            </Card.Text>
                            <Card.Text>$55</Card.Text>
                            <Card.Text>20 colorst</Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={swim3} />
                        <Card.Body>
                            <Card.Title>CLRDO SWIM SHORTS</Card.Title>
                            <Card.Text>
                            Men's • Originals
                            </Card.Text>
                            <Card.Text>$70</Card.Text>
                            <Card.Text>3 colorst</Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={swim4} />
                        <Card.Body>
                            <Card.Title>WAVE LOGO CLX SWIM SHORTS</Card.Title>
                            <Card.Text>
                            Men's • Sportswear
                            </Card.Text>
                            <Card.Text>$40</Card.Text>
                            <Card.Text>2 colorst</Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={swim5} />
                        <Card.Body>
                            <Card.Title>3-STRIPES CLX SWIM SHORTS</Card.Title>
                            <Card.Text>
                            Men's • Sportswear
                            </Card.Text>
                            <Card.Text>$51</Card.Text>
                            <Card.Text>4 colorst</Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={swim6} />
                        <Card.Body>
                            <Card.Title>MONOGRAM SHORTS</Card.Title>
                            <Card.Text>
                            Men's • Originals
                            </Card.Text>
                            <Card.Text>$65</Card.Text>
                            <Card.Text>2 colorst</Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={swim7} />
                        <Card.Body>
                            <Card.Title>ADICOLOR ESSENTIALS SOLID SWIM SHORTS</Card.Title>
                            <Card.Text>
                            Men's • Originals   
                            </Card.Text>
                            <Card.Text>$55</Card.Text>
                            <Card.Text>4 colorst</Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={swim8} />
                        <Card.Body>
                            <Card.Title>WAVE LOGO CLX SWIM SHORTS</Card.Title>
                            <Card.Text>
                            Men's • Sportswear
                            </Card.Text>
                            <Card.Text>$35</Card.Text>
                            <Card.Text>4 colorst</Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={swim9} />
                        <Card.Body>
                            <Card.Title>FARM RIO 3-STRIPES CLX SWIM SHORTS</Card.Title>
                            <Card.Text>
                            Women's • Originals
                            </Card.Text>
                            <Card.Text>$56</Card.Text>
                            <Card.Text>4 colorst</Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={swim10} />
                        <Card.Body>
                            <Card.Title>ADICOLOR 3-STRIPES SWIM SHORTS</Card.Title>
                            <Card.Text>
                            Men's • Originals
                            </Card.Text>
                            <Card.Text>$44</Card.Text>
                            <Card.Text>4 colorst</Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={swim11} />
                        <Card.Body>
                            <Card.Title>CAMO ALLOVER PRINT SWIM SHORTS</Card.Title>
                            <Card.Text>
                            Men's • Originals
                            </Card.Text>
                            <Card.Text>$56</Card.Text>
                            <Card.Text>3 colorst</Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={swim12} />
                        <Card.Body>
                            <Card.Title>3-STRIPES CLX VERY-SHORT-LENGTH SWIM SHORTS</Card.Title>
                            <Card.Text>
                            Men's • Sportswear
                            </Card.Text>
                            <Card.Text>$23</Card.Text>
                            <Card.Text>3 colorst</Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={swim13} />
                        <Card.Body>
                            <Card.Title>SOLID CLX SHORT-LENGTH SWIM SHORTS</Card.Title>
                            <Card.Text>
                            Men's • Sportswear
                            </Card.Text>
                            <Card.Text>$32</Card.Text>
                            <Card.Text>3 colorst</Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={swim14} />
                        <Card.Body>
                            <Card.Title>MONOGRAM SHORTS</Card.Title>
                            <Card.Text>
                            Men's • Originals
                            </Card.Text>
                            <Card.Text>$52</Card.Text>
                            <Card.Text>2 colorst</Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={swim15} />
                        <Card.Body>
                            <Card.Title>3-STRIPES CLX SWIM SHORTS</Card.Title>
                            <Card.Text>
                            Men's • Sportswear
                            </Card.Text>
                            <Card.Text>$55</Card.Text>
                            <Card.Text>3 colorst</Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={swim16} />
                        <Card.Body>
                            <Card.Title>CAMO ALLOVER PRINT SWIM SHORTS</Card.Title>
                            <Card.Text>
                            Men's • Originals
                            </Card.Text>
                            <Card.Text>$56</Card.Text>
                            <Card.Text>3 colorst</Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={swim17} />
                        <Card.Body>
                            <Card.Title>ADICOLOR ESSENTIALS SOLID SWIM SHORTS</Card.Title>
                            <Card.Text>
                            Men's • Originals
                            </Card.Text>
                            <Card.Text>$55</Card.Text>
                            <Card.Text>3 colorst</Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={swim18} />
                        <Card.Body>
                            <Card.Title>ADICOLOR ESSENTIALS SOLID SWIM SHORTS</Card.Title>
                            <Card.Text>
                            Men's • Originals
                            </Card.Text>
                            <Card.Text>$50</Card.Text>
                            <Card.Text>4 colorst</Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={swim19} />
                        <Card.Body>
                            <Card.Title>CITY ESCAPE CAMO 3-STRIPES CIX SWIM SHORTS</Card.Title>
                            <Card.Text>
                            Men's • Sportswear
                            </Card.Text>
                            <Card.Text>$50</Card.Text>
                            <Card.Text>3 colorst</Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={swim20} />
                        <Card.Body>
                            <Card.Title>STRIPEY CLASSICS SWIM SHORTS SHORT LENGTH</Card.Title>
                            <Card.Text>
                            Men's • Sportswear
                            </Card.Text>
                            <Card.Text>$50</Card.Text>
                            <Card.Text>3 colorst</Card.Text>
                        </Card.Body>
                    </Card>
                    </div>} />
                
            </Routes>
        </div>
        
    </div>

  )
}

export default Kids