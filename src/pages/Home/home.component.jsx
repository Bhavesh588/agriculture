import React, { useRef } from 'react';
import $ from 'jquery';
import AOS from 'aos';

import FormInput from '../../components/form-input/form-input.component';

import './home.styles.scss';
import 'aos/dist/aos.css'

const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop)

const Home = () => {
    $(window).scroll(function() {
        if ($(document).scrollTop() > 500) {
            $('.navbar').addClass('affix');
        } else {
            $('.navbar').removeClass('affix');
        }
    })

    $(document).ready(function(){
        $('FormInput').change(function() {
            alert("The Text has being change")
        });
    })

    const home = useRef(null)
    const product = useRef(null)
    const services = useRef(null)
    const aboutus = useRef(null)
    const certificate = useRef(null)
    const contactus = useRef(null)
    const team = useRef(null)

    const Home = () => scrollToRef(home)
    const Product = () => scrollToRef(product)
    const Services = () => scrollToRef(services)
    const Aboutus = () => scrollToRef(aboutus)
    const Certificate = () => scrollToRef(certificate)
    const Contactus = () => scrollToRef(contactus)
    const Team = () => scrollToRef(team)

    AOS.init({
        duration: 1200,
    })

    return (
        <div>
            <div className="Home" ref={home}>
                <div className='navbar navbar-dark fixed-top navbar-expand-md'>
                    <a href="true" className='navbar-brand'>Logo</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsible">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="collapsible">
                        <ul className="navbar-nav nav ml-auto">
                            <li className="nav-item"><button className="nav-link btn" onClick={Home}>Home</button></li>
                            <li className="nav-item"><button className="nav-link btn" onClick={Product}>Product</button></li>
                            <li className="nav-item"><button className="nav-link btn" onClick={Services}>Services</button></li>
                            <li className="nav-item"><button className="nav-link btn" onClick={Aboutus}>About Us</button></li>
                            <li className="nav-item"><button className="nav-link btn" onClick={Certificate}>Certificate</button></li>
                            <li className="nav-item"><button className="nav-link btn" onClick={Team}>Team</button></li>
                            <li className="nav-item"><button className="nav-link btn" onClick={Contactus}>Contact Us</button></li>
                        </ul>
                    </div>
                </div>
                <div data-aos="fade-up">
                    <div className="logo">[Logo]</div><br/>
                    <div className="compname">[Company Name]</div>
                    <div className="moto">[Moto]</div>
                    <button className="btn btn-danger button" onClick={Contactus}>Contact Us</button>
                </div>
            </div>
            <div className="product bg-dark" ref={product}>
                <div className="pro" data-aos="fade-up">
                    <div className="title">Product</div>
                    <div id="demo" className="carousel slide" data-interval="false">
                        <ul className="carousel-indicators">
                            <li data-target="#demo" data-slide-to="0" className="active"></li>
                            <li data-target="#demo" data-slide-to="1"></li>
                            <li data-target="#demo" data-slide-to="2"></li>
                        </ul>

                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <div className="protitle">[Product title]</div>
                                <div className='proimage'>
                                    Product Image
                                </div>
                                <div className="des">
                                    <strong className="tit">Product Description</strong>
                                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex nulla, tenetur suscipit corporis, quas laboriosam neque, recusandae id inventore eum tempore quidem nostrum alias. Fugit libero fugiat alias earum sequi!</p>
                                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex nulla, tenetur suscipit corporis, quas laboriosam neque, recusandae id inventore eum tempore quidem nostrum alias. Fugit libero fugiat alias earum sequi!</p>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <div className="protitle">[Product title]</div>
                                <div className='proimage'>
                                    Product Image
                                </div>
                                <div className="des">
                                    <strong className="tit">Product Description</strong>
                                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex nulla, tenetur suscipit corporis, quas laboriosam neque, recusandae id inventore eum tempore quidem nostrum alias. Fugit libero fugiat alias earum sequi!</p>
                                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex nulla, tenetur suscipit corporis, quas laboriosam neque, recusandae id inventore eum tempore quidem nostrum alias. Fugit libero fugiat alias earum sequi!</p>
                                </div>
                            </div><div className="carousel-item">
                                <div className="protitle">[Product title]</div>
                                <div className='proimage'>
                                    Product Image
                                </div>
                                <div className="des">
                                    <strong className="tit">Product Description</strong>
                                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex nulla, tenetur suscipit corporis, quas laboriosam neque, recusandae id inventore eum tempore quidem nostrum alias. Fugit libero fugiat alias earum sequi!</p>
                                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex nulla, tenetur suscipit corporis, quas laboriosam neque, recusandae id inventore eum tempore quidem nostrum alias. Fugit libero fugiat alias earum sequi!</p>
                                </div>
                            </div>
                        </div>

                        <a className="carousel-control-prev" href="#demo" data-slide="prev">
                            <span className="carousel-control-prev-icon"></span>
                        </a>
                        <a className="carousel-control-next" href="#demo" data-slide="next">
                            <span className="carousel-control-next-icon"></span>
                        </a>
                    </div>
                </div>
            </div>
            <div className="services" ref={services}>
                <div className="servbox" data-aos="fade-up">
                    <div className="title">Services</div>
                    <div id="ser" className="carousel slide" data-interval="false">
                        <ul className="carousel-indicators">
                            <li data-target="#ser" data-slide-to="0" className="active"></li>
                            <li data-target="#ser" data-slide-to="1"></li>
                            <li data-target="#ser" data-slide-to="2"></li>
                        </ul>

                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <div className="container-fluid">
                                    <div className="row">
                                        <div className="col-md ">
                                            <div className='outline'>
                                                <div className="inline">
                                                    Service Image
                                                </div>
                                            </div>
                                            <div className="des">
                                                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex nulla, tenetur suscipit corporis, quas laboriosam neque</p>
                                            </div>
                                        </div>
                                        <div className="col-md ">
                                            <div className='outline'>
                                                <div className="inline">
                                                    Service Image
                                                </div>
                                            </div>
                                            <div className="des">
                                                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex nulla, tenetur suscipit corporis, quas laboriosam neque</p>
                                            </div>
                                        </div>
                                        <div className="col-md ">
                                            <div className='outline'>
                                                <div className="inline">
                                                    Service Image
                                                </div>
                                            </div>
                                            <div className="des">
                                                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex nulla, tenetur suscipit corporis, quas laboriosam neque</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <div className="container-fluid">
                                    <div className="row">
                                        <div className="col-md ">
                                            <div className='outline'>
                                                <div className="inline">
                                                    Service Image
                                                </div>
                                            </div>
                                            <div className="des">
                                                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex nulla, tenetur suscipit corporis, quas laboriosam neque</p>
                                            </div>
                                        </div>
                                        <div className="col-md ">
                                            <div className='outline'>
                                                <div className="inline">
                                                    Service Image
                                                </div>
                                            </div>
                                            <div className="des">
                                                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex nulla, tenetur suscipit corporis, quas laboriosam neque</p>
                                            </div>
                                        </div>
                                        <div className="col-md ">
                                            <div className='outline'>
                                                <div className="inline">
                                                    Service Image
                                                </div>
                                            </div>
                                            <div className="des">
                                                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex nulla, tenetur suscipit corporis, quas laboriosam neque</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <div className="container-fluid">
                                    <div className="row">
                                        <div className="col-md ">
                                            <div className='outline'>
                                                <div className="inline">
                                                    Service Image
                                                </div>
                                            </div>
                                            <div className="des">
                                                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex nulla, tenetur suscipit corporis, quas laboriosam neque</p>
                                            </div>
                                        </div>
                                        <div className="col-md ">
                                            <div className='outline'>
                                                <div className="inline">
                                                    Service Image
                                                </div>
                                            </div>
                                            <div className="des">
                                                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex nulla, tenetur suscipit corporis, quas laboriosam neque</p>
                                            </div>
                                        </div>
                                        <div className="col-md ">
                                            <div className='outline'>
                                                <div className="inline">
                                                    Service Image
                                                </div>
                                            </div>
                                            <div className="des">
                                                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex nulla, tenetur suscipit corporis, quas laboriosam neque</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <a className="carousel-control-prev" href="#ser" data-slide="prev">
                            <span className="carousel-control-prev-icon"></span>
                        </a>
                        <a className="carousel-control-next" href="#ser" data-slide="next">
                            <span className="carousel-control-next-icon"></span>
                        </a>
                    </div>
                </div>
            </div>
            <div className="aboutus bg-dark" ref={aboutus}>
                <div className="about" data-aos="fade-up">
                    <div className="container">
                        <div className="row">
                            <div className="col-md">
                                <div className="aboutimage">
                                    Company Image
                                </div>
                            </div>
                            <div className="col-md">
                                <div className="title">About Us</div>
                                <hr className="linehr"/>
                                <div className="det">
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, pariatur praesentium quasi quibusdam laborum soluta, laboriosam quo vero cumque animi iste placeat voluptatem adipisci dignissimos, atque harum. Repellendus, nostrum consequuntur.</p>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, pariatur praesentium quasi quibusdam laborum soluta, laboriosam quo vero cumque animi iste placeat voluptatem adipisci dignissimos, atque harum. Repellendus, nostrum consequuntur.</p>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, pariatur praesentium quasi quibusdam laborum soluta, laboriosam quo vero cumque animi iste placeat voluptatem adipisci dignissimos, atque harum. Repellendus, nostrum consequuntur.</p>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, pariatur praesentium quasi quibusdam laborum soluta, laboriosam quo vero cumque animi iste placeat voluptatem adipisci dignissimos, atque harum. Repellendus, nostrum consequuntur.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="certificate" ref={certificate}>
                <div className="cerbox" data-aos="fade-up">
                    <div className="title">Certificates</div>
                    <div className="row">
                        <div className="col-md ">
                            <div className='outlinecer my-3'>
                                Certificate Image
                            </div>
                            <div className="py-3">[Certificate Name]</div>
                        </div>
                        <div className="col-md ">
                            <div className='outlinecer my-3'>
                                Certificate Image
                            </div>
                            <div className="py-3">[Certificate Name]</div>
                        </div>
                        <div className="col-md ">
                            <div className='outlinecer my-3'>
                                Certificate Image
                            </div>
                            <div className="py-3">[Certificate Name]</div>
                        </div>
                        <div className="col-md ">
                            <div className='outlinecer my-3'>
                                Certificate Image
                            </div>
                            <div className="py-3">[Certificate Name]</div>
                        </div>
                        <div className="col-md ">
                            <div className='outlinecer my-3'>
                                Certificate Image
                            </div>
                            <div className="py-3">[Certificate Name]</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="team bg-dark" ref={team}>
                <div className="teambox" data-aos="fade-up">
                    <div className="title py-3">Teams</div>
                    <div className="container">
                        <div className="row">
                            <div className="col-md py-4">
                                <div className="teamimg">Team Image</div>
                                <div className="teamname py-2">[Name]</div>
                                <div className="jobtitle py-2">[Job Title]</div>
                            </div>
                            <div className="col-md">
                                <div className="teamimg">Team Image</div>
                                <div className="teamname py-2">[Name]</div>
                                <div className="jobtitle py-2">[Job Title]</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="contactus" ref={contactus}>
                <div className="conbox" data-aos="fade-up">
                    <div className="title">Contact Us</div>
                    <form className="formbox">
                        <FormInput name="name" type="text" label="Your Name" value="" />
                        <FormInput name="email" type="email" label="Email Address" value="" />
                        <FormInput name="mobile" type="text" label="Mobile" value="" maxLength="10" />
                        <FormInput name="subject" type="text" label="Subject" value="" />
                        <FormInput name="message" type="textarea" label="Message" value="" />
                        <button className="btn btn-danger w-25 button">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Home;