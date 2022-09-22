const URL = "https://restcountries.com/v3.1";

export default  {

     async getData(path) {
       let response = await  fetch(`${URL}/${path}`);
       return await response.json();
    }
}