import React, {useEffect, useState} from 'react';
import CreateTask from '../modals/CreateTask'
import Card from './Card';
import './quiz.css';


const Quiz = () => {

    const getDate=()=>{

        let newDate = new Date()
        let date = newDate.getDate();
        if (date<10){
            date='0'+date;
        }
        let month = newDate.getMonth() + 1;
        if (month<10){
            month='0'+month;
        }
        let year = newDate.getFullYear();
        let d=year+'-'+month+'-'+date
        return d;
    }
        

    const [modal, setModal] = useState(false);
    const [taskList, setTaskList] = useState([])
    const [activeList, setActiveList] = useState([])
    const [completeList, setCompleteList] = useState([])
    const [showResults, setShowResults] = useState(false)
    const [show, setShow] = useState(false)

    const ab = () => {
        setShow(true)
        setShowResults(false)
    }
    const on = () => {
        setShowResults(true)
        setShow(false)
    }
    // const a = () => setShow(false)
    // const b = () => setShowResults(false)

    useEffect(() => {
        let arr = localStorage.getItem("taskList")
       
        if(arr){
            let obj = JSON.parse(arr)
            setTaskList(obj)
        }

        let a1 = localStorage.getItem("activeList")
       
        if(a1){
            let obj = JSON.parse(a1)
            setActiveList(obj)
        }
        let a2= localStorage.getItem("completeList")
        if(a2){
            let obj = JSON.parse(a2)
            setCompleteList(obj)
        }

    }, [])


    const deleteTask = (index) => {
        var answer = window.confirm("Delete Quiz?");
        if (answer) {
        let tempList = taskList
        tempList.splice(index, 1)
        localStorage.setItem("taskList", JSON.stringify(tempList))
        setTaskList(tempList)
        window.location.reload()
        }
        
    }
    const deleteTask2 = (index) => {
        
        let tempList = taskList
        tempList.splice(index, 1)
        localStorage.setItem("taskList", JSON.stringify(tempList))
        setTaskList(tempList)
        window.location.reload()
        
        
    }

    const deleteActive = (index) => {
        
        let tempList = activeList
        tempList.splice(index, 1)
        localStorage.setItem("activeList", JSON.stringify(tempList))
        setActiveList(tempList)
        window.location.reload()
        
    }

    const updateListArray = (obj, index) => {
        let tempList = taskList
        tempList[index] = obj
        localStorage.setItem("taskList", JSON.stringify(tempList))
        setTaskList(tempList)
        window.location.reload()
    }

    const toggle = () => {
        setModal(!modal);
    }

    const saveTask = (taskObj) => {
        let tempList = taskList
        tempList.push(taskObj)
        localStorage.setItem("taskList", JSON.stringify(tempList))
        setTaskList(taskList)
        setModal(false)
    }

    const saveActive = (taskObj) => {
        let tempList = activeList
        tempList.push(taskObj)
        localStorage.setItem("activeList", JSON.stringify(tempList))
        setActiveList(activeList)
        setModal(false)
    }

    const saveComplete = (taskObj) => {
        let tempList = completeList
        tempList.push(taskObj)
        localStorage.setItem("completeList", JSON.stringify(tempList))
        setCompleteList(activeList)
        setModal(false)
    }
    
    const Results = () => (
        <div id="results" className="task-container">
            {activeList && activeList.map((obj , index) => <Card taskObj = {obj} index = {index} deleteTask = {deleteTask} updateListArray = {updateListArray}/> )}
        </div>
      )

    const Complete = () => (
        <div id="results" className="task-container">
                {completeList && completeList.map((obj , index) => <Card taskObj = {obj} index = {index} deleteTask = {deleteTask} updateListArray = {updateListArray}/> )}

        </div>
      )

    const fun=()=>{
        
        if(taskList !=null){
            for(var i=0;i<taskList.length;i++){
                const userExists = activeList.some((user) => user.Name === taskList[i].Name);
                if(!userExists && taskList[i].Date >= getDate()){
                    saveActive(taskList[i])
                    deleteTask2(i)
                }
            }
        }
        on();
    }

    const fun2=()=>{
    
        if(activeList !=null){
            for(var i=0;i<activeList.length;i++){
                if(activeList[i].Date < getDate()){
                    saveComplete(activeList[i])
                    deleteActive(i)
                }
            }
        }
        ab();
    }

    return (
        
        <>
            <div className = "header text-center">
                <h3>Quiz</h3>
                <button className = "btn btn-primary mt-2" onClick = {() => setModal(true)} >Create Quiz</button>
                
            </div>
            <div className = "text-center">
            <button type="submit" name="partyInfo" onClick={fun} style={{"margin-bottom": 15},{"margin-left": 15}}
                                    class="btn btn-primary mt-2 float-left">

                                Active

                            </button>
                            
                            <button type="submit" name="partyInfo" onClick={fun2} style={{"margin-bottom": 15},{"margin-left": 15}}
                                    class="btn btn-primary mt-2 float-left">

                                Completed

                            </button>
            </div>
            <div className = "task-container">
                {/* {taskList.map((obj) => <li>{obj.Date}</li>)} */}
                { showResults ? <Results/> : null }
                { show ? <Complete/> : null}

                {/* {taskList && taskList.map((obj , index) => <Card taskObj = {obj} index = {index} deleteTask = {deleteTask} updateListArray = {updateListArray}/> )} */}
            </div>
            <CreateTask toggle = {toggle} modal = {modal} save = {saveTask}/>
            
        </>
    );
};

export default Quiz ;