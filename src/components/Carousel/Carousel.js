import React from 'react'
import "./Carousel.css"



function Carousel() {
    return (
        <div id='CarouselBox'>
            <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active" data-bs-interval="4000">
                        <img src="https://bloggerspassion.com/wp-content/uploads/2019/12/best-programming-blogs.jpg" className="d-block w-100" alt="..."/>
                    </div>
                    <div className="carousel-item"  data-bs-interval="4000">
                        <img src="https://bloggerspassion.com/wp-content/uploads/2022/05/top-travel-blogs-in-India.jpg" className="d-block w-100" alt="..."/>
                    </div>
                    <div className="carousel-item" data-bs-interval="4000">
                        <img src="https://www.nimcj.org/admin/view//upload//blog//blogimage715.jpg" className="d-block w-100" alt="..."/>
                    </div>
                    <div className="carousel-item" data-bs-interval="4000">
                        <img src="https://www.ecampusnews.com/files/2016/01/blogs.jpg" className="d-block w-100" alt="..."/>
                    </div>
                    <div className="carousel-item" data-bs-interval="4000">
                        <img src="https://www.jimdo.com/static/7f58e83e14a16db25da8e56995f710b8/b086f/hero.jpg" className="d-block w-100" alt="..."/>
                    </div>
 
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    )
}

export default Carousel
