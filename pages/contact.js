import React, { useState, useRef } from "react";
import Image from "next/image";
import Confetti from "react-confetti";
import emailjs from "emailjs-com";
import check from "../public/images/check.svg";
import { useFormik } from "formik";
import * as Yup from "yup";

function contact() {
  const [confetti, setConfetti] = useState(false);

  const formik = useFormik({
    initialValues: {
      subject: "",
      email: "",
      message: "",
    },
    validationSchema: Yup.object({
      subject: Yup.string()
        .max(100, "Must be 15 characters or less")
        .required("Required"),
      email: Yup.string().email("Invalid email address").required("Required"),
      message: Yup.string()
        .max(500, "Must be 20 characters or less")
        .required("Required"),
    }),
    onSubmit: (values) => {
      setConfetti(true);
      emailjs
        .send(
          "service_t01c9ki",
          "template_i5cqkdb",
          values,
          "user_te48KNEUFxd287EXfyu9G"
        )
        .then((result) => {
          setTimeout(() => {
            setConfetti(false);
          }, 3000);
        });
    },
  });

  return (
    <div>
      <div className="text-white mt-32">
        <h1 className="text-7xl sm:text-10xl font-extrabold opacity-10">
          .Contact
        </h1>
      </div>
      <div className="text-white mb-4">
        <p className="text-lg font-medium">
          I'm currently looking for new opportunities. Don't be shy to say Hi!
        </p>
      </div>
      <form
        onSubmit={formik.handleSubmit}
        className="flex justify-center items-center flex-col"
      >
        <div className="grid grid-cols-1 gap-3 mt-10 md:grid-cols-2 max-w-2xl sm:w-screen sm:place-items-center sm:justify-center sm:items-center">
          <input
            name="subject"
            id="subject"
            type="text"
            placeholder="Subject"
            className={`bg-transparent border-b-2 ${
              formik.errors.subject && formik.touched.subject
                ? "border-red-500"
                : "border-white"
            } border-opacity-50 text-white focus:outline-none focus:border-opacity-100 transition-all duration-300`}
            autoComplete="off"
            {...formik.getFieldProps("subject")}
          />
          <input
            name="email"
            type="email"
            placeholder="Email"
            className={`bg-transparent border-b-2 ${
              formik.errors.email && formik.touched.email
                ? "border-red-500"
                : "border-white"
            } border-opacity-50 text-white focus:outline-none focus:border-opacity-100 transition-all duration-300`}
            autoComplete="off"
            {...formik.getFieldProps("email")}
          />
          <textarea
            name="message"
            placeholder="Your Message"
            className={`bg-transparent border-b-2 ${
              formik.errors.message && formik.touched.message
                ? "border-red-500"
                : "border-white"
            } border-opacity-50 text-white focus:outline-none focus:border-opacity-100 transition-all duration-300 col-span-2 sm:w-96 mt-3 h-20`}
            autoComplete="off"
            {...formik.getFieldProps("message")}
          />
        </div>
        <button
          className="bg-white text-black font-bold py-2 px-4 rounded-lg shadow-lg hover:bg-gray-100 hover:text-black focus:outline-none focus:shadow-outline transition-all duration-300 mt-5"
          type="submit"
        >
          Send
        </button>
      </form>
      {confetti && (
        <Confetti
          width={window.innerWidth - 200}
          height={window.innerHeight - 200}
          numberOfPieces={100}
          recycle={false}
        />
      )}
      {confetti && (
        <div className="flex w-full max-w-sm mx-auto overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800 animate-pulse absolute top-10 right-0 left-0">
          <div className="flex items-center justify-center w-12 bg-green-500">
            <Image src={check} width={30} height={30} alt="check" />
          </div>
          <div className="px-4 py-2 -mx-3">
            <div className="mx-3">
              <span className="font-semibold text-green-500 dark:text-green-400">
                Success
              </span>
              <p className="text-sm text-gray-600 dark:text-gray-200">
                Email has been sent successfully.
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default contact;
