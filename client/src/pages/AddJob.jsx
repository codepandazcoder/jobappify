import React, { useState } from "react";
import { Formik, Form, Field, useFormik } from 'formik';


import * as yup from 'yup';

const AddJob = () => {
    const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

    const validSchema = yup.object({
        type: yup.string().required("Please select a type"),
        title: yup.string().required("Please enter a Job title"),
        description: yup.string().required("Please enter a description"),
        salary: yup.string().required("Please enter your expected salary"),
        location: yup.string().required("please enter your prefered location"),
        company: yup.string().required("please enter your prefered company name"),
        company_description: yup.string().required("please enter your prefered company description"),
        contact_email: yup.string().email("enter a valid email").required("please enter your email"),
        contact_phone: yup.string().matches(phoneRegExp, 'Phone number is not valid').required("please enter your contact number"),
    })

    const initialValues = {
        type: "",
        title: "",
        description: "",
        salary: "",
        location: "",
        company: "",
        company_description: "",
        contact_email: "",
        contact_phone: "",
      };
    
      const formik = useFormik({
        initialValues: initialValues,
        validationSchema: validSchema,
        onSubmit: values => {
           console.log(JSON.stringify(values, null, 2));
           const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(values)
            };
            fetch('/app/v1/addJob', requestOptions)
                .then(response => response.json())
                .then(data => console.log(data));

            },
      });
    return (
        <>
        <section className="bg-indigo-50">
        <div className="container m-auto max-w-2xl py-24">
            <div
            className="bg-white px-6 py-8 mb-4 shadow-md rounded-md border m-4 md:m-0"
            >
            <form onSubmit={formik.handleSubmit}>
                <h2 className="text-3xl text-center font-semibold mb-6">Add Job</h2>

                <div className="mb-4">
                <label htmlFor="type" className="block text-gray-700 font-bold mb-2">Job Type</label>
                <select
                    id="type"
                    name="type"
                    className="border rounded w-full py-2 px-3"
                    onChange={formik.handleChange}
                    value={formik.values.type}
                    
                >
                    <option value="">--Choose--</option>
                    <option value="Full-Time">Full-Time</option>
                    <option value="Part-Time">Part-Time</option>
                    <option value="Remote">Remote</option>
                    <option value="Internship">Internship</option>
                </select>
                {formik.touched.type && formik.errors.type ? (
                    <div className="text-rose-600">{formik.errors.type}</div>
                ) : null}
                </div>

                <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2"
                    >Job Listing Name</label>
                <input
                    type="text"
                    id="title"
                    name="title"
                    className="border rounded w-full py-2 px-3 mb-2"
                    placeholder="eg. Beautiful Apartment In Miami"
                    onChange={formik.handleChange}
                    value={formik.values.title}
                    
                />
                 {formik.touched.title && formik.errors.title ? (
                    <div className="text-rose-600">{formik.errors.title}</div>
                ) : null}
                </div>
                <div className="mb-4">
                <label
                    htmlFor="description"
                    className="block text-gray-700 font-bold mb-2"
                    >Description</label>
                <textarea
                    id="description"
                    name="description"
                    className="border rounded w-full py-2 px-3"
                    rows="4"
                    placeholder="Add any job duties, expectations, requirements, etc"
                    onChange={formik.handleChange}
                    value={formik.values.description}
                ></textarea>
                 {formik.touched.description && formik.errors.description ? (
                    <div className="text-rose-600">{formik.errors.description}</div>
                ) : null}
                </div>

                <div className="mb-4">
                <label htmlFor="type" className="block text-gray-700 font-bold mb-2"
                    >Salary</label>
                <select
                    id="salary"
                    name="salary"
                    className="border rounded w-full py-2 px-3"
                    onChange={formik.handleChange}
                    value={formik.values.salary}
                    
                >
                    <option value="">--Choose--</option>
                    <option value="Under $50K">Under $50K</option>
                    <option value="$50K - 60K">$50K - $60K</option>
                    <option value="$60K - 70K">$60K - $70K</option>
                    <option value="$70K - 80K">$70K - $80K</option>
                    <option value="$80K - 90K">$80K - $90K</option>
                    <option value="$90K - 100K">$90K - $100K</option>
                    <option value="$100K - 125K">$100K - $125K</option>
                    <option value="$125K - 150K">$125K - $150K</option>
                    <option value="$150K - 175K">$150K - $175K</option>
                    <option value="$175K - 200K">$175K - $200K</option>
                    <option value="Over $200K">Over $200K</option>
                </select>
                {formik.touched.salary && formik.errors.salary ? (
                    <div className="text-rose-600">{formik.errors.salary}</div>
                ) : null}
                </div>

                <div className='mb-4'>
                <label className='block text-gray-700 font-bold mb-2'>
                    Location
                </label>
                <input
                    type='text'
                    id='location'
                    name='location'
                    className='border rounded w-full py-2 px-3 mb-2'
                    placeholder='Company Location'
                    onChange={formik.handleChange}
                    value={formik.values.location}
                               
                />
                {formik.touched.location && formik.errors.location ? (
                    <div className="text-rose-600">{formik.errors.location}</div>
                ) : null}
                </div>

                <h3 className="text-2xl mb-5">Company Info</h3>

                <div className="mb-4">
                <label htmlFor="company" className="block text-gray-700 font-bold mb-2"
                    >Company Name</label>
                <input
                    type="text"
                    id="company"
                    name="company"
                    className="border rounded w-full py-2 px-3"
                    onChange={formik.handleChange}
                    value={formik.values.company}
                    placeholder="Company Name"
                />
                 {formik.touched.company && formik.errors.company ? (
                    <div className="text-rose-600">{formik.errors.company}</div>
                ) : null}
                </div>

                <div className="mb-4">
                <label
                    htmlFor="company_description"
                    className="block text-gray-700 font-bold mb-2"
                    >Company Description</label>
                <textarea
                    id="company_description"
                    name="company_description"
                    className="border rounded w-full py-2 px-3"
                    rows="4"
                    onChange={formik.handleChange}
                    value={formik.values.company_description}
                    placeholder="What does your company do?"
                ></textarea>
                 {formik.touched.company_description && formik.errors.company_description ? (
                    <div className="text-rose-600">{formik.errors.company_description}</div>
                ) : null}
                </div>

                <div className="mb-4">
                <label
                    htmlFor="contact_email"
                    className="block text-gray-700 font-bold mb-2"
                    >Contact Email</label>
                <input
                    type="text"
                    id="contact_email"
                    name="contact_email"
                    className="border rounded w-full py-2 px-3"
                    placeholder="Email address for applicants"
                    onChange={formik.handleChange}
                    value={formik.values.contact_email}
                    
                />
                 {formik.touched.contact_email && formik.errors.contact_email ? (
                    <div className="text-rose-600">{formik.errors.contact_email}</div>
                ) : null}
                </div>
                <div className="mb-4">
                <label
                    htmlFor="contact_phone"
                    className="block text-gray-700 font-bold mb-2"
                    >Contact Phone</label>
                <input
                    type="tel"
                    id="contact_phone"
                    name="contact_phone"
                    className="border rounded w-full py-2 px-3"
                    onChange={formik.handleChange}
                    value={formik.values.contact_phone}
                    placeholder="Optional phone for applicants"
                    onInput={(event) => {
                        if (!/[0-9]/.test(event.key)) {
                          event.preventDefault();
                        }
                      }}
                />
                 {formik.touched.contact_phone && formik.errors.contact_phone ? (
                    <div className="text-rose-600">{formik.errors.contact_phone}</div>
                ) : null}
                </div>

                <div>
                <button
                    className="bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline"
                    type="submit"
                >
                    Add Job
                </button>
                </div>
            </form>
            </div>
        </div>
        </section>
        </>
    );
}

export default AddJob;