

const searchSecretary = () => {
    const inputField = document.getElementById('input-field');
    const inputValue = inputField.value;
    const searchValue = inputField.value.toLocaleLowerCase()
    inputField.value = "";
    console.log(inputValue);

    const jayed = 'img/jayed.jpg';
    const nipun = 'img/nipun.jpg';
    const ilias = 'img/elias.jpg';
    const simon = 'img/simon.jpg';
    const format = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
    
    let type;
    if(format.test(searchValue)){
        type = `
        <p>আমাকে স্পেশাল চিহ্ন দিবানা !!</p>
        `;
    }
    else if(searchValue === ''){
        type = `
        <p>আমাকে খালি ঘর দিবানা !!</p>
        `;
    }
    else if(isNaN(searchValue) === false){
        type = `
        <p>আমাকে নম্বর দিবানা !!</p>
        `;
    } else if(searchValue === 'jayed'){
        type = `
        <img src="${jayed}" />
        <p>আমি জায়েদ খান, আমার হাইটকোর্ট-এর  রায়ের  কপি আছে, আমিই সেক্রেটারি !!</p>
        `;
    } else if(searchValue === 'nipun'){
        type = `
        <img src="${nipun}" />
        <p>আমি নিপুন আক্তার, আমারও হাইটকোর্ট-এর  রায়ের  কপি আছে, আমিই সেক্রেটারি !!!</p>
        `;
    } else if(searchValue === 'ilias'){
        type = `
        <img src="${ilias}" />
        <p>আমি ইলিয়াস কাঞ্চন, গুটি কে চালায় বুঝতাসিনা, চোখ থাকিতে দুনিয়া আন্ধ্যার দেখতেসি, আমি চিপায় পইড়া গেসি !!!</p>
        `;
    } else{
        type = `
        <img src="${simon}" />
        এর মধ্যে আমাকে জড়ালে কেন? <br>
        কোথাও সুখ নাই !!!
        `;
    }
    document.getElementById('text').innerHTML = type;
}

