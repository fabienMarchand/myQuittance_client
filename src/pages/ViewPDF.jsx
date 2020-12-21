import React, { Component, useState } from "react";
import apiHandler from "../api/apiHandler";
//import PDFViewer from 'pdf-viewer-reactjs'
import { Document, Page } from "react-pdf";

class ViewPDF extends Component {
  state = {
    filePdf: [],
    numPages: null,
    pageNumber: 1,
  };

  componentDidMount = () => {
    apiHandler
      .generatePdf("/pdf", this.props.location.receipt._id)
      .then((res) => {
        apiHandler
          .getPdf("/pdf/getPDF", this.props.location.receipt._id)
          .then((apiRes) => {
            const fileURL = apiRes.request.responseURL;
            //  const pdfBlob = new Blob([apiRes.data], { type: "application/pdf" });
            //  saveAs(pdfBlob, 'pouet.pdf')
            // const fileURL = URL.createObjectURL(apiRes.data);
            // console.log("pouet pouet : ", fileURL)
                window.open(fileURL);
            //   console.log(pdfBlob);
            // const pdfBlob = new Blob([apiRes.data], { type: "application/pdf" });

            this.setState({
              filePdf: fileURL,
            });
            // this.props.history.push("/receiptsList");
          });
          this.props.history.push("/receiptsList");
      });
  };
  onDocumentLoad = ({ numPages }) => {
    this.setState({
      numPages,
    });
  };

  render() {
    const { filePdf, numPages, pageNumber } = this.state;
    console.log(filePdf);
    return (
      <div>
        pouet
        {filePdf.length > 0 && (
          <>
            <Document file= {filePdf}>
              <Page pageNumber={1} />
            </Document>

            <Document file={{ url: filePdf }} />
          </>
        )}
      </div>
    );
  }
}

export default ViewPDF;
