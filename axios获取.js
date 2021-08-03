const axios = require('axios');

axios.get('http://139.9.157.89:8088/api/strain_latest',{
    params:{
        pageSize: 5
    }

})
.then(function(response){
 console.log('---------------成功-------------');
 console.log(response)
})

.catch(function(error){
    console.log('---------------error-----------------');
    console.log(error)
   });
   