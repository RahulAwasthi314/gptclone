// This file contains placeholder data that you'll be replacing with real data in the Data Fetching chapter:
// https://nextjs.org/learn/dashboard-app/fetching-data

// Users Table
const users = [
  {
    id: 'a10544b2-4001-4271-9855-fec4b6a6442a',
    name: 'Rahul Awasthi',
    email: 'awasthir314@gmail.com',
    password: '123456',
  },
  {
    id: 'a20544b2-4001-4271-9855-bec566a6442a',
    name: 'Jonathan Williams',
    email: 'jonathan@savasana.ai',
    password: '123456',
  }

];

// Chat title: 2 Demo title for each user
const chats = [
  {
    id: 'c1cd1234-4001-4271-9855-fec4b6a6442a',
    chatTitle: 'Chat Title Author Rahul',
    authorId: 'a10544b2-4001-4271-9855-fec4b6a6442a',
  },
  {
    id: 'c234abcd-4001-4271-9855-fec4b6a6442a',
    chatTitle: 'Chat Title Author Rahul Awasthi',
    authorId: 'a10544b2-4001-4271-9855-fec4b6a6442a',
  },
  {
    id: 'c32bc34d-4001-4271-9855-fec4b6a6442a',
    chatTitle: 'Chat Title Author Jonathan',
    authorId: 'a20544b2-4001-4271-9855-bec566a6442a',
  },
  {
    id: 'c42a3cd4-4001-4271-9855-fec4b6a6442a',
    chatTitle: 'Chat Title Author Jonathan Williams',
    authorId: 'a20544b2-4001-4271-9855-bec566a6442a',
  }
]

const messages = [
  // user 1   chat 1   message 1  version only 1
  {
    // 
    msgId: "a1c1b1b1-3913-43ca-823d-3c3709ebdc14",
    versionId: "a1c1b1b1-b113-43ca-823d-3c3709ebdc14",
    content: "c1 author u1",
    response: "u1-c1-m1-v1-r1",
    chatId: "c1cd1234-4001-4271-9855-fec4b6a6442a",
  },

  // user 1  chat 2 message 1   version 3
  {
    // 
    msgId: "a1c2b1b3-3913-43ca-823d-3c3709ebdc14",
    versionId: "a1c2b1b3-b113-43ca-823d-3c3709ebdc14",
    content: "u1-c2-m1-v1-r1",
    response:"u1-c2-m1-v1-r1",
    chatId: "c1cd1234-4001-4271-9855-fec4b6a6442a",
  },
  {
    // 
    msgId: "a1c2b1b3-3913-43ca-823d-3c3709ebdc14",
    versionId: "a1c2b1b3-b213-43ca-823d-3c3709ebdc14",
    content: "u1-c2-m1-v2-r1",
    response:"u1-c2-m1-v2-r1",
    chatId: "c1cd1234-4001-4271-9855-fec4b6a6442a",
  },
  {
    // 
    msgId: "a1c2b1b3-3913-43ca-823d-3c3709ebdc14",
    versionId: "a1c2b1b3-b313-43ca-823d-3c3709ebdc14",
    content: "u1-c2-m1-v3-r1",
    response:"u1-c2-m1-v3-r1",
    chatId: "c1cd1234-4001-4271-9855-fec4b6a6442a",
  },
  
  // // user 2 chat 3 message 2 version 1
  // {
  //   // 
  //   msgId: "u2-c3-m2",
  //   versionId: "u2-c3-m2-v1-r1",
  //   content: "u2-c3-m2-v1-r1",
  //   response: "u2-c3-m2-v1-r1",
  //   chatId: "c234abcd-4001-4271-9855-fec4b6a6442a",
  // },
]

// need to remove
const customers = [
  {
    id: 'd6e15727-9fe1-4961-8c5b-ea44a9bd81aa',
    name: 'Evil Rabbit',
    email: 'evil@rabbit.com',
    image_url: '/customers/evil-rabbit.png',
  },
  {
    id: '3958dc9e-712f-4377-85e9-fec4b6a6442a',
    name: 'Delba de Oliveira',
    email: 'delba@oliveira.com',
    image_url: '/customers/delba-de-oliveira.png',
  },
  {
    id: '3958dc9e-742f-4377-85e9-fec4b6a6442a',
    name: 'Lee Robinson',
    email: 'lee@robinson.com',
    image_url: '/customers/lee-robinson.png',
  },
  {
    id: '76d65c26-f784-44a2-ac19-586678f7c2f2',
    name: 'Michael Novotny',
    email: 'michael@novotny.com',
    image_url: '/customers/michael-novotny.png',
  },
  {
    id: 'CC27C14A-0ACF-4F4A-A6C9-D45682C144B9',
    name: 'Amy Burns',
    email: 'amy@burns.com',
    image_url: '/customers/amy-burns.png',
  },
  {
    id: '13D07535-C59E-4157-A011-F8D2EF4E0CBB',
    name: 'Balazs Orban',
    email: 'balazs@orban.com',
    image_url: '/customers/balazs-orban.png',
  },
];

// need to remove
const invoices = [
  {
    customer_id: customers[0].id,
    amount: 15795,
    status: 'pending',
    date: '2022-12-06',
  },
  {
    customer_id: customers[1].id,
    amount: 20348,
    status: 'pending',
    date: '2022-11-14',
  },
  {
    customer_id: customers[4].id,
    amount: 3040,
    status: 'paid',
    date: '2022-10-29',
  },
  {
    customer_id: customers[3].id,
    amount: 44800,
    status: 'paid',
    date: '2023-09-10',
  },
  {
    customer_id: customers[5].id,
    amount: 34577,
    status: 'pending',
    date: '2023-08-05',
  },
  {
    customer_id: customers[2].id,
    amount: 54246,
    status: 'pending',
    date: '2023-07-16',
  },
  {
    customer_id: customers[0].id,
    amount: 666,
    status: 'pending',
    date: '2023-06-27',
  },
  {
    customer_id: customers[3].id,
    amount: 32545,
    status: 'paid',
    date: '2023-06-09',
  },
  {
    customer_id: customers[4].id,
    amount: 1250,
    status: 'paid',
    date: '2023-06-17',
  },
  {
    customer_id: customers[5].id,
    amount: 8546,
    status: 'paid',
    date: '2023-06-07',
  },
  {
    customer_id: customers[1].id,
    amount: 500,
    status: 'paid',
    date: '2023-08-19',
  },
  {
    customer_id: customers[5].id,
    amount: 8945,
    status: 'paid',
    date: '2023-06-03',
  },
  {
    customer_id: customers[2].id,
    amount: 1000,
    status: 'paid',
    date: '2022-06-05',
  },
];

// need to remove
const revenue = [
  { month: 'Jan', revenue: 2000 },
  { month: 'Feb', revenue: 1800 },
  { month: 'Mar', revenue: 2200 },
  { month: 'Apr', revenue: 2500 },
  { month: 'May', revenue: 2300 },
  { month: 'Jun', revenue: 3200 },
  { month: 'Jul', revenue: 3500 },
  { month: 'Aug', revenue: 3700 },
  { month: 'Sep', revenue: 2500 },
  { month: 'Oct', revenue: 2800 },
  { month: 'Nov', revenue: 3000 },
  { month: 'Dec', revenue: 4800 },
];

export { users, customers, invoices, revenue, chats, messages };
