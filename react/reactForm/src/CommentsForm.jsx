import { useState } from "react"
import { useFormik } from 'formik';

const validate = values => {
   const errors = {};
   if (!values.username) {
     errors.username = 'Required';
   } else if (values.username.length > 15) {
     errors.username = 'Must be 15 characters or less';
   }
   if (!values.remarks) {
     errors.remarks = 'Required';
   } 
   
 
   return errors;
 };

export default function CommentsForm({addNewComment}){
    // let [formData, setFormData] = useState({
    //     username : "",
    //     remarks : "",
    //     rating : 5,
    // });

    const formik = useFormik({
     initialValues: {
       username: '',
       remarks: '',
       reting: 5,
     },
     validate,
     onSubmit: values => {
       alert(JSON.stringify(values, null, 2));
     },
   });

    // let handleInputChange = (event ) => {
    //     setFormData((currData) => {
    //         return {...currData, [event.target.name] : event.target.value};
    //     });
    // };

    // let handleSubmit = (event) => {
    //     console.log(formData);
    //     event.preventDefault();
    //     addNewComment(formData);
    //     setFormData({
    //         username : "",
    //         remarks : "",
    //         rating : 5,
    //     });
        
    // }
    return ( 
        <div>
            <h4>Give a Comment!</h4>
            <form action="" onSubmit={formik.handleSubmit}>
                <label htmlFor="username">Username : </label>
                <input type="text" name="username" id="username" placeholder="username" onChange={formik.handleChange}
         value={formik.values.username} />
         {formik.errors.username ? <div>{formik.errors.username}</div> : null}
                <br /><br /><br />

                <label htmlFor="remarks">Remarks : </label>
                <textarea name="remarks" id="remarks" placeholder="add few remarks" onChange={formik.handleChange}
         value={formik.values.remarks} ></textarea>
         {formik.errors.remarks ? <div>{formik.errors.remarks}</div> : null}
                <br /><br /><br />

                <label htmlFor="rating">Rating : </label>
                <input type="number" placeholder="rating"
                id="rating"  name="rating"    min={1} max={5} onChange={formik.handleChange}
         value={formik.values.rating}/>
                <br /><br /><br />
                <button type="submit">Add Comment</button>
            </form>
        </div>
    )
}