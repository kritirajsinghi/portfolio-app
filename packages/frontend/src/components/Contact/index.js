import React from 'react';
import Form from 'components/Form'
import './style.css'
import config from '../../../config/config';
const Contact=({data})=>{
    const submitData=async(data)=>{
        let form={}
        console.log(data)
        for(let item in data){
            form[item.toLowerCase()]=data[item].value;
        }
        console.log(form)
        try{
            const response=await fetch(`${config.apiBaseUrl}/api/v1/contact`,{
                method:"POST",
                headers:{"content-type":"application/json"},
                body:JSON.stringify(form)
            })
        }
        catch{
            console.log("Submission Failed");
        }
    }
    return(
        <section id="contact">
            <div class="contact-description">
            <i className="fa fa-envelope"></i>
            <h3>Want to collaborate</h3>
            <h3>OR </h3>
            <h3>Work with me ?</h3>
            </div>
            <div>
        <Form data={data.formItems} onSubmit={submitData}/>
        </div>
        
        </section>
        
    )
}

export default Contact;