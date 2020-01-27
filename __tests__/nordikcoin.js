// import fs from 'fs';
import invoiceIt from '../src';

jasmine.DEFAULT_TIMEOUT_INTERVAL = 90000;
jest.setTimeout(90000);

describe('Invoice', () => {
  const htmlPathfile = './nordikcoin.html';
  // const pdfPathfile = './nordikcoin.pdf';
  // const pdfPathfileAdd = './nordikcoin.pdf';

  const seedData = {
    id: '1111',
    customerId: '22222',
    txId: '333',
    customerName: 'Erling Løken Andersen',
    authMethod: 'BankID',
    paymentMethod: '4925********5722 (VISA)',
    paymentTerms: 'Due on receipt - deposit has been processed.',
    invoiceDesc: 'BTC',
    invoiceAmt: '1.00000',
    invoiceExRate: '$15.000 / BTC',
    invoiceVAT: '0 NOK',
    invoiceSubtotal: '134.58232 NOK',
    invoiceFees: '523,4 NOK',
    invoiceTotal: '140.000 NOK',
  };

  const headerRef = {
    key: 'invoice_header_reference_value',
    value: seedData.id,
  };

  const recipient = {}; // Intentionally empty

  const customerName = {
    key: 'customer_name_value',
    value: seedData.customerName,
  };

  const customerId = {
    key: 'customer_id_value',
    value: seedData.customerId,
  };

  const authMethod = {
    key: 'authMethod_value',
    value: seedData.authMethod,
  };

  const paymentMethod = {
    key: 'paymentMethod_value',
    value: seedData.paymentMethod,
  };

  const paymentTerms = {
    key: 'paymentTerms_value',
    value: seedData.paymentTerms,
  };

  const emitter = {
    name: 'OmniMatrix OÜ',
    street_number: '1',
    street_name: 'Kaarli puiestee',
    zip_code: '10142',
    city: 'Tallinn',
    phone: '14674630',
    mail: 'support@nordikcoin.com',
    website: 'www.nordikcoin.com',
  };

  const paymentId = {
    key: 'invoice_header_paymentId_value',
    value: seedData.txId,
  };

  const regNumber = {
    key: 'reg_number_value',
    value: '14674630',
  };

  const invoiceDesc = {
    key: 'invoice_desc_value',
    value: seedData.invoiceDesc,
  };

  const invoiceAmt = {
    key: 'invoice_amt_value',
    value: seedData.invoiceAmt,
  };

  const invoiceExRate = {
    key: 'invoice_ex_rate_value',
    value: seedData.invoiceExRate,
  };

  const invoiceVAT = {
    key: 'invoice_vat_value',
    value: seedData.invoiceVAT,
  };

  const invoiceSubtotal = {
    key: 'invoice_subtotal_value',
    value: seedData.invoiceSubtotal,
  };

  const invoiceFees = {
    key: 'invoice_fees_value',
    value: seedData.invoiceFees,
  };

  const invoiceTotal = {
    key: 'invoice_total_value',
    value: seedData.invoiceTotal,
  };

  const phrases = [
    'invoice_header_paymentId',
    paymentId,
    'invoice_header_reference',
    headerRef,
    'reg_number',
    regNumber,
    'customer_name',
    customerName,
    'customer_id',
    customerId,
    'authMethod',
    authMethod,
    'paymentMethod',
    paymentMethod,
    'paymentTerms',
    paymentTerms,
    'invoiceDesc',
    invoiceDesc,
    'invoiceAmt',
    invoiceAmt,
    'invoiceExRate',
    invoiceExRate,
    'invoiceVAT',
    invoiceVAT,
    'invoiceSubtotal',
    invoiceSubtotal,
    'invoiceFees',
    invoiceFees,
    'invoiceTotal',
    invoiceTotal,
  ];

  it('Export to HTML file with additional fields', (done) => {
    const invoice = invoiceIt.create(recipient, emitter);
    invoice.getInvoice(phrases).toHTML().toFile(htmlPathfile).then(() => done());
  });
});
