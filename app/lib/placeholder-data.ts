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
  },
  {
    id: 'c1cd1234-a101-4271-9855-fec4b6a6442a',
    chatTitle: 'Chat Title Author Rahul',
    authorId: 'a10544b2-4001-4271-9855-fec4b6a6442a',
  },
  {
    id: 'c234abcd-a101-4271-9855-fec4b6a6442a',
    chatTitle: 'Chat Title Author Rahul Awasthi',
    authorId: 'a10544b2-4001-4271-9855-fec4b6a6442a',
  },
  {
    id: 'c32bc34d-a201-4271-9855-fec4b6a6442a',
    chatTitle: 'Chat Title Author Jonathan',
    authorId: 'a20544b2-4001-4271-9855-bec566a6442a',
  },
  {
    id: 'c42a3cd4-a201-4271-9855-fec4b6a6442a',
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
  
  // user 2 chat 3 message 2 version 1
  {
    // 
    msgId: "a2a2a2a2-c3c3-a2a1-823d-3c3709ebdc14",
    versionId: "a2a2a2a1-a1a1-a2a1-823d-3c3709ebdc14",
    content: "Version 1 query for user 2; chat 1 ",
    response: "Version 1 query for user 2; chat 1; response ",
    chatId: "c234abcd-4001-4271-9855-fec4b6a6442a",
  },
]

export { users, chats, messages };