import React, { useState, useEffect } from "react";
import firebase from "../Customers/Config"
function Orders() {
    const [value, setvalue] = useState([])
    const[value1,setvalue1]=useState(false)
const[Names,setnames]=useState("")
const[address,setaddress]=useState("")
const[phoneno,setphoneno]=useState("")
const[bookingid,setbookingid]=useState("")
const[updateid,setupdateid]=useState()

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
    const todoRef = firebase.firestore().collection("Userdata");
    useEffect(() => {
       getthenewvalue()
    }, [])

    function getthenewvalue(){
        todoRef
        .orderBy('createdAt', 'desc')
        .onSnapshot(
            querySnapshot => {
                const todos = []
                querySnapshot.forEach((doc) => {
                    const { Names, address, bookingid,phoneno } = doc.data()
                    todos.push({
                        id: doc.id,

                        Names,
                        address,
                        bookingid,
                        phoneno
                    })
                })
                setvalue(todos)
                //console.log(users)
            })

    }


    function deleteitems(value){
        todoRef
            .doc(value)
            .delete()
            .then(() => {
                
                alert("Deleted successfully");
            })
            .catch(error => {
                
                alert(error);
            })
    }

    function updateitems(value){
        todoRef.doc(value)
        .update({
            Names:Names,
            address:address,
            phoneno:phoneno,
            bookingid:bookingid

        }).then(()=>alert("update successfully"))
    }

    console.log(value);
    // alert(updateid)
    return (


        <div>
           
            <div className="container-fluid">
                <div className="row">
                    {value.map(function (caaavalue) {
                        return (
                            <div class="card text-bg-info mb-3" style={{ "max-width": "18rem", "marginLeft":"10px" ,marginTop:'20%'}}>
                                <div class="card-header"> <p>{caaavalue.Names}</p></div>
                                <div class="card-body">
                                    <h5 class="card-title">{caaavalue.address}</h5>
                                    <p class="card-text">{caaavalue.bookingid}</p>
                                    <button type="button" class="btn btn-primary" onClick={()=>deleteitems(caaavalue.id)}>delete</button>
                                    <button type="button" class="btn btn-primary mx-3" onClick={()=>{setvalue1(true);setupdateid(caaavalue.id)}}>update</button>

                                </div>
                            </div>

                        )
                    })}



                </div>
                {value1 == false?null:(<div className="container-fluid">
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

                    <button type="button" class="btn btn-primary mx-3" onClick={()=>updateitems(updateid)}>submmit</button>

                </div>)}
            </div>
            </div>)
        
}

            export default Orders;