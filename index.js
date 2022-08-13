 
 async function gv(){
    const prevalue =  await contract.get();
    console.log(prevalue);
    document.getElementById("xbalance").innerHTML = "   " + prevalue;
 }
 
 async function connectwallet(){
    await provider.send("eth_requestAccounts", []);
    
 }

 function setvalue(){
    var setv = Number(document.getElementById("xvalue").value)
    contract.set(setv);
     document.getElementById("xvalue").value = ''
    
 }

function relo() {
    if (typeof window.ethereum !== 'undefined') {
        document.getElementById("metamask").style.color = 'green';
        document.getElementById("metamask").innerHTML="MetaMask is installed &#9989"
      }
    else{
        document.getElementById("metamask").style.color = 'red';
        document.getElementById("metamask").innerHTML="MetaMask is not installed &#10060"
       
    }

    provider = new ethers.providers.Web3Provider(window.ethereum)

    var signer = provider.getSigner()

    connectwallet()
    
    

    const contractaddress= '0x4931d092E8d05bB075Ea946ca884c8d2323A1d42'
    const ABI = [
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "x",
                    "type": "uint256"
                }
            ],
            "name": "set",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "get",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        }
    ]
    contract = new ethers.Contract(contractaddress, ABI, signer);
    console.log("first");
    gv()
    
        // const prevalue =  contract.get()
        // console.log(prevalue)
        // document.getElementById("xbalance").innerHTML = "Last value" + prevalue

    


 }
       