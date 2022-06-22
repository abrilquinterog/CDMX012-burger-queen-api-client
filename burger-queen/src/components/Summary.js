import "./Summary.css";


const Summary = () =>{
   
    return(
        <>
        <div className="sumContainer">
            <div className="sumInputs">
                <input placeholder="Nombre del cliente" className="inp"></input>
                <input placeholder="No. Mesa" className="inp"></input>
            </div>
        <div className="sumNote">
        <div className="sumHeader">
                <h1>Resumen</h1>
            </div>
            <div className="check">
             <h1>$ 0.00</h1>
             </div>
        </div>
        </div>
        </>
    );
};

export default Summary;