import generator from './classes';

generator.configure({
  emitter: {
    name: 'OmniMatrix OÜ',
    street_number: '1',
    street_name: 'Kaarli puiestee',
    zip_code: '10142',
    city: 'Tallinn',
    phone: '01 00 00 00 00',
    mail: 'support@nordikcoin.com',
    website: 'www.nordikcoin.com',
  },
  global: {
    logo: '${__dirname}/../assets/nordikcoin-logo.png',
    order_reference_pattern: '$prefix{OR}$date{YYMM}$separator{-}$id{00000}',
    invoice_reference_pattern: '$prefix{IN}$date{YYMM}$separator{-}$id{00000}',
    order_template: `${__dirname}/../static/order.pug`,
    order_note: '',
    invoice_template: `${__dirname}/../static/invoice.pug`,
    invoice_note: '',
    date: new Date(),
    date_format: 'DD/MM/YYYY',
    lang: 'en',
  },
});

    // logo: 'http://placehold.it/230x70&text=logo',
export default generator;
			