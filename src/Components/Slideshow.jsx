import { useEffect, useState } from "react";



function Slideshow({images, autoplay,direction, limit = images.length-1, wid = "600px", heig = "300px"}){

    const [currentImg, setCurrentImg] = useState(0);

    useEffect(()=>{
        console.log("useEffect Got Called",Date.now());
        if(autoplay > 500){
            var id = setInterval(()=>{
                if(direction === "dec"){
                    handleChange(-1)
                }
                else if(direction === "inc"){
                    handleChange(1)
                }
            },autoplay)
        }

        return ()=>{
            console.log("Cleaning up",currentImg);
            clearInterval(id)
        }
    },[currentImg,autoplay])

    const handleChange = (val) => {
        if(val === -1 && currentImg === 0){
            setCurrentImg(limit)
            // return;
        }
        else if(val === 1 && currentImg === limit){
            setCurrentImg(0)
            // return;
        }
        else{
            setCurrentImg(prev=>prev+val)
        }
    }

    return (
        <div>
            <h1>Slide {currentImg}</h1>
            <div style={{
                display:"flex", 
                margin:"auto", 
                width:`${wid}`, 
                height:`${heig}`,
                border:"1px solid red",
                justifyContent:"center"
                }}>

                
                {!autoplay && <button  style={{height:"30px", marginTop:"22%"}} onClick={()=>handleChange(-1)}>Prev</button>}
                <img  style={{width:"90%", height:"90%"}} src={images[currentImg]} alt={currentImg} />
                {!autoplay && <button style={{height:"30px", marginTop:"22%"}} onClick={()=>handleChange(+1)}>Next</button>}
            </div>
        </div>

    )
}

export default Slideshow