const addTODb=id=>{
    let jobCart={};
    const storedCart=localStorage.getItem('job-cart');
    if(storedCart){
        jobCart=JSON.parse(storedCart);
    }

    const quantity=jobCart[id];
    if(quantity){
        const newQuantity=quantity+1;
        jobCart[id]=newQuantity;
    }
    else{
        jobCart[id]=1;
    }
    localStorage.setItem('job-cart',JSON.stringify(jobCart));
}
const getStoredCart=()=>{
    let jobCart={}
    const storedCart=localStorage.getItem('job-cart');
    if(storedCart){
        jobCart=JSON.parse(storedCart);
    } 
    return jobCart;
}
export {addTODb,getStoredCart}