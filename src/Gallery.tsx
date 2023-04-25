

const Gallery = () => {
    const images = [ "./3.jpg", "./4.jpg", "./5.jpg", "./6.jpg",'./lifting.JPG', './row.jpg', "./1.jpg", "./2.jpg",]

    return (
        <>
            <div className="Gallery">
                <div className="images">
                    {images.map((image: any) => <img style={{ height: "300px" }} src={image}></img>)}
                </div>

            </div>
        </>
    )
}
export default Gallery;