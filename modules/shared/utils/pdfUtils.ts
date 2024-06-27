// try here http://pdfmake.org/playground.html
import * as pdfMake from 'pdfmake/build/pdfmake';
import * as pdfFonts from 'pdfmake/build/vfs_fonts';
import { TDocumentDefinitions } from 'pdfmake/interfaces';
import Logo from "@/public/logo1.png"
import { createOrderParams } from './types';
// try here http://pdfmake.org/playground.html




  
  // Define the content for the PDF
  (pdfMake as any).vfs = pdfFonts.pdfMake.vfs;
  
  // Function to generate and download the PDF
  export const generatePDF = (order : createOrderParams) => {
    const docDefinition :TDocumentDefinitions  = {
      content: [
        {
          columns: [
            // {
            //   image: "" ,
            //   width: 150,
            // },
            [
              {
                text: 'Receipt',
                color: '#333333',
                // width: '*',
                fontSize: 28,
                bold: true,
                alignment: 'right',
                margin: [0, 0, 0, 15],
              },
              {
                stack: [
                  {
                    columns: [
                      {
                        text: 'Receipt No.',
                        color: '#aaaaab',
                        bold: true,
                        width: '*',
                        fontSize: 12,
                        alignment: 'right',
                      },
                      {
                        text: '00001',
                        bold: true,
                        color: '#333333',
                        fontSize: 12,
                        alignment: 'right',
                        width: 100,
                      },
                    ],
                  },
                  {
                    columns: [
                      {
                        text: 'Date Issued',
                        color: '#aaaaab',
                        bold: true,
                        width: '*',
                        fontSize: 12,
                        alignment: 'right',
                      },
                      {
                        text: `${new Date().toLocaleDateString("en-in")}`,
                        bold: true,
                        color: '#333333',
                        fontSize: 12,
                        alignment: 'right',
                        width: 100,
                      },
                    ],
                  },
                  {
                    columns: [
                      {
                        text: 'Status',
                        color: '#aaaaab',
                        bold: true,
                        fontSize: 12,
                        alignment: 'right',
                        width: '*',
                      },
                      {
                        text: 'PAID',
                        bold: true,
                        fontSize: 14,
                        alignment: 'right',
                        color: 'green',
                        width: 100,
                      },
                    ],
                  },
                ],
              },
            ],
          ],
        },
        {
          columns: [
            {
              text: 'From',
              color: '#aaaaab',
              bold: true,
              fontSize: 14,
              alignment: 'left',
              margin: [0, 20, 0, 5],
            },
            {
              text: 'To',
              color: '#aaaaab',
              bold: true,
              fontSize: 14,
              alignment: 'left',
              margin: [0, 20, 0, 5],
            },
          ],
        },
        {
          columns: [
            {
              text: "Bookwala",
              bold: true,
              color: '#333333',
              alignment: 'left',
            },
            {
              text: `${order.first_name} ${order.last_name}` ,
              bold: true,
              color: '#333333',
              alignment: 'left',
            },
          ],
        },
        {
          columns: [
            {
              text: 'Address',
              color: '#aaaaab',
              bold: true,
              margin: [0, 7, 0, 3],
            },
            {
              text: 'Address',
              color: '#aaaaab',
              bold: true,
              margin: [0, 7, 0, 3],
            },
          ],
        },
        {
          columns: [
            {
              text: 'NIT Silchar',
              style: 'invoiceBillingAddress',
            },
            {
              text: `${order.billing_address.address}`,
              style: 'invoiceBillingAddress',
            },
          ],
        },
        '\n\n',
        {
          // width: '100%',
          alignment: 'center',
          text: 'Invoice No. 123',
          bold: true,
          margin: [0, 10, 0, 10],
          fontSize: 15,
        },
        {
          layout: {
            defaultBorder: false,
            hLineWidth: function() {
              return 1;
            },
            vLineWidth: function() {
              return 1;
            },
            hLineColor: function(i ) {
              if (i === 1 || i === 0) {
                return '#bfdde8';
              }
              return '#eaeaea';
            },
            vLineColor: function() {
              return '#eaeaea';
            },
            hLineStyle: function() {
              // if (i === 0 || i === node.table.body.length) {
              return null;
              //}
            },
            // vLineStyle: function (i, node) { return {dash: { length: 10, space: 4 }}; },
            paddingLeft: function() {
              return 10;
            },
            paddingRight: function() {
              return 10;
            },
            paddingTop: function() {
              return 2;
            },
            paddingBottom: function() {
              return 2;
            },
            fillColor: function() {
              return '#fff';
            },
          },
          table: {
            headerRows: 1,
            widths: ['*', 80],
            body: [
              [
                {
                  text: 'ITEM DESCRIPTION',
                  fillColor: '#eaf2f5',
                  border: [false, true, false, true],
                  margin: [0, 5, 0, 5],
                  textTransform: 'uppercase',
                },
                {
                  text: 'ITEM TOTAL',
                  border: [false, true, false, true],
                  alignment: 'right',
                  fillColor: '#eaf2f5',
                  margin: [0, 5, 0, 5],
                  textTransform: 'uppercase',
                },
              ],
              ...order.order_items.map((item)=> (
                [
                  {
                    text: `${item.product_name}`,
                    border: [false, false, false, true],
                    margin: [0, 5, 0, 5],
                    alignment: 'left',
                  },
                  {
                    border: [false, false, false, true],
                    text: "$000",
                    fillColor: '#f5f5f5',
                    alignment: 'right',
                    margin: [0, 5, 0, 5],
                  },
                ]
              )),
            ],
          },
        },
        '\n',
        '\n\n',
        {
          layout: {
            defaultBorder: false,
            hLineWidth: function() {
              return 1;
            },
            vLineWidth: function() {
              return 1;
            },
            hLineColor: function() {
              return '#eaeaea';
            },
            vLineColor: function() {
              return '#eaeaea';
            },
            hLineStyle: function() {
              // if (i === 0 || i === node.table.body.length) {
              return null;
              //}
            },
            // vLineStyle: function (i, node) { return {dash: { length: 10, space: 4 }}; },
            paddingLeft: function() {
              return 10;
            },
            paddingRight: function() {
              return 10;
            },
            paddingTop: function() {
              return 3;
            },
            paddingBottom: function() {
              return 3;
            },
            fillColor: function() {
              return '#fff';
            },
          },
          table: {
            headerRows: 1,
            widths: ['*', 'auto'],
            body: [
              [
                {
                  text: 'Payment Subtotal',
                  border: [false, true, false, true],
                  alignment: 'right',
                  margin: [0, 5, 0, 5],
                },
                {
                  border: [false, true, false, true],
                  text: `${order.price}`,
                  alignment: 'right',
                  fillColor: '#f5f5f5',
                  margin: [0, 5, 0, 5],
                },
              ],
              // [
              //   {
              //     text: 'Payment Processing Fee',
              //     border: [false, false, false, true],
              //     alignment: 'right',
              //     margin: [0, 5, 0, 5],
              //   },
              //   {
              //     text: '$999.99',
              //     border: [false, false, false, true],
              //     fillColor: '#f5f5f5',
              //     alignment: 'right',
              //     margin: [0, 5, 0, 5],
              //   },
              // ],
              [
                {
                  text: 'Total Amount',
                  bold: true,
                  fontSize: 20,
                  alignment: 'right',
                  border: [false, false, false, true],
                  margin: [0, 5, 0, 5],
                },
                {
                  text: `USD ${order.price}`,
                  bold: true,
                  fontSize: 20,
                  alignment: 'right',
                  border: [false, false, false, true],
                  fillColor: '#f5f5f5',
                  margin: [0, 5, 0, 5],
                },
              ],
            ],
          },
        },
        '\n\n',
        // {
        //   text: 'NOTES',
        //   style: 'notesTitle',
        // },
        // {
        //   text: 'Some notes goes here \n Notes second line',
        //   style: 'notesText',
        // },
      ],
      styles: {
        notesTitle: {
          fontSize: 10,
          bold: true,
          margin: [0, 50, 0, 3],
        },
        notesText: {
          fontSize: 10,
        },
      },
      defaultStyle: {
        columnGap: 20,
        //font: 'Quicksand',
      },
    };
      pdfMake.createPdf(docDefinition).download('invoice.pdf');
  };
  

  
  