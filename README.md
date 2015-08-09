# ContactList

How to Run
------------------------------------------
1 Install node from: http://nodejs.org/<br />
2. Install express library. This is required for serving the static files: > npm install express<br />
3. download mongodb from mongodb.org & install in your home directory (rename mongo.version to mongo)<br />
4. create directory data/db, the mongodb will be storing the data in this directory<br />
	cd /<br />
	sudo mkdir -p /data/db<br />
5. Start the MongoDB server:<br />
	cd mongo/bin<br />
	sudo ./mongod<br />
6. Open MongoDB query window:<br />
	cd mongo/bin<br />
	sudo ./mongo<br />
7. When mongodb query window started create contactlist table:<br />
	use contactlist<br />

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

