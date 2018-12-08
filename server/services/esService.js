var client = require('../db/elastic');



exports.createPackage = (package)=> {
    
    return new Promise( (resolve,reject)=> {
        client.index({
            index: 'packages',
            type: 'packages',
            id: package.id,
            body: {
            packageName: package.packageName,
            tests: package.tests,
            consultation: package.consultation,
            price: package.price,
            discount: package.discount,
            fasting: package.fasting,
            labId: package.labId
            }
            },  (err, data)=> {
            if (err) {
            reject(err);
            } else {

            resolve(data);
            }
            });
    });
   }
   
   exports.getPackages = (term)=>{
       console.log(term)
       return new Promise((resolve,reject)=>{
        client.search({
            index: "packages",
            type: 'packages',
            body: {
            "query": {
            "bool": {
                "should": [{

                    "multi_match": {
                    "query": term,
                    "type":       "best_fields",
                    "fields": ["packageName"]
                    }
                    }
                   
                    ]
            }
           
            }
            }
            },(err,data)=>{
                if(err){
                    reject(err);
                }
                else{
                    resolve(data);
                }
            });
       });
   }