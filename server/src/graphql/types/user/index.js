module.exports = `
  type User {
    id: String!
    name: String!
    email: String!
  }
  type Query {
    user(id: String!): User
    users: [User]
    user_name(name: String!): User
  }
  type Mutation {
    addUser(id: String!, name: String!, email: String): User
    editUser(id: String, name: String, email: String): User
    deleteUser(id: String, name: String, email: String): User
  }
`
