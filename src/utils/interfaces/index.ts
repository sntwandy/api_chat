/**
 *
 */

// User interface
export interface User {
  name: string;
  registerDate: Date;
};

// Message interface
export interface Chat {
  users: [string]
}

// Chats interface
export interface ChatM {
  users: string[]
}