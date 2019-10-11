import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { Form, Field, withFormik } from 'formik';
import * as Yup from 'yup';

const AddSmurf = ({errors, touched, status, value}) => {
    const [smurfs, setSmurfs] = useState([]);

    useEffect(() => {
        if(status) {
            setSmurfs([...smurfs, status]);
        }
    }, [status]);

    return (
        <div className="smurf-form">
            <h1>Add New Smurf</h1>
            <Form>
                <Field type="text" name="name" placeholder="Smurf's New Name" />
                {touched.name && errors.name && <p className="error">{errors.name}</p>}

                <Field type="text" name="age" placeholder="Smurf's New Age" />
                {touched.age && errors.age && <p className="error">{errors.age}</p>}

                <Field type="text" name="height" placeholder="Smurf's New Height" />
                {touched.height && errors.height && <p className="error">{errors.height}</p>}

                <button>Add New Smurf</button>

            </Form>

            {smurfs.map(smurf => (
                <ul key={smurf.id}>
                    <li>Name: {smurf.name}</li>
                    <li>Age: {smurf.age}</li>
                    <li>Height: {smurf.height}</li>
                </ul>
            ))}
        </div>
    );
};

const FormikAddSmurf = withFormik({
    mapPropsToValues({name, age, height}) {
        return {
            name: name || "",
            age: age || "",
            height: height || ""
        };
    },
    validationSchema: Yup.object().shape({
        name: Yup.string().required("Please input name"),
        age: Yup.string().required("Please input age"),
        height: Yup.string().required("Please input height")
    }),
    handleSubmit(values, {setStatus}) {
        axios.post('http://localhost:3333/smurfs', values)
        .then(res => {
            setStatus(res.data);
        })
        .catch(err => console.log(err.res));
    }
})(AddSmurf);

export default FormikAddSmurf;
