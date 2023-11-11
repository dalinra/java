var btntable=document.getElementById('btntable');

var id =document.getElementById('text-id');
var Name =document.getElementById('text-name');
var qty =document.getElementById('text-qty');
var price =document.getElementById('text-price');
var total =document.getElementById('text-total');

var index='';
var Add=document.getElementById('btnAdd');
var Update=document.getElementById('btnUpdate');
const item=[
    {
        'id':'1','name':'coca','qty':'5','price':'2000','total':'2500'
    },
    // {
    //     'id':'2','name':'krud','qty':'10','price':'1000','total':'1500'
    // },
    // {
    //     'id':'3','name':'string','qty':'7','price':'500','total':'600'
    // },
];
id.value=item.length+1;
getData=()=>{
    var txt='' 
    var grandtotal=0;
    txt +=`
    <tr>
         <th>ID</th>
         <th>Name</th>
         <th>Qty</th>
         <th>Price</th>
         <th>Total</th>
         <th>Action</th>
    </tr>
    `;
//data join table
    
    for(let i in item){
        txt +=`
        <tr>
            <td>${item[i]['id']}</td>
            <td>${item[i]['name']}</td>
            <td>${item[i]['qty']}</td>
            <td>${item[i]['price']}</td>
            <td>${item[i]['total']}</td>
            <td>
            <input type="button" value="Edit" class="btn btnEdit btn-danger">
            <input type="button" value="Delete" id="btnDelete" class="btn btn-primary">
            </td>
        </tr>
        `;
        
        grandtotal+=parseFloat(item[i]['total']);
    }
    var trtable='';
    trtable=`
        <tr>
            <td colspan="4" align='right'>total</td>
            <td>${grandtotal}</td>
        </tr>
    `;
    // edit data
    
    btntable.innerHTML=txt+trtable ; 
    var btnEdite= document.querySelectorAll('.btnEdit');
    btnEdite.forEach((e,i)=>{
    e.addEventListener('click',function(){
        id.value=item[i]['id'],
        Name .value=item[i]['name'],
        qty.value=item[i]['qty'],
        price.value=item[i]['price'],
        total.value=item[i]['total'],
        index=i; 
        Add.style.display="none";
        Update.style.display="block"
    });
});
//    button delete     
     var btnDelete=document.querySelectorAll('#btnDelete');
     btnDelete.forEach((e,i)=>{
        e.addEventListener('click',function(){
            item.splice(0,1);
            getData();
        })
     }) 
}
getData();
//add data to table
document.getElementById('btnAdd').addEventListener('click',function(){
    item.push(
        {
            'id': id.value,
            'name':Name.value,
            'qty':qty.value,
            'price':price.value,
            'total':total.value,
        }
         
    );
    getData();
    clearData();
    id.value=item.length+1;
});
//clear data 
clearData=()=>{
    id.value="";
    Name.value="";
    qty.value="";
    price.value="";
    total.value="";
}
//result
getTotal=()=>{
    total.value=qty.value*price.value;
}
qty.addEventListener('keyup',function(){
    getTotal();
});
price.addEventListener('keyup',function(){
    getTotal();
});

//button update
document.getElementById('btnUpdate').addEventListener('click',function(){
    item[index]['name']=Name.value;
    item[index]['qty']=qty.value;
    item[index]['price']=price.value;
    item[index]['total']=total.value;
    getData();
    Add.style.display="block";
    Update.style.display="none"
    clearData();
});