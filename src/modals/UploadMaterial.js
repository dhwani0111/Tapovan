import React, { useState } from 'react';
import Calendar from 'react-calendar';
import DatePicker from 'react-date-picker';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const CreateTaskPopup = ({modal, toggle, save}) => {
    const [taskName, setTaskName] = useState('');
    const [materialName, setDescription] = useState('');
    const [date, setDate] = useState('');
    const handleChange = (e) => {
        
        const {name, value} = e.target

        if(name === "taskName"){
            setTaskName(value)
        }else if(name=="date"){
            setDate(value)
        }
        else{
            setDescription(value)
        }


    }

    const handleSave = (e) => {
        e.preventDefault()
        let taskObj = {}
        taskObj["Name"] = taskName
        taskObj["MaterialName"] = materialName
        taskObj["Date"] = date
        save(taskObj)
    }


    return (
        <Modal isOpen={modal} toggle={toggle}>
            <ModalHeader toggle={toggle}>Upload Material</ModalHeader>
            <ModalBody>
            
                    <div className = "form-group">
                        <label>Material Name</label>
                        <input type="text" className = "form-control" value = {taskName} onChange = {handleChange} name = "taskName"/>
                    </div>
                    <div className = "form-group">
                        <label>select material</label>
                        <input type="file" className = "form-control" value = {materialName} onChange = {handleChange} name = "materialName"/>
                    </div>
                    <div className = "form-group">
                        <label>Date</label>
                        <input type="date" className = "form-control" value = {date} onChange = {handleChange} name = "date"/>
                    </div>
                    {/* <div className = "form-group">
                        <label>Date </label>
                        <Calendar onChange={onChange} value={date}/>
                        {console.log(date)}
                        {date.toString()}
                    </div> */}
                    {/* <FormGroup controlId="birthDate" bsSize="large">
    <FormControl
      autoFocus
      type="date"
      value={this.state.birthDate}
      onChange={this.handledChange}
    />
  </FormGroup> */}
                
            </ModalBody>
            <ModalFooter>
            <Button color="primary" onClick={handleSave}>Create</Button>{' '}
            <Button color="secondary" onClick={toggle}>Cancel</Button>
            </ModalFooter>
      </Modal>
    );
};

export default CreateTaskPopup;