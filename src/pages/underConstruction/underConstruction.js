import './underConstruction.css'

export const UnderConstruction = () => {

    return (
        <div className="body_home">
            <section className="section_1">
                <video src="./fitness_back.mp4" autoPlay  muted loop poster="https://carontestudio.com/img/contacto.jpg"></video>
                <h1 className="info_web">UNDER CONSTRUCCTION</h1>
                <img alt='mercadoenvios' src='./malenvios.png' className='section_2' />
            </section>    
        </div>
    )
}