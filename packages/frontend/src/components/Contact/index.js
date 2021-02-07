import React, { useState } from "react";
import Form from "components/Form";
import LoadingOverlay from "components/LoadingOverlay";
import "./style.css";

// TODO: Move API calls to the helper library
import config from "../../../config/config";

const Contact = ({ data }) => {
  const [apiResponse, setApiResponse] = useState({ success: null, error: null });
  const [loading, setLoading] = useState(false);
  
  const submitData = async (data) => {
    setLoading(true);
    let form = {};
    for (let item in data) {
      form[item.toLowerCase()] = data[item].value;
    }
    try {
      const response = await fetch(`${config.apiBaseUrl}/api/v1/contact`, {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(form),
      });
      setApiResponse({ success: "success" });
    } catch {
      setApiResponse({ error: "Oops!! Something went wrong" });
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {loading ? <LoadingOverlay></LoadingOverlay> : ""}
      <section id="contact">
        <div className="contact-description">
          <i className="fa fa-envelope"></i>
          <h3>Want to collaborate </h3>
          <h3>OR </h3>
          <h3>Work with me ?</h3>
        </div>
        <div>
          <Form data={data.formItems} onSubmit={submitData} apiResponse={apiResponse} />
        </div>
      </section>
    </>
  );
};

export default Contact;
