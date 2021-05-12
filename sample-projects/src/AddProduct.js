import React,{useState, useEffect} from 'react'
import MaterialTable from 'material-table';
import Header from './Header';

function AddProduct(){

    const empList = [
        {id:1, name:"junaid", email:'junaid@gmail.com', dob:'12/03/1999' },
        {id:2, name:"anil", email:'anil@gmail.com', dob:'12/03/1999' },
        {id:3, name:"jayanth", email:'jayanth@gmail.com', dob:'12/03/1999' },
        {id:4, name:"venkat", email:'venkat@gmail.com', dob:'12/03/1999' },
      ]
      
      useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/users") 
        .then(resp=>resp.json())
        .then(resp=>{
        setData(resp)})
      }, [])
      
    
      const [data, setData] = useState(empList)
      const columns = [
        {title:"ID", field:"id"},
        {title:"Username", field:"username"},
        {title:"Name", field:"name"},
        {title:"Email", field:"email"},
        {title:"Phone", field:"phone"},
        {title:"Web-Link", field:"website"},
      ]
    return(
        <div>
            <Header />
            <h1>Add Product</h1>
            <MaterialTable
            title="Employee Data"
            data={data}
            columns={columns}
      />
        </div>
    )
}
export default AddProduct;