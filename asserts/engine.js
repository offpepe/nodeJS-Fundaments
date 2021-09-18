const receiveData = async () => {
  const rawData = await fetch('http://localhost:3001/data');
  const data = await rawData.json();
  console.log(data);
};

receiveData();