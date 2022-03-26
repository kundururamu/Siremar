
class Validation {
     emailValidation (value){
        const regex =
          /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        return !(regex.test(value) === false);
      };
       validation(data, formValue) {
        if (data === "") {
          alert(`All fields should be filled.`);
          setError(!isError);
          console.log(formValue);
          break;
        }
      };
}






