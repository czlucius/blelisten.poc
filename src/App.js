import logo from './logo.svg';
import './App.css';

function App() {

  const options = {
    acceptAllAdvertisements: true
  }
  async function onbtn() {
    try {
      const scan = await navigator.bluetooth.requestLEScan(options);
      navigator.bluetooth.addEventListener('advertisementreceived', event => {
        const uuids = event.uuids
        for (const eachuuid of uuids) {
          const myUuid = '63491bae-64fe-11ed-9022-0242ac120002' // Target/intended
          console.log("now @", eachuuid)
          if (myUuid === eachuuid) {
            alert("UUID detected")
          }

        }
      });
    } catch(err) {
      alert("error! " + err)
    }

  }



  return (
    <div className="App">
      <h1>Please check <code>console.log</code></h1>
      <button onClick={onbtn}>Listen for advertisements</button>

    </div>
  );
}

export default App;
