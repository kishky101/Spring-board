import { useState } from "react";

function ClipboardCopy({ copyText }) {
    const [isCopied, setIsCopied] = useState(false);
  
    // This is the function we wrote earlier
    async function copyTextToClipboard(text) {
      if ('clipboard' in navigator) {
        return await navigator.clipboard.writeText(text);
      } else {
        return ;
      }
    }
  
    // onClick handler function for the copy button
    const handleCopyClick = () => {
      // Asynchronously call copyTextToClipboard
      copyTextToClipboard(copyText)
        .then(() => {
          // If successful, update the isCopied state value
          setIsCopied(true);
          setTimeout(() => {
            setIsCopied(false);
          }, 1500);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  
    return (
      <div style={{whiteSpace: 'nowrap'}}>
        <span style={{fontWeight: 'bold'}}>{copyText}</span>
        {/* Bind our handler function to the onClick button property */}
        <button onClick={handleCopyClick} style={{background: 'var(--light-brown-clr)', border: 'none', color: 'var(--default-text-clr)', borderRadius: '2px', padding: '5px', marginLeft: '5px', textTransform: 'uppercase', }}>
          <span>{isCopied ? 'Copied!' : 'Copy'}</span>
        </button>
      </div>
    );
  }


  export default ClipboardCopy;