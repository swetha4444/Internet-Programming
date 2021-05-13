var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/Patient_Details";

MongoClient.connect(url, {useUnifiedTopology: true }, function(err, db) 
{
    if (err) 
        throw err;
    console.log("Database Connected");
    var dbObject = db.db("Patient_Details");
    var myobj = { 
        Name:'Swetha Saseendran',
        Age:21,
        ID:4,
        Gender:'Female',
        Address:'Kodambakkam',
        Marital_Status:'Single',
        DateOfVisit: Date() 
    };

    //* INSERT
    dbObject.collection("patients").insertOne(myobj, function(err, res) 
    {
        if (err) throw err;
        console.log("Inserting record");
        dbObject.collection('patients').find().toArray(function(err,res)
        {
            if(err) throw err;
            console.log(res);
        });

        //* UPDATE
        var upd_url = { Name:"Swetha Saseendran" };
        var upd_values = { $set: {Marital_Status:"Married"} };
        dbObject.collection("patients").updateOne(upd_url, upd_values, function(err, res) 
        {
            if (err) 
                throw err;
            console.log("Updated");

            //* SEARCH
            dbObject.collection('patients').find().toArray(function(err,res)
            {
                if(err) 
                    throw err;
                console.log(res);
                console.log("Record Found");

                //* DELETE
                
                dbObject.collection('patients').deleteOne({Name:'murali'},function(err,res)
                {
                    if(err) 
                        throw err
                    console.log('Deleted');
                    db.close();
                });
                
            });
            
        });

    });
});