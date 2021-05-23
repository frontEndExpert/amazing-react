import React, { useState } from 'react';
import {useForm} from 'react-hook-form';
import {useParams, Route, Switch} from 'react-router-dom';
import ThankYou from '../pages/thankyou';
            

export const SolForm = () => {

     //  useForm hook {
  const { register, formState: { errors, isDirty, isValid }} = useForm({
    mode: 'onBlur',
    reValidateMode: 'onSubmit',
    defaultValues: {}
  });

  const params = useParams();
/* const handleSubmit = () => {
    if(isValid) { polForm.submit(); console.log("submit") ;}
    else {console.log("not Valid not submit", isValid)}

} */

/*     const onSubmit = async (data) => {
        const requestOptions = {
            method: 'POST',
            headers: { 
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': 'http://localhost:3000', 
                'Access-Control-Allow-Credentials': 'true' },
            body: JSON.stringify(data)
        };
    
        const response = await fetch(['https://www.globalsuccesssolution.com/index.php/lead/capture'], requestOptions);
        const jsonData = await response.json();
    
        console.log('submitted',jsonData);
        alert('submitted') ;
    } */



  //const handleSubmit = data => { console.log(data); alert('submit') }

/*
    function validateName(name) {  
         name = name.replace(/\s/g, '');
                    if (name==='') alert("Please fill a valid name");
        return (name==='')?0:1;
    }    
    function validateEmail(email) { //Validates the email address
         var emailRegex = '/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/';
         return emailRegex.test(email);
    }

    function validatePhone(phone) { //Validates the phone number
        var phoneRegex = '/^(\+91-|\+91|0)?\d{10}$/'; // Change this regex based on requirement
        return phoneRegex.test(phone);
    }

    function doValidate() {
        if (!validateName(document.polForm.extFirstName.value)){
            alert("Invalid Name");
            return false;
        }else if (!validateEmail(document.polForm.extEmail.value)){
        alert("Invalid Email");
        return false;
    }
}

*/
//action="https://www.globalsuccesssolution.com/index.php/lead/capture"
//onsubmit={ doValidate}
//() => trigger('extPhone')
//re.test(String(email).toLowerCase());
//onBlur={() => trigger('extFirstName')}
//onClick={() => {handleSubmit}

console.log(' form params ', params.stage);
return (

<div className="pol-form">
<h2>Free Business Orientation call</h2> 
<Switch>
<Route path="/thankyou" exact>
    <div className="pages thankyou">
    <h2><strong>Thank You</strong></h2>
    <p>We will contact you soon to answer your questions and to see if this business is a good match for you.</p>
    <p>This business opporates successfully for more than 10 years. This is why we know that our new managers can reach an exuctive income.</p>
    <p>Even if you will choose to not persue the business you will still get access to our <b>Mind Power Bootcamp for FREE.</b></p>
    <p>You can talk to our AI assistent on Facebook: <a href='http://m.me/amazinglife.solutions'>CLICK HERE</a></p>
    </div>
</Route>
<Route path="/" exact>
<form  method="post" id="lead-form" name="polForm" 
action='https://www.globalsuccesssolution.com/index.php/lead/capture' > 
    <table className="data-form">
    <tbody>
        <tr> 
            <td className="inputs">
            <div className="name">
                <label htmlFor='extFirstName'>First Name*</label>
                <input defaultValue='' {...register("extFirstName", {
                maxLength: {value: 12, message: "Please no more than 12 characther length."},  
                required: {value: true, message:"This is Required" }, 
                minLength: {value: 3, message: "Please use minimum 3 charcthers"}
              })}
                  type='text'
                  id='extFirstName'
                  
                />
                {errors.extFirstName && <p className="error-msg">{errors.extFirstName.message}</p>}
            </div>

            <div className="phone">
                <label htmlFor='extPhone'>Telephone*</label>
                <input defaultValue='' {...register("extPhone", {
                    pattern: {value: /^[\+]?[(]?[0-9]{2,3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,7}$/im ,message: "please enter a valid phone number with country code: +(XXX)-XXXXXXX" },
                required: {value: true, message:"This is Required" }
              })}
                  type='text'
                  id='extPhone'
                />
                {errors.extPhone && <p className="error-msg">{errors.extPhone.message}</p>}
            </div>

            <div className="email">
                <label htmlFor='extEmail'>Email*</label>
                <input defaultValue='' {...register("extEmail", {
    pattern: {value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/im ,message: "please enter a valid email, so we can send you the free course info and more." },
                required: {value: true, message:"This is Required" }
              })}
                  type='text'
                  id='extEmail'
                />
                {errors.extEmail && <p className="error-msg">{errors.extEmail.message}</p>}
            </div>

            <div className="extTimeZone">
                <label htmlFor='extTimeZone'>Time Zone*</label>
                <select  {...register("extTimeZone", {
                        required: {value: true, message:"This is Required" }
              })}
              ><option value="">Select timezone</option>                             
                    <optgroup label="Australia"> 
                        <option value="4">Queensland (Brisbane)</option>                                 
                        <option value="5">Queensland (others)</option>                                 
                        <option value="6">New South Wales (Sydney)</option>                                 
                        <option value="7">New South Wales (others)</option>                                 
                        <option value="8">Victoria (Melbourne)</option>                                 
                        <option value="9">Victoria (others)</option>                                 
                        <option value="10">South Australia (Adelaide)</option>                                 
                        <option value="11">South Australia (others)</option>                                 
                        <option value="12">Northern Territory (Darwin)</option>                                 
                        <option value="13">Northern Territory (others)</option>                                 
                        <option value="14">Western Australia (Perth)</option>                                 
                        <option value="15">Western Australia (others)</option>                                 
                        <option value="16">Tasmania (Hobart)</option>                                 
                        <option value="17">Tasmania (others)</option>                                 
                        <option value="31">ACT (Canberra)</option>                                 
                        <option value="32">ACT (others)</option>                                 
                    </optgroup>                             
                    <optgroup label="New Zealand"> 
                        <option value="18">North Island (Auckland)</option>                                 
                        <option value="19">North Island (others)</option>                                 
                        <option value="20">South Island (Christchurch)</option>                                 
                        <option value="21">South Island (others)</option>                                 
                    </optgroup>                             
                    <optgroup label="US/Canada"> 
                        <option value="22">Eastern Time (New York, Miami, Detroit)</option>                                 
                        <option value="23">Central Time (Chicago, Houston, Dallas)</option>                                 
                        <option value="24">Mountain Time (Denver, SLC)</option>                                 
                        <option value="25">Pacific Time (Los Angeles, San Francisco, Seattle)</option>                                 
                        <option value="26">Alaska Time (Anchorage)</option>                                 
                        <option value="27">Hawaii Time (Honolulu)</option>                                 
                        <option value="33">Arizona (Phoenix)</option>                                 
                        <option value="35">Newfoundland Time (St. John)</option>                                 
                        <option value="61">Atlantic Time (Halifax)</option>                                 
                    </optgroup>                             
                    <optgroup label="Europe"> 
                        <option value="28">Western European Time (London, Lisbon)</option>                                 
                        <option value="29">Central European Time (Paris, Rome)</option>                                 
                        <option value="30">Eastern European Time (Helsinki, Minsk)</option>                                 
                        <option value="65">UTC</option>                                 
                    </optgroup>                             
                    <optgroup label="General"> 
                        <option value="36">GMT+0</option>                                 
                        <option value="37">GMT+1</option>                                 
                        <option value="38">GMT+2</option>                                 
                        <option value="39">GMT+3</option>                                 
                        <option value="40">GMT+4</option>                                 
                        <option value="41">GMT+5</option>                                 
                        <option value="42">GMT+6</option>                                 
                        <option value="43">GMT+7</option>                                 
                        <option value="44">GMT+8</option>                                 
                        <option value="45">GMT+9</option>                                 
                        <option value="46">GMT+10</option>                                 
                        <option value="47">GMT+11</option>                                 
                        <option value="48">GMT+12</option>                                 
                        <option value="49">GMT-1</option>                                 
                        <option value="50">GMT-2</option>                                 
                        <option value="51">GMT-3</option>                                 
                        <option value="52">GMT-4</option>                                 
                        <option value="53">GMT-5</option>                                 
                        <option value="54">GMT-6</option>                                 
                        <option value="55">GMT-7</option>                                 
                        <option value="56">GMT-8</option>                                 
                        <option value="57">GMT-9</option>                                 
                        <option value="58">GMT-10</option>                                 
                        <option value="59">GMT-11</option>                                 
                        <option value="60">GMT-12</option>                                 
                    </optgroup>                             
                    <optgroup label="India"> 
                        <option value="34">Indian Standard Time</option>                                 
                    </optgroup>                             
                    <optgroup label="Africa"> 
                        <option value="62">Johannesburg</option>                                 
                        <option value="63">Cairo</option>                                 
                        <option value="64">Tripoli</option>                                 
                    </optgroup>                             
                </select>
             </div>   
            </td>                     
        </tr>                 
        <tr> 
            <td> 
                
            <div className="extOptin">
                <span className="optinTxt">
                <input type="checkbox" className='extOptin' id="extOptin" {...register("extOptin", {
                        required: {value: true, message:"This is Required" }
              })} />
                I agree to receive free info by email or phone from the AmazingLife team</span>
            </div>
            </td>
        </tr>                 
        <tr> 
            <td className="submit-div">
            <button type='submit' className="button" disabled={!isValid }
         >Submit</button>
            </td>                     
        </tr>                 
        <tr> 
            <td align="center" className="remark2">By providing my contact information, I am requesting information about this opportunity and the award winning products and services.</td> 
        </tr>   
        </tbody>              
    </table>             
    <input type="hidden" name="styleTitleText" value="AmazingLife Solutions"/> 
    <input type="hidden" name="styleTitleColor" value="#000000"/> 
    <input type="hidden" name="styleBorder" value="border-style:solid;border-width:0;  border-color:#021480;"/> 
    <input type="hidden" name="styleBgColor" value="#ffffff"/> 
    <input type="hidden" name="redirect" value="http://www.amazinglife.solutions/thankyou/"/> 
    <input type="hidden" name="respond" value="http://www.amazinglife.solutions"/> 
    <input type="hidden" name="category_id" value="2"/> 
    <input type="hidden" name="extLink" value="28968"/> 
    <input type="hidden" name="styleAlign" value="text-align:left;"/> 
    <input type="hidden" name="styleWidth" value=""/> 
</form>
</Route>
</Switch>
</div>
);
}


export default SolForm;

//