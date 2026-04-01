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
	let name = formData.get('name')
	let age = Number(formData.get('age'))
	if(!name || !age){
		alert("Please enter valid details.")
		return
	}
    const data = {
        name: name,
        age: age
    }
    promiseFunction(data)
        .then(() => {
            alert(`Welcome, ${data.name}. You can vote.`);
        })
        .catch(()=>{
            alert(`Oh sorry ${data.name}. You aren't old enough.`);
        });
}