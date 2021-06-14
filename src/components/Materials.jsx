import React, {useEffect, useState} from 'react';
import CreateTask from '../modals/UploadMaterial';
import EditTask from '../modals/EditTask';
import Card from './CardMaterial';
import './material.css';

const TodoList = () => {
    const [modal, setModal] = useState(false);
    const [materialList, setTaskList] = useState([])
    
    useEffect(() => {
        let arr = localStorage.getItem("materialList")
       
        if(arr){
            let obj = JSON.parse(arr)
            setTaskList(obj)
        }
    }, [])


    const deleteTask = (index) => {
        
        if(window.confirm("Are you sure you want to delete this Material?")){
            let tempList = materialList
            tempList.splice(index, 1)
            localStorage.setItem("materialList", JSON.stringify(tempList))
            setTaskList(tempList)
            window.location.reload()
        }
        
    }

    const updateListArray = (obj, index) => {
        let tempList = materialList
        tempList[index] = obj
        localStorage.setItem("materialList", JSON.stringify(tempList))
        setTaskList(tempList)
        window.location.reload()
    }

    const toggle = () => {
        setModal(!modal);
    }

    const saveTask = (taskObj) => {
        let tempList = materialList
        tempList.push(taskObj)
        localStorage.setItem("materialList", JSON.stringify(tempList))
        setTaskList(materialList)
        setModal(false)
    }
    // const active=()=>{
    //     console.log("active")
    // }
    // const completed=()=>{
    //     console.log("completed")
    // }
    // const todayDate=()=>{
    //     var today = new Date(),
    //     date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
    //     return date;
    // }
    
    return (
        <>
            <div className = "header text-center">
                <h3>Materials</h3>
                <button className = "btn btn-primary mt-2" onClick = {() => setModal(true)} >Add </button>
            </div>
            
            {/* <input type="radio" value="Active" id="active"  name="gender" onClick={fun}/> Active &nbsp;
            <input type="radio" value="Completed" id="completed"name="gender" onClick={fun2}/> Completed */}
            
            <div className = "task-container">
            {materialList && materialList.map((obj , index) => <Card taskObj = {obj} index = {index} deleteTask = {deleteTask} updateListArray = {updateListArray}/> )}
            </div>
            <CreateTask toggle = {toggle} modal = {modal} save = {saveTask}/>
        </>
    );
};

export default TodoList;