import React, { useEffect, useState } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import { ButtonToggle } from 'reactstrap'; 
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


function Listitem(props) {

  const [data, setdata] = useState([]); 

   
   let history =useHistory();
    

  const loadData = () => {
    let localData = JSON.parse(localStorage.getItem("booklist")); 
    // if(localData !== null) {
      setdata(localData);
    // }

   
  }

   const  handledelet = (id) => {
          
        let localData = JSON.parse( localStorage.getItem('booklist')) ; 
         let ddata= localData.filter( (l,i) =>l.id!==id)
         localStorage.setItem("booklist", JSON.stringify(ddata));
         loadData()

        // console.log(localData,idata);
    
   } 

   const handleEdit = (id) => {
             history.push('/Bookapointment',{"id" :id});
   }

  useEffect(() => {

    loadData();

  }, [])

  return(

    <section id="appointment" className="appointment">
      <div className="container">
        <div className="section-title">
          <div className='row'>
            <div className='col-6 text-center'>
              <NavLink className="nav-link scrollto" to={"/Bookapointment"}>book-appoinment</NavLink>

            </div>
            <div className='col-6'>
              <NavLink className="navbar order-last order-lg-0 nav-link scrollto" to={"/listapoinment"}>list-apportment</NavLink>
            </div>


          </div>
          <h2>Make an  list-appoinmnent</h2>
          <p>Aenean enim orci, suscipit vitae sodales ac, semper in ex. Nunc aliquam eget nibh eu euismod. Donec dapibus
            blandit quam volutpat sollicitudin. Fusce tincidunt sit amet ex in volutpat. Donec lacinia finibus tortor.
            Curabitur luctus eleifend odio. Phasellus placerat mi et suscipit pulvinar.</p>
        </div>

      </div>

       
       
   
      

<Card sx={{ maxWidth: 345  }}>
     
     
      <CardContent>
       
        
      </CardContent>
      {
        data.map((d, i) => {
          return (
            <>
            
                  
               <Typography gutterBottom variant="h5" component="div">
               { <h4>{d.name}</h4> } 
              </Typography>
                

               {/* <button onClick={() => handledelet (d.id)}> DELET</button>
               <button > EDIT</button>  */}
               <Button   onClick={() => handledelet (d.id)}  variant="contained" color="primary">
                        DELET
              </Button>

              <Button  onClick={() => handleEdit (d.id)}   variant="contained" color="warning">
                        EDIT
              </Button>

              </>
               
          )
        })
      }
      <CardActions> 

                 
    
      </CardActions>
    </Card>
    </section> 
    
  );
}

export default Listitem;