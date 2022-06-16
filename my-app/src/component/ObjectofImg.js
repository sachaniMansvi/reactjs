import './ObjectofImg.css';
function Objectofimg() {
    const imgObj = [
        {
            imge: "https://picsum.photos/200/300",
            alt: "img1",
            heading: "Lorem Ipsum",
            content: "Stimulate your mind as you test your typing speed with this standard English paragraph typing test. Stimulate your mind as you test your typing speed im"
        },
        {
            imge: "https://picsum.photos/200/300",
            alt: "img1",
            heading: "Lorem Ipsum",
            content: "Stimulate your mind as you test your typing speed with this standard English paragraph typing test. Stimulate your mind as you test your typing speed im"
        },
        {
            imge: "https://picsum.photos/200/300?grayscale",
            alt: "img1",
            heading: "Lorem Ipsum",
            content: "Stimulate your mind as you test your typing speed with this standard English paragraph typing test. Stimulate your mind as you test your typing speed im"
        },
        {
            imge: "https://picsum.photos/seed/picsum/200/300",
            alt: "img1",
            heading: "Lorem Ipsum",
            content: "Stimulate your mind as you test your typing speed with this standard English paragraph typing test.Stimulate your mind as you test your typing speed im"
        }

    ]
    return (
        <div className='main_container'>
            {
                imgObj.map((value) => {
                    return (
                            <div className="container">
                                 <img src={value.imge} alt={value.alt} />
                            
                                 <div>  
                                    <h2>{value.heading}</h2>
                                    <p>{value.content}</p>
                                 </div>
                        </div>
                    )

                })
            }


        </div>
    )
}
export default Objectofimg;