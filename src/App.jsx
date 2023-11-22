import "./App.css";
import React, { useEffect } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { object, string } from "yup";
import { useState } from "react";
const SignupSchema = object().shape({
  firstname: string().required("firstname i daxil edin"),
  lastname: string().required("lastname i daxil edin"),
  email: string().email("@ isaresi mutleqdir").required("emaili daxil edin"),
  password: string().min(6, "min 6 karakter olmalidir").required("parolu daxil edin"),
});


function App() {
  const [data, setdata] = useState(localStorage.getItem('data') ? JSON.parse(localStorage.getItem('data')):[])
  useEffect(()=>{
    localStorage.setItem("data",JSON.stringify(data))
    
    },[data])
    function handlesubmit(value) {
      setdata(value)
    }
  return (
    <div className="form_container">
      <Formik 
        initialValues={{ firstname: "", lastname: "", email: "", password: "" }}
        validationSchema={SignupSchema}
        onSubmit={(value) => 
          handlesubmit(value)
        }
      >
   
        {({ isValid }) => (
          <div className="form_div">
     <h1 >Sign Up</h1>
          <Form className="form">
            <Field type="text" name="firstname" placeholder="First Name" className="input"/>
            <p> <ErrorMessage name="firstname" /></p>
            <Field type="text" name="lastname" placeholder="Last Name" className="input"/>
            <p><ErrorMessage name="lastname" /></p>
            <Field type="text" name="email" placeholder="Enter email" className="input"/>
           <p><ErrorMessage name="email" /></p> 
            <Field type="password" name="password" placeholder="Enter password" className="input"/>
            <p><ErrorMessage name="password" /></p>
            <button type="submit" disabled={!isValid} className="btn" >
              Sign up
            </button>
          </Form>
          </div>
        )}
      </Formik>
    </div>
  );
}

export default App;
