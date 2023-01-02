import React , {useState, useRef, useEffect} from 'react';
import DropdownList from "react-widgets/DropdownList";
import { useGetAllProductsQuery } from '../context/product/productApiSlice';
import { useAddAnnouncementMutation } from '../context/announcement/announcementApiSlice'
import { showSuccessToastMessage, showErrorToastMessage } from '../components/ToastNotifications';
import { ToastContainer } from 'react-toastify';
import Loading from './Loading';

import "react-widgets/styles.css";

const NewAnnouncement= () =>{

    const headingRef = useRef();
    const [heading, setHeading] = useState('');
    const [description, setDescription] = useState('');
    const [name, setName] = useState('');

    let content
    //const [addProduct] = useAddProductMutation();
    const [addAnnouncement] = useAddAnnouncementMutation();

    const {
        data: products,
        isLoading,
        isSuccess,
        isError,
        error 
      } = useGetAllProductsQuery(undefined, {refetchOnMountOrArgChange: true});

    useEffect(() => {
        //headingRef.current.focus();   
      }, [])

    

    const handleSubmit = async (e) => {
        e.preventDefault(); 

        try{
          const response = await addAnnouncement({heading, description, name})
          console.log(response)
          if(response?.data[0]?.error){
            const message = response?.data[0]?.error
            showErrorToastMessage(response?.data?.error)
          }
          else if(response?.data[0]?.created){
            const message = response?.data[0]?.created
            showSuccessToastMessage(response?.data[0]?.created)
          } 

        }catch(error){
          showErrorToastMessage(error)
        }
    }


    if(isLoading){
        content = Loading
      }else if(isSuccess){
        const names = products.products.map(object => object.name);
        content = 
        <div className="text-center add-product-body">
        <main className="form-signin w-100" style={{marginBottom: '10rem', marginTop: '8rem', marginLeft: 'auto', marginRight: 'auto'}}>
            <form onSubmit={handleSubmit} style={{width:"23rem"}}>

                <h3 className="fw-normal mb-3 pb-3" style={{letterSpacing:"1px"}}>New Announcement</h3>

                <div className="form-outline mb-4">
                <input
                    type="text" 
                    id="headingID" 
                    className="form-control form-control-lg" 
                    onChange={(e) => setHeading(e.target.value)}
                    value={heading}
                    required
                />
                <label className="form-label mt-1" htmlFor="headingID">Heading</label>
                </div>

                <div className="form-outline mb-4">
                <input 
                    type="text" 
                    id="descriptionID" 
                    className="form-control form-control-lg"
                    onChange={(e) => setDescription(e.target.value)} 
                    value={description}
                    required
                />
                <label className="form-label mt-1" htmlFor="descriptionID">Description</label>
                </div>

                <div className="text-center form-outline mb-4">
                <DropdownList
                    defaultValue={names[0]}
                    data={names}
                    onChange={value => setName(value)}
                    required
                    />
                </div>
                
                <div className="pt-1 mb-4">
                <button className="btn btn-primary btn-lg btn-block" type="submit">Add</button>
                </div>

            </form>
        </main>
        <ToastContainer/>
    </div>
          
      }else if(isError){
        content = <p>Error</p>
      }

    return content
}
export default NewAnnouncement;