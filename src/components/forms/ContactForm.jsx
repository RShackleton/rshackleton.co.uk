import { useFormik } from 'formik';
import React, { useRef } from 'react';
import * as Yup from 'yup';

import {
  Button,
  ErrorMessage,
  Field,
  Label,
  TextArea,
  TextBox,
} from './ContactForm.styles';

const ContactForm = () => {
  const formRef = useRef();

  const Schema = Yup.object().shape({
    name: Yup.string().required('Please enter your name.'),
    email: Yup.string()
      .email('Please enter a valid email address.')
      .required('Please enter your email address'),
    message: Yup.string().required('Please enter your message.'),
  });

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      message: '',
    },
    validationSchema: Schema,
    onSubmit: values => {
      fetch(formRef.current.action, {
        method: 'POST',
        body: new URLSearchParams(values),
      });
    },
  });

  return (
    <form
      ref={formRef}
      name="contact"
      method="post"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      onSubmit={formik.handleSubmit}
    >
      <input type="hidden" name="form-name" value="contact" />
      <Field>
        <Label htmlFor="name">First Name</Label>
        <TextBox
          id="name"
          name="name"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.name}
        />
        <ErrorMessage>{formik.errors.name}</ErrorMessage>
      </Field>
      <Field>
        <Label htmlFor="email">Email Address</Label>
        <TextBox
          id="email"
          name="email"
          type="email"
          onChange={formik.handleChange}
          value={formik.values.email}
        />
        <ErrorMessage>{formik.errors.email}</ErrorMessage>
      </Field>
      <Field>
        <Label htmlFor="message">Message</Label>
        <TextArea
          id="message"
          name="message"
          rows={4}
          type="message"
          onChange={formik.handleChange}
          value={formik.values.message}
        ></TextArea>
        <ErrorMessage>{formik.errors.message}</ErrorMessage>
      </Field>
      <Button type="submit">Submit</Button>
    </form>
  );
};

ContactForm.propTypes = {};

export default ContactForm;
