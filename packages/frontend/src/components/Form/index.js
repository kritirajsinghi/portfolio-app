import React,{useState,useEffect} from 'react';
import './style.css'
const emailRegex=/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const validations={
    "required":(value)=>{
        return(
            value==undefined ||
            value===null ||
            value===""
        )
    },
    "format":(value,rule)=>{
        switch(rule.value){
            case "email":
                return !emailRegex.test(value)
            default:
                return false;
        }
    },
    "minLength":(value,rule)=> value && value.length<rule.value
}
const validate=(value,field)=>{
    const {validation}=field;
    let error="";
    if (validation){
        const rules=Object.keys(validation);
        console.log(rules)
        for(const rule of rules){
            const invalid=validations[rule](value,validation[rule])
            if(invalid){
                error=validation[rule].message;
                break;
            }   
        }
        return error;
    }
}
const Form=({data,onSubmit})=>{
    const [form,setForm]=useState({}) 
    const [error,setError]=useState(true)   
    useEffect(()=>{
        if(data){
            const formState={};
            data.forEach((item)=>formState[item.name]={value:'',error:true,touched:false});
            setForm(formState)
        }
    },[])
    const formErrorStatus=()=>{
        let error=[];
        for(let item in form){
                if(form[item].error){{
                    error.push(form[item].error);
                }
            }    
        }
        setError([...error])
    }
    const setFormData=(event,formItem,blur=false)=>{
        let error=null;
        let obj={...form[formItem.name]};
        if(form[formItem.name].touced || blur){
            error= validate(event.target.value,formItem);
        }
        if(blur){
           obj.touched=true
        }
        obj={...obj,value:event.target.value,error:error}
        setForm({...form,[formItem.name]:obj})
        formErrorStatus()
    }
    return(
        <>
        <form>
        {
        data.map((formItem)=>{
            switch(formItem.type){
                case "input":
                    return(
                        <>
                     <label htmlFor={formItem.name}>
                     {formItem.name} {formItem.validation.required? <span className="required">*</span>:''}
                    </label>
                    <div className="input-block">
                    <input type="text" name={formItem.name} onBlur={(e)=>setFormData(e,formItem,true)}onChange={(e)=>setFormData(e,formItem)} defaultValue="" value={form[formItem.name] ?form[formItem.name].value:''}/>
                    {form[formItem.name]?<span className="error">{form[formItem.name].error}</span> :''}
                    </div>
                    </>)
                case "textarea":
                    return(
                        <>
                         <label htmlFor={formItem.name}>
                         {formItem.name} {formItem.validation.required? <span className="required">*</span>:''}
                    </label>
                    <div className="input-block">
                         <textarea rows={6} name={formItem.name} onBlur={(e)=>setFormData(e,formItem,true)}onChange={(e)=>setFormData(e,formItem)} onChange={(e)=>setFormData(e,formItem)} value={form[formItem.name] ?form[formItem.name].value:'' }/>
                         {form[formItem.name]?<span className="error">{form[formItem.name].error}</span> :''}
                         </div>
                        </>
                    )
                default:
                    return <></>
            }
        })
    }
   
    </form>
     <button disabled={!(error && error.length<=0)} onClick={()=>onSubmit(form)}>Submit</button>
     </>
     )
}

export default Form;