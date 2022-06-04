import React from 'react'
import NavBar from '../components/NavBar';
import { useEffect, useState } from "react";
import { db } from '../firebase-config';
import { collection, addDoc, getDocs, deleteDoc, updateDoc, doc } from "firebase/firestore";

function HomeComponent() {

    const [id,setId] = useState('');
    const [time, setTime] = useState('');
    const [date,SetDate] = useState('');
    const [from, setFrom] = useState('');
    const [to, setTo] = useState('');
    const [schedule, setSchedule] = useState([]);
    

    useEffect(() => {
        getSchedule();
    }, []);
    

    const addSchedule = async () => {
        const docRef = await addDoc(collection(db, "user"), {
            Date:date,
            Time: time,
            From: from,
            Where: to,
            Id:id,
            

            
        }).then(() => {
            alert("Record Successfully Added !");
            clearTexts();
        }).catch(() => {
            alert("Record Adding Failed !")
        });
    }

    const deleteSchedule = async () => {
        await deleteDoc(doc(db, "user",id))
            .then(() => {
                alert("Student Deleted !")
            }).catch(() => {
                alert("Delete Failed !")
            });
    }

    const getSchedule = async () => {
        const querySnapshot = await getDocs(collection(db, "user"));
        setSchedule(querySnapshot.docs.map((doc) => ({
            ...doc.data()
        })));
    }

    const clearTexts = () => {
        setTime('');
        setFrom('');
        setTo('');
        SetDate('');
        setId('');
        
    }

    return (
        <div>
            <div className="container">
                <div className="row">
                </div>
                <div className="row">
                    <div className="col">

                    <div class="mb-3">
                            <label for="exampleFormControlInput1" class="form-label">ID</label>
                            <input type="email" value={id} onChange={(e) => { setId(e.target.value) }} class="form-control" id="exampleFormControlInput1" placeholder="" />
                        </div>

                    <div class="mb-3">
                            <label for="exampleFormControlInput1" class="form-label">Date</label>
                            <input type="email" value={date} onChange={(e) => { SetDate(e.target.value) }} class="form-control" id="exampleFormControlInput1" placeholder="2020/05/30" />
                        </div>

                        <div class="mb-3">
                            <label for="exampleFormControlInput1" class="form-label">Journy Start Time</label>
                            <input type="email" value={time} onChange={(e) => { setTime(e.target.value) }} class="form-control" id="exampleFormControlInput1" placeholder="23:55" />
                        </div>
                        <div class="mb-3">
                            <label for="exampleFormControlInput1" class="form-label">From</label>
                            <input type="email" value={from} onChange={(e) => { setFrom(e.target.value) }} class="form-control" id="exampleFormControlInput1" placeholder="Matale" />
                        </div>
                        <div class="mb-3">
                            <label for="exampleFormControlInput1" class="form-label">To</label>
                            <input type="email" value={to} onChange={(e) => { setTo(e.target.value) }} class="form-control" id="exampleFormControlInput1" placeholder="Colombo" />
                        </div>
                        <div class="mb-3">
                            
                        </div>
                        
                        <button type="button" class="btn btn-success" onClick={addSchedule}>Save</button>
                        <button type="button" class="btn btn-warning" style={{ marginLeft: 10 }} onClick={deleteSchedule}>Delete</button>
                        <button type="button" class="btn btn-info" style={{ marginLeft: 10 }} onClick={deleteSchedule}>Update</button>
                    </div>
                    <div className="col">
                        <table class="table">
                            <thead>
                                <tr>
                                    <th scope="col">Date</th>
                                    <th scope="col">Time</th>
                                    <th scope="col">From</th>
                                    <th scope="col">To</th>
                                    
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    schedule.map(schedule => {
                                        return (
                                            <tr>
                                                <td>{schedule.Date}</td>
                                                <td>{schedule.Time}</td>
                                                <td>{schedule.From}</td>
                                                <td>{schedule.Where}</td>
                                                
                                            </tr>
                                        )
                                    })
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default HomeComponent;

