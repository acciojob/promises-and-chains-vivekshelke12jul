//your JS code here. If required.

const promiseFunction = (data) => {
    console.log('Processing data...');
    console.log(data);
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            if(data.age<18){
                reject();
            }else{
                resolve();
            }
        }, 4000);
    });
}

const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = {
        name: formData.get('name'),
        age: Number(formData.get('age'))
    }
    promiseFunction(data)
        .then(() => {
            alert(`Welcome, ${data.name}. You can vote.`);
        })
        .catch(()=>{
            alert(`Oh sorry ${data.name}. You aren't old enough.`);
        });
}