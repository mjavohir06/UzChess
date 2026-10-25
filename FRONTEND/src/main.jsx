import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  // <BrowserRouter>
  
    <App />

  // </BrowserRouter> 
  
)

//  html-to-url
// const ref = useRef(null)
//   const [url, seturl] = useState()
//   useEffect(() => {
//     toPng(ref.current)
//       .then((url2) => {
//         const arr = url2.split(',');
//         const mime = arr[0].match(/:(.*?);/)[1];
//         const bstr = atob(arr[1]);
//         let n = bstr.length;
//         const u8arr = new Uint8Array(n);

//         while (n--) {
//           u8arr[n] = bstr.charCodeAt(n);
//         }

//         const blob = new Blob([u8arr], { type: mime });
//         seturl(URL.createObjectURL(blob))
//         console.log(URL.createObjectURL(blob));
        
//       })


//       .catch((err) => console.log(err))


//   }, [])