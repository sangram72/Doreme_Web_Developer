import { Button } from "@mui/material";
import "./Customers.css"


import React from "react";
import { useState } from "react";
import firebase from "./Config";



function Customers() {
const[value,setvalue]=useState(false)
const[Names,setnames]=useState("")
const[address,setaddress]=useState("")
const[phoneno,setphoneno]=useState("")
const[bookingid,setbookingid]=useState("")
const todoRef = firebase.firestore().collection("Userdata");


                                       function submmitvalue(){
                                    //     fetch("https://my-new-project-a2690-default-rtdb.firebaseio.com/bookingdata.json",{
                                    //         method:"POST",
                                    //         body:JSON.stringify({
                                    //             "Names":Names,
                                    //             "address":address,
                                    //             "phoneno":phoneno,
                                    //             "bookingid":bookingid,

                                    //         }),
                                    //         headers:{
                                    //             "Content-Type":"Application/json"
                                    //         }
                                    //     }).then(res=>{alert("subbmited");
                                    //     setnames("")
                                    //     setaddress("")
                                    //     setphoneno("")
                                    //     setbookingid("")
                                    // })
                                    const timestamp = firebase.firestore.FieldValue.serverTimestamp();
                                    const data = {
                                        Names:Names,
                                        address:address,
                                        phoneno:phoneno,
                                        bookingid:bookingid,
                                        createdAt: timestamp
                                    };
                                    todoRef
                                        .add(data)
                                        .then(() => {
                                           
                                            alert("subbmited")
                                            
                                            
                                        })
                                        .catch((error) => {
                                            // show an alert in case of error
                                            alert(error);
                                        })
                                       }
                             
function clickthevalue(){
    setvalue(true);
}
                     function changethevalue1(event){
                        setnames(event.target.value)

                     }
                     function changethevalue2(event){
                        setaddress(event.target.value)

                     }
                     function changethevalue3(event){
                        setphoneno(event.target.value)

                     }
                     function changethevalue4(event){
                        setbookingid(event.target.value)

                     }
                     function getthevalue(res){
                        alert("hii")
                     }
    return (
        <>
            <div>
            
                {value == false?(<button type="button" id="new-button" class="btn btn-primary btn-lg mx-4" onClick={clickthevalue} style={{marginTop:'20%'}}>Add user details</button>):
                (<>

                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-4">
                            <div class="mb-3">
                                <label for="exampleFormControlInput1" class="form-label">Customer Name</label>
                                <input type="text" value={Names} class="form-control" onChange={changethevalue1} id="exampleFormControlInput1" placeholder="entercustomername" />
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div class="mb-3">
                                <label for="exampleFormControlInput1" class="form-label">customer address</label>
                                <input type="text" value={address} onChange={changethevalue2} class="form-control" id="exampleFormControlInput1" placeholder="customer address" />
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-4">
                            <div class="mb-3">
                                <label for="exampleFormControlInput1" class="form-label">cutomer phone no</label>
                                <input type="text" value={phoneno} onChange={changethevalue3} class="form-control" id="exampleFormControlInput1" placeholder="cutomer phone no" />
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div class="mb-3">
                                <label for="exampleFormControlInput1" class="form-label">customer booking id</label>
                                <input type="text" value={bookingid} onChange={changethevalue4} class="form-control" id="exampleFormControlInput1" placeholder="customer booking id" />
                            </div>
                        </div>
                    </div>




                    <div className="row">
                        <div className="col-md-4">
                            <select class="form-select" >
                                <option selected>Droneshot </option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                                <option value="4">four</option>
                                <option value="5">five</option>
                                <option value="6">six</option>
                                <option value="7">seven</option>
                                <option value="8">eight</option>
                            </select>
                        </div>
                       
                    </div>

                </div>


                <button type="button" class="btn btn-primary btn-lg mt-3" onClick={submmitvalue}>subbmit</button>
                </>)}
            </div>


        </>
    )
}
export default Customers;

