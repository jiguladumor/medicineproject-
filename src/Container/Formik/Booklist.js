import { Formik, Form, useFormik } from 'formik';
import React, { useEffect, useState } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import Inputbox from '../../Componets/Inputbox/Inputbox';
import * as yup from 'yup';



function Booklist(props) {
  // console.log(props.location.state.id);

  // const [update, setupdate] = useState(false);
  const [update,setupdate]= useState(false);

  const history = useHistory();

  const handleInsert = (values) => {
    let idata = {
      id: Math.floor(Math.random() * 1000),
      ...values
    }
    let localdata = JSON.parse(localStorage.getItem("booklist"));
    if (localdata === null) {
      localStorage.setItem("booklist", JSON.stringify([idata]));
    }
    else {
      localdata.push(idata);
      localStorage.setItem("booklist", JSON.stringify(localdata));
    }
    history.push("/listapoinment");
  };

      // CAN YOU HANDLEUPDATE DATA
      
      const handleupdatedata = (values) => { 
          let  localData=  JSON.parse(localStorage.getItem("booklist"));
          // console.log(localData);

          let udata = localData.map( (l) => {
             if (l.id === values.id) 
                  {
                    return values
                  }
                  else{
                     return l
                  } 
                 
          })  
           localStorage.setItem("booklist" ,JSON.stringify(udata)); 
           setupdate(false);
           formik.resetForm();
           history.push("/listapoinment");
              
          

          //  console.log(udata);
         
      }

  useEffect(() => { 
    let localData = JSON.parse(localStorage.getItem('booklist'));
    if ( localData !==  null && props.location.state) { 
        //  let localData = JSON.parse(localStorage.getItem('booklist'));
      let fdata = localData.filter((l) => l.id === props.location.state.id);
      formik.setValues(fdata[0]);
      setupdate(true);
    }
  }, [])
  let appoinment = {
    name: yup.string().required(" enter your name ? "),
    email: yup.string().required(' enter your email ? ').email('enter valid email'),
    phone: yup.string().required(" enter your phone ? "),
    date: yup.string().required("enter  date ? "),
    department: yup.string().required(" enter department ? "),
    message: yup.string().required("enter  message ? ")


  }

  let schema, initVal;
  schema = yup.object().shape(appoinment);
  initVal = {
    name: '',
    email: '',
    phone: '',
    date: '',
    department: '',
    message: ''

  }
  const formik = useFormik({
    initialValues: initVal,
    validationSchema: schema,
    onSubmit: (values) => {
        if(update) {
           handleupdatedata(values)
        }
        else {
           handleInsert(values)
        }


    }
  })
  const { handleSubmit, errors, handleChange, touched, handleBlur, values } = formik;



  return (
    <section id="appointment" className="appointment">
      <div className="container">
        <div className="section-title">
          <div className='row'>
            <div className='col-6'>
              <NavLink className="nav-link scrollto" to={"/Bookapointment"}>book-appoinment</NavLink>

            </div>
            <div className='col-6' >
              <NavLink id="navbar" className="navbar order-last order-lg-0 nav-link scrollto" to={"/listapoinment"}>list-apportment</NavLink>
            </div>


          </div>
          <h2>Make an Appointment</h2>
          <p>Aenean enim orci, suscipit vitae sodales ac, semper in ex. Nunc aliquam eget nibh eu euismod. Donec dapibus
            blandit quam volutpat sollicitudin. Fusce tincidunt sit amet ex in volutpat. Donec lacinia finibus tortor.
            Curabitur luctus eleifend odio. Phasellus placerat mi et suscipit pulvinar.</p>


        </div>

        <Formik values={formik}>
          <Form className="php-email-form" onSubmit={handleSubmit}>
            <div className="row">
              <div className="col-md-4 form-group">
                <Inputbox type="text"
                  name="name"
                  className="form-control"
                  id="name"
                  placeholder="Your Name"
                  error={Boolean(errors.name && touched.name)}
                  errorMessage={errors.name}
                   value={values.name}
                  onBlur={handleBlur}
                  onChange={handleChange}

                />


                <div className="validate" />
              </div>
              <div className="col-md-4 form-group mt-3 mt-md-0">
                <Inputbox type="email"
                  className="form-control"
                  name="email"
                  id="email"
                  placeholder="Your Email"
                  error={Boolean(errors.email && touched.email)}
                  errorMessage={errors.email}
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <div className="validate" />
              </div>
              <div className="col-md-4 form-group mt-3 mt-md-0">
                <Inputbox type="tel"
                  className="form-control"
                  name="phone"
                  id="phone"
                  placeholder="Your Phone"
                  error={Boolean(errors.phone && touched.phone)}
                  errorMessage={errors.phone}
                  onChange={handleChange}
                  value={values.phone}

                  onBlur={handleBlur}

                />
                <div className="validate" />
              </div>
            </div>
            <div className="row">
              <div className="col-md-4 form-group mt-3">
                <Inputbox type="datetime"
                  name="date"
                  className="form-control datepicker"
                  id="date"
                  placeholder="Appointment Date"
                  error={Boolean(errors.date && touched.date)}
                  errorMessage={errors.date}
                  onChange={handleChange}
                  value={values.date}
                  onBlur={handleBlur}
                />
                <div className="validate" />
              </div>
              <div className="col-md-4 form-group mt-3">
                <Inputbox type="select" name="department" id="department" className="form-select" error={Boolean(errors.department)}
                  errorMessage={errors.department} value={values.department} onChange={handleChange} onBlur={handleBlur}>
                  <option value>Select Department</option>
                  <option value="Department 1">Department 1</option>
                  <option value="Department 2">Department 2</option>
                  <option value="Department 3">Department 3</option>

                </Inputbox>

                <div className="validate" />
              </div>
            </div>
            <div className="form-group mt-3">
              <Inputbox type="textarea" className="form-control"
                name="message" rows={5}
                placeholder="Message (Optional)" defaultValue={""}
                error={Boolean(errors.message && touched.message)}
                errorMessage={errors.message} onChange={handleChange} value={values.message} onBlur={handleBlur} />
              <div className="validate" />
            </div>
            <div className="mb-3">
              <div className="loading">Loading</div>
              {/* <div className="error-message" /> */}
              <div className="sent-message">Your appointment request has been sent successfully. Thank you!</div>
            </div>
            {
              update ? 
               ( <div className='text-center'><button type='submit' className="text-center appointment-btn text-center" >update  an appoinment</button></div>) 

                :
                ( <div className='text-center'><button type='submit' className="text-center appointment-btn text-center" >maker an appoinment</button></div>)
            }

          </Form>
        </Formik>

      </div>
    </section>
  );
}

export default Booklist;