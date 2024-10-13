export default function ImageDisplay({ imageName, userName }) {  
    const imagePath = process.env.PUBLIC_URL + `/${imageName}.jpg`;  
    
    return (  
      // <div className="flex justify-center items-center px-4 py-2">  
      //   <img src={imagePath} alt={imageName} className="max-w-md mx-auto"/> 
      //   <h5>{imageName}</h5>
      // </div>  

    <div className="flex justify-center items-center px-4 py-2">    
    <div>  
      <img src={imagePath} alt={imageName} className="max-w-md mx-auto rounded-lg"/>   
      <h5 className="text-center">{userName}</h5>  
    </div>  
    </div>    
    );  
  }  
  