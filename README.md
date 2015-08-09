# ContactList

How to Run
------------------------------------------
1 Install node from: http://nodejs.org/
2. Install express library. This is required for serving the static files: > npm install express
3. download mongodb from mongodb.org & install in your home directory (rename mongo.version to mongo)
4. create directory data/db, the mongodb will be storing the data in this directory
	cd /
	sudo mkdir -p /data/db
5. Start the MongoDB server:
	cd mongo/bin
	sudo ./mongod
6. Open MongoDB query window:
	cd mongo/bin
	sudo ./mongo
7. When mongodb query window started create contactlist table:
	use contactlist

	MongoDB useful commands:
		show available tables: 			> show dbs
		add values:						> db.contactlist.save([{name:"Vardan", email:"vardan@mail.com", phone:"0123456789"}])
		display values:					> db.contactlist.find().pretty()
		delete a record:				> db.contactlist.remove({name:"Vardan"})
		to drop the db (attention)		> db.dropDatabase()

8. Install mongojs so the node can communicate with mongodb: > npm install mongojs
9. Install body-parser. The node will require this library for parsing the post method: > npm install body-parser
10. to start the node server: > node server
11. to stop the node server: > Ctrl+c
12. Open the project in browser: > http://localhost:3000

