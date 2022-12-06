function Videos(){
    return(
        <center>
      <div style={{overflow: "hidden" , position: "relative"}}>

                    <iframe style={{left: "0", top: "0"}}
                    width="100%" 
                    height="100%" 
                    src={"https://www.youtube.com/embed/2S24-y0Ij3Y?list=RDEMAiHpN5CrU2A2TrjDA1P9bQ"}
                    title="BLACKPINK - 'Kill This Love' M/V" 
                    frameborder="0" 
                    allow="fullscreen; accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowfullscreen>
                    </iframe>              
      
      <iframe 
      width="100%"  
      height="100%" 
      src="https://www.youtube.com/embed/gQlMMD8auMs" 
      title="BLACKPINK - ‘Pink Venom’ M/V" 
      frameborder="0" 
      allow="fullscreen; accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
      allowfullscreen>

      </iframe>
      </div>
      </center>
    )
  }
   export default Videos;