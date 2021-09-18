//@ts-nocheck
//@ts-nocheck
import React, { ReactElement } from 'react';
import * as emailjs from "emailjs-com";
import REcaptcha from "react-google-recaptcha";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { init } from "emailjs-com";
import { contactList } from "../typescript/contactList";
import { Button, Chip, Divider, IconButton, } from "@mui/material";

const initialState = {
  fullName: "",
  email: "",
  message: "",
  recaptcha: "",
}

const SuccessEmailSchema = Yup.object().shape({
  fullName: Yup.string()
    .min(5, "Too Short!").max(80, "Too Long!").required("Please enter your name."),

  email: Yup.string()
    .email("Invalid email").matches(/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/).required("Please enter an email."),

  message: Yup.string()
    .min(10, "Meassege a bit short, sorry.").max(1000, "1000 characters per send.").required("Please don't leave message empty."),

  recaptcha: Yup.string().required(),
});

function Contact(): ReactElement {
  const initialValues = initialState;

  const sendEmail = (captchaValue: any) => {
    emailjs.init(`${process.env.EMAIL_JS_USER}`);
    emailjs.send(
      `${process.env.EMAIL_JS_SERVICE}`,
      `${process.env.EMAIL_JS_TEMPLATE}`,
      captchaValue,
    ).then(({ status }) => {
      if (status === 200) {
        alert("Thank you for the submission. Pablo will be in contact with you");
      }

      else {
        alert("Messsage did not go through. Just use my Linked to reach out to me.");
      }
    }, (err) => {
      console.log(err);
      alert("Something went wrong.");
    });
  }

  return (
    <div id="/contacts" className="flex flex-col justify-center items-center mb-4 mt-4 snap-start">
      <div className="bg-white w-4/5 md:w-3/5 lg:w-9/12 flex flex-col lg:flex-row justify-center rounded-2xl p-4">
        <div className="flex flex-col w-full xl:w-1/2">
          <h1 className="text-center text-3xl font-bold">Let&apos;s Talk</h1>
          <Formik initialValues={initialValues} validationSchema={SuccessEmailSchema} onSubmit={(values, { resetForm }) => { sendEmail(values); resetForm(); }}>
            {({ values, errors, touched }) => (
              <Form className="flex flex-col w-full items-center space-y-6 mt-4">
                <div className="flex flex-col w-11/12">
                  <Field type="text" name="fullName" id="fullName" placeholder="Full Name" className="w-full outline-none pl-4 py-4 rounded-full text bg-gray-100" />
                  {errors.fullName && touched.fullName ? (
                    <div className="text-red-500">{errors.fullName}</div>) : null
                  }
                </div>

                <div className="flex flex-col w-11/12">
                  <Field type="email" name="email" id="email" placeholder="Email" className="w-full outline-none pl-4 py-4 rounded-full text bg-gray-100" />
                  {errors.email && touched.email ? (
                    <div className="text-red-500">{errors.email}</div>) : null
                  }
                </div>


                <div className="flex flex-col w-11/12">
                  <Field as="textarea" name="message" id="message" placeholder="Message" className="w-full bg-gray-100 pl-2 py-2 rounded-md outline-none" />
                  {errors.message && touched.message ? (
                    <div className="text-red-500">{errors.message}</div>) : null
                  }
                </div>

                <div className="">
                  <REcaptcha
                    sitekey={process.env.CAPTCHA_SITE_KEY}
                  />
                  {errors.recaptcha && touched.recaptcha ? (<div className="text-red-500">{errors.recaptcha}</div>) : null}
                </div>
                <button type="submit" className="w-1/2 font-bold rounded-full py-2 bg-gradient-to-r from-[rgb(126,232,250)] via-[rgb(127,244,181)] to-[rgb(128,255,114)]" onClick={(value: any) => { value = values; sendEmail(value) }}>Submit</button>

              </Form>
            )}
          </Formik>
        </div>


        <div className="mt-8 lg:hidden"><Divider><Chip className="bg-gradient-to-r from-[rgb(126,232,250)] via-[rgb(127,244,181)] to-[rgb(128,255,114)]" label="OR" /></Divider></div>

        <div><Divider className="hidden lg:flex " orientation="vertical"><Chip className="bg-gradient-to-r from-[rgb(126,232,250)] via-[rgb(127,244,181)] to-[rgb(128,255,114)]" label="OR" /></Divider></div>

        <div className="flex flex-col lg:hidden justify-center py-6">
          <h1 className="text-center text-3xl font-bold">Look Me Up</h1>
          <div className="flex justify-center mt-6 space-x-6">
            {contactList.Links?.map((contact, index) => (
              <div key={index}>
                <IconButton className="bg-gradient-to-r from-[rgb(126,232,250)] via-[rgb(127,244,181)] to-[rgb(128,255,114)]" target="_blank" rel="noopener noreferrer" href={contact.link} style={{ color: contact.iconColor, border: '3px solid black' }}>
                  {contact.icon}
                </IconButton>
              </div>
            ))}
          </div>
        </div>

        <div className="hidden lg:flex flex-col w-1/2">
          <h1 className="text-center text-3xl font-bold">Look Me Up</h1>
          <div className="flex flex-col h-full justify-center items-center space-y-4 mb-8">
            {contactList.Links?.map((contact, index) => (
              <div key={index}>
                <Button startIcon={contact.icon} size="large" className="text-xl text-center font-bold bg-gradient-to-r from-[rgb(126,232,250)] via-[rgb(127,244,181)] to-[rgb(128,255,114)]" target="_blank" rel="noopener noreferrer" href={contact.link} style={{ color: contact.iconColor, border: '2px solid black' }}>
                  {contact.name}
                </Button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
