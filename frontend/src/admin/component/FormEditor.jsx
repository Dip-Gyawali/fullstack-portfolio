import React, { useState } from "react";

export default function FormEditor() {
  const [editorData, setEditorData] = useState("<p>Enter your text here...</p>");

  const handleChange = (event) => {
    setEditorData(event.target.innerHTML);
  };

  return (
    <div className="page-content">
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <div className="page-title-box d-sm-flex align-items-center justify-content-between">
              <h4 className="mb-sm-0 font-size-18">Form Editor</h4>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <div className="card">
              <div className="card-header">
                <h4 className="card-title">Custom Text Editor</h4>
                <p className="card-title-desc">Example of a simple custom text editor</p>
              </div>
              <div className="card-body">
                <div
                  contentEditable
                  dangerouslySetInnerHTML={{ __html: editorData }}
                  onInput={handleChange}
                  style={{
                    border: "1px solid #ccc",
                    minHeight: "200px",
                    padding: "10px",
                    borderRadius: "5px",
                    fontFamily: "Arial, sans-serif",
                    fontSize: "14px",
                  }}
                ></div>
                <div style={{ marginTop: "10px" }}>
                  <strong>Editor Data:</strong>
                  <pre>{editorData}</pre>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
