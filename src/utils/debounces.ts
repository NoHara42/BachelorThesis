export function debounce(func, timeout = 300) {
  let timer;
  return (...args) => {    
    clearTimeout(timer);
    timer = setTimeout(() => { 
      console.log("Debounced and sent req");
      func.apply(this, args); }, timeout);
      
  };
}

export const debounceLeading = (func, timeout = 300) => {
  let timer;
  return (...args) => {
    if (!timer) {
      console.log("Debounced and sent req");      
      func.apply(this, args);
    }
    clearTimeout(timer);
    timer = setTimeout(() => {
      timer = undefined;
    }, timeout);
  };
}