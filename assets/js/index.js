$("#add_user").submit( function(event){
    // var createmsg = document.getElementById("create-msg");
    // createmsg.innerHTML = "Data Submitted Successfully!" 
    alert("Data Submitted Successfully!");    //Working 
})  


$("#update_user").submit(function(event){
    event.preventDefault();
    
    var arr = $(this).serializeArray();
    var data = {}
    // console.log(arr);

    arr.map(function(n,i){
        data[n['name']]= n['value'];
    })

    // console.log(data);
    
    var request = {
        url:`http://localhost:8000/api/users/${data.id}`,  //while request on url will get id as req.params.id   net::ERR_NAME_NOT_RESOLVED becoz of http://localhst:8000/api/users/${data.id}
        method:'PUT',
        data:data  //this data will be served as req.body when ajax will make request
    }

    // console.log(request)

    $.ajax(request).done(function(response){    //
        alert("Data Updated Successfuly!");
    })

}) 



// console.log(window.location.pathname);

if(window.location.pathname=='/'){
    $deleteButton = $(".table tbody td a.delete");
    $deleteButton.click(function(){
        var id= $(this).attr("data-id");
        console.log(id);
        request = {
            url:`http://localhost:8000/api/users/${id}`,
            method :'DELETE'    
        }
        if(confirm("Do you really wanna delete this record?")){
        $.ajax(request).done(function (response){
            alert("Data Deleted Successfully");
        })

        }
    
        
    })
}