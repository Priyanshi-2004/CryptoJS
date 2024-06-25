// Import React and Crypto-JS
import React, { useState } from 'react';
import CryptoJS from 'crypto-js';

// Example React component
const CryptoExample = () => {
  const [text, setText] = useState('');
  const [hashedText, setHashedText] = useState('');
  const [encryptedText, setEncryptedText] = useState('');
  const [decryptedText, setDecryptedText] = useState('');

  const secretKey = 'my-secret-key';

  // Handle hashing
  const handleHash = () => {
    const hash = CryptoJS.SHA256(text).toString();
    setHashedText(hash);
  };

  // Handle encryption
  const handleEncrypt = () => {
    const ciphertext = CryptoJS.AES.encrypt(text, secretKey).toString();
    setEncryptedText(ciphertext);
  };

  // Handle decryption
  const handleDecrypt = () => {
    const bytes = CryptoJS.AES.decrypt(encryptedText, secretKey);
    const originalText = bytes.toString(CryptoJS.enc.Utf8);
    setDecryptedText(originalText);
  };

  return (
    <>
    <div className='bg-red-900 p-5'>
    <div className='bg-blue-400 p-5 m-5 rounded-500' style={{width:"800px", height:"600px",marginLeft:"400px"}}>
        <div className='d-flex' style={{width:"600px",height:"50px"}}>
            <label className='font-bold'>Enter Text: </label>
      <input className='ml-4 text-center'  style={{width:"400px",height:"50px"}} type="text" value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter text"  /></div><br/>
      <button className='bg-red-500 m-5 p-2 font-bold' onClick={handleHash}>Hash</button>
      <button className='bg-red-500 m-5 p-2 font-bold' onClick={handleEncrypt}>Encrypt</button>
      <button className='bg-red-500 m-5 p-2 font-bold' onClick={handleDecrypt}>Decrypt</button>

      <div>
        <p className='font-bold'>Hashed Text: <br/><p className='bg-blue-300' style={{overflow:""}}>{hashedText}</p></p><br/>
        <p  className='font-bold'>Encrypted Text: <br/><p className='bg-blue-300'>{encryptedText}</p></p><br/>
        <p className='font-bold'>Decrypted Text: <br/><p className='bg-blue-300'>{decryptedText}</p></p>
      </div>
    </div>
    </div>
    </>
  );
};

export default CryptoExample;
