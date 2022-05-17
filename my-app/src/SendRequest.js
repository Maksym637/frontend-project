export function sendRequest(method, url, user = null, password = null, body = null) {
    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
  
      xhr.open(method, url);
  
      xhr.responseType = "json";

      if (user && password) {
        const authorizationBasic = window.btoa(`${user}:${password}`);
        xhr.setRequestHeader("Authorization", `Basic ${authorizationBasic}`);
      }
      
      xhr.setRequestHeader("Content-Type", "application/json");
  
      xhr.onload = () => {
        if (xhr.status >= 400) {
          reject(xhr.response);
        } else {
          resolve(xhr.response);
        }
      };
  
      xhr.onerror = () => {
        reject(xhr.response);
      };
  
      xhr.send(JSON.stringify(body));
    });
}
