function chunkifyArray (a, n) {
  if (n < 2) return [a];
  var len = a.length, out = [], i = 0, size;
  if (len % n === 0) {
    size = Math.floor(len / n)
    while (i < len) out.push(a.slice(i, (i += size)))
  } else {
    while (i < len) {
      size = Math.ceil((len - i) / n--)
      out.push(a.slice(i, (i += size)))
    }
  } 
  return out
}

function chunkifyObject (object, n) {
  if (n < 2) return [object];
  let values = Object.values(object), 
        keys = Object.keys(object), 
         out = []; 
  let matrixKeys   = chunkifyArray(keys  ,n)
  let matrixValues = chunkifyArray(values,n)
  matrixKeys.forEach((v,i) => { 
      out[i] = {};
      v.forEach((vv,ii) => {
        out[i][vv] = matrixValues[i][ii];
      })
  });
  return out;
}

function getFilteredObject(data, ...args) { 
  let dataFiltered = {}
  Object.keys(data).filter(function (x){
      let value = true;
      args.forEach(a => value = a == x ? false : value ) 
      if (value) return x;
  }).forEach(function(x){  
    dataFiltered[x] = data[x] 
  }) 
  return dataFiltered;
}  

export {chunkifyArray, 
        chunkifyObject,
        getFilteredObject
       };

