# MongoDB 

This guide explains how to install MongoDB on Ubuntu, start the service, access the MongoDB shell, and perform basic CRUD operations.

---

## Install MongoDB on Ubuntu

Open a terminal and follow the official MongoDB installation guide:

https://www.mongodb.com/docs/manual/tutorial/install-mongodb-on-ubuntu/

---

## Start MongoDB Service

After installation, run the following commands:

### Start MongoDB

```bash
sudo systemctl start mongod
```

### Check MongoDB Status

```bash
sudo systemctl status mongod
```
Press **Ctrl + C** to exit the status view

---

## Enter MongoDB Shell

```bash
mongosh
```

---

## Basic MongoDB Commands

### Show Databases

```bash
show databases
```

### Show Collections

```bash
show collections
```

### Switch/Create a Database

```bash
use sample
```

---

## Perform CRUD Operations

### Create (Insert)

#### Insert One Document

```bash
db.myCollection.insertOne({ name: "John Doe", age: 29, city: "New York" })
```

#### Insert Multiple Documents

```bash
db.myCollection.insertMany([
  { name: "Jane Doe", age: 25, city: "Los Angeles" },
  { name: "Mike Smith", age: 32, city: "Chicago" }
])
```

---

### Read (Find)

#### Show All Records in a Collection

```bash
db.myCollection.find()
```

#### Find One Document

```bash
db.myCollection.findOne({ name: "John Doe" })
```

#### Find Multiple Documents (Age > 25)

```bash
db.myCollection.find({ age: { $gt: 25 } })
```

---

### Update

#### Update One Document

```bash
db.myCollection.updateOne(
  { name: "John Doe" },
  { $set: { city: "San Francisco" } }
)
```

#### Update Many Documents (Age < 30)

```bash
db.myCollection.updateMany(
  { age: { $lt: 30 } },
  { $set: { status: "young" } }
)
```

---

### Delete

#### Delete One Document

```bash
db.myCollection.deleteOne({ name: "Mike Smith" })
```

#### Delete Many Documents (Age > 30)

```bash
db.myCollection.deleteMany({ age: { $gt: 30 } })
```

---

## Sort Documents

Sort results in **ascending (1)** or **descending (-1)** order.

```js
db.myCollection.find().sort({ name: 1 })   
```  
```js 
db.myCollection.find().sort({ age: -1 })     
```

---

## Limit Results

Show only a specific number of documents.

```js
db.myCollection.find().limit(2)
```

---

## Count Documents

```js
db.myCollection.countDocuments()
```

---


## Find Only Specific Fields (Projection)

Show only selected fields.

```js
db.myCollection.find({}, { name: 1, age: 1 })
```

Hide `_id` field:

```js
db.myCollection.find({}, { name: 1, _id: 0 })
```

---

## Drop a Collection

Deletes an entire collection permanently.

```js
db.myCollection.drop()
```

---

## Drop a Database

Deletes the current database permanently.

```js
db.dropDatabase()
```

---


## Stop MongoDB Service

To stop MongoDB:

```bash
sudo systemctl stop mongod
```

---

## Install MongoDB Compass (GUI Tool)

MongoDB Compass is the official graphical user interface (GUI) for MongoDB.  
It allows you to visually explore databases, collections, and documents.

---

### Download MongoDB Compass

Visit the official Compass download page:

https://www.mongodb.com/try/download/compass

Choose:

- Platform: **Ubuntu**
- Package: **.deb**

---

### Install Compass Using Terminal

After downloading the `.deb` file, go to the Downloads folder:

```bash
cd ~/Downloads
```

Install Compass:

```bash
sudo dpkg -i mongodb-compass_*.deb
```

---

### Launch MongoDB Compass

You can start Compass using:

```bash
mongodb-compass
```

Or open it from the Applications menu.

---

### Connect Compass to Local MongoDB

In Compass, use the default connection string:

```bash
mongodb://localhost:27017
```

Click **Connect**.

Now you can:

- View databases
- Browse collections
- Insert documents visually
- Run queries easily

```bash
{
  "name": "Neha",
  "age": 25,
  "city": "India"
}
```

---
### Task


1. Create Students table


| Roll No | Name   | Age | Course  | Marks | City        |
|--------:|--------|----:|--------|------:|------------|
| 101     | Rahul  | 20  | BCA    | 85    | Kochi      |
| 102     | Anjali | 21  | BSc CS | 92    | Trivandrum |
| 103     | Arjun  | 19  | BCA    | 78    | Calicut    |
| 104     | Meera  | 22  | BTech  | 88    | Kochi      |
| 105     | Vishnu | 20  | BSc CS | 95    | Kannur     |




2. Find students scoring above 90


3. Find students who scored between 80 and 90


4. Find Students With Marks > 90 OR Age < 20


Hint:
```bash


db.collection.find({
 $or: [
   { condition1 },
   { condition2 }
 ]
})
```
5. Explore MongoDB Atlas





