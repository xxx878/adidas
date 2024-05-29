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

import running1 from '../../assets/running/running-1.avif'
import running2 from '../../assets/running/running-2.avif'
import running3 from '../../assets/running/running-3.avif'
import running4 from '../../assets/running/running-4.avif'
import running5 from '../../assets/running/running-5.avif'
import running6 from '../../assets/running/running-6.avif'
import running7 from '../../assets/running/running-7.avif'
import running8 from '../../assets/running/running-8.avif'
import running9 from '../../assets/running/running-9.avif'
import running10 from '../../assets/running/running-10.avif'
import running11 from '../../assets/running/running-11.avif'
import running12 from '../../assets/running/running-12.avif'
import running13 from '../../assets/running/running-13.avif'
import running14 from '../../assets/running/running-14.avif'
import running15 from '../../assets/running/running-15.avif'
import running16 from '../../assets/running/running-16.avif'
import running17 from '../../assets/running/running-17.avif'
import running18 from '../../assets/running/running-18.avif'
import running19 from '../../assets/running/running-19.avif'
import running20 from '../../assets/running/running-20.avif'

import sandals1 from '../../assets/slides_sandals/sandals-1.avif'
import sandals2 from '../../assets/slides_sandals/sandals-2.avif'
import sandals3 from '../../assets/slides_sandals/sandals-3.avif'
import sandals4 from '../../assets/slides_sandals/sandals-4.avif'
import sandals5 from '../../assets/slides_sandals/sandals-5.avif'
import sandals6 from '../../assets/slides_sandals/sandals-6.avif'
import sandals7 from '../../assets/slides_sandals/sandals-7.avif'
import sandals8 from '../../assets/slides_sandals/sandals-8.avif'
import sandals9 from '../../assets/slides_sandals/sandals-9.avif'
import sandals10 from '../../assets/slides_sandals/sandals-10.avif'
import sandals11 from '../../assets/slides_sandals/sandals-11.avif'
import sandals12 from '../../assets/slides_sandals/sandals-12.avif'
import sandals13 from '../../assets/slides_sandals/sandals-13.avif'
import sandals14 from '../../assets/slides_sandals/sandals-14.avif'
import sandals15 from '../../assets/slides_sandals/sandals-15.avif'
import sandals16 from '../../assets/slides_sandals/sandals-16.avif'
import sandals17 from '../../assets/slides_sandals/sandals-17.avif'
import sandals18 from '../../assets/slides_sandals/sandals-18.avif'
import sandals19 from '../../assets/slides_sandals/sandals-19.avif'
import sandals20 from '../../assets/slides_sandals/sandals-20.avif'
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
                            <Card.Title>ADIZERO TAKUMI SEN 10 M</Card.Title>
                            <Card.Text>
                                Women's Running
                            </Card.Text>
                            <Card.Text>$140</Card.Text>
                            <Card.Text>12 colorst</Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={running14} />
                        <Card.Body>
                            <Card.Title>SUPERNOVA RISE W</Card.Title>
                            <Card.Text>
                                Women's Running
                            </Card.Text>
                            <Card.Text>$140</Card.Text>
                            <Card.Text>12 colorst</Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={running15} />
                        <Card.Body>
                            <Card.Title>SUPERNOVA RISE W</Card.Title>
                            <Card.Text>
                                Women's • Originals
                            </Card.Text>
                            <Card.Text>$140</Card.Text>
                            <Card.Text>20 colorst</Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={running16} />
                        <Card.Body>
                            <Card.Title>ADIZERO AVANTI SHOES</Card.Title>
                            <Card.Text>
                                Track & Field
                            </Card.Text>
                            <Card.Text>$150</Card.Text>
                            <Card.Text>10 colorst</Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={running17} />
                        <Card.Body>
                            <Card.Title>ADIZERO ADIOS 8 W</Card.Title>
                            <Card.Text>
                                Women's • Originals
                            </Card.Text>
                            <Card.Text>$130</Card.Text>
                            <Card.Text>7 colorst</Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={running18} />
                        <Card.Body>
                            <Card.Title>SUPERNOVA RISE SHOES</Card.Title>
                            <Card.Text>
                                Women's • Originals
                            </Card.Text>
                            <Card.Text>$140</Card.Text>
                            <Card.Text>12 colorst</Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={running19} />
                        <Card.Body>
                            <Card.Title>ADIZERO SL RUNNING SHOES</Card.Title>
                            <Card.Text>
                                Women's • Originals
                            </Card.Text>
                            <Card.Text>$120</Card.Text>
                            <Card.Text>5 colorst</Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={running20} />
                        <Card.Body>
                            <Card.Title>DURAMO 10 SHOES</Card.Title>
                            <Card.Text>
                                Women's • Originals
                            </Card.Text>
                            <Card.Text>$70</Card.Text>
                            <Card.Text>2 colorst</Card.Text>
                        </Card.Body>
                    </Card>
                    </div>} />
                <Route path="slides&sandals" element={<div className='soccer'>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={sandals1} />
                        <Card.Body>
                            <Card.Title>ADILETTE PLATFORM SLIDES</Card.Title>
                            <Card.Text>
                                Women's • Sportswear
                            </Card.Text>
                            <Card.Text>$35</Card.Text>
                            <Card.Text>6 colorst</Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={sandals2} />
                        <Card.Body>
                            <Card.Title>GAZELLE BOLD SHOES</Card.Title>
                            <Card.Text>
                                Originals
                            </Card.Text>
                            <Card.Text>$60</Card.Text>
                            <Card.Text>15 colorst</Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={sandals3} />
                        <Card.Body>
                            <Card.Title>ADILETTE 22 SLIDES</Card.Title>
                            <Card.Text>
                                Originals
                            </Card.Text>
                            <Card.Text>$60</Card.Text>
                            <Card.Text>6 colorst</Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={sandals4} />
                        <Card.Body>
                            <Card.Title>ADILETTE PLATFORM SLIDES</Card.Title>
                            <Card.Text>
                                Women's • Sportswear
                            </Card.Text>
                            <Card.Text>$50</Card.Text>
                            <Card.Text>6 colorst</Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={sandals5} />
                        <Card.Body>
                            <Card.Title>ADILETTE AQUA SLIDES</Card.Title>
                            <Card.Text>
                                Swim
                            </Card.Text>
                            <Card.Text>$25</Card.Text>
                            <Card.Text>10 colorst</Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={sandals6} />
                        <Card.Body>
                            <Card.Title>ZPLAASH SLIDES</Card.Title>
                            <Card.Text>
                                Sportswear
                            </Card.Text>
                            <Card.Text>$55</Card.Text>
                            <Card.Text>4 colorst</Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={sandals7} />
                        <Card.Body>
                            <Card.Title>ADILETTE COMFORT SLIDES</Card.Title>
                            <Card.Text>
                                Swim
                            </Card.Text>
                            <Card.Text>$35</Card.Text>
                            <Card.Text>17 colorst</Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={sandals8} />
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
                        <Card.Img variant="top" src={sandals9} />
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
                        <Card.Img variant="top" src={sandals10} />
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
                        <Card.Img variant="top" src={sandals11} />
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
                        <Card.Img variant="top" src={sandals12} />
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
                        <Card.Img variant="top" src={sandals13} />
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
                        <Card.Img variant="top" src={sandals14} />
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
                        <Card.Img variant="top" src={sandals15} />
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
                        <Card.Img variant="top" src={sandals16} />
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
                        <Card.Img variant="top" src={sandals17} />
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
                        <Card.Img variant="top" src={sandals18} />
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
                        <Card.Img variant="top" src={sandals19} />
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
                        <Card.Img variant="top" src={sandals20} />
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
                <Route path="walking" element={<div className='walking'>

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