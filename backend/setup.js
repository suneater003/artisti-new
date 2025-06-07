// Connect to your Atlas cluster (run in mongosh)
const conn = new Mongo("mongodb+srv://username:password@cluster0.abc.mongodb.net/artisti?retryWrites=true&w=majority");

// Get database reference
const db = conn.getDB();

// Create collection with schema validation
db.createCollection("contacts", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["name", "email", "message"],
      properties: {
        name: {
          bsonType: "string",
          maxLength: 100,
          description: "must be a string and is required"
        },
        email: {
          bsonType: "string",
          pattern: "^[^\s@]+@[^\s@]+\.[^\s@]+$",
          description: "must be a valid email and is required"
        },
        message: {
          bsonType: "string",
          maxLength: 1000,
          description: "must be a string and is required"
        }
      }
    }
  }
});

// Insert sample data
db.contacts.insertOne({
  name: "Test User",
  email: "test@example.com",
  message: "This is a test message",
  createdAt: new Date(),
  status: "unread"
});

print("✅ Setup complete!");