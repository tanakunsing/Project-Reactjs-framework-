class ApiConection {

	constructor() {
		let thisBaseUrl = process.env.REACT_APP_API_URL;

		this._baseUrl = thisBaseUrl;

	}
	async getData(url) {
		
		let myHeaders = new Headers();
		myHeaders.append("Content-Type", "application/json");
        //myHeaders.append("Authorization", `bearer ${token}`);

		let requestOptions = {
            method: 'GET',
            headers: myHeaders,
            mode:'cors',
            redirect: 'follow'
          };

		try {
			const response = await fetch(`${this._baseUrl}/${url}`, requestOptions);

			if (!response.ok)
				return ({ status: false, name: `${response.statusText}`, message: `${await response.text()}` });

			let data = await response.json();

			return (data);

		} catch (error) {
			return ({ status: false, message: error });
		}



	}
	async getDatas(url) {
		
		let myHeaders = new Headers();
		myHeaders.append("Content-Type", "application/json");
        //myHeaders.append("Authorization", `bearer ${token}`);

		let requestOptions = {
            method: 'GET',
            headers: myHeaders,
            mode:'cors',
            redirect: 'follow'
          };

		try {
			const response = await fetch(`${this._baseUrl}/${url}`, requestOptions);

			if (!response.ok)
				return ({ status: false, name: `${response.statusText}`, message: `${await response.text()}` });

			let data = response.json();

			return (data);

		} catch (error) {
			return ({ status: false, message: error });
		}



	}
	async getproduct(url) {
		
		let myHeaders = new Headers();
		myHeaders.append("Content-Type", "application/json");
        //myHeaders.append("Authorization", `bearer ${token}`);

		let requestOptions = {
            method: 'GET',
            headers: myHeaders,
            mode:'cors',
            redirect: 'follow'
          };

		try {
			const response = await fetch(`${this._baseUrl}/${url}`, requestOptions);

			if (!response.ok)
				return ({ status: false, name: `${response.statusText}`, message: `${await response.text()}` });

			let data = await response.json();

			return (data);
			
		} catch (error) {
			return ({ status: false, message: error });
		}



	}
	
	async postData(url,payLoad){

		let myHeaders = new Headers();
		myHeaders.append("Content-Type", "application/json");

        let raw = JSON.stringify(payLoad);

		//console.log(raw);
        let requestOptions = {
            method: 'POST',
            headers: myHeaders,
            mode:'cors',
            body: raw,
            redirect: 'follow'
          };

		  try{
			const response = await fetch(`${this._baseUrl}/${url}`, requestOptions);

			if(!response.ok)
				return ({status:false,name:`${response.statusText}`,message:`${ await response.text()}`});
  
			let data = await response.json();
		  
		  	return({status:true,message:'ok',data:data});

		  }catch(error){
			return({status:false,message:error});
		  }
          
	}
	
	async postimage(url,payLoad){

		let myHeaders = new Headers();	

        let raw = payLoad;
	
        let requestOptions = {
            method: 'POST',
            headers: myHeaders,
            mode:'cors',
            body: raw,
            redirect: 'follow'
          };
		  try{
			const response = await fetch(`${this._baseUrl}/${url}`, requestOptions);

			if(!response.ok)
				return ({status:false,name:`${response.statusText}`,message:`${ await response.text()}`});
  
			let data = await response.json();
		  
		  	return({status:true,message:'ok',data:data});

		  }catch(error){

			return({status:false,message:error});
		  }
          
	}


}

export default ApiConection;