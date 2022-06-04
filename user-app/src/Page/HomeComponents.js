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
        await deleteDoc(doc(db, "user", "KXoMIq2KMHiZYjvHDUns")) // last point - object id
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
                
    );
}
export default HomeComponent;

