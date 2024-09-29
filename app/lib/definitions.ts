// User Model
export type User = {
  id: string;
  name: string;
  email: string;
  password: string;
};

// Chat Model
export type Chat = {
  id: string;
  chatTitle: string;
  authorId: string;
};

export type ChatRow = {
  id: string;
  chattitle: string;
  authorid: string;
};

// Message Model
export type Message = {
  msgId: string;
  versionId: string;
  content: string;
  response: string | undefined;
  chatId: string;
};

export type MessageRow = {
  msgid: string;
  versionid: string;
  content: string;
  response: string | undefined;
  chatid: string;
}

export type GroupedMessages = {
  [msgId: string]: {
    [versionId: string]: Message[];
  };
};