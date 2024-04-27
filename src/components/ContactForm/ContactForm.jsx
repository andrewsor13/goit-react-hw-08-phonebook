import React from 'react';
import PropTypes from 'prop-types';
import { Formik, Form, Field } from 'formik';
import styles from './ContactForm.module.css';
import { useDispatch } from 'react-redux';

export default function ContactForm({ onSubmit }) {
  const initialValues = {
    name: '',
    number: '',
  };
  const dispatch = useDispatch();

  const validate = values => {
    const errors = {};
    if (!values.name) {
      errors.name = 'Name is required';
    }
    if (!values.number) {
      errors.number = 'Phone number is required';
    } else if (!/^\+?\d+$/.test(values.number)) {
      errors.number = 'Invalid phone number';
    }
    return errors;
  };

  const handleSubmit = (values, actions) => {
    const newContact = {
      name: values.name,
      number: values.number,
    };

    dispatch(onSubmit(newContact));
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validate={validate}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting, errors, touched }) => (
        <Form className={styles.form_container}>
          <div className={styles.fieldContainer}>
            <h3>Name</h3>
            <Field
              type="text"
              name="name"
              placeholder="Enter a name"
              className={styles.form_input}
            />
            {errors.name && touched.name && (
              <div className={styles.field__error}>{errors.name}</div>
            )}
          </div>
          <div className={styles.fieldContainer}>
            <h3>Number</h3>
            <Field
              type="text"
              name="number"
              placeholder="Enter a phone number"
              className={styles.form_input}
            />
            {errors.number && touched.number && (
              <div className={styles.field__error}>{errors.number}</div>
            )}
          </div>
          <button
            type="submit"
            disabled={isSubmitting}
            className={styles.button}
          >
            Add Contact
          </button>
        </Form>
      )}
    </Formik>
  );
}

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
