import './Modal.css'
import Button from '../Button';

const Modal = ({
    setIsOpen,
    id ,
    onConfirm   
    })=>{


    return(
        <div className="model-bg" onClick={()=>{ setIsOpen(false)}}>
            
            <div className="centered">
              <div className="modal">
                <div className="modalHeader">
                  <h5 className="heading">Are you sure</h5>
                </div>

                <div className="modalContent">
                    <p>
                        Are you sure you want to delete the item?
                    </p>
                  
                </div>
                <div className="modal-buttons">
                    <Button label="Confirm" style ="modal-button" />
                    <Button label="Cancel"  style ="modal-button"/>
                </div> 
                

              </div>
            </div>
        </div>
        
    )
}

export default Modal;